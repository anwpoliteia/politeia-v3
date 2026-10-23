// ΑΓΟΡΑΝΟΜΟΣ — the words that make the cost-of-living tool its own.

import type { ToolCopy } from '../types'

export const COST_OF_LIVING_COPY: ToolCopy = {
  eyebrow: { el: 'ΑΓΟΡΑΝΟΜΟΣ · ΓΙΑΤΙ ΥΠΑΡΧΕΙ Η ΕΠΟΠΤΕΙΑ ΤΗΣ ΑΓΟΡΑΣ', en: 'AGORANOMOS · WHY MARKETS ARE OVERSEEN' },
  title: {
    el: 'Δέκα υποθέσεις όπου το γάλα, το ψωμί, η ενέργεια και το ενοίκιο ακρίβυναν επειδή κάποιοι συμφώνησαν στο σκοτάδι — και πώς μια ΤΝ, ως μάρτυρας, θα το είχε δει.',
    en: 'Ten cases where milk, bread, energy and rent grew dearer because some agreed in the dark — and how an AI, as witness, would have seen it.',
  },
  subtitle: {
    el: 'Η εποπτεία της αγοράς δεν επινοήθηκε για να προστατεύει όσους πουλάνε. Επινοήθηκε για έναν λόγο: η τιμή του ψωμιού να βγαίνει από τον ανταγωνισμό και όχι από μια συμφωνία πίσω από κλειστές πόρτες. Κάθε υπόθεση εδώ είναι ελεγμένη σε πηγές και φέρει τον ισχυρότερο αντίλογό της.',
    en: 'Market oversight was not invented to protect sellers. It was invented for one reason: that the price of bread come from competition, not from a deal behind closed doors. Every case here is checked against sources and carries its strongest counter-argument.',
  },
  // Constitution of the Athenians 51.3 — the duty of the grain wardens.
  quoteGreek: 'ὅπως ὁ ἐν ἀγορᾷ σῖτος ἀργὸς ὤνιος ἔσται δικαίως.',
  quoteRender: {
    el: 'Να φροντίζουν ώστε το σιτάρι στην αγορά να πωλείται σε δίκαιη τιμή.',
    en: 'To see that the grain in the market is for sale at a fair price.',
  },
  quoteCite: { el: 'Αθηναίων Πολιτεία 51.3 — τα καθήκοντα των σιτοφυλάκων', en: 'Constitution of the Athenians 51.3 — the grain wardens’ duty' },
  principles: [
    {
      title: { el: 'Ο μόνος λόγος', en: 'The only reason' },
      body: {
        el: 'Η ελεύθερη αγορά υπόσχεται ότι ο ανταγωνισμός κρατά τις τιμές τίμιες. Όταν οι μεγάλοι παραγωγοί συμφωνούν μεταξύ τους, όταν ένας μεσάζων κερδίζει από ένα σύστημα τιμών που δεν βλέπει κανείς, ή όταν η κρίση γίνεται ευκαιρία, η υπόσχεση σπάει — και ο φόρος πληρώνεται στο ταμείο του σούπερ μάρκετ, χωρίς να τον ψηφίσει κανείς.',
        en: 'A free market promises that competition keeps prices honest. When the big producers agree among themselves, when a middleman profits from a pricing system no one can see, or when a crisis becomes an opportunity, the promise breaks — and a tax is paid at the supermarket till that no one ever voted for.',
      },
    },
    {
      title: { el: 'Η ΤΝ κοιτάζει προς τα πάνω', en: 'The AI looks up, not down' },
      body: {
        el: 'Ο κίνδυνος είναι ένας έλεγχος που κυνηγά τον μανάβη της γειτονιάς για πέντε λεπτά. Εδώ η ΤΝ κοιτάζει τους μεγάλους: τα περιθώρια κέρδους στην αλυσίδα, τις ταυτόχρονες αυξήσεις, τις εκπτώσεις που δεν είναι εκπτώσεις, την αγορά ενέργειας. Προτείνει· επώνυμοι άνθρωποι αποφασίζουν.',
        en: 'The danger is an inspection that hunts the corner grocer over five cents. Here the AI looks at the big players: margins along the chain, simultaneous price rises, discounts that are not discounts, the energy market. It proposes; named humans decide.',
      },
    },
    {
      title: { el: 'Η Αθήνα το ήξερε ήδη', en: 'Athens already knew' },
      body: {
        el: 'Η Αθήνα είχε αγορανόμους για την ποιότητα, μετρονόμους για τα ζύγια και σιτοφύλακες για τη δίκαιη τιμή του ψωμιού (Αθηναίων Πολιτεία 51). Ο πρώτος θεσμός κάθε πόλης ήταν να μην πεινάσει κανείς επειδή κάποιος έκλεισε συμφωνία.',
        en: 'Athens had market wardens for quality, measure wardens for the scales and grain wardens for a fair bread price (Constitution of the Athenians 51). A city’s first institution was to make sure no one went hungry because someone struck a deal.',
      },
    },
  ],
  safeguardsLede: {
    el: 'Δέκα προτάσεις, μία για κάθε τρόπο με τον οποίο η τιμή παύει να είναι τίμια. Καμία δεν κυνηγά τον μικρό έμπορο. Όλες βλέπουν τους μεγάλους της αλυσίδας. Υιοθέτησε όσες θέλεις — γίνονται ο δικός σου Χάρτης.',
    en: 'Ten proposals, one for each way a price stops being honest. None hunts the small trader. All of them watch the big players in the chain. Adopt the ones you want — they become your own Charter.',
  },
  myCaseLede: {
    el: 'Αν έζησες κάτι από αυτά — ίδια αύξηση ταυτόχρονα σε όλα τα καταστήματα, «έκπτωση» αμέσως μετά από μια απότομη αύξηση, λογαριασμός ρεύματος που δεν εξηγείται — σημείωσε ό,τι αναγνωρίζεις. Δεν ζητάμε ονόματα. Τίποτα δεν φεύγει από τη συσκευή σου.',
    en: 'If you lived through any of this — the same rise at the same time in every shop, a “discount” right after a sudden rise, an electricity bill no one can explain — mark what you recognise. We ask for no names. Nothing leaves your device.',
  },
  visionPlaceholder: {
    el: 'π.χ. Κάθε αύξηση τιμής στα βασικά να φαίνεται μαζί με το πού πήγε — στον παραγωγό ή στον μεσάζοντα.',
    en: 'e.g. Every price rise on staples shown with where it went — to the producer or the middleman.',
  },
  charterHeading: { el: 'ΧΑΡΤΗΣ ΑΓΟΡΑΝΟΜΟΥ', en: 'AGORANOMOS CHARTER' },
}
