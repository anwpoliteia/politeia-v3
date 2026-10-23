import 'katex/dist/katex.min.css'
import katex from 'katex'
import { cn } from '../../lib/cn'

// KaTeX renderers. The TeX strings are our own static, trusted source (never
// user input), so dangerouslySetInnerHTML is safe here. Colour inherits the
// cream text token; we wrap blocks in a hairline elev surface for the
// institutional look — unless `bare` (e.g. the Manifesto hero).

export function MathBlock({
  tex,
  bare = false,
  className,
}: {
  tex: string
  bare?: boolean
  className?: string
}) {
  const html = katex.renderToString(tex, {
    displayMode: true,
    throwOnError: false,
    strict: 'ignore',
  })
  return (
    <div
      className={cn(
        'text-text',
        !bare && 'overflow-x-auto rounded-md border border-line bg-elev px-5 py-5',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export function MathInline({ tex }: { tex: string }) {
  const html = katex.renderToString(tex, {
    displayMode: false,
    throwOnError: false,
    strict: 'ignore',
  })
  return <span className="text-text" dangerouslySetInnerHTML={{ __html: html }} />
}
