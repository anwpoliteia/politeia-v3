// ΕΥΘΥΝΑΙ — the labels every accountability tool shares, and the shared
// Αντίλογος (Hard Rule 3) against letting any AI judge on its own. Kept out of
// i18n/el.ts so the dictionary stays lean. EL is authoritative (Hard Rule 5).

import type { Bilingual, Source } from '../lib/types'

type B = Bilingual

export const TOOL_LABELS = {
  // Ranking
  rankTitle: { el: 'Οι δέκα, κατά προτεραιότητα', en: 'The ten, by priority' } as B,
  rankLede: {
    el: 'Η σειρά βγαίνει από έναν δημοσιευμένο τύπο, όχι από γνώμη. Οι βαθμοί κάθε υπόθεσης είναι ορατοί. Τα βάρη είναι δικά σου: άλλαξέ τα και η σειρά αλλάζει μπροστά σου.',
    en: 'The order comes from a published formula, not an opinion. Every case’s scores are visible. The weights are yours: change them and the order changes in front of you.',
  } as B,
  weightsTitle: { el: 'Τα βάρη σου', en: 'Your weights' } as B,
  weightsReset: { el: 'Επαναφορά', en: 'Reset' } as B,
  scoresNote: {
    el: 'Βαθμοί 1–10: συντακτικές εκτιμήσεις, ανοιχτές σε αμφισβήτηση.',
    en: 'Scores 1–10: editorial estimates, open to challenge.',
  } as B,

  // Case card
  whatThisMeans: { el: 'Τι σημαίνει αυτό', en: 'What this means' } as B,
  facts: { el: 'Τα γεγονότα', en: 'The facts' } as B,
  outcome: { el: 'Τι έκανε το σύστημα', en: 'What the system did' } as B,
  breach: { el: 'Γιατί προδίδει τον λόγο ύπαρξης του θεσμού', en: 'Why it betrays the reason the institution exists' } as B,
  counterfactual: { el: 'Τι θα είχε αλλάξει', en: 'What would have changed' } as B,
  antilogos: { el: 'Αντίλογος', en: 'Counter-argument' } as B,
  reply: { el: 'Απάντηση', en: 'Reply' } as B,
  lever: { el: 'Τι μπορείς να κάνεις', en: 'What you can do' } as B,
  status: { el: 'Κατάσταση', en: 'Status' } as B,
  sources: { el: 'Πηγές', en: 'Sources' } as B,
  harmed: { el: 'Θύματα', en: 'Harmed' } as B,
  readCase: { el: 'Άνοιξε την υπόθεση', en: 'Open the case' } as B,
  closeCase: { el: 'Κλείσε', en: 'Close' } as B,
  verified: { el: 'Ελέγχθηκε σε πηγές στις', en: 'Checked against sources on' } as B,

  // Safeguards
  safeguardsTitle: { el: 'Οι δέκα εγγυήσεις', en: 'The ten safeguards' } as B,
  precedent: { el: 'Ρίζα', en: 'Root' } as B,
  how: { el: 'Τι κάνει η ΤΝ', en: 'What the AI does' } as B,
  humans: { el: 'Τι αποφασίζουν οι άνθρωποι', en: 'What humans decide' } as B,
  distributional: { el: 'Ποιος πληρώνει · ποιος ωφελείται', en: 'Who pays · who gains' } as B,
  endorse: { el: 'Το υιοθετώ', en: 'I adopt this' } as B,
  endorsed: { el: 'Στον Χάρτη μου', en: 'In my Charter' } as B,
  answersCases: { el: 'Απαντά σε', en: 'Answers' } as B,

  // Your case — private
  myCaseTitle: { el: 'Η δική σου υπόθεση', en: 'Your own case' } as B,
  myCasePrivate: { el: 'Μόνο σε αυτή τη συσκευή', en: 'This device only' } as B,
  myCaseEmpty: {
    el: 'Σημείωσε τουλάχιστον ένα μοτίβο για να δεις ποιες εγγυήσεις θα σε είχαν προστατέψει.',
    en: 'Mark at least one pattern to see which safeguards would have protected you.',
  } as B,
  myCaseShield: { el: 'Θα σε είχαν προστατέψει', en: 'Would have protected you' } as B,
  myCaseSimilar: { el: 'Υποθέσεις με το ίδιο μοτίβο', en: 'Cases with the same pattern' } as B,
  myCaseClear: { el: 'Καθαρισμός', en: 'Clear' } as B,
  myCaseAdoptAll: { el: 'Πρόσθεσέ τες στον Χάρτη μου', en: 'Add them to my Charter' } as B,

  // Charter — the citizen as vision maker
  charterTitle: { el: 'Ο Χάρτης σου', en: 'Your Charter' } as B,
  charterLede: {
    el: 'Εδώ ο πολίτης γίνεται νομοθέτης του οράματος. Οι εγγυήσεις που υιοθέτησες, τα βάρη σου και μία πρόταση με δικά σου λόγια — έτοιμα να σταλούν σε βουλευτή, σε σύλλογο, σε φίλο.',
    en: 'Here the citizen becomes a lawmaker of the vision. The safeguards you adopted, your weights, and one sentence in your own words — ready to send to an MP, an association, a friend.',
  } as B,
  visionLabel: { el: 'Αυτό που θέλω, σε μία πρόταση', en: 'What I want, in one sentence' } as B,
  charterEmpty: {
    el: 'Δεν έχεις υιοθετήσει ακόμη καμία εγγύηση. Διάλεξε όσες σε πείθουν παραπάνω.',
    en: 'You have not adopted a safeguard yet. Choose the ones that convince you above.',
  } as B,
  copy: { el: 'Αντιγραφή του Χάρτη', en: 'Copy my Charter' } as B,
  copied: { el: 'Αντιγράφηκε', en: 'Copied' } as B,
  copyFailed: {
    el: 'Η αντιγραφή απέτυχε — επίλεξε το κείμενο και αντέγραψέ το χειροκίνητα.',
    en: 'Copy failed — select the text and copy it by hand.',
  } as B,
  charterPriorities: { el: 'Οι προτεραιότητές μου', en: 'My priorities' } as B,
  charterDemands: { el: 'Ζητώ', en: 'I ask for' } as B,
  charterVision: { el: 'Το όραμά μου', en: 'My vision' } as B,
  charterFooter: { el: 'Συντάχθηκε στην ΑΝΩ ΠΟΛΙΤΕΙΑ', en: 'Written on ΑΝΩ ΠΟΛΙΤΕΙΑ' } as B,

  // The shared counter-case against AI judges.
  failTitle: { el: 'Αντίλογος: όταν η ΤΝ αποφασίζει μόνη της', en: 'Counter-argument: when AI decides alone' } as B,
  failLede: {
    el: 'Τρία πραγματικά συστήματα που αποφάσιζαν για ανθρώπους χωρίς ανθρώπους. Γι’ αυτό κανένα εργαλείο εδώ δεν δίνει στην ΤΝ τον ρόλο του κριτή.',
    en: 'Three real systems that decided about people without people. This is why no tool here ever gives the AI the role of judge.',
  } as B,
  failLesson: { el: 'Το δίδαγμα', en: 'The lesson' } as B,

  // Navigation between the tools
  hubLink: { el: 'Όλα τα εργαλεία · Εὔθυναι', en: 'All tools · Euthynai' } as B,
}

