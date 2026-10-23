import { DIMENSIONS } from '../../constants/dimensions'
import type { EudaimoniaDelta } from '../../lib/types'
import { useT } from '../../i18n'
import { formatSignedDelta } from '../../lib/format'

// Estimated signed effect on each of the nine Index dimensions (spec §4.2).
// Diverging bars: gold/positive to the right, copper/negative to the left.
// Honest about who gains and who loses — every dimension shown, even zeroes.
export function DivergingBars({ delta }: { delta: EudaimoniaDelta }) {
  const { lang } = useT()
  const values = DIMENSIONS.map((d) => delta[d.id] ?? 0)
  const max = Math.max(8, ...values.map((v) => Math.abs(v)))

  return (
    <ul className="space-y-1.5">
      {DIMENSIONS.map((d) => {
        const v = delta[d.id] ?? 0
        const widthPct = (Math.abs(v) / max) * 50
        const label = lang === 'el' ? d.el : d.en
        return (
          <li key={d.id} className="grid grid-cols-[1fr_auto] items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="w-44 shrink-0 truncate text-xs text-muted" title={label}>
                {label}
              </span>
              <div className="relative h-3 flex-1">
                {/* zero axis */}
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-line" />
                {v > 0 && (
                  <span
                    className="absolute left-1/2 top-1/2 h-2 -translate-y-1/2 rounded-sm bg-positive"
                    style={{ width: `${widthPct}%` }}
                  />
                )}
                {v < 0 && (
                  <span
                    className="absolute right-1/2 top-1/2 h-2 -translate-y-1/2 rounded-sm bg-negative"
                    style={{ width: `${widthPct}%` }}
                  />
                )}
              </div>
            </div>
            <span
              className={
                'w-8 text-right font-mono text-xs ' +
                (v > 0 ? 'text-positive' : v < 0 ? 'text-negative' : 'text-muted')
              }
            >
              {formatSignedDelta(v)}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
