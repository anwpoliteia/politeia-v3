import { useT } from '../../i18n'
import { cn } from '../../lib/cn'
import { CRITERIA } from '../../data/tools/criteria'
import type { CaseScores, Weights } from '../../data/tools/types'

// The four published scores of one case, drawn as hairline bars. A criterion
// the citizen has weighted to zero fades out — it no longer moves the rank.
export function ScoreBars({ scores, weights }: { scores: CaseScores; weights: Weights }) {
  const { lang } = useT()
  return (
    <dl className="space-y-2">
      {CRITERIA.map((c) => {
        const off = weights[c.id] === 0
        return (
          <div key={c.id} className={cn('grid grid-cols-[6.5rem_1fr_1.5rem] items-center gap-3', off && 'opacity-40')}>
            <dt className="truncate text-xs text-muted" title={c.gloss[lang]}>
              {c.name[lang]}
            </dt>
            <dd className="h-1 rounded-full bg-line">
              <div className="h-1 rounded-full bg-gold" style={{ width: `${scores[c.id] * 10}%` }} />
            </dd>
            <dd className="text-right font-mono text-xs text-text">{scores[c.id]}</dd>
          </div>
        )
      })}
    </dl>
  )
}
