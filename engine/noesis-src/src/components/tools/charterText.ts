// Builds a citizen's Charter as plain text — the portable artefact a citizen
// sends to an MP, an association or a friend. Pure: same inputs, same text.

import type { Lang } from '../../lib/types'
import { TOOL_LABELS as C } from '../../constants/toolLabels'
import { CRITERIA } from '../../data/tools/criteria'
import type { ToolDef } from '../../data/tools/types'
import { findSafeguard, safeguardOrder } from '../../lib/toolScoring'
import type { ToolLens } from '../../store/useToolState'

/** The adopted safeguards of one tool, as "Σn Name — plain" lines. */
export function demandLines(lang: Lang, tool: ToolDef, endorsed: readonly string[]): string[] {
  return endorsed
    .map((id) => findSafeguard(tool, id))
    .sort((a, b) => safeguardOrder(a) - safeguardOrder(b))
    .map((s) => `${s.n} ${s.name[lang]} — ${s.plain[lang]}`)
}

export function charterText(lang: Lang, tool: ToolDef, lens: ToolLens): string {
  const { weights, endorsed, vision } = lens
  const priorities = [...CRITERIA]
    .sort((a, b) => weights[b.id] - weights[a.id])
    .map((c) => `${c.name[lang]} ×${weights[c.id]}`)
    .join(' · ')

  const lines = [
    tool.copy.charterHeading[lang],
    '',
    `${C.charterPriorities[lang]}: ${priorities}`,
    '',
    `${C.charterDemands[lang]}:`,
    ...demandLines(lang, tool, endorsed).map((d) => `• ${d}`),
  ]
  const v = vision.trim()
  if (v) lines.push('', `${C.charterVision[lang]}: «${v}»`)
  lines.push('', `${C.charterFooter[lang]} · ipoliteia.gr/${tool.slug}`)
  return lines.join('\n')
}
