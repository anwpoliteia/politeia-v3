// Rasterise public/og.svg → public/og.png (1200×630) for social previews
// (Facebook/LinkedIn/Twitter need a raster image, not SVG). Uses system fonts
// so the Greek text renders correctly. Run: node scripts/make-og.mjs
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const svg = readFileSync(resolve(root, 'public/og.svg'), 'utf8')

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true, defaultFontFamily: 'Segoe UI' },
})
const png = resvg.render().asPng()
writeFileSync(resolve(root, 'public/og.png'), png)
console.log(`og.png written: ${(png.length / 1024).toFixed(1)} KB`)
