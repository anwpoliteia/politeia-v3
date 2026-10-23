import { useT } from '../../i18n'
import { Collapsible } from '../ui/Collapsible'
import { ARISTOTLE } from '../../constants/aristotle'

// The philosophical foundation of the objective function, closing the Eudaimonia
// equation section on /blueprint. Epigraph + a one-line bridge to the equation
// are always visible; the full essay (original Greek) sits behind a collapsible.
export function AristotleFoundation() {
  const { lang } = useT()
  const a = ARISTOTLE

  return (
    <div className="mt-12 border-t border-line pt-10">
      <div className="font-mono text-xs uppercase tracking-wider text-gold">
        {a.sectionTitle[lang]}
      </div>

      <div className="mt-1 font-mono text-xs text-muted">{a.attribution[lang]}</div>

      <div className="mt-1 text-xs text-muted">
        {a.source.byLabel[lang]}:{' '}
        <a
          href={a.source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline-offset-2 hover:underline"
        >
          {a.source.author}
        </a>
        {' · «'}
        {a.source.articleTitle}
        {'»'}
      </div>

      <blockquote className="mt-5 max-w-3xl border-l-2 border-gold/50 pl-5 text-2xl font-semibold leading-snug text-text text-balance md:text-3xl">
        {a.epigraph[lang]}
      </blockquote>

      <p className="mt-5 max-w-3xl leading-relaxed text-muted">{a.framing[lang]}</p>

      <div className="mt-6">
        <Collapsible summary={a.readLabel[lang]} defaultOpen={false}>
          {lang === 'en' && a.originalNote.en && (
            <p className="mb-6 text-xs italic text-muted">{a.originalNote.en}</p>
          )}
          <div className="max-w-3xl space-y-10">
            {a.sections.map((section) => (
              <div key={section.num}>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-gold">{section.num}</span>
                  <h4 className="text-lg font-semibold text-text">{section.title}</h4>
                </div>
                <div className="mt-3 space-y-4">
                  {section.items.map((item, i) => (
                    <p key={i} className="leading-relaxed text-muted">
                      {item.mark && (
                        <span className="mr-2 font-mono text-sm text-gold">
                          {item.mark}.
                        </span>
                      )}
                      {item.body}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Collapsible>
      </div>
    </div>
  )
}
