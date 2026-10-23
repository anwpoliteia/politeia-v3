// ΛΟΓΙΣΤΑΙ — the ten recurring ways public money and tax bend for the
// powerful. Each is a question a citizen answers privately — no names, no tax
// numbers, no upload (Hard Rule 6).

import type { Pattern } from '../types'

export const PATTERNS: readonly Pattern[] = [
  {
    id: 'altered-data',
    name: { el: 'Στοιχεία που «χάθηκαν»', en: 'Records that “went missing”' },
    question: {
      el: 'Χάθηκαν, άλλαξαν ή «ξεχάστηκαν» λίστες, φάκελοι ή στοιχεία που θα έδειχναν ισχυρούς;',
      en: 'Did lists, files or records that would have exposed the powerful go missing, change or get “forgotten”?',
    },
    safeguards: ['sealed-data', 'clock'],
  },
  {
    id: 'messenger-prosecuted',
    name: { el: 'Δίωξη του αγγελιοφόρου', en: 'The messenger prosecuted' },
    question: {
      el: 'Διώχθηκε ή πιέστηκε όποιος έφερε στο φως τα αληθινά νούμερα ή τα ονόματα — στατιστικός, ελεγκτής, δημοσιογράφος, υπάλληλος;',
      en: 'Was whoever brought the true numbers or names to light — a statistician, auditor, journalist or employee — prosecuted or pressured?',
    },
    safeguards: ['shield', 'open-method'],
  },
  {
    id: 'refund-extortion',
    name: { el: 'Εκβιασμός με την επιστροφή', en: 'Extortion over refunds' },
    question: {
      el: 'Σου ζητήθηκαν χρήματα για να προχωρήσει μια επιστροφή φόρου ή για να «κλείσει» ένας έλεγχος;',
      en: 'Were you asked for money to release a tax refund or to “close” an audit?',
    },
    safeguards: ['refund-clock', 'kleros-audit'],
  },
  {
    id: 'missing-trader',
    name: { el: 'Εταιρείες-φαντάσματα', en: 'Missing traders' },
    question: {
      el: 'Υπήρχαν εταιρείες-κελύφη που χρέωναν ΦΠΑ και εξαφανίζονταν πριν τον αποδώσουν;',
      en: 'Were there shell companies that charged VAT and vanished before paying it over?',
    },
    safeguards: ['vat-chain', 'owners'],
  },
  {
    id: 'phantom-refund',
    name: { el: 'Επιστροφή φόρου που δεν πληρώθηκε ποτέ', en: 'Refunds of tax never paid' },
    question: {
      el: 'Επιστράφηκε φόρος που κανείς δεν είχε πληρώσει ποτέ;',
      en: 'Was tax refunded that no one had ever paid?',
    },
    safeguards: ['vat-chain', 'regulator-watch'],
  },
  {
    id: 'offshore',
    name: { el: 'Κρυφά χρήματα στο εξωτερικό', en: 'Hidden money abroad' },
    question: {
      el: 'Κρύφτηκαν χρήματα ή εισοδήματα ισχυρών σε λογαριασμούς ή εταιρείες εξωτερικού;',
      en: 'Was the money or income of the powerful hidden in foreign accounts or companies?',
    },
    safeguards: ['owners', 'pep-first'],
  },
  {
    id: 'looted-fund',
    name: { el: 'Λεηλατημένο δημόσιο ταμείο', en: 'A looted public fund' },
    question: {
      el: 'Ξοδεύτηκαν χρήματα δημόσιου ταμείου ή κρατικής επένδυσης για προσωπικά οφέλη αξιωματούχων;',
      en: 'Was money from a public fund or state investment spent on officials’ personal benefit?',
    },
    safeguards: ['owners', 'pep-first'],
  },
  {
    id: 'captured-regulator',
    name: { el: 'Αιχμάλωτος εποπτευτής', en: 'Captured regulator' },
    question: {
      el: 'Αγνόησε ή κάλυψε η εποπτική αρχή προειδοποιήσεις — ή στράφηκε κατά όσων τις έκαναν;',
      en: 'Did the supervisor ignore or cover up warnings — or turn on those who raised them?',
    },
    safeguards: ['regulator-watch', 'shield'],
  },
  {
    id: 'revolving-door',
    name: { el: 'Ο ελεγκτής που άλλαξε πλευρά', en: 'The inspector who switched sides' },
    question: {
      el: 'Χρησιμοποίησε πρώην ελεγκτής ή αξιωματούχος όσα ήξερε για να βοηθήσει άλλους να αποφύγουν τον φόρο;',
      en: 'Did a former inspector or official use what they knew to help others avoid tax?',
    },
    safeguards: ['vat-chain', 'regulator-watch'],
  },
  {
    id: 'self-shield',
    name: { el: 'Αυτοπροστασία της εξουσίας', en: 'Power shielding itself' },
    question: {
      el: 'Αποφάσισαν για τη δίωξη οι συνάδελφοι ή το κόμμα του αξιωματούχου — ή άφησαν τον χρόνο να περάσει;',
      en: 'Did the official’s colleagues or party decide on prosecution — or let the time run out?',
    },
    safeguards: ['clock', 'pep-first'],
  },
]
