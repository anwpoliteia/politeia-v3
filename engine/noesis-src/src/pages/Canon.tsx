import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useT } from '../i18n'
import { Container, PageHeader } from '../components/ui/primitives'
import { MathBlock } from '../components/ui/Math'
import { cn } from '../lib/cn'
import {
  CANON_SECTIONS,
  CANON_TAGS,
  CANON_TAG_ORDER,
  TACTICS,
  type CanonTag,
} from '../constants/canon'

// Gödel's incompleteness, rendered for the coda. First: the self-referential
// sentence that is true precisely because it is unprovable. Second: no
// consistent system can prove its own consistency from within.
const GODEL_FIRST = String.raw`G \;\equiv\; \neg\,\mathrm{Prov}_{T}\!\left(\ulcorner G \urcorner\right)
\qquad T \nvdash G,\;\; T \nvdash \neg G`
const GODEL_SECOND = String.raw`\mathrm{Con}(T)\ \Longrightarrow\ T \nvdash \mathrm{Con}(T)`

// /canon — The Canon & The Statecraft. Reference appendix to /blueprint:
// Part I maps each foundational text to a component of POLITEIA; Part II is the
// five durable political tactics, each tied back to the platform's design.
export function Canon() {
  const { t, lang } = useT()
  const [filter, setFilter] = useState<CanonTag | null>(null)

  return (
    <div>
      <PageHeader title={t.canon.title} subtitle={t.canon.subtitle} />

      <Container className="py-12 space-y-16">
        {/* PART I — THE CANON */}
        <section className="space-y-10">
          <div className="border-b border-line pb-4">
            <h2 className="font-mono text-sm uppercase tracking-wider text-gold">
              {t.canon.partCanon}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              {t.canon.partCanonSub}
            </p>
          </div>

          {/* Filter rail: each chip maps to a component of the live system */}
          <div>
            <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted">
              {t.canon.filterHint}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <FilterChip active={filter === null} tone="gold" onClick={() => setFilter(null)}>
                {t.canon.filterAll}
              </FilterChip>
              {CANON_TAG_ORDER.map((tag) => (
                <FilterChip
                  key={tag}
                  active={filter === tag}
                  tone={CANON_TAGS[tag].tone}
                  onClick={() => setFilter(filter === tag ? null : tag)}
                >
                  {CANON_TAGS[tag].label[lang]}
                </FilterChip>
              ))}
            </div>
            {filter && (
              <Link
                to={CANON_TAGS[filter].route}
                className={cn(
                  'mt-4 inline-flex rounded-md border px-4 py-2 text-sm transition-colors',
                  CANON_TAGS[filter].tone === 'copper'
                    ? 'border-copper/40 text-copper hover:bg-copper/10'
                    : 'border-gold/40 text-gold hover:bg-gold/10',
                )}
              >
                {t.canon.liveLink}
              </Link>
            )}
          </div>

          {CANON_SECTIONS.map((section) => {
            const works = filter
              ? section.works.filter((w) => w.tag === filter)
              : section.works
            if (works.length === 0) return null
            return (
              <div key={section.numeral}>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-lg text-gold">{section.numeral}</span>
                  <h3 className="text-xl font-semibold text-text">
                    {section.title[lang]}
                  </h3>
                </div>
                <p className="mt-1 max-w-2xl text-sm text-muted">
                  {section.subtitle[lang]}
                </p>

                <ul className="mt-5 space-y-3">
                  {works.map((w) => (
                    <li
                      key={w.title.en}
                      className="rounded-md border border-line bg-elev p-5"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="leading-snug">
                          <span className="font-medium text-text">
                            {w.author[lang]}
                          </span>
                          <span className="text-muted"> — {w.title[lang]}</span>
                        </div>
                        <CanonTagChip tag={w.tag} lang={lang} />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {w.note[lang]}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </section>

        {/* PART II — FIVE TACTICS */}
        <section className="space-y-8">
          <div className="border-b border-line pb-4">
            <h2 className="font-mono text-sm uppercase tracking-wider text-gold">
              {t.canon.partTactics}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              {t.canon.partTacticsSub}
            </p>
          </div>

          <ul className="space-y-6">
            {TACTICS.map((tac) => (
              <li key={tac.n} className="rounded-md border border-line bg-elev p-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-3xl text-gold">{tac.n}</span>
                  <h3 className="text-lg font-semibold leading-snug text-text">
                    {tac.name[lang]}
                  </h3>
                </div>

                <div className="mt-5 space-y-4">
                  <Labeled label={t.canon.mechanism}>{tac.mechanism[lang]}</Labeled>
                  <Labeled label={t.canon.proof}>{tac.proof[lang]}</Labeled>
                  {tac.seeAlso[lang] !== '—' && (
                    <p className="text-sm leading-relaxed text-muted">
                      <span className="text-muted/70">{t.canon.seeAlso} · </span>
                      {tac.seeAlso[lang]}
                    </p>
                  )}
                  <Labeled label={t.canon.occasion} accent>
                    {tac.occasion[lang]}
                  </Labeled>
                </div>

                {tac.tie && (
                  <div className="mt-5 rounded-md border border-copper/40 bg-copper/5 p-4">
                    <div className="font-mono text-xs uppercase tracking-wider text-copper">
                      {t.canon.antilogosTie}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-text">
                      {tac.tie[lang]}
                    </p>
                    {tac.tieHref && (
                      <Link
                        to={tac.tieHref}
                        className="mt-3 inline-flex text-sm text-gold underline-offset-2 hover:underline"
                      >
                        {t.canon.seeAntilogos}
                      </Link>
                    )}
                  </div>
                )}

                {/* Illustrative plate */}
                {tac.image && (
                  <figure className="mt-6">
                    <img
                      src={tac.image.src}
                      alt={tac.image.alt[lang]}
                      loading="lazy"
                      className="w-full rounded-md border border-line"
                    />
                    <figcaption className="mt-2 text-xs leading-relaxed text-muted">
                      {tac.image.caption[lang]}
                    </figcaption>
                  </figure>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Closing */}
        <p className="max-w-3xl border-t border-line pt-8 text-sm leading-relaxed text-muted">
          {t.canon.closing}
        </p>

        {/* Coda — incompleteness & the apophatic ground of the Law */}
        <section className="max-w-3xl border-t border-line pt-12">
          <div className="font-mono text-xs uppercase tracking-wider text-copper">
            {t.canon.coda.eyebrow}
          </div>
          <h2 className="mt-3 font-serif text-2xl leading-snug text-text">
            {t.canon.coda.title}
          </h2>

          {/* Gödel */}
          <div className="mt-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg text-text">{t.canon.coda.godelTitle}</h3>
              <span className="shrink-0 font-mono text-xs text-muted">
                {t.canon.coda.godelAttrib}
              </span>
            </div>
            <div className="mt-4 space-y-3">
              <MathBlock tex={GODEL_FIRST} />
              <MathBlock tex={GODEL_SECOND} />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {t.canon.coda.godelBody}
            </p>
            <div className="mt-5 rounded-md border border-copper/40 bg-copper/5 p-4">
              <div className="font-mono text-xs uppercase tracking-wider text-copper">
                {t.canon.antilogosTie}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-text">
                {t.canon.coda.godelTie}
              </p>
            </div>
          </div>

          {/* God — the apophatic way */}
          <div className="mt-12">
            <h3 className="text-lg text-text">{t.canon.coda.godTitle}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {t.canon.coda.godBody}
            </p>
            <p className="mt-5 border-l-2 border-gold/50 pl-4 text-base leading-relaxed text-text">
              {t.canon.coda.godConclusion}
            </p>
          </div>
        </section>
      </Container>
    </div>
  )
}

function FilterChip({
  active,
  tone,
  onClick,
  children,
}: {
  active: boolean
  tone: 'gold' | 'copper'
  onClick: () => void
  children: React.ReactNode
}) {
  const copper = tone === 'copper'
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'rounded-md border px-3 py-1.5 text-xs transition-colors',
        active
          ? copper
            ? 'border-copper bg-copper/15 text-copper'
            : 'border-gold bg-gold/15 text-gold'
          : 'border-line text-muted hover:text-text',
      )}
    >
      {children}
    </button>
  )
}

function CanonTagChip({ tag, lang }: { tag: CanonTag; lang: 'el' | 'en' }) {
  const meta = CANON_TAGS[tag]
  const copper = meta.tone === 'copper'
  return (
    <span
      className={
        'inline-flex shrink-0 items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs ' +
        (copper ? 'border-copper/40 text-copper' : 'border-gold/40 text-gold')
      }
    >
      <span
        aria-hidden
        className={
          'inline-block h-1 w-1 rounded-full ' + (copper ? 'bg-copper' : 'bg-gold')
        }
      />
      {meta.label[lang]}
    </span>
  )
}

function Labeled({
  label,
  accent,
  children,
}: {
  label: string
  accent?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <div
        className={
          'mb-1 font-mono text-xs uppercase tracking-wider ' +
          (accent ? 'text-gold' : 'text-muted')
        }
      >
        {label}
      </div>
      <p className="text-sm leading-relaxed text-text">{children}</p>
    </div>
  )
}
