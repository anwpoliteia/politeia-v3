// ΑΡΓΟΣ — the ten recurring ways a guardian turns against the citizen. Each is
// a question answered privately — no names, no upload (Hard Rule 6).

import type { Pattern } from '../types'

export const PATTERNS: readonly Pattern[] = [
  {
    id: 'own-investigate',
    name: { el: 'Ερευνούν τους δικούς τους', en: 'Investigating their own' },
    question: {
      el: 'Ερεύνησαν το περιστατικό συνάδελφοι ή προϊστάμενοι όσων εμπλέκονταν;',
      en: 'Was the incident investigated by colleagues or superiors of those involved?',
    },
    safeguards: ['independent-probe'],
  },
  {
    id: 'missing-footage',
    name: { el: 'Εικόνα που «χάθηκε»', en: 'Footage that “went missing”' },
    question: {
      el: 'Χάθηκαν ή «δεν λειτουργούσαν» κάμερες, καταγραφές ή τεκμήρια της επέμβασης;',
      en: 'Did cameras, recordings or evidence of the operation go missing or “not work”?',
    },
    safeguards: ['sealed-footage', 'witness-video'],
  },
  {
    id: 'victim-blamed',
    name: { el: 'Ενοχοποίηση του θύματος', en: 'Victim blamed' },
    question: {
      el: 'Παρουσιάστηκε αρχικά το θύμα ως ένοχο — κλέφτης, χρήστης, λαθρέμπορος, ταραχοποιός;',
      en: 'Was the victim first portrayed as the guilty one — a thief, a user, a smuggler, a troublemaker?',
    },
    safeguards: ['first-account', 'sealed-footage'],
  },
  {
    id: 'cover-up',
    name: { el: 'Συγκάλυψη', en: 'Cover-up' },
    question: {
      el: 'Άλλαξαν καταθέσεις, αναφορές ή η επίσημη εκδοχή για να προστατευτεί η υπηρεσία;',
      en: 'Were statements, reports or the official account changed to protect the service?',
    },
    safeguards: ['first-account', 'reasons'],
  },
  {
    id: 'lethal-force',
    name: { el: 'Θανατηφόρα βία χωρίς ανάγκη', en: 'Needless lethal force' },
    question: {
      el: 'Χρησιμοποιήθηκε όπλο ή θανατηφόρα βία για μικρό αδίκημα ή χωρίς άμεσο κίνδυνο;',
      en: 'Was a weapon or lethal force used over a petty offence or without imminent danger?',
    },
    safeguards: ['force-log', 'independent-probe'],
  },
  {
    id: 'charge-downgraded',
    name: { el: 'Υποβαθμισμένη κατηγορία ή ποινή', en: 'Charge or sentence downgraded' },
    question: {
      el: 'Υποβαθμίστηκε η κατηγορία ή μειώθηκε η ποινή επειδή ο δράστης ήταν όργανο της τάξης;',
      en: 'Was the charge downgraded or the sentence cut because the perpetrator was an officer?',
    },
    safeguards: ['mirror'],
  },
  {
    id: 'surveillance',
    name: { el: 'Παρακολούθηση χωρίς εξήγηση', en: 'Surveillance without explanation' },
    question: {
      el: 'Παρακολουθήθηκαν οι επικοινωνίες σου — ή το υποψιάζεσαι — χωρίς να σου εξηγηθεί ποτέ γιατί;',
      en: 'Were your communications monitored — or do you suspect so — without ever being told why?',
    },
    safeguards: ['warrant-ledger'],
  },
  {
    id: 'spyware',
    name: { el: 'Κατασκοπευτικό λογισμικό', en: 'Spyware' },
    question: {
      el: 'Βρέθηκε ή υπάρχει υποψία για κατασκοπευτικό λογισμικό στο κινητό σου ή σε ανθρώπους του περιβάλλοντός σου;',
      en: 'Was spyware found — or is it suspected — on your phone or those of people around you?',
    },
    safeguards: ['spyware-trace', 'warrant-ledger'],
  },
  {
    id: 'refused-oversight',
    name: { el: 'Άρνηση ελέγχου', en: 'Oversight refused' },
    question: {
      el: 'Αρνήθηκε η υπηρεσία να ερευνήσει τον εαυτό της ή να δώσει στοιχεία σε ανεξάρτητη αρχή;',
      en: 'Did the service refuse to investigate itself or to give evidence to an independent authority?',
    },
    safeguards: ['oversight-deadline'],
  },
  {
    id: 'archived',
    name: { el: 'Αρχειοθέτηση', en: 'Case archived' },
    question: {
      el: 'Αρχειοθετήθηκε η υπόθεση χωρίς να εξεταστούν όλα τα στοιχεία — ή από κάποιον που είχε ήδη ρόλο σε αυτήν;',
      en: 'Was the case archived without examining all the evidence — or by someone who already had a role in it?',
    },
    safeguards: ['reasons', 'oversight-deadline'],
  },
]
