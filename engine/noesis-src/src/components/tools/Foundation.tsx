import { useT } from '../../i18n'
import { Container } from '../ui/primitives'
import { useTool } from './ToolContext'

// The reason, before the cases: the tool's classical quotation (in polytonic
// Greek), then the three principles that shape every one of its safeguards.
export function Foundation() {
  const { lang } = useT()
  const { copy } = useTool()

  return (
    <section id="foundation" className="scroll-mt-20 border-b border-line">
      <Container className="py-14 md:py-20">
        <figure className="max-w-4xl">
          <blockquote
            lang="grc"
            className="font-greek text-3xl leading-snug text-text text-balance md:text-5xl"
          >
            «{copy.quoteGreek}»
          </blockquote>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {copy.quoteRender[lang]}
          </p>
          <figcaption className="mt-4 font-mono text-xs uppercase tracking-wider text-gold">
            {copy.quoteCite[lang]}
          </figcaption>
        </figure>

        <div className="mt-14 grid gap-px border-t border-line md:grid-cols-3">
          {copy.principles.map((p, i) => (
            <div key={p.title.en} className="pt-8 md:px-6 md:first:pl-0 md:last:pr-0">
              <div className="font-mono text-sm text-gold">0{i + 1}</div>
              <h3 className="mt-3 text-lg font-semibold text-text">{p.title[lang]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body[lang]}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
