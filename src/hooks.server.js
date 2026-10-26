import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createServerClient } from '@supabase/ssr';

export async function handle({ event, resolve }) {
  const supabase = createServerClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return event.cookies.get(name);
        },
        set(name, value, options) {
          event.cookies.set(name, value, { ...options, path: '/' });
        },
        remove(name, options) {
          event.cookies.delete(name, { ...options, path: '/' });
        }
      }
    }
  );

  // ✅ Correct way to get session — NO getSessionFromCookie!
  const { data: { session } } = await supabase.auth.getSession();

  event.locals.supabase = supabase;
  event.locals.session = session;
  event.locals.user = session?.user ?? null;

  return resolve(event);
}
