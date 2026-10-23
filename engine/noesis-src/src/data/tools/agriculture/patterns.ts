// ΔΗΜΗΤΡΑ — the ten recurring ways farm money slips away from those who work
// the land. Each is a question a farmer can answer privately about their own
// case, on their own device — no names, no upload (Hard Rule 6).

import type { Pattern } from '../types'

export const PATTERNS: readonly Pattern[] = [
  {
    id: 'phantom-land',
    name: { el: 'Γη-φάντασμα', en: 'Ghost land' },
    question: {
      el: 'Δηλώθηκε γη που δεν υπάρχει, δεν ανήκει στον δηλούντα ή δεν καλλιεργείται;',
      en: 'Was land declared that does not exist, does not belong to the claimant, or is not farmed?',
    },
    safeguards: ['geo', 'registry'],
  },
  {
    id: 'phantom-herd',
    name: { el: 'Κοπάδια-φαντάσματα', en: 'Ghost herds' },
    question: {
      el: 'Δηλώθηκαν ή πληρώθηκαν ζώα, ζωοτροφές ή εισροές που δεν υπήρξαν ποτέ;',
      en: 'Were animals, feed or inputs declared or paid for that never existed?',
    },
    safeguards: ['herd', 'geo'],
  },
  {
    id: 'captured-agency',
    name: { el: 'Αιχμάλωτος οργανισμός', en: 'Captured agency' },
    question: {
      el: 'Πίεσαν πολιτικοί ή αξιωματούχοι τον οργανισμό να εγκρίνει ή να καθυστερήσει πληρωμές;',
      en: 'Did politicians or officials press the agency to approve — or hold back — payments?',
    },
    safeguards: ['pressure-log', 'open-ledger'],
  },
  {
    id: 'honest-pay',
    name: { el: 'Πληρώνει ο έντιμος', en: 'The honest pay' },
    question: {
      el: 'Καθυστέρησε ή κόπηκε η δική σου πληρωμή επειδή άλλοι έκλεψαν;',
      en: 'Was your own payment delayed or cut because others stole?',
    },
    safeguards: ['fast-lane', 'open-ledger'],
  },
  {
    id: 'whistleblower-punished',
    name: { el: 'Τιμωρία του μάρτυρα', en: 'Witness punished' },
    question: {
      el: 'Τιμωρήθηκε, μετακινήθηκε ή απειλήθηκε όποιος κατήγγειλε;',
      en: 'Was whoever reported it punished, moved or threatened?',
    },
    safeguards: ['shield'],
  },
  {
    id: 'self-shield',
    name: { el: 'Αυτοπροστασία της εξουσίας', en: 'Power shielding itself' },
    question: {
      el: 'Εμπόδισαν η Βουλή, το κόμμα ή η καθυστέρηση την έρευνα για δικούς τους ανθρώπους;',
      en: 'Did parliament, the party or sheer delay block the investigation of their own people?',
    },
    safeguards: ['clock', 'pressure-log'],
  },
  {
    id: 'owner-regulator',
    name: { el: 'Δικαιούχος και νομοθέτης', en: 'Beneficiary and lawmaker' },
    question: {
      el: 'Έπαιρνε ενισχύσεις ο ίδιος ο πολιτικός ή η οικογένειά του, ενώ αποφάσιζε γι’ αυτές;',
      en: 'Did the politician or their family take support while deciding on it?',
    },
    safeguards: ['interest-map'],
  },
  {
    id: 'land-to-allies',
    name: { el: 'Γη στους φίλους', en: 'Land to allies' },
    question: {
      el: 'Δόθηκε δημόσια γη ή μίσθωση σε πρόσωπα κοντά στην εξουσία ή σε χαμηλή τιμή;',
      en: 'Was public land or a lease handed to people close to power, or below its value?',
    },
    safeguards: ['auction', 'interest-map'],
  },
  {
    id: 'violence',
    name: { el: 'Βία και εκφοβισμός', en: 'Violence and fear' },
    question: {
      el: 'Απειλήθηκαν αγρότες, ελεγκτές ή δημοσιογράφοι για να σωπάσουν ή να παραχωρήσουν γη;',
      en: 'Were farmers, inspectors or journalists threatened into silence or into giving up land?',
    },
    safeguards: ['shield', 'open-ledger'],
  },
  {
    id: 'bribed-inspector',
    name: { el: 'Εξαγορασμένος ελεγκτής', en: 'Bought inspector' },
    question: {
      el: 'Πληρώθηκε ελεγκτής ή υπάλληλος για να «δει» κάτι που δεν υπήρχε ή να μη δει κάτι που υπήρχε;',
      en: 'Was an inspector or official paid to “see” what was not there, or to miss what was?',
    },
    safeguards: ['auction', 'shield'],
  },
]
