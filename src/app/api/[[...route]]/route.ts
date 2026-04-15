import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { cors } from 'hono/cors';
import { zValidator } from '@hono/zod-validator';
import { ContactFormSchema } from '@/shared/types';
import { z } from 'zod';
import { createOrUpdateContact, trackBookingLead, subscribeContact, submitToHubSpotForm } from '@/lib/hubspot';

const app = new Hono().basePath('/api');

const ALLOWED_ORIGINS = [
  'https://ekabalance.com',
  'https://www.ekabalance.com',
  ...(process.env.NODE_ENV === 'development' ? ['http://localhost:3000', 'http://192.168.31.121:3000'] : []),
];

// CORS middleware
app.use('*', cors({
  origin: (origin) => ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type'],
  credentials: true,
}));

// Simple in-memory rate limiter for contact form
const contactRateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // 5 submissions per hour per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = contactRateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    contactRateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

/**
 * ROUTES
 */

app.post('/contact', zValidator('json', ContactFormSchema), async (c) => {
  try {
    // Rate limiting
    const clientIp = c.req.header('x-forwarded-for') || c.req.header('x-real-ip') || 'unknown';
    if (!checkRateLimit(clientIp)) {
      return c.json({ error: 'Too many submissions. Please try again later.' }, 429);
    }

    const data = c.req.valid('json');

    console.log('[contact] New submission received:', {
      service: data.service,
      preferred_contact: data.preferred_contact || 'email',
      preferred_time: data.preferred_time,
      ts: new Date().toISOString(),
    });

    // Push to HubSpot CRM (non-blocking — failure doesn't affect user)
    createOrUpdateContact({
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
      preferred_contact: data.preferred_contact,
      preferred_time: data.preferred_time,
      source: data.source,
      lead_source_type: 'contact_form',
    }).catch((err) => console.error('[contact] HubSpot push failed:', err));

    // Also submit via HubSpot Forms API for attribution analytics
    const formGuid = process.env.NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_GUID;
    if (formGuid) {
      submitToHubSpotForm(
        formGuid,
        [
          { name: 'firstname', value: data.name.split(' ')[0] },
          { name: 'lastname', value: data.name.split(' ').slice(1).join(' ') },
          { name: 'email', value: data.email },
          { name: 'phone', value: data.phone },
          { name: 'message', value: data.message },
        ],
        {
          pageUri: c.req.header('referer') || 'https://ekabalance.com/contact',
          pageName: 'Contact Form',
        }
      ).catch((err) => console.error('[contact] HubSpot form submission failed:', err));
    }

    return c.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return c.json({ error: 'Failed to process contact form' }, 500);
  }
});

// --- HubSpot Booking Lead Tracking ---
const BookingLeadSchema = z.object({
  name: z.string().optional(),
  service: z.string().optional(),
  location: z.string().optional(),
  timePreference: z.string().optional(),
});

app.post('/hubspot/track-booking', zValidator('json', BookingLeadSchema), async (c) => {
  try {
    const data = c.req.valid('json');

    console.log('[booking-lead] Tracking WhatsApp booking lead:', {
      service: data.service,
      ts: new Date().toISOString(),
    });

    // Push to HubSpot (non-blocking)
    trackBookingLead(data).catch((err) =>
      console.error('[booking-lead] HubSpot push failed:', err)
    );

    return c.json({ success: true });
  } catch (error) {
    console.error('Error tracking booking lead:', error);
    return c.json({ error: 'Failed to track booking' }, 500);
  }
});

// --- HubSpot Newsletter Subscribe ---
const SubscribeSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  language: z.string().optional(),
});

app.post('/hubspot/subscribe', zValidator('json', SubscribeSchema), async (c) => {
  try {
    const clientIp = c.req.header('x-forwarded-for') || c.req.header('x-real-ip') || 'unknown';
    if (!checkRateLimit(clientIp)) {
      return c.json({ error: 'Too many submissions. Please try again later.' }, 429);
    }

    const data = c.req.valid('json');

    console.log('[subscribe] New newsletter subscription:', {
      email: data.email,
      ts: new Date().toISOString(),
    });

    // Push to HubSpot
    subscribeContact(data).catch((err) =>
      console.error('[subscribe] HubSpot push failed:', err)
    );

    return c.json({ success: true });
  } catch (error) {
    console.error('Error processing subscription:', error);
    return c.json({ error: 'Failed to process subscription' }, 500);
  }
});

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const OPTIONS = handle(app);
