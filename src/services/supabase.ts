import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const redirectTo = import.meta.env.VITE_SUPABASE_REDIRECT_URL;

console.log('VITE_SUPABASE_REDIRECT_URL in supabase.ts:', redirectTo);

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL or Anon Key is missing');
}

if (!redirectTo) {
    throw new Error('Supabase Redirect URL is missing');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        redirectTo: redirectTo,
    },
});
