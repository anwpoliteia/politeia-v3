// The ten safeguards of ΛΟΓΙΣΤΑΙ. Each is a PROPOSAL (Hard Rule 1): the AI
// looks first at the powerful, great fortunes, VAT rings and the auditors
// themselves — never at the small taxpayer; named humans decide.

import type { Safeguard } from '../types'

export const SAFEGUARDS: readonly Safeguard[] = [
  {
    id: 'pep-first',
    n: 'Σ1',
    name: { el: 'Πρώτα οι Ισχυροί', en: 'The Powerful First' },
    precedent: {
      el: 'Στις εὐθῦναι λογοδοτούσε πρώτα όποιος είχε διαχειριστεί δημόσιο χρήμα — όχι ο απλός πολίτης (Αθηναίων Πολιτεία 54).',
      en: 'At the euthynai, those who had handled public money answered first — not the ordinary citizen (Constitution of the Athenians 54).',
    },
    plain: {
      el: 'Η διασταύρωση φορολογικών στοιχείων ξεκινά από τα πολιτικά πρόσωπα και τις οικογένειές τους — όχι από τον μικρό φορολογούμενο.',
      en: 'Tax cross-checks start with politically exposed persons and their families — not with the small taxpayer.',
    },
    how: {
      el: 'Τα στοιχεία που λαμβάνει η χώρα αυτόματα από το εξωτερικό (λογαριασμοί, εταιρείες, ακίνητα) διασταυρώνονται πρώτα με τις δηλώσεις υπουργών, βουλευτών, ανώτατων αξιωματούχων και συγγενών τους. Κάθε ασυμφωνία πηγαίνει σε ανεξάρτητο ελεγκτή, με ημερομηνία.',
      en: 'Data the country receives automatically from abroad (accounts, companies, property) is matched first against the declarations of ministers, MPs, senior officials and their relatives. Every mismatch goes to an independent auditor, with a date.',
    },
    humans: {
      el: 'Ο ελεγκτής κρίνει· η ΤΝ απλώς ορίζει τη σειρά: από πάνω προς τα κάτω.',
      en: 'The auditor judges; the AI only sets the order: from the top down.',
    },
    antilogos: {
      el: 'Η προτεραιότητα στους πολιτικούς μπορεί να γίνει όπλο κατά αντιπάλων, και οι συγγενείς δεν ευθύνονται για τα αξιώματα των δικών τους.',
      en: 'Prioritising politicians can be weaponised against opponents, and relatives are not responsible for their family’s office.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι έκρυβαν. Ωφελούνται οι φορολογούμενοι που δεν μπορούν να κρυφτούν — μισθωτοί και συνταξιούχοι.',
      en: 'Those who hid pay. Taxpayers who cannot hide — wage earners and pensioners — gain.',
    },
    virtues: ['dikaiosyne', 'andreia'],
    delta: { institutional_justice: 5, economic_security: 3, affiliation_trust: 3 },
  },
  {
    id: 'sealed-data',
    n: 'Σ2',
    name: { el: 'Σφραγισμένα Δεδομένα', en: 'Sealed Data' },
    precedent: {
      el: 'Ο Αριστοτέλης ζητούσε το δημόσιο χρήμα να παραδίδεται μπροστά σε όλους και αντίγραφα να κρατούνται σε κάθε φυλή (Πολιτικά 1309a).',
      en: 'Aristotle asked that public money be handed over before all, with copies kept by every tribe (Politics 1309a).',
    },
    plain: {
      el: 'Κάθε λίστα ή αρχείο που φτάνει στο κράτος σφραγίζεται τη στιγμή της παραλαβής — κανένα όνομα δεν μπορεί να «χαθεί» χωρίς να φανεί.',
      en: 'Every list or file the state receives is sealed on arrival — no name can “go missing” without it showing.',
    },
    how: {
      el: 'Κρυπτογραφικό αποτύπωμα στο αρχείο τη στιγμή της παραλαβής, αντίγραφα σε ανεξάρτητους φορείς, δημόσιο μητρώο κάθε πρόσβασης. Όλα τα ονόματα ελέγχονται αυτόματα — όχι «δέκα πολιτικοί» κατ’ επιλογή κάποιου. Κάθε διαγραφή ή αλλαγή φαίνεται.',
      en: 'A cryptographic fingerprint on the file at receipt, copies held by independent bodies, a public log of every access. Every name is checked automatically — not “ten politicians” picked by someone. Any deletion or change shows.',
    },
    humans: {
      el: 'Οι ελεγκτές δουλεύουν με τα στοιχεία· δεν μπορούν πια να τα διαλέξουν.',
      en: 'Auditors work with the data; they can no longer pick from it.',
    },
    antilogos: {
      el: 'Οι λίστες από διαρροές περιέχουν και αθώους, και η αυτόματη διασταύρωση όλων των ονομάτων μπορεί να εκθέσει ανθρώπους με νόμιμους λογαριασμούς.',
      en: 'Leaked lists include the innocent too, and automatically checking every name could expose people with lawful accounts.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι έσβηναν ονόματα. Ωφελείται η εμπιστοσύνη ότι ο νόμος ισχύει για όλους τους δικαιούχους μιας λίστας.',
      en: 'Those who deleted names pay. Trust that the law applies to everyone on a list gains.',
    },
    virtues: ['sophia', 'dikaiosyne'],
    delta: { institutional_justice: 5, affiliation_trust: 3 },
  },
  {
    id: 'owners',
    n: 'Σ3',
    name: { el: 'Ποιος Είναι Πίσω', en: 'Who Is Behind It' },
    precedent: {
      el: 'Η ΕΕ υποχρεώνει ήδη κάθε κράτος να τηρεί μητρώο πραγματικών δικαιούχων εταιρειών· λείπει η αυτόματη διασταύρωση με τις ροές χρήματος.',
      en: 'The EU already requires every state to keep a register of companies’ beneficial owners; what is missing is automatic matching against money flows.',
    },
    plain: {
      el: 'Πίσω από κάθε εταιρεία-κέλυφος υπάρχει ένας άνθρωπος — και η ΤΝ ακολουθεί το χρήμα ως εκείνον.',
      en: 'Behind every shell company there is a person — and the AI follows the money to them.',
    },
    how: {
      el: 'Διασταυρώνει μητρώα πραγματικών δικαιούχων, τραπεζικές ροές που λαμβάνονται νόμιμα από τις αρχές και δημόσιες συμβάσεις: εταιρείες με τον ίδιο διευθυντή, την ίδια διεύθυνση, χρήματα που κάνουν κύκλο και επιστρέφουν. Κάθε αλυσίδα που καταλήγει σε αξιωματούχο σημαίνεται.',
      en: 'Matches beneficial-ownership registers, bank flows lawfully obtained by the authorities, and public contracts: companies with the same director, the same address, money that goes round and comes back. Any chain ending at an official is flagged.',
    },
    humans: {
      el: 'Οι εισαγγελείς και οι ελεγκτές ερευνούν· η ΤΝ απλώς δεν αφήνει την αλυσίδα να σπάσει στο πρώτο κέλυφος.',
      en: 'Prosecutors and auditors investigate; the AI simply does not let the chain break at the first shell.',
    },
    antilogos: {
      el: 'Οι εταιρικές δομές στο εξωτερικό έχουν και νόμιμους λόγους — φορολογικό σχεδιασμό, ιδιωτικότητα, ασφάλεια.',
      en: 'Offshore structures also have lawful reasons — tax planning, privacy, security.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι κρύβονταν πίσω από κελύφη. Ωφελούνται οι φορολογούμενοι και οι τίμιες επιχειρήσεις που ανταγωνίζονταν με άνισους όρους.',
      en: 'Those hiding behind shells pay. Taxpayers and honest businesses that competed on unequal terms gain.',
    },
    virtues: ['sophia', 'parrhesia'],
    delta: { economic_security: 4, institutional_justice: 4 },
  },
  {
    id: 'vat-chain',
    n: 'Σ4',
    name: { el: 'Αλυσίδα ΦΠΑ σε Πραγματικό Χρόνο', en: 'Live VAT Chain' },
    precedent: {
      el: 'Η Ελλάδα έχει ήδη το myDATA: κάθε τιμολόγιο διαβιβάζεται ηλεκτρονικά. Λείπει η σύνδεση της αλυσίδας πριν επιστραφεί φόρος.',
      en: 'Greece already has myDATA: every invoice is transmitted electronically. What is missing is linking the chain before tax is refunded.',
    },
    plain: {
      el: 'Κανένας φόρος δεν επιστρέφεται αν η ΤΝ δεν δει ότι πληρώθηκε πρώτα κάπου στην αλυσίδα.',
      en: 'No tax is refunded unless the AI sees it was first paid somewhere along the chain.',
    },
    how: {
      el: 'Συνδέει τα ηλεκτρονικά τιμολόγια κάθε συναλλαγής από τον πρώτο έως τον τελευταίο κρίκο, και μέσα στην ΕΕ. Εταιρεία που χρεώνει ΦΠΑ χωρίς να τον αποδίδει, ή επιστροφή για φόρο που δεν παρακρατήθηκε ποτέ, σημαίνεται πριν φύγει το χρήμα.',
      en: 'Links the e-invoices of every transaction from the first link to the last, across the EU too. A company charging VAT without paying it over, or a refund for tax never withheld, is flagged before the money leaves.',
    },
    humans: {
      el: 'Η φορολογική διοίκηση αποφασίζει την επιστροφή· η ΤΝ απλώς δείχνει αν η αλυσίδα κλείνει.',
      en: 'The tax administration decides the refund; the AI simply shows whether the chain closes.',
    },
    antilogos: {
      el: 'Οι καθυστερήσεις στις επιστροφές πνίγουν τις τίμιες επιχειρήσεις, και οι απατεώνες θα βρουν νέα κενά γρηγορότερα από κάθε αλγόριθμο.',
      en: 'Refund delays strangle honest businesses, and fraudsters will find new gaps faster than any algorithm.',
    },
    distributional: {
      el: 'Πληρώνουν τα κυκλώματα ΦΠΑ. Ωφελούνται οι τίμιοι έμποροι — με εγγυημένη ταχεία επιστροφή όταν η αλυσίδα κλείνει καθαρά.',
      en: 'VAT rings pay. Honest traders gain — with a guaranteed fast refund when the chain closes cleanly.',
    },
    virtues: ['sophia', 'sophrosyne'],
    delta: { economic_security: 5, institutional_justice: 3 },
  },
  {
    id: 'kleros-audit',
    n: 'Σ5',
    name: { el: 'Κληρωτός Ελεγκτής', en: 'Auditor by Lot' },
    precedent: {
      el: 'Στην Αθήνα οι περισσότεροι άρχοντες και όλοι οι δικαστές κληρώνονταν, ώστε κανείς να μην ξέρει ποιον να «καλλιεργήσει».',
      en: 'In Athens most magistrates and all jurors were chosen by lot, so no one knew whom to “cultivate.”',
    },
    plain: {
      el: 'Κανένας εφοριακός δεν «έχει» τους φακέλους του: έλεγχοι και επιστροφές ανατίθενται με κλήρωση και διπλή υπογραφή.',
      en: 'No tax officer “owns” their files: audits and refunds are assigned by lot and need two signatures.',
    },
    how: {
      el: 'Η επιλογή ποιος θα ελεγχθεί μένει στην ανάλυση κινδύνου· το ποιος υπάλληλος θα χειριστεί τον φάκελο αποφασίζεται με επαληθεύσιμη κλήρωση, από άλλη περιοχή όταν χρειάζεται. Κάθε απόφαση υπογράφεται από δύο.',
      en: 'Who gets audited stays with risk analysis; which officer handles the file is decided by verifiable lot, from another region when needed. Every decision is signed by two.',
    },
    humans: {
      el: 'Οι εφοριακοί ελέγχουν όπως πάντα· απλώς δεν διαλέγουν ποιον.',
      en: 'Tax officers audit as ever; they simply do not choose whom.',
    },
    antilogos: {
      el: 'Η τοπική γνώση χάνεται: ο εφοριακός που ξέρει την αγορά της περιοχής του εντοπίζει την απάτη καλύτερα από έναν κληρωμένο ξένο.',
      en: 'Local knowledge is lost: an officer who knows the local market spots fraud better than a stranger drawn by lot.',
    },
    distributional: {
      el: 'Πληρώνουν τα τοπικά κυκλώματα. Ωφελούνται οι επιχειρήσεις που δεν έχουν «δικό τους» εφοριακό.',
      en: 'Local rings pay. Businesses without “their own” tax officer gain.',
    },
    virtues: ['dikaiosyne', 'sophrosyne'],
    delta: { institutional_justice: 4, economic_security: 2, affiliation_trust: 3 },
  },
  {
    id: 'refund-clock',
    n: 'Σ6',
    name: { el: 'Ρολόι Επιστροφής', en: 'Refund Clock' },
    precedent: {
      el: 'Η διακριτική ευχέρεια χωρίς προθεσμία είναι η πρώτη ύλη του εκβιασμού· κάθε σύγχρονη διοίκηση ξέρει να μετρά προθεσμίες — αρκεί να τις δημοσιεύει.',
      en: 'Discretion without a deadline is the raw material of extortion; any modern administration can count deadlines — if it publishes them.',
    },
    plain: {
      el: 'Κάθε επιστροφή φόρου έχει δημόσια κατάσταση και προθεσμία — κανείς δεν μπορεί να την «κρατά» σιωπηλά για να ζητήσει κάτι.',
      en: 'Every tax refund has a public status and a deadline — no one can silently “hold” it in order to ask for something.',
    },
    how: {
      el: 'Ο δικαιούχος βλέπει στο κινητό σε ποιο στάδιο είναι η επιστροφή του και ποιος υπάλληλος τη χειρίζεται. Όταν περνά η προθεσμία χωρίς αιτιολογία, ο φάκελος περνά αυτόματα σε άλλον και ενημερώνεται η υπηρεσία εσωτερικών υποθέσεων.',
      en: 'The claimant sees on their phone what stage their refund is at and which officer handles it. When the deadline passes with no reason, the file moves automatically to someone else and internal affairs is notified.',
    },
    humans: {
      el: 'Η υπηρεσία αποφασίζει· δεν μπορεί πια να αποφασίσει με την καθυστέρηση.',
      en: 'The office decides; it can no longer decide by delay.',
    },
    antilogos: {
      el: 'Οι προθεσμίες πιέζουν τους υπαλλήλους να εγκρίνουν γρήγορα και ύποπτες επιστροφές.',
      en: 'Deadlines push officers to approve suspicious refunds quickly too.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι εκβίαζαν με την αναμονή. Ωφελούνται οι μικρές επιχειρήσεις που ζουν από τη ρευστότητά τους.',
      en: 'Those who extorted through waiting pay. Small businesses that live on their cash flow gain.',
    },
    virtues: ['parrhesia', 'dikaiosyne'],
    delta: { economic_security: 4, institutional_justice: 3, affiliation_trust: 2 },
  },
  {
    id: 'open-method',
    n: 'Σ7',
    name: { el: 'Ανοιχτή Μεθοδολογία', en: 'Open Method' },
    precedent: {
      el: 'Ο Κώδικας Ορθής Πρακτικής των Ευρωπαϊκών Στατιστικών κατοχυρώνει την επαγγελματική ανεξαρτησία των στατιστικών αρχών.',
      en: 'The European Statistics Code of Practice enshrines the professional independence of statistical authorities.',
    },
    plain: {
      el: 'Όταν ένας αριθμός ενοχλεί την εξουσία, η διαφωνία λύνεται με ανοιχτά δεδομένα και ανεξάρτητους ειδικούς — όχι με ποινική δίωξη του στατιστικού.',
      en: 'When a number displeases those in power, the dispute is settled with open data and independent experts — not by prosecuting the statistician.',
    },
    how: {
      el: 'Κάθε επίσημος αριθμός δημοσιεύεται με τη μεθοδολογία και τα δεδομένα του, ώστε ο καθένας να τον αναπαραγάγει. Πριν ασκηθεί δίωξη για «λάθος» στατιστικά, απαιτείται γνώμη ανεξάρτητου διεθνούς πάνελ, δημόσια.',
      en: 'Every official figure is published with its method and data, so anyone can reproduce it. Before any prosecution over “wrong” statistics, an independent international panel must give a public opinion.',
    },
    humans: {
      el: 'Οι στατιστικοί υπογράφουν τους αριθμούς τους· οι εισαγγελείς κρίνουν εγκλήματα, όχι μεθοδολογίες.',
      en: 'Statisticians sign their numbers; prosecutors judge crimes, not methods.',
    },
    antilogos: {
      el: 'Και οι στατιστικοί μπορεί να παρανομήσουν· ένα πάνελ πριν από τη δίωξη μοιάζει με ασυλία μιας συντεχνίας.',
      en: 'Statisticians can break the law too; a panel before prosecution looks like immunity for a guild.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι ήθελαν «βολικούς» αριθμούς. Ωφελείται κάθε πολίτης που χρειάζεται να ξέρει την αλήθεια για τα οικονομικά της χώρας του.',
      en: 'Those who wanted “convenient” numbers pay. Every citizen who needs the truth about their country’s finances gains.',
    },
    virtues: ['parrhesia', 'sophia'],
    delta: { institutional_justice: 4, practical_reason: 3, affiliation_trust: 3 },
  },
  {
    id: 'shield',
    n: 'Σ8',
    name: { el: 'Ασπίδα Μάρτυρα', en: 'Witness Shield' },
    precedent: {
      el: 'Η παρρησία δεν σημαίνει τίποτα αν όποιος μιλά τιμωρείται. Η ΕΕ το αναγνώρισε με την Οδηγία 2019/1937 για τους μάρτυρες δημοσίου συμφέροντος.',
      en: 'Parrhesia means nothing if whoever speaks is punished. The EU recognised this in Directive 2019/1937 on whistleblowers.',
    },
    plain: {
      el: 'Όποιος φέρνει στο φως λίστες, αριθμούς ή λογαριασμούς προστατεύεται αυτόματα — και όποιος τον διώκει πρέπει να αποδείξει ότι δεν είναι αντίποινα.',
      en: 'Whoever brings lists, numbers or accounts to light is protected automatically — and whoever prosecutes them must prove it is not retaliation.',
    },
    how: {
      el: 'Κάθε αποκάλυψη δημοσίου συμφέροντος σφραγίζεται με χρονοσφραγίδα σε ανεξάρτητη αρχή. Κάθε δίωξη, αγωγή ή δυσμενής κίνηση κατά του αποκαλύπτοντος σημαίνεται δημόσια, με το ερώτημα: διώκεται ο αγγελιοφόρος ή το μήνυμα;',
      en: 'Every public-interest disclosure is time-stamped at an independent authority. Every prosecution, lawsuit or adverse move against the discloser is flagged publicly, with the question: is it the messenger or the message being prosecuted?',
    },
    humans: {
      el: 'Τα δικαστήρια κρίνουν· η ΤΝ απλώς θυμάται ποιος μίλησε πρώτος και τι απέγινε.',
      en: 'Courts judge; the AI simply remembers who spoke first and what became of them.',
    },
    antilogos: {
      el: 'Οι διαρροές παραβιάζουν και νόμιμο απόρρητο· η αυτόματη προστασία μπορεί να καλύψει και όσους διαρρέουν για προσωπικό όφελος.',
      en: 'Leaks also breach lawful confidentiality; automatic protection could cover those who leak for personal gain.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι κυνηγούσαν αγγελιοφόρους. Ωφελείται κάθε επόμενος υπάλληλος ή δημοσιογράφος που θα σκεφτεί να μιλήσει.',
      en: 'Those who hunted messengers pay. Every next employee or journalist who thinks of speaking gains.',
    },
    virtues: ['andreia', 'parrhesia'],
    delta: { institutional_justice: 4, practical_reason: 3, affiliation_trust: 2 },
  },
  {
    id: 'regulator-watch',
    n: 'Σ9',
    name: { el: 'Φύλακας του Εποπτευτή', en: 'Watching the Watchdog' },
    precedent: {
      el: 'Οι αθηναίοι εὔθυνοι έλεγχαν ακόμη και τους ελεγκτές· κανένας άρχων δεν ήταν πάνω από τη λογοδοσία.',
      en: 'The Athenian euthynoi checked even the checkers; no magistrate stood above the audit.',
    },
    plain: {
      el: 'Κάθε σοβαρή προειδοποίηση προς μια εποπτική αρχή καταγράφεται δημόσια με προθεσμία απάντησης — και η σιωπή της φαίνεται.',
      en: 'Every serious warning to a supervisor is logged publicly with a response deadline — and its silence shows.',
    },
    how: {
      el: 'Καταγγελίες εσωτερικών μαρτύρων, δημοσιογραφικές έρευνες και αναλύσεις αγοράς προς την εποπτεία καταχωρούνται με ημερομηνία. Αν δεν υπάρξει αιτιολογημένη απάντηση στην προθεσμία, το θέμα κλιμακώνεται αυτόματα σε ευρωπαϊκή αρχή ή στη Βουλή.',
      en: 'Insider complaints, journalistic investigations and market analyses sent to the supervisor are logged with a date. If there is no reasoned answer by the deadline, the matter escalates automatically to a European authority or to parliament.',
    },
    humans: {
      el: 'Η εποπτική αρχή εξακολουθεί να κρίνει· απλώς δεν μπορεί να κρίνει με τη σιωπή.',
      en: 'The supervisor still judges; it simply cannot judge by silence.',
    },
    antilogos: {
      el: 'Οι αγορές γεμίζουν φήμες και κερδοσκοπικές «αναφορές»· αν κάθε μία απαιτεί δημόσια απάντηση, οι εποπτικές αρχές θα πνιγούν.',
      en: 'Markets are full of rumours and speculative “reports”; if each demands a public answer, supervisors will drown.',
    },
    distributional: {
      el: 'Πληρώνουν οι εποπτευτές που προστάτευαν τον εποπτευόμενο. Ωφελούνται οι αποταμιευτές και οι μικροεπενδυτές.',
      en: 'Supervisors who protected the supervised pay. Savers and small investors gain.',
    },
    virtues: ['parrhesia', 'andreia'],
    delta: { economic_security: 4, institutional_justice: 4 },
  },
  {
    id: 'clock',
    n: 'Σ10',
    name: { el: 'Ρολόι Παραγραφής', en: 'The Limitation Clock' },
    precedent: {
      el: 'Εὐθῦναι: κάθε αθηναίος άρχων λογοδοτούσε δημόσια για κάθε δραχμή στο τέλος της θητείας του (Αθηναίων Πολιτεία 48, 54).',
      en: 'Euthynai: every Athenian magistrate accounted publicly for every drachma at the end of office (Constitution of the Athenians 48, 54).',
    },
    plain: {
      el: 'Για κάθε υπόθεση δημόσιου χρήματος, ένα δημόσιο ρολόι: πόσα χάθηκαν, πόσα γύρισαν, σε ποιον βρίσκεται ο φάκελος και πόσος χρόνος μένει.',
      en: 'For every public-money case, a public clock: how much was lost, how much came back, who holds the file and how much time is left.',
    },
    how: {
      el: 'Παρακολουθεί παραγραφές, ψηφοφορίες για άρση ασυλίας, αναβολές και χρόνια κράτησης· καταγράφει ποιος θεσμός κρατά την υπόθεση και για πόσο. Όταν ο χρόνος λιγοστεύει, ειδοποιεί όσους πολίτες την ακολουθούν.',
      en: 'Tracks limitation periods, votes to lift immunity, adjournments and detention limits; logs which institution holds the case and for how long. When time runs short, it alerts the citizens following it.',
    },
    humans: {
      el: 'Η Βουλή, η εισαγγελία και τα δικαστήρια αποφασίζουν· δεν μπορούν πια να αφήσουν τον χρόνο να αποφασίσει γι’ αυτούς.',
      en: 'Parliament, prosecutors and courts decide; they can no longer let the clock decide for them.',
    },
    antilogos: {
      el: 'Κίνδυνος λαϊκού δικαστηρίου: μια αντίστροφη μέτρηση μπορεί να γίνει δημόσια καταδίκη πριν από τη δίκη.',
      en: 'Risk of trial by crowd: a countdown can become a public conviction before any trial.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι επένδυαν στην καθυστέρηση. Ωφελείται ο φορολογούμενος.',
      en: 'Those who invested in delay pay. The taxpayer gains.',
    },
    virtues: ['andreia', 'parrhesia'],
    delta: { institutional_justice: 5, practical_reason: 3 },
  },
]
