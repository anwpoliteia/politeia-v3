// ΑΙΓΙΣ — the words that make the civil-protection tool its own.

import type { ToolCopy } from '../types'

export const CIVIL_PROTECTION_COPY: ToolCopy = {
  eyebrow: { el: 'ΑΙΓΙΣ · ΓΙΑΤΙ ΥΠΑΡΧΕΙ Η ΠΟΛΙΤΙΚΗ ΠΡΟΣΤΑΣΙΑ', en: 'AEGIS · WHY CIVIL PROTECTION EXISTS' },
  title: {
    el: 'Δέκα καταστροφές όπου η προειδοποίηση, τα χρήματα της πρόληψης ή το σχέδιο εκκένωσης δεν έφτασαν ποτέ — και πώς μια ΤΝ, ως μάρτυρας, θα το είχε δει.',
    en: 'Ten disasters where the warning, the prevention money or the evacuation plan never arrived — and how an AI, as witness, would have seen it.',
  },
  subtitle: {
    el: 'Η πολιτική προστασία δεν επινοήθηκε για να εξηγεί μετά τι πήγε στραβά. Επινοήθηκε για έναν λόγο: όταν έρχεται η φωτιά ή το νερό, ο πολίτης να ξέρει εγκαίρως πού να πάει — και κάποιος να έχει ήδη κάνει ό,τι μπορούσε για να μην έρθει. Κάθε υπόθεση εδώ είναι ελεγμένη σε πηγές και φέρει τον ισχυρότερο αντίλογό της.',
    en: 'Civil protection was not invented to explain afterwards what went wrong. It was invented for one reason: that when fire or water comes, the citizen knows in time where to go — and someone has already done what they could to keep it away. Every case here is checked against sources and carries its strongest counter-argument.',
  },
  // Heraclitus, fragment B43 (Diels–Kranz).
  quoteGreek: 'ὕβριν χρὴ σβεννύναι μᾶλλον ἢ πυρκαϊήν.',
  quoteRender: {
    el: 'Την ύβρη πρέπει να τη σβήνεις πιο πρόθυμα από μια πυρκαγιά.',
    en: 'One must put out hubris sooner than a fire.',
  },
  quoteCite: { el: 'Ἡράκλειτος, απόσπ. B43', en: 'Heraclitus, fragment B43' },
  principles: [
    {
      title: { el: 'Ο μόνος λόγος', en: 'The only reason' },
      body: {
        el: 'Κανείς δεν σταματά έναν ανεμοστρόβιλο ή μια ξηρασία. Μπορεί όμως να στείλει το μήνυμα στην ώρα του, να καθαρίσει το ρέμα, να ανοίξει τον δρόμο διαφυγής, να ξοδέψει τα χρήματα της πρόληψης σε πρόληψη. Όταν οι νεκροί μετρώνται και η ευθύνη όχι, η καταστροφή δεν ήταν μόνο φυσική.',
        en: 'No one stops a storm or a drought. But someone can send the alert in time, clear the stream bed, open the escape road, spend the prevention money on prevention. When the dead are counted and the responsibility is not, the disaster was not only natural.',
      },
    },
    {
      title: { el: 'Η ΤΝ κοιτάζει προς τα πάνω', en: 'The AI looks up, not down' },
      body: {
        el: 'Ο κίνδυνος είναι να φορτωθεί η ευθύνη στον πυροσβέστη της πρώτης γραμμής ή στον άνθρωπο που έβαλε τη φωτιά κατά λάθος. Εδώ η ΤΝ κοιτάζει όσους αποφάσιζαν: πότε ήρθε η προειδοποίηση, ποιος την είδε, πού πήγαν τα κονδύλια, γιατί δεν στάλθηκε το μήνυμα. Προτείνει· επώνυμοι άνθρωποι αποφασίζουν.',
        en: 'The danger is loading the blame onto the front-line firefighter or the person who started a fire by accident. Here the AI looks at those who decided: when the warning came, who saw it, where the funds went, why the alert was not sent. It proposes; named humans decide.',
      },
    },
    {
      title: { el: 'Ο Ηράκλειτος το ήξερε ήδη', en: 'Heraclitus already knew' },
      body: {
        el: 'Ο Ηράκλειτος έγραψε ότι την ύβρη πρέπει να τη σβήνεις πιο πρόθυμα από μια πυρκαγιά. Πίσω από κάθε καταστροφή αυτού του εργαλείου υπάρχει και μια φωτιά ή ένα νερό — και μια ύβρη: η βεβαιότητα ότι «δεν θα συμβεί σε μας», ότι η πρόληψη μπορεί να περιμένει, ότι κανείς δεν θα ζητήσει λόγο.',
        en: 'Heraclitus wrote that hubris must be put out sooner than a fire. Behind each disaster in this tool there is a fire or a flood — and a hubris: the certainty that “it will not happen to us,” that prevention can wait, that no one will ask for an account.',
      },
    },
  ],
  safeguardsLede: {
    el: 'Δέκα προτάσεις, μία για κάθε τρόπο με τον οποίο η προστασία αποτυγχάνει πριν από την καταστροφή. Καμία δεν ρίχνει την ευθύνη στον άνθρωπο της πρώτης γραμμής. Όλες βλέπουν όσους αποφασίζουν. Υιοθέτησε όσες θέλεις — γίνονται ο δικός σου Χάρτης.',
    en: 'Ten proposals, one for each way protection fails before the disaster. None pins the blame on the front line. All of them watch those who decide. Adopt the ones you want — they become your own Charter.',
  },
  myCaseLede: {
    el: 'Αν έζησες κάτι από αυτά — μήνυμα 112 που ήρθε αργά ή καθόλου, ρέμα που δεν καθαρίστηκε ποτέ, δρόμος διαφυγής κλειστός — σημείωσε ό,τι αναγνωρίζεις. Δεν ζητάμε ονόματα. Τίποτα δεν φεύγει από τη συσκευή σου.',
    en: 'If you lived through any of this — a 112 alert that came late or never, a stream never cleared, an escape road that was blocked — mark what you recognise. We ask for no names. Nothing leaves your device.',
  },
  visionPlaceholder: {
    el: 'π.χ. Κάθε ευρώ πρόληψης να φαίνεται στον χάρτη: πού έπρεπε να πάει και πού πήγε.',
    en: 'e.g. Every euro of prevention shown on the map: where it should have gone and where it went.',
  },
  charterHeading: { el: 'ΧΑΡΤΗΣ ΑΙΓΙΔΑΣ', en: 'AEGIS CHARTER' },
}
