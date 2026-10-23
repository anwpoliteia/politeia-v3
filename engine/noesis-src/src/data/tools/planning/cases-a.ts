// ΙΠΠΟΔΑΜΟΣ — cases 1–5: three Greek, then Grenfell and Surfside. Facts checked
// against sources on 2026-09-30. The office in the headline, never the
// officer; the harmed always named; presumption of innocence for open cases.

import type { ToolCase } from '../types'

export const CASES_A: readonly ToolCase[] = [
  {
    id: 'rhodes-2025',
    when: '2024–2026',
    place: { el: 'Ρόδος', en: 'Rhodes' },
    title: {
      el: 'Η πολεοδομία της Ρόδου: στελέχη αδειών και ελέγχων κατηγορούνται ότι πουλούσαν άδειες δόμησης',
      en: 'The Rhodes planning office: permit and inspection heads accused of selling building permits',
    },
    harmed: {
      el: 'Ιδιοκτήτες, ξενοδόχοι και μηχανικοί που φέρονται να πιέστηκαν να πληρώσουν — και το κοινό, μέσω αδειών και ελέγχων που φέρονται να αγοράστηκαν',
      en: 'Owners, hoteliers and engineers allegedly pressed to pay — and the public, through permits and inspections allegedly bought',
    },
    plain: {
      el: 'Στελέχη της πολεοδομίας της Ρόδου κατηγορούνται ότι ζητούσαν χρήματα για άδειες και πιστοποιήσεις, με τη μεσολάβηση ιδιωτών μηχανικών. Η αστυνομία βρήκε μετρητά κρυμμένα σε κατσαρόλες και στον απορροφητήρα. Όλοι αρνούνται τις κατηγορίες.',
      en: 'Rhodes planning officials are accused of demanding money for permits and certifications, brokered by private engineers. Police found cash hidden in cooking pots and a cooker hood. All deny the charges.',
    },
    facts: [
      {
        el: 'Ιούνιος 2024: η Διεύθυνση Εσωτερικών Υποθέσεων της Αστυνομίας ξεκινά έρευνα μετά από καταγγελίες.',
        en: 'June 2024: the police Internal Affairs Directorate opens an investigation after whistleblower complaints.',
      },
      {
        el: '19–21 Μαρτίου 2025: συλλαμβάνονται επτά άτομα — πέντε στελέχη της πολεοδομίας, ένας ιδιώτης αρχιτέκτονας και ένας πολιτικός μηχανικός — και πάνω από 20 κατηγορούνται για αδικήματα από παράβαση καθήκοντος ως δωροδοκία και πλαστογραφία. Κατασχέθηκαν πάνω από 600.000 ευρώ και 77 χρυσές λίρες.',
        en: '19–21 March 2025: seven are arrested — five planning officials, a private architect and a private civil engineer — and more than 20 are charged with offences from breach of duty to bribery and forgery. Over €600,000 and 77 gold sovereigns are seized.',
      },
      {
        el: 'Μάρτιος 2025: στο σπίτι της προϊσταμένης του τμήματος αδειών η αστυνομία αναφέρει 55.000 ευρώ στον απορροφητήρα της κουζίνας και 26.500 ευρώ σε κατσαρόλα. Στην απολογία της αποδίδει το σύνολο σε οικογενειακές αποταμιεύσεις και πωλήσεις ακινήτων των γονιών της.',
        en: 'March 2025: at the home of the permits department head, police report €55,000 in the kitchen cooker hood and €26,500 in a cooking pot. In her defence she attributes it all to family savings and her parents’ property sales.',
      },
      {
        el: '15 Απριλίου 2025: η δικογραφία περιλαμβάνει 7 βασικούς κατηγορουμένους, 21 ακόμη που καλούνται σε απολογία και 34 διακριτές υποθέσεις — άδειες με ελλιπείς φακέλους, δωροδοκίες 1.000–30.000 ευρώ, ψευδείς βεβαιώσεις, άδειες ανακαίνισης ξενοδοχείων.',
        en: '15 April 2025: the case file covers 7 main defendants, 21 more due to give statements, and 34 distinct alleged cases — permits with incomplete files, bribes of €1,000–€30,000, false certifications, hotel renovation permits.',
      },
      {
        el: 'Μάρτιος 2026: διενεργείται ΕΔΕ για πειθαρχικές ευθύνες και η προϊσταμένη βρίσκεται σε αναστολή υπηρεσίας· τον Ιούνιο 2026 ανοίγει νέα έρευνα από ευρήματα επισυνδέσεων.',
        en: 'March 2026: a sworn administrative inquiry into disciplinary liability is running and the permits head is suspended from service; in June 2026 a new probe opens from incidental wiretap findings.',
      },
    ],
    outcome: {
      el: 'Κακουργηματική δίωξη επτά ατόμων και πειθαρχική έρευνα· δεν έχει οριστεί δίκη.',
      en: 'Felony prosecution of seven and a disciplinary inquiry; no trial date set.',
    },
    breach: {
      el: 'Η άδεια δόμησης είναι η στιγμή που το κράτος λέει «ελέγξαμε». Αν η υπογραφή έχει τιμή, η φράση δεν σημαίνει πια τίποτα — και ο έντιμος πολίτης, που δεν πληρώνει, περιμένει πίσω από όποιον πληρώνει.',
      en: 'A building permit is the moment the state says “we checked.” If the signature has a price, the phrase means nothing — and the honest citizen who does not pay waits behind whoever does.',
    },
    patterns: ['bribed-permit', 'broker', 'rubber-stamp'],
    safeguards: ['signed-permit', 'random-desk', 'lifestyle-check'],
    counterfactual: {
      el: 'Ο Τυχαίος Χειριστής θα είχε κόψει τον δρόμο του μεσάζοντα: κανείς μηχανικός δεν θα ήξερε σε ποιον υπάλληλο θα πάει ο φάκελος. Η Υπογραφή στον Χάρτη θα έδειχνε ποιος ενέκρινε άδειες με ελλιπείς φακέλους, και οι Εὔθυναι θα είχαν δει την απόκλιση περιουσίας χρόνια πριν από την κατσαρόλα.',
      en: 'The Random Desk would have cut out the broker: no engineer would know which official would get the file. Signed on the Map would have shown who approved permits with incomplete files, and the Euthynai would have seen the wealth gap years before the cooking pot.',
    },
    antilogos: {
      el: 'Όλοι οι κατηγορούμενοι αρνούνται· η προϊσταμένη τεκμηρίωσε τα χρήματα με φορολογικά έγγραφα, άλλοι επικαλέστηκαν κέρδη καζίνο ή δώρα γάμου. Τα ποσά που κατασχέθηκαν διαφέρουν από πηγή σε πηγή, και η αποφυλάκιση υπό όρους είναι φυσιολογική πριν από τη δίκη.',
      en: 'All defendants deny it; the permits head backed the money with tax papers, others cited casino winnings or wedding gifts. Seized totals vary by source, and release on conditions is normal before trial.',
    },
    reply: {
      el: 'Ακριβώς γι’ αυτό χρειάζεται τακτικός έλεγχος περιουσίας: αν τα χρήματα είναι νόμιμα, ένας ελεγκτής θα το είχε διαπιστώσει ήσυχα, χωρίς συλλήψεις και πρωτοσέλιδα. Η πρόταση προστατεύει και τον αθώο υπάλληλο — του δίνει έναν τρόπο να αποδείξει ότι είναι αθώος πριν γίνει ύποπτος.',
      en: 'That is exactly why regular asset checks are needed: if the money is lawful, an auditor would have established it quietly, without arrests or headlines. The proposal also protects the innocent official — it gives them a way to prove innocence before becoming a suspect.',
    },
    lever: {
      el: 'Ζήτησε από τον δήμο σου να δημοσιεύει κάθε άδεια δόμησης με τον υπάλληλο που την υπέγραψε και τον χρόνο που χρειάστηκε.',
      en: 'Ask your municipality to publish every building permit with the official who signed it and the time it took.',
    },
    scores: { harm: 5, power: 5, recurrence: 9, remedy: 9 },
    status: {
      el: 'Προδικασία· δεν έχει οριστεί δίκη. Όλοι οι κατηγορούμενοι αρνούνται και τεκμαίρονται αθώοι.',
      en: 'Pre-trial; no trial date set. All defendants deny the charges and are presumed innocent.',
    },
    sources: [
      { title: 'To Vima — Corruption scandal unfolds in Rhodes urban planning authority (2025)', url: 'https://www.tovima.com/society/corruption-scandal-unfolds-in-rhodes-urban-planning-authority/' },
      { title: 'TRT World — Greek police arrest seven in Rhodes permit probe (2025)', url: 'https://www.trtworld.com/article/c7907807733f' },
      { title: 'thetoc.gr — Defendants released on conditions; their defence (2025)', url: 'https://www.thetoc.gr/koinwnia/article/skandalo-stin-poleodomia-rodou-eleutheroi-me-orous-oi-katigoroumenoi---ti-upostirixan-stis-apologies-tous/' },
      { title: 'Dimokratiki — 7 main defendants, 34 cases (2025)', url: 'https://www.dimokratiki.gr/15-04-2025/skandalo-poleodomias-rodou-7-vasiki-katigoroumeni-21-epikimenes-apologies-ke-34-vasikes-ypothesis-diafthoras/' },
      { title: 'Dimokratiki — Disciplinary inquiry into accused officials (2026)', url: 'https://www.dimokratiki.gr/17-03-2026/skandalo-poleodomias-se-pliri-exelixi-e-d-e-gia-pitharchikes-efthynes-stous-katigoroumenous-ypallilous/' },
    ],
  },
  {
    id: 'chalkidiki-2024',
    when: '2024–2026',
    place: { el: 'Χαλκιδική', en: 'Chalkidiki' },
    title: {
      el: 'Οι πολεοδομίες της Χαλκιδικής: διευθυντές και μέλη συμβουλίου αρχιτεκτονικής κατηγορούνται για «ταρίφα» στη νομιμοποίηση αυθαιρέτων',
      en: 'Chalkidiki planning offices: directors and architecture-council members accused of charging a tariff to legalise illegal builds',
    },
    harmed: {
      el: 'Το κοινό και οι έντιμοι αιτούντες — αυθαίρετα σε τουριστικές περιοχές εκτός σχεδίου φέρονται να εγκρίθηκαν έναντι αμοιβής',
      en: 'The public and honest applicants — illegal builds in off-plan tourist areas allegedly approved for payment',
    },
    plain: {
      el: 'Ένα ανώνυμο email και ένα τηλεφώνημα οδήγησαν σε 21 συλλήψεις σε πολεοδομίες της Χαλκιδικής, με κατηγορίες για τιμοκατάλογο δωροδοκιών κωδικοποιημένων ως «αυγά» και «χήνες». Ένας πρώην δήμαρχος φέρεται να δήλωνε νέα κτίρια ως «προ του 2011» για να χωρέσουν στην τακτοποίηση.',
      en: 'An anonymous email and a phone call led to 21 arrests in Chalkidiki planning offices, over an alleged price list of bribes coded as “eggs” and “geese.” A former mayor is alleged to have declared new buildings “pre-2011” so they could be legalised.',
    },
    facts: [
      {
        el: '24 Απριλίου 2024: ανώνυμο email στις Εσωτερικές Υποθέσεις της Αστυνομίας καταγγέλλει δωροδοκίες στην πολεοδομία της Νέας Προποντίδας· γύρω στον Ιούνιο ένα ανώνυμο τηλεφώνημα κατονομάζει υπάλληλο της Σιθωνίας.',
        en: '24 April 2024: an anonymous email to police Internal Affairs alleges bribes at the Nea Propontida planning office; around June an anonymous caller names a Sithonia official.',
      },
      {
        el: '10 Δεκεμβρίου 2024: συλλαμβάνονται 21 άτομα — ένας πρώην δήμαρχος Σιθωνίας, 2 διευθυντές πολεοδομίας, 4 υπάλληλοι, 2 συγγενείς και 12 ιδιώτες μηχανικοί, τοπογράφοι και αρχιτέκτονες — και κατασχέθηκαν πάνω από 1 εκατ. ευρώ, τα 700.000 περίπου σε σπίτια υπαλλήλων.',
        en: '10 December 2024: 21 are arrested — a former mayor of Sithonia, 2 planning directors, 4 officials, 2 relatives and 12 private engineers, surveyors and architects — and over €1 million is seized, about €700,000 of it in officials’ homes.',
      },
      {
        el: 'Η φερόμενη «ταρίφα»: 250–1.000 ευρώ για να επισπευστεί ένας φάκελος και 1.000–20.000 ευρώ για έγκριση αυθαιρέτου. Η αστυνομία κατέγραψε 92 υποθέσεις με παράνομο όφελος πάνω από 213.100 ευρώ.',
        en: 'The alleged tariff: €250–€1,000 to speed up a file and €1,000–€20,000 to approve an illegal build. Police documented 92 cases with illicit benefits of over €213,100.',
      },
      {
        el: '11 Δεκεμβρίου 2024: ο πρώην δήμαρχος, με τεχνικό γραφείο, φέρεται να δήλωνε κτίρια μετά το 2011 ως «προ του 2011» ώστε να μπουν στην τακτοποίηση αυθαιρέτων, με κάλυψη από υπάλληλο της πολεοδομίας.',
        en: '11 December 2024: the former mayor, running a technical office, is alleged to have declared post-2011 buildings as “pre-2011” so they could enter the legalisation scheme, with cover from a planning official.',
      },
      {
        el: '13–16 Δεκεμβρίου 2024: άλλα 86 πρόσωπα αναφέρονται στη δικογραφία και ο έλεγχος επεκτείνεται σε τέσσερις ακόμη πολεοδομίες· και οι 21 αφήνονται ελεύθεροι, κάποιοι χωρίς όρους.',
        en: '13–16 December 2024: another 86 people are named in the file and scrutiny widens to four more planning offices; all 21 are released, some without conditions.',
      },
    ],
    outcome: {
      el: 'Κακουργηματικές διώξεις για εγκληματική οργάνωση, δωροδοκία και ξέπλυμα· η πολεοδομία Σιθωνίας έκλεισε για έναν μήνα για έλεγχο αρχείων.',
      en: 'Felony prosecutions for criminal organisation, bribery and money laundering; the Sithonia planning office was shut for a month for a records review.',
    },
    breach: {
      el: 'Η τακτοποίηση αυθαιρέτων έχει μια ημερομηνία-όριο για να μη γίνει πρόσκληση για νέα αυθαίρετα. Όταν η ίδια η ημερομηνία πουλιέται, ο νόμος δεν παραβιάζεται απλώς — μετατρέπεται σε υπηρεσία επί πληρωμή για όποιον χτίζει σε δάσος και ακτή.',
      en: 'The legalisation scheme has a cut-off date so it does not become an invitation to new illegal building. When the date itself is for sale, the law is not merely broken — it becomes a paid service for whoever builds in forests and on coasts.',
    },
    patterns: ['bribed-permit', 'false-date', 'officials-shielded'],
    safeguards: ['random-desk', 'sky-check', 'suspension'],
    counterfactual: {
      el: 'Το Μάτι από Ψηλά θα είχε διαψεύσει κάθε δήλωση «προ του 2011» σε δευτερόλεπτα: το αρχείο δορυφορικών εικόνων δείχνει πότε υψώθηκε κάθε κτίριο. Ο Τυχαίος Χειριστής θα έκανε άχρηστη την «ταρίφα», και το Όχι στην Ίδια Καρέκλα θα κρατούσε τους διωκόμενους μακριά από τις υπογραφές ως τη δίκη.',
      en: 'The Eye from Above would have disproved every “pre-2011” declaration in seconds: the satellite archive shows when each building rose. The Random Desk would have made the tariff useless, and Not in the Same Chair would have kept those prosecuted away from signatures until trial.',
    },
    antilogos: {
      el: 'Η προϊσταμένη αδειών δήλωσε ότι «δεν εκδόθηκε καμία άδεια που παραβιάζει τον νόμο»· ένας υπάλληλος παραδέχθηκε «γρηγορόσημα» μόνο για νόμιμα έγγραφα. Οι τεκμηριωμένες δωροδοκίες είναι περίπου 213.000 ευρώ — πολύ λιγότερα από το 1 εκατ. που κατασχέθηκε — και οι 86 της δικογραφίας δεν διώκονται.',
      en: 'The permits head said “no licence was issued that violates the law”; one official admitted “speed-up fees” but only for lawful paperwork. Documented bribes total about €213,000 — far less than the €1 million seized — and the 86 in the file are not prosecuted.',
    },
    reply: {
      el: 'Και «γρηγορόσημο» για νόμιμο έγγραφο σημαίνει ότι ο πολίτης που δεν πληρώνει περιμένει περισσότερο — αυτό είναι ήδη το πρόβλημα. Ένας δημόσιος χρόνος εξέτασης για κάθε φάκελο το εξαφανίζει χωρίς να χρειαστεί να αποδείξει κανείς τίποτα για κανέναν.',
      en: 'Even a “speed-up fee” for lawful paperwork means the citizen who does not pay waits longer — that is already the problem. A public processing time for every file makes it vanish without anyone needing to prove anything about anyone.',
    },
    lever: {
      el: 'Ζήτησε κάθε δήλωση «προ του 2011» σε τακτοποίηση να διασταυρώνεται με το δημόσιο αρχείο αεροφωτογραφιών.',
      en: 'Ask that every “pre-2011” declaration in a legalisation be cross-checked against the public aerial-photo archive.',
    },
    scores: { harm: 5, power: 6, recurrence: 9, remedy: 9 },
    status: {
      el: 'Προδικασία· δεν βρέθηκε ημερομηνία δίκης ή απόφαση. Όλοι τεκμαίρονται αθώοι.',
      en: 'Pre-trial; no trial date or verdict found. All are presumed innocent.',
    },
    sources: [
      { title: 'enikos.gr — An email and an anonymous call exposed the ring (2024)', url: 'https://www.enikos.gr/society/chalkidiki-ena-email-kai-ena-agnosto-tilefonima-apokalypsan-ti-drasi-tou-kyklomatos-diafthoras-se-poleodomies-ta-avga-kai-oi-chines/2278790/' },
      { title: 'MEGA — 21 arrests and over €1m seized (2024)', url: 'https://www.megatv.com/2024/12/11/xalkidiki-diafthora-mamouth-se-poleodomies-21-syllipseis-kai-pano-apo-1-ekatommyrio-eyro-i-leia/' },
      { title: 'aftodioikisi.gr — The former mayor’s alleged role (2024)', url: 'https://www.aftodioikisi.gr/ota/dimoi/kykloma-poleodomion-poios-itan-o-rolos-toy-proin-dimarchoy/' },
      { title: 'Ta Nea — All 21 released (2024)', url: 'https://www.tanea.gr/2024/12/16/greece/kykloma-poleodomon-sti-xalkidiki-eleytheroi-oi-21-syllifthentes/' },
    ],
  },
  {
    id: 'greece-amnesties-2011-2026',
    when: '2011–2026',
    place: { el: 'Ελλάδα, πανελλαδικά', en: 'Greece, nationwide' },
    title: {
      el: 'Η Βουλή και το υπουργείο Περιβάλλοντος: επαναλαμβανόμενες τακτοποιήσεις αυθαιρέτων επί πληρωμή, που το ΣτΕ ακυρώνει ξανά και ξανά',
      en: 'Parliament and the environment ministry: repeated paid amnesties for illegal buildings, struck down by the Council of State again and again',
    },
    harmed: {
      el: 'Γείτονες και κοινότητες που χάνουν την πολεοδομική προστασία, πολίτες που κέρδισαν στα δικαστήρια αλλά το κτίριο έμεινε, και το περιβάλλον που το Σύνταγμα προστατεύει',
      en: 'Neighbours and communities who lose planning protection, citizens who won in court yet saw the building stay, and the environment the Constitution protects',
    },
    plain: {
      el: 'Εδώ και δεκαπέντε χρόνια η Ελλάδα νομιμοποιεί αυθαίρετα με πρόστιμο. Το ΣτΕ έχει κρίνει επανειλημμένα ότι αυτό παραβιάζει το Σύνταγμα — και η προθεσμία παρατείνεται ξανά. Το 2026 έκρινε ότι ακόμη και κτίρια με άδειες ακυρωμένες από δικαστήρια νομιμοποιούνταν σχεδόν αυτόματα.',
      en: 'For fifteen years Greece has legalised illegal buildings for a fee. The Council of State has repeatedly held that this breaches the Constitution — and the deadline is extended again. In 2026 it found that even buildings whose permits courts had annulled were being legalised almost automatically.',
    },
    facts: [
      {
        el: '2014: η Ολομέλεια του ΣτΕ (1118/2014) κρίνει αντισυνταγματική την τακτοποίηση αυθαιρέτων των νόμων 4014/2011 και 4030/2011, επειδή επέτρεπε αόριστη διατήρηση χωρίς καμία πολεοδομική αξιολόγηση.',
        en: '2014: the Council of State Plenary (1118/2014) holds the legalisation under Laws 4014/2011 and 4030/2011 unconstitutional, because it allowed indefinite retention without any planning assessment.',
      },
      {
        el: 'Δεκέμβριος 2024: το ΣτΕ κρίνει αντισυνταγματικά τα «μπόνους» του Νέου Οικοδομικού Κανονισμού που επέτρεπαν αυξήσεις ύψους και δόμησης — όχι όμως αναδρομικά, οπότε οι άδειες που εκδόθηκαν ισχύουν.',
        en: 'December 2024: the Council of State holds the New Building Regulation “bonuses” allowing extra height and density unconstitutional — but not retroactively, so permits already issued stay valid.',
      },
      {
        el: 'Οκτώβριος 2025: με τον νόμο 4495/2017 πάνω από 1,7 εκατομμύρια ιδιοκτήτες έχουν τακτοποιήσει παραβάσεις των κατηγοριών 1–4· η τακτοποίηση των μεγάλων παραβάσεων (κατηγορία 5) είναι παγωμένη από το 2020.',
        en: 'October 2025: under Law 4495/2017 more than 1.7 million owners have legalised category 1–4 violations; legalisation of the large category 5 violations has been frozen since 2020.',
      },
      {
        el: 'Ιανουάριος 2026: τροπολογία παρατείνει την προθεσμία για τις κατηγορίες 1–4 από τις 31 Μαρτίου 2026 στις 31 Μαρτίου 2028.',
        en: 'January 2026: an amendment extends the deadline for categories 1–4 from 31 March 2026 to 31 March 2028.',
      },
      {
        el: '20 Αυγούστου 2026: η Ολομέλεια του ΣτΕ (1182 και 1183/2026) κρίνει αντισυνταγματική διάταξη που επέτρεπε τη σχεδόν αυτόματη τακτοποίηση κτιρίων με άδειες ακυρωμένες από τελεσίδικες δικαστικές αποφάσεις, επειδή «υπονομεύει τις δικαστικές αποφάσεις».',
        en: '20 August 2026: the Council of State Plenary (1182 and 1183/2026) holds unconstitutional a provision letting buildings whose permits were annulled by final court rulings be legalised almost automatically, because it “undermines court decisions.”',
      },
    ],
    outcome: {
      el: 'Η προθεσμία για μικρές και μεσαίες παραβάσεις παρατείνεται συνεχώς (τώρα ως το 2028)· το δικαστήριο ακυρώνει συνεχώς τις ευρύτερες διατάξεις.',
      en: 'The window for small and medium violations keeps being extended (now to 2028); the court keeps striking down the widest provisions.',
    },
    breach: {
      el: 'Η πολεοδομία υπάρχει για να προστατεύει τη γη που ανήκει σε όλους. Όταν η παράβαση γίνεται φόρος — πληρώνεις και μένει — και ο νόμος ξαναγράφεται κάθε φορά που το ανώτατο δικαστήριο τον ακυρώνει, ο κανόνας έχει πάψει να είναι κανόνας· είναι τιμοκατάλογος.',
      en: 'Planning exists to protect land that belongs to all. When a violation becomes a tax — pay and it stays — and the law is rewritten each time the highest court annuls it, the rule has stopped being a rule; it is a price list.',
    },
    patterns: ['amnesty', 'court-ignored', 'false-date'],
    safeguards: ['amnesty-audit', 'court-enforce', 'sky-check'],
    counterfactual: {
      el: 'Το Καμία Τακτοποίηση Χωρίς Έλεγχο θα κρατούσε την ευκολία για τις μικρές παραβάσεις και θα ζητούσε στατικό έλεγχο για τις μεγάλες — ακριβώς την πολεοδομική αξιολόγηση που ζήτησε το ΣτΕ το 2014. Η Απόφαση Εκτελείται θα είχε σημάνει τη διάταξη για τις ακυρωμένες άδειες τη μέρα που κατατέθηκε, όχι εννέα χρόνια μετά.',
      en: 'No Amnesty Without Inspection would have kept things easy for small violations and required a structural check for large ones — exactly the planning assessment the Council of State asked for in 2014. The Ruling Is Enforced would have flagged the provision on annulled permits the day it was tabled, not nine years later.',
    },
    antilogos: {
      el: 'Οι περισσότερες από τις 1,7 εκατ. τακτοποιήσεις αφορούν μικρές παραβάσεις, και οι ιδιοκτήτες πληρώνουν πρόστιμα που χρηματοδοτούν το κράτος. Χωρίς τακτοποίηση τα ακίνητα δεν πωλούνται, δεν κληρονομούνται, δεν ανακαινίζονται — και το ίδιο το κράτος είναι παραβάτης σε σχολεία, δημαρχεία και νοσοκομεία.',
      en: 'Most of the 1.7 million legalisations are small violations, and owners pay fines that fund the state. Without legalisation properties cannot be sold, inherited or renovated — and the state itself is a violator in schools, town halls and hospitals.',
    },
    reply: {
      el: 'Σωστά — γι’ αυτό η πρόταση δεν αγγίζει τις μικρές παραβάσεις. Αγγίζει δύο πράγματα: τα μεγάλα αυθαίρετα που νομιμοποιούνται χωρίς να ελέγξει κανείς αν στέκουν, και τις δικαστικές αποφάσεις που ακυρώνονται με νόμο. Κανένα από τα δύο δεν είναι «ανάγκη της αγοράς»· είναι εξαίρεση για όσους έχουν τη δύναμη να την πετύχουν.',
      en: 'True — which is why the proposal leaves small violations alone. It touches two things: large illegal builds legalised without anyone checking they stand, and court rulings overridden by statute. Neither is a “market necessity”; each is an exception for those with the power to obtain it.',
    },
    lever: {
      el: 'Ζήτησε κάθε νέα ρύθμιση τακτοποίησης να συνοδεύεται από δημόσιο έλεγχο συμβατότητας με τις αποφάσεις του ΣτΕ πριν ψηφιστεί.',
      en: 'Ask that every new legalisation rule come with a public check of its compatibility with Council of State rulings before it is voted on.',
    },
    scores: { harm: 7, power: 9, recurrence: 10, remedy: 7 },
    status: {
      el: 'Ζήτημα πολιτικής — κανένα πρόσωπο δεν κατηγορείται. Οι κατηγορίες 1–4 ισχύουν ως το 2028· η κατηγορία 5 παραμένει παγωμένη.',
      en: 'A policy case — no individual is accused. Categories 1–4 remain open to 2028; category 5 stays frozen.',
    },
    sources: [
      { title: 'Nomos+Physis — CoS Plenary 1118/2014', url: 'https://nomosphysis.org.gr/13645/ste-ol-11182014-antisyntagmatikes-oi-diatakseis-toy-n-40142011-kai-toy-n-40302011-gia-tin-taktopoiisi-aythaireton-kataskeyon/' },
      { title: 'OT — Thousands of Greek properties face legal limbo (2025)', url: 'https://www.ot.gr/2025/10/10/english-edition/thousands-of-greek-properties-face-legal-limbo-by-2026/' },
      { title: 'To Vima — Top court rules new building regulations unconstitutional (2024)', url: 'https://www.tovima.com/society/greeces-top-court-rules-new-building-regulations-unconstitutional/' },
      { title: 'Taxheaven — Legalisation deadline extended (2026)', url: 'https://www.taxheaven.gr/news/72648/paratash-prooesmiwn-gia-taktopoihsh-ayoairetwn-kai-hlektronikhs-taytothtas-gia-dhmosia-ktiria-klp' },
      { title: 'myota.gr — CoS: legalisation of buildings with annulled permits unconstitutional (2026)', url: 'https://www.myota.gr/2026/08/20/%CF%83%CF%84%CE%B5-%CE%B1%CE%BD%CF%84%CE%B9%CF%83%CF%85%CE%BD%CF%84%CE%B1%CE%B3%CE%BC%CE%B1%CF%84%CE%B9%CE%BA%CE%AE-%CE%B7-%CF%84%CE%B1%CE%BA%CF%84%CE%BF%CF%80%CE%BF%CE%AF%CE%B7%CF%83%CE%B7-%CE%B1/' },
    ],
  },
  {
    id: 'grenfell-2017',
    when: '2017–2026',
    place: { el: 'Λονδίνο, Αγγλία', en: 'London, England' },
    title: {
      el: 'Κατασκευαστές υλικών, πολεοδομικός έλεγχος και ρυθμιστές: εύφλεκτη επένδυση με χειραγωγημένες δοκιμές εγκρίθηκε σε δημοτικό πύργο κατοικιών',
      en: 'Cladding makers, building control and regulators: combustible cladding sold with manipulated tests and approved on a council tower',
    },
    harmed: {
      el: '72 νεκροί — ένοικοι του δημοτικού πύργου Γκρένφελ',
      en: '72 dead — residents of the council-owned Grenfell Tower',
    },
    plain: {
      el: 'Η φωτιά σε έναν 24όροφο δημοτικό πύργο εξαπλώθηκε μέσα σε λεπτά επειδή η νέα του επένδυση ήταν εξαιρετικά εύφλεκτη. Η δημόσια έρευνα βρήκε ότι και οι 72 θάνατοι ήταν «αποτρέψιμοι» — αποτέλεσμα δεκαετιών αποτυχίας και «συστηματικής ανεντιμότητας» κατασκευαστών υλικών. Εννέα χρόνια μετά, κανείς δεν έχει κατηγορηθεί.',
      en: 'The fire in a 24-storey council tower spread within minutes because its new cladding was highly combustible. The public inquiry found all 72 deaths “avoidable” — the result of decades of failure and “systematic dishonesty” by product makers. Nine years on, no one has been charged.',
    },
    facts: [
      {
        el: '14 Ιουνίου 2017: η φωτιά εξαπλώνεται στον 24όροφο πύργο εξαιτίας της εξαιρετικά εύφλεκτης επένδυσης· 72 άνθρωποι πεθαίνουν.',
        en: '14 June 2017: fire spreads through the 24-storey tower because of highly combustible cladding; 72 people die.',
      },
      {
        el: '4 Σεπτεμβρίου 2024: η τελική έκθεση της δημόσιας έρευνας κρίνει όλους τους θανάτους «αποτρέψιμους», αποτέλεσμα «δεκαετιών αποτυχίας» κυβέρνησης και κλάδου, και «συστηματικής ανεντιμότητας» κατασκευαστών που χειραγώγησαν δοκιμές και παραπλάνησαν την αγορά.',
        en: '4 September 2024: the inquiry’s final report finds all the deaths “avoidable,” the result of “decades of failure” by government and industry, and of “systematic dishonesty” by manufacturers who manipulated tests and misled the market.',
      },
      {
        el: 'Η έκθεση κατονομάζει τους κατασκευαστές Arconic, Celotex και Kingspan· οι ευθύνες απλώνονται σε αρχιτέκτονες, εργολάβους, συμβούλους, τον πολεοδομικό έλεγχο του δήμου και τους εθνικούς ρυθμιστές.',
        en: 'The report names manufacturers Arconic, Celotex and Kingspan; responsibility spreads across architects, contractors, consultants, the council’s building control and national regulators.',
      },
      {
        el: 'Φεβρουάριος 2025: η κυβέρνηση δέχεται 49 από τις 58 συστάσεις πλήρως (τις 9 επί της αρχής) και ανοίγει έρευνες αποκλεισμού από δημόσιες συμβάσεις για 7 εταιρείες.',
        en: 'February 2025: the government accepts 49 of 58 recommendations in full (9 in principle) and opens debarment investigations into 7 firms.',
      },
      {
        el: 'Μάιος 2026: η αστυνομία δηλώνει ότι έως 57 πρόσωπα είναι ύποπτα· οι αποφάσεις για διώξεις δεν έχουν ληφθεί.',
        en: 'May 2026: police say up to 57 individuals are suspects; charging decisions have not been made.',
      },
    ],
    outcome: {
      el: 'Η δημόσια έρευνα ολοκληρώθηκε· εννέα χρόνια μετά, καμία δίωξη.',
      en: 'The public inquiry is complete; nine years on, no charges.',
    },
    breach: {
      el: 'Ο πολεοδομικός έλεγχος και η πιστοποίηση υλικών υπάρχουν για ένα πράγμα: να μην καίγεται ένα κτίριο σαν δαυλός. Όταν οι δοκιμές χειραγωγούνται και ο έλεγχος υπογράφει χωρίς να ρωτήσει, οι ένοικοι πληρώνουν με τη ζωή τους την εμπιστοσύνη τους σε μια υπογραφή που δεν είδαν ποτέ.',
      en: 'Building control and material certification exist for one thing: that a building does not burn like a torch. When tests are manipulated and control signs without asking, the residents pay with their lives for trusting a signature they never saw.',
    },
    patterns: ['false-test', 'rubber-stamp', 'ignored-warning'],
    safeguards: ['material-trace', 'random-inspection'],
    counterfactual: {
      el: 'Το Ίχνος Υλικού θα είχε ξαναδοκιμάσει τυχαία δείγματα επένδυσης από την αγορά σε ανεξάρτητο εργαστήριο — και ένα αποτέλεσμα που δεν επαναλαμβανόταν θα σήμαινε κάθε κτίριο με το ίδιο υλικό πριν από τη φωτιά. Η Αιφνίδια Αυτοψία θα είχε στείλει επιθεωρητή σε έναν πύργο κατοικιών, με προτεραιότητα, πριν από την ανακαίνιση.',
      en: 'Material Trace would have retested random cladding samples from the market in an independent lab — and a result that did not repeat would have flagged every building with the same material before the fire. The Unannounced Inspection would have sent an inspector, as a priority, to a residential tower before the refurbishment.',
    },
    antilogos: {
      el: 'Η Arconic απορρίπτει ότι πούλησε μη ασφαλές προϊόν· η Kingspan λέει ότι το δικό της υλικό ήταν περίπου το 5% της μόνωσης και «αμελητέο» για τη φωτιά. Οι ευθύνες είναι διάχυτες — δεν υπάρχει ένας δωροδοκημένος υπάλληλος.',
      en: 'Arconic rejects any claim it sold an unsafe product; Kingspan says its material was about 5% of the insulation and “immaterial” to the fire. Blame is diffuse — there is no single bribed official.',
    },
    reply: {
      el: 'Αυτό ακριβώς είναι το δίδαγμα: η διάχυτη ευθύνη είναι ο τρόπος με τον οποίο 72 θάνατοι καταλήγουν χωρίς κανέναν κατηγορούμενο. Η πρόταση δεν χρειάζεται δωροδοκία για να λειτουργήσει· χρειάζεται μόνο κάθε υπογραφή να είναι καταγεγραμμένη και κάθε δοκιμή να επαναλαμβάνεται από κάποιον που δεν πληρώνεται από τον κατασκευαστή.',
      en: 'That is precisely the lesson: diffuse responsibility is how 72 deaths end with no one charged. The proposal does not need bribery to work; it needs only that every signature be recorded and every test be repeated by someone the manufacturer does not pay.',
    },
    lever: {
      el: 'Ζήτησε δημόσιο μητρώο των υλικών επένδυσης και μόνωσης σε κάθε ψηλό κτίριο της πόλης σου, με τα πιστοποιητικά τους.',
      en: 'Ask for a public register of the cladding and insulation on every high-rise in your city, with their certificates.',
    },
    scores: { harm: 10, power: 8, recurrence: 7, remedy: 8 },
    status: {
      el: 'Ποινική έρευνα σε εξέλιξη· καμία δίωξη. Όλοι τεκμαίρονται αθώοι.',
      en: 'Criminal investigation ongoing; no charges. All are presumed innocent.',
    },
    sources: [
      { title: 'Fortune / AP — Grenfell inferno was culmination of decades of failure (2024)', url: 'https://fortune.com/europe/2024/09/04/londons-grenfell-inferno-was-culmination-of-decades-of-failure-by-u-k-s-construction-industry-and-government' },
      { title: 'EWN / AFP — Grenfell inquiry final report (2024)', url: 'https://www.ewn.co.za/2024/09/04/grenfell-inferno-culmination-of-decades-of-failure-uk-inquiry' },
      { title: 'Dezeen — Debarment investigations into seven firms (2025)', url: 'https://www.dezeen.com/2025/02/28/grenfell-tower-debarment-investigation/' },
      { title: 'Construction Management — Manufacturers respond to the inquiry', url: 'https://constructionmanagement.co.uk/grenfell-manufacturers-respond-to-the-inquirys-report/' },
      { title: 'Coast FM / PA — Up to 57 people could be charged (2026)', url: 'https://www.coastfm.co.uk/news/uk/up-to-57-people-could-be-charged' },
    ],
  },
  {
    id: 'surfside-2021',
    when: '2018–2026',
    place: { el: 'Σέρφσαϊντ, Φλόριντα', en: 'Surfside, Florida' },
    title: {
      el: 'Η υπηρεσία δόμησης της πόλης: μηχανικός προειδοποίησε για «σοβαρή δομική ζημιά» — ο αρμόδιος είπε στους ενοίκους ότι το κτίριο ήταν «σε πολύ καλή κατάσταση»',
      en: 'The town building office: an engineer warned of “major structural damage” — the official told residents the building was in “very good shape”',
    },
    harmed: { el: '98 νεκροί, ένοικοι του Champlain Towers South', en: '98 dead, residents of Champlain Towers South' },
    plain: {
      el: 'Το 2018 ένας μηχανικός έγραψε ότι η πλάκα κάτω από την πισίνα είχε «σοβαρή δομική ζημιά». Δύο μέρες αφού του προωθήθηκε η έκθεση, ο αρμόδιος υπάλληλος της πόλης είπε στους ενοίκους ότι το κτίριο ήταν σε πολύ καλή κατάσταση. Τα 12 όροφα κατέρρευσαν μερικώς τη νύχτα της 24ης Ιουνίου 2021.',
      en: 'In 2018 an engineer wrote that the slab under the pool deck showed “major structural damage.” Two days after the report was forwarded to him, the town’s building official told residents the building was in very good shape. The 12 storeys partly collapsed in the night of 24 June 2021.',
    },
    facts: [
      {
        el: 'Οκτώβριος 2018: έκθεση μηχανικών καταγράφει «εκτεταμένες ρωγμές και αποφλοιώσεις», «εκτεθειμένο, διαβρωμένο οπλισμό» και αστοχία στεγάνωσης κάτω από την πισίνα που προκαλεί «σοβαρή δομική ζημιά».',
        en: 'October 2018: an engineering survey records “abundant cracking and spalling,” “exposed, deteriorating rebar” and failed waterproofing under the pool deck causing “major structural damage.”',
      },
      {
        el: '15 Νοεμβρίου 2018: δύο μέρες αφού μέλος του διοικητικού συμβουλίου του προώθησε την έκθεση, ο υπάλληλος δόμησης της πόλης λέει στη συνέλευση ότι το κτίριο είναι «σε πολύ καλή κατάσταση» (πρακτικά συνεδρίασης).',
        en: '15 November 2018: two days after a board member forwarded him the report, the town’s building official tells the association the building is in “very good shape” (meeting minutes).',
      },
      {
        el: '2018 → Απρίλιος 2021: το εκτιμώμενο κόστος επισκευής ανεβαίνει από περίπου 9 σε 15 εκατ. δολάρια· η συνέλευση εγκρίνει την εισφορά δύο μήνες πριν από την κατάρρευση.',
        en: '2018 → April 2021: the estimated repair cost rises from about $9 million to $15 million; the association approves the assessment two months before the collapse.',
      },
      {
        el: '24 Ιουνίου 2021: 98 νεκροί· αργότερα εγκρίνεται δικαστικά διακανονισμός άνω του 1 δισ. δολαρίων για τις οικογένειες.',
        en: '24 June 2021: 98 dead; a settlement of over $1 billion for the families is later approved by the court.',
      },
      {
        el: 'Ιούνιος 2025: η ομοσπονδιακή υπηρεσία προτύπων (NIST) κατονομάζει τρία πιθανότερα σενάρια, όλα κατασκευαστικά ελαττώματα από την αρχή — ανάμεσά τους μια σύνδεση κολόνας–πλάκας που «δεν πληρούσε ποτέ τα πρότυπα του κώδικα».',
        en: 'June 2025: the federal standards agency (NIST) names three most likely scenarios, all construction flaws present from the start — among them a column–deck connection that “never met building code standards.”',
      },
    ],
    outcome: {
      el: 'Αστικός διακανονισμός άνω του 1 δισ. δολαρίων· καμία ποινική δίωξη.',
      en: 'A civil settlement of over $1 billion; no criminal charges.',
    },
    breach: {
      el: 'Όταν ένας μηχανικός γράφει «σοβαρή δομική ζημιά», η δουλειά της υπηρεσίας δόμησης είναι να πάει να δει. Μια καθησυχαστική φράση σε μια συνέλευση, χωρίς αυτοψία, δεν είναι γνώμη — είναι η στιγμή που η προειδοποίηση πεθαίνει, τρία χρόνια πριν από τους ανθρώπους.',
      en: 'When an engineer writes “major structural damage,” the building office’s job is to go and look. A reassuring phrase at a meeting, without an inspection, is not an opinion — it is the moment the warning dies, three years before the people.',
    },
    patterns: ['ignored-warning'],
    safeguards: ['warning-clock'],
    counterfactual: {
      el: 'Το Ρολόι της Προειδοποίησης θα είχε καταχωρίσει την έκθεση του 2018 με βαθμό κινδύνου και προθεσμία αυτοψίας. Η φράση «σε πολύ καλή κατάσταση» δεν θα μπορούσε να ειπωθεί χωρίς υπογεγραμμένη επιθεώρηση — και κάθε μήνας αναβολής των επισκευών θα κλιμακωνόταν σε ανώτερη αρχή, με ενημέρωση κάθε ενοίκου.',
      en: 'The Warning Clock would have logged the 2018 report with a risk level and an inspection deadline. “Very good shape” could not have been said without a signed inspection — and every month of delayed repairs would have escalated to a higher authority, with every resident told.',
    },
    antilogos: {
      el: 'Δεν υπάρχει καμία κατηγορία δωροδοκίας. Κατά το NIST τα μοιραία ελαττώματα χρονολογούνται από την αρχική κατασκευή πριν από 40 χρόνια, και οι επισκευές καθυστέρησαν χρόνια επειδή οι ίδιοι οι ιδιοκτήτες διαφωνούσαν για το κόστος.',
      en: 'No bribery is alleged. According to NIST the fatal flaws date from original construction some 40 years earlier, and repairs were delayed for years because the owners themselves disagreed over the cost.',
    },
    reply: {
      el: 'Γι’ αυτό η πρόταση δεν ψάχνει ένοχο — ψάχνει ρολόι. Η διαφωνία των ιδιοκτητών για το κόστος είναι φυσιολογική· μια δημόσια προθεσμία με κλιμάκωση είναι αυτό που μετατρέπει τη φυσιολογική αναβλητικότητα σε απόφαση πριν είναι αργά. Ο κίνδυνος υπήρχε 40 χρόνια· η γνώση υπήρχε 3.',
      en: 'That is why the proposal looks for no culprit — it looks for a clock. Owners disagreeing over cost is normal; a public deadline with escalation is what turns normal procrastination into a decision before it is too late. The danger existed for 40 years; the knowledge existed for 3.',
    },
    lever: {
      el: 'Ζήτησε κάθε έκθεση μηχανικού για δομικό κίνδυνο σε πολυκατοικία να κοινοποιείται σε όλους τους ενοίκους με προθεσμία αυτοψίας.',
      en: 'Ask that every engineer’s report of structural danger in an apartment building be shared with all residents, with an inspection deadline.',
    },
    scores: { harm: 9, power: 4, recurrence: 6, remedy: 8 },
    status: {
      el: 'Δεν βρέθηκαν ποινικές διώξεις. Η τελική έκθεση του NIST αναμένεται.',
      en: 'No criminal charges found. NIST’s final report is awaited.',
    },
    sources: [
      { title: 'FOX 13 — Despite 2018 warning, official deemed building in good shape', url: 'https://fox13news.com/news/despite-engineers-2018-warning-surfside-official-deemed-condo-building-in-good-shape' },
      { title: 'KTVZ / CNN — Owners faced $15 million assessment (2021)', url: 'https://ktvz.com/news/national-world/cnn-national/2021/06/28/condo-owners-in-surfside-building-were-facing-assessments-for-15-million-worth-of-repairs/' },
      { title: 'Bangor Daily News / AP — Investigation expected to finish in 2026 (2025)', url: 'https://www.bangordailynews.com/2025/06/28/nation/investigation-into-florida-condo-collapse-is-expected-to-finish-in-2026/' },
    ],
  },
]
