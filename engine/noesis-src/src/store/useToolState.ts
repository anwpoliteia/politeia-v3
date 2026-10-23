// ΕΥΘΥΝΑΙ — each citizen's own lens on every tool: their weights, the
// safeguards they adopt, the patterns they recognise in their own case, and
// their vision — kept per tool, so each tool remembers its own Charter and the
// hub can gather them all.
// Privacy by design (Hard Rule 6): persisted to this device only; nothing here
// is ever sent anywhere. "Your case" never asks for a name.

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CriterionId, Weights } from '../data/tools/types'
import { DEFAULT_WEIGHTS, WEIGHT_MAX, WEIGHT_MIN } from '../lib/toolScoring'

export const VISION_MAX = 280

export interface ToolLens {
  weights: Weights
  endorsed: string[]
  myPatterns: string[]
  vision: string
}

export const EMPTY_LENS: ToolLens = {
  weights: DEFAULT_WEIGHTS,
  endorsed: [],
  myPatterns: [],
  vision: '',
}

interface ToolState {
  lenses: Record<string, ToolLens>

  setWeight: (tool: string, k: CriterionId, w: number) => void
  resetWeights: (tool: string) => void
  toggleEndorse: (tool: string, id: string) => void
  endorseMany: (tool: string, ids: readonly string[]) => void
  togglePattern: (tool: string, id: string) => void
  clearMyCase: (tool: string) => void
  setVision: (tool: string, text: string) => void
}

const toggle = <T,>(list: readonly T[], item: T): T[] =>
  list.includes(item) ? list.filter((x) => x !== item) : [...list, item]

// Immutable per-tool update: a new lens, a new lenses map, nothing mutated.
const patch =
  (tool: string, fn: (lens: ToolLens) => Partial<ToolLens>) =>
  (s: ToolState): Pick<ToolState, 'lenses'> => {
    const lens = s.lenses[tool] ?? EMPTY_LENS
    return { lenses: { ...s.lenses, [tool]: { ...lens, ...fn(lens) } } }
  }

export const useToolState = create<ToolState>()(
  persist(
    (set) => ({
      lenses: {},

      setWeight: (tool, k, w) =>
        set(
          patch(tool, (l) => ({
            weights: { ...l.weights, [k]: Math.min(WEIGHT_MAX, Math.max(WEIGHT_MIN, Math.round(w))) },
          })),
        ),
      resetWeights: (tool) => set(patch(tool, () => ({ weights: DEFAULT_WEIGHTS }))),
      toggleEndorse: (tool, id) => set(patch(tool, (l) => ({ endorsed: toggle(l.endorsed, id) }))),
      endorseMany: (tool, ids) =>
        set(patch(tool, (l) => ({ endorsed: [...l.endorsed, ...ids.filter((id) => !l.endorsed.includes(id))] }))),
      togglePattern: (tool, id) => set(patch(tool, (l) => ({ myPatterns: toggle(l.myPatterns, id) }))),
      clearMyCase: (tool) => set(patch(tool, () => ({ myPatterns: [] }))),
      setVision: (tool, text) => set(patch(tool, () => ({ vision: text.slice(0, VISION_MAX) }))),
    }),
    { name: 'politeia-tools' },
  ),
)

/** The citizen's lens on one tool (a stable empty lens until they touch it). */
export const useLens = (tool: string): ToolLens =>
  useToolState((s) => s.lenses[tool] ?? EMPTY_LENS)
