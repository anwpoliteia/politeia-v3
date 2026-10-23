# Enabling real login (Google + email) for POLITEIA

POLITEIA ships working in **mock mode** (local-only accounts). To let citizens
sign in for real with their **Gmail/Google** account or an **email link**, do the
following once. ~10 minutes, free tier.

## 1. Create a Supabase project
1. Go to <https://supabase.com> → **New project** (free). Pick a region near Greece (e.g. Frankfurt).
2. When it's ready: **Project Settings → API**. Copy:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public** key → `VITE_SUPABASE_ANON_KEY`

## 2. Add the keys
Create a file `.env.local` in the project root (copy from `.env.example`):

```
VITE_SUPABASE_URL=https://YOUR-REF.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...   # the long anon key
```

(For the live site, set these as environment variables in Vercel/Netlify, then redeploy.)

## 3. Create the profiles table
Supabase Dashboard → **SQL Editor → New query** → paste the contents of
[`supabase/schema.sql`](supabase/schema.sql) → **Run**. This creates the
`profiles` table, row-level security (each citizen sees only their own row), and
a trigger that auto-creates a profile on signup.

## 4. Turn on Google (Gmail) sign-in
1. In **Google Cloud Console** (<https://console.cloud.google.com>):
   - APIs & Services → **OAuth consent screen** → External → fill app name + support email.
   - **Credentials → Create credentials → OAuth client ID → Web application**.
   - **Authorized redirect URI** — add the value Supabase shows you, which is:
     `https://YOUR-REF.supabase.co/auth/v1/callback`
   - Copy the **Client ID** and **Client secret**.
2. In **Supabase → Authentication → Providers → Google**: enable it, paste the
   Client ID + secret, save.

## 5. Allow your site URLs
Supabase → **Authentication → URL Configuration**:
- **Site URL**: `https://ipoliteia.gr` (or your current host)
- **Redirect URLs** — add each origin you use:
  - `http://localhost:5181`
  - `https://ipoliteia.gr`
  - your temporary preview URL (the `*.trycloudflare.com` one) while testing

The app sends `redirectTo = window.location.origin`, so it works on whichever of
these you open it from.

## 6. Email sign-in
Works out of the box (passwordless magic link) once the project exists. Anyone
can create an account: the first time they enter their email, Supabase creates
the account and sends a link; clicking it **confirms the email and signs them
in**. For production volume, configure a custom SMTP under
**Authentication → Emails**.

## 7. Anti-spam (so bots can't flood sign-ups)
Two layers keep "anyone can join" from becoming "anyone can spam":

**a) Email confirmation (on by default — verify it's on).**
Supabase → **Authentication → Providers → Email** → keep **"Confirm email"**
enabled. An account only becomes usable after the person clicks the emailed
link, so it must be a real inbox they control. The app already requires a signed-in
account to vote or comment, so unconfirmed addresses can't post.

**b) CAPTCHA (Cloudflare Turnstile — stops automated bots).**
1. Create a free widget at
   <https://dash.cloudflare.com/?to=/:account/turnstile>. Add your domains
   (`ipoliteia.gr` **and** `localhost` for testing). Copy the **Site key** and
   **Secret key**.
2. Supabase → **Authentication → Attack Protection → CAPTCHA** (a.k.a. Bot &
   Abuse Protection): enable it, choose provider **Turnstile**, paste the
   **Secret key**, save.
3. Put the **Site key** in your env (and in Netlify, then redeploy):
   ```
   VITE_TURNSTILE_SITE_KEY=0x4AAAAAAA...
   ```
   The login form then shows the Turnstile widget and refuses to send a link
   until it's solved. Leave the var unset to disable the CAPTCHA.

**c) Rate limits (built in).**
Supabase → **Authentication → Rate Limits** caps sign-up / email sends per hour
per IP. Defaults are sane; tighten "Sign-ups" and "Token/OTP" if you ever see
abuse.

## Done
Restart `npm run dev` (or rebuild/redeploy). The `/login` page now shows
**“Συνέχισε με Google”** and an email field instead of the mock form. Profiles
persist; the citizen's votes/comments stay tied to their real account.

> Note: votes & comments are still kept in the browser for now. Moving those to
> Supabase tables (with realtime counts) is the next step — say the word.
