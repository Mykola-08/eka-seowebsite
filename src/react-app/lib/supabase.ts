/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

import { SupabaseClient } from '@supabase/supabase-js';

const createSupabaseClient = (): SupabaseClient<Database> => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

  if (supabaseUrl && supabaseKey) {
    return createClient<Database>(supabaseUrl, supabaseKey);
  }

  // Return a proxy that logs errors when accessed, preventing immediate crash
  // but ensuring the error is caught by ErrorBoundary when used
  console.error('Supabase initialization failed: Missing environment variables');

  return new Proxy({} as any, {
    get: (_, prop) => {
      // Allow auth.onAuthStateChange to run safely (returning a dummy subscription)
      // to prevents crash in SupabaseAuthProvider useEffect
      if (prop === 'auth') {
        return {
          onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }),
          getSession: () => Promise.resolve({ data: { session: null } }),
          signInWithOAuth: () => Promise.reject(new Error('Missing Supabase credentials')),
          signOut: () => Promise.resolve(),
        } as any;
      }
      throw new Error(`Cannot access supabase.${String(prop)}: Missing environment variables(VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY)`);
    }
  }) as SupabaseClient<Database>;
};

export const supabase = createSupabaseClient();
