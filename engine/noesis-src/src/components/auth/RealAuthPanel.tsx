import { useCallback, useState } from 'react'
import { useT } from '../../i18n'
import { useStore } from '../../store/useStore'
import { isCaptchaEnabled, isSupabaseConfigured } from '../../lib/supabase'
import { isUsernameAvailable } from '../../lib/profiles'
import { usernameError } from '../../lib/username'
import { Turnstile } from './Turnstile'

// Real authentication: Continue with Google (Gmail), or create/sign in with an
// email link plus a chosen public username. Anti-spam (Hard Rule 6 stays
// intact): the emailed link confirms a real, owned inbox, and the Turnstile
// CAPTCHA (when configured) blocks automated bot sign-ups before any email is
// sent. The username is the handle shown on the citizen's votes and comments.
export function RealAuthPanel() {
  const { t } = useT()
  const signInWithGoogle = useStore((s) => s.signInWithGoogle)
  const signInWithEmail = useStore((s) => s.signInWithEmail)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  // Bumped to remount the widget for a fresh, single-use token after a failure.
  const [captchaKey, setCaptchaKey] = useState(0)

  const onToken = useCallback((token: string | null) => setCaptchaToken(token), [])

  const unameInvalid = usernameError(username) !== null
  const captchaBlocking = isCaptchaEnabled && !captchaToken

  const resetCaptcha = () => {
    setCaptchaToken(null)
    setCaptchaKey((k) => k + 1)
  }

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || sending || captchaBlocking) return
    if (unameInvalid) {
      setError(t.auth.usernameInvalid)
      return
    }
    setSending(true)
    setError(null)
    // Friendly pre-check so the citizen keeps the handle they typed (the DB
    // unique index is the real guard).
    if (isSupabaseConfigured && !(await isUsernameAvailable(username))) {
      setSending(false)
      setError(t.auth.usernameTaken)
      return
    }
    const err = await signInWithEmail(email, captchaToken ?? undefined, username)
    setSending(false)
    if (err) {
      setError(t.auth.emailError)
      resetCaptcha() // token is single-use — force a fresh challenge for retry
    } else {
      setSent(true)
    }
  }

  if (sent) {
    return (
      <div className="mt-8 rounded-md border border-gold/40 bg-gold/5 p-5">
        <div className="font-mono text-xs uppercase tracking-wider text-gold">
          {t.auth.linkSentTitle}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-text">{t.auth.linkSentNote}</p>
      </div>
    )
  }

  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={() => void signInWithGoogle()}
        className="flex min-h-11 w-full items-center justify-center gap-3 rounded-md border border-line bg-elev px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-gold/50"
      >
        <GoogleMark />
        {t.auth.continueGoogle}
      </button>

      <div className="my-6 flex items-center gap-3 text-xs text-muted">
        <span className="h-px flex-1 bg-line" />
        {t.auth.orEmail}
        <span className="h-px flex-1 bg-line" />
      </div>

      <form onSubmit={submitEmail} className="space-y-3">
        <div>
          <input
            type="text"
            required
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={t.auth.usernamePlaceholder}
            aria-label={t.auth.username}
            className="min-h-11 w-full rounded-md border border-line bg-elev px-3 py-2 text-sm text-text placeholder:text-muted focus:border-gold/50"
          />
          <p className="mt-1 text-xs text-muted">{t.auth.usernameHint}</p>
        </div>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.auth.emailPlaceholder}
          aria-label={t.auth.email}
          className="min-h-11 w-full rounded-md border border-line bg-elev px-3 py-2 text-sm text-text placeholder:text-muted focus:border-gold/50"
        />

        {isCaptchaEnabled && <Turnstile key={captchaKey} onToken={onToken} />}

        <button
          type="submit"
          disabled={sending || !email.trim() || unameInvalid || captchaBlocking}
          className="min-h-11 w-full rounded-md bg-gold px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {sending ? t.auth.sending : t.auth.sendLink}
        </button>
        {error && <p className="text-sm text-negative">{error}</p>}
      </form>

      <p className="mt-6 text-xs leading-relaxed text-muted">{t.auth.realNote}</p>
    </div>
  )
}

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.71-1.57 2.68-3.89 2.68-6.62Z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18Z" />
      <path fill="#FBBC05" d="M3.97 10.72a5.4 5.4 0 0 1 0-3.44V4.95H.96a9 9 0 0 0 0 8.1l3.01-2.33Z" />
      <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58Z" />
    </svg>
  )
}
