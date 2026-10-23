// ΔΑΙΔΑΛΟΣ — the ten recurring ways a public work becomes a danger. Each is a
// question answered privately — no names, no upload (Hard Rule 6).

import type { Pattern } from '../types'

export const PATTERNS: readonly Pattern[] = [
  {
    id: 'late-safety',
    name: { el: 'Σύστημα ασφαλείας που δεν τελειώνει', en: 'Safety system never finished' },
    question: {
      el: 'Περίμενες χρόνια ένα σύστημα ασφαλείας — σηματοδότηση, αντιπλημμυρικό, φωτισμό — που δεν ολοκληρώθηκε ποτέ;',
      en: 'Did you wait years for a safety system — signalling, flood defences, lighting — that was never completed?',
    },
    safeguards: ['safety-clock'],
  },
  {
    id: 'extensions',
    name: { el: 'Παράταση πάνω στην παράταση', en: 'Extension upon extension' },
    question: {
      el: 'Πήρε ένα έργο παράταση πάνω στην παράταση, χωρίς να εξηγήσει κανείς δημόσια γιατί;',
      en: 'Did a project get extension after extension, with no one explaining publicly why?',
    },
    safeguards: ['safety-clock', 'open-contract'],
  },
  {
    id: 'bribed-award',
    name: { el: 'Σύμβαση με αντάλλαγμα', en: 'Contract for a favour' },
    question: {
      el: 'Δόθηκε σύμβαση χωρίς διαγωνισμό, με αντάλλαγμα ή σε «ημέτερους»;',
      en: 'Was a contract awarded without a tender, for a kickback or to “our people”?',
    },
    safeguards: ['open-contract', 'independent-overseer'],
  },
  {
    id: 'rigged-bid',
    name: { el: 'Στημένος διαγωνισμός', en: 'Rigged tender' },
    question: {
      el: 'Κέρδιζαν οι ίδιοι εργολάβοι με τη σειρά, με μηδενική έκπτωση, ενώ οι άλλοι αποσύρονταν;',
      en: 'Did the same contractors win in turn, at zero discount, while the others withdrew?',
    },
    safeguards: ['bid-screen'],
  },
  {
    id: 'cost-overrun',
    name: { el: 'Κόστος που φουσκώνει', en: 'Ballooning cost' },
    question: {
      el: 'Κόστισε ένα έργο πολύ περισσότερο από τον προϋπολογισμό του, χωρίς δημόσια εξήγηση;',
      en: 'Did a project cost far more than its budget, with no public explanation?',
    },
    safeguards: ['cost-mirror', 'open-contract'],
  },
  {
    id: 'neglected-maintenance',
    name: { el: 'Συντήρηση που κόπηκε', en: 'Maintenance cut' },
    question: {
      el: 'Φθείρεται μια γέφυρα, ένας δρόμος ή ένας σταθμός χρόνια χωρίς επισκευή, ενώ όλοι το βλέπουν;',
      en: 'Has a bridge, road or station been decaying for years without repair, while everyone sees it?',
    },
    safeguards: ['health-register'],
  },
  {
    id: 'ignored-engineer',
    name: { el: 'Ο μηχανικός που δεν ακούστηκε', en: 'The engineer no one heard' },
    question: {
      el: 'Προειδοποίησε μηχανικός, εργαζόμενος ή τεχνικός έλεγχος για κίνδυνο — και δεν ακολούθησε τίποτα;',
      en: 'Did an engineer, a worker or a technical review warn of danger — and nothing followed?',
    },
    safeguards: ['engineer-voice', 'health-register'],
  },
  {
    id: 'opened-uncertified',
    name: { el: 'Άνοιξε χωρίς πιστοποίηση', en: 'Opened without certification' },
    question: {
      el: 'Άνοιξε ή ξανάνοιξε ένα έργο στο κοινό χωρίς ανεξάρτητο έλεγχο αντοχής;',
      en: 'Did a work open or reopen to the public without an independent load or safety check?',
    },
    safeguards: ['opening-seal'],
  },
  {
    id: 'captured-overseer',
    name: { el: 'Ο επόπτης στο πλευρό του αναδόχου', en: 'The overseer on the contractor’s side' },
    question: {
      el: 'Ήταν η δημόσια υπηρεσία που έπρεπε να ελέγχει τον ανάδοχο ή τον παραχωρησιούχο πιο κοντά σε εκείνον παρά στους πολίτες;',
      en: 'Was the public body meant to supervise the contractor or concessionaire closer to it than to the citizens?',
    },
    safeguards: ['independent-overseer'],
  },
  {
    id: 'escaped',
    name: { el: 'Παραγραφή ή ασυλία', en: 'Time-barred or immune' },
    question: {
      el: 'Τελείωσε μια υπόθεση με παραγραφή ή με ψήφο που δεν επέτρεψε έρευνα — πριν κριθεί ποιος φταίει;',
      en: 'Did a case end through time limits or a vote that blocked investigation — before anyone was judged?',
    },
    safeguards: ['prescription-clock', 'named-vote'],
  },
]
