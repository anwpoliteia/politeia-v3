import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useT } from '../i18n'
import { Container, PageHeader } from '../components/ui/primitives'
import { VirtueMark } from '../components/ui/VirtueMark'
import { SentimentBar } from '../components/ui/SentimentBar'
import {
  latestProposalForMinistry,
  listMinistries,
  sentiment,
} from '../data/repository'
import { VIRTUES, type VirtueId } from '../constants/virtues'
import { DIMENSIONS, type DimensionId } from '../constants/dimensions'
import { formatRelative } from '../lib/format'

// /ministries — The Council. Grid of all ministries, filterable by virtue and
// by Eudaimonia dimension (spec §4).
export function Council() {
  const { t, lang } = useT()
  const [virtue, setVirtue] = useState<VirtueId | ''>('')
  const [dimension, setDimension] = useState<DimensionId | ''>('')

  const ministries = listMinistries()

  const filtered = useMemo(() => {
    return ministries.filter((m) => {
      if (virtue && m.primaryVirtue !== virtue) return false
      if (dimension) {
        const latest = latestProposalForMinistry(m.id)
        const d = latest?.eudaimoniaDelta[dimension]
        if (!d) return false
      }
      return true
    })
  }, [ministries, virtue, dimension])

  return (
    <div>
      <PageHeader title={t.council.title} subtitle={t.council.subtitle} />

      <Container className="py-8">
        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <label className="flex flex-col gap-1 text-xs text-muted">
            {t.council.filterByVirtue}
            <select
              value={virtue}
              onChange={(e) => setVirtue(e.target.value as VirtueId | '')}
              className="min-h-11 min-w-56 rounded-md border border-line bg-elev px-3 py-2 text-sm text-text"
            >
              <option value="">{t.council.allVirtues}</option>
              {VIRTUES.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.el} · {lang === 'el' ? v.gloss_el : v.gloss_en}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            {t.council.filterByDimension}
            <select
              value={dimension}
              onChange={(e) => setDimension(e.target.value as DimensionId | '')}
              className="min-h-11 min-w-56 rounded-md border border-line bg-elev px-3 py-2 text-sm text-text"
            >
              <option value="">{t.council.allDimensions}</option>
              {DIMENSIONS.map((d) => (
                <option key={d.id} value={d.id}>
                  {lang === 'el' ? d.el : d.en}
                </option>
              ))}
            </select>
          </label>
        </div>

        {filtered.length === 0 ? (
          <p className="py-12 text-center text-muted">{t.council.noResults}</p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((m) => {
              const latest = latestProposalForMinistry(m.id)
              const to = m.isSynthesis ? '/nous' : `/ministry/${m.slug}`
              return (
                <li key={m.id}>
                  <Link
                    to={to}
                    className="flex h-full flex-col rounded-md border border-line bg-elev p-5 transition-colors hover:border-gold/40"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-base font-semibold leading-snug text-text">
                        {m.name[lang]}
                      </h2>
                      {m.isSynthesis && (
                        <span className="shrink-0 rounded-md border border-gold/40 px-2 py-0.5 text-xs text-gold">
                          {t.council.synthesis}
                        </span>
                      )}
                    </div>

                    <div className="mt-3">
                      <VirtueMark id={m.primaryVirtue} showGloss />
                    </div>

                    <div className="mt-4 flex-1">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-muted">
                        {t.council.latestProposal}
                      </div>
                      {latest ? (
                        <p className="mt-1 text-sm leading-snug text-text">
                          {latest.title[lang]}
                        </p>
                      ) : (
                        <p className="mt-1 text-sm text-muted">
                          {t.council.noProposalYet}
                        </p>
                      )}
                    </div>

                    {latest && (
                      <div className="mt-4">
                        <SentimentBar approval={sentiment(latest.id)} />
                        <div className="mt-2 font-mono text-[11px] text-muted">
                          {t.common.lastUpdated}:{' '}
                          {formatRelative(latest.createdAt, lang)}
                        </div>
                      </div>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </Container>
    </div>
  )
}
