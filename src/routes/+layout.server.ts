// src/routes/+layout.server.ts
import type { LayoutServerLoad } from './$types';
import { createServerClient } from '@supabase/ssr';

export const load: LayoutServerLoad = async (event) => {
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

  // ✅ ONLY get the session — DON'T return the supabase client!
  const { data: { session } } = await supabase.auth.getSession();

  return {
    session
    // ❌ REMOVED: supabase
  };
};
