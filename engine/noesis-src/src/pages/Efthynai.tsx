import { useT } from '../i18n'
import { Container, PageHeader } from '../components/ui/primitives'
import { HUB_COPY as H } from '../constants/hubCopy'
import { TOOL_AREAS, TOOLS } from '../data/tools/registry'
import { useToolState } from '../store/useToolState'
import { SectionHead } from '../components/tools/bits'
import { AreaRow } from '../components/tools/hub/AreaRow'
import { CombinedCharter } from '../components/tools/hub/CombinedCharter'

// /efthynai — ΕΥΘΥΝΑΙ: the ten accountability tools in one place, ordered by
// evidence, each tied to its Counsellor in the Council and to the Index
// dimension it protects; below, the citizen's whole Charter across all tools.
export function Efthynai() {
  const { lang } = useT()
  const lenses = useToolState((s) => s.lenses)

  const stats = [
    { value: `${TOOLS.length}/${TOOL_AREAS.length}`, label: H.statTools[lang] },
    { value: TOOLS.reduce((n, t) => n + t.cases.length, 0), label: H.statCases[lang] },
    { value: TOOLS.reduce((n, t) => n + t.safeguards.length, 0), label: H.statSafeguards[lang] },
    { value: TOOLS.reduce((n, t) => n + (lenses[t.id]?.endorsed.length ?? 0), 0), label: H.statAdopted[lang] },
  ]

  return (
    <div>
      <PageHeader eyebrow={H.eyebrow[lang]} title={H.title[lang]} subtitle={H.subtitle[lang]} />

      <section className="border-b border-line">
        <Container className="grid grid-cols-2 gap-px py-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="py-2 md:pr-6">
              <div className="font-mono text-3xl text-gold">{s.value}</div>
              <div className="mt-1 text-xs text-muted">{s.label}</div>
            </div>
          ))}
        </Container>
      </section>

      <Container className="space-y-20 py-16">
        <section id="areas" className="scroll-mt-20">
          <SectionHead index="I" title={H.areasTitle[lang]} lede={H.areasLede[lang]} />
          <ol className="mt-6 border-b border-line">
            {TOOL_AREAS.map((a) => (
              <AreaRow key={a.n} area={a} />
            ))}
          </ol>
        </section>

        <CombinedCharter />
      </Container>
    </div>
  )
}
