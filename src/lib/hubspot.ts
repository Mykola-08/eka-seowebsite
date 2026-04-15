import { Client } from '@hubspot/api-client';
import { FilterOperatorEnum } from '@hubspot/api-client/lib/codegen/crm/contacts/models/Filter';

// Singleton HubSpot client — reuse across requests
let hubspotClient: Client | null = null;

function getClient(): Client | null {
  const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!accessToken) {
    console.warn('[hubspot] HUBSPOT_ACCESS_TOKEN not set — skipping HubSpot integration');
    return null;
  }
  if (!hubspotClient) {
    hubspotClient = new Client({ accessToken });
  }
  return hubspotClient;
}

/**
 * Split a full name into first/last name for HubSpot.
 */
function splitName(fullName: string): { firstname: string; lastname: string } {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return { firstname: parts[0], lastname: '' };
  return {
    firstname: parts[0],
    lastname: parts.slice(1).join(' '),
  };
}

export interface ContactData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  preferred_contact?: string;
  preferred_time?: string;
  source?: string;
  lead_source_type?: string;
}

/**
 * Create or update a HubSpot contact by email.
 * Non-blocking — returns null on failure (caller should still succeed).
 */
export async function createOrUpdateContact(data: ContactData): Promise<string | null> {
  const client = getClient();
  if (!client) return null;

  const { firstname, lastname } = splitName(data.name);

  const properties: Record<string, string> = {
    firstname,
    lastname,
    email: data.email,
  };

  if (data.phone) properties.phone = data.phone;
  if (data.service) properties.service_interest = data.service;
  if (data.message) properties.message = data.message;
  if (data.preferred_contact) properties.preferred_contact_method = data.preferred_contact;
  if (data.preferred_time) properties.preferred_time = data.preferred_time;
  if (data.source) properties.traffic_source_detail = data.source;
  if (data.lead_source_type) properties.lead_source_type = data.lead_source_type;

  try {
    // Try to create the contact
    const response = await client.crm.contacts.basicApi.create({
      properties,
      associations: [],
    });
    console.log('[hubspot] Contact created:', response.id);
    return response.id;
  } catch (error: unknown) {
    // If contact already exists (409 conflict), update instead
    const err = error as { code?: number; body?: { message?: string } };
    if (err.code === 409 || err.body?.message?.includes('already exists')) {
      try {
        // Search for existing contact by email
        const searchResponse = await client.crm.contacts.searchApi.doSearch({
          filterGroups: [{
            filters: [{
              propertyName: 'email',
              operator: FilterOperatorEnum.Eq,
              value: data.email,
            }],
          }],
          sorts: [],
          properties: ['email'],
          limit: 1,
          after: '0',
        });

        if (searchResponse.results.length > 0) {
          const contactId = searchResponse.results[0].id;
          await client.crm.contacts.basicApi.update(contactId, { properties });
          console.log('[hubspot] Contact updated:', contactId);
          return contactId;
        }
      } catch (updateError) {
        console.error('[hubspot] Failed to update existing contact:', updateError);
      }
    } else {
      console.error('[hubspot] Failed to create contact:', error);
    }
    return null;
  }
}

export interface BookingLeadData {
  name?: string;
  service?: string;
  location?: string;
  timePreference?: string;
  phone?: string;
}

/**
 * Track a WhatsApp booking click as a HubSpot engagement.
 * Creates a minimal contact (using a generated email placeholder if needed).
 */
export async function trackBookingLead(data: BookingLeadData): Promise<string | null> {
  const client = getClient();
  if (!client) return null;

  const { firstname, lastname } = data.name
    ? splitName(data.name)
    : { firstname: 'WhatsApp', lastname: 'Lead' };

  const properties: Record<string, string> = {
    firstname,
    lastname,
    lead_source_type: 'whatsapp_booking',
  };

  if (data.service) properties.service_interest = data.service;
  if (data.phone) properties.phone = data.phone;
  if (data.location) properties.city = data.location;
  if (data.timePreference) properties.preferred_time = data.timePreference;

  try {
    // If we don't have an email, we can't deduplicate properly
    // Create a note/engagement instead via the contact with a placeholder
    if (!data.phone && !data.name) {
      console.log('[hubspot] Booking lead has no identifying info — skipping contact creation');
      return null;
    }

    const response = await client.crm.contacts.basicApi.create({
      properties,
      associations: [],
    });
    console.log('[hubspot] Booking lead created:', response.id);
    return response.id;
  } catch (error) {
    console.error('[hubspot] Failed to track booking lead:', error);
    return null;
  }
}

export interface SubscribeData {
  email: string;
  name?: string;
  language?: string;
}

/**
 * Subscribe an email to HubSpot (create/update contact + set newsletter flag).
 */
export async function subscribeContact(data: SubscribeData): Promise<string | null> {
  const client = getClient();
  if (!client) return null;

  const properties: Record<string, string> = {
    email: data.email,
    lead_source_type: 'newsletter',
    hs_lead_status: 'NEW',
  };

  if (data.name) {
    const { firstname, lastname } = splitName(data.name);
    properties.firstname = firstname;
    properties.lastname = lastname;
  }

  if (data.language) {
    properties.hs_language = data.language;
  }

  try {
    const response = await client.crm.contacts.basicApi.create({
      properties,
      associations: [],
    });
    console.log('[hubspot] Newsletter subscriber created:', response.id);
    return response.id;
  } catch (error: unknown) {
    const err = error as { code?: number; body?: { message?: string } };
    if (err.code === 409 || err.body?.message?.includes('already exists')) {
      try {
        const searchResponse = await client.crm.contacts.searchApi.doSearch({
          filterGroups: [{
            filters: [{
              propertyName: 'email',
              operator: FilterOperatorEnum.Eq,
              value: data.email,
            }],
          }],
          sorts: [],
          properties: ['email'],
          limit: 1,
          after: '0',
        });

        if (searchResponse.results.length > 0) {
          const contactId = searchResponse.results[0].id;
          await client.crm.contacts.basicApi.update(contactId, { properties });
          console.log('[hubspot] Newsletter subscriber updated:', contactId);
          return contactId;
        }
      } catch (updateError) {
        console.error('[hubspot] Failed to update subscriber:', updateError);
      }
    } else {
      console.error('[hubspot] Failed to create subscriber:', error);
    }
    return null;
  }
}

/**
 * Submit form data to HubSpot Forms API for full analytics attribution.
 * This is complementary to the CRM API — gives HubSpot funnel data.
 */
export async function submitToHubSpotForm(
  formGuid: string,
  fields: Array<{ name: string; value: string }>,
  context: { hutk?: string; pageUri?: string; pageName?: string }
): Promise<boolean> {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  if (!portalId || !formGuid) return false;

  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields,
          context: {
            hutk: context.hutk,
            pageUri: context.pageUri,
            pageName: context.pageName,
          },
        }),
      }
    );

    if (!response.ok) {
      console.error('[hubspot] Form submission failed:', response.status, await response.text());
      return false;
    }

    console.log('[hubspot] Form submitted successfully');
    return true;
  } catch (error) {
    console.error('[hubspot] Form submission error:', error);
    return false;
  }
}
