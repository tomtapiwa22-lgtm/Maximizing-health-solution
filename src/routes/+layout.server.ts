import type { LayoutServerLoad } from './$types';
import { supabase } from '$lib/supabase';

export const load: LayoutServerLoad = async ({ request }) => {
  const cookie = request.headers.get('cookie') || '';
  
  const { data: { session } } = await supabase.auth.getSessionFromCookie(cookie);

  if (!session) {
    return { user: null, profile: null };
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, role')
    .eq('id', session.user.id)
    .single();

  return {
    user: session.user,
    profile: profile || null
  };
};
