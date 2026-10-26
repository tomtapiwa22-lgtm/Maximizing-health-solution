// src/hooks.server.ts
import { createServerClient } from '@supabase/ssr';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(
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

  // Convenience: get session once here
  const { data: { session } } = await event.locals.supabase.auth.getSession();
  event.locals.session = session;

  return resolve(event);
};
