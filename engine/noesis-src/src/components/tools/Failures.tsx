import { useT } from '../../i18n'
import { TOOL_LABELS as C, FAILURES } from '../../constants/toolLabels'
import { MicroLabel, SectionHead } from './bits'

// The section's own Αντίλογος (Hard Rule 3): three real systems that let AI
// decide about people, and the design rule each one taught this page.
export function Failures() {
  const { lang } = useT()
  return (
    <section id="antilogos" className="scroll-mt-20">
      <SectionHead index="III" title={C.failTitle[lang]} lede={C.failLede[lang]} />
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {FAILURES.map((f) => (
          <li key={f.name.en} className="flex flex-col rounded-md border border-copper/40 bg-copper/5 p-5">
            <MicroLabel tone="copper">{f.where[lang]}</MicroLabel>
            <h3 className="mt-2 font-semibold text-text">{f.name[lang]}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-text">{f.what[lang]}</p>
            <div className="mt-4 border-t border-copper/30 pt-4">
              <MicroLabel tone="gold">{C.failLesson[lang]}</MicroLabel>
              <p className="mt-1 text-sm leading-relaxed text-text">{f.lesson[lang]}</p>
            </div>
            <a
              href={f.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs text-muted underline-offset-2 hover:text-gold hover:underline"
            >
              {f.source.title} ↗
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
