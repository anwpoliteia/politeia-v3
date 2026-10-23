import { useT } from '../../i18n'
import { cn } from '../../lib/cn'

// The mandatory non-binding marker (Hard Rule 1). Rendered on every proposal.
export function StatusChip({ className }: { className?: string }) {
  const { t } = useT()
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-md border border-copper/50 bg-copper/10 px-2.5 py-1',
        'font-mono text-[11px] uppercase tracking-wider text-copper',
        className,
      )}
    >
      <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-copper" />
      {t.common.nonBinding}
    </span>
  )
}
