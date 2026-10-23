import { useT } from '../../i18n'
import { cn } from '../../lib/cn'
import { TOOL_LABELS as C } from '../../constants/toolLabels'
import { findPattern, findSafeguard, safeguardsFor, similarCases } from '../../lib/toolScoring'
import { useLens, useToolState } from '../../store/useToolState'
import { useTool } from './ToolContext'
import { MicroLabel, SectionHead } from './bits'

// "Your own case" — private by construction. The citizen marks the patterns
// they recognise; the page answers with the safeguards that would have
// protected them and the published cases that share the pattern. No names, no
// free text, no network: the answers live only in this browser.
export function MyCase({ onOpenCase }: { onOpenCase: (id: string) => void }) {
  const { lang } = useT()
  const tool = useTool()
  const chosen = useLens(tool.id).myPatterns
  const togglePattern = useToolState((s) => s.togglePattern)
  const clearMyCase = useToolState((s) => s.clearMyCase)
  const endorseMany = useToolState((s) => s.endorseMany)

  const shields = safeguardsFor(chosen, (id) => findPattern(tool, id).safeguards)
  const similar = similarCases(chosen, tool.cases).slice(0, 4)

  return (
    <section id="your-case" className="scroll-mt-20">
      <SectionHead index="IV" title={C.myCaseTitle[lang]} lede={tool.copy.myCaseLede[lang]} />

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_22rem]">
        <ul className="space-y-2">
          {tool.patterns.map((p) => {
            const on = chosen.includes(p.id)
            return (
              <li key={p.id}>
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={on}
                  onClick={() => togglePattern(tool.id, p.id)}
                  className={cn(
                    'flex w-full items-start gap-4 rounded-md border px-4 py-3 text-left transition-colors',
                    on ? 'border-copper/60 bg-copper/10' : 'border-line hover:border-copper/40',
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border font-mono text-xs',
                      on ? 'border-copper bg-copper text-bg' : 'border-line text-transparent',
                    )}
                  >
                    ✓
                  </span>
                  <span>
                    <span className="block text-sm text-text">{p.question[lang]}</span>
                    <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-wider text-copper/80">
                      {p.name[lang]}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <aside className="h-fit rounded-md border border-line bg-elev p-5 md:sticky md:top-20">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-positive">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-positive" />
              {C.myCasePrivate[lang]}
            </span>
            {chosen.length > 0 && (
              <button type="button" onClick={() => clearMyCase(tool.id)} className="text-xs text-muted hover:text-text">
                {C.myCaseClear[lang]}
              </button>
            )}
          </div>

          {chosen.length === 0 ? (
            <p className="mt-4 text-sm leading-relaxed text-muted">{C.myCaseEmpty[lang]}</p>
          ) : (
            <>
              <MicroLabel tone="gold" className="mt-5">
                {C.myCaseShield[lang]}
              </MicroLabel>
              <ul className="mt-2 space-y-2">
                {shields.map(({ id, votes }) => {
                  const s = findSafeguard(tool, id)
                  return (
                    <li key={id} className="flex items-baseline justify-between gap-3">
                      <a href={`#sg-${id}`} className="text-sm text-text hover:text-gold">
                        <span className="font-mono text-gold">{s.n}</span> {s.name[lang]}
                      </a>
                      <span className="font-mono text-xs text-muted">×{votes}</span>
                    </li>
                  )
                })}
              </ul>
              <button
                type="button"
                onClick={() => endorseMany(tool.id, shields.map((x) => x.id))}
                className="mt-4 w-full rounded-md border border-gold/50 px-4 py-2 text-sm text-gold transition-colors hover:bg-gold/10"
              >
                {C.myCaseAdoptAll[lang]}
              </button>

              <MicroLabel className="mt-6">{C.myCaseSimilar[lang]}</MicroLabel>
              <ul className="mt-2 space-y-2">
                {similar.map(({ item }) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => onOpenCase(item.id)}
                      className="text-left text-sm leading-snug text-muted hover:text-gold"
                    >
                      {item.place[lang]} · {item.when}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </aside>
      </div>
    </section>
  )
}
