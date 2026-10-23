import { useEffect, useId, useState } from 'react'
import { useT } from '../../i18n'
import { TOOL_LABELS as C } from '../../constants/toolLabels'
import { useLens, useToolState, VISION_MAX } from '../../store/useToolState'
import { useTool } from './ToolContext'
import { SectionHead } from './bits'
import { charterText } from './charterText'

type CopyState = 'idle' | 'copied' | 'failed'

// The citizen as vision maker: the safeguards they adopted, their weights and
// one sentence in their own words, assembled into a Charter they can copy and
// send anywhere. Nothing is published by the platform on their behalf.
export function Charter() {
  const { lang } = useT()
  const tool = useTool()
  const lens = useLens(tool.id)
  const { endorsed, vision } = lens
  const setVision = useToolState((s) => s.setVision)
  const [copy, setCopy] = useState<CopyState>('idle')
  const visionId = useId()

  const text = charterText(lang, tool, lens)

  useEffect(() => {
    if (copy !== 'copied') return
    const t = setTimeout(() => setCopy('idle'), 2200)
    return () => clearTimeout(t)
  }, [copy])

  const doCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopy('copied')
    } catch (err) {
      console.error('[tools] clipboard write failed', err)
      setCopy('failed')
    }
  }

  return (
    <section id="charter" className="scroll-mt-20">
      <SectionHead index="V" title={C.charterTitle[lang]} lede={C.charterLede[lang]} />

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor={visionId} className="font-mono text-xs uppercase tracking-wider text-gold">
            {C.visionLabel[lang]}
          </label>
          <textarea
            id={visionId}
            value={vision}
            onChange={(e) => setVision(tool.id, e.target.value)}
            placeholder={tool.copy.visionPlaceholder[lang]}
            maxLength={VISION_MAX}
            rows={4}
            className="mt-3 w-full rounded-md border border-line bg-elev p-4 text-base leading-relaxed text-text placeholder:text-muted focus:border-gold/50"
          />
          <div className="mt-1 text-right font-mono text-[11px] text-muted">
            {vision.length}/{VISION_MAX}
          </div>
          {endorsed.length === 0 && (
            <p className="mt-4 text-sm leading-relaxed text-muted">{C.charterEmpty[lang]}</p>
          )}
        </div>

        <div className="flex flex-col rounded-md border border-gold/40 bg-elev">
          <pre className="flex-1 whitespace-pre-wrap break-words p-5 font-sans text-sm leading-relaxed text-text">
            {text}
          </pre>
          <div className="flex flex-wrap items-center gap-3 border-t border-line p-4">
            <button
              type="button"
              onClick={() => void doCopy()}
              className="min-h-10 rounded-md bg-gold px-5 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {copy === 'copied' ? `✓ ${C.copied[lang]}` : C.copy[lang]}
            </button>
            {copy === 'failed' && (
              <span role="alert" className="text-xs text-copper">
                {C.copyFailed[lang]}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
