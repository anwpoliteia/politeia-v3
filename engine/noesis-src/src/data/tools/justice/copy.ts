// ΙΣΟΝΟΜΙΑ — the words that make the justice tool its own.

import type { ToolCopy } from '../types'

export const JUSTICE_COPY: ToolCopy = {
  eyebrow: { el: 'ΙΣΟΝΟΜΙΑ · ΓΙΑΤΙ ΥΠΑΡΧΕΙ Η ΔΙΚΑΙΟΣΥΝΗ', en: 'ISONOMIA · WHY JUSTICE EXISTS' },
  title: {
    el: 'Δέκα υποθέσεις όπου η εξουσία πέρασε πάνω από τον πολίτη — και πώς μια ΤΝ, ως μάρτυρας και όχι ως δικαστής, θα το είχε δει.',
    en: 'Ten cases where power drove over a citizen — and how an AI, as witness rather than judge, would have seen it.',
  },
  subtitle: {
    el: 'Η δικαιοσύνη δεν επινοήθηκε για να προστατεύει δικαστές, υπουργούς ή ισχυρούς. Επινοήθηκε για έναν λόγο: ο νόμος να κοιτάζει τη βλάβη, όχι το πρόσωπο. Κάθε υπόθεση εδώ είναι ελεγμένη σε πηγές και φέρει τον ισχυρότερο αντίλογό της.',
    en: 'Justice was not invented to protect judges, ministers or the powerful. It was invented for one reason: that the law look at the harm, not at the person. Every case here is checked against sources and carries its strongest counter-argument.',
  },
  // Aristotle, Nicomachean Ethics V.4, 1132a.
  quoteGreek: 'πρὸς τοῦ βλάβους τὴν διαφορὰν μόνον βλέπει ὁ νόμος, καὶ χρῆται ὡς ἴσοις.',
  quoteRender: {
    el: 'Ο νόμος κοιτάζει μόνο τη διαφορά της βλάβης, και μεταχειρίζεται τους ανθρώπους ως ίσους.',
    en: 'The law looks only at the difference in the harm, and treats the parties as equals.',
  },
  quoteCite: { el: 'Αριστοτέλης, Ἠθικὰ Νικομάχεια Ε, 1132a', en: 'Aristotle, Nicomachean Ethics V, 1132a' },
  principles: [
    {
      title: { el: 'Ο μόνος λόγος', en: 'The only reason' },
      body: {
        el: 'Αν ο νόμος κοιτάζει το πρόσωπο, δεν χρειαζόμαστε δικαστήρια — αρκεί η δύναμη. Το δικαστήριο υπάρχει μόνο για να σταθεί ανάμεσα στον ισχυρό και στον αδύναμο και να τους δει ίσους. Όταν ένας αξιωματούχος σκοτώνει και φεύγει, δεν αποτυγχάνει μια δίκη· αρνείται τον λόγο ύπαρξης του θεσμού.',
        en: 'If the law looks at the person, we do not need courts — force is enough. A court exists only to stand between the strong and the weak and see them as equals. When an official kills and walks away, it is not a trial that fails; it is the institution denying its reason to exist.',
      },
    },
    {
      title: { el: 'Η ΤΝ κοιτάζει προς τα πάνω', en: 'The AI looks up, not down' },
      body: {
        el: 'Κάθε ΤΝ που αφέθηκε να αποφασίζει μόνη της στράφηκε προς τα κάτω — βαθμολόγησε κατηγορούμενους, ανέργους, γονείς — και μετέτρεψε την προκατάληψη σε νόμο. Εδώ η ΤΝ ελέγχει όσους έχουν εξουσία, ποτέ τον πολίτη. Προτείνει· επώνυμοι άνθρωποι αποφασίζουν και λογοδοτούν.',
        en: 'Every AI left to decide on its own pointed downward — scoring defendants, the unemployed, parents — and turned prejudice into law. Here the AI audits those who hold power, never the citizen. It proposes; named humans decide and answer for it.',
      },
    },
    {
      title: { el: 'Η Αθήνα το ήξερε ήδη', en: 'Athens already knew' },
      body: {
        el: 'Οι Αθηναίοι κλήρωναν τους δικαστές το πρωί της δίκης ώστε κανείς να μην ξέρει ποιον να δωροδοκήσει, και κάθε άρχων λογοδοτούσε δημόσια στο τέλος της θητείας του. Η ΤΝ εδώ δεν επινοεί κάτι νέο· δίνει σε μια πολιτεία εκατομμυρίων τα εργαλεία που είχε μια πόλη χιλιάδων.',
        en: 'Athenians drew their jurors by lot on the morning of the trial so no one knew whom to bribe, and every magistrate answered publicly at the end of office. The AI here invents nothing new; it gives a republic of millions the tools a city of thousands already had.',
      },
    },
  ],
  safeguardsLede: {
    el: 'Δέκα προτάσεις, μία για κάθε τρόπο με τον οποίο η δικαιοσύνη λυγίζει μπροστά στην εξουσία. Καμία δεν δικάζει. Όλες βλέπουν, καταγράφουν και ρωτούν. Υιοθέτησε όσες θέλεις — γίνονται ο δικός σου Χάρτης.',
    en: 'Ten proposals, one for each way justice bends before power. None of them judges. All of them see, record and ask. Adopt the ones you want — they become your own Charter.',
  },
  myCaseLede: {
    el: 'Αν κάτι ανάλογο συνέβη σε σένα ή σε κάποιον δικό σου, σημείωσε ό,τι αναγνωρίζεις. Δεν ζητάμε ονόματα. Τίποτα δεν φεύγει από τη συσκευή σου.',
    en: 'If something like this happened to you or someone you love, mark what you recognise. We ask for no names. Nothing leaves your device.',
  },
  visionPlaceholder: {
    el: 'π.χ. Κανένας αξιωματούχος δεν κρίνεται από όσους του χρωστούν τη θέση τους.',
    en: 'e.g. No official is judged by people who owe them their position.',
  },
  charterHeading: { el: 'ΧΑΡΤΗΣ ΙΣΟΝΟΜΙΑΣ', en: 'ISONOMIA CHARTER' },
}
