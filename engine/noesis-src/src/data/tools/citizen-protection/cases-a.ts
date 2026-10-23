// ΑΡΓΟΣ — cases 1–5 (Greece). Every fact is sourced and was checked on
// 2026-09-29/30. Officers are named by role only; acquittals and the
// presumption of innocence are stated plainly.

import type { ToolCase } from '../types'

export const CASES_A: readonly ToolCase[] = [
  {
    id: 'predator-2022',
    when: '2020–2026',
    place: { el: 'Αθήνα, Ελλάδα', en: 'Athens, Greece' },
    title: {
      el: 'Η ΕΥΠ παρακολουθούσε νόμιμα έναν αρχηγό κόμματος και δημοσιογράφους — ενώ κατασκοπευτικό λογισμικό στόχευε τα ίδια κινητά. Κανένας αξιωματούχος δεν κατηγορήθηκε',
      en: 'The intelligence service lawfully tapped a party leader and journalists — while spyware targeted the same phones. No official was ever charged',
    },
    harmed: { el: 'Ο δημοσιογράφος Θανάσης Κουκάκης, ο Νίκος Ανδρουλάκης και δεκάδες ακόμη πολίτες', en: 'Journalist Thanasis Koukakis, Nikos Androulakis and dozens of other citizens' },
    plain: {
      el: 'Η ΕΥΠ παρακολουθούσε δημοσιογράφο και τον αρχηγό ενός κόμματος, ενώ το λογισμικό Predator επιχειρούσε να μολύνει τα κινητά τους· δικάστηκαν μόνο ιδιώτες πωλητές, και η εισαγγελία έκρινε ότι καμία κρατική υπηρεσία δεν χρησιμοποίησε το Predator.',
      en: 'The intelligence service monitored a journalist and a party leader while Predator spyware tried to infect their phones; only private sellers were tried, and prosecutors found no state agency used Predator.',
    },
    facts: [
      {
        el: '2020–2021: η ΕΥΠ παρακολουθεί τις επικοινωνίες του δημοσιογράφου Θανάση Κουκάκη· το 2021 το κινητό του μολύνεται με Predator για πάνω από δύο μήνες.',
        en: '2020–2021: the intelligence service monitors journalist Thanasis Koukakis’s communications; in 2021 his phone is infected with Predator for over two months.',
      },
      {
        el: 'Ιούνιος 2022: έλεγχος του Ευρωπαϊκού Κοινοβουλίου βρίσκει στο κινητό του Νίκου Ανδρουλάκη ύποπτο σύνδεσμο του Predator. Στις 5 Αυγούστου παραιτούνται ο διοικητής της ΕΥΠ και ο γενικός γραμματέας του πρωθυπουργού.',
        en: 'June 2022: a European Parliament check finds a suspicious Predator link on Nikos Androulakis’s phone. On 5 August the intelligence chief and the prime minister’s secretary-general resign.',
      },
      {
        el: 'Η Αρχή Προστασίας Δεδομένων καταγράφει τουλάχιστον 225 απόπειρες εγκατάστασης λογισμικού σε περίπου 87 άτομα.',
        en: 'The Data Protection Authority documents at least 225 attempted spyware installations targeting about 87 people.',
      },
      {
        el: 'Ιούλιος 2024: ο αντεισαγγελέας του Αρείου Πάγου κρίνει ότι η ΕΥΠ δεν φέρει ευθύνη για το Predator και παραπέμπει τέσσερα πρόσωπα εταιρειών σε δίκη για πλημμελήματα.',
        en: 'July 2024: a Supreme Court deputy prosecutor finds the intelligence service bears no responsibility for Predator and sends four company figures to trial for misdemeanours.',
      },
      {
        el: 'Φεβρουάριος 2026: το δικαστήριο καταδικάζει πρωτόδικα τα τέσσερα στελέχη, με ποινές σε αναστολή έως την έφεση, και ζητά να εξεταστούν κακουργήματα όπως κατασκοπεία. Απρίλιος 2026: ο εισαγγελέας του Αρείου Πάγου αρνείται να ανοίξει ξανά την έρευνα· τον Αύγουστο ο δημοσιογράφος προσφεύγει στο Ευρωπαϊκό Δικαστήριο Δικαιωμάτων του Ανθρώπου.',
        en: 'February 2026: the court convicts the four at first instance, with sentences suspended pending appeal, and asks that felonies such as espionage be examined. April 2026: the Supreme Court prosecutor declines to reopen the investigation; in August the journalist applies to the European Court of Human Rights.',
      },
    ],
    outcome: {
      el: 'Πρωτόδικες καταδίκες τεσσάρων ιδιωτών για πλημμελήματα· κανένας κρατικός αξιωματούχος δεν κατηγορήθηκε, και η έρευνα για κακουργήματα δεν ανοίχτηκε ξανά.',
      en: 'First-instance misdemeanour convictions of four private individuals; no state official was charged, and the felony inquiry was not reopened.',
    },
    breach: {
      el: 'Η μυστική υπηρεσία υπάρχει για να προστατεύει τη χώρα από εξωτερικές απειλές — όχι για να ξέρει τι λένε οι δημοσιογράφοι και η αντιπολίτευση. Όταν οι νόμιμοι και οι παράνομοι «ακροατές» στοχεύουν τους ίδιους ανθρώπους και κανείς δεν εξηγεί γιατί, ο πολίτης δεν μπορεί πια να ξέρει ποιος ακούει — και σωπαίνει.',
      en: 'An intelligence service exists to protect the country from external threats — not to know what journalists and the opposition are saying. When the lawful and the unlawful “listeners” target the same people and no one explains why, the citizen can no longer know who is listening — and falls silent.',
    },
    patterns: ['spyware', 'surveillance', 'archived'],
    safeguards: ['spyware-trace', 'warrant-ledger', 'reasons'],
    counterfactual: {
      el: 'Ο Ιχνηλάτης θα είχε σημάνει αυτόματα τη σύμπτωση: οι ίδιοι αριθμοί στο μητρώο νόμιμων παρακολουθήσεων και στις μολύνσεις Predator — και θα την είχε στείλει σε ανεξάρτητο ανακριτή. Το Μητρώο Άρσεων Απορρήτου θα έδειχνε στην ΑΔΑΕ κάθε παρακολούθηση δημοσιογράφου ή πολιτικού την ώρα που γινόταν. Και η Αιτιολόγηση και Εξαίρεση θα έλεγχε αν όποιος αρχειοθετεί είχε υπογράψει ο ίδιος παρακολούθηση στην υπόθεση.',
      en: 'The Tracer would have flagged the overlap automatically: the same numbers in the lawful-surveillance register and in Predator infections — and sent it to an independent judge. The Order Register would have shown ADAE every tap on a journalist or politician as it happened. And Reasons and Recusal would have checked whether whoever archived had personally signed a surveillance order in the case.',
    },
    antilogos: {
      el: 'Η δικαστική έρευνα κατέληξε ότι καμία κρατική υπηρεσία δεν χρησιμοποίησε το Predator, και οι παρακολουθήσεις της ΕΥΠ ήταν τυπικά νόμιμες· η παραίτηση του διοικητή αφορούσε διαδικαστικά λάθη. Η άρνηση επανεξέτασης ήταν νομική κρίση ότι δεν υπήρχαν νέα στοιχεία.',
      en: 'The judicial inquiry concluded no state agency used Predator, and the intelligence service’s taps were formally lawful; the chief’s resignation concerned procedural mistakes. Declining to reopen was a legal finding that there was no new evidence.',
    },
    reply: {
      el: 'Αυτά είναι τα επίσημα πορίσματα — και ακριβώς γι’ αυτό η σύμπτωση πρέπει να εξηγηθεί δημόσια, όχι να παραμένει ερώτημα. Αν η ΕΥΠ δεν είχε καμία σχέση, ένα ανεξάρτητο πόρισμα για το γιατί οι ίδιοι άνθρωποι στοχεύτηκαν από δύο πλευρές θα την καθάριζε. Η εμπιστοσύνη δεν χτίζεται με το «δεν βρέθηκε τίποτα»· χτίζεται με το «κοιτάξτε, εδώ είναι όλα».',
      en: 'Those are the official findings — which is exactly why the overlap must be explained publicly, not left as a question. If the service had nothing to do with it, an independent finding on why the same people were targeted from two sides would clear it. Trust is not built on “nothing was found”; it is built on “look, here is everything.”',
    },
    lever: {
      el: 'Ζήτησε από τη Βουλή κάθε παρακολούθηση δημοσιογράφου ή πολιτικού να ελέγχεται αυτόματα από την ΑΔΑΕ, και ο στόχος να ενημερώνεται όταν λήξει ο λόγος μυστικότητας.',
      en: 'Ask parliament that every surveillance of a journalist or politician be checked automatically by ADAE, and the target informed once the reason for secrecy ends.',
    },
    scores: { harm: 7, power: 10, recurrence: 7, remedy: 7 },
    status: {
      el: 'Πρωτόδικες καταδίκες τεσσάρων ιδιωτών, υπό έφεση — τεκμαίρονται αθώοι μέχρι αμετάκλητης απόφασης. Εκκρεμεί προσφυγή στο ΕΔΔΑ.',
      en: 'First-instance convictions of four private individuals, under appeal — presumed innocent until final judgment. An ECHR application is pending.',
    },
    sources: [
      { title: 'Amnesty International — Convictions in “Predatorgate” scandal (2026)', url: 'https://www.amnesty.org/en/latest/news/2026/02/greece-spyware-scandal/' },
      { title: 'OCCRP — Greek court hands down maximum sentences in Predator case (2026)', url: 'https://www.occrp.org/en/news/greek-court-hands-down-maximum-sentences-in-predator-spyware-case-orders-more-prosecutions' },
      { title: 'Al Jazeera — Greece intelligence boss quits amid surveillance scandal (2022)', url: 'https://www.aljazeera.com/news/2022/8/5/greece-intelligence-boss-quits-amid-phone-surveillance-scandal' },
      { title: 'EFJ — Journalist Thanasis Koukakis moves his case to the ECHR (2026)', url: 'https://europeanjournalists.org/blog/2026/08/31/greece-journalist-thanasis-koukakis-moves-his-surveillance-case-to-echr/' },
    ],
  },
  {
    id: 'pylos-2023',
    when: '2023–2026',
    place: { el: 'Ανοιχτά της Πύλου, Ελλάδα', en: 'Off Pylos, Greece' },
    title: {
      el: 'Εκατοντάδες πνίγηκαν ενώ το Λιμενικό παρακολουθούσε — και το Λιμενικό αρνήθηκε να ερευνήσει τον εαυτό του',
      en: 'Hundreds drowned while the coast guard watched — and the coast guard refused to investigate itself',
    },
    harmed: { el: 'Περίπου 750 επιβαίνοντες του «Adriana» — 104 διασώθηκαν, εκατοντάδες νεκροί και αγνοούμενοι', en: 'About 750 people aboard the “Adriana” — 104 survived, hundreds dead or missing' },
    plain: {
      el: 'Ένα υπερφορτωμένο αλιευτικό βυθίστηκε δεκαπέντε ώρες μετά την πρώτη ειδοποίηση· πρώτα διώχθηκαν επιζώντες ως διακινητές, και μόνο δύο χρόνια μετά κατηγορήθηκαν στελέχη του Λιμενικού.',
      en: 'An overloaded fishing boat sank fifteen hours after the first alert; survivors were prosecuted first as smugglers, and only two years later were coast guard officers charged.',
    },
    facts: [
      {
        el: '13 Ιουνίου 2023, 11:00: η ιταλική ακτοφυλακή ειδοποιεί τις ελληνικές αρχές για το υπερφορτωμένο σκάφος. Βυθίζεται περίπου δεκαπέντε ώρες αργότερα, με περίπου 750 ανθρώπους· διασώζονται 104 και ανασύρονται 82 σοροί.',
        en: '13 June 2023, 11:00: the Italian coast guard alerts Greek authorities about the overloaded boat. It sinks about fifteen hours later with some 750 people aboard; 104 are rescued and 82 bodies recovered.',
      },
      {
        el: 'Εννέα Αιγύπτιοι επιζώντες κατηγορούνται ότι προκάλεσαν το ναυάγιο και κρατούνται 11 μήνες· τον Μάιο 2024 το δικαστήριο της Καλαμάτας απορρίπτει την υπόθεση λόγω έλλειψης δικαιοδοσίας.',
        en: 'Nine Egyptian survivors are charged with causing the shipwreck and held for 11 months; in May 2024 the Kalamata court dismisses the case for lack of jurisdiction.',
      },
      {
        el: 'Φεβρουάριος 2025: ο Συνήγορος του Πολίτη αναφέρει ενδείξεις ότι στελέχη του Λιμενικού εξέθεσαν εν γνώσει τους τους επιβαίνοντες σε κίνδυνο ζωής, και ότι το Λιμενικό αρνήθηκε το αίτημά του, ήδη από τον Ιούνιο 2023, να ανοίξει πειθαρχική έρευνα. Οι κάμερες του περιπολικού σκάφους φέρονται «εκτός λειτουργίας».',
        en: 'February 2025: the Ombudsman reports evidence that coast guard officers knowingly exposed those aboard to mortal danger, and that the coast guard refused its request, made in June 2023, to open a disciplinary investigation. The patrol boat’s cameras were reportedly “out of order.”',
      },
      {
        el: 'Μάιος 2025: ο εισαγγελέας του Ναυτοδικείου Πειραιά ασκεί κακουργηματική δίωξη σε 17 μέλη του Λιμενικού. Νοέμβριος 2025: μετά από προσφυγή επιζώντων κατά αρχειοθέτησης, διώκονται και τέσσερα ανώτατα στελέχη, ανάμεσά τους ο εν ενεργεία αρχηγός — συνολικά 21.',
        en: 'May 2025: the Piraeus Naval Court prosecutor brings felony charges against 17 coast guard members. November 2025: after survivors appeal an archiving decision, four senior officers including the serving chief are also charged — 21 in all.',
      },
    ],
    outcome: {
      el: 'Οι επιζώντες διώχθηκαν πρώτοι και αφέθηκαν ελεύθεροι· τα στελέχη του Λιμενικού βρίσκονται σε στάδιο ανάκρισης, δύο χρόνια μετά.',
      en: 'The survivors were prosecuted first and then released; the coast guard officers are at the investigation stage, two years on.',
    },
    breach: {
      el: 'Η ακτοφυλακή υπάρχει για να σώζει όποιον κινδυνεύει στη θάλασσα — όποιος κι αν είναι. Όταν το πρώτο που κάνει το κράτος μετά από εκατοντάδες νεκρούς είναι να κατηγορήσει τους επιζώντες, και η υπηρεσία αρνείται να ερευνήσει τον εαυτό της, η προστασία αντιστρέφεται: ο φύλακας προστατεύει τον φύλακα.',
      en: 'A coast guard exists to save whoever is in danger at sea — whoever they are. When the state’s first act after hundreds of deaths is to charge the survivors, and the service refuses to investigate itself, protection is inverted: the guardian protects the guardian.',
    },
    patterns: ['refused-oversight', 'missing-footage', 'victim-blamed'],
    safeguards: ['independent-probe', 'sealed-footage', 'oversight-deadline'],
    counterfactual: {
      el: 'Η Ανεξάρτητη Έρευνα εξ Ορισμού θα είχε αναθέσει τον φάκελο σε ανεξάρτητους ερευνητές την ίδια μέρα, με πρόσβαση σε κάθε τεκμήριο. Η Σφραγισμένη Εικόνα θα απαιτούσε οι κάμερες του σκάφους να έχουν δηλωθεί ελαττωματικές πριν από την επιχείρηση — αλλιώς το κενό θα βάραινε την υπηρεσία. Και η Προθεσμία Συνεργασίας θα είχε κάνει δημόσια την άρνηση του Λιμενικού από τον Ιούνιο 2023.',
      en: 'Independent Investigation by Default would have handed the file to independent investigators the same day, with access to every item of evidence. Sealed Footage would require the boat’s cameras to have been reported faulty before the operation — otherwise the gap would count against the service. And the Cooperation Deadline would have made the coast guard’s refusal public from June 2023.',
    },
    antilogos: {
      el: 'Το Λιμενικό αρνείται ότι χειρίστηκε λάθος τη διάσωση και λέει ότι το σκάφος δεν ζητούσε βοήθεια και κατευθυνόταν προς την Ιταλία. Ο Συνήγορος είναι διοικητική αρχή, όχι δικαστήριο, και η κατηγορία ότι το σκάφος ανατράπηκε κατά τη ρυμούλκηση στηρίζεται σε μαρτυρίες και ανασυνθέσεις που το Λιμενικό αμφισβητεί.',
      en: 'The coast guard denies botching the rescue and says the boat did not want help and was heading for Italy. The Ombudsman is an administrative body, not a court, and the allegation that the boat capsized during towing rests on testimony and reconstructions the coast guard disputes.',
    },
    reply: {
      el: 'Όλα αυτά είναι ερωτήματα για ανεξάρτητους ερευνητές — και γι’ αυτό δεν μπορεί να τα κρίνει η ίδια η υπηρεσία. Αν οι κάμερες δούλευαν και το υλικό ήταν σφραγισμένο, η διαφωνία ανάμεσα στο Λιμενικό και στους επιζώντες θα είχε λυθεί με εικόνα, όχι με δύο χρόνια αντιπαράθεσης. Η απουσία τεκμηρίων δεν αθωώνει· απλώς αφήνει την υποψία ζωντανή.',
      en: 'All of these are questions for independent investigators — which is why the service itself cannot judge them. Had the cameras worked and the footage been sealed, the dispute between the coast guard and the survivors would have been settled by images, not by two years of argument. Missing evidence does not acquit; it only keeps suspicion alive.',
    },
    lever: {
      el: 'Ζήτησε κάθε επιχείρηση διάσωσης να καταγράφεται αυτόματα σε σφραγισμένο αρχείο εκτός Λιμενικού, και κάθε θάνατος στη θάλασσα να ερευνάται από ανεξάρτητη αρχή.',
      en: 'Ask that every rescue operation be recorded automatically in a sealed archive outside the coast guard, and every death at sea investigated by an independent authority.',
    },
    scores: { harm: 10, power: 8, recurrence: 8, remedy: 7 },
    status: {
      el: 'Ανοιχτή. 21 μέλη του Λιμενικού διώκονται, σε στάδιο ανάκρισης· κανείς δεν έχει δικαστεί — όλοι τεκμαίρονται αθώοι.',
      en: 'Open. 21 coast guard members are charged, at the investigation stage; no one has been tried — all are presumed innocent.',
    },
    sources: [
      { title: 'GovWatch — Ombudsman: evidence of crime by coast guard officers (2025)', url: 'https://govwatch.gr/en/finds/synigoros-toy-politi-endeixeis-diapraxis-toy-egklimatos-tis-ekthesis-apo-stelechi-toy-limenikoy/' },
      { title: 'Al Jazeera — Trial over Pylos shipwreck (2024)', url: 'https://www.aljazeera.com/news/2024/5/21/trial-under-way-in-greece-over-pylos-shipwreck-that-killed-more-than-500' },
      { title: 'InfoMigrants — Naval court charges coast guards for Pylos shipwreck (2025)', url: 'https://www.infomigrants.net/en/post/64801/greek-naval-court-charges-coast-guards-for-pylos-shipwreck' },
      { title: 'Legal Centre Lesvos — Charges against the coast guard chief (2025)', url: 'https://legalcentrelesvos.org/2025/11/09/pylos-shipwreck-criminal-prosecution-on-felony-charges-against-the-current-head-of-the-coast-guard-and-senior-members-of-its-leadership/' },
    ],
  },
  {
    id: 'kostopoulos-2018',
    when: '2018–2024',
    place: { el: 'Ομόνοια, Αθήνα', en: 'Omonia, Athens' },
    title: {
      el: 'Αστυνομικοί καταγράφηκαν να ακινητοποιούν βίαια έναν ετοιμοθάνατο άνθρωπο — αθωώθηκαν, και ο τόπος δεν φυλάχτηκε ποτέ',
      en: 'Police officers were filmed violently restraining a dying man — they were acquitted, and the scene was never secured',
    },
    harmed: { el: 'Ζακ Κωστόπουλος, 33 ετών, ακτιβιστής για τα δικαιώματα ΛΟΑΤΚΙ+ και οροθετικών', en: 'Zak Kostopoulos, 33, LGBTQ+ and HIV activist' },
    plain: {
      el: 'Ο Ζακ Κωστόπουλος ξυλοκοπήθηκε από δύο πολίτες όταν εγκλωβίστηκε σε κοσμηματοπωλείο και ακινητοποιήθηκε βίαια από αστυνομικούς ενώ ήταν στο έδαφος· πέθανε. Αρχικά παρουσιάστηκε ως ληστής υπό την επήρεια ουσιών — κάτι που διαψεύστηκε.',
      en: 'Zak Kostopoulos was beaten by two civilians after becoming trapped in a jewellery shop and violently restrained by police while on the ground; he died. He was first portrayed as a drug-affected robber — which was disproved.',
    },
    facts: [
      {
        el: '21 Σεπτεμβρίου 2018: ο Ζακ Κωστόπουλος ξυλοκοπείται από δύο πολίτες όταν εγκλωβίζεται σε κοσμηματοπωλείο στην οδό Γλάδστωνος, ακινητοποιείται βίαια από αστυνομικούς στο έδαφος και πεθαίνει.',
        en: '21 September 2018: Zak Kostopoulos is beaten by two civilians after becoming trapped in a jewellery shop on Gladstonos Street, violently restrained by police on the ground, and dies.',
      },
      {
        el: 'Η αρχική εκδοχή τον παρουσιάζει ως ληστή υπό την επήρεια ουσιών· η τοξικολογική ανάλυση δεν βρίσκει ουσίες, και το βίντεο διαψεύδει τη ληστεία.',
        en: 'The initial account portrays him as a drug-affected robber; toxicology finds no drugs, and video disproves the robbery.',
      },
      {
        el: 'Ανεξάρτητη ερευνητική ομάδα διαπιστώνει ότι η αστυνομία δεν φύλαξε τον τόπο του συμβάντος ούτε εξέτασε σωστά τους μάρτυρες.',
        en: 'An independent investigation group finds police failed to secure the scene or properly interview witnesses.',
      },
      {
        el: 'Μάιος 2022: το Μικτό Ορκωτό Δικαστήριο καταδικάζει τους δύο πολίτες σε 10 χρόνια για θανατηφόρα βλάβη και αθωώνει κατά πλειοψηφία τους τέσσερις αστυνομικούς. Ιούλιος 2024: το Εφετείο επικυρώνει ομόφωνα τις καταδίκες των πολιτών, μειώνοντας τις ποινές σε 5 και 6 χρόνια.',
        en: 'May 2022: the Mixed Jury Court sentences the two civilians to 10 years for fatal bodily harm and acquits the four police officers by majority. July 2024: the Appeals Court unanimously upholds the civilians’ convictions, reducing the sentences to 5 and 6 years.',
      },
    ],
    outcome: {
      el: 'Δύο πολίτες καταδικάστηκαν· οι τέσσερις αστυνομικοί αθωώθηκαν.',
      en: 'Two civilians were convicted; the four police officers were acquitted.',
    },
    breach: {
      el: 'Όταν η αστυνομία φτάνει σε έναν τραυματισμένο άνθρωπο, ο ρόλος της είναι να σταματήσει τη βία — όχι να τη συνεχίσει. Και όταν η πρώτη εκδοχή βάφει το θύμα ένοχο, ο τόπος δεν φυλάσσεται και οι μάρτυρες δεν εξετάζονται, το σύστημα έχει ήδη αποφασίσει ποιον θα προστατέψει — πριν αρχίσει η δίκη.',
      en: 'When police reach an injured person, their role is to stop the violence — not continue it. And when the first account paints the victim as guilty, the scene is not secured and witnesses are not interviewed, the system has already decided whom to protect — before any trial begins.',
    },
    patterns: ['victim-blamed', 'own-investigate', 'cover-up'],
    safeguards: ['first-account', 'independent-probe', 'witness-video'],
    counterfactual: {
      el: 'Η Πρώτη Αφήγηση με Υπογραφή θα είχε καταγράψει ποιος είπε ότι ο Ζακ ήταν ληστής υπό την επήρεια ουσιών — και θα έδειχνε δημόσια πότε το διέψευσαν η τοξικολογική και το βίντεο. Η Ανεξάρτητη Έρευνα θα είχε φυλάξει τον τόπο από την πρώτη ώρα, και το Βίντεο του Πολίτη θα είχε σφραγίσει κάθε καταγραφή περαστικού πριν «χαθεί».',
      en: 'The Signed First Account would have recorded who said Zak was a drug-affected robber — and shown publicly when toxicology and video disproved it. Independent Investigation would have secured the scene from the first hour, and the Citizen’s Video would have sealed every passer-by’s recording before it could “disappear.”',
    },
    antilogos: {
      el: 'Ένα ορκωτό δικαστήριο άκουσε τα στοιχεία και αθώωσε τους αστυνομικούς· το δικαστήριο απέδωσε τη θανατηφόρα βλάβη στους δύο πολίτες. Η πρόταση μοιάζει να θέλει να ξαναδικάσει ανθρώπους που η δικαιοσύνη έκρινε αθώους.',
      en: 'A jury court heard the evidence and acquitted the officers; the court attributed the fatal harm to the two civilians. The proposal seems to want to retry people the courts found innocent.',
    },
    reply: {
      el: 'Όχι: οι αστυνομικοί είναι αθώοι και έτσι πρέπει να αναφέρονται. Η πρόταση δεν αφορά την ετυμηγορία αλλά τα θεμέλιά της — έναν τόπο που δεν φυλάχτηκε, μάρτυρες που δεν εξετάστηκαν, μια πρώτη εκδοχή που διαψεύστηκε. Μια ετυμηγορία είναι τόσο καλή όσο τα τεκμήρια που της δόθηκαν· ο στόχος είναι το επόμενο δικαστήριο να έχει όλα τα τεκμήρια.',
      en: 'No: the officers are acquitted and must be described that way. The proposal is not about the verdict but its foundations — an unsecured scene, uninterviewed witnesses, a first account that was disproved. A verdict is only as good as the evidence it was given; the goal is for the next court to have all of it.',
    },
    lever: {
      el: 'Ζήτησε κάθε θάνατος κατά τη διάρκεια αστυνομικής επέμβασης να ερευνάται από ανεξάρτητη αρχή, με φύλαξη του τόπου από την πρώτη ώρα.',
      en: 'Ask that every death during a police intervention be investigated by an independent authority, with the scene secured from the first hour.',
    },
    scores: { harm: 7, power: 6, recurrence: 8, remedy: 8 },
    status: {
      el: 'Οι καταδίκες των δύο πολιτών επικυρώθηκαν (2024). Οι τέσσερις αστυνομικοί είναι αθώοι.',
      en: 'The two civilians’ convictions were upheld (2024). The four police officers are acquitted.',
    },
    sources: [
      { title: 'The Advocate — Convictions upheld in Zak Kostopoulos case (2024)', url: 'https://www.advocate.com/crime/zak-kostopoulos-murder-convictions-upheld' },
      { title: 'Keep Talking Greece — Two men sentenced to 10 years (2022)', url: 'https://www.keeptalkinggreece.com/2022/05/03/justice4zak-two-men-sentenced-to-10-years-each-for-the-killing-of-zak-kostopoulos/' },
      { title: 'To Vima — Two sentenced for the death of Zak Kostopoulos (2024)', url: 'https://www.tovima.com/society/two-sentenced-for-death-of-greek-lgbtq-activist-zak-kostopoulos/' },
      { title: 'Greek Herald — Court acquits four police officers (2022)', url: 'https://greekherald.com.au/news/greek-court-acquits-four-police-officers-over-death-gay-rights-activist-zak-kostopoulos/' },
    ],
  },
  {
    id: 'fragoulis-2022',
    when: '2022–2025',
    place: { el: 'Θεσσαλονίκη, Ελλάδα', en: 'Thessaloniki, Greece' },
    title: {
      el: 'Αστυνομικός πυροβόλησε στο κεφάλι έναν 16χρονο Ρομά για καύσιμα 20 ευρώ — η κατηγορία ανθρωποκτονίας έγινε ποινή με αναστολή',
      en: 'A police officer shot a 16-year-old Roma boy in the head over €20 of fuel — the homicide charge became a suspended sentence',
    },
    harmed: { el: 'Κώστας Φραγκούλης, 16 ετών', en: 'Kostas Fragoulis, 16' },
    plain: {
      el: 'Σε καταδίωξη επειδή ο έφηβος φέρεται να έφυγε από βενζινάδικο χωρίς να πληρώσει καύσιμα 20 ευρώ, αστυνομικός πυροβόλησε δύο φορές· ο Κώστας πέθανε εννέα μέρες μετά. Ο αστυνομικός καταδικάστηκε για πλημμέλημα, με αναστολή.',
      en: 'In a chase because the teenager allegedly left a petrol station without paying for €20 of fuel, an officer fired twice; Kostas died nine days later. The officer was convicted of a misdemeanour, with a suspended sentence.',
    },
    facts: [
      {
        el: '5 Δεκεμβρίου 2022: σε καταδίωξη με μοτοσικλέτες, αστυνομικός ρίχνει δύο πυροβολισμούς και πλήττει τον 16χρονο στο κεφάλι· η αστυνομία λέει ότι το αγροτικό προσπάθησε να εμβολίσει μοτοσικλέτα. Ο Κώστας πεθαίνει στις 13 Δεκεμβρίου.',
        en: '5 December 2022: in a motorcycle chase, an officer fires two shots and hits the 16-year-old in the head; police say the pick-up tried to ram a motorcycle. Kostas dies on 13 December.',
      },
      {
        el: '19 Δεκεμβρίου 2022: δικαστικό συμβούλιο αφήνει τον αστυνομικό ελεύθερο με απαγόρευση εξόδου από τη χώρα, αν και ο εισαγγελέας είχε προτείνει προφυλάκιση.',
        en: '19 December 2022: a judicial council releases the officer with a travel ban, although the prosecutor had recommended pre-trial detention.',
      },
      {
        el: '13 Ιουνίου 2025: το Μικτό Ορκωτό Δικαστήριο Βέροιας, μετά από πρόταση του εισαγγελέα, μετατρέπει την κατηγορία από ανθρωποκτονία με ενδεχόμενο δόλο σε ανθρωποκτονία από αμέλεια σε υπέρβαση άμυνας (6–1) και επιβάλλει τρία χρόνια με αναστολή· τον αθωώνει για παράνομη χρήση όπλου.',
        en: '13 June 2025: the Veria Mixed Jury Court, at the prosecutor’s request, reduces the charge from homicide with possible intent to negligent manslaughter in excess of self-defence (6–1) and imposes three years suspended; it acquits him of unlawful use of a firearm.',
      },
      {
        el: 'Το μοτίβο δεν είναι μεμονωμένο: τον Οκτώβριο 2021 στο Πέραμα αστυνομικοί έριξαν δεκάδες σφαίρες σε αυτοκίνητο με τρεις άοπλους νέους Ρομά, σκοτώνοντας τον 18χρονο Νίκο Σαμπάνη· τρία χρόνια μετά, οργανώσεις κατήγγειλαν ότι η συμπληρωματική έρευνα δεν είχε καν ξεκινήσει.',
        en: 'The pattern is not isolated: in October 2021 in Perama, police fired dozens of shots into a car carrying three unarmed young Roma, killing 18-year-old Nikos Sampanis; three years later, rights groups reported the supplementary investigation had not even begun.',
      },
    ],
    outcome: {
      el: 'Πρωτόδικη καταδίκη για πλημμέλημα — τρία χρόνια με αναστολή, καμία μέρα φυλάκισης.',
      en: 'A first-instance misdemeanour conviction — three years suspended, not a day in prison.',
    },
    breach: {
      el: 'Το όπλο δίνεται στον αστυνομικό για να προστατεύει ζωές — όχι για να ανταλλάξει μια ζωή με 20 ευρώ βενζίνη. Όταν ο πυροβολισμός στο κεφάλι ενός παιδιού για πλημμέλημα καταλήγει σε ποινή με αναστολή, και τα θύματα είναι σταθερά Ρομά, η ζωή δεν μετριέται με το ίδιο μέτρο για όλους.',
      en: 'An officer is given a weapon to protect lives — not to trade a life for €20 of petrol. When a shot to a child’s head over a petty offence ends in a suspended sentence, and the victims are consistently Roma, life is not measured with the same yardstick for everyone.',
    },
    patterns: ['lethal-force', 'charge-downgraded'],
    safeguards: ['force-log', 'mirror', 'independent-probe'],
    counterfactual: {
      el: 'Το Μητρώο Χρήσης Βίας θα έδειχνε δημόσια ότι οι πυροβολισμοί της αστυνομίας για μικρά αδικήματα πλήττουν δυσανάλογα νέους Ρομά — πριν από τον Κώστα, μετά τον Νίκο. Το Κάτοπτρο Ποινών θα έθετε δημόσια το ερώτημα: τι ποινή θα έπαιρνε ένας πολίτης που πυροβολεί έναν 16χρονο στο κεφάλι για μια κλοπή 20 ευρώ;',
      en: 'The Use-of-Force Register would have shown publicly that police shootings over petty offences hit young Roma disproportionately — before Kostas, after Nikos. The Sentencing Mirror would have asked in public: what sentence would a civilian get for shooting a 16-year-old in the head over a €20 theft?',
    },
    antilogos: {
      el: 'Το ορκωτό δικαστήριο δέχτηκε ότι ο αστυνομικός ενεργούσε για να προστατέψει συναδέλφους και απλώς υπερέβη την άμυνα από αμέλεια· τη μετατροπή της κατηγορίας τη ζήτησε ο εισαγγελέας, και ο αστυνομικός είπε ότι σημάδευε τα λάστιχα.',
      en: 'The jury court accepted the officer was acting to protect colleagues and merely exceeded self-defence through negligence; the prosecutor asked for the reduced charge, and the officer said he was aiming at the tyres.',
    },
    reply: {
      el: 'Αυτό κρίθηκε, και πρέπει να γίνει σεβαστό. Αλλά το Κάτοπτρο δεν αμφισβητεί την κρίση· τη μετρά. Αν πολίτες που πυροβόλησαν «στα λάστιχα» και σκότωσαν αντιμετώπισαν το ίδιο, η απόφαση στέκει και δικαιώνεται δημόσια. Αν όχι, η διαφορά πρέπει να φαίνεται — γιατί η εμπιστοσύνη μιας κοινότητας δεν χτίζεται με αποφάσεις που δεν μπορεί να συγκρίνει.',
      en: 'That was judged, and it must be respected. But the Mirror does not challenge the judgment; it measures it. If civilians who fired “at the tyres” and killed were treated the same, the ruling stands and is vindicated in public. If not, the difference must be visible — because a community’s trust is not built on rulings it cannot compare.',
    },
    lever: {
      el: 'Ζήτησε δημόσιο, ετήσιο μητρώο κάθε χρήσης όπλου από την αστυνομία, με το αδίκημα, την έκβαση και ανώνυμα στοιχεία για τα θύματα.',
      en: 'Ask for a public, annual register of every police use of a firearm, with the offence, the outcome and anonymous data on the victims.',
    },
    scores: { harm: 7, power: 6, recurrence: 8, remedy: 8 },
    status: {
      el: 'Πρωτόδικη καταδίκη για πλημμέλημα (Ιούνιος 2025)· ενδέχεται να μην είναι τελεσίδικη.',
      en: 'First-instance misdemeanour conviction (June 2025); it may not be final.',
    },
    sources: [
      { title: 'Al Jazeera — Greek police officer appears in court over Roma teen’s shooting (2022)', url: 'https://www.aljazeera.com/news/2022/12/9/greek-police-officer-appears-in-court-over-roma-teens-shooting' },
      { title: 'Keep Talking Greece — Police officer released from custody (2022)', url: 'https://www.keeptalkinggreece.com/2022/12/19/roma-boy-shooting-police-officer-free-custody/' },
      { title: 'efsyn — Three years suspended for the officer (2025)', url: 'https://www.efsyn.gr/ellada/dikaiosyni/475609_fylakisi-trion-eton-me-anastoli-ston-astynomiko-gia-ton-thanato-toy-kosta/' },
      { title: 'ERRC — Three years after police kill Romani teen, investigators accused of stalling (2024)', url: 'https://www.errc.org/news/greece-three-years-after-police-kill-romani-teen-investigators-accused-of-stalling' },
    ],
  },
  {
    id: 'grigoropoulos-2008',
    when: '2008–2025',
    place: { el: 'Εξάρχεια, Αθήνα', en: 'Exarchia, Athens' },
    title: {
      el: 'Ειδικός φρουρός σκότωσε έναν 15χρονο — χρειάστηκαν 17 χρόνια και τρεις δίκες για να σταθεί η ποινή',
      en: 'A police special guard killed a 15-year-old — it took 17 years and three trials for the sentence to stand',
    },
    harmed: { el: 'Αλέξανδρος Γρηγορόπουλος, 15 ετών', en: 'Alexandros Grigoropoulos, 15' },
    plain: {
      el: 'Ο δράστης καταδικάστηκε για ανθρωποκτονία το 2010 σε ισόβια· το 2019 η ποινή μειώθηκε λόγω «πρότερου έντιμου βίου» και αποφυλακίστηκε, και μόνο το 2025, μετά από παρέμβαση του Αρείου Πάγου, επιβλήθηκαν ξανά ισόβια.',
      en: 'The killer was convicted of murder in 2010 and given life; in 2019 the sentence was cut for “previous lawful life” and he was released, and only in 2025, after Supreme Court intervention, was life imposed again.',
    },
    facts: [
      {
        el: '6 Δεκεμβρίου 2008: ειδικός φρουρός πυροβολεί και σκοτώνει τον 15χρονο Αλέξανδρο Γρηγορόπουλο στα Εξάρχεια· ακολουθούν ταραχές σε όλη τη χώρα.',
        en: '6 December 2008: a police special guard shoots dead 15-year-old Alexandros Grigoropoulos in Exarchia; riots follow across the country.',
      },
      {
        el: 'Οκτώβριος 2010: ορκωτό δικαστήριο στην Άμφισσα τον κρίνει ένοχο ανθρωποκτονίας με πρόθεση και τον συνάδελφό του για συνέργεια· η υπεράσπιση υποστήριξε προειδοποιητικούς πυροβολισμούς και εξοστρακισμό.',
        en: 'October 2010: a jury court in Amfissa finds him guilty of intentional homicide and his partner of complicity; the defence argued warning shots and a ricochet.',
      },
      {
        el: '2019: το Εφετείο μειώνει την ισόβια κάθειρξη σε 13 χρόνια λόγω πρότερου έντιμου βίου, και αποφυλακίζεται τον Ιούλιο. Το 2022 συλλαμβάνεται ξανά μετά από δημόσια κατακραυγή και αφήνεται πάλι ελεύθερος.',
        en: '2019: the Appeals Court cuts the life sentence to 13 years citing previous lawful life, and he is released in July. In 2022 he is re-arrested after public outcry and released again.',
      },
      {
        el: '4 Ιουνίου 2025: αφού ο Άρειος Πάγος ακυρώνει τη μείωση, το Μικτό Ορκωτό Εφετείο Λαμίας απορρίπτει ομόφωνα κάθε ελαφρυντικό και επιβάλλει ξανά ισόβια· επιστρέφει στη φυλακή.',
        en: '4 June 2025: after the Supreme Court annuls the reduction, the Lamia Mixed Jury Appeals Court unanimously rejects all mitigation and reimposes life; he returns to prison.',
      },
    ],
    outcome: {
      el: 'Καταδίκη για ανθρωποκτονία και ισόβια — αλλά μετά από δεκαεπτά χρόνια, μια αποφυλάκιση και μια διόρθωση που ήρθε μόνο μετά από κατακραυγή.',
      en: 'A murder conviction and life imprisonment — but after seventeen years, a release, and a correction that came only after public outcry.',
    },
    breach: {
      el: 'Αυτή είναι η υπόθεση όπου το σύστημα καταδίκασε — και γι’ αυτό δείχνει πού λυγίζει: όχι στην ετυμηγορία αλλά στην ποινή. Όταν ο «πρότερος έντιμος βίος» ενός αστυνομικού μετρά για να μειωθεί η ποινή του για τον φόνο ενός παιδιού, η στολή γίνεται ελαφρυντικό αντί για επιβαρυντικό.',
      en: 'This is the case where the system convicted — which is why it shows where it bends: not at the verdict but at the sentence. When an officer’s “previous lawful life” counts to cut his sentence for killing a child, the uniform becomes mitigation instead of aggravation.',
    },
    patterns: ['lethal-force', 'charge-downgraded'],
    safeguards: ['mirror', 'force-log'],
    counterfactual: {
      el: 'Το Κάτοπτρο Ποινών θα είχε δείξει δημόσια, τη μέρα της μείωσης, πόσο συχνά γίνεται δεκτό το ελαφρυντικό του πρότερου έντιμου βίου σε πολίτες που σκότωσαν ανήλικο — και θα είχε ειδοποιήσει τον εισαγγελέα εφέσεων. Η διόρθωση δεν θα περίμενε έξι χρόνια και μια κατακραυγή.',
      en: 'The Sentencing Mirror would have shown publicly, on the day of the reduction, how often “previous lawful life” is accepted as mitigation for civilians who killed a minor — and notified the appeals prosecutor. The correction would not have waited six years and an outcry.',
    },
    antilogos: {
      el: 'Η υπόθεση δείχνει ότι η δικαιοσύνη λειτουργεί: ο δράστης καταδικάστηκε από την αρχή για ανθρωποκτονία, και το ανώτατο δικαστήριο διόρθωσε μόνο του τη μείωση. Τα ελαφρυντικά είναι νόμιμο δικαίωμα κάθε κατηγορουμένου — και του αστυνομικού.',
      en: 'The case shows justice works: the killer was convicted of murder from the start, and the highest court corrected the reduction itself. Mitigation is every defendant’s lawful right — the officer’s too.',
    },
    reply: {
      el: 'Λειτούργησε — μετά από δεκαεπτά χρόνια και αφού ο δράστης βγήκε από τη φυλακή. Το ελαφρυντικό είναι δικαίωμα όλων· το ερώτημα του Κατόπτρου είναι αν δίνεται σε όλους με τον ίδιο τρόπο. Όταν η απάντηση φαίνεται την ίδια μέρα, η διόρθωση δεν χρειάζεται να περιμένει τον δρόμο.',
      en: 'It worked — after seventeen years, and after the killer walked out of prison. Mitigation is everyone’s right; the Mirror’s question is whether it is granted to everyone the same way. When the answer shows the same day, the correction need not wait for the streets.',
    },
    lever: {
      el: 'Ζήτησε κάθε μείωση ποινής για αστυνομικό που σκότωσε να συνοδεύεται από δημόσια σύγκριση με όμοιες υποθέσεις πολιτών.',
      en: 'Ask that every sentence reduction for an officer who killed come with a public comparison to similar civilian cases.',
    },
    scores: { harm: 7, power: 6, recurrence: 7, remedy: 7 },
    status: {
      el: 'Καταδίκη για ανθρωποκτονία· ισόβια κάθειρξη επιβλήθηκε ξανά τον Ιούνιο 2025.',
      en: 'Convicted of murder; life imprisonment reimposed in June 2025.',
    },
    sources: [
      { title: 'Al Jazeera — Greek police guilty of killing boy (2010)', url: 'https://www.aljazeera.com/news/2010/10/11/greek-police-guilty-of-killing-boy' },
      { title: 'Euronews (GR) — Back to prison for life (2025)', url: 'https://gr.euronews.com/2025/06/04/dolofonia-grhgoropoulou-pisw-sth-fulakh-gia-isovia-katheirksh-korkoneas' },
      { title: 'Greek City Times — Former police officer sentenced to life (2025)', url: 'https://greekcitytimes.com/2025/06/05/former-police-officer-sentenced-to-life-for-grigoropoulos-killing/' },
      { title: 'Greek Herald — Life sentence reinstated (2025)', url: 'https://greekherald.com.au/news/life-sentence-reinstated-for-officer-who-killed-alexandros-grigoropoulos-in-2008/' },
    ],
  },
]
