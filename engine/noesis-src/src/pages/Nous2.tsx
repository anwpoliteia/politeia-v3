import { useT } from '../i18n'
import { Container, PageHeader } from '../components/ui/primitives'

// The NOUS 2.0 app ships INSIDE this site (public/nous2-app/), so wherever
// POLITEIA-V is deployed (ipoliteia.gr included) it is served same-origin —
// always live, no external server to depend on. The explicit file path
// matters: Vite's dev server SPA-fallbacks bare directory URLs, and Netlify
// serves the exact file before any /* redirect.
const NOUS2_URL = '/nous2-app/index.html'

// /nous2 — NOUS 2.0, the Greek Anti-Corruption Panopticon Intelligence
// Platform, embedded as a section of POLITEIA-V.
export function Nous2() {
  const { t } = useT()

  return (
    <div>
      <PageHeader
        eyebrow={t.nous2.eyebrow}
        title={t.nous2.title}
        subtitle={t.nous2.subtitle}
      />

      <Container className="py-6">
        <div className="mb-4 flex justify-end">
          <a
            href={NOUS2_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-line px-4 py-2 text-sm text-text transition-colors hover:border-gold/50"
          >
            {t.nous2.openExternal} →
          </a>
        </div>

        {/* allow-same-origin is required: frames in an opaque origin are
            blocked outright by some browsers and content blockers
            (net::ERR_BLOCKED_BY_CLIENT), which left NOUS 2.0 a blank white box.
            The app is this site's own static code; its only third-party
            scripts (d3, three.js) are pinned with SRI integrity hashes in
            public/nous2-app/, so a changed CDN file is refused, not run. */}
        <iframe
          src={NOUS2_URL}
          title={t.nous2.title}
          sandbox="allow-scripts allow-popups allow-same-origin"
          className="h-[calc(100vh-6rem)] w-full rounded-md border border-line bg-bg"
        />
      </Container>
    </div>
  )
}
