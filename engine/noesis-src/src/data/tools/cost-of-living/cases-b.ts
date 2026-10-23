// ΑΓΟΡΑΝΟΜΟΣ — cases 6–10. Same rules as cases-a.ts: sourced facts checked on
// 2026-09-30; allegations stated as allegations, settlements without admission
// stated as such.

import type { ToolCase } from '../types'

export const CASES_B: readonly ToolCase[] = [
  {
    id: 'chile-tissue-2000-2011',
    when: '2000–2024',
    place: { el: 'Χιλή', en: 'Chile' },
    title: {
      el: 'Δύο χαρτοβιομηχανίες μοίραζαν την αγορά του χαρτιού υγείας για μια δεκαετία — ο οργανωτής προσπάθησε να γλιτώσει ως «καταγγέλλων»',
      en: 'Two paper companies split the toilet-paper market for a decade — the organiser tried to walk free as the whistleblower',
    },
    harmed: { el: 'Κάθε νοικοκυριό της Χιλής που αγόραζε χαρτί υγείας, χαρτοπετσέτες και χαρτομάντιλα', en: 'Every Chilean household buying toilet paper, paper towels, napkins and tissues' },
    plain: {
      el: 'Δύο εταιρείες με το 90% της αγοράς μοίραζαν μερίδια και όριζαν τιμές για πάνω από δέκα χρόνια. Η μία ομολόγησε πρώτη και πήρε ασυλία — ώσπου το Ανώτατο Δικαστήριο της την αφαίρεσε, επειδή ήταν αυτή που οργάνωσε το καρτέλ. Πλήρωσε περίπου 7.000 πέσος σε κάθε ενήλικο Χιλιανό.',
      en: 'Two companies with 90% of the market shared quotas and fixed prices for over ten years. One confessed first and got immunity — until the Supreme Court took it away, because it had organised the cartel. It paid about CLP 7,000 to every adult Chilean.',
    },
    facts: [
      {
        el: '27 Ιανουαρίου 2017: η CMPC συμφωνεί με την αρχή καταναλωτή και ενώσεις καταναλωτών να πληρώσει 150 εκατ. δολάρια — τουλάχιστον 7.000 πέσος σε κάθε ενήλικο, περίπου 14 εκατομμύρια άνθρωποι, οι περισσότεροι αυτόματα μέσω του δημόσιου τραπεζικού τους λογαριασμού.',
        en: '27 January 2017: CMPC agrees with the consumer agency and consumer groups to pay US$150 million — at least CLP 7,000 per adult, about 14 million people, most paid automatically through their public bank account.',
      },
      {
        el: '29 Δεκεμβρίου 2017: το Δικαστήριο Ανταγωνισμού κρίνει ότι CMPC και SCA μοίραζαν μερίδια και όριζαν τιμές από το 2000 ως τουλάχιστον το 2011, με περίπου 90% της αγοράς· επιβάλλει στη SCA το μέγιστο πρόστιμο και απαλλάσσει τη CMPC ως πρώτη που ζήτησε επιείκεια.',
        en: '29 December 2017: the Competition Tribunal finds CMPC and SCA shared quotas and fixed prices from 2000 to at least 2011, holding about 90% of the market; it fines SCA the maximum and exempts CMPC as first leniency applicant.',
      },
      {
        el: '5 Ιουνίου 2018: η CMPC καταθέτει περίπου 99,8 δισ. πέσος στην αρχή καταναλωτή για την πληρωμή 7.000 πέσος σε κάθε άτομο άνω των 18.',
        en: '5 June 2018: CMPC deposits about CLP 99.8 billion with the consumer agency to pay CLP 7,000 to every person aged 18 and over.',
      },
      {
        el: '6 Ιανουαρίου 2020: το Ανώτατο Δικαστήριο αφαιρεί την επιείκεια από τη CMPC — πρώτη φορά — επειδή «όχι μόνο οργάνωσε τη συμφωνία αλλά άσκησε και οικονομικό καταναγκασμό» στον ανταγωνιστή της· και οι δύο πληρώνουν περίπου 15 εκατ. δολάρια.',
        en: '6 January 2020: the Supreme Court revokes CMPC’s leniency — a first — because it “not only organised the collusive agreement but also exercised economic coercion” on its competitor; both pay about US$15 million.',
      },
      {
        el: '25 Ιουλίου 2024: το Ανώτατο Δικαστήριο κρίνει ότι η SCA δεν οφείλει αποζημίωση στους καταναλωτές, επειδή πουλούσε μόνο χονδρικά στα σούπερ μάρκετ και δεν είχε άμεση σχέση μαζί τους.',
        en: '25 July 2024: the Supreme Court rules SCA owes consumers no compensation, because it sold only wholesale to supermarkets and had no direct relationship with them.',
      },
    ],
    outcome: {
      el: 'Δύο πρόστιμα περίπου 15 εκατ. δολαρίων· η CMPC πλήρωσε περίπου 150 εκατ. απευθείας σε κάθε ενήλικο· η SCA δεν πλήρωσε καμία αποζημίωση σε καταναλωτές.',
      en: 'Two fines of about US$15 million; CMPC paid about US$150 million directly to every adult; SCA paid no consumer compensation.',
    },
    breach: {
      el: 'Όταν δύο εταιρείες ελέγχουν σχεδόν όλη την αγορά ενός αγαθού που χρησιμοποιεί κάθε σπίτι, ο ανταγωνισμός ανάμεσά τους είναι η μόνη προστασία του αγοραστή. Όταν μοιράζονται την αγορά για μια δεκαετία, και ο οργανωτής προσπαθεί να γλιτώσει παρουσιαζόμενος ως καταγγέλλων, η επιείκεια έχει γίνει εργαλείο του καρτέλ.',
      en: 'When two companies control almost the whole market for a good every home uses, competition between them is the buyer’s only protection. When they share the market for a decade, and the organiser tries to escape by posing as the whistleblower, leniency has become the cartel’s tool.',
    },
    patterns: ['lockstep-rise', 'no-refund'],
    safeguards: ['automatic-refund', 'lockstep-screen'],
    counterfactual: {
      el: 'Η Επιστροφή Χωρίς Αγωγή υπάρχει ήδη σε αυτή την υπόθεση — η Χιλή έδειξε ότι γίνεται. Η πρόταση την κάνει κανόνα για κάθε καρτέλ, και για τον δεύτερο συμμετέχοντα που πουλούσε χονδρικά. Ο Ανιχνευτής Ταυτόχρονων Αυξήσεων θα είχε δει τα σταθερά μερίδια μιας δυοπωλιακής αγοράς πολύ πριν από την ομολογία.',
      en: 'Refunds Without a Lawsuit already exist in this case — Chile showed it can be done. The proposal makes it the rule for every cartel, including the second participant that sold wholesale. The Lockstep-Rise Screen would have seen the fixed shares of a duopoly long before the confession.',
    },
    antilogos: {
      el: 'Το καρτέλ αποκαλύφθηκε επειδή η CMPC ομολόγησε· η εθνική αρχή ανταγωνισμού τόνισε ότι η επιείκεια παραμένει «το αποτελεσματικότερο εργαλείο κατά της συμπαιγνίας». Και η ενιαία επιστροφή δεν αντιστοιχούσε σε ό,τι πλήρωσε πραγματικά κάθε νοικοκυριό.',
      en: 'The cartel came to light because CMPC confessed; the national competition authority stressed that leniency remains “the most effective tool against collusion.” And the flat refund did not match what each household actually paid.',
    },
    reply: {
      el: 'Ακριβώς — γι’ αυτό η πρόταση κρατά την επιείκεια για το πρόστιμο, αλλά όχι για την αποζημίωση των πολιτών. Όποιος ομολογεί γλιτώνει την τιμωρία· δεν γλιτώνει την επιστροφή όσων πήρε. Και μια ενιαία επιστροφή σε όλους είναι ατελής, αλλά πολύ καλύτερη από τίποτα.',
      en: 'Exactly — which is why the proposal keeps leniency for the fine, but not for citizens’ compensation. Whoever confesses escapes punishment; they do not escape returning what they took. And a flat refund to all is imperfect, but far better than nothing.',
    },
    lever: {
      el: 'Ζήτησε κάθε απόφαση για καρτέλ σε βασικό αγαθό να συνοδεύεται από αυτόματη επιστροφή στους καταναλωτές.',
      en: 'Ask that every cartel ruling on a staple come with an automatic refund to consumers.',
    },
    scores: { harm: 6, power: 7, recurrence: 7, remedy: 9 },
    status: {
      el: 'Κλειστή — η ευθύνη επιβεβαιώθηκε από το Ανώτατο Δικαστήριο (2020)· η αξίωση κατά της SCA απορρίφθηκε οριστικά (2024).',
      en: 'Closed — liability confirmed by the Supreme Court (2020); the claim against SCA finally rejected (2024).',
    },
    sources: [
      { title: 'Emol — CMPC to pay US$150m to compensate consumers (2017)', url: 'https://www.emol.com/noticias/Economia/2017/01/27/842148/Acuerdo-por-colusion-tissue-CMPC-pagara-US150-millones-para-compensar-a-consumidores.html' },
      { title: 'Emol — Competition Tribunal ruling in the tissue case (2017)', url: 'https://www.emol.com/noticias/Economia/2017/12/29/889225/TDLC-dicta-sentencia-en-caso-Tissue-Multa-a-SCA-con-US18-millones-y-exime-a-CMPC.html' },
      { title: 'El Dínamo — Supreme Court convicts CMPC and SCA (2020)', url: 'https://www.eldinamo.cl/pais/2020/01/06/corte-suprema-condena-a-cmpc-y-sca-por-colusion-del-confort/' },
      { title: 'Meganoticias — No compensation from SCA (2024)', url: 'https://www.meganoticias.cl/nacional/453842-compensacion-papel-tissu-sca-chile-pdp-25-07-2024.html' },
    ],
  },
  {
    id: 'us-insulin-pbm-2012-2026',
    when: '2012–2026',
    place: { el: 'Ηνωμένες Πολιτείες', en: 'United States' },
    title: {
      el: 'Οι τρεις μεγαλύτεροι μεσάζοντες φαρμάκων κατηγορούνται ότι έσπρωχναν τους ασθενείς σε ινσουλίνη υψηλής τιμής λίστας για να παίρνουν μεγαλύτερες επιστροφές',
      en: 'The three largest drug middlemen are accused of steering patients to high-list-price insulin to capture bigger rebates',
    },
    harmed: {
      el: 'Όσοι χρειάζονται ινσουλίνη — ιδίως ανασφάλιστοι και ασθενείς με υψηλή συμμετοχή, που πληρώνουν με βάση την τιμή λίστας',
      en: 'People who need insulin — especially the uninsured and patients with high deductibles, who pay based on the list price',
    },
    plain: {
      el: 'Η τιμή λίστας μιας ινσουλίνης ανέβηκε από 21 σε πάνω από 274 δολάρια. Η Ομοσπονδιακή Επιτροπή Εμπορίου κατηγόρησε τους τρεις μεγαλύτερους μεσάζοντες φαρμάκων ότι ευνοούσαν τις ακριβές ινσουλίνες επειδή τους έδιναν μεγαλύτερες επιστροφές. Συμβιβάστηκαν χωρίς να παραδεχτούν τίποτα.',
      en: 'The list price of one insulin rose from $21 to over $274. The Federal Trade Commission accused the three largest drug middlemen of favouring expensive insulins because they paid bigger rebates. They settled without admitting anything.',
    },
    facts: [
      {
        el: '20 Σεπτεμβρίου 2024: η Ομοσπονδιακή Επιτροπή Εμπορίου κινείται κατά των Caremark, Express Scripts και OptumRx — που διαχειρίζονται περίπου το 80% των συνταγών στις ΗΠΑ — για ένα «διεστραμμένο σύστημα επιστροφών» που ευνοούσε ινσουλίνες υψηλής τιμής λίστας. Η Επιτροπή τονίζει ότι η καταγγελία «σηματοδοτεί την αρχή μιας διαδικασίας», όχι εύρημα παράβασης.',
        en: '20 September 2024: the Federal Trade Commission sues Caremark, Express Scripts and OptumRx — which administer about 80% of US prescriptions — over a “perverse drug rebate system” favouring high-list-price insulins. The FTC stresses the complaint “marks the beginning of a proceeding,” not a finding of violation.',
      },
      {
        el: 'Η τιμή λίστας της Humalog ανέβηκε από 21 δολάρια (1999) σε πάνω από 274 (2017)· «ως το 2019, ένας στους τέσσερις ασθενείς με ινσουλίνη δεν μπορούσε να αγοράσει το φάρμακό του».',
        en: 'Humalog’s list price rose from $21 (1999) to over $274 (2017); “by 2019 one out of every four insulin patients was unable to afford their medication.”',
      },
      {
        el: '4 Φεβρουαρίου 2026: συμβιβασμός με την Express Scripts — τέλος στην προτίμηση ακριβών εκδοχών έναντι ίδιων φθηνότερων, αποσύνδεση της αμοιβής της από την τιμή λίστας· εκτίμηση έως 7 δισ. δολάρια λιγότερα έξοδα ασθενών σε δέκα χρόνια. Χωρίς παραδοχή ευθύνης και χωρίς πρόστιμο.',
        en: '4 February 2026: a settlement with Express Scripts — no more preferring expensive versions over identical cheaper ones, its pay delinked from list prices; estimated up to $7 billion lower patient costs over ten years. No admission of liability and no fine.',
      },
      {
        el: '12 Ιουνίου 2026: η Επιτροπή αναστέλλει τη διαδικασία κατά της OptumRx για να εξετάσει συμβιβασμό· και οι τρεις μεσάζοντες έχουν αρνηθεί τις κατηγορίες.',
        en: '12 June 2026: the FTC pauses the case against OptumRx to consider a settlement; all three middlemen have denied the allegations.',
      },
      {
        el: '14 Ιουλίου 2026: συμβιβασμός με την Caremark — οι επιστροφές περνούν στον ασθενή στο ταμείο, όριο στη συμμετοχή για ινσουλίνη, περισσότερη διαφάνεια· εκτίμηση έως 8,5 δισ. δολάρια εξοικονόμησης σε δέκα χρόνια.',
        en: '14 July 2026: a settlement with Caremark — rebates passed to the patient at the counter, a cap on insulin out-of-pocket costs, more transparency; estimated up to $8.5 billion savings over ten years.',
      },
    ],
    outcome: {
      el: 'Συμβιβασμοί που αλλάζουν τη συμπεριφορά — χωρίς πρόστιμα και χωρίς παραδοχή. Οι εξοικονομήσεις είναι εκτιμήσεις για το μέλλον, όχι επιστροφές για το παρελθόν.',
      en: 'Behavioural settlements — no fines and no admission. The savings are estimates for the future, not refunds for the past.',
    },
    breach: {
      el: 'Ένα φάρμακο που κρατά ανθρώπους στη ζωή δεν μπορεί να τιμολογείται από ένα σύστημα που κανείς δεν βλέπει. Όταν ο ασθενής πληρώνει με βάση μια τιμή λίστας που κανείς στην αλυσίδα δεν πληρώνει πραγματικά, και ο μεσάζων κερδίζει περισσότερο όσο ακριβότερο είναι το φάρμακο, τα κίνητρα δείχνουν ακριβώς προς τη λάθος κατεύθυνση.',
      en: 'A medicine that keeps people alive cannot be priced by a system no one sees. When the patient pays on a list price nobody in the chain actually pays, and the middleman earns more the dearer the drug, the incentives point exactly the wrong way.',
    },
    patterns: ['hidden-middleman', 'late-regulator'],
    safeguards: ['rebate-light'],
    counterfactual: {
      el: 'Το Φως στις Επιστροφές θα είχε κάνει τη συμμετοχή του ασθενή να υπολογίζεται στην καθαρή τιμή μετά τις επιστροφές — ακριβώς αυτό που πέτυχαν οι συμβιβασμοί του 2026, είκοσι χρόνια αφού άρχισε να ανεβαίνει η τιμή λίστας.',
      en: 'Light on Rebates would have made patients’ costs calculated on the net price after rebates — exactly what the 2026 settlements achieved, twenty years after list prices began to climb.',
    },
    antilogos: {
      el: 'Τις τιμές λίστας τις ορίζουν οι φαρμακοβιομηχανίες, όχι οι μεσάζοντες, και η Επιτροπή δήλωσε ότι ανησυχεί «βαθιά» και για τον δικό τους ρόλο. Οι επιστροφές μπορούν να μειώνουν την καθαρή τιμή για τα ασφαλιστικά ταμεία — η ζημιά συγκεντρώνεται σε όσους πληρώνουν με βάση τη λίστα.',
      en: 'List prices are set by the drug makers, not the middlemen, and the FTC said it was “deeply troubled” by their role too. Rebates can lower net prices for insurers — the harm falls on those who pay based on the list.',
    },
    reply: {
      el: 'Σωστά — και γι’ αυτό η πρόταση ζητά φως σε ολόκληρη την αλυσίδα, όχι έναν ένοχο. Όταν κανείς δεν βλέπει την καθαρή τιμή, ο καθένας μπορεί να δείχνει τον άλλον. Η διαφάνεια δεν αποφασίζει ποιος φταίει· κάνει αδύνατο να κρύβεται κανείς πίσω από τον άλλον.',
      en: 'True — which is why the proposal asks for light on the whole chain, not a single culprit. When no one sees the net price, each can point at the other. Transparency does not decide who is at fault; it makes it impossible to hide behind one another.',
    },
    lever: {
      el: 'Ζήτησε η συμμετοχή των ασθενών στα φάρμακα να υπολογίζεται πάντα στην πραγματική τιμή μετά από εκπτώσεις και επιστροφές.',
      en: 'Ask that patients’ share of medicine costs always be calculated on the real price after discounts and rebates.',
    },
    scores: { harm: 9, power: 9, recurrence: 7, remedy: 8 },
    status: {
      el: 'Κανένα δικαστικό εύρημα παράβασης — και οι τρεις αρνήθηκαν τις κατηγορίες και τεκμαίρονται αθώοι. Δύο συμβιβάστηκαν (2026)· ο τρίτος συμβιβασμός έχει προταθεί.',
      en: 'No adjudicated finding of wrongdoing — all three denied the allegations and are presumed innocent. Two settled (2026); the third settlement has been proposed.',
    },
    sources: [
      { title: 'FTC — FTC sues drug middlemen for inflating insulin prices (2024)', url: 'https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-sues-prescription-drug-middlemen-artificially-inflating-insulin-drug-prices' },
      { title: 'FTC — Landmark settlement with Express Scripts (2026)', url: 'https://www.ftc.gov/news-events/news/press-releases/2026/02/ftc-secures-landmark-settlement-express-scripts-lower-drug-costs-american-patients' },
      { title: 'Healthcare Dive — Optum Rx proposed settlement in insulin case (2026)', url: 'https://www.healthcaredive.com/news/unitedhealth-optum-rx-ftc-proposed-settlement-insulin-case/822857/' },
      { title: 'FTC — Major settlement with Caremark (2026)', url: 'https://www.ftc.gov/news-events/news/press-releases/2026/07/ftc-secures-major-settlement-caremark-resolving-antitrust-case-against-second-drug-middleman' },
    ],
  },
  {
    id: 'eu-truck-cartel-1997-2011',
    when: '1997–2024',
    place: { el: 'Ευρωπαϊκή Ένωση', en: 'European Union' },
    title: {
      el: 'Οι κατασκευαστές φορτηγών της Ευρώπης συντόνιζαν τις τιμές για 14 χρόνια και συμφώνησαν να περάσουν στους αγοραστές το κόστος των καθαρότερων κινητήρων',
      en: 'Europe’s truck makers coordinated prices for 14 years and agreed to pass the cost of cleaner engines on to buyers',
    },
    harmed: {
      el: 'Οι αγοραστές φορτηγών σε όλη την ΕΕ — μεταφορικές, ταχυδρομεία, δήμοι· η επίπτωση στις τιμές των μεταφερόμενων αγαθών δεν αποδείχθηκε στο δικαστήριο',
      en: 'Truck buyers across the EU — hauliers, postal fleets, municipalities; the effect on prices of transported goods was not proven in court',
    },
    plain: {
      el: 'Πέντε κατασκευαστές που έφτιαχναν σχεδόν εννιά στα δέκα φορτηγά της Ευρώπης συντόνιζαν τις τιμές τους και τον ρυθμό εισαγωγής καθαρότερων κινητήρων για 14 χρόνια. Πήραν πρόστιμο-ρεκόρ 3,8 δισ. ευρώ — που πήγε στον προϋπολογισμό της ΕΕ, όχι στους αγοραστές.',
      en: 'Five makers producing nearly nine in ten of Europe’s trucks coordinated their prices and the pace of cleaner-engine rollout for 14 years. They got a record €3.8 billion fine — which went to the EU budget, not to buyers.',
    },
    facts: [
      {
        el: '19 Ιουλίου 2016: η Ευρωπαϊκή Επιτροπή επιβάλλει πρόστιμα 2,93 δισ. ευρώ σε τέσσερις κατασκευαστές — Daimler, DAF, Volvo/Renault, Iveco· η MAN παίρνει πλήρη ασυλία επειδή αποκάλυψε το καρτέλ. Συντόνιζαν τιμές λίστας, τον χρόνο εισαγωγής των τεχνολογιών εκπομπών και τη μεταφορά του κόστους τους στους πελάτες.',
        en: '19 July 2016: the European Commission fines four makers €2.93 billion — Daimler, DAF, Volvo/Renault, Iveco; MAN gets full immunity for revealing the cartel. They coordinated list prices, the timing of emission technologies and passing their cost on to customers.',
      },
      {
        el: '27 Σεπτεμβρίου 2017: η Scania, που αρνήθηκε να συμβιβαστεί, παίρνει πρόστιμο 880 εκατ.· το σύνολο φτάνει τα 3,8 δισ. — ρεκόρ για καρτέλ στην ΕΕ.',
        en: '27 September 2017: Scania, which refused to settle, is fined €880 million; the total reaches €3.8 billion — a record EU cartel fine.',
      },
      {
        el: '7 Φεβρουαρίου 2023: στην πρώτη βρετανική δίκη αποζημίωσης, το δικαστήριο βρίσκει υπερχρέωση 5% στα φορτηγά που αγόρασαν η Royal Mail και η BT και επιδικάζει 38,5 εκατ. λίρες.',
        en: '7 February 2023: in the first UK damages trial, the tribunal finds a 5% overcharge on trucks bought by Royal Mail and BT and awards £38.5 million.',
      },
      {
        el: '1 Φεβρουαρίου 2024: το Δικαστήριο της ΕΕ απορρίπτει «στο σύνολό της» την προσφυγή της Scania και επικυρώνει το πρόστιμο.',
        en: '1 February 2024: the EU Court of Justice dismisses Scania’s appeal “in its entirety” and upholds the fine.',
      },
      {
        el: 'Φεβρουάριος – Ιούνιος 2024: το βρετανικό Εφετείο απορρίπτει όλους τους λόγους έφεσης της DAF, και το Ανώτατο Δικαστήριο αρνείται να εξετάσει νέα προσφυγή.',
        en: 'February – June 2024: the UK Court of Appeal dismisses all DAF’s grounds, and the Supreme Court refuses permission for a further appeal.',
      },
    ],
    outcome: {
      el: 'Περίπου 3,8 δισ. σε πρόστιμα, που πήγαν στον προϋπολογισμό της ΕΕ· τα θύματα πρέπει να κάνουν αγωγές ένα-ένα σε εθνικά δικαστήρια.',
      en: 'About €3.8 billion in fines, paid to the EU budget; victims must sue one by one in national courts.',
    },
    breach: {
      el: 'Ο ανταγωνισμός υπάρχει και για να επιταχύνει την πρόοδο: όποιος φέρει πρώτος καθαρότερο κινητήρα σε καλύτερη τιμή κερδίζει. Όταν οι κατασκευαστές συμφωνούν πότε θα φέρουν την τεχνολογία και πώς θα χρεώσουν το κόστος της, ο αγοραστής πληρώνει περισσότερο — και ο αέρας καθαρίζει πιο αργά.',
      en: 'Competition also exists to speed progress: whoever brings a cleaner engine first at a better price wins. When makers agree when to bring the technology and how to charge for it, the buyer pays more — and the air clears more slowly.',
    },
    patterns: ['lockstep-rise', 'no-refund', 'late-regulator'],
    safeguards: ['lockstep-screen', 'automatic-refund'],
    counterfactual: {
      el: 'Ο Ανιχνευτής Ταυτόχρονων Αυξήσεων θα είχε δει τις συντονισμένες τιμές λίστας πολύ πριν από 14 χρόνια. Και η Επιστροφή Χωρίς Αγωγή θα έστελνε μέρος των 3,8 δισ. στους αγοραστές που υπερχρεώθηκαν — αντί να τους αφήνει να αποδείξουν τη ζημιά τους χωριστά σε κάθε χώρα.',
      en: 'The Lockstep-Rise Screen would have seen the coordinated list prices long before 14 years had passed. And Refunds Without a Lawsuit would have sent part of the €3.8 billion to the overcharged buyers — instead of leaving them to prove their loss separately in each country.',
    },
    antilogos: {
      el: 'Το βρετανικό δικαστήριο δεν βρήκε ότι η υπερχρέωση πέρασε στους πελάτες των αγοραστών — οπότε η υπόθεση δεν αποδεικνύει υψηλότερες τιμές για τα νοικοκυριά. Η υπερχρέωση που αποδείχθηκε ήταν μέτρια, 5%. Και η MAN, πλήρες μέλος του καρτέλ, δεν πλήρωσε τίποτα — το τίμημα της αποκάλυψης.',
      en: 'The UK tribunal did not find the overcharge was passed on to buyers’ customers — so the case does not prove higher household prices. The proven overcharge was a modest 5%. And MAN, a full cartel member, paid nothing — the price of exposure.',
    },
    reply: {
      el: 'Ακριβώς: ακόμη και όταν μια υπερχρέωση αποδεικνύεται, τα χρήματα πηγαίνουν στον δημόσιο προϋπολογισμό και οι αδικημένοι πρέπει να περάσουν χρόνια δικών για να δουν ένα μέρος τους. Η πρόταση δεν αλλάζει τα πρόστιμα· αλλάζει το ποιος παίρνει πίσω τα χρήματα.',
      en: 'Exactly: even when an overcharge is proven, the money goes to the public budget and the wronged must spend years in court to see part of it. The proposal does not change the fines; it changes who gets the money back.',
    },
    lever: {
      el: 'Ζήτησε μέρος κάθε προστίμου για καρτέλ να επιστρέφει αυτόματα σε όσους υπερχρεώθηκαν.',
      en: 'Ask that part of every cartel fine be returned automatically to those overcharged.',
    },
    scores: { harm: 6, power: 8, recurrence: 7, remedy: 7 },
    status: {
      el: 'Κλειστή — οι πέντε παραδέχθηκαν την ευθύνη με συμβιβασμό, το πρόστιμο της Scania επικυρώθηκε (2024) και η βρετανική αποζημίωση είναι οριστική.',
      en: 'Closed — the five admitted liability by settlement, Scania’s fine was upheld (2024) and the UK damages award is final.',
    },
    sources: [
      { title: 'European Commission — Truck producers fined €2.93 billion (2016)', url: 'https://ec.europa.eu/commission/presscorner/detail/en/IP_16_2582' },
      { title: 'European Commission — Statement on the Scania decision (2017)', url: 'https://ec.europa.eu/commission/presscorner/api/documents?reference=STATEMENT/17/3509&language=en' },
      { title: 'Free Malaysia Today / Reuters — EU court rejects Scania’s appeal (2024)', url: 'https://www.freemalaysiatoday.com/category/business/2024/02/01/eu-court-rejects-scanias-appeal-against-e880mil-fine' },
      { title: 'BCLP — UK Supreme Court refuses DAF permission to appeal (2024)', url: 'https://bclplaw.com/en-US/events-insights-news/uk-supreme-court-rules-in-favour-of-bclp-clients-royal-mail-and-bt-in-trucks-litigation-refusing-defendant-daf-trucks-permission-to-appeal.html' },
      { title: 'National Archives — Court of Appeal judgment [2024] EWCA Civ 181', url: 'https://caselaw.nationalarchives.gov.uk/ewca/civ/2024/181' },
    ],
  },
  {
    id: 'australia-supermarkets-2021-2026',
    when: '2021–2026',
    place: { el: 'Αυστραλία', en: 'Australia' },
    title: {
      el: 'Οι δύο αλυσίδες που πουλούν τα δύο τρίτα των τροφίμων της Αυστραλίας μηνύθηκαν για «εκπτώσεις» μετά από σύντομες αυξήσεις — το δικαστήριο βρήκε ότι η Coles παραπλάνησε τους αγοραστές',
      en: 'The two chains selling two-thirds of Australia’s groceries were sued over “discounts” that followed brief price spikes — the court found Coles misled shoppers',
    },
    harmed: {
      el: 'Οι αγοραστές τροφίμων στην Αυστραλία, στο κύμα ακρίβειας του 2021–2023, που έβλεπαν «εκπτώσεις» σε τιμές ίσες ή υψηλότερες από τη συνήθη',
      en: 'Australian grocery shoppers in the 2021–23 inflation wave, who saw “discounts” at prices equal to or above the usual one',
    },
    plain: {
      el: 'Η αρχή ανταγωνισμού της Αυστραλίας κατηγόρησε τις δύο μεγαλύτερες αλυσίδες ότι ανέβαζαν τις τιμές για λίγες εβδομάδες και μετά τις «έριχναν» — σε επίπεδο ίδιο ή υψηλότερο από πριν. Το δικαστήριο βρήκε ότι η Coles παραπλάνησε τους αγοραστές σε 13 από 14 ετικέτες.',
      en: 'Australia’s competition authority accused the two biggest chains of raising prices for a few weeks, then “dropping” them — to the same level as before or higher. The court found Coles misled shoppers on 13 of 14 tickets.',
    },
    facts: [
      {
        el: '23 Σεπτεμβρίου 2024: η αρχή ανταγωνισμού μηνύει Woolworths και Coles, κατηγορώντας τες ότι ανέβαζαν τιμές τουλάχιστον 15% για σύντομο διάστημα και μετά τις έβαζαν σε «έκπτωση» σε τιμή ίδια ή υψηλότερη από τη συνήθη — εκατοντάδες προϊόντα· η πρόεδρός της χαρακτήρισε τις εκπτώσεις «στην πραγματικότητα ψευδαισθήσεις».',
        en: '23 September 2024: the competition authority sues Woolworths and Coles, alleging they raised prices by at least 15% briefly, then put them on “discount” at the same or a higher price than usual — hundreds of products; its chair called the discounts “in fact, illusory.”',
      },
      {
        el: 'Coles και Woolworths ελέγχουν μαζί το 67% των πωλήσεων τροφίμων στη χώρα.',
        en: 'Coles and Woolworths together hold 67% of national grocery sales.',
      },
      {
        el: '21 Μαρτίου 2025: η τελική έκθεση της έρευνας για τα σούπερ μάρκετ τα κατατάσσει «ανάμεσα στις πιο κερδοφόρες επιχειρήσεις σούπερ μάρκετ στον κόσμο», με αυξανόμενα μέσα περιθώρια την τελευταία πενταετία, και κάνει 20 συστάσεις.',
        en: '21 March 2025: the supermarkets inquiry’s final report ranks them “among the most profitable supermarket businesses globally,” with average margins rising over five years, and makes 20 recommendations.',
      },
      {
        el: '21 Απριλίου 2026: στη δίκη της Woolworths, η εταιρεία υποστηρίζει ότι αντιμετώπιζε «σημαντικές αυξήσεις κόστους από προμηθευτές»· ο δικαστής σημειώνει ότι κρίσιμο είναι πόσο διήρκεσε η υψηλή τιμή.',
        en: '21 April 2026: at the Woolworths trial, the company argues it faced “significant cost price increases from suppliers”; the judge notes that the crux is how long the higher price lasted.',
      },
      {
        el: '14 Μαΐου 2026: το ομοσπονδιακό δικαστήριο κρίνει ότι η Coles παραπλάνησε σε 13 από τις 14 ετικέτες που εξετάστηκαν — π.χ. τροφή σκύλων στα 4 δολάρια για μήνες, 6 για επτά μέρες, και μετά «έκπτωση» στα 4,50. Οι κυρώσεις θα οριστούν αργότερα· η απόφαση για τη Woolworths εκκρεμεί.',
        en: '14 May 2026: the Federal Court finds Coles misled on 13 of the 14 tickets examined — e.g. dog food at $4 for months, $6 for seven days, then “discounted” to $4.50. Penalties to be set later; judgment on Woolworths is reserved.',
      },
    ],
    outcome: {
      el: 'Εύρημα ευθύνης κατά της Coles· οι κυρώσεις εκκρεμούν. Νέος υποχρεωτικός κώδικας τροφίμων με πρόστιμα έως 10% του τζίρου.',
      en: 'A liability finding against Coles; penalties pending. A new mandatory food code with fines up to 10% of turnover.',
    },
    breach: {
      el: 'Η ετικέτα στο ράφι είναι μια υπόσχεση προς όποιον δεν έχει χρόνο να θυμάται κάθε τιμή. Όταν η «έκπτωση» σχεδιάζεται για να φαίνεται φθηνό κάτι που δεν είναι, στην καρδιά μιας κρίσης ακρίβειας, η εμπιστοσύνη του αγοραστή γίνεται πρώτη ύλη του κέρδους.',
      en: 'A shelf ticket is a promise to anyone who has no time to remember every price. When a “discount” is designed to make something look cheap that is not, at the height of a cost-of-living crisis, the shopper’s trust becomes raw material for profit.',
    },
    patterns: ['fake-discount', 'crisis-margin'],
    safeguards: ['price-history', 'chain-mirror'],
    counterfactual: {
      el: 'Το Ιστορικό Κάθε Έκπτωσης θα έδειχνε δίπλα σε κάθε «Down Down» ότι η τιμή ήταν 4 δολάρια για μήνες και 6 για μόλις επτά μέρες — και η ΤΝ θα το είχε σημάνει την ίδια εβδομάδα, όχι τέσσερα χρόνια μετά. Το Κάτοπτρο της Αλυσίδας θα έκανε ορατά τα αυξανόμενα περιθώρια την ώρα που ανέβαιναν.',
      en: 'Every Discount’s History would have shown beside each “Down Down” that the price was $4 for months and $6 for just seven days — and the AI would have flagged it that same week, not four years later. The Chain Mirror would have made rising margins visible as they rose.',
    },
    antilogos: {
      el: 'Η υπόθεση αφορά παραπλανητικές ετικέτες, όχι παράνομες τιμές ή συμπαιγνία. Και οι δύο αλυσίδες επικαλέστηκαν πραγματικές αυξήσεις κόστους, ο δικαστής αμφισβήτησε ανοιχτά την αρχή στη δίκη της Woolworths, και ακόμη και για την Coles μία ετικέτα κρίθηκε μη παραπλανητική.',
      en: 'The case concerns misleading tickets, not unlawful prices or collusion. Both chains cited real cost rises, the judge openly questioned the authority at the Woolworths trial, and even for Coles one ticket was found not misleading.',
    },
    reply: {
      el: 'Γι’ αυτό η πρόταση δεν απαγορεύει καμία τιμή· απλώς δείχνει το ιστορικό της. Αν μια έκπτωση είναι πραγματική, το ιστορικό την επιβεβαιώνει. Αν δεν είναι, ο αγοραστής το βλέπει μόνος του — χωρίς να χρειαστεί τετραετής δίκη για δεκατέσσερις ετικέτες.',
      en: 'That is why the proposal bans no price; it simply shows its history. If a discount is real, the history confirms it. If not, the shopper sees it for themselves — without a four-year trial over fourteen tickets.',
    },
    lever: {
      el: 'Ζήτησε κάθε ηλεκτρονικό κατάστημα τροφίμων να δείχνει δίπλα σε κάθε έκπτωση το γράφημα τιμής των τελευταίων 90 ημερών.',
      en: 'Ask that every online grocery store show the last 90 days’ price chart beside every discount.',
    },
    scores: { harm: 6, power: 8, recurrence: 8, remedy: 9 },
    status: {
      el: 'Coles: ευθύνη σε πρώτο βαθμό (Μάιος 2026), κυρώσεις εκκρεμούν. Woolworths: καμία απόφαση — αρνείται ότι παραπλάνησε και τεκμαίρεται αθώα.',
      en: 'Coles: liable at first instance (May 2026), penalties pending. Woolworths: no finding — it denies misleading anyone and is presumed innocent.',
    },
    sources: [
      { title: 'InDaily — Coles and Woolworths face court over illusory discounts (2024)', url: 'https://www.indailysa.com.au/news/archive/2024/09/23/coles-woolworths-face-court-over-illusory-discounts' },
      { title: 'Inside Retail — ACCC urges 20 reforms to supermarket competition (2025)', url: 'https://insideretail.com.au/business/accc-urges-20-reforms-to-fix-supermarket-competition-but-says-no-silver-bullet-202503' },
      { title: 'AAP — Woolworths defends discount claims (2026)', url: 'https://aapnews.aap.com.au/news/tim-tam-turmoil-woolies-defends-fake-discount-claims' },
      { title: 'ACCC — Court finds Coles misled customers over “Down Down” claims (2026)', url: 'https://www.accc.gov.au/media-release/court-finds-that-coles-misled-customers-over-down-down-claims' },
      { title: 'Wolters Kluwer — Competition law developments in Australia, 2025', url: 'https://legalblogs.wolterskluwer.com/competition-blog/main-developments-in-competition-law-and-policy-2025-australia/' },
    ],
  },
  {
    id: 'uk-energy-suppliers-2021-2022',
    when: '2018–2024',
    place: { el: 'Ηνωμένο Βασίλειο', en: 'United Kingdom' },
    title: {
      el: 'Η ρυθμιστική αρχή ενέργειας άφησε προμηθευτές χωρίς κεφάλαια να μπουν στην αγορά — όταν ήρθε η κρίση, κάθε νοικοκυριό πλήρωσε την κατάρρευσή τους',
      en: 'The energy regulator let thinly capitalised suppliers into the market — when the crisis came, every household paid for their collapse',
    },
    harmed: {
      el: 'Όλοι οι οικιακοί πελάτες ενέργειας — το κόστος των καταρρεύσεων μοιράστηκε σε κάθε λογαριασμό, περίπου 94 λίρες ο καθένας — και οι φορολογούμενοι',
      en: 'Every household energy customer — the cost of failures was spread across every bill, about £94 each — and taxpayers',
    },
    plain: {
      el: 'Η βρετανική ρυθμιστική αρχή άφησε δεκάδες μικρούς προμηθευτές ενέργειας να λειτουργούν με ελάχιστο έλεγχο των οικονομικών τους. Όταν οι τιμές του αερίου εκτινάχθηκαν, 28 κατέρρευσαν μέσα σε έναν χρόνο — και το κόστος των 2,7 δισ. λιρών μπήκε στον λογαριασμό κάθε νοικοκυριού.',
      en: 'Britain’s regulator let dozens of small energy suppliers operate with minimal checks on their finances. When gas prices soared, 28 collapsed within a year — and the £2.7 billion cost went onto every household’s bill.',
    },
    facts: [
      {
        el: '22 Ιουνίου 2022: η Εθνική Ελεγκτική Υπηρεσία αναφέρει ότι 28 προμηθευτές κατέρρευσαν από τον Ιούνιο 2021, με κόστος για τους πελάτες περίπου 2,7 δισ. λίρες — περίπου 94 λίρες ανά πελάτη — και σχεδόν 2,4 εκατ. πελάτες μεταφέρθηκαν σε άλλους προμηθευτές.',
        en: '22 June 2022: the National Audit Office reports 28 suppliers failed since June 2021, costing customers about £2.7 billion — about £94 per customer — with nearly 2.4 million customers transferred.',
      },
      {
        el: 'Ίδια έκθεση: «η προσέγγιση της ρυθμιστικής αρχής στην αδειοδότηση και την παρακολούθηση των προμηθευτών αύξησε τον κίνδυνο και το κόστος της κατάρρευσής τους» — χαμηλός πήχης εισόδου, με αυστηρότερους ελέγχους για τους υπάρχοντες μόλις το 2021.',
        en: 'Same report: “the regulator’s approach to licensing and monitoring suppliers increased the risk and cost of them failing” — a low bar to entry, with tighter checks on existing suppliers only in 2021.',
      },
      {
        el: '26 Αυγούστου 2022: η ρυθμιστική αρχή αυξάνει το πλαφόν στις 3.549 λίρες τον χρόνο για ένα τυπικό νοικοκυριό, και ταυτόχρονα περιορίζει τη χρήση των προκαταβολών των πελατών ως κεφαλαίου κίνησης των προμηθευτών.',
        en: '26 August 2022: the regulator raises the price cap to £3,549 a year for a typical household, and at the same time restricts suppliers from using customers’ credit balances as working capital.',
      },
      {
        el: 'Νοέμβριος 2022: η Επιτροπή Δημοσίων Λογαριασμών της Βουλής βρίσκει ότι τα προβλήματα «ήταν εμφανή από το 2018 … και η ρυθμιστική αρχή άργησε να δράσει»· η αρχή απαντά ότι το δίχτυ ασφαλείας λειτούργησε.',
        en: 'November 2022: Parliament’s Public Accounts Committee finds the problems “were apparent in 2018 … and the regulator was too slow to act”; the regulator replies that its safety net worked.',
      },
      {
        el: 'Ιούνιος 2024: η Octopus Energy, που ανέλαβε τη μεγαλύτερη αποτυχημένη εταιρεία, πληρώνει στο κράτος σχεδόν 3 δισ. λίρες· η Επιτροπή εκτιμά πιθανό έλλειμμα 246 εκατ. για τους φορολογούμενους.',
        en: 'June 2024: Octopus Energy, which took over the largest failed supplier, pays the government nearly £3 billion; the Committee estimates a possible £246 million shortfall for taxpayers.',
      },
    ],
    outcome: {
      el: 'Καμία κύρωση για τη ρυθμιστική αρχή· το κόστος μοιράστηκε σε όλους τους λογαριασμούς· οι κανόνες αυστηροποιήθηκαν εκ των υστέρων.',
      en: 'No sanction on the regulator; the cost was spread across every bill; rules were tightened after the fact.',
    },
    breach: {
      el: 'Μια ρυθμιστική αρχή ενέργειας υπάρχει για να μην πληρώνουν τα νοικοκυριά τα ρίσκα που πήραν άλλοι. Όταν επιτρέπει σε εταιρείες χωρίς κεφάλαια να κρατούν τα χρήματα των πελατών, και οι προειδοποιήσεις φαίνονται χρόνια πριν, η κατάρρευση δεν είναι ατύχημα της αγοράς· είναι λογαριασμός που είχε ήδη γραφτεί.',
      en: 'An energy regulator exists so households do not pay for risks others took. When it lets firms without capital hold customers’ money, and the warnings are visible years before, the collapse is not a market accident; it is a bill already written.',
    },
    patterns: ['late-regulator', 'opaque-bill'],
    safeguards: ['resilience-watch', 'bill-breakdown'],
    counterfactual: {
      el: 'Η Εποπτεία Αντοχής θα είχε δημοσιεύσει κάθε χρόνο από το 2018 ποιοι προμηθευτές δεν θα άντεχαν ένα σοκ τιμών — και θα κλιμάκωνε δημόσια κάθε προειδοποίηση που έμενε αναπάντητη. Ο Λογαριασμός που Εξηγείται θα έδειχνε στους πελάτες τι μέρος του λογαριασμού τους πλήρωνε τις καταρρεύσεις άλλων.',
      en: 'Resilience Watch would have published every year from 2018 which suppliers could not withstand a price shock — and publicly escalated every unanswered warning. A Bill That Explains Itself would have shown customers what part of their bill paid for others’ collapses.',
    },
    antilogos: {
      el: 'Η αιτία ήταν ένα πραγματικό παγκόσμιο σοκ στο φυσικό αέριο — ακόμη και η Επιτροπή δέχθηκε ότι «παγκόσμιοι παράγοντες» προκάλεσαν την άνοδο. Δεν υπήρξε καρτέλ: πολλοί από όσους κατέρρευσαν ήταν μικροί, φθηνοί ανταγωνιστές που το ίδιο το σύστημα ενθάρρυνε. Και η διάσωση ανακτήθηκε σε μεγάλο βαθμό.',
      en: 'The trigger was a genuine global gas shock — even the Committee accepted “global factors” caused the spike. There was no cartel: many who failed were small, cheap challengers the system itself encouraged. And the rescue was largely recovered.',
    },
    reply: {
      el: 'Η πρόταση δεν ζητά από τη ρυθμιστική αρχή να προβλέψει το σοκ· ζητά να έχει ελέγξει ποιος θα αντέξει όταν έρθει. Ο ανταγωνισμός είναι πολύτιμος — αλλά ένας νέος προμηθευτής που κρατά τα χρήματα των πελατών του χωρίς κεφάλαια δεν ανταγωνίζεται· στοιχηματίζει με ξένα χρήματα.',
      en: 'The proposal does not ask the regulator to predict the shock; it asks that it has checked who can withstand it when it comes. Competition is valuable — but a new supplier holding customers’ money without capital is not competing; it is gambling with other people’s money.',
    },
    lever: {
      el: 'Ζήτησε από τη ρυθμιστική αρχή ενέργειας να δημοσιεύει ετήσιο έλεγχο αντοχής κάθε προμηθευτή ρεύματος και αερίου.',
      en: 'Ask the energy regulator to publish a yearly resilience test of every electricity and gas supplier.',
    },
    scores: { harm: 7, power: 7, recurrence: 7, remedy: 8 },
    status: {
      el: 'Καμία δικαστική υπόθεση — πρόκειται για εύρημα αποτυχίας εποπτείας από την Ελεγκτική Υπηρεσία και τη Βουλή, όχι για παράνομη συμπεριφορά κάποιου.',
      en: 'No court case — this is a supervisory-failure finding by the National Audit Office and Parliament, not unlawful conduct by anyone.',
    },
    sources: [
      { title: 'National Audit Office — The energy supplier market (2022)', url: 'https://www.nao.org.uk/press-release/the-energy-supplier-market/' },
      { title: 'Ofgem — Price cap and credit balance rules (2022)', url: 'https://www.ofgem.gov.uk/publications/direct-debits-what-you-need-know' },
      { title: 'AGCC — Public Accounts Committee finding (2022)', url: 'https://www.agcc.co.uk/news-article/mon-nov-14-the-morning-market-report' },
      { title: 'Solar Power Portal — Octopus to pay nearly £3bn for Bulb (2024)', url: 'https://www.solarpowerportal.co.uk/utility-scale-solar/octopus-energy-to-pay-nearly-3-billion-to-uk-government-for-bulb' },
    ],
  },
]
