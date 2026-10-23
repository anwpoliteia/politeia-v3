// Seed: one Counsellor (AI agent config) per ministry. The system prompt is
// the editable skeleton from spec §6.3, with the ministry name substituted.
// Models per the current routing table (spec §6.2): Sonnet for standard,
// Opus for high-stakes / synthesis / the counter-argument pass.

import type { Counsellor } from '../lib/types'
import { MINISTRIES } from './ministries'

const DEFAULT_MODEL = 'claude-sonnet-4-6'
const STAKES_MODEL = 'claude-opus-5'

function buildSystemPrompt(ministryNameEn: string): string {
  const label = ministryNameEn.replace(/^Ministry of\s+/i, '')
  return `You are the ${label} Counsellor of POLITEIA. You ADVISE; you never decide.
Output is non-binding. Named human officials remain accountable.
Objective: maximise eudaimonia (human flourishing) for the people of Greece,
measured across the nine dimensions of the Eudaimonia Index.
For every proposal you MUST:
- Open with a one-sentence plain-Greek "what this means".
- State the situation, then a recommendation in advisory language only.
- Give full reasoning with cited, real sources. State your confidence and
  exactly what evidence would change your recommendation.
- Produce the STRONGEST honest counter-argument to your own proposal.
- State who bears the costs and who gains (distributional honesty).
- Map the proposal to the seven virtues and estimate its signed effect on
  each Index dimension.
Forbidden: imperative commands, spin, false certainty, targeting individuals,
proposals that trade long-run flourishing for short-run approval.
Output strict JSON matching the proposal schema. No prose outside the JSON.`
}

// Per-ministry method blurbs where we want a distinct voice; generic otherwise.
const METHODS: Record<string, { el: string; en: string }> = {
  finance: {
    el: 'Δυναμική δημοσιονομική προσομοίωση με ρητές παραδοχές· κάθε αριθμός φέρει το εύρος αβεβαιότητάς του.',
    en: 'Dynamic fiscal simulation with explicit assumptions; every figure carries its uncertainty range.',
  },
  environment: {
    el: 'Ενεργειακά σενάρια έως το 2035, σταθμισμένα ως προς εκπομπές, κόστος και κατανομή στις περιφέρειες.',
    en: 'Energy scenarios to 2035, weighted by emissions, cost and regional distribution.',
  },
  health: {
    el: 'Ανάλυση QALY και ισότητας πρόσβασης, με πρωτογενή στοιχεία από το ΕΣΥ.',
    en: 'QALY and access-equity analysis, drawing on primary ESY system data.',
  },
  migration: {
    el: 'Ανάλυση που εξισορροπεί διεθνείς νομικές υποχρεώσεις, ένταξη και τοπική φέρουσα ικανότητα.',
    en: 'Analysis balancing international legal obligations, integration and local carrying capacity.',
  },
  defence: {
    el: 'Αποτίμηση αποτροπής έναντι δημοσιονομικού κόστους, με σαφή σήμανση των δύσκολων επιλογών.',
    en: 'Deterrence assessment against fiscal cost, with the hard choices clearly flagged.',
  },
  pm: {
    el: 'Διασταυρώνει όλες τις ενεργές προτάσεις, εντοπίζει εντάσεις και διπλομετρήσεις, συνθέτει προτεραιότητες.',
    en: 'Cross-references all active proposals, surfaces tensions and double-counts, synthesises priorities.',
  },
}

const GENERIC_METHOD = {
  el: 'Συλλέγει στοιχεία, σχεδιάζει πρόταση, αυτο-κριτική απέναντι στις επτά αρετές, παράγει τον αντίλογο, εκτιμά τη μεταβολή ευδαιμονίας.',
  en: 'Ingests evidence, drafts a proposal, self-critiques against the seven virtues, produces the counter-argument, estimates the Eudaimonia delta.',
}

export const COUNSELLORS: readonly Counsellor[] = MINISTRIES.map((m) => {
  const slugBase = m.slug
  const titleEl = m.isSynthesis ? 'ΝΟΥΣ' : `Σύμβουλος — ${m.name.el}`
  const titleEn = m.isSynthesis ? 'NOUS' : `${m.name.en.replace(/^Ministry of\s+/i, '')} Counsellor`
  return {
    id: `cou-${slugBase}`,
    ministryId: m.id,
    displayName: { el: titleEl, en: titleEn },
    systemPrompt: m.isSynthesis
      ? buildSystemPrompt('Synthesis (NOUS)').replace(
          'You ADVISE; you never decide.',
          'You ADVISE the Prime Minister; you never decide. You synthesise across ministries.',
        )
      : buildSystemPrompt(m.name.en),
    defaultModel: m.isSynthesis ? STAKES_MODEL : DEFAULT_MODEL,
    stakesModel: STAKES_MODEL,
    method: METHODS[slugBase] ?? GENERIC_METHOD,
  }
})

const BY_MINISTRY = new Map(COUNSELLORS.map((c) => [c.ministryId, c]))
export const getCounsellorByMinistry = (ministryId: string) =>
  BY_MINISTRY.get(ministryId)
