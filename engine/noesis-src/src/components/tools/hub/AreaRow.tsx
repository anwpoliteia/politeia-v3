import { Link } from 'react-router-dom'
import { useT } from '../../../i18n'
import { cn } from '../../../lib/cn'
import { getDimension } from '../../../constants/dimensions'
import { HUB_COPY as H } from '../../../constants/hubCopy'
import { currentIndex, getMinistry, listProposalsByMinistry } from '../../../data/repository'
import type { ToolArea } from '../../../data/tools/registry'
import { DEFAULT_WEIGHTS, rankCases } from '../../../lib/toolScoring'
import { useLens } from '../../../store/useToolState'
import { MicroLabel } from '../bits'

// One of the ten areas on the ΕΥΘΥΝΑΙ hub: the evidence for its place, its
// Counsellor in the Council (with the Council's live proposal count), the
// Index dimension it protects, and — once built — its tool.
export function AreaRow({ area }: { area: ToolArea }) {
  const { lang } = useT()
  const ministry = area.ministrySlug ? getMinistry(area.ministrySlug) : undefined
  const proposalCount = ministry ? listProposalsByMinistry(ministry.id).length : 0
  const dim = getDimension(area.dimension)
  const dimValue = currentIndex()[area.dimension]
  const tool = area.tool

  return (
    <li className="grid gap-5 border-t border-line py-8 md:grid-cols-[4rem_1fr_17rem]">
      <div className={cn('font-mono text-3xl leading-none', tool ? 'text-gold' : 'text-muted/50')}>{area.n}</div>

      <div className="min-w-0 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold text-text">{area.area[lang]}</h3>
          {tool ? (
            <span className="rounded-md border border-gold/50 bg-gold/10 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-gold">
              {tool.name[lang]} · {H.ready[lang]}
            </span>
          ) : (
            <span className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted">
              {H.planned[lang]}
            </span>
          )}
        </div>

        {area.evidence.length > 0 ? (
          <div className="space-y-2">
            {area.evidence.map((e) => (
              <p key={e.en} className="text-sm leading-relaxed text-text">{e[lang]}</p>
            ))}
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {area.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs text-muted underline-offset-2 hover:text-gold hover:underline">
                    {s.title} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-sm italic text-muted">{H.evidencePending[lang]}</p>
        )}

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <div>
            <MicroLabel>{H.counsellor[lang]}</MicroLabel>
            {ministry ? (
              <Link to={`/ministry/${ministry.slug}`} className="mt-1 inline-block text-text hover:text-gold">
                {ministry.name[lang]} <span className="font-mono text-xs text-muted">· {proposalCount} {H.proposals[lang]}</span>
              </Link>
            ) : (
              <p className="mt-1 max-w-sm text-xs leading-relaxed text-muted">{area.ministryNote?.[lang]}</p>
            )}
          </div>
          <div>
            <MicroLabel>{lang === 'el' ? dim.el : dim.en}</MicroLabel>
            <div className="mt-2 flex items-center gap-3">
              <span className="h-1 w-28 rounded-full bg-line">
                <span className="block h-1 rounded-full bg-gold" style={{ width: `${dimValue}%` }} />
              </span>
              <span className="font-mono text-xs text-text">{dimValue}/100</span>
              <span className="text-xs text-muted">{H.indexNow[lang]}</span>
            </div>
          </div>
        </div>
      </div>

      {tool ? <ToolSummary area={area} /> : <div className="hidden md:block" />}
    </li>
  )
}

function ToolSummary({ area }: { area: ToolArea }) {
  const { lang } = useT()
  const tool = area.tool!
  const lens = useLens(tool.id)
  const top = rankCases(tool.cases, DEFAULT_WEIGHTS)[0]?.item

  return (
    <div className="flex flex-col rounded-md border border-gold/40 bg-elev p-4">
      <div className="flex items-baseline justify-between font-mono text-xs text-muted">
        <span>
          <span className="text-text">{tool.cases.length}</span> {H.casesWord[lang]}
        </span>
        <span>
          <span className="text-gold">{lens.endorsed.length}</span>/{tool.safeguards.length} {H.adoptedWord[lang]}
        </span>
      </div>
      {top && (
        <Link to={`/${tool.slug}#${top.id}`} className="group mt-4 block">
          <MicroLabel tone="copper">{H.topCase[lang]}</MicroLabel>
          <p className="mt-1 line-clamp-3 text-sm leading-snug text-text group-hover:text-gold">{top.title[lang]}</p>
        </Link>
      )}
      <Link
        to={`/${tool.slug}`}
        className="mt-4 rounded-md bg-gold px-4 py-2 text-center text-sm font-medium text-bg transition-opacity hover:opacity-90"
      >
        {H.open[lang]} {tool.name[lang]} →
      </Link>
    </div>
  )
}
