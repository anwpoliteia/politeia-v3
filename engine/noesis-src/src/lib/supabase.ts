// Supabase client. Reads credentials from env; if they are absent the client is
// null and the app falls back to local mock auth — so the demo keeps working
// with no backend, and real auth lights up the moment keys are provided.
//
// Set in .env.local (see .env.example):
//   VITE_SUPABASE_URL=https://<ref>.supabase.co
//   VITE_SUPABASE_ANON_KEY=<anon public key>

import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(url && anonKey)

// Anti-spam: Cloudflare Turnstile CAPTCHA site key (public). When set, the
// email sign-in form renders the widget and passes its token to Supabase, which
// rejects sign-ups without a valid token — blocking automated bot abuse.
export const turnstileSiteKey: string | undefined = import.meta.env
  .VITE_TURNSTILE_SITE_KEY || undefined
export const isCaptchaEnabled = Boolean(turnstileSiteKey)

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url!, anonKey!, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true, // completes the OAuth / magic-link redirect
      },
    })
  : null
