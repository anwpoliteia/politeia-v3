// ΙΠΠΟΚΡΑΤΗΣ — the ten recurring ways care becomes a market. Each is a
// question a patient can answer privately about their own experience, on their
// own device — no names, no medical data, no upload (Hard Rule 6).

import type { Pattern } from '../types'

export const PATTERNS: readonly Pattern[] = [
  {
    id: 'fakelaki',
    name: { el: 'Φακελάκι', en: 'The envelope' },
    question: {
      el: 'Σου ζητήθηκαν χρήματα «κάτω από το τραπέζι» για φροντίδα που δικαιούσαι;',
      en: 'Were you asked for money “under the table” for care you are entitled to?',
    },
    safeguards: ['signal', 'queue'],
  },
  {
    id: 'queue-jump',
    name: { el: 'Προσπέραση στη σειρά', en: 'Queue jumping' },
    question: {
      el: 'Είδες κάποιον «με μέσο» να περνά μπροστά σου για χειρουργείο, κρεβάτι ή εξέταση;',
      en: 'Did you see someone “with connections” jump ahead of you for surgery, a bed or a test?',
    },
    safeguards: ['queue'],
  },
  {
    id: 'bought-prescriber',
    name: { el: 'Αγορασμένη συνταγή', en: 'Bought prescription' },
    question: {
      el: 'Σου γράφτηκε ακριβό φάρμακο ή εξέταση χωρίς εξήγηση, από γιατρό που φαινόταν δεμένος με μια εταιρεία;',
      en: 'Were you prescribed an expensive drug or test without explanation, by a doctor who seemed tied to a company?',
    },
    safeguards: ['sunshine', 'anomaly'],
  },
  {
    id: 'phantom-billing',
    name: { el: 'Εικονικές χρεώσεις', en: 'Phantom billing' },
    question: {
      el: 'Χρεώθηκαν στο όνομά σου φάρμακα, εξετάσεις ή πράξεις που δεν έγιναν ποτέ;',
      en: 'Were drugs, tests or procedures that never happened billed in your name?',
    },
    safeguards: ['my-file', 'anomaly'],
  },
  {
    id: 'crony-contract',
    name: { el: 'Σύμβαση στους «δικούς»', en: 'Contract for insiders' },
    question: {
      el: 'Δόθηκε σύμβαση υγείας — προμήθεια, νοσοκομείο, υπηρεσία — σε πρόσωπα κοντά στην εξουσία ή πολύ ακριβότερα από όσο αλλού;',
      en: 'Was a health contract — supplies, a hospital, a service — given to people close to power, or far above the price elsewhere?',
    },
    safeguards: ['open-procurement'],
  },
  {
    id: 'adulterated',
    name: { el: 'Νοθευμένα υλικά', en: 'Adulterated supplies' },
    question: {
      el: 'Χρησιμοποιήθηκαν φάρμακα, υλικά ή απολυμαντικά που δεν ήταν αυτό που έγραφε η ετικέτα;',
      en: 'Were drugs, materials or disinfectants used that were not what the label said?',
    },
    safeguards: ['lot-test'],
  },
  {
    id: 'revolving-door',
    name: { el: 'Περιστρεφόμενη πόρτα', en: 'Revolving door' },
    question: {
      el: 'Πέρασε ελεγκτής ή αξιωματούχος από την εποπτεία στην εταιρεία που εποπτευόταν;',
      en: 'Did a regulator or official move from overseeing a company to working for it?',
    },
    safeguards: ['cooling'],
  },
  {
    id: 'silenced-warning',
    name: { el: 'Φιμωμένη προειδοποίηση', en: 'Silenced warning' },
    question: {
      el: 'Τιμωρήθηκε ή φιμώθηκε γιατρός, νοσηλευτής, ασθενής ή δημοσιογράφος που προειδοποίησε;',
      en: 'Was a doctor, nurse, patient or journalist who raised the alarm punished or silenced?',
    },
    safeguards: ['shield'],
  },
  {
    id: 'bought-credentials',
    name: { el: 'Αγορασμένα πτυχία και θέσεις', en: 'Bought degrees and posts' },
    question: {
      el: 'Πήρε κάποιος θέση ή πτυχίο υγείας με πλαστοπροσωπία, πληρωμή ή «μέσο»;',
      en: 'Did someone get a health post or degree through impersonation, payment or connections?',
    },
    safeguards: ['anomaly'],
  },
  {
    id: 'cost-over-life',
    name: { el: 'Εξοικονόμηση πάνω από ζωές', en: 'Savings over lives' },
    question: {
      el: 'Μεταφέρθηκαν ή κόπηκαν ασθενείς από φροντίδα «για εξοικονόμηση», χωρίς να παρακολουθεί κανείς τι απέγιναν;',
      en: 'Were patients moved or cut from care “to save money,” with no one tracking what became of them?',
    },
    safeguards: ['outcome'],
  },
]
