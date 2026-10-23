// The weekly scan (spec: three live issues per ministry, one proposal each).
//
// `scripts/weekly-scan.mjs` searches the current record every week and writes
// weekly/latest.json; this module turns that file into ordinary Proposals so
// the rest of the app — cards, deliberation, ΝΟΥΣ, the Index — treats them
// exactly like any other. Until the first scan runs the file is empty and the
// app behaves as before.

import latest from './weekly/latest.json'
import type { Bilingual, Proposal, Source } from '../lib/types'
import type { DimensionId } from '../constants/dimensions'
import type { VirtueId } from '../constants/virtues'
import { getMinistryById } from './ministries'

interface WeeklyRecord {
  id: string
  ministryId: string
  ministrySlug: string
  week: string
  issue: Bilingual
  title: Bilingual
  plain: Bilingual
  situation: Bilingual
  recommendation: Bilingual
  reasoning: Bilingual
  counterArgument: Bilingual
  distributionalNote: Bilingual
  uncertainty: Bilingual
  confidence: number
  eudaimoniaDelta: Record<string, number>
  sources: Source[]
  modelUsed: string
}

interface WeeklyFile {
  week: string | null
  generatedAt: string | null
  model: string | null
  ministriesScanned: number
  proposals: WeeklyRecord[]
}

const file = latest as WeeklyFile

/** When the Council was last swept, or null if it never has been. */
export const weeklyGeneratedAt: string | null = file.generatedAt
export const weeklyWeek: string | null = file.week

function toProposal(r: WeeklyRecord): Proposal {
  const ministry = getMinistryById(r.ministryId)

  const delta: Partial<Record<DimensionId, number>> = {}
  for (const [k, v] of Object.entries(r.eudaimoniaDelta ?? {})) {
    const n = Math.max(-10, Math.min(10, Math.round(Number(v) || 0)))
    if (n !== 0) delta[k as DimensionId] = n
  }

  // Every scanned proposal is evidence-led and self-contested by construction.
  const virtues: VirtueId[] = ['sophia', 'parrhesia']
  if (ministry && !virtues.includes(ministry.primaryVirtue)) {
    virtues.unshift(ministry.primaryVirtue)
  }

  return {
    id: r.id,
    ministryId: r.ministryId,
    version: 1,
    supersedes: null,
    status: 'proposal',
    stakes: 'high',
    title: r.title,
    plain: r.plain,
    situation: r.situation,
    recommendation: r.recommendation,
    reasoning: r.reasoning,
    counterArgument: r.counterArgument,
    virtues,
    eudaimoniaDelta: delta,
    distributionalNote: r.distributionalNote,
    confidence: Math.max(0.05, Math.min(0.95, Number(r.confidence) || 0.5)),
    uncertainty: r.uncertainty,
    sources: r.sources ?? [],
    modelUsed: r.modelUsed,
    accountableRole: ministry
      ? {
          el: `Ο αρμόδιος Υπουργός — ${ministry.name.el}`,
          en: `The responsible Minister — ${ministry.name.en}`,
        }
      : { el: 'Ο αρμόδιος Υπουργός', en: 'The responsible Minister' },
    createdAt: file.generatedAt ?? new Date().toISOString(),
  }
}

export const WEEKLY_PROPOSALS: readonly Proposal[] = (file.proposals ?? []).map(toProposal)
