import { getVirtue, type VirtueId } from '../../constants/virtues'
import { useT } from '../../i18n'
import { cn } from '../../lib/cn'

// Gold marks virtue (spec §3). A small, restrained tag — never decorative.
export function VirtueMark({
  id,
  showGloss = false,
  className,
}: {
  id: VirtueId
  showGloss?: boolean
  className?: string
}) {
  const { lang } = useT()
  const v = getVirtue(id)
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border border-gold/40 px-2 py-0.5',
        'text-xs text-gold',
        className,
      )}
      title={lang === 'el' ? v.gloss_el : v.gloss_en}
    >
      <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
      <span>{v.el}</span>
      {showGloss && (
        <span className="text-muted">
          · {lang === 'el' ? v.gloss_el : v.gloss_en}
        </span>
      )}
    </span>
  )
}
