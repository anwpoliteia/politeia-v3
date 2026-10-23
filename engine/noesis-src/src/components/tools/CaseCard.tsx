import { useT } from '../../i18n'
import { Field } from '../ui/primitives'
import { TOOL_LABELS as C } from '../../constants/toolLabels'
import type { ToolCase, Weights } from '../../data/tools/types'
import { useTool } from './ToolContext'
import { MicroLabel, PatternChip, SafeguardChip } from './bits'
import { ScoreBars } from './ScoreBars'

// One case, argued in full, in the order a reader needs it: what this means,
// what happened, what the system did, why that betrays justice, what a
// safeguard would have changed, the strongest counter-argument, the reply, and
// what one citizen can do. The side rail holds status, scores and sources.
export function CaseCard({ item, weights }: { item: ToolCase; weights: Weights }) {
  const { lang } = useT()
  const tool = useTool()

  return (
    <article className="grid gap-8 border-t border-line bg-elev px-5 py-8 md:grid-cols-[1fr_17rem] md:px-8">
      <div className="space-y-7">
        <Field label={C.whatThisMeans[lang]} accent="gold">
          <p className="text-lg leading-relaxed text-text">{item.plain[lang]}</p>
        </Field>

        <Field label={C.facts[lang]}>
          <ol className="space-y-3 border-l border-line pl-5">
            {item.facts.map((f, i) => (
              <li key={i} className="relative text-sm leading-relaxed text-text">
                <span aria-hidden className="absolute -left-[1.4rem] top-2 h-1.5 w-1.5 rounded-full bg-gold/70" />
                {f[lang]}
              </li>
            ))}
          </ol>
        </Field>

        <Field label={C.outcome[lang]}>
          <p className="text-sm leading-relaxed text-text">{item.outcome[lang]}</p>
        </Field>

        <Field label={C.breach[lang]} accent="gold">
          <p className="leading-relaxed text-text">{item.breach[lang]}</p>
        </Field>

        <Field label={C.counterfactual[lang]} accent="gold">
          <div className="mb-3 flex flex-wrap gap-2">
            {item.safeguards.map((s) => (
              <SafeguardChip key={s} id={s} />
            ))}
          </div>
          <p className="text-sm leading-relaxed text-text">{item.counterfactual[lang]}</p>
        </Field>

        <div className="rounded-md border border-copper/40 bg-copper/5 p-5">
          <MicroLabel tone="copper">{C.antilogos[lang]}</MicroLabel>
          <p className="mt-2 text-sm leading-relaxed text-text">{item.antilogos[lang]}</p>
          <MicroLabel tone="gold" className="mt-5">
            {C.reply[lang]}
          </MicroLabel>
          <p className="mt-2 text-sm leading-relaxed text-text">{item.reply[lang]}</p>
        </div>

        <div className="rounded-md border border-gold/40 p-5">
          <MicroLabel tone="gold">{C.lever[lang]}</MicroLabel>
          <p className="mt-2 leading-relaxed text-text">{item.lever[lang]}</p>
        </div>
      </div>

      <aside className="space-y-6 md:border-l md:border-line md:pl-6">
        <div>
          <MicroLabel>{C.harmed[lang]}</MicroLabel>
          <p className="mt-1 text-sm text-text">{item.harmed[lang]}</p>
        </div>
        <div>
          <MicroLabel>{C.status[lang]}</MicroLabel>
          <p className="mt-1 text-sm leading-relaxed text-text">{item.status[lang]}</p>
        </div>
        <div>
          <ScoreBars scores={item.scores} weights={weights} />
          <p className="mt-2 text-[11px] leading-relaxed text-muted">{C.scoresNote[lang]}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {item.patterns.map((p) => (
            <PatternChip key={p} id={p} />
          ))}
        </div>
        <div>
          <MicroLabel>{C.sources[lang]}</MicroLabel>
          <ul className="mt-2 space-y-2">
            {item.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs leading-snug text-muted underline-offset-2 hover:text-gold hover:underline"
                >
                  {s.title} ↗
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted/70">
            {C.verified[lang]} {tool.verifiedOn}
          </p>
        </div>
      </aside>
    </article>
  )
}
