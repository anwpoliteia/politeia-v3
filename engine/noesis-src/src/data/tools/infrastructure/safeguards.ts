// The ten safeguards of ΔΑΙΔΑΛΟΣ. Each is a PROPOSAL (Hard Rule 1): the AI
// watches those who award, sign, supervise and accept public works — never
// the last worker in the chain; named humans decide.

import type { Safeguard } from '../types'

export const SAFEGUARDS: readonly Safeguard[] = [
  {
    id: 'safety-clock',
    n: 'Σ1',
    name: { el: 'Ρολόι Ασφαλείας', en: 'The Safety Clock' },
    precedent: {
      el: 'Ελληνικό δικαστήριο έκρινε ήδη (2024) ότι η λειτουργία σιδηροδρομικής γραμμής χωρίς το σύστημα τηλεδιοίκησης που προβλεπόταν από το 2014 συνιστά «βαριά αμέλεια».',
      en: 'A Greek court has already held (2024) that running a rail line without the remote-control system planned since 2014 amounts to “serious negligence.”',
    },
    plain: {
      el: 'Κάθε σύστημα ασφαλείας που έχει συμβασιοποιηθεί αποκτά δημόσιο ρολόι από την αρχική προθεσμία — και κάθε παράταση χρειάζεται υπογεγραμμένη, δημόσια αιτιολόγηση.',
      en: 'Every contracted safety system gets a public clock running from its original deadline — and every extension needs a signed, public justification.',
    },
    how: {
      el: 'Σηματοδότηση, αντιπλημμυρικά, συστήματα ειδοποίησης: η ΤΝ δείχνει σε έναν χάρτη πόσες μέρες καθυστερεί το καθένα, ποια υπηρεσία το οφείλει και ποιος υπέγραψε κάθε παράταση. Όσο μεγαλώνει η καθυστέρηση, τόσο ανεβαίνει το επίπεδο που πρέπει να απαντήσει — ως τον υπουργό.',
      en: 'Signalling, flood works, warning systems: the AI shows on a map how many days each is late, which body owes it and who signed each extension. The longer the delay, the higher the level that must answer — up to the minister.',
    },
    humans: {
      el: 'Οι μηχανικοί κρίνουν αν μια παράταση είναι αναγκαία· το ρολόι απλώς δεν αφήνει να γίνει σιωπηλά.',
      en: 'Engineers judge whether an extension is necessary; the clock simply does not let it happen silently.',
    },
    antilogos: {
      el: 'Οι καθυστερήσεις έχουν συχνά αντικειμενικές αιτίες — ελεγκτικά μπλοκαρίσματα, υλικά που σταμάτησαν να παράγονται, φυσικές καταστροφές. Ένα κόκκινο ρολόι μπορεί να ενοχοποιεί όσους δεν φταίνε.',
      en: 'Delays often have objective causes — audit freezes, discontinued materials, natural disasters. A red clock may incriminate people who are not at fault.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι άφηναν τα συστήματα ασφαλείας να περιμένουν. Ωφελούνται οι επιβάτες, οι εργαζόμενοι και όσοι ζουν δίπλα σε ρέματα.',
      en: 'Those who let safety systems wait pay. Passengers, workers and those living by streams gain.',
    },
    virtues: ['phronesis', 'andreia'],
    delta: { bodily_safety: 5, institutional_justice: 3, affiliation_trust: 2 },
  },
  {
    id: 'open-contract',
    n: 'Σ2',
    name: { el: 'Ανοιχτή Σύμβαση', en: 'The Open Contract' },
    precedent: {
      el: 'Οι λογαριασμοί της κατασκευής του Ερεχθείου χαράχτηκαν σε μάρμαρο στην Ακρόπολη: κάθε εργάτης, κάθε μεροκάματο, κάθε δραχμή.',
      en: 'The building accounts of the Erechtheion were carved in marble on the Acropolis: every worker, every day’s wage, every drachma.',
    },
    plain: {
      el: 'Κάθε σύμβαση δημόσιου έργου, κάθε τροποποίηση και κάθε πληρωμή δημοσιεύεται ολόκληρη, σε μορφή που διαβάζει και ο άνθρωπος και η μηχανή.',
      en: 'Every public-works contract, every amendment and every payment is published in full, in a form both people and machines can read.',
    },
    how: {
      el: 'Τα έγγραφα ακολουθούν το διεθνές Ανοιχτό Πρότυπο Δεδομένων Συμβάσεων. Η ΤΝ συνδέει ανάθεση, τροποποιήσεις, αποζημιώσεις και πιστοποιήσεις εργασιών, και δείχνει πότε πληρώθηκε κάτι που δεν είχε παραδοθεί.',
      en: 'Documents follow the international Open Contracting Data Standard. The AI links award, amendments, compensation and work certifications, and shows when something was paid that had not been delivered.',
    },
    humans: {
      el: 'Οι ελεγκτές και οι πολίτες διαβάζουν· η υπηρεσία αναθέτει όπως πάντα — απλώς όχι στο σκοτάδι.',
      en: 'Auditors and citizens read; the agency awards as always — just not in the dark.',
    },
    antilogos: {
      el: 'Οι συμβάσεις περιέχουν εμπορικά απόρρητα και στοιχεία ασφαλείας υποδομών· η πλήρης δημοσιότητα μπορεί να βοηθήσει ανταγωνιστές ή κακόβουλους.',
      en: 'Contracts contain trade secrets and infrastructure security details; full publication could help competitors or bad actors.',
    },
    distributional: {
      el: 'Χάνουν όσοι κέρδιζαν από την αδιαφάνεια. Κερδίζουν οι φορολογούμενοι και οι έντιμοι ανάδοχοι.',
      en: 'Those who profited from opacity lose. Taxpayers and honest contractors gain.',
    },
    virtues: ['parrhesia', 'dikaiosyne'],
    delta: { institutional_justice: 5, economic_security: 2, affiliation_trust: 3 },
  },
  {
    id: 'bid-screen',
    n: 'Σ3',
    name: { el: 'Ανιχνευτής Στημένων Διαγωνισμών', en: 'Rigged-Tender Screen' },
    precedent: {
      el: 'Η Open Contracting Partnership όρισε το 2024 73 δείκτες «κόκκινης σημαίας» για τις δημόσιες προμήθειες, με ανοιχτή βιβλιοθήκη λογισμικού για τον υπολογισμό τους.',
      en: 'In 2024 the Open Contracting Partnership defined 73 public-procurement “red flag” indicators, with an open-source library to compute them.',
    },
    plain: {
      el: 'Η ΤΝ ελέγχει κάθε διαγωνισμό για τα αποτυπώματα της σύμπραξης: ίδιοι νικητές με τη σειρά, μηδενικές εκπτώσεις, προσφορές-«βιτρίνα», ύποπτες αποσύρσεις.',
      en: 'The AI screens every tender for the fingerprints of collusion: the same winners in rotation, zero discounts, cover bids, suspicious withdrawals.',
    },
    how: {
      el: 'Κάθε διαγωνισμός βαθμολογείται με δημόσια, ανοιχτή μέθοδο. Οι υψηλές βαθμολογίες πηγαίνουν στην Επιτροπή Ανταγωνισμού και στην αρχή δημοσίων συμβάσεων — ενώ ο διαγωνισμός είναι ακόμη ανοιχτός, όχι δέκα χρόνια μετά.',
      en: 'Every tender is scored with a public, open method. High scores go to the Competition Commission and the procurement authority — while the tender is still open, not ten years later.',
    },
    humans: {
      el: 'Η βαθμολογία δεν αποδεικνύει τίποτα· η Επιτροπή Ανταγωνισμού ερευνά και κρίνει.',
      en: 'A score proves nothing; the Competition Commission investigates and judges.',
    },
    antilogos: {
      el: 'Σε μια μικρή αγορά με λίγους μεγάλους κατασκευαστές, η εναλλαγή νικητών μπορεί να είναι απλώς φυσική — και οι κατασκευαστές θα μάθουν να «ξεγελούν» τους δείκτες.',
      en: 'In a small market with few large builders, rotating winners may simply be natural — and builders will learn to game the indicators.',
    },
    distributional: {
      el: 'Πληρώνουν τα καρτέλ. Κερδίζουν οι φορολογούμενοι, που πληρώνουν πραγματικές τιμές ανταγωνισμού.',
      en: 'Cartels pay. Taxpayers gain, paying real competitive prices.',
    },
    virtues: ['sophia', 'dikaiosyne'],
    delta: { economic_security: 4, institutional_justice: 4 },
  },
  {
    id: 'health-register',
    n: 'Σ4',
    name: { el: 'Μητρώο Υγείας Έργων', en: 'The Structure Health Register' },
    precedent: {
      el: 'Στην Αθήνα κληρώνονταν πέντε οδοποιοί, με δημόσιους εργάτες, αποκλειστικά για να επισκευάζουν τους δρόμους (Αθηναίων Πολιτεία 54.1) — η συντήρηση ήταν αξίωμα, όχι λεπτομέρεια.',
      en: 'In Athens five road-builders were chosen by lot, with public workers, solely to repair the roads (Constitution of the Athenians 54.1) — maintenance was an office, not an afterthought.',
    },
    plain: {
      el: 'Κάθε γέφυρα, κάθε σταθμός και κάθε οδογέφυρα έχει δημόσιο φάκελο: πότε ελέγχθηκε, τι βρέθηκε, τι επισκευάστηκε και τι εκκρεμεί.',
      en: 'Every bridge, station and viaduct has a public file: when it was inspected, what was found, what was repaired and what is pending.',
    },
    how: {
      el: 'Οι επιθεωρήσεις καταχωρούνται με βαθμό κατάστασης. Η ΤΝ σημαίνει τις ληξιπρόθεσμες επιθεωρήσεις, τα ελαττώματα που αναφέρονται ξανά και ξανά χωρίς επισκευή, και τα έργα όπου ο ίδιος ο παραχωρησιούχος ελέγχει τον εαυτό του.',
      en: 'Inspections are logged with a condition grade. The AI flags overdue inspections, defects reported again and again without repair, and works where the concessionaire inspects itself.',
    },
    humans: {
      el: 'Οι μηχανικοί κρίνουν την ασφάλεια και αποφασίζουν αν κλείνει ένα έργο· το μητρώο θυμάται τι είπαν.',
      en: 'Engineers judge safety and decide whether a structure closes; the register remembers what they said.',
    },
    antilogos: {
      el: 'Η δημοσίευση ελαττωμάτων μπορεί να προκαλέσει πανικό για έργα που είναι ασφαλή, και οι μηχανικοί ίσως γράφουν λιγότερα όταν ξέρουν ότι θα διαβαστούν δημόσια.',
      en: 'Publishing defects may cause panic over structures that are safe, and engineers may write less when they know it will be read publicly.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι έκοβαν τη συντήρηση για κέρδος. Ωφελούνται όσοι περνούν κάθε μέρα από πάνω ή από κάτω.',
      en: 'Those who cut maintenance for profit pay. Those who pass over or under every day gain.',
    },
    virtues: ['phronesis', 'sophrosyne'],
    delta: { bodily_safety: 5, institutional_justice: 2, affiliation_trust: 2 },
  },
  {
    id: 'engineer-voice',
    n: 'Σ5',
    name: { el: 'Η Φωνή του Μηχανικού', en: 'The Engineer’s Voice' },
    precedent: {
      el: 'Η Οδηγία (ΕΕ) 2019/1937 προστατεύει ήδη όσους αναφέρουν παραβάσεις του ενωσιακού δικαίου — και στις δημόσιες συμβάσεις.',
      en: 'Directive (EU) 2019/1937 already protects people who report breaches of EU law — including in public procurement.',
    },
    plain: {
      el: 'Κάθε μηχανικός ή εργαζόμενος μπορεί να καταγράψει μια προειδοποίηση για κίνδυνο σε προστατευμένο κανάλι — και η προειδοποίηση παίρνει προθεσμία απάντησης.',
      en: 'Any engineer or worker can log a danger warning through a protected channel — and the warning gets a response deadline.',
    },
    how: {
      el: 'Η προειδοποίηση σφραγίζεται με ημερομηνία και πηγαίνει ταυτόχρονα στον φορέα του έργου και σε ανεξάρτητη αρχή. Αν δεν απαντηθεί εγκαίρως, κλιμακώνεται. Κάθε δυσμενής μεταχείριση του προσώπου που την έκανε σημαίνεται ως πιθανή εκδίκηση.',
      en: 'The warning is date-sealed and goes to the project owner and an independent authority at once. If not answered in time, it escalates. Any adverse treatment of the person who made it is flagged as possible retaliation.',
    },
    humans: {
      el: 'Ανεξάρτητοι μηχανικοί αξιολογούν την προειδοποίηση· η ΤΝ φροντίζει να μη χαθεί.',
      en: 'Independent engineers assess the warning; the AI makes sure it is not lost.',
    },
    antilogos: {
      el: 'Ένα ανοιχτό κανάλι μπορεί να γεμίσει με αβάσιμες ή εκδικητικές καταγγελίες από δυσαρεστημένους εργαζόμενους, καθυστερώντας έργα που δεν έχουν κανένα πρόβλημα.',
      en: 'An open channel may fill with unfounded or vindictive complaints from disgruntled workers, delaying projects that have no problem at all.',
    },
    distributional: {
      el: 'Χάνουν όσοι έθαβαν τις προειδοποιήσεις. Κερδίζουν οι μηχανικοί που τολμούν — και όσοι θα χρησιμοποιήσουν το έργο.',
      en: 'Those who buried warnings lose. Engineers who speak up gain — and so do those who will use the work.',
    },
    virtues: ['parrhesia', 'andreia'],
    delta: { bodily_safety: 4, institutional_justice: 3, affiliation_trust: 2 },
  },
  {
    id: 'opening-seal',
    n: 'Σ6',
    name: { el: 'Σφραγίδα Παράδοσης', en: 'The Opening Seal' },
    precedent: {
      el: 'Στην Αθήνα η Βουλή επιθεωρούσε όλα τα δημόσια οικοδομήματα και κατήγγελλε στον δήμο όποιον έβρισκε να αδικεί (Αθηναίων Πολιτεία 46).',
      en: 'In Athens the Council inspected all public buildings and reported to the people anyone it found doing wrong (Constitution of the Athenians 46).',
    },
    plain: {
      el: 'Κανένα δημόσιο έργο δεν ανοίγει ή ξανανοίγει στο κοινό χωρίς ανεξάρτητο, δημοσιευμένο πιστοποιητικό αντοχής και ασφάλειας.',
      en: 'No public work opens or reopens to the public without an independent, published load and safety certificate.',
    },
    how: {
      el: 'Το πιστοποιητικό εκδίδεται από μηχανικό που ορίζεται με κλήρωση και δεν έχει σχέση με τον ανάδοχο. Η ΤΝ ελέγχει ότι υπάρχει πριν από κάθε εγκαίνια, και σημαίνει δημόσια κάθε έργο που λειτουργεί χωρίς αυτό.',
      en: 'The certificate is issued by an engineer drawn by lot with no tie to the contractor. The AI checks it exists before any opening ceremony, and publicly flags any work operating without it.',
    },
    humans: {
      el: 'Ο πιστοποιών μηχανικός αποφασίζει· κανένας πολιτικός δεν μπορεί να κόψει κορδέλα χωρίς την υπογραφή του.',
      en: 'The certifying engineer decides; no politician can cut a ribbon without their signature.',
    },
    antilogos: {
      el: 'Ο πρόσθετος έλεγχος καθυστερεί έργα που οι πολίτες περιμένουν χρόνια, και σε επείγουσες περιπτώσεις — μια γέφυρα μετά από πλημμύρα — η καθυστέρηση έχει κι αυτή κόστος.',
      en: 'The extra check delays works citizens have waited years for, and in emergencies — a bridge after a flood — delay has its own cost.',
    },
    distributional: {
      el: 'Χάνουν τα βιαστικά εγκαίνια. Κερδίζουν όσοι μπαίνουν πρώτοι σε έναν σταθμό ή περνούν πρώτοι μια γέφυρα.',
      en: 'Hurried inaugurations lose. The first people into a station or across a bridge gain.',
    },
    virtues: ['sophrosyne', 'phronesis'],
    delta: { bodily_safety: 5, life_health: 2, institutional_justice: 2 },
  },
  {
    id: 'independent-overseer',
    n: 'Σ7',
    name: { el: 'Επόπτης Χωρίς Εξάρτηση', en: 'The Independent Overseer' },
    precedent: {
      el: 'Η Κομισιόν δίνει ήδη δωρεάν το εργαλείο ARACHNE, που βαθμολογεί τον κίνδυνο συμβάσεων και αναδόχων έργων της ΕΕ — χωρίς να αποδεικνύει τίποτα· απλώς δείχνει στον ελεγκτή πού να κοιτάξει.',
      en: 'The Commission already offers ARACHNE free of charge, scoring the risk of EU-funded contracts and contractors — proving nothing, simply showing auditors where to look.',
    },
    plain: {
      el: 'Όσοι εποπτεύουν έναν ανάδοχο ή παραχωρησιούχο εναλλάσσονται, δεν έχουν σχέση μαζί του, και κάθε έγκρισή τους καταγράφεται δημόσια.',
      en: 'Those who supervise a contractor or concessionaire rotate, have no ties to it, and every approval they give is publicly recorded.',
    },
    how: {
      el: 'Η ΤΝ διασταυρώνει επόπτες, αναδόχους και υπεργολάβους με μητρώα εταιρειών και πραγματικών δικαιούχων, και βαθμολογεί τον κίνδυνο κάθε σύμβασης όπως το ARACHNE. Οι εγκρίσεις αποζημιώσεων και παραλαβών φέρουν το όνομα του επόπτη.',
      en: 'The AI cross-checks overseers, contractors and subcontractors against company and beneficial-owner registers, and scores each contract’s risk as ARACHNE does. Approvals of compensation and acceptance carry the overseer’s name.',
    },
    humans: {
      el: 'Ο ελεγκτής ερευνά τις υψηλές βαθμολογίες· η βαθμολογία μόνη της δεν κατηγορεί κανέναν.',
      en: 'The auditor investigates high scores; a score alone accuses no one.',
    },
    antilogos: {
      el: 'Οι εξειδικευμένοι επόπτες είναι λίγοι· η εναλλαγή σημαίνει ότι όποιος ξέρει καλύτερα ένα σύνθετο έργο φεύγει ακριβώς όταν χρειάζεται.',
      en: 'Specialised overseers are few; rotation means whoever best knows a complex project leaves just when needed.',
    },
    distributional: {
      el: 'Χάνουν οι παραχωρησιούχοι που ήλεγχαν τους ελεγκτές τους. Κερδίζουν οι χρήστες των έργων και οι φορολογούμενοι.',
      en: 'Concessionaires who controlled their controllers lose. Users of the works and taxpayers gain.',
    },
    virtues: ['dikaiosyne', 'sophrosyne'],
    delta: { institutional_justice: 4, bodily_safety: 3, economic_security: 2 },
  },
  {
    id: 'prescription-clock',
    n: 'Σ8',
    name: { el: 'Ρολόι Παραγραφής', en: 'The Limitation Clock' },
    precedent: {
      el: 'Το 2022 ο Εισαγγελέας του Αρείου Πάγου διέταξε έρευνα για το αν κάποιος «συνέβαλε ουσιωδώς» στην παραγραφή της υπόθεσης Siemens.',
      en: 'In 2022 the Supreme Court Prosecutor ordered an inquiry into whether anyone “substantially contributed” to the Siemens case becoming time-barred.',
    },
    plain: {
      el: 'Κάθε ανοιχτή υπόθεση για δημόσιο έργο δείχνει δημόσια πότε παραγράφεται — και ποιος τη χειρίζεται.',
      en: 'Every open case over a public work shows publicly when it becomes time-barred — and who is handling it.',
    },
    how: {
      el: 'Η ΤΝ υπολογίζει την ημερομηνία παραγραφής κάθε υπόθεσης και προειδοποιεί όταν πλησιάζει χωρίς ορισμένη δίκη. Κάθε αναβολή καταγράφεται με τον λόγο της. Όταν μια υπόθεση παραγράφεται, ο φάκελος δείχνει πού χάθηκε ο χρόνος.',
      en: 'The AI computes each case’s limitation date and warns when it approaches with no trial set. Each adjournment is recorded with its reason. When a case expires, the file shows where the time was lost.',
    },
    humans: {
      el: 'Οι δικαστές ορίζουν τον ρυθμό της δίκης· το ρολόι απλώς κάνει ορατό τον χρόνο που μένει.',
      en: 'Judges set the pace of the trial; the clock only makes visible the time left.',
    },
    antilogos: {
      el: 'Η παραγραφή υπάρχει για να προστατεύει τον κατηγορούμενο από δίκες που δεν τελειώνουν. Η δημόσια πίεση στα δικαστήρια να «προλάβουν» μπορεί να οδηγήσει σε βιαστικές αποφάσεις.',
      en: 'Limitation exists to protect defendants from endless trials. Public pressure on courts to “beat the clock” may lead to hasty verdicts.',
    },
    distributional: {
      el: 'Χάνουν όσοι υπολόγιζαν στη λήθη. Κερδίζουν τα θύματα και ο κατηγορούμενος που θέλει να κριθεί, όχι να ξεχαστεί.',
      en: 'Those counting on oblivion lose. Victims gain — and so does the defendant who wants to be judged, not forgotten.',
    },
    virtues: ['dikaiosyne', 'andreia'],
    delta: { institutional_justice: 5, affiliation_trust: 3 },
  },
  {
    id: 'cost-mirror',
    n: 'Σ9',
    name: { el: 'Κάτοπτρο Κόστους', en: 'The Cost Mirror' },
    precedent: {
      el: 'Οι επιστάτες του Παρθενώνα χάραζαν κάθε χρόνο σε μάρμαρο τα έσοδα και τις δαπάνες του έργου — ο λογαριασμός ήταν μέρος του μνημείου.',
      en: 'The overseers of the Parthenon carved the project’s income and spending in marble each year — the account was part of the monument.',
    },
    plain: {
      el: 'Κάθε υπέρβαση κόστους συγκρίνεται αυτόματα με όμοια έργα στην Ευρώπη — και όποιο κενό δεν εξηγείται φαίνεται.',
      en: 'Every cost overrun is compared automatically with similar projects across Europe — and any unexplained gap shows.',
    },
    how: {
      el: 'Η ΤΝ υπολογίζει κόστος ανά χιλιόμετρο γραμμής, ανά μέτρο γέφυρας ή ανά τετραγωνικό σταθμού και το συγκρίνει με ευρωπαϊκά έργα. Κάθε αύξηση πάνω από ένα όριο χρειάζεται δημόσια αιτιολόγηση με υπογραφή.',
      en: 'The AI computes the cost per kilometre of line, per metre of bridge or per square metre of station and compares it with European projects. Any increase above a threshold needs a signed public justification.',
    },
    humans: {
      el: 'Οι μηχανικοί εξηγούν γιατί ένα έργο είναι ακριβότερο· συχνά υπάρχει καλός λόγος.',
      en: 'Engineers explain why a project costs more; often there is a good reason.',
    },
    antilogos: {
      el: 'Κανένα έργο δεν είναι ίδιο με άλλο: το έδαφος, ο σεισμικός κίνδυνος, οι αρχαιότητες στην Ελλάδα ανεβάζουν το κόστος θεμιτά. Οι συγκρίσεις μπορεί να παραπλανούν.',
      en: 'No two projects are alike: terrain, seismic risk and antiquities in Greece raise costs legitimately. Comparisons can mislead.',
    },
    distributional: {
      el: 'Χάνουν όσοι φούσκωναν λογαριασμούς. Κερδίζουν οι φορολογούμενοι και τα έργα που θα γίνουν με όσα εξοικονομηθούν.',
      en: 'Those who inflated bills lose. Taxpayers gain — and so do the works built with what is saved.',
    },
    virtues: ['sophia', 'sophrosyne'],
    delta: { economic_security: 4, institutional_justice: 3 },
  },
  {
    id: 'named-vote',
    n: 'Σ10',
    name: { el: 'Επώνυμη Ψήφος', en: 'The Named Vote' },
    precedent: {
      el: 'Η Εκκλησία του Δήμου ψήφιζε με ανάταση χειρός — ο καθένας έβλεπε πώς ψήφισε ο διπλανός του.',
      en: 'The Athenian Assembly voted by show of hands — everyone saw how their neighbour voted.',
    },
    plain: {
      el: 'Όταν η Βουλή αποφασίζει αν θα ερευνηθεί υπουργός για δημόσιο έργο, κάθε βουλευτής ψηφίζει επώνυμα, και ο φάκελος των στοιχείων είναι δημόσιος.',
      en: 'When Parliament decides whether to investigate a minister over a public work, every MP votes by name, and the evidence file is public.',
    },
    how: {
      el: 'Η ΤΝ συγκεντρώνει σε έναν δημόσιο φάκελο ό,τι είναι ήδη γνωστό — συμβάσεις, εκθέσεις, αποφάσεις — πριν από την ψηφοφορία. Κάθε ψήφος δημοσιεύεται με το όνομα και την αιτιολόγηση του βουλευτή.',
      en: 'The AI gathers into one public file what is already known — contracts, reports, rulings — before the vote. Every vote is published with the MP’s name and reasoning.',
    },
    humans: {
      el: 'Οι βουλευτές αποφασίζουν όπως ορίζει το Σύνταγμα· απλώς το κάνουν μπροστά στους ψηφοφόρους τους.',
      en: 'MPs decide as the Constitution provides; they simply do it in front of their voters.',
    },
    antilogos: {
      el: 'Η μυστική ψηφοφορία προστατεύει τον βουλευτή από την κομματική πειθαρχία και του επιτρέπει να ψηφίσει κατά συνείδηση· η επώνυμη ψήφος μπορεί να κάνει τα πάντα κομματικό πόλεμο.',
      en: 'A secret ballot protects MPs from party discipline and lets them vote their conscience; a named vote may turn everything into party warfare.',
    },
    distributional: {
      el: 'Χάνουν όσοι προστάτευαν συναδέλφους στο σκοτάδι. Κερδίζουν οι ψηφοφόροι, που μαθαίνουν τι ψήφισε ο βουλευτής τους.',
      en: 'Those who shielded colleagues in the dark lose. Voters gain, learning how their MP voted.',
    },
    virtues: ['parrhesia', 'dikaiosyne'],
    delta: { institutional_justice: 5, affiliation_trust: 4 },
  },
]
