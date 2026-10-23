// ΑΙΓΙΣ — the ten recurring ways protection fails before a disaster. Each is a
// question answered privately — no names, no addresses, no upload (Hard Rule 6).

import type { Pattern } from '../types'

export const PATTERNS: readonly Pattern[] = [
  {
    id: 'late-alert',
    name: { el: 'Το μήνυμα που ήρθε αργά', en: 'The alert that came late' },
    question: {
      el: 'Ήρθε το 112 ή η ειδοποίηση αφού είχε ήδη φτάσει η φωτιά ή το νερό — ή δεν ήρθε ποτέ;',
      en: 'Did the 112 message or warning arrive after the fire or water was already there — or never at all?',
    },
    safeguards: ['alert-trigger', 'alert-ledger'],
  },
  {
    id: 'forecast-ignored',
    name: { el: 'Πρόγνωση που δεν έγινε απόφαση', en: 'Forecast never turned into action' },
    question: {
      el: 'Υπήρχε έγκαιρη πρόγνωση ή προειδοποίηση ειδικών που δεν μετατράπηκε ποτέ σε ενέργεια;',
      en: 'Was there a timely forecast or expert warning that never turned into action?',
    },
    safeguards: ['alert-trigger'],
  },
  {
    id: 'no-evacuation-plan',
    name: { el: 'Χωρίς σχέδιο διαφυγής', en: 'No escape plan' },
    question: {
      el: 'Έλειπε σχέδιο εκκένωσης ή δρόμος διαφυγής που να γνωρίζεις — ή υπήρχε μόνο στα χαρτιά;',
      en: 'Was there no evacuation plan or escape route you knew of — or did it exist only on paper?',
    },
    safeguards: ['evac-plan'],
  },
  {
    id: 'vulnerable-left',
    name: { el: 'Οι ευάλωτοι ξεχάστηκαν', en: 'The vulnerable forgotten' },
    question: {
      el: 'Έμειναν πίσω ηλικιωμένοι, άνθρωποι με αναπηρία ή δομές φροντίδας χωρίς κανέναν να τους βοηθήσει να φύγουν;',
      en: 'Were elderly people, people with disabilities or care homes left behind with no one to help them leave?',
    },
    safeguards: ['vulnerable-registry'],
  },
  {
    id: 'diverted-prevention',
    name: { el: 'Χρήματα πρόληψης αλλού', en: 'Prevention money spent elsewhere' },
    question: {
      el: 'Πήγαν χρήματα για αντιπλημμυρικά ή αντιπυρικά σε δρόμους, γήπεδα ή εκδηλώσεις;',
      en: 'Did money meant for flood or fire prevention go to roads, sports grounds or events?',
    },
    safeguards: ['prevention-ledger'],
  },
  {
    id: 'unfinished-works',
    name: { el: 'Έργα πρόληψης στα χαρτιά', en: 'Prevention works left on paper' },
    question: {
      el: 'Υπήρχε έργο πρόληψης — φράγμα, αντιπλημμυρικό, αντιπυρική ζώνη — που μελετήθηκε αλλά δεν ολοκληρώθηκε ποτέ;',
      en: 'Was there a prevention work — a dam, flood defence, firebreak — designed but never completed?',
    },
    safeguards: ['prevention-ledger'],
  },
  {
    id: 'absent-command',
    name: { el: 'Ο υπεύθυνος απών', en: 'The one in charge was absent' },
    question: {
      el: 'Ήταν απών ή ασύνδετος ο υπεύθυνος της κρίσης τις κρίσιμες ώρες;',
      en: 'Was the person in charge of the crisis absent or out of touch during the critical hours?',
    },
    safeguards: ['command-log'],
  },
  {
    id: 'reassurance',
    name: { el: 'Καθησυχασμός αντί για ενημέρωση', en: 'Reassurance instead of information' },
    question: {
      el: 'Σας είπαν οι αρχές ότι «δεν υπάρχει κίνδυνος» — και αποδείχθηκε λάθος;',
      en: 'Did the authorities tell you “there is no danger” — and were they proven wrong?',
    },
    safeguards: ['open-risk'],
  },
  {
    id: 'blame-diffused',
    name: { el: 'Ευθύνη όλων, άρα κανενός', en: 'Everyone’s responsibility, so no one’s' },
    question: {
      el: 'Χάθηκε η ευθύνη ανάμεσα σε δήμο, περιφέρεια, υπουργείο και υπηρεσίες — ο καθένας έδειχνε τον άλλον;',
      en: 'Did responsibility get lost between municipality, region, ministry and agencies — each pointing at the other?',
    },
    safeguards: ['single-responsible', 'command-log'],
  },
  {
    id: 'no-reckoning',
    name: { el: 'Καμία απάντηση', en: 'No reckoning' },
    question: {
      el: 'Τελείωσε η υπόθεση χωρίς δίκη — με εξαγοράσιμη ποινή, ασυλία, παραγραφή ή μόνο αποζημίωση;',
      en: 'Did the case end without a trial — with a convertible sentence, immunity, time limits or only compensation?',
    },
    safeguards: ['reckoning-ledger', 'after-action'],
  },
]
