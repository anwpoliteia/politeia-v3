import { useState } from 'react'
import { useT } from '../i18n'
import { Container, PageHeader } from '../components/ui/primitives'

// The Δελφοί oracle is the Diavgeia Watchdog — a separate Next.js app, so
// unlike NOUS 2.0 it cannot be bundled into this static site; it needs its own
// server. The default is the LOCAL watchdog on :3111, which is what `vite dev`
// should talk to (.env.production is never loaded in dev). Override with
// VITE_DELPHI_URL to point at a hosted deployment.
//
// Hosting status (2026-09-18): the Railway deployment named in .env.production
// is DOWN — the trial expired, so its domain returns Railway's own 404. Until
// that URL points at a live host, a production build will frame a 404 even
// though the watchdog itself and its data are fine.
const DELPHI_URL = import.meta.env.VITE_DELPHI_URL || 'http://localhost:3111/'

// /delphoi — Δελφοί: the public-spending oracle. Every euro the state commits
// is published on Diavgeia; this reads it back to the citizen.
export function Delphi() {
  const { t } = useT()
  const [key, setKey] = useState(0)

  return (
    <div>
      <PageHeader
        eyebrow={t.delphi.eyebrow}
        title={t.delphi.title}
        subtitle={t.delphi.subtitle}
      />

      <Container className="py-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs text-muted">{DELPHI_URL}</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setKey((k) => k + 1)}
              className="rounded-md border border-line px-4 py-2 text-sm text-text transition-colors hover:border-gold/50"
            >
              {t.delphi.reload}
            </button>
            <a
              href={DELPHI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line px-4 py-2 text-sm text-text transition-colors hover:border-gold/50"
            >
              {t.delphi.openExternal} →
            </a>
          </div>
        </div>

        {/* Delphi is served from a DIFFERENT origin, so allow-same-origin is
            both safe and necessary: it keeps the app on its own origin (so its
            API calls and storage work), while the browser's same-origin policy
            still bars it from this site's session. Contrast NOUS 2.0, which is
            same-origin and therefore must run without allow-same-origin. */}
        <iframe
          key={key}
          src={DELPHI_URL}
          title={t.delphi.title}
          sandbox="allow-scripts allow-popups allow-forms allow-same-origin"
          className="h-[calc(100vh-6rem)] w-full rounded-md border border-line bg-bg"
        />

        <p className="mt-3 text-xs leading-relaxed text-muted">{t.delphi.hint}</p>
      </Container>
    </div>
  )
}
