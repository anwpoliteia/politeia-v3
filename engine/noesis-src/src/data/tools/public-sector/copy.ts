// ΑΡΙΣΤΕΙΔΗΣ — the words that make the public-sector & patronage tool its own.

import type { ToolCopy } from '../types'

export const PUBLIC_SECTOR_COPY: ToolCopy = {
  eyebrow: { el: 'ΑΡΙΣΤΕΙΔΗΣ · ΓΙΑΤΙ ΥΠΑΡΧΕΙ Η ΔΗΜΟΣΙΑ ΥΠΗΡΕΣΙΑ', en: 'ARISTIDES · WHY A PUBLIC SERVICE EXISTS' },
  title: {
    el: 'Δέκα υποθέσεις όπου μια δημόσια θέση, μια ψήφος ή μια υπογραφή δόθηκε ως χάρη και όχι ως δικαίωμα — και πώς μια ΤΝ, ως μάρτυρας, θα το είχε δει.',
    en: 'Ten cases where a public post, a vote or a signature was handed out as a favour, not a right — and how an AI, as witness, would have seen it.',
  },
  subtitle: {
    el: 'Η δημόσια υπηρεσία δεν επινοήθηκε για να πληρώνει κομματικά χρέη. Επινοήθηκε για έναν λόγο: ο πολίτης να εξυπηρετείται επειδή είναι πολίτης, και η θέση να πηγαίνει σε όποιον την αξίζει — όχι σε όποιον έχει «άκρη». Κάθε υπόθεση εδώ είναι ελεγμένη σε πηγές και φέρει τον ισχυρότερο αντίλογό της.',
    en: 'The public service was not invented to repay party debts. It was invented for one reason: that the citizen be served because they are a citizen, and that a post go to whoever deserves it — not to whoever has a “connection.” Every case here is checked against sources and carries its strongest counter-argument.',
  },
  // Thucydides II, 37.1 — Pericles’ Funeral Oration.
  quoteGreek: 'κατὰ δὲ τὴν ἀξίωσιν, ὡς ἕκαστος ἔν τῳ εὐδοκιμεῖ, οὐκ ἀπὸ μέρους τὸ πλέον ἐς τὰ κοινὰ ἢ ἀπ’ ἀρετῆς προτιμᾶται.',
  quoteRender: {
    el: 'Στα δημόσια αξιώματα, καθένας προτιμάται ανάλογα με το πού διακρίνεται — όχι επειδή ανήκει σε μια μερίδα, αλλά για την αξία του.',
    en: 'In public office, each is preferred according to where they excel — not because they belong to a faction, but for their merit.',
  },
  quoteCite: { el: 'Θουκυδίδης Β, 37.1 — ο Επιτάφιος του Περικλή', en: 'Thucydides II, 37.1 — Pericles’ Funeral Oration' },
  principles: [
    {
      title: { el: 'Ο μόνος λόγος', en: 'The only reason' },
      body: {
        el: 'Κάθε θέση στο Δημόσιο πληρώνεται από όλους και υπάρχει για όλους. Όταν μοιράζεται ως αντάλλαγμα για ψήφο, ο πολίτης πληρώνει δύο φορές: μια ως φορολογούμενος που μισθοδοτεί τον «δικό τους», και μια ως εξυπηρετούμενος που περιμένει στην ουρά ενός υπαλλήλου που δεν επιλέχθηκε για να τον εξυπηρετήσει.',
        en: 'Every public post is paid for by all and exists for all. When it is handed out in exchange for a vote, the citizen pays twice: once as a taxpayer funding “one of theirs,” and once as the person waiting in the queue of an official who was not chosen to serve them.',
      },
    },
    {
      title: { el: 'Η ΤΝ κοιτάζει προς τα πάνω', en: 'The AI looks up, not down' },
      body: {
        el: 'Ο κίνδυνος είναι ένας αλγόριθμος που «αξιολογεί» υπαλλήλους για να κόψει τους αδύναμους. Εδώ η ΤΝ κοιτάζει όσους διορίζουν: ποιες προσλήψεις παρακάμπτουν τον διαγωνισμό, ποιοι μισθοδοτούνται χωρίς να εργάζονται, ποιες αποφάσεις ακολουθούν δωρεές ή ψήφους. Προτείνει· επώνυμοι άνθρωποι αποφασίζουν.',
        en: 'The danger is an algorithm that “evaluates” civil servants to cut the weak. Here the AI looks at those who appoint: which hires bypass the exam, who is paid without working, which decisions follow donations or votes. It proposes; named humans decide.',
      },
    },
    {
      title: { el: 'Ο Περικλής και ο Αριστείδης το ήξεραν ήδη', en: 'Pericles and Aristides already knew' },
      body: {
        el: 'Ο Περικλής καύχιόταν ότι στην Αθήνα τα αξιώματα δίνονται για την αξία και όχι για τη μερίδα· ο Αριστείδης, που ονομάστηκε «ο Δίκαιος», μοίρασε τις εισφορές των συμμάχων τόσο τίμια που πέθανε φτωχός. Η ΤΝ δεν επινοεί την αξιοκρατία· την κάνει μετρήσιμη.',
        en: 'Pericles boasted that in Athens offices go by merit, not by faction; Aristides, called “the Just,” assessed the allies’ contributions so honestly that he died poor. The AI does not invent merit; it makes merit measurable.',
      },
    },
  ],
  safeguardsLede: {
    el: 'Δέκα προτάσεις, μία για κάθε τρόπο με τον οποίο η δημόσια θέση γίνεται χάρη. Καμία δεν κυνηγά τον απλό υπάλληλο. Όλες βλέπουν όσους διορίζουν και όσους πληρώνουν για επιρροή. Υιοθέτησε όσες θέλεις — γίνονται ο δικός σου Χάρτης.',
    en: 'Ten proposals, one for each way a public post becomes a favour. None hunts the ordinary civil servant. All of them watch those who appoint and those who pay for influence. Adopt the ones you want — they become your own Charter.',
  },
  myCaseLede: {
    el: 'Αν έζησες κάτι από αυτά — θέση που «κλείστηκε» πριν από τον διαγωνισμό, υπηρεσία που προχώρησε μόνο με «μέσο», υπάλληλο που πληρώνεται χωρίς να εμφανίζεται — σημείωσε ό,τι αναγνωρίζεις. Δεν ζητάμε ονόματα. Τίποτα δεν φεύγει από τη συσκευή σου.',
    en: 'If you lived through any of this — a post “settled” before the exam, a service that moved only with a “connection,” an employee paid without ever showing up — mark what you recognise. We ask for no names. Nothing leaves your device.',
  },
  visionPlaceholder: {
    el: 'π.χ. Καμία πρόσληψη στο Δημόσιο χωρίς ανοιχτό διαγωνισμό και δημόσια βαθμολογία.',
    en: 'e.g. No public hire without an open competition and a public score.',
  },
  charterHeading: { el: 'ΧΑΡΤΗΣ ΑΡΙΣΤΕΙΔΗ', en: 'ARISTIDES CHARTER' },
}
