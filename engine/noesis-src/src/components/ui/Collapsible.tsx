import { useId, useState, type ReactNode } from 'react'

// Collapsible region for the full reasoning (spec §4.2: "collapsible but
// present"). Default-open so reasoning is never hidden by default — the toggle
// only lets a reader fold it once read. Keyboard-accessible native button.
export function Collapsible({
  summary,
  defaultOpen = true,
  children,
}: {
  summary: string
  defaultOpen?: boolean
  children: ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  const regionId = useId()
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={regionId}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-2 text-left text-sm text-muted transition-colors hover:text-text"
      >
        <span
          aria-hidden
          className="inline-block font-mono text-gold transition-transform"
          style={{ transform: open ? 'rotate(90deg)' : 'none' }}
        >
          ›
        </span>
        {summary}
      </button>
      {open && (
        <div id={regionId} className="mt-3">
          {children}
        </div>
      )}
    </div>
  )
}
