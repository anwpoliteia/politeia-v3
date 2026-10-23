import { useT } from '../../i18n'
import { formatPercent } from '../../lib/format'
import { cn } from '../../lib/cn'

// Aggregate citizen sentiment as a single approval bar. Never shows individual
// votes (Hard Rule 6) — only the aggregate fraction.
export function SentimentBar({
  approval,
  className,
  showLabel = true,
}: {
  approval: number // 0..1
  className?: string
  showLabel?: boolean
}) {
  const { t, lang } = useT()
  const pct = Math.round(approval * 100)
  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="mb-1 flex items-center justify-between text-xs text-muted">
          <span>{t.council.citizenSentiment}</span>
          <span className="font-mono text-positive">{formatPercent(approval, lang)}</span>
        </div>
      )}
      <div
        className="flex h-1.5 w-full overflow-hidden rounded-md bg-negative/30"
        role="img"
        aria-label={`${t.council.citizenSentiment}: ${formatPercent(approval, lang)}`}
      >
        <div className="h-full bg-positive" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
