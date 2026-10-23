// ΛΟΓΙΣΤΑΙ — cases 1–5. Every fact is sourced and was checked on 2026-09-29/30.
// Headlines name the office, not the officer; the harmed are always named.
// Open cases carry the presumption of innocence explicitly.

import type { ToolCase } from '../types'

export const CASES_A: readonly ToolCase[] = [
  {
    id: 'lagarde-list-2010',
    when: '2010–2015',
    place: { el: 'Αθήνα, Ελλάδα', en: 'Athens, Greece' },
    title: {
      el: 'Ο υπουργός Οικονομικών παρέλαβε λίστα με καταθέτες στην Ελβετία — και από το αντίγραφο έλειπαν τρία ονόματα συγγενών του',
      en: 'The finance minister received a list of Swiss-account holders — and three of his relatives’ names were missing from the copy',
    },
    harmed: { el: 'Οι Έλληνες φορολογούμενοι των χρόνων της λιτότητας · ο δημοσιογράφος που δημοσίευσε τη λίστα', en: 'Greek taxpayers in the austerity years · the journalist who published the list' },
    plain: {
      el: 'Η Γαλλία έδωσε στην Ελλάδα λίστα με 1.991 Έλληνες καταθέτες της HSBC στη Γενεύη· το αρχικό CD χάθηκε, ελέγχθηκαν ελάχιστα ονόματα, και όταν ζητήθηκε νέο αντίγραφο έλειπαν τρεις συγγενείς του υπουργού. Διώχθηκε πρώτα ο δημοσιογράφος που δημοσίευσε τα ονόματα.',
      en: 'France gave Greece a list of 1,991 Greek depositors at HSBC Geneva; the original CD went missing, few names were checked, and when a new copy was requested three of the minister’s relatives were absent. The first person prosecuted was the journalist who published the names.',
    },
    facts: [
      {
        el: 'Οκτώβριος 2010: η Γαλλίδα υπουργός Οικονομικών Christine Lagarde στέλνει στον Έλληνα ομόλογό της Γιώργο Παπακωνσταντίνου λίστα 1.991 Ελλήνων με λογαριασμούς στην HSBC της Γενεύης.',
        en: 'October 2010: French finance minister Christine Lagarde sends her Greek counterpart Giorgos Papakonstantinou a list of 1,991 Greeks with accounts at HSBC Geneva.',
      },
      {
        el: 'Το αρχικό CD χάνεται· ο διάδοχός του κρατά αντίγραφο και γίνεται περιορισμένος έλεγχος περίπου δέκα πολιτικών. Νέο αντίγραφο από το Παρίσι το 2012 δείχνει ότι από το ελληνικό έλειπαν τρία ονόματα — όλα συγγενών του πρώην υπουργού.',
        en: 'The original CD goes missing; his successor keeps a copy and only about ten politicians are checked. A fresh copy from Paris in 2012 shows three names missing from the Greek one — all relatives of the former minister.',
      },
      {
        el: 'Οκτώβριος 2012: ο δημοσιογράφος Κώστας Βαξεβάνης δημοσιεύει τα ονόματα και συλλαμβάνεται για παραβίαση προσωπικών δεδομένων· αθωώνεται, η δίκη επαναλαμβάνεται, και αθωώνεται ξανά ομόφωνα τον Νοέμβριο 2013.',
        en: 'October 2012: journalist Kostas Vaxevanis publishes the names and is arrested for breaching privacy; he is acquitted, a retrial is ordered, and he is unanimously acquitted again in November 2013.',
      },
      {
        el: 'Ιούλιος 2013: η Βουλή, με μυστική ψηφοφορία, ανοίγει τον δρόμο για δίωξη του πρώην υπουργού — επειδή, κατά τον νόμο, υπουργός διώκεται μόνο αν το αποφασίσει η Βουλή.',
        en: 'July 2013: Parliament, by secret ballot, opens the way to prosecuting the former minister — because under Greek law a minister can be prosecuted only if Parliament decides so.',
      },
      {
        el: '24 Μαρτίου 2015: το Ειδικό Δικαστήριο τον αθωώνει για τα κακουργήματα και τον καταδικάζει για πλημμέλημα νόθευσης εγγράφου, σε ένα χρόνο με αναστολή.',
        en: '24 March 2015: the Special Court acquits him of the felonies and convicts him of misdemeanour document alteration, with a one-year suspended sentence.',
      },
    ],
    outcome: {
      el: 'Καταδίκη για πλημμέλημα με αναστολή — καμία φυλάκιση. Ο δημοσιογράφος που αποκάλυψε τη λίστα δικάστηκε δύο φορές πριν δικαιωθεί.',
      en: 'A suspended misdemeanour conviction — no prison. The journalist who exposed the list was tried twice before being cleared.',
    },
    breach: {
      el: 'Μια λίστα φοροδιαφυγής είναι το πιο απλό τεστ ισονομίας: ισχύει ο νόμος για όλους τους καταθέτες της; Εδώ το αρχείο χάθηκε, ελέγχθηκαν όσοι επιλέχθηκαν, λείπαν οι συγγενείς του υπουργού — και ο πρώτος που βρέθηκε στο εδώλιο ήταν αυτός που δημοσίευσε τα ονόματα. Το σύστημα φύλαξε τη λίστα από τους πολίτες, όχι τους πολίτες από τη φοροδιαφυγή.',
      en: 'A tax-evasion list is the simplest test of equality before the law: does the law apply to everyone on it? Here the file vanished, only chosen names were checked, the minister’s relatives were missing — and the first person in the dock was the one who published the names. The system guarded the list from citizens, not citizens from evasion.',
    },
    patterns: ['altered-data', 'offshore', 'self-shield', 'messenger-prosecuted'],
    safeguards: ['sealed-data', 'pep-first', 'clock'],
    counterfactual: {
      el: 'Με Σφραγισμένα Δεδομένα, το CD θα είχε αποτύπωμα και αντίγραφα σε ανεξάρτητους φορείς από την πρώτη μέρα — τρία ονόματα δεν θα μπορούσαν να λείψουν χωρίς να φανεί. Και με το Πρώτα οι Ισχυροί, η διασταύρωση θα ξεκινούσε αυτόματα από πολιτικά πρόσωπα και συγγενείς τους, όχι από «δέκα πολιτικούς» κατ’ επιλογή.',
      en: 'With Sealed Data, the CD would have had a fingerprint and copies at independent bodies from day one — three names could not go missing without it showing. And with The Powerful First, checks would have started automatically with politically exposed persons and their relatives, not with “ten politicians” picked by someone.',
    },
    antilogos: {
      el: 'Ο πρώην υπουργός αθωώθηκε για τα κακουργήματα και αρνείται κάθε κατηγορία· λέει ότι παρέδωσε τα αρχεία στον επικεφαλής του ΣΔΟΕ για πλήρη έρευνα. Η απώλεια του CD και ο περιορισμένος έλεγχος έγιναν επί άλλων αξιωματούχων — η αποτυχία ήταν θεσμική, όχι ενός ανθρώπου.',
      en: 'The former minister was acquitted of the felonies and denies all charges; he says he handed the files to the head of the financial-crime unit for a full investigation. The lost CD and the narrow check happened under other officials too — the failure was institutional, not one man’s.',
    },
    reply: {
      el: 'Ακριβώς γι’ αυτό η πρόταση είναι θεσμική και όχι προσωπική. Όταν ένα αρχείο μπορεί να χαθεί από χέρι σε χέρι και ο έλεγχος να περιοριστεί σε όσους διαλέξει κάποιος, δεν χρειάζεται κακή πρόθεση για να αδικηθούν οι πολίτες — αρκεί η ευκαιρία. Η σφράγιση αφαιρεί την ευκαιρία από όλους, και προστατεύει τον έντιμο αξιωματούχο από την υποψία.',
      en: 'Which is exactly why the proposal is institutional, not personal. When a file can vanish from hand to hand and checks can be limited to whoever someone chooses, no ill intent is needed for citizens to be wronged — opportunity is enough. Sealing takes the opportunity from everyone, and shields the honest official from suspicion.',
    },
    lever: {
      el: 'Ζήτησε κάθε αρχείο φορολογικών στοιχείων από το εξωτερικό να σφραγίζεται κατά την παραλαβή και να ελέγχονται αυτόματα όλα τα ονόματα, ξεκινώντας από πολιτικά πρόσωπα.',
      en: 'Ask that every tax-data file from abroad be sealed on receipt and every name checked automatically, starting with politically exposed persons.',
    },
    scores: { harm: 7, power: 9, recurrence: 7, remedy: 9 },
    status: {
      el: 'Κλειστή. Καταδίκη για πλημμέλημα με αναστολή (2015)· αθώωση για τα κακουργήματα.',
      en: 'Closed. Suspended misdemeanour conviction (2015); acquitted of the felonies.',
    },
    sources: [
      { title: 'Wikipedia — Lagarde list', url: 'https://en.wikipedia.org/wiki/Lagarde_list' },
      { title: 'Fox News / AP — Ex-finance minister guilty of misdemeanour (2015)', url: 'https://www.foxnews.com/world/court-greek-ex-finance-minister-papaconstantinou-guilty-of-misdemeanor-in-swiss-bank-case' },
      { title: 'Al Jazeera — Greek MPs approve prosecution of ex-minister (2013)', url: 'https://www.aljazeera.com/news/2013/7/16/greek-mps-approve-prosecution-of-ex-minister' },
      { title: 'Index on Censorship — Journalist acquitted of privacy charges (2013)', url: 'https://www.indexoncensorship.org/2013/11/greek-journalist-kostas-vaxevanis-acquited-privacy-charges/' },
    ],
  },
  {
    id: 'elstat-2010',
    when: '2010–2026',
    place: { el: 'Αθήνα, Ελλάδα', en: 'Athens, Greece' },
    title: {
      el: 'Ο πρόεδρος της στατιστικής αρχής διώχθηκε για 15 χρόνια για τα στοιχεία ελλείμματος που έστειλε στην Eurostat',
      en: 'The head of the statistics authority was prosecuted for 15 years over the deficit figures he sent to Eurostat',
    },
    harmed: { el: 'Ο Ανδρέας Γεωργίου — και η αξιοπιστία των επίσημων στατιστικών της χώρας', en: 'Andreas Georgiou — and the credibility of the country’s official statistics' },
    plain: {
      el: 'Ο στατιστικός που διόρθωσε τα στοιχεία του ελλείμματος διώχθηκε ξανά και ξανά για σχεδόν δεκαπέντε χρόνια· η μόνη καταδίκη του ήταν διαδικαστική και ακυρώθηκε από τον Άρειο Πάγο το 2026.',
      en: 'The statistician who corrected the deficit figures was prosecuted again and again for nearly fifteen years; his only conviction was procedural, and the Supreme Court annulled it in 2026.',
    },
    facts: [
      {
        el: 'Αύγουστος 2010: ο Ανδρέας Γεωργίου αναλαμβάνει την ΕΛΣΤΑΤ· τον Νοέμβριο διαβιβάζει στην Eurostat αναθεωρημένο έλλειμμα 2009 στο 15,4% του ΑΕΠ — επικριτές στο διοικητικό συμβούλιο ισχυρίστηκαν αργότερα ότι έπρεπε να είναι 13,6%.',
        en: 'August 2010: Andreas Georgiou takes over ELSTAT; in November he sends Eurostat a revised 2009 deficit of 15.4% of GDP — critics on the board later claimed it should have been 13.6%.',
      },
      {
        el: 'Σεπτέμβριος 2011: ξεκινά ποινική δίωξη. Σε δεκαπέντε χρόνια αντιμετωπίζει περίπου επτά διώξεις, έρευνες και αγωγές.',
        en: 'September 2011: criminal prosecution begins. Over fifteen years he faces about seven prosecutions, investigations and lawsuits.',
      },
      {
        el: 'Δεκέμβριος 2016: αθωώνεται πρωτόδικα. Αύγουστος 2017: το Εφετείο τον καταδικάζει για ένα σκέλος — ότι δεν έθεσε τα στοιχεία σε ψηφοφορία του ΔΣ — σε δύο χρόνια με αναστολή· ο Άρειος Πάγος απορρίπτει την αναίρεση το 2018.',
        en: 'December 2016: acquitted at first instance. August 2017: the Appeals Court convicts him on one count — not putting the figures to a board vote — with a two-year suspended sentence; the Supreme Court rejects his appeal in 2018.',
      },
      {
        el: 'Μάρτιος 2023: το Ευρωπαϊκό Δικαστήριο Δικαιωμάτων του Ανθρώπου κρίνει ότι η Ελλάδα παραβίασε το δικαίωμά του σε δίκαιη δίκη, επειδή ο Άρειος Πάγος αγνόησε χωρίς αιτιολογία το αίτημά του για παραπομπή στο Δικαστήριο της ΕΕ.',
        en: 'March 2023: the European Court of Human Rights finds Greece violated his right to a fair trial, because the Supreme Court ignored without reasons his request for a referral to the EU Court of Justice.',
      },
      {
        el: 'Αύγουστος 2026: ο Άρειος Πάγος, με την απόφαση 922/2026, ακυρώνει την καταδίκη, κρίνοντας ότι το δικαστήριο του 2017 ερμήνευσε και εφάρμοσε εσφαλμένα τον νόμο.',
        en: 'August 2026: the Supreme Court, in decision 922/2026, annuls the conviction, finding the 2017 court wrongly interpreted and applied the law.',
      },
    ],
    outcome: {
      el: 'Δικαίωση — μετά από δεκαπέντε χρόνια ποινικών διαδικασιών για αριθμούς που η Eurostat είχε επικυρώσει.',
      en: 'Vindication — after fifteen years of criminal proceedings over numbers Eurostat had validated.',
    },
    breach: {
      el: 'Οι επίσημες στατιστικές είναι ο καθρέφτης μιας χώρας: αν ο καθρέφτης κρίνεται από όσους δεν τους αρέσει η εικόνα, κανείς δεν μπορεί πια να εμπιστευτεί κανέναν αριθμό. Όταν ο στατιστικός δικάζεται επειδή το έλλειμμα ήταν μεγάλο, το μήνυμα προς κάθε επόμενο είναι σαφές: στρογγύλεψε.',
      en: 'Official statistics are a country’s mirror: if the mirror is judged by those who dislike the image, no number can be trusted again. When the statistician is tried because the deficit was large, the message to every successor is plain: round it down.',
    },
    patterns: ['messenger-prosecuted'],
    safeguards: ['open-method', 'shield', 'clock'],
    counterfactual: {
      el: 'Με Ανοιχτή Μεθοδολογία, κάθε αριθμός θα δημοσιευόταν με τα δεδομένα του ώστε να τον αναπαραγάγει οποιοσδήποτε, και πριν από κάθε δίωξη για «λάθος» στατιστικά θα απαιτούνταν δημόσια γνώμη ανεξάρτητου διεθνούς πάνελ. Η διαφωνία θα λυνόταν με επιστήμη σε μήνες — όχι με ποινικά δικαστήρια σε δεκαπέντε χρόνια.',
      en: 'With Open Method, every figure would be published with its data so anyone could reproduce it, and any prosecution over “wrong” statistics would first need a public opinion from an independent international panel. The dispute would be settled by science in months — not by criminal courts over fifteen years.',
    },
    antilogos: {
      el: 'Μέλη του ΔΣ της ΕΛΣΤΑΤ υποστήριξαν ότι το έλλειμμα φουσκώθηκε, και η μόνη καταδίκη αφορούσε διαδικασία διακυβέρνησης, όχι παραποίηση αριθμών. Οι στατιστικοί δεν μπορούν να είναι υπεράνω του νόμου επειδή η δουλειά τους είναι τεχνική.',
      en: 'ELSTAT board members argued the deficit was inflated, and the only conviction concerned governance procedure, not falsified numbers. Statisticians cannot be above the law just because their work is technical.',
    },
    reply: {
      el: 'Κανείς δεν είναι υπεράνω του νόμου — γι’ αυτό η Ανοιχτή Μεθοδολογία δεν απαγορεύει τη δίωξη, απλώς βάζει την επιστήμη πριν από το δικαστήριο. Εδώ η κατηγορία για φούσκωμα δεν οδήγησε ποτέ σε καταδίκη, η Eurostat και οι επόμενες κυβερνήσεις χρησιμοποίησαν την ίδια μέθοδο, και η διαδικαστική καταδίκη ακυρώθηκε. Δεκαπέντε χρόνια δίωξης δεν ήταν έλεγχος· ήταν τιμωρία.',
      en: 'No one is above the law — which is why Open Method does not bar prosecution; it simply puts science before the court. Here the inflation charge never produced a conviction, Eurostat and later governments used the same method, and the procedural conviction was annulled. Fifteen years of prosecution was not scrutiny; it was punishment.',
    },
    lever: {
      el: 'Ζήτησε κάθε διαφωνία για επίσημα στατιστικά να κρίνεται πρώτα δημόσια από ανεξάρτητους επιστήμονες, πριν από οποιαδήποτε ποινική δίωξη.',
      en: 'Ask that every dispute over official statistics first be judged publicly by independent scientists, before any criminal prosecution.',
    },
    scores: { harm: 7, power: 8, recurrence: 6, remedy: 7 },
    status: {
      el: 'Κλειστή. Η καταδίκη ακυρώθηκε από τον Άρειο Πάγο (απόφαση 922/2026).',
      en: 'Closed. The conviction was annulled by the Supreme Court (decision 922/2026).',
    },
    sources: [
      { title: 'Wikipedia — Andreas Georgiou (economist)', url: 'https://en.wikipedia.org/wiki/Andreas_Georgiou_(economist)' },
      { title: 'Significance — “The numbers were not up for a vote” (2026)', url: 'https://significancemagazine.com/andreas-georgiou-the-numbers-were-not-up-for-a-vote/' },
      { title: 'ECHR case law — Georgiou v. Greece (2023)', url: 'https://www.echrcaselaw.com/en/echr-decisions/court-of-cassations-failure-to-examine-without-giving-reasons-applicants-request-to-seek-a-preliminary-ruling-from-the-court-of-justice-of-the-european-union-violation-of-article/' },
      { title: 'International Statistical Institute — Statement on reopening the case (2025)', url: 'https://isi-web.org/statement/isi-statement-reopening-case-against-andreas-georgiou' },
    ],
  },
  {
    id: 'chalkida-tax-office-2024',
    when: '2024–2026',
    place: { el: 'Χαλκίδα και Κέρκυρα, Ελλάδα', en: 'Chalkida and Corfu, Greece' },
    title: {
      el: 'Η διοίκηση μιας ΔΟΥ κατηγορείται ότι κρατούσε «όμηρους» τις επιστροφές φόρου των επιχειρήσεων μέχρι να πληρώσουν',
      en: 'A tax office’s leadership is accused of holding businesses’ tax refunds hostage until they paid',
    },
    harmed: { el: 'Επιχειρηματίες της Εύβοιας — και οι τίμιοι εφοριακοί', en: 'Businesspeople in Evia — and honest tax staff' },
    plain: {
      el: 'Κατά την κατηγορία, στελέχη της ΔΟΥ Χαλκίδας μπλόκαραν επιστροφές φόρου και απειλούσαν με ελέγχους αν οι επιχειρήσεις δεν πλήρωναν ποσοστό· παρόμοιο κύκλωμα αποκαλύφθηκε στην Κέρκυρα.',
      en: 'According to the charges, officials at the Chalkida tax office blocked tax refunds and threatened audits unless businesses paid a cut; a similar ring was uncovered in Corfu.',
    },
    facts: [
      {
        el: 'Μάιος 2024: η Υπηρεσία Εσωτερικών Υποθέσεων της ΕΛ.ΑΣ. συλλαμβάνει επτά άτομα — την προϊσταμένη και τον αναπληρωτή της ΔΟΥ Χαλκίδας, τρεις υπαλλήλους, έναν μεσάζοντα και έναν λογιστή — για εγκληματική οργάνωση, δωροδοκία, εκβίαση και παράβαση καθήκοντος.',
        en: 'May 2024: the police internal-affairs service arrests seven people — the head and deputy head of the Chalkida tax office, three employees, an intermediary and an accountant — for criminal organisation, bribery, extortion and breach of duty.',
      },
      {
        el: 'Η φερόμενη μέθοδος: μπλόκο στις επιστροφές φόρου και απειλή ελέγχου αν δεν καταβαλλόταν περίπου 5% της επιστροφής. Η υπόθεση ξεκίνησε από καταγγελίες πολιτών· βρέθηκαν 65.030 ευρώ σε μετρητά και σημειωματάριο με ονόματα και ποσά.',
        en: 'The alleged method: blocking tax refunds and threatening audits unless about 5% of the refund was paid. The case began with citizens’ complaints; €65,030 in cash and a notebook of names and amounts were found.',
      },
      {
        el: 'Οκτώβριος 2024: στην Κέρκυρα συλλαμβάνονται τέσσερις υπάλληλοι εφορίας και ένας λογιστής για κύκλωμα που φέρεται να ζήτησε τουλάχιστον 183.000 ευρώ· την υπόθεση εντόπισε η ίδια η υπηρεσία εσωτερικών υποθέσεων της ΑΑΔΕ.',
        en: 'October 2024: in Corfu, four tax employees and an accountant are arrested over a ring allegedly demanding at least €183,000; the tax authority’s own internal-affairs unit uncovered it.',
      },
      {
        el: 'Η δίκη της Χαλκίδας, με 22–24 κατηγορουμένους ανάμεσά τους λογιστές και επιχειρηματίες που φέρονται να δωροδόκησαν, συνεχίζεται· τον Νοέμβριο 2025 οι δύο προφυλακισμένες αποφυλακίζονται επειδή συμπληρώθηκε το ανώτατο όριο των 18 μηνών χωρίς απόφαση.',
        en: 'The Chalkida trial, with 22–24 defendants including accountants and businesspeople accused of paying bribes, continues; in November 2025 the two detained officials are released after reaching the 18-month maximum without a verdict.',
      },
    ],
    outcome: {
      el: 'Συλλήψεις και κακουργηματική δίκη σε εξέλιξη· η υπόθεση της Κέρκυρας δείχνει ότι ο εσωτερικός έλεγχος μπορεί να λειτουργήσει.',
      en: 'Arrests and a felony trial under way; the Corfu case shows internal oversight can work.',
    },
    breach: {
      el: 'Η επιστροφή φόρου δεν είναι χάρη· είναι χρήματα του πολίτη που το κράτος οφείλει. Όταν ένας υπάλληλος μπορεί να την κρατά όσο θέλει χωρίς να φαίνεται, η διακριτική ευχέρεια γίνεται εμπόρευμα — και το κράτος δανείζεται την εξουσία του σε όποιον τη χρησιμοποιεί για εκβιασμό.',
      en: 'A tax refund is not a favour; it is the citizen’s money that the state owes. When an official can hold it as long as they like without anyone seeing, discretion becomes merchandise — and the state lends its power to whoever uses it to extort.',
    },
    patterns: ['refund-extortion'],
    safeguards: ['refund-clock', 'kleros-audit'],
    counterfactual: {
      el: 'Με το Ρολόι Επιστροφής, κάθε επιχείρηση θα έβλεπε πού βρίσκεται η επιστροφή της και ποιος τη χειρίζεται· μια επιστροφή που «κολλά» χωρίς αιτιολογία θα περνούσε αυτόματα σε άλλον υπάλληλο και στις εσωτερικές υποθέσεις. Με τον Κληρωτό Ελεγκτή, κανείς δεν θα «είχε» τους φακέλους μιας περιοχής για να τους εκμεταλλευτεί.',
      en: 'With the Refund Clock, every business would see where its refund stands and who handles it; a refund “stuck” without reason would pass automatically to another officer and to internal affairs. With the Auditor by Lot, no one would “own” an area’s files to exploit them.',
    },
    antilogos: {
      el: 'Η προϊσταμένη αρνείται ότι πλούτισε, λέει ότι η πρακτική υπήρχε «χρόνια» πριν έρθει και ότι ο καταγγέλλων επιχειρηματίας την παγίδευσε. Και η υπόθεση της Κέρκυρας δείχνει ότι η ΑΑΔΕ εντοπίζει μόνη της τη διαφθορά — το σύστημα λειτουργεί.',
      en: 'The office head denies enriching herself, says the practice had existed “for years” before she arrived, and claims the complaining businessman entrapped her. And the Corfu case shows the tax authority detects corruption on its own — the system works.',
    },
    reply: {
      el: 'Αν η πρακτική υπήρχε χρόνια, αυτό είναι επιχείρημα υπέρ της πρότασης, όχι εναντίον της: σημαίνει ότι κανένας έλεγχος δεν την είδε. Και όπου η ΑΑΔΕ τη βρήκε μόνη της, το έκανε μετά από οκτώ περιπτώσεις και δεκάδες χιλιάδες ευρώ. Ένα δημόσιο ρολόι σε κάθε επιστροφή δεν περιμένει ούτε καταγγελία ούτε παγίδα.',
      en: 'If the practice existed for years, that argues for the proposal, not against it: it means no check ever saw it. And where the tax authority found it alone, it did so after eight cases and tens of thousands of euros. A public clock on every refund waits for neither a complaint nor a trap.',
    },
    lever: {
      el: 'Ζήτησε κάθε επιστροφή φόρου να έχει δημόσια κατάσταση, προθεσμία και όνομα χειριστή — ορατά στο κινητό του δικαιούχου.',
      en: 'Ask that every tax refund have a public status, a deadline and a named handler — visible on the claimant’s phone.',
    },
    scores: { harm: 5, power: 4, recurrence: 9, remedy: 9 },
    status: {
      el: 'Ανοιχτή· δίκη σε εξέλιξη. Όλοι οι κατηγορούμενοι τεκμαίρονται αθώοι.',
      en: 'Open; trial ongoing. All defendants are presumed innocent.',
    },
    sources: [
      { title: 'in.gr — Chalkida: the arrested tax officials before the investigator (2024)', url: 'https://www.in.gr/2024/05/24/greece/xalkida-ston-anakriti-oi-syllifthentes-eforiakoi-nea-kataggelia-epixeirimatia-gia-ti-drasi-tous/' },
      { title: 'CNN Greece — Only the director and one employee detained (2024)', url: 'https://www.cnn.gr/ellada/story/421087/xalkida-eleytheroi-oi-eforiakoi-sti-fylaki-mono-i-diefthyntria-kai-mia-ypallilos-tis-dou' },
      { title: 'OT — Pitsilis: corruption has no place in AADE (Corfu, 2024)', url: 'https://www.ot.gr/2024/10/12/epikairothta/pitsilis-i-diafthora-den-exei-ton-paramikro-xoro-stin-aade/' },
      { title: 'dikastiko.gr — Two detained tax officials released (2025)', url: 'https://www.dikastiko.gr/eidhsh/kykloma-sti-doy-chalkidas-apofylakistikan-oi-dyo-katigoroymenes-eforiakoi/' },
    ],
  },
  {
    id: 'admiral-vat-2022',
    when: '2017–2026',
    place: { el: 'Ελλάδα και ΕΕ', en: 'Greece and the EU' },
    title: {
      el: 'Οι «εξαφανισμένοι έμποροι»: αλυσίδες εταιρειών-κελυφών στράγγιξαν ΦΠΑ από την Ελλάδα και την ΕΕ',
      en: 'The “missing traders”: chains of shell companies drained VAT from Greece and the EU',
    },
    harmed: { el: 'Οι φορολογούμενοι της Ελλάδας και της ΕΕ — και οι τίμιοι έμποροι ηλεκτρονικών', en: 'Greek and EU taxpayers — and honest electronics traders' },
    plain: {
      el: 'Η μεγαλύτερη απάτη ΦΠΑ που ερευνήθηκε ποτέ στην ΕΕ λειτούργησε με εταιρείες που χρέωναν ΦΠΑ και εξαφανίζονταν· τα ελληνικά της παρακλάδια ερευνώνται από την Ευρωπαϊκή Εισαγγελία.',
      en: 'The largest VAT fraud ever investigated in the EU ran on companies that charged VAT and disappeared; its Greek branches are being investigated by the European Public Prosecutor’s Office.',
    },
    facts: [
      {
        el: 'Νοέμβριος 2022: η Ευρωπαϊκή Εισαγγελία ανακοινώνει την επιχείρηση Admiral, με πάνω από 200 έρευνες σε 14 κράτη, ανάμεσά τους η Ελλάδα, για απάτη ΦΠΑ σε ηλεκτρονικά· συνδέονταν σχεδόν 9.000 νομικά πρόσωπα.',
        en: 'November 2022: the European Public Prosecutor’s Office announces Operation Admiral, with 200+ searches in 14 states including Greece, into VAT fraud on electronics; nearly 9,000 legal entities were connected.',
      },
      {
        el: 'Η απάτη εντοπίστηκε αρχικά από την τοπική εφορία της Κοΐμπρα στην Πορτογαλία, τον Απρίλιο 2021· η εκτιμώμενη ζημιά έφτασε τα 2,9 δισ. ευρώ.',
        en: 'The fraud was first spotted by the local tax office in Coimbra, Portugal, in April 2021; the estimated damage reached €2.9 billion.',
      },
      {
        el: 'Δεκέμβριος 2024: η Ευρωπαϊκή Εισαγγελία στην Αθήνα ερευνά δίκτυο εταιρειών σε Ελλάδα, Ρουμανία, Σερβία και αλλού με συναλλαγές περίπου 305 εκατ. ευρώ και ζημιά ΦΠΑ τουλάχιστον 38 εκατ.· δεσμεύονται περιουσίες 25 προσώπων και 13 εταιρειών.',
        en: 'December 2024: EPPO Athens investigates a network in Greece, Romania, Serbia and elsewhere trading about €305 million, with at least €38 million in VAT damage; assets of 25 people and 13 companies are frozen.',
      },
      {
        el: 'Μάιος 2025: στο Λισαβόνα καταδικάζονται 10 πρόσωπα και 13 εταιρείες στην πρώτη δίκη Admiral· δημεύονται 80 εκατ. ευρώ.',
        en: 'May 2025: in Lisbon, 10 people and 13 companies are convicted in the first Admiral trial; €80 million is confiscated.',
      },
      {
        el: 'Ιούλιος 2026: νέα έρευνα της Ευρωπαϊκής Εισαγγελίας σε Αττική και Καστοριά για «καρουζέλ» ΦΠΑ σε ηλεκτρονικά, με εκτιμώμενη ζημιά τουλάχιστον 46,9 εκατ. ευρώ.',
        en: 'July 2026: a new EPPO investigation in Attica and Kastoria into an electronics VAT carousel, with estimated losses of at least €46.9 million.',
      },
    ],
    outcome: {
      el: 'Διασυνοριακή δίωξη και πρώτες καταδίκες στην Πορτογαλία· στην Ελλάδα, έρευνες και δεσμεύσεις περιουσιών.',
      en: 'Cross-border prosecution and first convictions in Portugal; in Greece, investigations and asset freezes.',
    },
    breach: {
      el: 'Ο ΦΠΑ πληρώνεται από κάθε καταναλωτή σε κάθε ταμείο. Όταν αλυσίδες εταιρειών-φαντασμάτων μπορούν να τον εισπράττουν και να εξαφανίζονται για χρόνια, ο μισθωτός που πληρώνει φόρο σε κάθε αγορά χρηματοδοτεί, χωρίς να το ξέρει, όσους τον κλέβουν — και ο τίμιος έμπορος χάνει από έναν ανταγωνιστή που «κερδίζει» από τον φόρο που δεν αποδίδει.',
      en: 'VAT is paid by every consumer at every till. When chains of phantom companies can collect it and vanish for years, the wage earner who pays tax on every purchase unknowingly funds those who rob them — and the honest trader loses to a rival that “profits” from the tax it never pays over.',
    },
    patterns: ['missing-trader'],
    safeguards: ['vat-chain', 'owners'],
    counterfactual: {
      el: 'Με την Αλυσίδα ΦΠΑ σε Πραγματικό Χρόνο, τα ηλεκτρονικά τιμολόγια του myDATA θα συνδέονταν από τον πρώτο ως τον τελευταίο κρίκο και μέσα στην ΕΕ — η εταιρεία που χρεώνει ΦΠΑ χωρίς να τον αποδίδει θα σημαινόταν πριν επιστραφεί φόρος στον επόμενο. Το Ποιος Είναι Πίσω θα ένωνε τα κελύφη με τους ίδιους ανθρώπους.',
      en: 'With the Live VAT Chain, myDATA e-invoices would be linked from the first link to the last and across the EU — a company charging VAT without paying it over would be flagged before any refund to the next. Who Is Behind It would tie the shells to the same people.',
    },
    antilogos: {
      el: 'Εδώ κανένας Έλληνας αξιωματούχος δεν κατηγορείται — πρόκειται για απάτη εναντίον του κράτους, όχι από το κράτος. Και την εντόπισε ένας συνηθισμένος τοπικός έλεγχος: οι απλοί εφοριακοί έκαναν τη δουλειά τους.',
      en: 'No Greek official is accused here — this is fraud against the state, not by it. And an ordinary local audit caught it: ordinary tax officers did their job.',
    },
    reply: {
      el: 'Σωστά — και γι’ αυτό η υπόθεση είναι εδώ: η ατιμωρησία δεν χρειάζεται πάντα διεφθαρμένο αξιωματούχο· αρκεί ένα κράτος που βλέπει την αλυσίδα μόνο κρίκο-κρίκο. Ένας τοπικός έλεγχος το 2021 βρήκε μια απάτη που λειτουργούσε από το 2017. Ο στόχος είναι να μη χρειάζεται τύχη.',
      en: 'True — which is why the case is here: impunity does not always need a corrupt official; a state that sees the chain only link by link is enough. A local audit in 2021 found a fraud running since 2017. The goal is not to need luck.',
    },
    lever: {
      el: 'Ζήτησε η Ελλάδα να συνδέει τα ηλεκτρονικά τιμολόγια σε πραγματικό χρόνο με τα άλλα κράτη της ΕΕ πριν από κάθε επιστροφή ΦΠΑ.',
      en: 'Ask that Greece link e-invoices in real time with other EU states before every VAT refund.',
    },
    scores: { harm: 9, power: 4, recurrence: 9, remedy: 9 },
    status: {
      el: 'Η απόφαση της Λισαβόνας δεν είναι τελεσίδικη. Οι ελληνικές υποθέσεις βρίσκονται σε στάδιο έρευνας· όλοι τεκμαίρονται αθώοι.',
      en: 'The Lisbon verdict is not final. The Greek cases are at the investigation stage; all are presumed innocent.',
    },
    sources: [
      { title: 'EPPO — Operation Admiral uncovers VAT fraud estimated at €2.2bn (2022)', url: 'https://www.eppo.europa.eu/media/news/operation-admiral-eppo-uncovers-organised-crime-groups-responsible-vat-fraud-estimated-eu22-billion-2022-11-29_en' },
      { title: 'EPPO — Admiral: first convictions in Portugal (2025)', url: 'https://www.eppo.europa.eu/media/news/investigation-admiral-first-convictions-portugal-23-defendants-guilty-massive-international-vat-2025-05-12_en' },
      { title: 'EPPO — Admiral 3.0: €38 million VAT fraud in Greece (2024)', url: 'https://www.eppo.europa.eu/en/media/news/investigation-admiral-30-eppo-probes-eu38-million-vat-fraud-greece' },
      { title: 'EPPO — Searches in Greece over €46.9 million VAT carousel (2026)', url: 'https://www.eppo.europa.eu/media/news/greece-searches-and-seizures-probe-suspected-eur469-million-vat-carousel-fraud-2026-07-14_en' },
    ],
  },
  {
    id: 'cum-ex-2006',
    when: '2006–2026',
    place: { el: 'Γερμανία', en: 'Germany' },
    title: {
      el: 'Ένας πρώην εφοριακός δίδαξε στις τράπεζες να ζητούν επιστροφή φόρων που δεν είχαν πληρωθεί ποτέ',
      en: 'A former tax inspector taught banks to claim refunds of tax that had never been paid',
    },
    harmed: { el: 'Οι Γερμανοί φορολογούμενοι — με ζημιά που εκτιμάται σε περίπου 10 δισ. ευρώ', en: 'German taxpayers — with damage estimated at around €10 billion' },
    plain: {
      el: 'Με συναλλαγές μετοχών γύρω από την ημερομηνία μερίσματος, τράπεζες και επενδυτές ζητούσαν επιστροφή φόρου που δεν είχε παρακρατηθεί ποτέ· ο αρχιτέκτονας του σχήματος ήταν πρώην ανώτερος εφοριακός.',
      en: 'By trading shares around dividend day, banks and investors claimed refunds of tax that had never been withheld; the scheme’s architect was a former senior tax inspector.',
    },
    facts: [
      {
        el: 'Νοέμβριος 2012: ο Hanno Berger, πρώην ανώτερος εφοριακός που έγινε φοροτεχνικός δικηγόρος, φεύγει στην Ελβετία μετά από έρευνες στο γραφείο του· συλλαμβάνεται εκεί τον Ιούλιο 2021 και εκδίδεται το 2022.',
        en: 'November 2012: Hanno Berger, a former senior tax inspector turned tax lawyer, flees to Switzerland after raids on his firm; he is arrested there in July 2021 and extradited in 2022.',
      },
      {
        el: 'Δεκέμβριος 2022: το δικαστήριο της Βόννης τον καταδικάζει σε 8 χρόνια για φοροδιαφυγή σε βάρος του δημοσίου 278 εκατ. ευρώ· είναι ο 11ος καταδικασμένος του σκανδάλου.',
        en: 'December 2022: the Bonn court sentences him to 8 years for tax evasion costing the state €278 million; he is the 11th person convicted in the scandal.',
      },
      {
        el: 'Μάιος 2023: το δικαστήριο του Βισμπάντεν του επιβάλλει 8 χρόνια και 3 μήνες για συναλλαγές που απέφεραν 113 εκατ. ευρώ αδικαιολόγητων επιστροφών· το Ομοσπονδιακό Ακυρωτικό επικυρώνει και τις δύο καταδίκες.',
        en: 'May 2023: the Wiesbaden court gives him 8 years 3 months over deals that produced €113 million in unjustified refunds; the Federal Court of Justice upholds both convictions.',
      },
      {
        el: 'Απρίλιος 2024: η επικεφαλής εισαγγελέας της Κολωνίας για το Cum-Ex, με ομάδα 30 ατόμων και πάνω από 1.700 υπόπτους, παραιτείται δηλώνοντας ότι δεν είναι καθόλου ικανοποιημένη με τον τρόπο που διώκεται το οικονομικό έγκλημα στη Γερμανία.',
        en: 'April 2024: Cologne’s lead Cum-Ex prosecutor, with a team of 30 and over 1,700 suspects, resigns, saying she is not at all satisfied with how financial crime is prosecuted in Germany.',
      },
      {
        el: 'Ιούνιος 2024: η δίκη του πρώην επικεφαλής της τράπεζας Warburg του Αμβούργου διακόπτεται για λόγους υγείας· οι ιδιοκτήτες της τράπεζας είχαν επιστρέψει πλήρως τη φορολογική οφειλή το 2020.',
        en: 'June 2024: the trial of the former head of Hamburg’s Warburg bank is discontinued on health grounds; the bank’s owners had repaid the tax in full in 2020.',
      },
    ],
    outcome: {
      el: 'Τελεσίδικες καταδίκες του αρχιτέκτονα και άλλων· πάνω από 1.700 ύποπτοι, πολλές υποθέσεις ακόμη ανοιχτές, και μια εισαγγελέας που παραιτήθηκε από απογοήτευση.',
      en: 'Final convictions of the architect and others; over 1,700 suspects, many cases still open, and a prosecutor who quit in frustration.',
    },
    breach: {
      el: 'Η επιστροφή φόρου στηρίζεται σε μια απλή υπόσχεση: επιστρέφεται μόνο ό,τι πληρώθηκε. Όταν ένας πρώην φύλακας του συστήματος χρησιμοποιεί όσα ήξερε για να το αδειάσει, και το κράτος χρειάζεται χρόνια για να κλείσει ένα κενό που βλέπει, ο φορολογούμενος χρηματοδοτεί την ευφυΐα όσων τον κλέβουν.',
      en: 'A tax refund rests on a simple promise: only what was paid is refunded. When a former guardian of the system uses what he knew to empty it, and the state takes years to close a gap it can see, the taxpayer funds the cleverness of those who rob them.',
    },
    patterns: ['phantom-refund', 'revolving-door'],
    safeguards: ['vat-chain', 'regulator-watch'],
    counterfactual: {
      el: 'Η Αλυσίδα σε Πραγματικό Χρόνο θα αντιστοίχιζε κάθε επιστροφή φόρου μερίσματος με την παρακράτηση που πράγματι έγινε — δύο επιστροφές για έναν φόρο θα φαίνονταν αμέσως. Ο Φύλακας του Εποπτευτή θα κατέγραφε δημόσια τις προειδοποιήσεις για το κενό και τη σιωπή όσων έπρεπε να το κλείσουν.',
      en: 'The live chain would match every dividend-tax refund with the withholding actually made — two refunds for one tax would show at once. Watching the Watchdog would log publicly the warnings about the gap and the silence of those who should have closed it.',
    },
    antilogos: {
      el: 'Ο καταδικασμένος υποστήριξε ότι ορισμένες συναλλαγές ήταν νόμιμες όταν έγιναν· το σχήμα εκμεταλλεύτηκε ένα νομικό κενό, άρα η αποτυχία ήταν και του νομοθέτη. Και η τράπεζα Warburg επέστρεψε όλα τα χρήματα.',
      en: 'The convicted man argued some transactions were legal at the time; the scheme exploited a legal gap, so the failure was also the legislator’s. And Warburg repaid everything.',
    },
    reply: {
      el: 'Τα δικαστήρια έκριναν τελεσίδικα ότι δεν ήταν νόμιμες. Και ακριβώς επειδή ήταν και αποτυχία του νομοθέτη, η πρόταση δεν περιμένει τον νόμο: αρκεί να μην επιστρέφεται ποτέ φόρος που δεν πληρώθηκε — έναν κανόνα που κάθε αλγόριθμος μπορεί να εφαρμόσει από την πρώτη μέρα. Η επιστροφή των χρημάτων μετά από μια δεκαετία δεν επιστρέφει τη δεκαετία.',
      en: 'The courts ruled with finality that they were not legal. And precisely because it was also the legislator’s failure, the proposal does not wait for the law: it is enough never to refund tax that was not paid — a rule any algorithm can apply from day one. Repaying the money a decade later does not repay the decade.',
    },
    lever: {
      el: 'Ζήτησε κάθε επιστροφή φόρου να αντιστοιχίζεται αυτόματα με την παρακράτηση ή την καταβολή που πράγματι έγινε.',
      en: 'Ask that every tax refund be matched automatically with the withholding or payment actually made.',
    },
    scores: { harm: 9, power: 7, recurrence: 6, remedy: 8 },
    status: {
      el: 'Οι καταδίκες του αρχιτέκτονα είναι τελεσίδικες. Πολλές άλλες διαδικασίες εκκρεμούν· όσοι δεν έχουν καταδικαστεί τεκμαίρονται αθώοι.',
      en: 'The architect’s convictions are final. Many other proceedings are pending; those not convicted are presumed innocent.',
    },
    sources: [
      { title: 'swissinfo — Cum-ex tax fraud mastermind gets eight-year sentence (2022)', url: 'https://www.swissinfo.ch/eng/business/german-cum-ex-tax-fraud-mastermind-gets-eight-year-sentence/48132988' },
      { title: 'LTO — Federal Court rejects appeal in Wiesbaden cum-ex case (2024)', url: 'https://www.lto.de/recht/nachrichten/n/bgh-1-str-58-24-hanno-berger-cum-ex-revision-verworfen-lg-wiesbaden' },
      { title: 'JURIST — Lead cum-ex prosecutor steps down (2024)', url: 'https://www.jurist.org/news/2024/04/lead-prosecutor-in-germanys-cum-ex-tax-fraud-scandal-steps-down/' },
      { title: 'Wikipedia — M. M. Warburg & Co.', url: 'https://en.wikipedia.org/wiki/M._M._Warburg_%26_Co.' },
    ],
  },
]
