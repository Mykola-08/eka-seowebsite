import { Hono, Context, Next } from 'hono';
import { handle } from 'hono/vercel';
import { cors } from 'hono/cors';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { ContactFormSchema } from '@/shared/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UntypedSupabaseClient = SupabaseClient<any, 'public', any>;

const app = new Hono().basePath('/api');

const ALLOWED_ORIGINS = [
  'https://ekabalance.com',
  'https://www.ekabalance.com',
  ...(process.env.NODE_ENV === 'development' ? ['http://localhost:3000', 'http://192.168.31.121:3000'] : []),
];

// Auth middleware — verifies token with Supabase
const authMiddleware = async (c: Context, next: Next) => {
  const auth = c.req.header('Authorization');
  if (!auth || !auth.startsWith('Bearer ')) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  const token = auth.replace('Bearer ', '');
  try {
    const supabase = getSupabase();
    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (error || !user) {
      return c.json({ error: 'Invalid or expired token' }, 401);
    }
    c.set('user', user);
  } catch {
    return c.json({ error: 'Authentication failed' }, 401);
  }

  await next();
};

// CORS middleware
app.use('*', cors({
  origin: (origin) => ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Supabase helper — singleton pattern to avoid re-creating client on every request
let _supabaseClient: UntypedSupabaseClient | null = null;

const getSupabase = (): UntypedSupabaseClient => {
  if (_supabaseClient) return _supabaseClient;
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase credentials: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required');
  }
  _supabaseClient = createClient(supabaseUrl, supabaseKey);
  return _supabaseClient;
};

// Helper to get user from context (set by authMiddleware)
function getAuthenticatedUser(c: Context) {
  return c.get('user') as { id: string; email?: string } | undefined;
}


/**
 * ROUTES
 */

app.post('/dashboard/init-types', authMiddleware, async (c) => {
    return c.json({ error: "Not implemented — use Supabase dashboard" }, 501);
});

app.get('/session-types', async (c) => {
  try {
    const supabase = getSupabase();
    // Fetch only active session types
    const { data: sessionTypes, error } = await supabase
      .from('session_types')
      .select('*')
      .eq('is_active', true);

    if (error) throw error;

    // Use default values if no types found (dev mode)
    if (!sessionTypes || sessionTypes.length === 0) {
       // Fallback mock data or empty
       return c.json([]);
    }

    // Sort manually
    const sorted = sessionTypes.sort((a, b) => {
      const getScore = (name: string) => {
        if (name.includes('360')) return 1;
        if (name.includes('Kinesiologia')) return 2;
        if (name.includes('Massatge')) return 3;
        return 4;
      };
      return getScore(a.name) - getScore(b.name);
    });

    const formatted = sorted.map(type => ({
      ...type,
      // features is already JSON/array in Supabase if defined as jsonb
      durations: [60, 90, 120]
    }));

    return c.json(formatted);
  } catch (error) {
    console.error('Error fetching session types:', error);
    return c.json({ error: 'Failed to fetch session types' }, 500);
  }
});

app.post('/recommendations', authMiddleware, zValidator('json', z.object({
  goals: z.array(z.string()),
  discomfort_areas: z.array(z.string()),
  preferred_technique: z.string(),
  work_style: z.string(),
  energy_level: z.number(),
  stress_level: z.number()
})), async (c) => {
  try {
    const user = getAuthenticatedUser(c);
    const data = c.req.valid('json');
    const supabase = getSupabase();

    if (user?.id) {
      await supabase.from('user_assessments_improved').insert({
        user_id: user.id,
        assessment_data: data
      });
    }

    const { data: sessionTypes } = await supabase.from('session_types').select('*').eq('is_active', true);

    // Filter logic...
    const recommendations: Array<Record<string, unknown>> = [];
    if (sessionTypes) {
        // Simple logic for now matching original
         if (data.discomfort_areas.includes('neck_shoulders') ||
            data.discomfort_areas.includes('back_lumbar') ||
            data.goals.includes('improve_posture') ||
            data.preferred_technique === 'feldenkrais') {
            const feldenkrais = sessionTypes.find(s => s.name.includes('Feldenkrais'));
            if (feldenkrais) recommendations.push(feldenkrais);
        }
        // ... more logic
        if (recommendations.length === 0 || data.preferred_technique === 'dont_know') {
            const combined = sessionTypes.find(s => s.name.includes('Combinada'));
            if (combined) recommendations.push(combined);
        }
    }
   
    return c.json({ recommendations: recommendations.slice(0, 3) });
  } catch (error) {
    console.error('Error getting recommendations:', error);
    return c.json({ error: 'Failed to get recommendations' }, 500);
  }
});


app.post('/appointments', authMiddleware, zValidator('json', z.object({
  service_id: z.string(), 
  duration_minutes: z.number(),
  appointment_date: z.string(),
  start_time: z.string(),
  location: z.string(),
  subcategory: z.string().optional(),
  session_goals: z.object({
    primary_goals: z.array(z.string()),
    notes: z.string().optional()
  }).optional()
})), async (c) => {
  try {
    const user = getAuthenticatedUser(c);
    const data = c.req.valid('json');
    const supabase = getSupabase();

    const { data: sessionType } = await supabase.from('session_types').select('*').eq('id', data.service_id).single();
    if (!sessionType) return c.json({ error: 'Session type not found' }, 404);

    const startTime = new Date(`${data.appointment_date}T${data.start_time}`);
    // const endTime = new Date(startTime.getTime() + data.duration_minutes * 60000); // Unused
    const endTimeString = new Date(startTime.getTime() + data.duration_minutes * 60000).toTimeString().slice(0, 5);

    let finalPrice = Number(sessionType.base_price_cents);
    finalPrice = Math.round(finalPrice * (data.duration_minutes / 60));

    if (data.subcategory) {
      const subcategoryPrices: { [key: string]: number } = {
        'Massatge Relaxant': 0, 'Massatge Descontracturant': 500, 'Massatge Esportiu': 800
      };
      finalPrice += subcategoryPrices[data.subcategory] || 0;
    }

    const locationMap: { [key: string]: string } = {
      'barcelona': 'Plaça Universitat, Barcelona', 'online': 'Sessió virtual', 'home': 'Al teu domicili'
    };

    let appointmentNotes = data.session_goals ? JSON.stringify(data.session_goals) : null;
    if (data.subcategory) {
      const notesObj = appointmentNotes ? JSON.parse(appointmentNotes) : {};
      notesObj.subcategory = data.subcategory;
      appointmentNotes = JSON.stringify(notesObj);
    }

    const { data: result, error } = await supabase.from('appointments').insert({
      customer_id: user?.id,
      therapist_id: 'default-therapist',
      service_id: data.service_id,
      appointment_date: data.appointment_date,
      start_time: data.start_time,
      end_time: endTimeString,
      status: 'pending',
      location_type: data.location,
      location_address: locationMap[data.location] || data.location,
      price_cents: finalPrice,
      customer_notes: appointmentNotes
    }).select().single();

    if (error) throw error;

    return c.json({ success: true, appointment_id: result.id, message: 'Appointment created successfully' });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return c.json({ error: 'Failed to create appointment' }, 500);
  }
});

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

// Contact form schema — imported from @/shared/types (ContactFormSchema)

app.post('/contact', zValidator('json', ContactFormSchema), async (c) => {
  try {
    // Rate limiting
    const clientIp = c.req.header('x-forwarded-for') || c.req.header('x-real-ip') || 'unknown';
    if (!checkRateLimit(clientIp)) {
      return c.json({ error: 'Too many submissions. Please try again later.' }, 429);
    }
    
    const data = c.req.valid('json');
    const supabase = getSupabase();

    const { error: insertError } = await supabase.from('contact_submissions').insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
      preferred_contact: data.preferred_contact || 'email',
      preferred_time: data.preferred_time
    });

    if (insertError) {
      console.error('Supabase insert error:', insertError);
      return c.json({ error: 'Failed to save contact form' }, 500);
    }

    return c.json({ success: true });
  } catch (error) {
    console.error('Error saving contact form:', error);
    return c.json({ error: 'Failed to save contact form' }, 500);
  }
});

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const OPTIONS = handle(app);
