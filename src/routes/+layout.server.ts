// src/routes/+layout.server.ts
import type { LayoutServerLoad } from './$types';
import { createServerClient } from '@supabase/ssr';

export const load: LayoutServerLoad = async (event) => {
  // Create Supabase server client — replaces deprecated auth-helpers
  const supabase = createServerClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY,
    {
      cookies: {
        get: (name) => event.cookies.get(name),
        set: (name, value, options) => {
          event.cookies.set(name, value, { ...options, path: '/' });
        },
        remove: (name, options) => {
          event.cookies.delete(name, { ...options, path: '/' });
        }
      }
    }
  );

  // Get current session — replaces getSessionFromCookie
  const { data: { session } } = await supabase.auth.getSession();

  return {
    session,
    supabase
  };
};
