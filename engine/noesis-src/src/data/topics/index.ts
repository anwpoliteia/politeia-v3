// All topic seeds, ≥10 per ministry. Fed to the proposal generator.
import type { TopicSeed } from './_seed'
import { TOPICS_A } from './topicsA'
import { TOPICS_B } from './topicsB'
import { TOPICS_C } from './topicsC'
import { TOPICS_D } from './topicsD'

export const TOPIC_SEEDS: readonly TopicSeed[] = [
  ...TOPICS_A,
  ...TOPICS_B,
  ...TOPICS_C,
  ...TOPICS_D,
]

export type { TopicSeed }
