// src/routes/_layout.server.ts
import type { LayoutServerLoad } from './$types';
import { getSession } from '@supabase/auth-helpers-sveltekit/server';

export const load: LayoutServerLoad = async (event) => {
  // ✅ Use the new method — replaces getSessionFromCookie
  return {
    session: await getSession(event)
  };
};
