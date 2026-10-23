import { useMemo } from 'react'
import { useT } from '../../i18n'
import { cn } from '../../lib/cn'
import { MathBlock } from '../ui/Math'
import { Slider } from '../ui/Slider'
import { TOOL_LABELS as C } from '../../constants/toolLabels'
import { CRITERIA } from '../../data/tools/criteria'
import { DEFAULT_WEIGHTS, WEIGHT_MAX, WEIGHT_MIN, rankCases } from '../../lib/toolScoring'
import { useLens, useToolState } from '../../store/useToolState'
import { useTool } from './ToolContext'
import { CaseCard } from './CaseCard'
import { PatternChip, SectionHead } from './bits'

// The published formula. The criteria are named beneath it in plain text:
// KaTeX has no metrics for Greek inside \text{} and warns on every re-render.
const FORMULA = String.raw`P \;=\; \frac{\sum_{k} w_k\, s_k}{\sum_{k} w_k}`

// The ten cases, ranked by the published formula under the citizen's own
// weights. Each row opens into the full argument. Rank movement against the
// default weighting is shown, so a citizen sees their vision reorder the list.
export function PriorityBoard({
  openId,
  onToggle,
}: {
  openId: string | null
  onToggle: (id: string) => void
}) {
  const { lang } = useT()
  const tool = useTool()
  const { weights } = useLens(tool.id)
  const setWeight = useToolState((s) => s.setWeight)
  const resetWeights = useToolState((s) => s.resetWeights)

  const ranked = useMemo(() => rankCases(tool.cases, weights), [tool, weights])
  const defaultRank = useMemo(
    () => new Map(rankCases(tool.cases, DEFAULT_WEIGHTS).map((r) => [r.item.id, r.rank])),
    [tool],
  )

  return (
    <section id="ten" className="scroll-mt-20">
      <SectionHead index="I" title={C.rankTitle[lang]} lede={C.rankLede[lang]} />

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_20rem]">
        <div className="text-base md:text-lg">
          <MathBlock tex={FORMULA} />
          <p className="mt-3 font-mono text-xs leading-relaxed text-muted">
            k ∈ {'{'}
            {CRITERIA.map((c) => c.name[lang].toLowerCase()).join(', ')}
            {'}'} · w ∈ [{WEIGHT_MIN}, {WEIGHT_MAX}] · s ∈ [1, 10]
          </p>
        </div>
        <div className="rounded-md border border-line bg-elev p-5">
          <div className="mb-4 flex items-baseline justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-gold">
              {C.weightsTitle[lang]}
            </span>
            <button
              type="button"
              onClick={() => resetWeights(tool.id)}
              className="text-xs text-muted transition-colors hover:text-text"
            >
              {C.weightsReset[lang]}
            </button>
          </div>
          <div className="space-y-4">
            {CRITERIA.map((c) => (
              <Slider
                key={c.id}
                label={c.name[lang]}
                value={weights[c.id]}
                min={WEIGHT_MIN}
                max={WEIGHT_MAX}
                step={1}
                onChange={(w) => setWeight(tool.id, c.id, w)}
                display={`×${weights[c.id]}`}
              />
            ))}
          </div>
        </div>
      </div>

      <ol className="mt-10 border-b border-line">
        {ranked.map(({ item, rank, score }) => {
          const open = openId === item.id
          const moved = (defaultRank.get(item.id) ?? rank) - rank
          return (
            <li key={item.id} id={item.id} className="scroll-mt-20 border-t border-line">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => onToggle(item.id)}
                className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-start gap-4 py-5 text-left md:grid-cols-[3.5rem_1fr_8rem]"
              >
                <span className="font-mono text-2xl leading-none text-gold md:text-3xl">
                  {String(rank).padStart(2, '0')}
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">
                    {item.place[lang]} · {item.when}
                  </span>
                  <span className="mt-1 block font-medium leading-snug text-text transition-colors group-hover:text-gold">
                    {item.title[lang]}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{item.harmed[lang]}</span>
                  <span className="mt-3 flex flex-wrap gap-2">
                    {item.patterns.map((p) => (
                      <PatternChip key={p} id={p} />
                    ))}
                  </span>
                </span>
                <span className="text-right">
                  <span className="block font-mono text-xl text-text">{score.toFixed(2)}</span>
                  <span className="mt-1 block h-1 w-full rounded-full bg-line">
                    <span className="block h-1 rounded-full bg-gold" style={{ width: `${score * 10}%` }} />
                  </span>
                  <span
                    className={cn(
                      'mt-2 block font-mono text-[11px]',
                      moved > 0 ? 'text-positive' : moved < 0 ? 'text-negative' : 'text-muted/60',
                    )}
                  >
                    {moved > 0 ? `▲ ${moved}` : moved < 0 ? `▼ ${-moved}` : '—'}
                  </span>
                  <span className="mt-2 hidden text-xs text-muted group-hover:text-gold md:block">
                    {open ? C.closeCase[lang] : C.readCase[lang]} {open ? '−' : '+'}
                  </span>
                </span>
              </button>
              {open && <CaseCard item={item} weights={weights} />}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
