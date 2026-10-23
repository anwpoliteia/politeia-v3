// ΙΠΠΟΔΑΜΟΣ — the ten recurring ways a permit becomes merchandise. Each is a
// question answered privately — no names, no addresses, no upload (Hard Rule 6).

import type { Pattern } from '../types'

export const PATTERNS: readonly Pattern[] = [
  {
    id: 'bribed-permit',
    name: { el: 'Άδεια με αντίτιμο', en: 'Permit for a price' },
    question: {
      el: 'Σου ζητήθηκαν χρήματα, «γρηγορόσημο» ή «κάτι» για να προχωρήσει μια άδεια ή ένας φάκελος;',
      en: 'Were you asked for money, a “speed-up fee” or “something” to move a permit or a file forward?',
    },
    safeguards: ['signed-permit', 'random-desk', 'lifestyle-check'],
  },
  {
    id: 'broker',
    name: { el: 'Ο «σωστός» μηχανικός', en: 'The “right” engineer' },
    question: {
      el: 'Σου είπαν ότι η άδεια βγαίνει μόνο μέσω συγκεκριμένου μηχανικού ή γραφείου;',
      en: 'Were you told the permit would only come through a particular engineer or office?',
    },
    safeguards: ['random-desk'],
  },
  {
    id: 'extra-floors',
    name: { el: 'Όροφοι πέρα από την άδεια', en: 'Floors beyond the permit' },
    question: {
      el: 'Υψώθηκε κτίριο κοντά σου πέρα από όσα έγραφε η άδειά του — και κανείς δεν το σταμάτησε;',
      en: 'Did a building near you rise beyond what its permit allowed — with no one stopping it?',
    },
    safeguards: ['sky-check', 'random-inspection'],
  },
  {
    id: 'amnesty',
    name: { el: 'Τακτοποίηση αντί για έλεγχο', en: 'Amnesty instead of inspection' },
    question: {
      el: 'Νομιμοποιήθηκε μεγάλη αυθαιρεσία με ένα πρόστιμο, χωρίς να ελέγξει κανείς αν είναι ασφαλής;',
      en: 'Was a large illegal build legalised for a fee, without anyone checking whether it is safe?',
    },
    safeguards: ['amnesty-audit'],
  },
  {
    id: 'false-date',
    name: { el: 'Πλαστή ημερομηνία κατασκευής', en: 'False construction date' },
    question: {
      el: 'Δηλώθηκε κτίριο ως παλαιότερο απ’ ό,τι ήταν, για να χωρέσει σε μια τακτοποίηση;',
      en: 'Was a building declared older than it was, to fit into a legalisation scheme?',
    },
    safeguards: ['sky-check', 'amnesty-audit'],
  },
  {
    id: 'ignored-warning',
    name: { el: 'Αγνοημένη προειδοποίηση', en: 'Warning ignored' },
    question: {
      el: 'Υπήρξε έκθεση μηχανικού ή καταγγελία για ρωγμές ή κίνδυνο που δεν έφερε ποτέ επιθεώρηση;',
      en: 'Was there an engineer’s report or a complaint about cracks or danger that never brought an inspection?',
    },
    safeguards: ['warning-clock'],
  },
  {
    id: 'rubber-stamp',
    name: { el: 'Υπογραφή χωρίς αυτοψία', en: 'Signed without seeing' },
    question: {
      el: 'Υπέγραψε επιβλέπων, πιστοποιητής ή ελεγκτής κάτι που δεν είχε δει στο εργοτάξιο;',
      en: 'Did a supervisor, certifier or inspector sign off something they had not seen on site?',
    },
    safeguards: ['random-inspection', 'signed-permit'],
  },
  {
    id: 'false-test',
    name: { el: 'Παραπλανητική πιστοποίηση υλικών', en: 'Misleading material certificates' },
    question: {
      el: 'Χρησιμοποιήθηκαν υλικά με πιστοποιήσεις ασφαλείας που αποδείχθηκαν παραπλανητικές;',
      en: 'Were materials used whose safety certificates turned out to be misleading?',
    },
    safeguards: ['material-trace'],
  },
  {
    id: 'court-ignored',
    name: { el: 'Απόφαση που δεν εκτελέστηκε', en: 'Ruling never enforced' },
    question: {
      el: 'Κέρδισες — ή κέρδισαν γείτονες — δικαστική απόφαση κατά μιας άδειας, αλλά το κτίριο έμεινε όπως ήταν;',
      en: 'Did you — or neighbours — win a court ruling against a permit, yet the building stayed as it was?',
    },
    safeguards: ['court-enforce'],
  },
  {
    id: 'officials-shielded',
    name: { el: 'Υπάλληλοι στο απυρόβλητο', en: 'Officials shielded' },
    question: {
      el: 'Επέστρεψαν σε θέση ευθύνης υπάλληλοι που διώκονταν — ή χρειαζόταν άδεια για να ερευνηθούν καν;',
      en: 'Did officials under prosecution return to posts of responsibility — or was permission needed even to investigate them?',
    },
    safeguards: ['suspension', 'lifestyle-check'],
  },
]
