// The four published criteria shared by every tool's priority ranking.

import type { Criterion } from './types'

export const CRITERIA: readonly Criterion[] = [
  {
    id: 'harm',
    name: { el: 'Βλάβη', en: 'Harm' },
    gloss: {
      el: 'Πόσες ζωές, περιουσίες ή δικαιώματα χάθηκαν ή καταστράφηκαν.',
      en: 'How many lives, livelihoods or rights were lost or broken.',
    },
  },
  {
    id: 'power',
    name: { el: 'Ισχύς', en: 'Power' },
    gloss: {
      el: 'Πόσο ψηλά στο κράτος βρισκόταν όποιος προστατεύτηκε.',
      en: 'How high in the state the protected person stood.',
    },
  },
  {
    id: 'recurrence',
    name: { el: 'Συχνότητα', en: 'Recurrence' },
    gloss: {
      el: 'Πόσο συχνά επαναλαμβάνεται το ίδιο μοτίβο σε άλλες χώρες και υποθέσεις.',
      en: 'How often the same pattern repeats across countries and cases.',
    },
  },
  {
    id: 'remedy',
    name: { el: 'Θεραπεία', en: 'Remedy' },
    gloss: {
      el: 'Πόσο θα είχε αλλάξει την έκβαση μια εγγύηση ΤΝ — ως μάρτυρας, όχι ως κριτής.',
      en: 'How much an AI safeguard — as witness, not judge — would have changed the outcome.',
    },
  },
]
