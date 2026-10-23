import { useEffect, useState } from 'react'
import { useT } from '../../../i18n'
import { TOOL_LABELS as C } from '../../../constants/toolLabels'
import { HUB_COPY as H } from '../../../constants/hubCopy'
import type { Lang } from '../../../lib/types'
import { TOOLS } from '../../../data/tools/registry'
import { EMPTY_LENS, useToolState, type ToolLens } from '../../../store/useToolState'
import { demandLines } from '../charterText'
import { SectionHead } from '../bits'

type CopyState = 'idle' | 'copied' | 'failed'

// Every safeguard the citizen adopted, across every tool, as one Charter for
// the whole republic. Pure text, built on this device, sent only by them.
function wholeCharter(lang: Lang, lenses: Record<string, ToolLens>): string | null {
  const blocks = TOOLS.flatMap((tool) => {
    const lens = lenses[tool.id] ?? EMPTY_LENS
    if (lens.endorsed.length === 0 && !lens.vision.trim()) return []
    const lines = [`${tool.name[lang]} — ${tool.area[lang]}`, ...demandLines(lang, tool, lens.endorsed).map((d) => `• ${d}`)]
    if (lens.vision.trim()) lines.push(`${C.charterVision[lang]}: «${lens.vision.trim()}»`)
    return [lines.join('\n')]
  })
  if (blocks.length === 0) return null
  return [H.charterHeading[lang], '', ...blocks.flatMap((b) => [b, '']), `${C.charterFooter[lang]} · ipoliteia.gr/efthynai`].join('\n')
}

export function CombinedCharter() {
  const { lang } = useT()
  const lenses = useToolState((s) => s.lenses)
  const [copy, setCopy] = useState<CopyState>('idle')
  const text = wholeCharter(lang, lenses)

  useEffect(() => {
    if (copy !== 'copied') return
    const t = setTimeout(() => setCopy('idle'), 2200)
    return () => clearTimeout(t)
  }, [copy])

  const doCopy = async () => {
    if (!text) return
    try {
      await navigator.clipboard.writeText(text)
      setCopy('copied')
    } catch (err) {
      console.error('[efthynai] clipboard write failed', err)
      setCopy('failed')
    }
  }

  return (
    <section id="charter" className="scroll-mt-20">
      <SectionHead index="II" title={H.charterTitle[lang]} lede={H.charterLede[lang]} />
      {text ? (
        <div className="mt-8 rounded-md border border-gold/40 bg-elev">
          <pre className="whitespace-pre-wrap break-words p-5 font-sans text-sm leading-relaxed text-text">{text}</pre>
          <div className="flex flex-wrap items-center gap-3 border-t border-line p-4">
            <button
              type="button"
              onClick={() => void doCopy()}
              className="min-h-10 rounded-md bg-gold px-5 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {copy === 'copied' ? `✓ ${C.copied[lang]}` : C.copy[lang]}
            </button>
            {copy === 'failed' && (
              <span role="alert" className="text-xs text-copper">{C.copyFailed[lang]}</span>
            )}
          </div>
        </div>
      ) : (
        <p className="mt-8 text-sm leading-relaxed text-muted">{H.charterEmpty[lang]}</p>
      )}
    </section>
  )
}
