import { useT } from '../../i18n'
import { formatPercent } from '../../lib/format'

// Explicit confidence level (spec §4.2). Honest, low-resolution band labels —
// we never imply false precision (Hard Rule 9).
export function ConfidenceMeter({ value }: { value: number }) {
  const { t, lang } = useT()
  const band =
    value >= 0.72
      ? t.proposal.confidenceHigh
      : value >= 0.6
        ? t.proposal.confidenceMedium
        : t.proposal.confidenceLow
  const segments = 5
  const filled = Math.round(value * segments)

  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1" aria-hidden>
        {Array.from({ length: segments }).map((_, i) => (
          <span
            key={i}
            className={
              'h-2 w-5 rounded-sm ' + (i < filled ? 'bg-gold' : 'bg-line')
            }
          />
        ))}
      </div>
      <span className="font-mono text-sm text-gold">
        {formatPercent(value, lang)}
      </span>
      <span className="text-sm text-muted">· {band}</span>
    </div>
  )
}
