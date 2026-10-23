// The ten recurring patterns by which a justice system bends for the powerful.
// Each is phrased as a question a citizen can answer about their own case,
// privately, on their own device — no names, no upload (Hard Rule 6).

import type { Pattern } from '../types'

export const PATTERNS: readonly Pattern[] = [
  {
    id: 'downgraded-charge',
    name: { el: 'Υποβαθμισμένη κατηγορία', en: 'Downgraded charge' },
    question: {
      el: 'Ήταν η κατηγορία πολύ ελαφρύτερη από τη βλάβη που προκλήθηκε;',
      en: 'Was the charge far lighter than the harm done?',
    },
    safeguards: ['mirror', 'reasons'],
  },
  {
    id: 'captured-investigation',
    name: { el: 'Αιχμάλωτη έρευνα', en: 'Captured investigation' },
    question: {
      el: 'Συνδεόταν ο δράστης — ή η οικογένειά του — με όσους ερευνούσαν ή δίκαζαν;',
      en: 'Was the person responsible — or their family — connected to those investigating or judging?',
    },
    safeguards: ['conflicts'],
  },
  {
    id: 'altered-evidence',
    name: { el: 'Αλλοιωμένα τεκμήρια', en: 'Altered evidence' },
    question: {
      el: 'Χάθηκαν, άλλαξαν ή «καθαρίστηκαν» τεκμήρια, δείγματα ή ο ίδιος ο τόπος;',
      en: 'Did evidence, samples or the scene itself go missing, change or get “cleaned up”?',
    },
    safeguards: ['seal'],
  },
  {
    id: 'victim-blamed',
    name: { el: 'Ενοχοποίηση του θύματος', en: 'Victim blamed' },
    question: {
      el: 'Έριξε η έρευνα την ευθύνη στο θύμα;',
      en: 'Did the investigation shift the blame onto the victim?',
    },
    safeguards: ['reconstruct', 'reasons'],
  },
  {
    id: 'scapegoat',
    name: { el: 'Αποδιοπομπαίος', en: 'Scapegoat' },
    question: {
      el: 'Πιέστηκε κάποιος άλλος να αναλάβει την ευθύνη στη θέση του δράστη;',
      en: 'Was someone else pressured to take the blame in place of the person responsible?',
    },
    safeguards: ['reconstruct', 'seal'],
  },
  {
    id: 'unnamed-driver',
    name: { el: 'Τεκμήρια που αγνοήθηκαν', en: 'Evidence ignored' },
    question: {
      el: 'Υπήρχαν αποδείξεις — βίντεο, μάρτυρες, παραδοχή — που η απόφαση δεν απάντησε ποτέ;',
      en: 'Was there proof — video, witnesses, an admission — that the decision never addressed?',
    },
    safeguards: ['reasons', 'reconstruct'],
  },
  {
    id: 'self-shield',
    name: { el: 'Αυτοπροστασία της εξουσίας', en: 'Power shielding itself' },
    question: {
      el: 'Αποφάσισαν για τη δίωξη οι συνάδελφοι, οι ανώτεροι ή το κόμμα του δράστη;',
      en: 'Did the person’s colleagues, superiors or party decide whether they would be prosecuted?',
    },
    safeguards: ['clock', 'mirror'],
  },
  {
    id: 'bought-bench',
    name: { el: 'Αγορασμένη έδρα', en: 'Bought bench' },
    question: {
      el: 'Είχε ο δικαστής ή ο εισαγγελέας συμφέρον στην έκβαση;',
      en: 'Did the judge or prosecutor have a stake in the outcome?',
    },
    safeguards: ['anomaly', 'pothen'],
  },
  {
    id: 'bribed-apex',
    name: { el: 'Διαβρωμένη κορυφή', en: 'Corrupted apex' },
    question: {
      el: 'Υπήρξαν ενδείξεις πίεσης ή χρημάτων από ανώτερα κλιμάκια της δικαιοσύνης ή της πολιτικής;',
      en: 'Were there signs of pressure or money from higher up in the courts or in politics?',
    },
    safeguards: ['pothen', 'kleros'],
  },
  {
    id: 'immunity-flight',
    name: { el: 'Ασυλία ή διαφυγή', en: 'Immunity or flight' },
    question: {
      el: 'Επικαλέστηκε ο δράστης ασυλία ή έφυγε από τη δικαιοδοσία;',
      en: 'Did the person claim immunity or leave the jurisdiction?',
    },
    safeguards: ['waiver', 'clock'],
  },
]