export interface Failure {
  name: B
  where: B
  what: B
  lesson: B
  source: Source
}

export const FAILURES: readonly Failure[] = [
  {
    name: { el: 'COMPAS', en: 'COMPAS' },
    where: { el: 'ΗΠΑ · 2016', en: 'USA · 2016' },
    what: {
      el: 'Αλγόριθμος εκτίμησης κινδύνου για κατηγορούμενους. Η ανάλυση της ProPublica σε πάνω από 10.000 υποθέσεις βρήκε ότι οι μαύροι κατηγορούμενοι χαρακτηρίζονταν λανθασμένα «υψηλού κινδύνου» σχεδόν διπλάσια συχνά από τους λευκούς. Η εταιρεία και άλλοι ερευνητές αμφισβήτησαν το μέτρο.',
      en: 'A risk-scoring algorithm for defendants. ProPublica’s analysis of over 10,000 cases found Black defendants were wrongly labelled “high risk” almost twice as often as white defendants. The vendor and other researchers disputed the measure.',
    },
    lesson: {
      el: 'Μια ΤΝ που βαθμολογεί πολίτες μαθαίνει την προκατάληψη του παρελθόντος. Γι’ αυτό εδώ η ΤΝ δεν βαθμολογεί ποτέ κατηγορούμενο.',
      en: 'An AI that scores citizens learns the prejudice of the past. That is why here the AI never scores a defendant.',
    },
    source: { title: 'ProPublica — Machine Bias (2016)', url: 'https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing' },
  },
  {
    name: { el: 'Robodebt', en: 'Robodebt' },
    where: { el: 'Αυστραλία · 2016–2019', en: 'Australia · 2016–2019' },
    what: {
      el: 'Αυτοματοποιημένος υπολογισμός «χρεών» προνοιακών επιδομάτων χωρίς ανθρώπινο έλεγχο. Η Βασιλική Επιτροπή (2023) τον έκρινε «χονδροειδή και σκληρό μηχανισμό, ούτε δίκαιο ούτε νόμιμο». Ακολούθησε διακανονισμός περίπου 1,8 δισ. δολαρίων.',
      en: 'Automated welfare “debt” calculation with no human check. The Royal Commission (2023) called it “a crude and cruel mechanism, neither fair nor legal.” A settlement of about A$1.8 billion followed.',
    },
    lesson: {
      el: 'Όταν κανένας επώνυμος άνθρωπος δεν υπογράφει, κανείς δεν λογοδοτεί. Γι’ αυτό εδώ κάθε απόφαση φέρει όνομα.',
      en: 'When no named human signs, no one answers. That is why here every decision carries a name.',
    },
    source: { title: 'Royal Commission into the Robodebt Scheme — Report (2023)', url: 'https://robodebt.royalcommission.gov.au/publications/report' },
  },
  {
    name: { el: 'Υπόθεση επιδομάτων παιδικής φροντίδας', en: 'Childcare benefits scandal' },
    where: { el: 'Ολλανδία · 2013–2021', en: 'Netherlands · 2013–2021' },
    what: {
      el: 'Αλγόριθμοι της φορολογικής αρχής χρησιμοποίησαν τη διπλή υπηκοότητα ως δείκτη απάτης· χιλιάδες οικογένειες κατηγορήθηκαν άδικα. Η κυβέρνηση παραιτήθηκε τον Ιανουάριο 2021 και το 2022 παραδέχτηκε θεσμικό ρατσισμό.',
      en: 'Tax-authority algorithms used dual nationality as a fraud indicator; thousands of families were wrongly accused. The government resigned in January 2021 and in 2022 admitted institutional racism.',
    },
    lesson: {
      el: 'Η επιτήρηση που στρέφεται στους αδύναμους καταστρέφει τους αδύναμους. Γι’ αυτό εδώ η ΤΝ κοιτάζει μόνο προς τα πάνω.',
      en: 'Surveillance aimed at the weak destroys the weak. That is why here the AI looks only upward.',
    },
    source: { title: 'European Parliament — The Dutch childcare benefit scandal, institutional racism and algorithms (2022)', url: 'https://www.europarl.europa.eu/doceo/document/O-9-2022-000028_EN.html' },
  },
]
