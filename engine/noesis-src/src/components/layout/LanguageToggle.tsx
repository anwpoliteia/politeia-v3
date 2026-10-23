import { useStore } from '../../store/useStore'
import { cn } from '../../lib/cn'
import type { Lang } from '../../lib/types'

// EL default, EN toggle (Hard Rule 5). A plain two-state control, keyboard
// accessible, ≥44px tap target via padding.
export function LanguageToggle() {
  const language = useStore((s) => s.language)
  const setLanguage = useStore((s) => s.setLanguage)

  const opt = (lang: Lang, label: string) => (
    <button
      type="button"
      aria-pressed={language === lang}
      onClick={() => setLanguage(lang)}
      className={cn(
        'px-2.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors',
        language === lang ? 'text-gold' : 'text-muted hover:text-text',
      )}
    >
      {label}
    </button>
  )

  return (
    <div
      className="flex items-center rounded-md border border-line"
      role="group"
      aria-label="Language"
    >
      {opt('el', 'EL')}
      <span aria-hidden className="h-4 w-px bg-line" />
      {opt('en', 'EN')}
    </div>
  )
}
