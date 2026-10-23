// The dossier: every claim the video made, in the order it made them.
//
// The rail beside the player is the live experience — it shows you a claim at
// the moment it is spoken and nothing you have not yet heard. This is the other
// half: the whole record, laid out wide, each claim beside what the sources
// actually say and the links to go read them yourself.
//
// Two columns on purpose. Left is the video's own words, verbatim. Right is the
// evidence. Keeping them side by side is the entire argument of the section:
// you can always see what was said next to what is true, and judge the distance
// between them without taking anyone's word for it.

import { useT } from '../../i18n'
import { timecode, VERDICT_STYLE, type Claim } from '../../lib/basanos'
import { ConfidenceMeter } from '../ui/ConfidenceMeter'
import { cn } from '../../lib/cn'

/** Show the publisher, not a naked URL — the citizen judges sources by who. */
function host(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

function StatusNote({ claim }: { claim: Claim }) {
  const { t } = useT()
  const label =
    claim.status === 'failed'
      ? t.basanos.statusFailed
      : claim.status === 'checking'
        ? t.basanos.statusChecking
        : t.basanos.statusWaiting
  return (
    <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
      {label}
      {claim.status === 'checking' && (
        <span aria-hidden className="v-caret">
          ▍
        </span>
      )}
    </p>
  )
}

function DossierRow({
  claim,
  index,
  onSeek,
}: {
  claim: Claim
  index: number
  onSeek: (seconds: number) => void
}) {
  const { t } = useT()
  const verdict = claim.verdict
  const style = verdict ? VERDICT_STYLE[verdict.verdict] : null

  return (
    <article
      className={cn(
        'rounded-md border bg-elev p-5',
        style ? style.border : 'border-line',
      )}
    >
      <header className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line pb-3">
        <span className="font-mono text-xs text-muted">
          {String(index + 1).padStart(2, '0')}
        </span>
        <button
          type="button"
          onClick={() => onSeek(claim.t)}
          title={t.basanos.seekHere}
          className="font-mono text-xs text-muted transition-colors hover:text-gold"
        >
          {timecode(claim.t)}
        </button>

        {verdict ? (
          <span
            className={cn(
              'inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider',
              style?.text,
            )}
          >
            <span aria-hidden className={cn('h-1.5 w-1.5 rounded-full', style?.dot)} />
            {t.basanos.verdicts[verdict.verdict]}
          </span>
        ) : (
          <StatusNote claim={claim} />
        )}

        {verdict && (
          <div className="ml-auto flex w-40 items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
              {t.basanos.confidence}
            </span>
            <span className="flex-1">
              <ConfidenceMeter value={verdict.confidence} />
            </span>
          </div>
        )}
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {/* What the video said. */}
        <div>
          <h4 className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted">
            {t.basanos.said}
          </h4>
          <blockquote className="border-l-2 border-line pl-3 text-sm leading-relaxed text-text">
            «{claim.quote}»
          </blockquote>
          <p className="mt-3 text-sm leading-relaxed text-muted">{claim.claim}</p>
        </div>

        {/* What the record says. */}
        <div>
          <h4 className="mb-2 font-mono text-[10px] uppercase tracking-wider text-gold">
            {t.basanos.analysis}
          </h4>

          {!verdict ? (
            <p className="text-sm leading-relaxed text-muted">
              {claim.status === 'failed'
                ? t.basanos.dossierNotChecked
                : t.basanos.dossierPending}
            </p>
          ) : (
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-text">{verdict.summary}</p>

              {verdict.evidence.length > 0 && (
                <div>
                  <h5 className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                    {t.basanos.evidence}
                  </h5>
                  <ul className="space-y-1.5">
                    {verdict.evidence.map((line, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span aria-hidden className="text-gold">
                          ·
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h5 className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                  {t.common.sources}
                </h5>
                {verdict.sources.length > 0 ? (
                  <ul className="space-y-1.5">
                    {verdict.sources.map((s) => (
                      <li key={s.url} className="flex gap-2">
                        <span aria-hidden className="text-gold">
                          →
                        </span>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="text-sm leading-relaxed text-gold underline-offset-2 hover:underline"
                        >
                          {s.title}
                          <span className="ml-1.5 font-mono text-[11px] text-muted">
                            {host(s.url)}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm leading-relaxed text-muted">
                    {t.basanos.noSources}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export function ClaimDossier({
  claims,
  onSeek,
}: {
  claims: Claim[]
  onSeek: (seconds: number) => void
}) {
  const { t } = useT()

  if (!claims.length) {
    return (
      <p className="rounded-md border border-dashed border-line p-6 text-sm leading-relaxed text-muted">
        {t.basanos.dossierEmpty}
      </p>
    )
  }

  return (
    <div className="space-y-4">
      {claims.map((claim, i) => (
        <DossierRow key={claim.id} claim={claim} index={i} onSeek={onSeek} />
      ))}
    </div>
  )
}
