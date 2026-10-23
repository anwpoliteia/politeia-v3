// The ten safeguards of ΙΠΠΟΚΡΑΤΗΣ. Each is a PROPOSAL (Hard Rule 1): the AI
// watches those who are paid by health — companies, suppliers, managements,
// prescribing — never the patient or their diagnosis; named humans decide.

import type { Safeguard } from '../types'

export const SAFEGUARDS: readonly Safeguard[] = [
  {
    id: 'queue',
    n: 'Σ1',
    name: { el: 'Ορατή Σειρά', en: 'Visible Queue' },
    precedent: {
      el: 'Η Ελλάδα έχει ήδη το εργαλείο: η Ενιαία Ψηφιακή Λίστα Χειρουργείων (2024) ένωσε τις λίστες των νοσοκομείων, και κατά το υπουργείο, όπως καταγράφει ο ΟΟΣΑ, μείωσε τους χρόνους αναμονής.',
      en: 'Greece already has the tool: the Unified Digital Surgery List (2024) merged hospital lists and, per the ministry as recorded by the OECD, cut waiting times.',
    },
    plain: {
      el: 'Κάθε ασθενής βλέπει τη θέση του στη σειρά — και κάθε προσπέραση φέρει όνομα και αιτιολογία.',
      en: 'Every patient sees their place in the queue — and every jump carries a name and a reason.',
    },
    how: {
      el: 'Επεκτείνει την Ενιαία Λίστα σε κάθε χειρουργείο, εξέταση και κρεβάτι: ο ασθενής βλέπει τη θέση του στο κινητό. Κάθε προσπέραση καταγράφεται με ιατρική αιτιολογία και υπογραφή. Η ΤΝ δείχνει κλινικές και γιατρούς με ασυνήθιστα πολλές «επείγουσες» προσπεράσεις.',
      en: 'Extends the Unified List to every surgery, test and bed: patients see their place on their phone. Every jump is logged with a medical reason and a signature. The AI shows clinics and doctors with unusually many “urgent” jumps.',
    },
    humans: {
      el: 'Ο γιατρός κρίνει την ιατρική προτεραιότητα· απλώς την υπογράφει.',
      en: 'The doctor judges medical priority; they simply sign it.',
    },
    antilogos: {
      el: 'Η ιατρική προτεραιότητα δεν χωρά σε λίστα· ένας γιατρός που φοβάται την καταγραφή μπορεί να διστάσει να προωθήσει ένα πραγματικά επείγον περιστατικό.',
      en: 'Medical priority does not fit a list; a doctor afraid of the record may hesitate to move a truly urgent case forward.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι πουλούσαν θέσεις στη σειρά. Ωφελούνται οι ασθενείς χωρίς «γνωστό» — συνήθως οι φτωχότεροι και οι ηλικιωμένοι.',
      en: 'Those who sold places in the queue pay. Patients without a “contact” — usually the poorest and the oldest — gain.',
    },
    virtues: ['dikaiosyne', 'parrhesia'],
    delta: { life_health: 5, affiliation_trust: 4, institutional_justice: 3 },
  },
  {
    id: 'signal',
    n: 'Σ2',
    name: { el: 'Σήμα Φακελακιού', en: 'Envelope Signal' },
    precedent: {
      el: 'Στις αθηναϊκές εὐθῦναι κάθε πολίτης μπορούσε να καταγγείλει έναν άρχοντα· εδώ μπορεί ο ασθενής — χωρίς να φοβάται για τη θεραπεία του.',
      en: 'At the Athenian euthynai any citizen could bring a charge against a magistrate; here the patient can — without fearing for their treatment.',
    },
    plain: {
      el: 'Μετά από κάθε νοσηλεία, ο ασθενής δηλώνει ανώνυμα αν του ζητήθηκαν χρήματα — και μόνο τα επαναλαμβανόμενα σήματα φτάνουν σε έλεγχο.',
      en: 'After every hospital stay, the patient says anonymously whether money was asked — and only repeated signals reach an inspector.',
    },
    how: {
      el: 'Μετά το εξιτήριο, ένα ερώτημα στο κινητό: «σου ζητήθηκε κάτι;». Οι απαντήσεις είναι ανώνυμες και ενώνονται ανά κλινική. Μεμονωμένη δήλωση δεν τιμωρεί κανέναν· πολλά ανεξάρτητα σήματα για την ίδια κλινική στέλνουν ελεγκτές εκεί.',
      en: 'After discharge, one question on the phone: “were you asked for anything?”. Answers are anonymous and pooled per clinic. A single report punishes no one; many independent signals about the same clinic send inspectors there.',
    },
    humans: {
      el: 'Οι «Αδιάφθοροι» της ΕΛ.ΑΣ. και η εισαγγελία ερευνούν· το σήμα απλώς δείχνει πού.',
      en: 'The police internal-affairs unit and prosecutors investigate; the signal only shows where.',
    },
    antilogos: {
      el: 'Οι ανώνυμες δηλώσεις μπορούν να γίνουν όπλο εκδίκησης ασθενών ή συναδέλφων κατά ενός έντιμου γιατρού.',
      en: 'Anonymous reports can become a weapon of revenge for patients or colleagues against an honest doctor.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι έπαιρναν φακελάκι. Ωφελούνται οι ασθενείς που πλήρωναν από φόβο — και οι γιατροί που δεν πήραν ποτέ, αλλά κουβαλούσαν τη ρετσινιά.',
      en: 'Those who took envelopes pay. Patients who paid out of fear gain — and the doctors who never took one but carried the stigma.',
    },
    virtues: ['andreia', 'dikaiosyne'],
    delta: { life_health: 4, affiliation_trust: 5, economic_security: 2 },
  },
  {
    id: 'sunshine',
    n: 'Σ3',
    name: { el: 'Μητρώο Ηλίου', en: 'Sunshine Register' },
    precedent: {
      el: 'Στις ΗΠΑ ο νόμος Sunshine δημοσιεύει από το 2013 κάθε πληρωμή φαρμακευτικών εταιρειών σε γιατρούς, με όνομα· το φως υπάρχει ήδη αλλού.',
      en: 'In the US the Sunshine Act has published every drug-company payment to doctors, by name, since 2013; the light already exists elsewhere.',
    },
    plain: {
      el: 'Κάθε πληρωμή, ταξίδι ή συνέδριο που προσφέρει μια εταιρεία σε γιατρό ή νοσοκομείο είναι δημόσιο, με όνομα.',
      en: 'Every payment, trip or congress a company gives a doctor or hospital is public, by name.',
    },
    how: {
      el: 'Κάθε παροχή — αμοιβή, ταξίδι, χορηγία συνεδρίου — καταχωρείται από την εταιρεία και διασταυρώνεται με τη συνταγογράφηση του γιατρού που την πήρε. Ο ασθενής μπορεί να δει τι έχει λάβει ο γιατρός του από την εταιρεία του φαρμάκου που του γράφει.',
      en: 'Every benefit — fee, travel, congress sponsorship — is registered by the company and matched against the prescribing of the doctor who received it. A patient can see what their doctor has received from the maker of the drug they are prescribed.',
    },
    humans: {
      el: 'Οι γιατροί συνεχίζουν να συνεργάζονται με εταιρείες· απλώς όχι στο σκοτάδι.',
      en: 'Doctors keep working with companies; just not in the dark.',
    },
    antilogos: {
      el: 'Τα συνέδρια είναι και εκπαίδευση· η δημοσιοποίηση μπορεί να στιγματίσει γιατρούς που μαθαίνουν, όχι που πουλιούνται.',
      en: 'Congresses are also education; disclosure could stigmatise doctors who are learning, not selling.',
    },
    distributional: {
      el: 'Πληρώνουν οι εταιρείες που αγόραζαν συνταγές. Ωφελούνται οι ασθενείς και τα ταμεία που πληρώνουν τα φάρμακα.',
      en: 'Companies that bought prescriptions pay. Patients, and the funds that pay for the drugs, gain.',
    },
    virtues: ['parrhesia', 'dikaiosyne'],
    delta: { life_health: 3, institutional_justice: 4, affiliation_trust: 3 },
  },
  {
    id: 'anomaly',
    n: 'Σ4',
    name: { el: 'Ανιχνευτής Αποκλίσεων', en: 'Anomaly Watch' },
    precedent: {
      el: 'Ο ΕΟΠΥΥ ξεκίνησε το 2024 έλεγχο της συνταγογράφησης μιας δεκαετίας — με το χέρι. Η ΤΝ κάνει τον ίδιο έλεγχο κάθε μέρα.',
      en: 'In 2024 Greece’s national insurer began reviewing a decade of prescribing — by hand. The AI does the same review every day.',
    },
    plain: {
      el: 'Γιατροί, φαρμακεία και εξετάσεις που αποκλίνουν πολύ από τα όμοιά τους σημαίνονται — πριν χαθούν εκατομμύρια.',
      en: 'Doctors, pharmacies and exams that stray far from their peers are flagged — before millions are lost.',
    },
    how: {
      el: 'Συγκρίνει κάθε γιατρό με συναδέλφους της ίδιας ειδικότητας και περιοχής: ακριβά σκευάσματα, ναρκωτικά, όγκος, «ασθενείς» που δεν επισκέφθηκαν ποτέ. Το ίδιο για τα φαρμακεία και για τις εξετάσεις εισαγωγής σε σχολές υγείας (πανομοιότυπες απαντήσεις, πλαστοπροσωπία). Κάθε απόκλιση πηγαίνει σε ελεγκτή, με τα δεδομένα.',
      en: 'Compares each doctor with peers of the same specialty and area: expensive brands, narcotics, volume, “patients” who never visited. The same for pharmacies and for entrance exams to health schools (identical answers, impersonation). Every outlier goes to an inspector, with the data.',
    },
    humans: {
      el: 'Ο ελεγκτής και η εισαγγελία κρίνουν· μια απόκλιση μπορεί να είναι και ο γιατρός με τους βαρύτερους ασθενείς.',
      en: 'The inspector and prosecutors judge; an outlier may simply be the doctor with the sickest patients.',
    },
    antilogos: {
      el: 'Οι γιατροί που αναλαμβάνουν τα δυσκολότερα περιστατικά θα μοιάζουν «ύποπτοι» και μπορεί να αρχίσουν να τα αποφεύγουν.',
      en: 'Doctors who take the hardest cases will look “suspicious” and may start avoiding them.',
    },
    distributional: {
      el: 'Πληρώνουν τα κυκλώματα εικονικών συνταγών. Ωφελούνται οι ασφαλισμένοι, που πληρώνουν τις εισφορές.',
      en: 'Fake-prescription rings pay. The insured, whose contributions fund the system, gain.',
    },
    virtues: ['sophia', 'phronesis'],
    delta: { institutional_justice: 4, economic_security: 3, life_health: 2 },
  },
  {
    id: 'my-file',
    n: 'Σ5',
    name: { el: 'Ο Φάκελός μου', en: 'My Record' },
    precedent: {
      el: 'Η ηλεκτρονική συνταγογράφηση και η εφαρμογή MyHealth υπάρχουν ήδη· λείπει μόνο το κουμπί «αυτό δεν έγινε ποτέ».',
      en: 'E-prescribing and the MyHealth app already exist; only the “this never happened” button is missing.',
    },
    plain: {
      el: 'Κάθε ασθενής ειδοποιείται για κάθε συνταγή, εξέταση ή πράξη που χρεώνεται στο όνομά του — και με ένα άγγιγμα δηλώνει «δεν έγινε ποτέ».',
      en: 'Every patient is notified of every prescription, test or procedure billed in their name — and with one tap says “this never happened.”',
    },
    how: {
      el: 'Κάθε χρέωση στο ΑΜΚΑ του ασθενούς εμφανίζεται στο MyHealth την ίδια μέρα. Μια δήλωση «δεν έγινε» ανοίγει αυτόματα έλεγχο του γιατρού και του φαρμακείου που την καταχώρησαν. Κανείς δεν μπορεί να συνταγογραφεί σε ένα όνομα χωρίς να το μάθει ο κάτοχός του.',
      en: 'Every charge against a patient’s social-security number appears in MyHealth the same day. A “never happened” report automatically opens an audit of the doctor and pharmacy that entered it. No one can prescribe in a name without its owner knowing.',
    },
    humans: {
      el: 'Ο ασθενής αποφασίζει αν θα δηλώσει· ο ελεγκτής κρίνει.',
      en: 'The patient decides whether to report; the inspector judges.',
    },
    antilogos: {
      el: 'Οι ηλικιωμένοι χωρίς κινητό μένουν εκτός, και οι ειδοποιήσεις για ευαίσθητες διαγνώσεις στο κινητό μπορεί να εκθέσουν τον ασθενή στην οικογένειά του.',
      en: 'Older people without smartphones are left out, and phone alerts about sensitive diagnoses can expose a patient to their family.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι συνταγογραφούσαν σε ξένα ονόματα. Ωφελούνται οι ασφαλισμένοι — με ειδοποίηση και μέσω φαρμακοποιού ή ΚΕΠ για όσους δεν έχουν κινητό, και με επιλογή απόκρυψης για ευαίσθητες διαγνώσεις.',
      en: 'Those who prescribed in other people’s names pay. The insured gain — with notice via pharmacist or citizen-service centre for those without a phone, and an opt-out for sensitive diagnoses.',
    },
    virtues: ['parrhesia', 'sophia'],
    delta: { institutional_justice: 3, economic_security: 2, practical_reason: 2 },
  },
  {
    id: 'open-procurement',
    n: 'Σ6',
    name: { el: 'Ανοιχτή Προμήθεια', en: 'Open Procurement' },
    precedent: {
      el: 'Οι Αθηναίοι χάραζαν στο μάρμαρο τους λογαριασμούς των δημόσιων έργων για να τους διαβάζει κάθε πολίτης· καμία «έκτακτη ανάγκη» δεν σταματούσε τις εὐθῦναι.',
      en: 'Athenians carved the accounts of public works in marble for every citizen to read; no “emergency” suspended the euthynai.',
    },
    plain: {
      el: 'Κάθε σύμβαση υγείας — ακόμη και σε έκτακτη ανάγκη — δημοσιεύεται μέσα σε 48 ώρες: προμηθευτής, πραγματικός ιδιοκτήτης, ποιος τον σύστησε, τιμή σε σύγκριση με αλλού.',
      en: 'Every health contract — even in an emergency — is published within 48 hours: supplier, beneficial owner, who referred it, price compared with elsewhere.',
    },
    how: {
      el: 'Κάθε ανάθεση και παραχώρηση δημοσιεύεται με τον πραγματικό ιδιοκτήτη της εταιρείας, το ιστορικό της, τον πολιτικό ή αξιωματούχο που τη σύστησε, και την τιμή σε σύγκριση με όσα πλήρωσαν άλλα νοσοκομεία και κράτη της ΕΕ για το ίδιο είδος. Υπερτιμολόγηση ή «γρήγορη λωρίδα» για φίλους σημαίνονται πριν από την πληρωμή.',
      en: 'Every award and concession is published with the company’s beneficial owner, its track record, the politician or official who referred it, and the price compared with what other hospitals and EU states paid for the same item. Overpricing or a “fast lane” for friends is flagged before payment.',
    },
    humans: {
      el: 'Οι επιτροπές προμηθειών αποφασίζουν· η έκτακτη ανάγκη δικαιολογεί ταχύτητα, όχι σκοτάδι.',
      en: 'Procurement committees decide; an emergency justifies speed, not darkness.',
    },
    antilogos: {
      el: 'Στην κρίση κάθε ώρα μετρά· η γραφειοκρατία της διαφάνειας μπορεί να καθυστερήσει τον εξοπλισμό που σώζει ζωές.',
      en: 'In a crisis every hour counts; the paperwork of transparency could delay equipment that saves lives.',
    },
    distributional: {
      el: 'Πληρώνουν οι «φίλοι» με τις γρήγορες λωρίδες. Ωφελούνται οι φορολογούμενοι και οι προμηθευτές που δεν είχαν «σύσταση».',
      en: 'The “friends” in the fast lanes pay. Taxpayers and suppliers without a “referral” gain.',
    },
    virtues: ['dikaiosyne', 'sophrosyne'],
    delta: { institutional_justice: 5, economic_security: 3, life_health: 2 },
  },
  {
    id: 'lot-test',
    n: 'Σ7',
    name: { el: 'Κλήρος στο Εργαστήριο', en: 'Lot-Drawn Lab Testing' },
    precedent: {
      el: 'Οι αθηναίοι αγορανόμοι επέβλεπαν ώστε ό,τι πωλείται να είναι «καθαρό και ανόθευτο» (Αθηναίων Πολιτεία 51).',
      en: 'Athens’ market wardens saw that what was sold was “pure and unadulterated” (Constitution of the Athenians 51).',
    },
    plain: {
      el: 'Φάρμακα, απολυμαντικά και υλικά ελέγχονται σε ανεξάρτητο εργαστήριο, σε παρτίδες που επιλέγονται με κλήρωση — και τα αποτελέσματα είναι δημόσια.',
      en: 'Drugs, disinfectants and supplies are tested in an independent lab, in batches drawn by lot — and the results are public.',
    },
    how: {
      el: 'Από κάθε προμηθευτή, παρτίδες επιλέγονται με επαληθεύσιμη κλήρωση και αναλύονται: περιεκτικότητα, στειρότητα, σύνθεση. Η ΤΝ συνδέει τις αποτυχίες με λοιμώξεις ή ανεπιθύμητες ενέργειες στα νοσοκομεία που χρησιμοποίησαν τις ίδιες παρτίδες.',
      en: 'Batches from every supplier are drawn by verifiable lot and analysed: strength, sterility, composition. The AI links failures to infections or adverse events in the hospitals that used the same batches.',
    },
    humans: {
      el: 'Η αρμόδια αρχή φαρμάκων αποφασίζει την ανάκληση· η κλήρωση απλώς εξασφαλίζει ότι κανείς δεν ξέρει ποια παρτίδα θα ελεγχθεί.',
      en: 'The medicines authority decides on recalls; the lot simply ensures no one knows which batch will be tested.',
    },
    antilogos: {
      el: 'Ο έλεγχος κοστίζει και καθυστερεί την παράδοση· ένας κακόβουλος προμηθευτής μπορεί να στέλνει καλές παρτίδες όσο φοβάται και κακές μετά.',
      en: 'Testing costs money and delays delivery; a bad-faith supplier can send good batches while afraid and bad ones afterwards.',
    },
    distributional: {
      el: 'Πληρώνουν οι προμηθευτές που νόθευαν. Ωφελούνται οι νοσηλευόμενοι — ιδίως οι πιο ευάλωτοι σε λοιμώξεις.',
      en: 'Suppliers who adulterated pay. Inpatients gain — especially those most vulnerable to infection.',
    },
    virtues: ['sophia', 'sophrosyne'],
    delta: { life_health: 6, bodily_safety: 3 },
  },
  {
    id: 'cooling',
    n: 'Σ8',
    name: { el: 'Περίοδος Ψύξης', en: 'Cooling-Off Register' },
    precedent: {
      el: 'Ο όρκος των ηλιαστών απαγόρευε δώρα «ούτε για μένα ούτε για άλλον» — και η μελλοντική θέση στην εταιρεία που ελέγχεις είναι το μεγαλύτερο δώρο.',
      en: 'The jurors’ oath forbade gifts “neither for me nor for another” — and a future job at the company you oversee is the greatest gift of all.',
    },
    plain: {
      el: 'Όποιος εγκρίνει ή ελέγχει φάρμακα και προμήθειες δεν περνά στην εταιρεία που έλεγχε για ορισμένα χρόνια — και κάθε μετακίνηση είναι δημόσια.',
      en: 'Whoever approves or inspects drugs and supplies cannot move to the company they oversaw for a set period — and every move is public.',
    },
    how: {
      el: 'Καταγράφει δημόσια κάθε μετάβαση ελεγκτή, αξιωματούχου ή υπουργού από την εποπτεία στην ελεγχόμενη βιομηχανία, και επανεξετάζει αυτόματα τις αποφάσεις που υπέγραψε για εκείνη την εταιρεία τα τελευταία χρόνια.',
      en: 'Publicly logs every move by a regulator, official or minister from oversight into the regulated industry, and automatically re-reviews the decisions they signed for that company in recent years.',
    },
    humans: {
      el: 'Η αρχή δεοντολογίας εγκρίνει ή απαγορεύει τη μετάβαση.',
      en: 'The ethics authority approves or blocks the move.',
    },
    antilogos: {
      el: 'Η εμπειρία κυκλοφορεί και προς τις δύο κατευθύνσεις· οι απαγορεύσεις διώχνουν ικανούς ανθρώπους από τις εποπτικές αρχές, που πληρώνουν λιγότερα.',
      en: 'Expertise flows both ways; bans drive able people away from regulators, which pay less.',
    },
    distributional: {
      el: 'Πληρώνουν οι εταιρείες που «αγόραζαν» μελλοντικά την κρίση του ελεγκτή. Ωφελείται ο ασθενής που εμπιστεύεται την έγκριση ενός φαρμάκου.',
      en: 'Companies that bought a regulator’s judgement in advance pay. The patient who trusts a drug’s approval gains.',
    },
    virtues: ['sophrosyne', 'dikaiosyne'],
    delta: { institutional_justice: 4, life_health: 3, affiliation_trust: 2 },
  },
  {
    id: 'shield',
    n: 'Σ9',
    name: { el: 'Ασπίδα Μάρτυρα', en: 'Witness Shield' },
    precedent: {
      el: 'Η παρρησία δεν σημαίνει τίποτα αν όποιος μιλά τιμωρείται. Η ΕΕ το αναγνώρισε με την Οδηγία 2019/1937 για τους μάρτυρες δημοσίου συμφέροντος.',
      en: 'Parrhesia means nothing if whoever speaks is punished. The EU recognised this in Directive 2019/1937 on whistleblowers.',
    },
    plain: {
      el: 'Γιατροί, νοσηλευτές, ασθενείς και δημοσιογράφοι που προειδοποιούν προστατεύονται αυτόματα — και η προειδοποίησή τους σφραγίζεται με ημερομηνία.',
      en: 'Doctors, nurses, patients and journalists who raise the alarm are protected automatically — and their warning is sealed with a date.',
    },
    how: {
      el: 'Κάθε προειδοποίηση για κίνδυνο ασθενών — λοίμωξη, ελαττωματικό υλικό, ύποπτο θάνατο, απαίτηση χρημάτων — σφραγίζεται με χρονοσφραγίδα σε ανεξάρτητη αρχή. Κάθε δυσμενής κίνηση κατά του προειδοποιούντος σημαίνεται, και η διοίκηση πρέπει να αποδείξει ότι δεν είναι αντίποινα.',
      en: 'Every warning of risk to patients — an infection, a faulty supply, a suspicious death, a demand for money — is time-stamped with an independent authority. Any adverse move against the person who warned is flagged, and management must prove it is not retaliation.',
    },
    humans: {
      el: 'Η ανεξάρτητη αρχή και τα δικαστήρια κρίνουν· η ΤΝ απλώς θυμάται ποιος προειδοποίησε πρώτος και πότε.',
      en: 'The independent authority and the courts judge; the AI simply remembers who warned first, and when.',
    },
    antilogos: {
      el: 'Στην αρχή μιας κρίσης κυκλοφορούν και λανθασμένες προειδοποιήσεις· η αυτόματη προστασία μπορεί να δώσει κύρος σε πανικό.',
      en: 'At the start of a crisis, false alarms circulate too; automatic protection could lend authority to panic.',
    },
    distributional: {
      el: 'Πληρώνουν οι διοικήσεις που προτιμούσαν τη σιωπή. Ωφελείται κάθε επόμενος ασθενής.',
      en: 'Managements that preferred silence pay. Every next patient gains.',
    },
    virtues: ['andreia', 'parrhesia'],
    delta: { life_health: 4, practical_reason: 3, affiliation_trust: 3 },
  },
  {
    id: 'outcome',
    n: 'Σ10',
    name: { el: 'Παρακολούθηση Έκβασης', en: 'Outcome Watch' },
    precedent: {
      el: 'Ο Ιπποκράτης στις «Επιδημίες»: να ωφελείς — ή τουλάχιστον να μη βλάπτεις. Κανείς δεν ξέρει αν δεν βλάπτει, αν δεν μετρά.',
      en: 'Hippocrates in the “Epidemics”: to help — or at least to do no harm. No one knows they do no harm unless they measure.',
    },
    plain: {
      el: 'Όταν ασθενείς μεταφέρονται ή μια υπηρεσία κόβεται «για εξοικονόμηση», παρακολουθείται τι απογίνεται κάθε ασθενής — και οι θάνατοι σταματούν αμέσως το σχέδιο.',
      en: 'When patients are moved or a service is cut “to save money,” what becomes of each patient is tracked — and deaths halt the plan at once.',
    },
    how: {
      el: 'Κάθε μαζική μεταφορά ή περικοπή φροντίδας συνοδεύεται από παρακολούθηση ανά ασθενή: πού βρίσκεται, αν παίρνει τα φάρμακά του, βάρος, νοσηλείες, θάνατοι. Αν η θνησιμότητα ξεπεράσει το αναμενόμενο, το σχέδιο παγώνει αυτόματα και ενημερώνονται οι οικογένειες και ο Συνήγορος του Πολίτη.',
      en: 'Every mass transfer or cut in care comes with per-patient tracking: where they are, whether they get their medicines, weight, admissions, deaths. If mortality exceeds what is expected, the plan freezes automatically and families and the Ombudsman are informed.',
    },
    humans: {
      el: 'Η διοίκηση αποφασίζει τη μεταφορά· δεν μπορεί πια να την αφήσει χωρίς βλέμμα.',
      en: 'Management decides the transfer; it can no longer leave it unwatched.',
    },
    antilogos: {
      el: 'Η συνεχής παρακολούθηση ευάλωτων ανθρώπων είναι κι αυτή επιτήρηση· και η αυτόματη διακοπή μπορεί να παγώσει μια μεταρρύθμιση που θα ωφελούσε μακροπρόθεσμα.',
      en: 'Continuous tracking of vulnerable people is itself surveillance; and an automatic halt could freeze a reform that would help in the long run.',
    },
    distributional: {
      el: 'Πληρώνουν οι προϋπολογισμοί που «εξοικονομούσαν» σε ζωές. Ωφελούνται οι ασθενείς χωρίς φωνή — ψυχικά ασθενείς, ηλικιωμένοι, άποροι.',
      en: 'Budgets that “saved” on lives pay. Patients without a voice — psychiatric patients, the old, the poor — gain.',
    },
    virtues: ['phronesis', 'dikaiosyne'],
    delta: { life_health: 6, bodily_safety: 4 },
  },
]
