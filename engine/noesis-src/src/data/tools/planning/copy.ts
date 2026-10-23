// ΙΠΠΟΔΑΜΟΣ — the words that make the planning & permits tool its own.

import type { ToolCopy } from '../types'

export const PLANNING_COPY: ToolCopy = {
  eyebrow: { el: 'ΙΠΠΟΔΑΜΟΣ · ΓΙΑΤΙ ΥΠΑΡΧΕΙ Η ΠΟΛΕΟΔΟΜΙΑ', en: 'HIPPODAMUS · WHY PLANNING EXISTS' },
  title: {
    el: 'Δέκα υποθέσεις όπου μια άδεια, μια υπογραφή ή μια «τακτοποίηση» στοίχισε ζωές, δάση και πόλεις — και πώς μια ΤΝ, ως μάρτυρας, θα το είχε δει.',
    en: 'Ten cases where a permit, a signature or an “amnesty” cost lives, forests and cities — and how an AI, as witness, would have seen it.',
  },
  subtitle: {
    el: 'Η πολεοδομία δεν επινοήθηκε για να πουλά εξαιρέσεις. Επινοήθηκε για έναν λόγο: ό,τι χτίζεται να στέκει, να μην πνίγει τον γείτονα και να μην τρώει τη γη που ανήκει σε όλους. Κάθε υπόθεση εδώ είναι ελεγμένη σε πηγές και φέρει τον ισχυρότερο αντίλογό της.',
    en: 'Planning was not invented to sell exceptions. It was invented for one reason: that what is built stands, does not smother the neighbour, and does not devour land that belongs to all. Every case here is checked against sources and carries its strongest counter-argument.',
  },
  // Plato, Laws VIII, 842e — the first law of Zeus of Boundaries.
  quoteGreek: 'μὴ κινείτω γῆς ὅρια μηδεὶς μήτε οἰκείου πολίτου γείτονος.',
  quoteRender: {
    el: 'Κανείς να μη μετακινεί τα όρια της γης — ούτε του γείτονα συμπολίτη του.',
    en: 'Let no one move the boundaries of the land — not even those of a fellow citizen and neighbour.',
  },
  quoteCite: { el: 'Πλάτων, Νόμοι Η, 842e', en: 'Plato, Laws VIII, 842e' },
  principles: [
    {
      title: { el: 'Ο μόνος λόγος', en: 'The only reason' },
      body: {
        el: 'Η άδεια δόμησης είναι μια υπόσχεση προς όσους θα ζήσουν μέσα και δίπλα στο κτίριο: ότι κάποιος έλεγξε πως θα αντέξει, πως δεν κλείνει τον δρόμο διαφυγής, πως δεν χτίστηκε σε δάσος ή σε ρέμα. Όταν η υπογραφή πουλιέται, η υπόσχεση γίνεται χαρτί — και ο σεισμός, η φωτιά ή η πλημμύρα τη διαβάζουν πρώτοι.',
        en: 'A building permit is a promise to those who will live in and beside the building: that someone checked it will stand, that it does not block an escape route, that it was not built in a forest or a stream. When the signature is sold, the promise becomes paper — and the earthquake, the fire or the flood read it first.',
      },
    },
    {
      title: { el: 'Η ΤΝ κοιτάζει προς τα πάνω', en: 'The AI looks up, not down' },
      body: {
        el: 'Ο κίνδυνος είναι ένας δορυφόρος που κυνηγά τη γιαγιά για μια πέργκολα. Εδώ η ΤΝ ελέγχει τις υπογραφές: ποιος υπάλληλος εγκρίνει τι, ποιοι κατασκευαστές παίρνουν τις «δύσκολες» άδειες, ποιες μεγάλες αυθαιρεσίες νομιμοποιούνται. Προτείνει· επώνυμοι άνθρωποι αποφασίζουν.',
        en: 'The danger is a satellite hunting a grandmother over a pergola. Here the AI audits the signatures: which official approves what, which developers get the “difficult” permits, which large illegal works get legalised. It proposes; named humans decide.',
      },
    },
    {
      title: { el: 'Ο Ιππόδαμος και ο Πλάτων το ήξεραν ήδη', en: 'Hippodamus and Plato already knew' },
      body: {
        el: 'Ο Ιππόδαμος ο Μιλήσιος σχεδίασε τον Πειραιά με ορθογώνιο κάνναβο, ώστε η πόλη να είναι κοινή, μετρήσιμη και ίδια για όλους· ο Πλάτων έκανε πρώτο νόμο του «Ορίου Διός» να μη μετακινεί κανείς τα όρια της γης. Η ΤΝ δεν επινοεί τον κάνναβο· τον φυλάει.',
        en: 'Hippodamus of Miletus laid out Piraeus on a grid so the city would be common, measurable and the same for all; Plato made it the first law of Zeus of Boundaries that no one move the limits of the land. The AI does not invent the grid; it guards it.',
      },
    },
  ],
  safeguardsLede: {
    el: 'Δέκα προτάσεις, μία για κάθε τρόπο με τον οποίο η άδεια γίνεται εμπόρευμα. Καμία δεν κυνηγά τον ιδιοκτήτη μιας μικρής παρανομίας. Όλες βλέπουν όσους υπογράφουν και όσους χτίζουν μεγάλα. Υιοθέτησε όσες θέλεις — γίνονται ο δικός σου Χάρτης.',
    en: 'Ten proposals, one for each way a permit becomes merchandise. None hunts the owner of a small irregularity. All of them watch those who sign and those who build big. Adopt the ones you want — they become your own Charter.',
  },
  myCaseLede: {
    el: 'Αν έζησες κάτι από αυτά — υπάλληλο που ζήτησε «κάτι» για μια άδεια, γειτονικό κτίριο που υψώθηκε παράνομα, φάκελο που «κόλλησε» μέχρι να πληρώσεις — σημείωσε ό,τι αναγνωρίζεις. Δεν ζητάμε ονόματα ούτε διευθύνσεις. Τίποτα δεν φεύγει από τη συσκευή σου.',
    en: 'If you lived through any of this — an official who asked for “something” for a permit, a neighbouring building that rose illegally, a file that “stuck” until you paid — mark what you recognise. We ask for no names and no addresses. Nothing leaves your device.',
  },
  visionPlaceholder: {
    el: 'π.χ. Κάθε άδεια δόμησης να φαίνεται στον χάρτη μαζί με το όνομα όποιου την υπέγραψε.',
    en: 'e.g. Every building permit visible on the map, with the name of whoever signed it.',
  },
  charterHeading: { el: 'ΧΑΡΤΗΣ ΙΠΠΟΔΑΜΟΥ', en: 'HIPPODAMUS CHARTER' },
}
