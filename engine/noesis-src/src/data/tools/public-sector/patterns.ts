// ΑΡΙΣΤΕΙΔΗΣ — the ten recurring ways a public post becomes a favour. Each is
// a question answered privately — no names, no upload (Hard Rule 6).

import type { Pattern } from '../types'

export const PATTERNS: readonly Pattern[] = [
  {
    id: 'bypass-exam',
    name: { el: 'Πρόσληψη χωρίς διαγωνισμό', en: 'Hired without an exam' },
    question: {
      el: 'Προσλήφθηκε κάποιος σε δημόσια θέση χωρίς διαγωνισμό ΑΣΕΠ ή με μια «ειδική» διαδικασία;',
      en: 'Was someone hired into a public post without an ASEP competition, or through a “special” procedure?',
    },
    safeguards: ['open-hiring', 'staff-register'],
  },
  {
    id: 'temp-to-tenure',
    name: { el: 'Από το συμβόλαιο στη μονιμότητα', en: 'From contract to tenure' },
    question: {
      el: 'Έγιναν μόνιμοι συμβασιούχοι που είχαν μπει χωρίς διαγωνισμό — με απόφαση, όχι με αξιολόγηση;',
      en: 'Did contract staff who came in without an exam become permanent — by decree, not by merit?',
    },
    safeguards: ['open-hiring', 'enforce-annulment'],
  },
  {
    id: 'rigged-interview',
    name: { el: 'Η θέση είχε «κλείσει» από πριν', en: 'The post was “settled” in advance' },
    question: {
      el: 'Είχε αποφασιστεί ποιος θα πάρει τη θέση πριν γίνει η συνέντευξη ή η βαθμολόγηση;',
      en: 'Was it decided who would get the post before the interview or scoring took place?',
    },
    safeguards: ['hiring-audit'],
  },
  {
    id: 'ghost-payroll',
    name: { el: 'Μισθός ή σύνταξη-φάντασμα', en: 'Ghost salary or pension' },
    question: {
      el: 'Ξέρεις κάποιον που πληρώνεται από το Δημόσιο χωρίς να εργάζεται — ή μισθό ή σύνταξη που συνεχίζει να πληρώνεται μετά από θάνατο;',
      en: 'Do you know someone paid by the state without working — or a salary or pension that kept being paid after a death?',
    },
    safeguards: ['one-payroll'],
  },
  {
    id: 'forged-papers',
    name: { el: 'Πλαστά δικαιολογητικά', en: 'Forged papers' },
    question: {
      el: 'Έγιναν δεκτές πλαστές βεβαιώσεις προϋπηρεσίας ή πτυχία για πρόσληψη ή μονιμοποίηση;',
      en: 'Were forged service certificates or degrees accepted for a hire or a tenure decision?',
    },
    safeguards: ['document-seal'],
  },
  {
    id: 'party-appointments',
    name: { el: 'Διορισμός με κομματικό κριτήριο', en: 'Appointed for party loyalty' },
    question: {
      el: 'Διορίστηκαν σε διοικήσεις, οργανισμούς ή δημόσιες επιχειρήσεις πρόσωπα επειδή ανήκαν σε κόμμα;',
      en: 'Were people appointed to boards, agencies or state companies because they belonged to a party?',
    },
    safeguards: ['merit-boards'],
  },
  {
    id: 'pork-fund',
    name: { el: 'Κονδύλια στη διάθεση του πολιτικού', en: 'Funds at the politician’s disposal' },
    question: {
      el: 'Μοίραζε ένας βουλευτής ή αιρετός δημόσια χρήματα σε «έργα» ή οργανώσεις της επιλογής του;',
      en: 'Did an MP or elected official hand out public money to “projects” or organisations of their choosing?',
    },
    safeguards: ['fund-trace'],
  },
  {
    id: 'off-audit',
    name: { el: 'Χρήματα εκτός ελέγχου', en: 'Money outside audit' },
    question: {
      el: 'Δόθηκαν δημόσια χρήματα μέσα από διαδικασία που παρέκαμπτε τον δημοσιονομικό έλεγχο;',
      en: 'Was public money paid out through a procedure that bypassed financial audit?',
    },
    safeguards: ['fund-trace'],
  },
  {
    id: 'bought-votes',
    name: { el: 'Αγορασμένη ψήφος ή επιρροή', en: 'A vote or influence bought' },
    question: {
      el: 'Αγοράστηκε η ψήφος ή η στάση ενός εκπροσώπου — με χρήματα, δώρα, ταξίδια ή θέσεις;',
      en: 'Was a representative’s vote or stance bought — with money, gifts, trips or jobs?',
    },
    safeguards: ['influence-ledger'],
  },
  {
    id: 'impunity',
    name: { el: 'Χωρίς συνέπειες', en: 'No consequences' },
    question: {
      el: 'Έληξε η υπόθεση με χάρη, παραγραφή ή ατέρμονες αναβολές — ή δεν απομακρύνθηκε ποτέ όποιος μπήκε παράνομα;',
      en: 'Did the case end in a pardon, time limits or endless delays — or was the person who got in unlawfully never removed?',
    },
    safeguards: ['no-oblivion', 'enforce-annulment'],
  },
]
