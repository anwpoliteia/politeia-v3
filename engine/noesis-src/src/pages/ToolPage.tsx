import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useT } from '../i18n'
import { Container, PageHeader } from '../components/ui/primitives'
import { TOOL_LABELS as C } from '../constants/toolLabels'
import type { ToolDef } from '../data/tools/types'
import { ToolProvider } from '../components/tools/ToolContext'
import { Foundation } from '../components/tools/Foundation'
import { PriorityBoard } from '../components/tools/PriorityBoard'
import { SafeguardGrid } from '../components/tools/SafeguardGrid'
import { Failures } from '../components/tools/Failures'
import { MyCase } from '../components/tools/MyCase'
import { Charter } from '../components/tools/Charter'

// One accountability tool (ΙΣΟΝΟΜΙΑ, ΔΗΜΗΤΡΑ, …): why the institution exists,
// ten cases where power bent it, ten AI safeguards that watch power (never
// citizens), the counter-case against AI deciding alone, the citizen's own
// case (private) and their Charter. A case can be linked: /<slug>#<case-id>.
export function ToolPage({ tool }: { tool: ToolDef }) {
  const { lang } = useT()
  const [openId, setOpenId] = useState<string | null>(null)

  const openCase = useCallback((id: string) => {
    setOpenId(id)
    history.replaceState(null, '', `#${id}`)
    requestAnimationFrame(() =>
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
    )
  }, [])

  const toggleCase = useCallback((id: string) => {
    setOpenId((cur) => {
      const next = cur === id ? null : id
      history.replaceState(null, '', next ? `#${next}` : window.location.pathname)
      return next
    })
  }, [])

  // Open a case named in the URL hash; reset when switching between tools.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (tool.cases.some((c) => c.id === id)) openCase(id)
    else setOpenId(null)
  }, [tool, openCase])

  const jump = [
    { href: '#foundation', label: tool.copy.principles[0].title[lang] },
    { href: '#ten', label: C.rankTitle[lang] },
    { href: '#safeguards', label: C.safeguardsTitle[lang] },
    { href: '#antilogos', label: C.antilogos[lang] },
    { href: '#your-case', label: C.myCaseTitle[lang] },
    { href: '#charter', label: C.charterTitle[lang] },
  ]

  return (
    <ToolProvider value={tool}>
      <PageHeader
        eyebrow={tool.copy.eyebrow[lang]}
        title={tool.copy.title[lang]}
        subtitle={tool.copy.subtitle[lang]}
      />

      <nav aria-label={tool.name[lang]} className="border-b border-line">
        <Container className="flex items-center gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
          <Link
            to="/efthynai"
            className="mr-2 shrink-0 whitespace-nowrap rounded-md border border-gold/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-gold transition-colors hover:bg-gold/10"
          >
            ← {tool.n}/10 · {C.hubLink[lang]}
          </Link>
          {jump.map((j) => (
            <a
              key={j.href}
              href={j.href}
              className="shrink-0 whitespace-nowrap rounded-md px-3 py-1.5 text-xs text-muted transition-colors hover:text-gold"
            >
              {j.label}
            </a>
          ))}
        </Container>
      </nav>

      <Foundation />

      <Container className="space-y-20 py-16">
        <PriorityBoard openId={openId} onToggle={toggleCase} />
        <SafeguardGrid onOpenCase={openCase} />
        <Failures />
        <MyCase onOpenCase={openCase} />
        <Charter />
      </Container>
    </ToolProvider>
  )
}
