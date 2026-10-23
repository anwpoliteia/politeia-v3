// The ten safeguards of ΔΗΜΗΤΡΑ. Each is a PROPOSAL (Hard Rule 1): the AI
// watches the payers and the powerful, never the small farmer; named humans
// decide and answer for it.

import type { Safeguard } from '../types'

export const SAFEGUARDS: readonly Safeguard[] = [
  {
    id: 'geo',
    n: 'Σ1',
    name: { el: 'Δορυφορικό Μάτι', en: 'Satellite Witness' },
    precedent: {
      el: 'Ο Ερατοσθένης μέτρησε τη Γη από τον ήλιο στον πάτο ενός πηγαδιού και τη σκιά ενός οβελίσκου· σήμερα οι δορυφόροι μετρούν κάθε χωράφι, κάθε εβδομάδα.',
      en: 'Eratosthenes measured the Earth from sunlight at the bottom of a well and the shadow of a pillar; today satellites measure every field, every week.',
    },
    plain: {
      el: 'Κάθε δηλωμένο χωράφι και βοσκοτόπι ελέγχεται από δορυφόρο πριν από την πληρωμή — όχι οκτώ χρόνια μετά.',
      en: 'Every declared field and pasture is checked by satellite before payment — not eight years later.',
    },
    how: {
      el: 'Διασταυρώνει κάθε δηλωμένο αγροτεμάχιο με δορυφορικές εικόνες (Copernicus Sentinel, δωρεάν για κάθε κράτος της ΕΕ): υπάρχει καλλιέργεια; υπάρχει βοσκή; είναι θάλασσα, αεροδρόμιο, βουνοκορφή; Κάθε ασυμφωνία σημαίνεται πριν από την πληρωμή.',
      en: 'Matches every declared parcel against satellite imagery (Copernicus Sentinel, free to every EU state): is there a crop? is there grazing? is it sea, an airfield, a mountaintop? Every mismatch is flagged before payment.',
    },
    humans: {
      el: 'Ο επιθεωρητής πηγαίνει στο χωράφι και αποφασίζει· ο δορυφόρος απλώς δεν ξεχνά.',
      en: 'The inspector goes to the field and decides; the satellite simply does not forget.',
    },
    antilogos: {
      el: 'Σύννεφα, μικρά αγροτεμάχια και ορεινή βοσκή μπερδεύουν τους δορυφόρους· ένας μικρός κτηνοτρόφος μπορεί να βρεθεί με κομμένη πληρωμή από λάθος του αλγορίθμου.',
      en: 'Clouds, small parcels and mountain grazing confuse satellites; a small herder could see a payment cut by an algorithm’s mistake.',
    },
    distributional: {
      el: 'Πληρώνει ο οργανισμός πληρωμών (τα δεδομένα είναι δωρεάν). Ωφελούνται οι αγρότες που δηλώνουν αληθινή γη.',
      en: 'The paying agency pays (the data is free). Farmers who declare real land gain.',
    },
    virtues: ['sophia', 'dikaiosyne'],
    delta: { economic_security: 4, institutional_justice: 4, environment_ecology: 2 },
  },
  {
    id: 'registry',
    n: 'Σ2',
    name: { el: 'Ενιαίο Μητρώο Γης', en: 'One Land Register' },
    precedent: {
      el: 'Στην αρχαία Αττική οι ὅροι — λίθινα σημάδια στα χωράφια — έδειχναν δημόσια ποια γη ήταν υποθηκευμένη και σε ποιον.',
      en: 'In ancient Attica the horoi — marker stones in the fields — showed publicly which land was pledged, and to whom.',
    },
    plain: {
      el: 'Καμία γη δεν δηλώνεται δύο φορές και καμία δημόσια γη δεν «μισθώνεται» χωρίς πράξη.',
      en: 'No land is declared twice, and no public land is “leased” without a deed.',
    },
    how: {
      el: 'Κάθε δήλωση διασταυρώνεται με το Κτηματολόγιο, τα μητρώα δημόσιας γης, τις προστατευόμενες περιοχές και τα μισθωτήρια. Γη δηλωμένη από δύο, δημόσια γη χωρίς πράξη μίσθωσης, βοσκή σε προστατευόμενη ζώνη: σήμανση πριν από την πληρωμή.',
      en: 'Every claim is matched against the cadastre, public-land registers, protected areas and lease records. Land claimed by two people, public land with no lease, grazing in a protected zone: flagged before payment.',
    },
    humans: {
      el: 'Ο οργανισμός πληρωμών ζητά εξήγηση και αποφασίζει· η διασταύρωση απλώς φέρνει το ερώτημα στο φως.',
      en: 'The paying agency asks for an explanation and decides; the cross-check simply brings the question to light.',
    },
    antilogos: {
      el: 'Στην Ελλάδα το Κτηματολόγιο δεν είναι ακόμη πλήρες και πολλές μισθώσεις είναι άτυπες ανάμεσα σε συγγενείς — ο έντιμος αγρότης μπορεί να βρεθεί σημασμένος.',
      en: 'In Greece the cadastre is still incomplete and many leases are informal between relatives — an honest farmer can end up flagged.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι δήλωναν ξένη γη. Ωφελούνται οι πραγματικοί κάτοχοι — και το Δημόσιο, που παύει να χρηματοδοτεί «μισθώσεις» της δικής του γης.',
      en: 'Those who claimed other people’s land pay. The real holders gain — and the state, which stops funding “leases” of its own land.',
    },
    virtues: ['dikaiosyne', 'sophia'],
    delta: { economic_security: 3, institutional_justice: 4, environment_ecology: 2 },
  },
  {
    id: 'herd',
    n: 'Σ3',
    name: { el: 'Μητρώο Ζωντανών Κοπαδιών', en: 'Living Herd Register' },
    precedent: {
      el: 'Η ΕΕ υποχρεώνει ήδη από το 2010 την ηλεκτρονική σήμανση κάθε αιγοπροβάτου· το μητρώο υπάρχει — λείπει η διασταύρωση.',
      en: 'The EU has required electronic tagging of every sheep and goat since 2010; the register exists — the cross-check is missing.',
    },
    plain: {
      el: 'Ένα ζώο που δεν πέρασε ποτέ από κτηνίατρο, δεν έδωσε ποτέ γάλα και δεν έφαγε ποτέ ζωοτροφή, δεν υπάρχει.',
      en: 'An animal that never saw a vet, never gave milk and never ate feed does not exist.',
    },
    how: {
      el: 'Διασταυρώνει τα δηλωμένα ζώα με ηλεκτρονικά σκουλαρίκια, εμβολιασμούς, κτηνιατρικές επισκέψεις, παραδόσεις γάλακτος και αγορές ζωοτροφών. Ένα κοπάδι χωρίς κανένα ίχνος ζωής σημαίνεται.',
      en: 'Matches declared animals against electronic ear tags, vaccinations, vet visits, milk deliveries and feed purchases. A herd with no trace of life is flagged.',
    },
    humans: {
      el: 'Ο κτηνίατρος επιθεωρητής μετρά το κοπάδι και αποφασίζει.',
      en: 'The veterinary inspector counts the herd and decides.',
    },
    antilogos: {
      el: 'Οι ορεινοί κτηνοτρόφοι συχνά πουλούν γάλα και ζώα άτυπα· η απουσία ίχνους δεν σημαίνει πάντα απουσία ζώου.',
      en: 'Mountain herders often sell milk and animals informally; no trace does not always mean no animal.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι δήλωναν ανύπαρκτα ζώα. Ωφελούνται οι κτηνοτρόφοι με αληθινά κοπάδια, που μοιράζονται το ίδιο κονδύλι.',
      en: 'Those who declared animals that do not exist pay. Herders with real flocks, who share the same budget, gain.',
    },
    virtues: ['sophia', 'dikaiosyne'],
    delta: { economic_security: 3, institutional_justice: 3 },
  },
  {
    id: 'pressure-log',
    n: 'Σ4',
    name: { el: 'Μητρώο Πιέσεων', en: 'Pressure Register' },
    precedent: {
      el: 'Η Αθήνα είχε ειδική δημόσια δίωξη για όποιον εξαγόραζε δικαστές ή την Εκκλησία του Δήμου — τη γραφὴ δεκασμοῦ.',
      en: 'Athens had a special public action against anyone who bought jurors or the Assembly — the graphe dekasmou.',
    },
    plain: {
      el: 'Κάθε φορά που ένας πολιτικός «ενδιαφέρεται» για μια πληρωμή, αυτό καταγράφεται δημόσια.',
      en: 'Every time a politician “takes an interest” in a payment, it is recorded in public.',
    },
    how: {
      el: 'Κάθε επικοινωνία βουλευτή, υπουργού ή κομματικού στελέχους με τον οργανισμό πληρωμών για συγκεκριμένο φάκελο καταχωρείται: ποιος, πότε, για ποιον δικαιούχο. Η ΤΝ δείχνει ποιοι φάκελοι «πέρασαν» μετά από παρέμβαση και πόσο συχνά.',
      en: 'Every contact by an MP, minister or party official with the paying agency about a specific file is logged: who, when, for which beneficiary. The AI shows which files “went through” after an intervention, and how often.',
    },
    humans: {
      el: 'Οι υπάλληλοι αποφασίζουν· η παρέμβαση δεν απαγορεύεται — απλώς δεν μένει κρυφή.',
      en: 'Officials decide; intervening is not banned — it simply no longer stays hidden.',
    },
    antilogos: {
      el: 'Οι βουλευτές λένε ότι μεταφέρουν δίκαια παράπονα ψηφοφόρων που χάνονται στη γραφειοκρατία· η καταγραφή θα τους κάνει να σωπάσουν και για τα δίκαια.',
      en: 'MPs say they relay fair complaints from voters lost in bureaucracy; logging will make them silent about the fair ones too.',
    },
    distributional: {
      el: 'Πληρώνουν τα πελατειακά δίκτυα. Ωφελείται ο αγρότης που δεν έχει «δικό του» βουλευτή.',
      en: 'Clientelist networks pay. The farmer without “their own” MP gains.',
    },
    virtues: ['parrhesia', 'dikaiosyne'],
    delta: { institutional_justice: 5, practical_reason: 2, affiliation_trust: 3 },
  },
  {
    id: 'open-ledger',
    n: 'Σ5',
    name: { el: 'Ανοιχτό Κατάστιχο', en: 'Open Ledger' },
    precedent: {
      el: 'Οι Αθηναίοι χάραζαν στο μάρμαρο τους λογαριασμούς των δημόσιων έργων — ακόμη και του Παρθενώνα — για να τους διαβάζει κάθε πολίτης.',
      en: 'Athenians carved the accounts of public works — even the Parthenon’s — in marble, for every citizen to read.',
    },
    plain: {
      el: 'Κάθε πληρωμή είναι δημόσια σε πραγματικό χρόνο: ποιος πήρε πόσα, για ποια γη, για πόσα ζώα.',
      en: 'Every payment is public in real time: who took how much, for which land, for how many animals.',
    },
    how: {
      el: 'Δημοσιεύει κάθε πληρωμή σε μορφή που διαβάζουν μηχανές: δικαιούχος και πραγματικός ιδιοκτήτης, αγροτεμάχιο στον χάρτη, ζώα, ποσό. Η ΤΝ εντοπίζει συγκεντρώσεις: ένα ΑΦΜ με γη σε δέκα νομούς, ένα χωριό χωρίς κοπάδια με εκατομμύρια βοσκής, οκτώ ονόματα με το ένα έκτο του κονδυλίου.',
      en: 'Publishes every payment in machine-readable form: recipient and beneficial owner, parcel on the map, animals, amount. The AI surfaces concentrations: one tax number with land in ten regions, a village with no herds and millions in grazing money, eight names with a sixth of the budget.',
    },
    humans: {
      el: 'Ελεγκτές, δημοσιογράφοι και πολίτες ρωτούν· ο οργανισμός απαντά επώνυμα.',
      en: 'Auditors, journalists and citizens ask; the agency answers by name.',
    },
    antilogos: {
      el: 'Η δημοσιότητα εκθέτει και τους μικρούς αγρότες — το εισόδημά τους γίνεται γνωστό σε γείτονες, εμπόρους και τράπεζες.',
      en: 'Publicity exposes small farmers too — their income becomes known to neighbours, traders and banks.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι ζούσαν από την αδιαφάνεια. Ωφελούνται όλοι οι αγρότες — με κατώτατο όριο κάτω από το οποίο τα ονόματα μένουν ιδιωτικά.',
      en: 'Those who lived off opacity pay. Every farmer gains — with a floor below which names stay private.',
    },
    virtues: ['parrhesia', 'sophia'],
    delta: { institutional_justice: 5, affiliation_trust: 4, economic_security: 2 },
  },
  {
    id: 'shield',
    n: 'Σ6',
    name: { el: 'Ασπίδα Μάρτυρα', en: 'Witness Shield' },
    precedent: {
      el: 'Η παρρησία δεν σημαίνει τίποτα αν όποιος μιλά χάνει τη θέση του. Η ΕΕ το αναγνώρισε με την Οδηγία 2019/1937 για τους μάρτυρες δημοσίου συμφέροντος.',
      en: 'Parrhesia means nothing if whoever speaks loses their post. The EU recognised this in Directive 2019/1937 on whistleblowers.',
    },
    plain: {
      el: 'Όποιος καταγγέλλει προστατεύεται αυτόματα — και όποιος τον τιμωρεί πρέπει να αποδείξει ότι δεν είναι αντίποινα.',
      en: 'Whoever reports is protected automatically — and whoever punishes them must prove it is not retaliation.',
    },
    how: {
      el: 'Κάθε καταγγελία σφραγίζεται με χρονοσφραγίδα σε ανεξάρτητη αρχή. Κάθε μετακίνηση, υποβιβασμός ή πειθαρχική κίνηση κατά του καταγγέλλοντος σημαίνεται αυτόματα, και το βάρος της απόδειξης περνά στη διοίκηση. Οι απειλές κατά ελεγκτών και δημοσιογράφων καταγράφονται δημόσια.',
      en: 'Every report is time-stamped and sealed with an independent authority. Any transfer, demotion or disciplinary move against the reporter is flagged automatically, and the burden of proof shifts to management. Threats against inspectors and journalists are logged publicly.',
    },
    humans: {
      el: 'Η ανεξάρτητη αρχή και τα δικαστήρια κρίνουν· η ΤΝ απλώς θυμάται ποιος μίλησε πρώτος.',
      en: 'The independent authority and the courts judge; the AI simply remembers who spoke first.',
    },
    antilogos: {
      el: 'Κάποιος μπορεί να καταθέσει καταγγελία μόνο για να προστατευτεί από μια δίκαιη πειθαρχική ποινή.',
      en: 'Someone could file a report only to shield themselves from a fair disciplinary penalty.',
    },
    distributional: {
      el: 'Πληρώνουν οι διοικήσεις που τιμωρούσαν τον έλεγχο. Ωφελούνται οι υπάλληλοι που βλέπουν και ως τώρα σώπαιναν.',
      en: 'Managements that punished scrutiny pay. Officials who saw and stayed silent until now gain.',
    },
    virtues: ['andreia', 'parrhesia'],
    delta: { institutional_justice: 4, affiliation_trust: 3, practical_reason: 2 },
  },
  {
    id: 'interest-map',
    n: 'Σ7',
    name: { el: 'Χάρτης Συμφερόντων', en: 'Interest Map' },
    precedent: {
      el: 'Όπως ο όρκος των ηλιαστών απαγόρευε δώρα «ούτε για μένα ούτε για άλλον», έτσι κανείς δεν αποφασίζει για χρήματα που καταλήγουν στο σπίτι του.',
      en: 'As the jurors’ oath forbade gifts “neither for me nor for another”, no one decides on money that ends up in their own home.',
    },
    plain: {
      el: 'Όποιος αποφασίζει για ενισχύσεις από τις οποίες ωφελείται ο ίδιος ή η οικογένειά του, σημαίνεται και εξαιρείται.',
      en: 'Whoever decides on support that benefits themselves or their family is flagged and recused.',
    },
    how: {
      el: 'Διασταυρώνει τους δικαιούχους με τα μητρώα αξιωματούχων, βουλευτών, συγγενών τους και των εταιρειών τους, ως τον πραγματικό τελικό ιδιοκτήτη. Κάθε σύμπτωση εμφανίζεται πριν από την απόφαση.',
      en: 'Matches recipients against the registers of officials, MPs, their relatives and their companies, down to the ultimate beneficial owner. Every overlap appears before the decision.',
    },
    humans: {
      el: 'Η αρχή δεοντολογίας αποφασίζει για την εξαίρεση· κανείς δεν μπορεί να κρύψει τη σύμπτωση.',
      en: 'The ethics authority decides on recusal; no one can hide the overlap.',
    },
    antilogos: {
      el: 'Και οι πολιτικοί μπορεί να είναι αγρότες· δεν πρέπει να χάνουν ό,τι δικαιούται κάθε αγρότης επειδή εκλέχτηκαν.',
      en: 'Politicians can be farmers too; they should not lose what every farmer is owed just because they were elected.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι νομοθετούσαν για την τσέπη τους. Ωφελούνται οι αγρότες χωρίς θέση στο τραπέζι.',
      en: 'Those who legislated for their own pocket pay. Farmers without a seat at the table gain.',
    },
    virtues: ['dikaiosyne', 'sophrosyne'],
    delta: { institutional_justice: 5, affiliation_trust: 3 },
  },
  {
    id: 'auction',
    n: 'Σ8',
    name: { el: 'Κλήρος και Ανοιχτή Δημοπρασία', en: 'Lot and Open Auction' },
    precedent: {
      el: 'Οι αθηναίοι πωληταί μίσθωναν δημόσια περιουσία ενώπιον της Βουλής και κατέγραφαν κάθε μίσθωση (Αθηναίων Πολιτεία 47)· οι ελεγκτές κληρώνονταν.',
      en: 'The Athenian poletai leased public property before the Council and recorded every lease (Constitution of the Athenians 47); officials were chosen by lot.',
    },
    plain: {
      el: 'Δημόσια γη μόνο με ανοιχτή δημοπρασία· ελεγκτές μόνο με κλήρωση — κανείς δεν διαλέγει ούτε τη γη του ούτε τον ελεγκτή του.',
      en: 'Public land only by open auction; inspectors only by lot — no one picks either their land or their inspector.',
    },
    how: {
      el: 'Κάθε πώληση ή μίσθωση δημόσιας γης γίνεται με ανοιχτή, δημόσια καταγεγραμμένη δημοπρασία· η ΤΝ δείχνει τιμές κάτω από την αγορά και δεσμούς των πλειοδοτών με αξιωματούχους. Οι υγειονομικοί και γεωργικοί ελεγκτές ορίζονται με επαληθεύσιμη κλήρωση και εναλλάσσονται.',
      en: 'Every sale or lease of public land is an open, publicly recorded auction; the AI shows prices below market and bidders’ ties to officials. Health and farm inspectors are assigned by verifiable lot and rotated.',
    },
    humans: {
      el: 'Το κράτος ορίζει τους όρους και κατακυρώνει· απλώς δεν μπορεί πια να διαλέγει τον νικητή.',
      en: 'The state sets the terms and awards; it simply can no longer pick the winner.',
    },
    antilogos: {
      el: 'Οι δημοπρασίες ευνοούν όσους έχουν κεφάλαια, και η εναλλαγή σβήνει τη γνώση που έχει ο ελεγκτής για κάθε μονάδα.',
      en: 'Auctions favour those with capital, and rotation erases what an inspector knows about each site.',
    },
    distributional: {
      el: 'Πληρώνουν οι «φίλοι» που αγόραζαν φτηνά και οι μονάδες που διάλεγαν ελεγκτή. Ωφελούνται οι νέοι αγρότες — αν οι όροι κρατούν μερίδιο για μικρούς κλήρους.',
      en: 'The “friends” who bought cheap and the plants that chose their inspector pay. Young farmers gain — if the terms reserve a share for small plots.',
    },
    virtues: ['dikaiosyne', 'sophrosyne'],
    delta: { economic_security: 3, institutional_justice: 4, life_health: 2 },
  },
  {
    id: 'clock',
    n: 'Σ9',
    name: { el: 'Ρολόι Ανάκτησης', en: 'Recovery Clock' },
    precedent: {
      el: 'Εὐθῦναι: κάθε αθηναίος άρχων λογοδοτούσε δημόσια για κάθε δραχμή στο τέλος της θητείας του (Αθηναίων Πολιτεία 48, 54).',
      en: 'Euthynai: every Athenian magistrate accounted publicly for every drachma at the end of office (Constitution of the Athenians 48, 54).',
    },
    plain: {
      el: 'Για κάθε σκάνδαλο, ένα δημόσιο ρολόι: πόσα χάθηκαν, πόσα γύρισαν, πόσα πλήρωσε ο φορολογούμενος — και ποιος κρατά τον φάκελο.',
      en: 'For every scandal, a public clock: how much was lost, how much came back, how much the taxpayer paid — and who holds the file.',
    },
    how: {
      el: 'Δείχνει ζωντανά: ποσό που χάθηκε, ποσό που ανακτήθηκε, πρόστιμα της ΕΕ που πληρώνουν όλοι, σε ποιον θεσμό βρίσκεται η υπόθεση και πόσος χρόνος μένει ως την παραγραφή. Όταν ο χρόνος λιγοστεύει, ειδοποιεί όσους την ακολουθούν.',
      en: 'Shows live: the sum lost, the sum recovered, the EU fines everyone pays, which institution holds the case and how long remains before limitation. When time runs short, it alerts those following it.',
    },
    humans: {
      el: 'Η Βουλή, η Εισαγγελία και τα δικαστήρια αποφασίζουν· απλώς δεν μπορούν πια να αφήσουν τον χρόνο να αποφασίσει γι’ αυτούς.',
      en: 'Parliament, prosecutors and courts decide; they can no longer let the clock decide for them.',
    },
    antilogos: {
      el: 'Κίνδυνος λαϊκού δικαστηρίου: μια αντίστροφη μέτρηση μπορεί να γίνει δημόσια καταδίκη πριν από τη δίκη.',
      en: 'Risk of trial by crowd: a countdown can become a public conviction before any trial.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι επένδυαν στην καθυστέρηση. Ωφελείται ο φορολογούμενος, που πληρώνει τα πρόστιμα.',
      en: 'Those who invested in delay pay. The taxpayer, who pays the fines, gains.',
    },
    virtues: ['andreia', 'parrhesia'],
    delta: { institutional_justice: 4, practical_reason: 3, economic_security: 1 },
  },
  {
    id: 'fast-lane',
    n: 'Σ10',
    name: { el: 'Προτεραιότητα στον Έντιμο', en: 'Honest Fast Lane' },
    precedent: {
      el: 'Ο Ησίοδος: η δουλειά δεν είναι ντροπή. Όποιος δουλεύει τη γη πληρώνεται πρώτος — όχι τελευταίος.',
      en: 'Hesiod: work is no disgrace. Whoever works the land is paid first — not last.',
    },
    plain: {
      el: 'Όταν οι πληρωμές παγώνουν λόγω απάτης, οι καθαροί φάκελοι πληρώνονται πρώτοι και στην ώρα τους.',
      en: 'When payments freeze because of fraud, clean files are paid first and on time.',
    },
    how: {
      el: 'Οι δηλώσεις που περνούν καθαρά τη διασταύρωση — δορυφόρος, μητρώο γης, μητρώο ζώων — πληρώνονται εμπρόθεσμα. Το πάγωμα πέφτει μόνο στους σημασμένους φακέλους, όχι σε ολόκληρη την ύπαιθρο.',
      en: 'Claims that pass the cross-checks cleanly — satellite, land register, herd register — are paid on time. The freeze falls only on flagged files, not on the whole countryside.',
    },
    humans: {
      el: 'Ο οργανισμός πληρωμών ορίζει τη σειρά· η ΤΝ απλώς δείχνει ποιοι φάκελοι είναι καθαροί.',
      en: 'The paying agency sets the order; the AI simply shows which files are clean.',
    },
    antilogos: {
      el: 'Μια «καθαρή» διασταύρωση δεν αποδεικνύει ότι δεν υπάρχει απάτη· η βιασύνη μπορεί να πληρώσει καλά κρυμμένους απατεώνες.',
      en: 'A “clean” cross-check does not prove there is no fraud; haste can pay well-hidden fraudsters.',
    },
    distributional: {
      el: 'Πληρώνουν οι απατεώνες, που περιμένουν. Ωφελούνται οι χιλιάδες αγρότες που σήμερα κλείνουν δρόμους για να πληρωθούν.',
      en: 'Fraudsters, who now wait, pay. The thousands of farmers who today block roads to be paid gain.',
    },
    virtues: ['dikaiosyne', 'phronesis'],
    delta: { economic_security: 5, affiliation_trust: 3 },
  },
]
