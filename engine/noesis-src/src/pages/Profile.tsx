import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { useT } from '../i18n'
import { Container } from '../components/ui/primitives'
import { AuthField } from './Login'
import { formatDate } from '../lib/format'
import type { Lang } from '../lib/types'

// /profile — minimal profile (username, region, language). Editable; the
// username is the public handle, unique across citizens.
export function Profile() {
  const { t, lang } = useT()
  const currentUser = useStore((s) => s.currentUser)
  const updateProfile = useStore((s) => s.updateProfile)
  const changeUsername = useStore((s) => s.changeUsername)
  const setLanguage = useStore((s) => s.setLanguage)
  const [username, setUsername] = useState(currentUser?.username ?? '')
  const [region, setRegion] = useState(currentUser?.region ?? '')
  const [pickLang, setPickLang] = useState<Lang>(currentUser?.language ?? lang)
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  if (!currentUser) {
    return (
      <Container width="reading" className="py-16 text-center">
        <p className="text-muted">{t.deliberation.loginToParticipate}</p>
        <Link to="/login" className="mt-4 inline-block text-gold">
          {t.nav.login}
        </Link>
      </Container>
    )
  }

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setMsg(null)
    setSaving(true)
    const outcome = await changeUsername(username)
    if (outcome) {
      setSaving(false)
      setMsg(
        outcome === 'taken'
          ? t.auth.usernameTaken
          : outcome === 'invalid'
            ? t.auth.usernameInvalid
            : t.auth.emailError,
      )
      return
    }
    updateProfile({ region, language: pickLang })
    setLanguage(pickLang)
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <Container width="reading" className="py-16">
      <h1 className="text-2xl font-semibold text-text">{t.auth.profileTitle}</h1>
      <p className="mt-2 font-mono text-xs text-muted">
        {t.auth.memberSince}: {formatDate(currentUser.createdAt, lang)}
      </p>

      <form onSubmit={save} className="mt-8 space-y-5">
        <div>
          <AuthField label={t.auth.username} value={username} onChange={setUsername} />
          <p className="mt-1 text-xs text-muted">{t.auth.usernameHint}</p>
          {msg && <p className="mt-1 text-sm text-negative">{msg}</p>}
        </div>
        <AuthField label={t.auth.region} value={region} onChange={setRegion} />
        <div>
          <label className="mb-1 block text-sm text-text">{t.auth.language}</label>
          <select
            value={pickLang}
            onChange={(e) => setPickLang(e.target.value as Lang)}
            className="min-h-11 w-full rounded-md border border-line bg-elev px-3 py-2 text-sm text-text"
          >
            <option value="el">Ελληνικά</option>
            <option value="en">English</option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="min-h-11 rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {t.auth.save}
          </button>
          {saved && <span className="text-sm text-positive">{t.auth.saved}</span>}
        </div>
      </form>
    </Container>
  )
}
