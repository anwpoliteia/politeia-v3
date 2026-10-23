import { useT } from '../../i18n'
import { cn } from '../../lib/cn'
import { Collapsible } from '../ui/Collapsible'
import { StatusChip } from '../ui/StatusChip'
import { VirtueMark } from '../ui/VirtueMark'
import { getDimension, type DimensionId } from '../../constants/dimensions'
import { TOOL_LABELS as C } from '../../constants/toolLabels'
import type { Safeguard } from '../../data/tools/types'
import { useLens, useToolState } from '../../store/useToolState'
import { useTool } from './ToolContext'
import { MicroLabel, SectionHead } from './bits'

// The ten safeguards as Politeia proposals: non-binding (Hard Rule 1), each
// with its counter-argument (Rule 3), distributional note and Index effect.
// "I adopt this" writes to the citizen's own Charter on this device.
export function SafeguardGrid({ onOpenCase }: { onOpenCase: (id: string) => void }) {
  const { lang } = useT()
  const tool = useTool()
  return (
    <section id="safeguards" className="scroll-mt-20">
      <SectionHead index="II" title={C.safeguardsTitle[lang]} lede={tool.copy.safeguardsLede[lang]} />
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {tool.safeguards.map((s) => (
          <SafeguardCard key={s.id} s={s} onOpenCase={onOpenCase} />
        ))}
      </ul>
    </section>
  )
}

function SafeguardCard({ s, onOpenCase }: { s: Safeguard; onOpenCase: (id: string) => void }) {
  const { lang } = useT()
  const tool = useTool()
  const endorsed = useLens(tool.id).endorsed.includes(s.id)
  const toggleEndorse = useToolState((st) => st.toggleEndorse)
  const answers = tool.cases.filter((c) => c.safeguards.includes(s.id))
  const deltas = Object.entries(s.delta) as [DimensionId, number][]

  return (
    <li
      id={`sg-${s.id}`}
      className={cn(
        'scroll-mt-20 flex flex-col rounded-md border bg-elev p-5 transition-colors',
        endorsed ? 'border-gold/60' : 'border-line',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-lg text-gold">{s.n}</span>
          <h3 className="font-semibold leading-snug text-text">{s.name[lang]}</h3>
        </div>
        <StatusChip className="shrink-0" />
      </div>

      <p className="mt-3 leading-relaxed text-text">{s.plain[lang]}</p>
      <p className="mt-3 text-xs italic leading-relaxed text-muted">
        <span className="not-italic text-gold/80">{C.precedent[lang]} · </span>
        {s.precedent[lang]}
      </p>

      <div className="mt-4 flex-1">
        <Collapsible summary={C.how[lang]} defaultOpen={false}>
          <div className="space-y-4 text-sm leading-relaxed">
            <p className="text-text">{s.how[lang]}</p>
            <div>
              <MicroLabel tone="gold">{C.humans[lang]}</MicroLabel>
              <p className="mt-1 text-text">{s.humans[lang]}</p>
            </div>
            <div className="rounded-md border border-copper/40 bg-copper/5 p-3">
              <MicroLabel tone="copper">{C.antilogos[lang]}</MicroLabel>
              <p className="mt-1 text-text">{s.antilogos[lang]}</p>
            </div>
            <div>
              <MicroLabel>{C.distributional[lang]}</MicroLabel>
              <p className="mt-1 text-muted">{s.distributional[lang]}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {s.virtues.map((v) => (
                <VirtueMark key={v} id={v} />
              ))}
              {deltas.map(([d, v]) => (
                <span key={d} className="rounded-md border border-positive/40 px-2 py-0.5 font-mono text-xs text-positive">
                  {(lang === 'el' ? getDimension(d).short_el : getDimension(d).short_en)} +{v}
                </span>
              ))}
            </div>
          </div>
        </Collapsible>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
        <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
          <span>{C.answersCases[lang]}:</span>
          {answers.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => onOpenCase(c.id)}
              className="underline-offset-2 hover:text-gold hover:underline"
            >
              {c.place[lang].split(',')[0]}
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-pressed={endorsed}
          onClick={() => toggleEndorse(tool.id, s.id)}
          className={cn(
            'min-h-9 rounded-md px-4 py-2 text-sm transition-colors',
            endorsed
              ? 'bg-gold font-medium text-bg hover:opacity-90'
              : 'border border-gold/50 text-gold hover:bg-gold/10',
          )}
        >
          {endorsed ? `✓ ${C.endorsed[lang]}` : C.endorse[lang]}
        </button>
      </div>
    </li>
  )
}
