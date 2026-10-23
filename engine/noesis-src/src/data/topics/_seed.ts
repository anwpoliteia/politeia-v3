// Compact topic seeds. Each carries the *distinctive substance* of a proposal —
// title, plain-language meaning, the recommendation core (lever), the honest
// counter-argument core (tension), and the nine-dimension delta. The generator
// (../generateProposals.ts) weaves these into full §4.2 proposals. This is
// thematically honest: the proposals are precisely what the AI Counsellors draft.

import type { Bilingual, EudaimoniaDelta, ModelTier } from '../../lib/types'
import type { VirtueId } from '../../constants/virtues'

export const b = (el: string, en: string): Bilingual => ({ el, en })

export interface TopicSeed {
  ministry: string // ministry slug
  key: string // unique within ministry
  stakes: ModelTier
  confidence: number // 0..1
  virtues: VirtueId[]
  delta: EudaimoniaDelta
  title: Bilingual
  plain: Bilingual
  lever: Bilingual // advisory recommendation core; reads after "Προτείνεται …"
  tension: Bilingual // the strongest honest counter-argument core
}

export const topic = (
  ministry: string,
  key: string,
  stakes: ModelTier,
  confidence: number,
  virtues: VirtueId[],
  delta: EudaimoniaDelta,
  title: Bilingual,
  plain: Bilingual,
  lever: Bilingual,
  tension: Bilingual,
): TopicSeed => ({ ministry, key, stakes, confidence, virtues, delta, title, plain, lever, tension })
