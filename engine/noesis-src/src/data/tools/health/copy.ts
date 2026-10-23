// ΙΠΠΟΚΡΑΤΗΣ — the words that make the health tool its own.

import type { ToolCopy } from '../types'

export const HEALTH_COPY: ToolCopy = {
  eyebrow: { el: 'ΙΠΠΟΚΡΑΤΗΣ · ΓΙΑΤΙ ΥΠΑΡΧΕΙ Η ΔΗΜΟΣΙΑ ΥΓΕΙΑ', en: 'HIPPOCRATES · WHY PUBLIC HEALTH EXISTS' },
  title: {
    el: 'Δέκα υποθέσεις όπου η φροντίδα του αρρώστου έγινε εμπόρευμα — και πώς μια ΤΝ, ως μάρτυρας, θα το είχε δει.',
    en: 'Ten cases where caring for the sick became a trade — and how an AI, as witness, would have seen it.',
  },
  subtitle: {
    el: 'Η δημόσια υγεία δεν επινοήθηκε για να πλουτίζουν εταιρείες, προμηθευτές ή κομματικοί φίλοι. Επινοήθηκε για έναν λόγο: ο άρρωστος να φροντίζεται επειδή είναι άρρωστος — όχι επειδή πλήρωσε ή επειδή ξέρει κάποιον. Κάθε υπόθεση εδώ είναι ελεγμένη σε πηγές και φέρει τον ισχυρότερο αντίλογό της.',
    en: 'Public health was not invented to enrich companies, suppliers or party friends. It was invented for one reason: that the sick be cared for because they are sick — not because they paid, or know someone. Every case here is checked against sources and carries its strongest counter-argument.',
  },
  // The Hippocratic Oath.
  quoteGreek: 'ἐς οἰκίας δὲ ὁκόσας ἂν ἐσίω, ἐσελεύσομαι ἐπ’ ὠφελείῃ καμνόντων, ἐκτὸς ἐὼν πάσης ἀδικίης ἑκουσίης καὶ φθορίης.',
  quoteRender: {
    el: 'Σε όποιο σπίτι μπαίνω, θα μπαίνω για το καλό των αρρώστων, μακριά από κάθε εκούσια αδικία και φθορά.',
    en: 'Into whatever houses I enter, I will enter to help the sick, keeping clear of all intentional injustice and corruption.',
  },
  quoteCite: { el: 'Ἱπποκράτης, Ὅρκος', en: 'Hippocrates, the Oath' },
  principles: [
    {
      title: { el: 'Ο μόνος λόγος', en: 'The only reason' },
      body: {
        el: 'Η δημόσια υγεία υπάρχει για να σταματά στην πόρτα του νοσοκομείου η ερώτηση «πόσα έχεις;». Ο όρκος του γιατρού, από τους παλαιότερους κώδικες ιατρικής δεοντολογίας, γράφει ρητά «μακριά από κάθε αδικία και φθορά». Όταν ο άρρωστος πληρώνει κρυφά για να φροντιστεί, ή όταν το φάρμακό του επιλέγεται από μια μίζα, δεν αποτυγχάνει μια υπηρεσία· σπάει ο όρκος.',
        en: 'Public health exists so that the question “how much do you have?” stops at the hospital door. The physician’s oath, among the oldest codes of medical ethics, says it plainly: clear of all injustice and corruption. When the sick pay in secret to be cared for, or their medicine is chosen by a kickback, it is not a service that fails; it is the oath that breaks.',
      },
    },
    {
      title: { el: 'Η ΤΝ κοιτάζει προς τα πάνω', en: 'The AI looks up, not down' },
      body: {
        el: 'Ο κίνδυνος είναι ένας αλγόριθμος που «βαθμολογεί» ασθενείς ή κόβει θεραπείες για να κάνει οικονομία. Εδώ η ΤΝ ελέγχει όσους πληρώνονται από την υγεία — εταιρείες, προμηθευτές, διοικήσεις, τη συνταγογράφηση — ποτέ τον ίδιο τον άρρωστο ή τη διάγνωσή του. Προτείνει· επώνυμοι άνθρωποι αποφασίζουν.',
        en: 'The danger is an algorithm that “scores” patients or cuts treatment to save money. Here the AI audits those who are paid by health — companies, suppliers, managements, prescribing — never the patient or their diagnosis. It proposes; named humans decide.',
      },
    },
    {
      title: { el: 'Η αρχαία πόλη το ήξερε ήδη', en: 'The ancient city already knew' },
      body: {
        el: 'Οι αθηναίοι αγορανόμοι επέβλεπαν ώστε ό,τι πωλείται να είναι «καθαρό και ανόθευτο» (Αθηναίων Πολιτεία 51), και ήδη ο Ηρόδοτος γράφει για γιατρούς που πλήρωνε η ίδια η πόλη (Ἱστορίαι 3.131). Η ιδέα ότι η υγεία είναι δημόσια υπόθεση, με δημόσιο έλεγχο, είναι όσο παλιά όσο η πολιτεία.',
        en: 'Athens’ market wardens saw that whatever was sold was “pure and unadulterated” (Constitution of the Athenians 51), and Herodotus already writes of physicians paid by the city itself (Histories 3.131). The idea that health is a public matter, under public scrutiny, is as old as the republic.',
      },
    },
  ],
  safeguardsLede: {
    el: 'Δέκα προτάσεις, μία για κάθε τρόπο με τον οποίο η φροντίδα γίνεται αγορά. Καμία δεν κοιτάζει τον άρρωστο. Όλες βλέπουν όσους πληρώνονται από την υγεία. Υιοθέτησε όσες θέλεις — γίνονται ο δικός σου Χάρτης.',
    en: 'Ten proposals, one for each way care becomes a market. None of them looks at the patient. All of them watch those who are paid by health. Adopt the ones you want — they become your own Charter.',
  },
  myCaseLede: {
    el: 'Αν εσύ ή δικός σου άνθρωπος έζησε κάτι από αυτά — φακελάκι, «μέσο» στη σειρά, συνταγή που δεν καταλάβατε, χρέωση για κάτι που δεν έγινε — σημείωσε ό,τι αναγνωρίζεις. Δεν ζητάμε ονόματα ούτε ιατρικά δεδομένα. Τίποτα δεν φεύγει από τη συσκευή σου.',
    en: 'If you or someone you love lived through any of this — an envelope, a “connection” jumping the queue, a prescription no one explained, a charge for something that never happened — mark what you recognise. We ask for no names and no medical data. Nothing leaves your device.',
  },
  visionPlaceholder: {
    el: 'π.χ. Κανένας ασθενής να μη χρειάζεται φακελάκι ή «γνωστό» για να χειρουργηθεί στην ώρα του.',
    en: 'e.g. No patient should need an envelope or a “contact” to have surgery on time.',
  },
  charterHeading: { el: 'ΧΑΡΤΗΣ ΙΠΠΟΚΡΑΤΗ', en: 'HIPPOCRATES CHARTER' },
}
