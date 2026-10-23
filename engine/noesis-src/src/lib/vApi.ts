// POLITEIA-V client for the local intelligence server (server/index.mjs).
// The Anthropic key lives ONLY on that server; this module just consumes SSE.
// When the server reports live:false (no key), callers fall back to the demo
// simulators in vDemo.ts — the citizen experience stays fully working.

import { useEffect, useState } from 'react'
import type { Bilingual, Proposal, Source } from './types'
import type { DimensionId } from '../constants/dimensions'
import type { Ministry } from './types'

export interface VHealth {
  live: boolean
  counsellorModel?: string
  fastModel?: string
  fallbackModel?: string
}

export interface VProposalDraft {
  title: Bilingual
  plain: Bilingual
  situation: Bilingual
  recommendation: Bilingual
  reasoning: Bilingual
  counterArgument: Bilingual
  distributionalNote: Bilingual
  uncertainty: Bilingual
  eudaimoniaDelta: Record<DimensionId, number>
  confidence: number
  sources: Source[]
}

export interface VEstimate {
  title: Bilingual
  deltas: Record<DimensionId, number>
  rationale: Record<DimensionId, string>
  uncertainty: Bilingual
  confidence: number
}

export interface VAgoraTheme {
  label: string
  count: number
  stance: 'for' | 'against' | 'mixed'
}

export interface VAgoraMap {
  themes: VAgoraTheme[]
  consensus: string[]
  dissensus: string[]
  strongestFor: string
  strongestAgainst: string
}

// ---- health ----------------------------------------------------------------

let healthCache: VHealth | null = null

export async function getHealth(): Promise<VHealth> {
  if (healthCache) return healthCache
  try {
    const r = await fetch('/api/health')
    if (!r.ok) throw new Error('down')
    healthCache = (await r.json()) as VHealth
  } catch {
    healthCache = { live: false }
  }
  return healthCache
}

/** Whether the live intelligence server is up and holds a key. */
export function useVLive(): { live: boolean; ready: boolean; model?: string } {
  const [state, setState] = useState<{ live: boolean; ready: boolean; model?: string }>({
    live: false,
    ready: false,
  })
  useEffect(() => {
    let on = true
    void getHealth().then((h) => {
      if (on) setState({ live: h.live, ready: true, model: h.counsellorModel })
    })
    return () => {
      on = false
    }
  }, [])
  return state
}

// ---- SSE -------------------------------------------------------------------

export interface SSEHandlers {
  onPhase?: (phase: string) => void
  onDelta?: (text: string) => void
  onFinal?: (data: unknown) => void
  onError?: (message: string) => void
}

/** POST to an SSE endpoint and dispatch its events until done. */
export async function streamV(
  url: string,
  body: unknown,
  h: SSEHandlers,
  signal?: AbortSignal,
): Promise<void> {
  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal,
  })
  if (!resp.ok || !resp.body) {
    h.onError?.('api-error')
    return
  }
  const reader = resp.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    buffer += decoder.decode(value, { stream: true })
    const frames = buffer.split('\n\n')
    buffer = frames.pop() ?? ''
    for (const frame of frames) {
      const line = frame.split('\n').find((l) => l.startsWith('data: '))
      if (!line) continue
      try {
        const ev = JSON.parse(line.slice(6)) as { type: string; [k: string]: unknown }
        if (ev.type === 'phase') h.onPhase?.(String(ev.phase))
        else if (ev.type === 'delta') h.onDelta?.(String(ev.text))
        else if (ev.type === 'final') h.onFinal?.(ev.data)
        else if (ev.type === 'error') h.onError?.(String(ev.message))
      } catch {
        // tolerate partial frames
      }
    }
  }
}

// ---- draft → Proposal --------------------------------------------------------

const newId = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? `vprop-${crypto.randomUUID().slice(0, 8)}`
    : `vprop-${Date.now().toString(36)}`

/** Materialize a Counsellor draft into the app's full Proposal shape. */
export function draftToProposal(
  draft: VProposalDraft,
  ministry: Ministry,
  modelUsed: string,
): Proposal {
  const delta: Proposal['eudaimoniaDelta'] = {}
  for (const [k, v] of Object.entries(draft.eudaimoniaDelta)) {
    const n = Math.max(-10, Math.min(10, Math.round(Number(v) || 0)))
    if (n !== 0) delta[k as DimensionId] = n
  }
  const virtues: Proposal['virtues'] = [ministry.primaryVirtue]
  if (!virtues.includes('sophia')) virtues.push('sophia')
  if (!virtues.includes('parrhesia')) virtues.push('parrhesia')
  return {
    id: newId(),
    ministryId: ministry.id,
    version: 1,
    supersedes: null,
    status: 'proposal',
    stakes: 'high',
    title: draft.title,
    plain: draft.plain,
    situation: draft.situation,
    recommendation: draft.recommendation,
    reasoning: draft.reasoning,
    counterArgument: draft.counterArgument,
    virtues,
    eudaimoniaDelta: delta,
    distributionalNote: draft.distributionalNote,
    confidence: Math.max(0.05, Math.min(0.95, Number(draft.confidence) || 0.5)),
    uncertainty: draft.uncertainty,
    sources: (draft.sources ?? []).filter((s) => s.title),
    modelUsed,
    accountableRole: {
      el: `Ο αρμόδιος Υπουργός — ${ministry.name.el}`,
      en: `The responsible Minister — ${ministry.name.en}`,
    },
    createdAt: new Date().toISOString(),
  }
}
