import type { Handle } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';

export const handle: Handle = async ({ event, resolve }) => {
  // Get session from cookie
  const cookie = event.request.headers.get('cookie') || '';
  const { data: { session } } = await supabase.auth.getSessionFromCookie(cookie);

  // Make user available in locals
  event.locals.session = session;
  event.locals.user = session?.user || null;

  // Load profile if logged in
  if (session?.user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('full_name, role')
      .eq('id', session.user.id)
      .single();
    event.locals.profile = profile;
  } else {
    event.locals.profile = null;
  }

  return resolve(event);
};
