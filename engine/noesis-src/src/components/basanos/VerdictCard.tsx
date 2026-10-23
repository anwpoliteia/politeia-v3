// One claim on the rail, from the moment it is heard to the moment it is judged.
//
// The card shows the words as spoken before it shows any judgement, and the
// judgement never appears without its evidence next to it. A verdict with no
// sources is displayed as exactly that — ΑΝΕΠΙΒΕΒΑΙΩΤΟ with nothing behind it —
// because a confident-looking card with nothing under it is the failure mode
// this whole section exists to avoid.

import { useT } from '../../i18n'
import { timecode, VERDICT_STYLE, type Claim } from '../../lib/basanos'
import { ConfidenceMeter } from '../ui/ConfidenceMeter'
import { cn } from '../../lib/cn'

export function VerdictCard({
  claim,
  onSeek,
}: {
  claim: Claim
  onSeek: (seconds: number) => void
}) {
  const { t } = useT()
  const verdict = claim.verdict
  const style = verdict ? VERDICT_STYLE[verdict.verdict] : null

  return (
    <article
      className={cn(
        'rounded-md border bg-elev p-4 transition-colors',
        style ? style.border : 'border-line',
      )}
    >
      <header className="flex items-center justify-between gap-3">
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
              'inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider',
              style?.text,
            )}
          >
            <span aria-hidden className={cn('h-1.5 w-1.5 rounded-full', style?.dot)} />
            {t.basanos.verdicts[verdict.verdict]}
          </span>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
            {claim.status === 'failed' ? t.basanos.statusFailed : t.basanos.statusChecking}
            {claim.status !== 'failed' && (
              <span aria-hidden className="v-caret">
                ▍
              </span>
            )}
          </span>
        )}
      </header>

      {/* What was actually said, verbatim. */}
      <blockquote className="mt-3 border-l-2 border-line pl-3 text-sm leading-relaxed text-text">
        «{claim.quote}»
      </blockquote>

      <p className="mt-2 text-sm leading-relaxed text-muted">{claim.claim}</p>

      {verdict && (
        <div className="mt-4 space-y-3 border-t border-line pt-3">
          <p className="text-sm leading-relaxed text-text">{verdict.summary}</p>

          {verdict.evidence.length > 0 && (
            <ul className="space-y-1.5">
              {verdict.evidence.map((line, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span aria-hidden className="text-gold">
                    ·
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="min-w-40 flex-1">
              <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                {t.basanos.confidence}
              </div>
              <ConfidenceMeter value={verdict.confidence} />
            </div>
          </div>

          {verdict.sources.length > 0 ? (
            <div>
              <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                {t.common.sources}
              </div>
              <ul className="space-y-1">
                {verdict.sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-sm text-gold underline-offset-2 hover:underline"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
              {t.basanos.noSources}
            </p>
          )}
        </div>
      )}
    </article>
  )
}
