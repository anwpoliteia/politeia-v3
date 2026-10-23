import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { useT } from '../i18n'
import { Container } from '../components/ui/primitives'
import { isSupabaseConfigured } from '../lib/supabase'
import { RealAuthPanel } from '../components/auth/RealAuthPanel'
import { AuthField } from './Login'
import { usernameError } from '../lib/username'
import type { Lang } from '../lib/types'

// /signup — with real auth (Supabase) the same Google/email flow creates the
// account; with the mock fallback it's a local-only profile (Hard Rule 6).
export function Signup() {
  const { t } = useT()
  const navigate = useNavigate()
  const login = useStore((s) => s.login)
  const language = useStore((s) => s.language)
  const [username, setUsername] = useState('')
  const [region, setRegion] = useState('')
  const [lang, setLang] = useState<Lang>(language)
  const [err, setErr] = useState<string | null>(null)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (usernameError(username)) {
      setErr(t.auth.usernameInvalid)
      return
    }
    login(username, region, lang)
    navigate('/ministries')
  }

  if (isSupabaseConfigured) {
    return (
      <Container width="reading" className="py-16">
        <h1 className="text-2xl font-semibold text-text">{t.auth.signupTitle}</h1>
        <RealAuthPanel />
      </Container>
    )
  }

  return (
    <Container width="reading" className="py-16">
      <h1 className="text-2xl font-semibold text-text">{t.auth.signupTitle}</h1>
      <p className="mt-2 text-sm text-muted">{t.auth.mockNote}</p>

      <form onSubmit={submit} className="mt-8 space-y-5">
        <div>
          <AuthField label={t.auth.username} value={username} onChange={setUsername} />
          <p className="mt-1 text-xs text-muted">{t.auth.usernameHint}</p>
          {err && <p className="mt-1 text-sm text-negative">{err}</p>}
        </div>
        <AuthField label={t.auth.region} value={region} onChange={setRegion} />
        <div>
          <label className="mb-1 block text-sm text-text">{t.auth.language}</label>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="min-h-11 w-full rounded-md border border-line bg-elev px-3 py-2 text-sm text-text"
          >
            <option value="el">Ελληνικά</option>
            <option value="en">English</option>
          </select>
        </div>
        <button
          type="submit"
          className="min-h-11 w-full rounded-md bg-gold px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          {t.auth.submitSignup}
        </button>
      </form>

      <p className="mt-6 text-sm text-muted">
        {t.auth.hasAccount}{' '}
        <Link to="/login" className="text-gold underline-offset-2 hover:underline">
          {t.nav.login}
        </Link>
      </p>
    </Container>
  )
}
