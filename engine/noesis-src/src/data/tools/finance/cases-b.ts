// ΛΟΓΙΣΤΑΙ — cases 6–10. Same rules as cases-a.ts: sourced facts checked on
// 2026-09-30, the office in the headline, the harmed always named, and the
// presumption of innocence stated for every open case.

import type { ToolCase } from '../types'

export const CASES_B: readonly ToolCase[] = [
  {
    id: 'malaysia-1mdb-2015',
    when: '2009–2026',
    place: { el: 'Μαλαισία', en: 'Malaysia' },
    title: {
      el: 'Το γραφείο του πρωθυπουργού εποπτεύε ένα κρατικό αναπτυξιακό ταμείο — και δισεκατομμύρια έφυγαν από αυτό',
      en: 'The prime minister’s office oversaw a state development fund — and billions left it',
    },
    harmed: { el: 'Οι φορολογούμενοι της Μαλαισίας · οι δημοσιογράφοι που το αποκάλυψαν', en: 'Malaysia’s taxpayers · the journalists who exposed it' },
    plain: {
      el: 'Από το κρατικό ταμείο 1MDB φέρεται να υπεξαιρέθηκαν πάνω από 4,5 δισ. δολάρια· ο γενικός εισαγγελέας της χώρας καθάρισε αρχικά τον πρωθυπουργό, οι εφημερίδες που έγραψαν για το σκάνδαλο ανεστάλησαν, και η καταδίκη ήρθε μόνο αφού έχασε την εξουσία.',
      en: 'More than $4.5 billion was allegedly siphoned from the 1MDB state fund; the country’s attorney general first cleared the prime minister, the papers that reported the scandal were suspended, and conviction came only after he lost power.',
    },
    facts: [
      {
        el: '2009–2015: κατά τις αγωγές δήμευσης του αμερικανικού υπουργείου Δικαιοσύνης, πάνω από 4,5 δισ. δολάρια του 1MDB φέρεται να υπεξαιρέθηκαν από υψηλόβαθμους αξιωματούχους και συνεργάτες τους — η μεγαλύτερη υπόθεση της πρωτοβουλίας του για την ανάκτηση προϊόντων κλεπτοκρατίας.',
        en: '2009–2015: according to US Department of Justice forfeiture complaints, more than $4.5 billion of 1MDB money was allegedly misappropriated by high-level officials and associates — the largest case of its kleptocracy asset-recovery initiative.',
      },
      {
        el: 'Ιούλιος 2015: το υπουργείο Εσωτερικών αναστέλλει για τρεις μήνες δύο εφημερίδες του ομίλου The Edge για τα ρεπορτάζ τους για το 1MDB, επικαλούμενο τη «δημόσια τάξη»· λίγες μέρες νωρίτερα έχει μπλοκαριστεί η ιστοσελίδα Sarawak Report.',
        en: 'July 2015: the Home Ministry suspends two papers of The Edge group for three months over their 1MDB reporting, citing “public order”; days earlier the Sarawak Report website was blocked.',
      },
      {
        el: 'Ιανουάριος 2016: ο γενικός εισαγγελέας καθαρίζει τον πρωθυπουργό, κρίνοντας ότι τα 681 εκατ. δολάρια που κατατέθηκαν σε προσωπικούς του λογαριασμούς ήταν «δωρεά» σαουδαραβικής βασιλικής οικογένειας.',
        en: 'January 2016: the attorney general clears the prime minister, ruling that $681 million deposited in his personal accounts was a Saudi royal “donation.”',
      },
      {
        el: 'Οκτώβριος 2020: η θυγατρική της Goldman Sachs στη Μαλαισία ομολογεί ενοχή στις ΗΠΑ· ο όμιλος πληρώνει περίπου 2,6 δισ. δολάρια σε ποινές, πέρα από διακανονισμό 2,5 δισ. με τη Μαλαισία.',
        en: 'October 2020: Goldman Sachs’ Malaysian unit pleads guilty in the US; the group pays about $2.6 billion in penalties, on top of a $2.5 billion settlement with Malaysia.',
      },
      {
        el: 'Δεκέμβριος 2025: το Ανώτερο Δικαστήριο καταδικάζει τον πρώην πρωθυπουργό Najib Razak και για τις 25 κατηγορίες — κατάχρηση εξουσίας και ξέπλυμα — σε 15 χρόνια και πρόστιμο. Έχει ασκήσει έφεση.',
        en: 'December 2025: the High Court convicts former prime minister Najib Razak on all 25 charges — abuse of power and money laundering — sentencing him to 15 years and a fine. He has appealed.',
      },
    ],
    outcome: {
      el: 'Πρωτόδικη καταδίκη δέκα χρόνια μετά το σκάνδαλο· διακανονισμοί με τράπεζες και μερική ανάκτηση περιουσίας.',
      en: 'A first-instance conviction ten years after the scandal; settlements with banks and partial asset recovery.',
    },
    breach: {
      el: 'Ένα κρατικό αναπτυξιακό ταμείο είναι αποταμίευση ενός ολόκληρου λαού για το μέλλον του. Όταν ο ίδιος ο γενικός εισαγγελέας καθαρίζει τον πρωθυπουργό και το κράτος κλείνει τις εφημερίδες που ρωτούν, η λογοδοσία δεν αποτυγχάνει τυχαία — αναστέλλεται μέχρι να αλλάξει η εξουσία.',
      en: 'A state development fund is a whole people’s savings for its future. When the attorney general himself clears the prime minister and the state shuts the papers that ask questions, accountability does not fail by accident — it is suspended until power changes hands.',
    },
    patterns: ['looted-fund', 'offshore', 'messenger-prosecuted', 'self-shield'],
    safeguards: ['owners', 'pep-first', 'shield'],
    counterfactual: {
      el: 'Το Ποιος Είναι Πίσω θα είχε ακολουθήσει το χρήμα από το ταμείο μέσα από τις εταιρείες-κελύφη ως τους προσωπικούς λογαριασμούς — πριν το κάνει ένα ξένο υπουργείο Δικαιοσύνης. Το Πρώτα οι Ισχυροί θα είχε σημάνει τα 681 εκατ. στους λογαριασμούς του πρωθυπουργού σε ανεξάρτητο ελεγκτή, όχι σε έναν εισαγγελέα που τον διόριζε η κυβέρνηση. Και η Ασπίδα θα είχε κάνει δημόσιο το πάγωμα των εφημερίδων ως αυτό που ήταν.',
      en: 'Who Is Behind It would have followed the money from the fund through the shell companies to personal accounts — before a foreign justice ministry did. The Powerful First would have flagged the $681 million in the prime minister’s accounts to an independent auditor, not to a prosecutor appointed by the government. And the Shield would have named the newspaper suspensions for what they were.',
    },
    antilogos: {
      el: 'Ο πρώην πρωθυπουργός υποστηρίζει ότι εξαπατήθηκε από τον χρηματιστή Jho Low και πίστευε ότι τα χρήματα ήταν σαουδαραβική δωρεά. Ο εισαγγελέας της χώρας τον είχε καθαρίσει, και οι κατηγορίες ασκήθηκαν μόνο μετά την εκλογική του ήττα — κάτι που οι υποστηρικτές του βλέπουν ως πολιτική δίωξη.',
      en: 'The former prime minister says he was deceived by financier Jho Low and believed the money was a Saudi donation. The country’s own prosecutor had cleared him, and charges came only after his election defeat — which his supporters see as political persecution.',
    },
    reply: {
      el: 'Ακριβώς αυτό είναι το πρόβλημα: αν η δίωξη εξαρτάται από το ποιος κερδίζει τις εκλογές, είτε η πρώτη απόφαση ήταν κάλυψη είτε η δεύτερη ήταν εκδίκηση. Ένα ανεξάρτητο, αυτόματο σύστημα που ελέγχει πρώτα τους ισχυρούς δεν περιμένει την αλλαγή εξουσίας — και έτσι προστατεύει και τον αθώο από την υποψία ότι διώκεται επειδή έχασε.',
      en: 'That is exactly the problem: if prosecution depends on who wins elections, either the first decision was a cover-up or the second was revenge. An independent, automatic system that checks the powerful first does not wait for a change of government — and so also protects the innocent from the suspicion that they are prosecuted because they lost.',
    },
    lever: {
      el: 'Ζήτησε κάθε κρατικό επενδυτικό ή αναπτυξιακό ταμείο να δημοσιεύει κάθε συναλλαγή, με τον πραγματικό δικαιούχο κάθε αντισυμβαλλόμενου.',
      en: 'Ask that every state investment or development fund publish every transaction, with the beneficial owner of every counterparty.',
    },
    scores: { harm: 10, power: 10, recurrence: 6, remedy: 7 },
    status: {
      el: 'Πρωτόδικη καταδίκη (Δεκέμβριος 2025), υπό έφεση — δεν είναι τελεσίδικη· ισχύει το τεκμήριο αθωότητας.',
      en: 'First-instance conviction (December 2025), under appeal — not final; the presumption of innocence applies.',
    },
    sources: [
      { title: 'US DOJ — Seeking to recover assets from 1MDB-related corruption', url: 'https://www.justice.gov/archives/opa/pr/us-seeks-recover-approximately-38-million-allegedly-obtained-corruption-involving-malaysian' },
      { title: 'BenarNews — Malaysia suspends The Edge over 1MDB reports (2015)', url: 'https://www.benarnews.org/english/news/malaysian/edge-1mdb-07242015183031.html' },
      { title: 'OCCRP — Prime minister cleared in $681 million case (2016)', url: 'https://occrp.org/en/news/malaysia-prime-minister-razak-cleared-in-us-681-million-corruption-case' },
      { title: 'Malay Mail — From first charge to High Court sentence (2025)', url: 'https://www.malaymail.com/news/malaysia/2025/12/27/najibs-1mdb-trial-from-first-charge-to-final-high-court-sentence/203366' },
    ],
  },
  {
    id: 'luxleaks-2014',
    when: '2002–2023',
    place: { el: 'Λουξεμβούργο', en: 'Luxembourg' },
    title: {
      el: 'Η φορολογική διοίκηση ενέκρινε μυστικές συμφωνίες χαμηλής φορολόγησης για πολυεθνικές — και διώχθηκαν οι υπάλληλοι που τις αποκάλυψαν',
      en: 'The tax administration pre-approved secret low-tax deals for multinationals — and the employees who revealed them were prosecuted',
    },
    harmed: { el: 'Οι φορολογούμενοι άλλων κρατών της ΕΕ · οι μάρτυρες Antoine Deltour και Raphaël Halet', en: 'Taxpayers in other EU states · whistleblowers Antoine Deltour and Raphaël Halet' },
    plain: {
      el: 'Εκατοντάδες μυστικές φορολογικές αποφάσεις επέτρεψαν σε πολυεθνικές να μεταφέρουν κέρδη στο Λουξεμβούργο· κανένας αξιωματούχος δεν διώχθηκε — διώχθηκαν όμως οι δύο υπάλληλοι που έφεραν τα έγγραφα στο φως, μέχρι να τους δικαιώσουν ανώτερα δικαστήρια.',
      en: 'Hundreds of secret tax rulings let multinationals shift profits to Luxembourg; no official was prosecuted — but the two employees who brought the documents to light were, until higher courts vindicated them.',
    },
    facts: [
      {
        el: 'Νοέμβριος 2014: η Διεθνής Κοινοπραξία Ερευνητών Δημοσιογράφων δημοσιεύει 548 φορολογικές αποφάσεις του Λουξεμβούργου (2002–2010) για πάνω από 340 εταιρείες.',
        en: 'November 2014: the International Consortium of Investigative Journalists publishes 548 Luxembourg tax rulings (2002–2010) for over 340 companies.',
      },
      {
        el: 'Μάρτιος 2017: το Εφετείο του Λουξεμβούργου καταδικάζει και τους δύο πρώην υπαλλήλους της PwC που διέρρευσαν τα έγγραφα.',
        en: 'March 2017: Luxembourg’s Court of Appeal convicts both former PwC employees who leaked the documents.',
      },
      {
        el: 'Ιανουάριος 2018: το Ακυρωτικό ακυρώνει την καταδίκη του Antoine Deltour, αναγνωρίζοντάς τον ως μάρτυρα δημοσίου συμφέροντος.',
        en: 'January 2018: the Court of Cassation annuls Antoine Deltour’s conviction, recognising him as a whistleblower.',
      },
      {
        el: 'Φεβρουάριος 2023: το τμήμα ευρείας σύνθεσης του Ευρωπαϊκού Δικαστηρίου Δικαιωμάτων του Ανθρώπου κρίνει (12–5) ότι η καταδίκη του Raphaël Halet παραβίασε την ελευθερία έκφρασης.',
        en: 'February 2023: the Grand Chamber of the European Court of Human Rights rules (12–5) that Raphaël Halet’s conviction violated freedom of expression.',
      },
      {
        el: '2022–2023: το Δικαστήριο της ΕΕ ακυρώνει τις αποφάσεις της Κομισιόν ότι οι φορολογικές ρυθμίσεις του Λουξεμβούργου για τη Fiat και την Amazon ήταν παράνομη κρατική ενίσχυση.',
        en: '2022–2023: the EU Court of Justice annuls the Commission’s decisions that Luxembourg’s tax arrangements for Fiat and Amazon were illegal state aid.',
      },
    ],
    outcome: {
      el: 'Καμία εταιρεία και κανένας αξιωματούχος δεν καταδικάστηκε· οι μόνοι που διώχθηκαν ήταν όσοι αποκάλυψαν τα έγγραφα — και δικαιώθηκαν.',
      en: 'No company or official was convicted; the only people prosecuted were those who revealed the documents — and they were vindicated.',
    },
    breach: {
      el: 'Ο φόρος είναι κοινός κανόνας· μια μυστική συμφωνία ανάμεσα σε μια διοίκηση και μια πολυεθνική είναι κανόνας για έναν. Όταν η μόνη ποινική συνέπεια μιας τέτοιας αποκάλυψης πέφτει σε όποιον την έκανε, το κράτος στέλνει ένα μήνυμα σε κάθε υπάλληλο: η σιωπή είναι ασφαλέστερη από την αλήθεια.',
      en: 'Tax is a common rule; a secret deal between an administration and a multinational is a rule for one. When the only criminal consequence of such a revelation falls on whoever made it, the state sends every employee a message: silence is safer than the truth.',
    },
    patterns: ['messenger-prosecuted', 'offshore'],
    safeguards: ['shield', 'owners'],
    counterfactual: {
      el: 'Η Ασπίδα Μάρτυρα θα είχε σφραγίσει την αποκάλυψη ως δημοσίου συμφέροντος και θα είχε θέσει δημόσια το ερώτημα πριν από κάθε δίωξη: διώκεται ο αγγελιοφόρος ή το μήνυμα; Το Ποιος Είναι Πίσω θα έκανε ορατές τις ροές κερδών που οι αποφάσεις επέτρεπαν, χωρίς να χρειαστεί διαρροή.',
      en: 'The Witness Shield would have sealed the disclosure as public-interest and asked publicly before any prosecution: is it the messenger or the message being prosecuted? Who Is Behind It would have made visible the profit flows the rulings allowed, with no leak needed.',
    },
    antilogos: {
      el: 'Οι φορολογικές αποφάσεις ήταν νόμιμες κατά το δίκαιο του Λουξεμβούργου, και το Δικαστήριο της ΕΕ δεν βρήκε παράνομη κρατική ενίσχυση. Οι μάρτυρες αντέγραψαν πράγματι εμπιστευτικά αρχεία πελατών — πρόκειται για επιθετικό φορολογικό σχεδιασμό, όχι για δωροδοκία.',
      en: 'The rulings were legal under Luxembourg law, and the EU Court found no illegal state aid. The whistleblowers did copy confidential client files — this is aggressive tax planning, not bribery.',
    },
    reply: {
      el: 'Ακριβώς: ήταν νόμιμο — και γι’ αυτό έπρεπε να είναι δημόσιο. Όταν μια χώρα μπορεί νόμιμα να πουλά φορολογικά προνόμια κρυφά, η απώλεια των άλλων κρατών δεν φαίνεται πουθενά εκτός αν κάποιος ρισκάρει τη δουλειά του. Η πρόταση δεν απαγορεύει τον σχεδιασμό· απαγορεύει το σκοτάδι.',
      en: 'Exactly: it was legal — which is why it should have been public. When a country can lawfully sell tax privileges in secret, the loss to other states shows nowhere unless someone risks their job. The proposal does not ban planning; it bans darkness.',
    },
    lever: {
      el: 'Ζήτησε κάθε φορολογική απόφαση υπέρ μεγάλης επιχείρησης να δημοσιεύεται, ώστε κανείς υπάλληλος να μη χρειάζεται να τη διαρρεύσει.',
      en: 'Ask that every tax ruling favouring a large company be published, so no employee ever needs to leak it.',
    },
    scores: { harm: 7, power: 7, recurrence: 7, remedy: 7 },
    status: {
      el: 'Κλειστή. Ο Deltour δικαιώθηκε (2018)· ο Halet δικαιώθηκε στο ΕΔΔΑ (2023).',
      en: 'Closed. Deltour was cleared (2018); Halet was vindicated at the ECHR (2023).',
    },
    sources: [
      { title: 'Wikipedia — LuxLeaks', url: 'https://en.wikipedia.org/wiki/LuxLeaks' },
      { title: 'ECHR — Halet v. Luxembourg (2023)', url: 'https://www.echr.coe.int/w/halet-v-luxembourg-no-21884/18-' },
      { title: 'Transparency International — Court of Cassation LuxLeaks decision (2018)', url: 'https://www.transparency.org/en/press/court-of-cassation-luxleaks-decision-highlights-need-for-effective-whistleb' },
      { title: 'ATOZ — CJEU annuls the Amazon state-aid decision (2023)', url: 'https://atoz.lu/media/CJEU-annuls-the-EU-Commission-s-State-Aid-Decision-in-the-Amazon-Case' },
    ],
  },
  {
    id: 'danske-estonia-2018',
    when: '2007–2022',
    place: { el: 'Εσθονία και Δανία', en: 'Estonia and Denmark' },
    title: {
      el: 'Οι εποπτικές αρχές άφησαν να περάσουν 200 δισ. ευρώ ύποπτου χρήματος — και μετά ψήφισαν ότι δεν παρέβησαν τίποτα',
      en: 'Bank supervisors let €200 billion of suspicious money pass — then voted that they had breached nothing',
    },
    harmed: { el: 'Οι πολίτες των χωρών των οποίων το δημόσιο χρήμα ξεπλύθηκε · ο μάρτυρας που προειδοποίησε', en: 'Citizens of the countries whose public money was laundered · the whistleblower who warned' },
    plain: {
      el: 'Από το υποκατάστημα της Danske Bank στο Ταλίν πέρασαν περίπου 200 δισ. ευρώ μη κατοίκων, σε μεγάλο μέρος ύποπτα· ένας υπάλληλος προειδοποίησε τέσσερις φορές, η τράπεζα ομολόγησε ενοχή στις ΗΠΑ, αλλά κανένα στέλεχος δεν καταδικάστηκε και οι εποπτικές αρχές απάλλαξαν τον εαυτό τους.',
      en: 'About €200 billion of non-resident money passed through Danske Bank’s Tallinn branch, much of it suspicious; an employee warned four times, the bank pleaded guilty in the US, yet no executive was convicted and the supervisors cleared themselves.',
    },
    facts: [
      {
        el: 'Σεπτέμβριος 2018: η εσωτερική έρευνα της τράπεζας διαπιστώνει ότι περίπου 200 δισ. ευρώ πέρασαν από λογαριασμούς μη κατοίκων στο υποκατάστημα της Εσθονίας το 2007–2015, σε μεγάλο μέρος ύποπτα· ο διευθύνων σύμβουλος παραιτείται.',
        en: 'September 2018: the bank’s own investigation finds about €200 billion passed through non-resident accounts at the Estonian branch in 2007–2015, much of it suspicious; the CEO resigns.',
      },
      {
        el: 'Ο Howard Wilkinson, στέλεχος του υποκαταστήματος, είχε ενημερώσει τη διοίκηση στην Κοπεγχάγη· κατέθεσε στο δανικό κοινοβούλιο ότι προειδοποίησε τέσσερις φορές χωρίς αποτέλεσμα.',
        en: 'Howard Wilkinson, a trader at the branch, had alerted the board in Copenhagen; he told the Danish parliament he warned four times without result.',
      },
      {
        el: 'Απρίλιος 2019: το συμβούλιο εποπτών της Ευρωπαϊκής Αρχής Τραπεζών — δηλαδή οι ίδιοι οι εθνικοί εποπτευτές — απορρίπτει την εισήγηση της δικής της επιτροπής ότι οι αρχές Δανίας και Εσθονίας παραβίασαν το δίκαιο της ΕΕ.',
        en: 'April 2019: the European Banking Authority’s board of supervisors — the national supervisors themselves — rejects its own panel’s recommendation that the Danish and Estonian authorities breached EU law.',
      },
      {
        el: 'Απρίλιος 2021: οι Δανοί εισαγγελείς αποσύρουν τις κατηγορίες κατά πρώην ανώτατων στελεχών: «Δεν υπάρχουν νομικά στοιχεία ότι κάποιο πρόσωπο παρανόμησε.»',
        en: 'April 2021: Danish prosecutors drop charges against former top executives: “There is no legal evidence that any individual has broken the law.”',
      },
      {
        el: 'Δεκέμβριος 2022: η τράπεζα ομολογεί ενοχή στις ΗΠΑ για συνωμοσία τραπεζικής απάτης και πληρώνει συνολικά περίπου 2 δισ. δολάρια.',
        en: 'December 2022: the bank pleads guilty in the US to bank-fraud conspiracy and pays about $2 billion in total.',
      },
    ],
    outcome: {
      el: 'Ομολογία ενοχής και πρόστιμα για την τράπεζα· κανένα στέλεχος δεν καταδικάστηκε στη Δανία, και οι εποπτευτές δεν βρέθηκαν σε παράβαση.',
      en: 'A guilty plea and fines for the bank; no executive was convicted in Denmark, and the supervisors were not found in breach.',
    },
    breach: {
      el: 'Η τραπεζική εποπτεία υπάρχει για να σταματά το βρώμικο χρήμα πριν γίνει καθαρό. Όταν ένας υπάλληλος βλέπει και φωνάζει τέσσερις φορές, και οι εποπτευτές κρίνουν οι ίδιοι τον εαυτό τους και αποφασίζουν ότι δεν έφταιξαν, η εποπτεία έχει γίνει λέσχη — και το πρόστιμο το πληρώνουν οι μέτοχοι, όχι όσοι κοίταξαν αλλού.',
      en: 'Banking supervision exists to stop dirty money before it becomes clean. When an employee sees and shouts four times, and the supervisors judge themselves and decide they were not at fault, supervision has become a club — and the fine is paid by shareholders, not by those who looked away.',
    },
    patterns: ['captured-regulator', 'offshore'],
    safeguards: ['regulator-watch', 'owners', 'shield'],
    counterfactual: {
      el: 'Ο Φύλακας του Εποπτευτή θα είχε καταγράψει κάθε προειδοποίηση του μάρτυρα με ημερομηνία και προθεσμία απάντησης — και η σιωπή θα κλιμακωνόταν αυτόματα σε ευρωπαϊκή αρχή. Το Ποιος Είναι Πίσω θα έδειχνε τις εταιρείες-κελύφη πίσω από τους λογαριασμούς μη κατοίκων. Και η απόφαση για παράβαση δεν θα έμενε σε ένα συμβούλιο όπου οι κρινόμενοι ψηφίζουν.',
      en: 'Watching the Watchdog would have logged each of the whistleblower’s warnings with a date and response deadline — and silence would have escalated automatically to a European authority. Who Is Behind It would have shown the shells behind the non-resident accounts. And the breach decision would not have rested with a board where those judged cast the votes.',
    },
    antilogos: {
      el: 'Ύποπτο δεν σημαίνει αποδεδειγμένα εγκληματικό — μεγάλο μέρος των 200 δισ. δεν αποδείχθηκε ποτέ ότι ξεπλύθηκε. Το μέγεθος το αποκάλυψε η ίδια η έκθεση της τράπεζας, και οι εισαγγελείς δεν βρήκαν βαριά αμέλεια σε κάποιο πρόσωπο.',
      en: '“Suspicious” is not “proven criminal” — much of the €200 billion was never shown to be laundered. The scale was revealed by the bank’s own report, and prosecutors found no individual gross negligence.',
    },
    reply: {
      el: 'Ακριβώς γι’ αυτό η προειδοποίηση έπρεπε να εξεταστεί τότε, όχι να αποδειχθεί χρόνια μετά. Αν όσα πέρασαν ήταν νόμιμα, μια έγκαιρη, καταγεγραμμένη απάντηση θα το έδειχνε. Το πρόβλημα δεν είναι ότι κανείς δεν καταδικάστηκε· είναι ότι κανείς δεν χρειάστηκε να απαντήσει όσο το χρήμα περνούσε.',
      en: 'Which is why the warning had to be examined then, not proved years later. If what passed was lawful, a timely, recorded answer would have shown it. The problem is not that no one was convicted; it is that no one had to answer while the money was flowing.',
    },
    lever: {
      el: 'Ζήτησε κάθε καταγγελία εσωτερικού μάρτυρα προς εποπτική αρχή να καταγράφεται με προθεσμία απάντησης και αυτόματη κλιμάκωση.',
      en: 'Ask that every insider complaint to a supervisor be logged with a response deadline and automatic escalation.',
    },
    scores: { harm: 8, power: 7, recurrence: 7, remedy: 8 },
    status: {
      el: 'Οι ομολογίες της τράπεζας είναι τελεσίδικες. Δεν ασκήθηκαν κατηγορίες σε στελέχη στη Δανία· όσοι δεν έχουν καταδικαστεί τεκμαίρονται αθώοι.',
      en: 'The bank’s pleas are final. No executives were charged in Denmark; anyone not convicted is presumed innocent.',
    },
    sources: [
      { title: 'OCCRP — Danske Bank agrees to pay $2bn in money-laundering fines (2022)', url: 'https://occrp.org/en/news/danske-bank-agrees-to-pay-2b-in-money-laundering-fines' },
      { title: 'European Banking Authority — Closes investigation into Danish and Estonian supervisors (2019)', url: 'https://eba.europa.eu/publications-and-media/press-releases/eba-closes-investigation-possible-breach-union-law-danish-and-estonian-supervisory-authorities' },
      { title: 'The Local — Danish police drop case against Danske directors (2021)', url: 'https://www.thelocal.dk/20210430/danish-police-drop-money-laundering-case-against-danske-bank-directors' },
      { title: 'Kohn, Kohn & Colapinto — Statement for whistleblower Howard Wilkinson', url: 'https://kkc.com/blog/statement-from-attorney-for-danske-bank-whistleblower-howard-wilkinson/' },
    ],
  },
  {
    id: 'wirecard-2020',
    when: '2019–2026',
    place: { el: 'Γερμανία', en: 'Germany' },
    title: {
      el: 'Η εποπτική αρχή προστάτευσε μια εταιρεία του DAX και κατήγγειλε τους δημοσιογράφους που την αποκάλυψαν',
      en: 'The financial regulator shielded a DAX company and filed a complaint against the journalists who exposed it',
    },
    harmed: { el: 'Μέτοχοι και τράπεζες-δανειστές · οι δημοσιογράφοι των Financial Times', en: 'Shareholders and lending banks · the Financial Times journalists' },
    plain: {
      el: 'Όταν δημοσιογράφοι αποκάλυψαν ύποπτα λογιστικά στη Wirecard, η γερμανική εποπτική αρχή απαγόρευσε το στοίχημα κατά της μετοχής και κατήγγειλε τους δημοσιογράφους· έναν χρόνο μετά η εταιρεία κατέρρευσε, ομολογώντας ότι 1,9 δισ. ευρώ δεν υπήρχαν.',
      en: 'When journalists exposed suspicious accounting at Wirecard, the German regulator banned bets against the stock and filed a complaint against the journalists; a year later the company collapsed, admitting that €1.9 billion did not exist.',
    },
    facts: [
      {
        el: 'Φεβρουάριος 2019: η εποπτική αρχή BaFin απαγορεύει για δύο μήνες τις νέες ανοιχτές πωλήσεις στη μετοχή της Wirecard.',
        en: 'February 2019: the regulator BaFin bans new short positions in Wirecard shares for two months.',
      },
      {
        el: '2019: η BaFin καταθέτει ποινική καταγγελία για χειραγώγηση της αγοράς κατά προσώπων, ανάμεσά τους δημοσιογράφοι των Financial Times· τον Σεπτέμβριο 2020 η εισαγγελία του Μονάχου κλείνει την έρευνα, κρίνοντας το ρεπορτάζ «ουσιαστικά ακριβές».',
        en: '2019: BaFin files a criminal complaint alleging market manipulation against people including Financial Times journalists; in September 2020 Munich prosecutors close it, calling the reporting “fundamentally accurate.”',
      },
      {
        el: 'Ιούνιος 2020: η Wirecard καταρρέει αφού παραδέχεται ότι 1,9 δισ. ευρώ, που υποτίθεται ότι βρίσκονταν σε λογαριασμούς θεματοφύλακα στην Ασία, δεν υπήρχαν.',
        en: 'June 2020: Wirecard collapses after admitting that €1.9 billion supposedly held in Asian trustee accounts did not exist.',
      },
      {
        el: 'Ιανουάριος 2021: ο υπουργός Οικονομικών ανακοινώνει την αποχώρηση του προέδρου και της αντιπροέδρου της BaFin.',
        en: 'January 2021: the finance minister announces the departure of BaFin’s president and vice-president.',
      },
      {
        el: 'Ιούλιος 2026: η δίκη στο Μόναχο, που ξεκίνησε τον Δεκέμβριο 2022, φτάνει στις τελικές αγορεύσεις από τις 19 Οκτωβρίου 2026· η εισαγγελία εκτιμά τη ζημιά σε πάνω από 3 δισ. ευρώ. Ο πρώην διευθύνων σύμβουλος αρνείται τα πάντα· ο πρώην επικεφαλής λειτουργιών παραμένει φυγάς.',
        en: 'July 2026: the Munich trial, opened in December 2022, reaches closing arguments from 19 October 2026; prosecutors put the damage at over €3 billion. The former CEO denies everything; the former operations chief remains a fugitive.',
      },
    ],
    outcome: {
      el: 'Αλλαγή ηγεσίας στην εποπτική αρχή· η ποινική δίκη πλησιάζει στο τέλος της χωρίς απόφαση ακόμη.',
      en: 'A change of leadership at the regulator; the criminal trial nears its end with no verdict yet.',
    },
    breach: {
      el: 'Η εποπτεία της αγοράς υπάρχει για να προστατεύει τους επενδυτές από την απάτη — όχι μια «εθνική πρωταθλήτρια» από τις ερωτήσεις. Όταν ο εποπτευτής καταγγέλλει τους δημοσιογράφους αντί να ελέγξει τα λογιστικά, η σχέση αντιστρέφεται: η αρχή γίνεται δικηγόρος του εποπτευόμενου.',
      en: 'Market supervision exists to protect investors from fraud — not a “national champion” from questions. When the supervisor files a complaint against the journalists instead of checking the books, the relationship is inverted: the authority becomes the supervised company’s lawyer.',
    },
    patterns: ['captured-regulator', 'messenger-prosecuted'],
    safeguards: ['regulator-watch', 'shield'],
    counterfactual: {
      el: 'Ο Φύλακας του Εποπτευτή θα είχε καταγράψει δημόσια τις αποκαλύψεις ως προειδοποίηση με προθεσμία ελέγχου των λογαριασμών στην Ασία — ένας έλεγχος που θα έδειχνε ότι τα 1,9 δισ. δεν υπήρχαν. Η Ασπίδα θα είχε σημάνει την καταγγελία κατά των δημοσιογράφων ως πιθανή δίωξη αγγελιοφόρου πριν κατατεθεί.',
      en: 'Watching the Watchdog would have logged the revelations publicly as a warning with a deadline to verify the Asian accounts — a check that would have shown the €1.9 billion did not exist. The Shield would have flagged the complaint against the journalists as a possible prosecution of the messenger before it was filed.',
    },
    antilogos: {
      el: 'Η ευρωπαϊκή αρχή αγορών ενέκρινε την απαγόρευση ανοιχτών πωλήσεων της BaFin, και οι αγορές όντως δέχονται επιθέσεις κερδοσκόπων. Ο κύριος μάρτυρας κατηγορίας είναι συγκατηγορούμενος, και ο πρώην διευθύνων σύμβουλος παρουσιάζεται ως θύμα απάτης άλλων — η δίκη δεν έχει τελειώσει.',
      en: 'The EU markets authority endorsed BaFin’s short-selling ban, and markets are genuinely attacked by speculators. The prosecution’s key witness is a co-defendant, and the former CEO presents himself as a victim of others’ fraud — the trial is not over.',
    },
    reply: {
      el: 'Η δίκη θα κρίνει τα πρόσωπα — και ως τότε τεκμαίρονται αθώοι. Η πρόταση αφορά την εποπτεία: ένας έλεγχος των χρημάτων στην Ασία ήταν δυνατός το 2019, και η εποπτική αρχή διάλεξε να ελέγξει τους δημοσιογράφους. Ένα δημόσιο μητρώο προειδοποιήσεων θα έκανε αυτή την επιλογή ορατή όσο υπήρχε ακόμη χρόνος.',
      en: 'The trial will judge the individuals — and until then they are presumed innocent. The proposal is about supervision: checking the money in Asia was possible in 2019, and the regulator chose to check the journalists instead. A public register of warnings would have made that choice visible while there was still time.',
    },
    lever: {
      el: 'Ζήτησε κάθε δημοσιογραφική ή εσωτερική προειδοποίηση για εισηγμένη εταιρεία να αντιμετωπίζεται από την εποπτεία με δημόσια προθεσμία ελέγχου.',
      en: 'Ask that every journalistic or insider warning about a listed company be met by the supervisor with a public verification deadline.',
    },
    scores: { harm: 8, power: 7, recurrence: 6, remedy: 8 },
    status: {
      el: 'Ανοιχτή· καμία απόφαση ακόμη. Όλοι οι κατηγορούμενοι τεκμαίρονται αθώοι.',
      en: 'Open; no verdict yet. All defendants are presumed innocent.',
    },
    sources: [
      { title: 'Simmons & Simmons — BaFin publishes short-selling prohibition in Wirecard (2019)', url: 'https://www.simmons-simmons.com/publications/ck0b7j24uny730b33oc9rbarm/180219-bafin-publishes-short-selling-prohibition-in-wirecard-ag' },
      { title: 'S&P Global — BaFin president leaving over Wirecard affair (2021)', url: 'https://www.spglobal.com/market-intelligence/en/news-insights/articles/2021/1/president-hufeld-leaving-german-finance-watchdog-bafin-over-wirecard-affair-62384871' },
      { title: 'inFranken — Wirecard trial verdict in sight (2026)', url: 'https://www.infranken.de/deutschland/wirecard-prozess-urteil-in-sicht-art-6382619,PRINT' },
      { title: 'eNCA — Huge Wirecard fraud trial opens in Germany (2022)', url: 'https://www.enca.com/business/huge-wirecard-fraud-trial-opens-germany' },
    ],
  },
  {
    id: 'panama-papers-2016',
    when: '2007–2024',
    place: { el: 'Ισλανδία', en: 'Iceland' },
    title: {
      el: 'Ο πρωθυπουργός είχε αδήλωτη υπεράκτια εταιρεία με απαιτήσεις από τις τράπεζες με τις οποίες διαπραγματευόταν η κυβέρνησή του',
      en: 'The prime minister had an undeclared offshore company with claims on the very banks his government was negotiating with',
    },
    harmed: { el: 'Οι πολίτες της Ισλανδίας — και οι φορολογικές αρχές παντού', en: 'The citizens of Iceland — and tax authorities everywhere' },
    plain: {
      el: 'Τα Panama Papers αποκάλυψαν ότι ο πρωθυπουργός της Ισλανδίας και η σύζυγός του είχαν εταιρεία στις Βρετανικές Παρθένους Νήσους με απαιτήσεις από τις χρεοκοπημένες τράπεζες· υπό την πίεση μαζικών διαδηλώσεων παραιτήθηκε σε δύο μέρες.',
      en: 'The Panama Papers revealed that Iceland’s prime minister and his wife held a British Virgin Islands company with claims on the failed banks; under mass protests he resigned within two days.',
    },
    facts: [
      {
        el: 'Απρίλιος 2016: δημοσιεύονται τα Panama Papers — πάνω από 11,5 εκατομμύρια έγγραφα της δικηγορικής εταιρείας Mossack Fonseca. Ως το 2021, 24 χώρες είχαν ανακτήσει πάνω από 1,36 δισ. δολάρια σε φόρους και πρόστιμα.',
        en: 'April 2016: the Panama Papers are published — over 11.5 million documents from the law firm Mossack Fonseca. By 2021, 24 countries had recovered over $1.36 billion in taxes and penalties.',
      },
      {
        el: 'Δεκέμβριος 2007: ο μετέπειτα πρωθυπουργός και η σύζυγός του αγοράζουν την εταιρεία Wintris· στις 31 Δεκεμβρίου 2009, την παραμονή της ισχύος νέου κανόνα δήλωσης συμφερόντων, πουλά το μερίδιό του στη σύζυγό του για 1 δολάριο.',
        en: 'December 2007: the future prime minister and his wife buy the company Wintris; on 31 December 2009, the day before a new disclosure rule took effect, he sells his share to her for $1.',
      },
      {
        el: 'Η Wintris είχε απαιτήσεις περίπου 515 εκατ. κορωνών από τις τρεις χρεοκοπημένες τράπεζες, ενώ ως πρωθυπουργός συμμετείχε στη συμφωνία με τους πιστωτές τους.',
        en: 'Wintris held claims of about ISK 515 million on the three failed banks, while as prime minister he took part in the settlement with their creditors.',
      },
      {
        el: '4–5 Απριλίου 2016: έως 22.000 άνθρωποι — περίπου το 7% του πληθυσμού — διαδηλώνουν έξω από το κοινοβούλιο· ο πρωθυπουργός παραιτείται, ο πρώτος αρχηγός κυβέρνησης που έπεσε από τη διαρροή.',
        en: '4–5 April 2016: up to 22,000 people — about 7% of the population — protest outside parliament; the prime minister resigns, the first head of government to fall over the leak.',
      },
      {
        el: 'Ιούνιος 2024: δικαστήριο του Παναμά αθωώνει και τους 28 κατηγορουμένους, ανάμεσά τους τους ιδρυτές της εταιρείας, κρίνοντας ότι τα στοιχεία των διακομιστών δεν συλλέχθηκαν με τη νόμιμη διαδικασία.',
        en: 'June 2024: a Panamanian court acquits all 28 defendants, including the firm’s founders, finding the server evidence was not gathered with due process.',
      },
    ],
    outcome: {
      el: 'Πολιτική λογοδοσία — παραίτηση και πρόωρες εκλογές — χωρίς ποινική υπόθεση· οι ιδρυτές της δικηγορικής εταιρείας αθωώθηκαν.',
      en: 'Political accountability — resignation and early elections — without a criminal case; the law firm’s founders were acquitted.',
    },
    breach: {
      el: 'Όποιος διαπραγματεύεται για λογαριασμό μιας χώρας πρέπει να μην έχει προσωπικό συμφέρον στο αποτέλεσμα — ή τουλάχιστον να το δηλώνει. Όταν η ιδιοκτησία μεταφέρεται στη σύζυγο την παραμονή του νέου κανόνα δήλωσης, ο κανόνας δεν παραβιάζεται· παρακάμπτεται με ακρίβεια ημερολογίου.',
      en: 'Whoever negotiates on a country’s behalf must have no personal stake in the outcome — or at least declare it. When ownership passes to a spouse the day before a new disclosure rule, the rule is not broken; it is side-stepped with calendar precision.',
    },
    patterns: ['offshore', 'self-shield'],
    safeguards: ['pep-first', 'owners'],
    counterfactual: {
      el: 'Το Πρώτα οι Ισχυροί θα είχε διασταυρώσει τις δηλώσεις του πρωθυπουργού και της συζύγου του με τα δεδομένα που ανταλλάσσονται αυτόματα από το εξωτερικό — και η σύγκρουση συμφέροντος θα φαινόταν πριν από τη διαπραγμάτευση με τους πιστωτές, όχι μετά από μια διαρροή. Το Ποιος Είναι Πίσω θα έβλεπε τη Wintris πίσω από τη μεταβίβαση του ενός δολαρίου.',
      en: 'The Powerful First would have matched the prime minister’s and his wife’s declarations against data exchanged automatically from abroad — and the conflict of interest would have shown before the creditor negotiations, not after a leak. Who Is Behind It would have seen Wintris behind the one-dollar transfer.',
    },
    antilogos: {
      el: 'Ο πρώην πρωθυπουργός επέμεινε ότι δεν έκρυψε ποτέ χρήματα και ότι η σύζυγός του, που κληρονόμησε την περιουσία, πλήρωνε όλους τους φόρους στην Ισλανδία. Μια υπεράκτια εταιρεία δεν είναι από μόνη της παράνομη, και καμία ποινική κατηγορία δεν ασκήθηκε.',
      en: 'The former prime minister insisted he never hid money and that his wife, who inherited the fortune, paid all taxes in Iceland. An offshore company is not illegal in itself, and no criminal charge was ever brought.',
    },
    reply: {
      el: 'Σωστά — και η πρόταση δεν τον κατηγορεί για φοροδιαφυγή. Ρωτά κάτι απλούστερο: γιατί χρειάστηκε μια διαρροή 11,5 εκατομμυρίων εγγράφων για να μάθουν οι πολίτες ότι ο διαπραγματευτής τους είχε συμφέρον; Η αυτόματη διασταύρωση δεν τιμωρεί· απλώς κάνει τη δήλωση αναπόφευκτη.',
      en: 'True — and the proposal does not accuse him of tax evasion. It asks something simpler: why did it take a leak of 11.5 million documents for citizens to learn their negotiator had a stake? Automatic cross-checking punishes no one; it simply makes disclosure unavoidable.',
    },
    lever: {
      el: 'Ζήτησε οι δηλώσεις περιουσίας πολιτικών προσώπων και συζύγων να διασταυρώνονται αυτόματα με τα δεδομένα που λαμβάνει η χώρα από το εξωτερικό.',
      en: 'Ask that asset declarations of politically exposed persons and their spouses be matched automatically against the data the country receives from abroad.',
    },
    scores: { harm: 6, power: 9, recurrence: 8, remedy: 8 },
    status: {
      el: 'Καμία ποινική υπόθεση κατά του πρώην πρωθυπουργού. Οι κατηγορούμενοι στον Παναμά αθωώθηκαν (2024).',
      en: 'No criminal case against the former prime minister. The defendants in Panama were acquitted (2024).',
    },
    sources: [
      { title: 'ICIJ — Panama Papers revenue recovery reaches $1.36 billion (2021)', url: 'https://www.icij.org/investigations/panama-papers/panama-papers-revenue-recovery-reaches-1-36-billion-as-investigations-continue/' },
      { title: 'The National — Icelandic PM refuses to resign amid leak (2016)', url: 'https://www.thenationalnews.com/world/icelandic-pm-refuses-to-resign-amid-panama-papers-leak-1.137881' },
      { title: 'WSLS / AP — Judge acquits 28 in Panama Papers case (2024)', url: 'https://www.wsls.com/business/2024/06/29/judge-acquits-28-people-accused-in-panama-papers-case-including-law-firm-co-founder/' },
    ],
  },
]
