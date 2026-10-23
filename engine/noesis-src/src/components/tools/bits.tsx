import type { ReactNode } from 'react'
import { useT } from '../../i18n'
import { cn } from '../../lib/cn'
import { findPattern, findSafeguard } from '../../lib/toolScoring'
import { useTool } from './ToolContext'

// Shared pieces for every tool page. Gold marks virtue and the platform's own
// voice; copper marks dissent, risk and the ways power bends an institution.

export function SectionHead({
  index,
  title,
  lede,
}: {
  index: string
  title: string
  lede?: string
}) {
  return (
    <div className="border-b border-line pb-5">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-gold">{index}</span>
        <h2 className="text-2xl font-semibold text-text text-balance">{title}</h2>
      </div>
      {lede && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{lede}</p>}
    </div>
  )
}

export function MicroLabel({
  children,
  tone = 'muted',
  className,
}: {
  children: ReactNode
  tone?: 'muted' | 'gold' | 'copper'
  className?: string
}) {
  return (
    <div
      className={cn(
        'font-mono text-[11px] uppercase tracking-wider',
        tone === 'gold' ? 'text-gold' : tone === 'copper' ? 'text-copper' : 'text-muted',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function PatternChip({ id }: { id: string }) {
  const { lang } = useT()
  const tool = useTool()
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-copper/40 px-2 py-0.5 text-xs text-copper">
      <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-copper" />
      {findPattern(tool, id).name[lang]}
    </span>
  )
}

export function SafeguardChip({ id }: { id: string }) {
  const { lang } = useT()
  const tool = useTool()
  const s = findSafeguard(tool, id)
  return (
    <a
      href={`#sg-${id}`}
      className="inline-flex items-center gap-1.5 rounded-md border border-gold/40 px-2 py-0.5 text-xs text-gold transition-colors hover:bg-gold/10"
    >
      <span className="font-mono">{s.n}</span>
      <span>{s.name[lang]}</span>
    </a>
  )
}
