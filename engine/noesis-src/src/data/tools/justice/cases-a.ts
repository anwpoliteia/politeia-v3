// ΙΣΟΝΟΜΙΑ — cases 1–5. Every fact is sourced and was checked on 2026-09-29.
// Headlines name the office, not the officer; facts name people only where
// sources and outcomes are public. Open cases carry the presumption of
// innocence explicitly (Politeia forbids targeting individuals).

import type { ToolCase } from '../types'

export const CASES_A: readonly ToolCase[] = [
  {
    id: 'south-dakota-2020',
    when: '2020',
    place: { el: 'Νότια Ντακότα, ΗΠΑ', en: 'South Dakota, USA' },
    title: {
      el: 'Ο Γενικός Εισαγγελέας της πολιτείας σκότωσε πεζό — και τιμωρήθηκε για δύο τροχαίες παραβάσεις',
      en: 'The state’s Attorney General killed a pedestrian — and was punished for two traffic misdemeanours',
    },
    harmed: { el: 'Joseph Boever, 55 ετών', en: 'Joseph Boever, 55' },
    plain: {
      el: 'Ο ανώτατος αξιωματούχος επιβολής του νόμου μιας πολιτείας σκότωσε άνθρωπο με το αυτοκίνητό του και η ποινική δικαιοσύνη τελείωσε σε πρόστιμα· μόνο η Γερουσία τον απομάκρυνε.',
      en: 'A state’s top law-enforcement officer killed a man with his car and criminal justice ended in fines; only the state Senate removed him.',
    },
    facts: [
      {
        el: '12 Σεπτεμβρίου 2020, 22:30: ο Γενικός Εισαγγελέας Jason Ravnsborg χτυπά θανάσιμα τον Joseph Boever, που περπατούσε στην άκρη του δρόμου. Δηλώνει ότι νόμιζε πως χτύπησε ελάφι.',
        en: '12 September 2020, 10:30 pm: Attorney General Jason Ravnsborg fatally strikes Joseph Boever, who was walking on the edge of the road. He says he thought he had hit a deer.',
      },
      {
        el: 'Λέει ότι βρήκε τη σορό την επόμενη μέρα. Επειδή η υπηρεσία ερευνών της πολιτείας υπαγόταν στον ίδιο, την έρευνα ανέλαβαν πράκτορες της Βόρειας Ντακότα — οι οποίοι κατέθεσαν αργότερα στη Βουλή ότι δεν έλεγε πάντα την αλήθεια.',
        en: 'He says he found the body the next day. Because the state’s own investigators answered to him, North Dakota agents took the case — and later told lawmakers he had not always told the truth.',
      },
      {
        el: 'Φεβρουάριος 2021: κατηγορείται μόνο για τρία πλημμελήματα κυκλοφορίας. Καμία κατηγορία για ανθρωποκτονία.',
        en: 'February 2021: charged with only three traffic misdemeanours. No homicide charge.',
      },
      {
        el: 'Αύγουστος 2021: δεν αμφισβητεί δύο από αυτά — παράνομη αλλαγή λωρίδας και χρήση κινητού — και τιμωρείται με πρόστιμα.',
        en: 'August 2021: he pleads no contest to two of them — an illegal lane change and phone use — and is fined.',
      },
      {
        el: 'Ιούνιος 2022: η Γερουσία της πολιτείας τον καταδικάζει στη δίκη παραπομπής (24–9 και 31–2) και τον απομακρύνει — πρώτη φορά στην ιστορία της πολιτείας.',
        en: 'June 2022: the state Senate convicts him at impeachment (24–9 and 31–2) and removes him — a first in the state’s history.',
      },
    ],
    outcome: {
      el: 'Πρόστιμα για τροχαίες παραβάσεις. Καμία ποινική ευθύνη για τον θάνατο. Απομάκρυνση μόνο μέσα από πολιτική διαδικασία.',
      en: 'Fines for traffic offences. No criminal liability for the death. Removal only through a political process.',
    },
    breach: {
      el: 'Ο νόμος υποτίθεται ότι κοιτάζει μόνο τη βλάβη. Εδώ η βλάβη ήταν ένας νεκρός άνθρωπος, αλλά η κατηγορία μετρήθηκε σε λωρίδες και κινητά. Όταν ο κατηγορούμενος είναι ο προϊστάμενος των εισαγγελέων της πολιτείας, κάθε επιλογή κατηγορίας γίνεται ύποπτη — ακόμη κι όταν ανατίθεται σε άλλους.',
      en: 'The law is meant to look only at the harm. Here the harm was a dead man, yet the charge was measured in lanes and phone use. When the accused heads the state’s own prosecutors, every charging choice becomes suspect — even when it is handed to others.',
    },
    patterns: ['downgraded-charge', 'captured-investigation'],
    safeguards: ['mirror', 'reasons', 'conflicts'],
    counterfactual: {
      el: 'Το Κάτοπτρο Ισονομίας θα είχε δημοσιεύσει, τη μέρα της κατηγορίας, πώς κατηγορήθηκαν απλοί οδηγοί που σκότωσαν πεζό αφηρημένοι από το κινητό. Αν η κατηγορία του Εισαγγελέα έπεφτε κάτω από αυτό το εύρος, οι εισαγγελείς θα έπρεπε να εξηγήσουν γραπτώς γιατί — και ένας ανεξάρτητος εισαγγελέας θα την επανεξέταζε. Η απόφαση θα έμενε ανθρώπινη· η σιωπή όχι.',
      en: 'The Isonomia Mirror would have published, on charging day, how ordinary drivers who killed a pedestrian while distracted by a phone were charged. If the Attorney General’s charge fell below that range, prosecutors would have had to explain why in writing — and an independent prosecutor would review it. The decision would stay human; the silence would not.',
    },
    antilogos: {
      el: 'Η ισχυρότερη υπεράσπιση της απόφασης: η ανθρωποκτονία με όχημα απαιτεί απόδειξη απερισκεψίας πέρα από εύλογη αμφιβολία, και η απόσπαση της προσοχής μπορεί να μην αρκεί. Ένα σύστημα που σπρώχνει τους εισαγγελείς να κατηγορούν βαρύτερα από όσο αποδεικνύουν γεννά άδικες καταδίκες.',
      en: 'The strongest defence of the decision: vehicular homicide requires proof of recklessness beyond reasonable doubt, and distraction may not meet it. A system that pushes prosecutors to charge beyond what they can prove breeds wrongful convictions.',
    },
    reply: {
      el: 'Το Κάτοπτρο δεν απαιτεί βαρύτερη κατηγορία· απαιτεί το ίδιο μέτρο. Αν η ίδια απόσταση από την απόδειξη οδηγεί απλούς πολίτες σε κατηγορία ανθρωποκτονίας, τότε το πρόβλημα δεν είναι η απόδειξη αλλά το πρόσωπο. Κι αν δεν τους οδηγεί, το Κάτοπτρο θα το δείξει κι αυτό — και θα προστατέψει τον εισαγγελέα από την υποψία.',
      en: 'The Mirror does not demand a heavier charge; it demands the same measure. If the same distance from proof leads ordinary citizens to homicide charges, the problem is not the proof but the person. And if it does not, the Mirror shows that too — and shields the prosecutor from suspicion.',
    },
    lever: {
      el: 'Ζήτησε από τη Βουλή κάθε απόφαση για κατηγορία κατά αξιωματούχου να δημοσιεύεται μαζί με σύγκριση με όμοιες υποθέσεις πολιτών.',
      en: 'Ask your parliament to require that every charging decision against an official be published with a comparison to similar citizen cases.',
    },
    scores: { harm: 7, power: 10, recurrence: 9, remedy: 9 },
    status: {
      el: 'Κλειστή. Δύο πλημμελήματα, πρόστιμα (2021). Απομάκρυνση από τη Γερουσία (Ιούνιος 2022).',
      en: 'Closed. Two misdemeanours, fines (2021). Removed by the Senate (June 2022).',
    },
    sources: [
      { title: 'CNN — South Dakota Senate convicts and removes attorney general (2022)', url: 'https://www.cnn.com/2022/06/22/politics/jason-ravnsborg-south-dakota-attorney-general/' },
      { title: 'NPR — South Dakota AG removed after killing a pedestrian (2022)', url: 'https://www.npr.org/2022/06/22/1106671572/south-dakota-attorney-general-ravnsborg-boever-pedestrian-impeach' },
      { title: 'Dakota News Now — North Dakota investigators: AG untruthful about crash (2022)', url: 'https://www.dakotanewsnow.com/2022/01/20/north-dakota-investigators-ag-ravnsborg-untruthful-about-september-2020-crash/' },
      { title: 'KELOLAND — Timeline of the investigation', url: 'https://www.keloland.com/keloland-com-original/timeline-investigation-into-deadly-crash-involving-south-dakota-attorney-general-jason-ravnsborg/' },
    ],
  },
  {
    id: 'luzerne-2008',
    when: '2003–2008',
    place: { el: 'Κομητεία Luzerne, Πενσυλβάνια, ΗΠΑ', en: 'Luzerne County, Pennsylvania, USA' },
    title: {
      el: 'Δύο δικαστές έστελναν παιδιά σε ιδιωτικά κέντρα κράτησης — και πληρώνονταν γι’ αυτό',
      en: 'Two judges sent children to private detention centres — and were paid for it',
    },
    harmed: { el: 'Χιλιάδες παιδιά, τα μισά χωρίς δικηγόρο', en: 'Thousands of children, half without a lawyer' },
    plain: {
      el: 'Δύο δικαστές εισέπραξαν εκατομμύρια από τον κατασκευαστή και τον συνιδιοκτήτη ιδιωτικών κέντρων κράτησης ανηλίκων, ενώ ο ένας έστελνε εκεί παιδιά για ασήμαντα παραπτώματα.',
      en: 'Two judges took millions from the builder and a co-owner of private juvenile detention centres, while one of them sent children there for trivial offences.',
    },
    facts: [
      {
        el: 'Οι δικαστές Mark Ciavarella και Michael Conahan εισέπραξαν περίπου 2,8 εκατ. δολάρια σε πληρωμές που οι ομοσπονδιακοί εισαγγελείς χαρακτήρισαν μίζες, αφού έκλεισαν το δημόσιο κέντρο ανηλίκων της κομητείας.',
        en: 'Judges Mark Ciavarella and Michael Conahan took about $2.8 million in payments federal prosecutors called kickbacks, after the county’s public juvenile centre was shut.',
      },
      {
        el: 'Περίπου τα μισά παιδιά στην αίθουσα του Ciavarella δεν είχαν δικηγόρο — και όσα δεν είχαν ήταν πολύ πιθανότερο να κλειστούν μέσα.',
        en: 'About half the children in Ciavarella’s courtroom had no lawyer — and those without one were far more likely to be locked up.',
      },
      {
        el: '2009: το Ανώτατο Δικαστήριο της Πενσυλβάνια ακυρώνει περίπου 4.000 αποφάσεις ανηλίκων (2003–2008) και διατάζει να διαγραφούν τα μητρώα τους.',
        en: '2009: the Pennsylvania Supreme Court vacates some 4,000 juvenile adjudications (2003–2008) and orders the records expunged.',
      },
      {
        el: '2011: ο Ciavarella καταδικάζεται σε 28 χρόνια, ο Conahan σε 17½. Τον Δεκέμβριο 2024 η ποινή του Conahan μετατρέπεται με προεδρική χάρη.',
        en: '2011: Ciavarella is sentenced to 28 years, Conahan to 17½. In December 2024 Conahan’s sentence is commuted by presidential clemency.',
      },
      {
        el: 'Αύγουστος 2022: ομοσπονδιακό δικαστήριο επιδικάζει πάνω από 200 εκατ. δολάρια αποζημίωση στα θύματα.',
        en: 'August 2022: a federal court awards over $200 million in damages to victims.',
      },
    ],
    outcome: {
      el: 'Καταδίκες — αλλά μόνο αφού χιλιάδες παιδιά είχαν περάσει από κελιά. Χρειάστηκαν χρόνια και το FBI για να φανεί ό,τι έδειχναν ήδη οι αριθμοί του ίδιου του δικαστηρίου.',
      en: 'Convictions — but only after thousands of children had been through cells. It took years and the FBI to see what the court’s own numbers already showed.',
    },
    breach: {
      el: 'Η δικαιοσύνη υπάρχει για να κρίνει τον αδύναμο με το ίδιο μέτρο που κρίνει τον ισχυρό. Εδώ ο δικαστής ήταν ο ίδιος πωλητής: κάθε παιδί ήταν έσοδο. Είναι η καθαρότερη μορφή διαφθοράς — η έδρα έγινε αγορά.',
      en: 'Justice exists to judge the weak by the same measure as the strong. Here the judge was himself the seller: every child was revenue. It is the purest form of corruption — the bench became a market.',
    },
    patterns: ['bought-bench'],
    safeguards: ['anomaly', 'pothen', 'kleros'],
    counterfactual: {
      el: 'Ο Ανιχνευτής Αποκλίσεων θα είχε δει, μέσα στον πρώτο χρόνο, έναν δικαστή του οποίου τα ποσοστά κράτησης και τα παιδιά χωρίς δικηγόρο ξέφευγαν από κάθε άλλο δικαστήριο της πολιτείας. Το Πόθεν Έσχες θα είχε δει πληρωμές σε εταιρείες συνδεδεμένες με τους δικαστές. Το σήμα θα πήγαινε στην επιθεώρηση — όχι σε μια ετυμηγορία.',
      en: 'The Anomaly Watch would have seen, within the first year, a judge whose detention rates and share of unrepresented children broke away from every other court in the state. The Live Asset Audit would have seen payments into companies tied to the judges. The signal would go to inspection — not to a verdict.',
    },
    antilogos: {
      el: 'Ένας αυστηρός δικαστής δεν είναι διεφθαρμένος δικαστής. Ένας ανιχνευτής αποκλίσεων θα τιμωρούσε την ανεξάρτητη κρίση και θα έσπρωχνε όλους τους δικαστές προς τον μέσο όρο — ακόμη κι όταν ο μέσος όρος είναι άδικος.',
      en: 'A harsh judge is not a corrupt judge. An anomaly watch would punish independent judgement and push every judge toward the average — even when the average is unjust.',
    },
    reply: {
      el: 'Γι’ αυτό η απόκλιση είναι ερώτηση, όχι κατηγορία. Ο ανιχνευτής δεν ζητά ομοιομορφία· ζητά εξήγηση. Ο δικαστής με αρχές εξηγεί σε μία σελίδα· ο πληρωμένος δικαστής δεν μπορεί να εξηγήσει γιατί τα μισά παιδιά μπροστά του δεν είχαν δικηγόρο.',
      en: 'That is why an outlier is a question, not a charge. The watch does not demand conformity; it demands an explanation. A principled judge explains in a page; a paid judge cannot explain why half the children before him had no lawyer.',
    },
    lever: {
      el: 'Ζήτησε δημόσια, ανωνυμοποιημένα στατιστικά ανά δικαστήριο: ποσοστά κράτησης, αθωώσεων και εκπροσώπησης. Ό,τι μετριέται δημόσια, δύσκολα πουλιέται.',
      en: 'Ask for public, anonymised statistics per court: detention, acquittal and representation rates. What is measured in public is hard to sell.',
    },
    scores: { harm: 10, power: 9, recurrence: 5, remedy: 10 },
    status: {
      el: 'Κλειστή. Καταδίκες (2011). ~4.000 αποφάσεις ακυρώθηκαν (2009). Αποζημίωση άνω των 200 εκατ. $ (2022).',
      en: 'Closed. Convictions (2011). ~4,000 adjudications vacated (2009). Damages over $200M (2022).',
    },
    sources: [
      { title: 'Wikipedia — Kids for cash scandal', url: 'https://en.wikipedia.org/wiki/Kids_for_cash_scandal' },
      { title: 'Juvenile Law Center — Luzerne “Kids for Cash” scandal', url: 'https://jlc.org/luzerne-kids-cash-scandal' },
      { title: 'Juvenile Law Center — Lessons, Part 2: children must have counsel', url: 'https://jlc.org/news/lessons-kids-cash-part-2-all-children-must-have-access-legal-representation-court' },
      { title: 'CSMonitor — Judge sentenced to 28 years (2011)', url: 'https://www.csmonitor.com/USA/Justice/2011/0811/Kids-for-cash-judge-sentenced-to-28-years-for-racketeering-scheme' },
      { title: 'Philadelphia Inquirer — The scandal, explained (2022)', url: 'https://www.inquirer.com/news/pennsylvania/pa-kids-for-cash-scandal-judges-mark-ciavarella-michael-conahan-20220818.html' },
    ],
  },
  {
    id: 'tempi-2023',
    when: '2023–',
    place: { el: 'Τέμπη, Ελλάδα', en: 'Tempi, Greece' },
    title: {
      el: '57 νεκροί, ένας τόπος που καλύφθηκε μέσα σε μέρες, και ένα Σύνταγμα που αφήνει τη Βουλή να κρίνει τους υπουργούς της',
      en: '57 dead, a site covered over within days, and a Constitution that lets Parliament decide on its own ministers',
    },
    harmed: { el: '57 άνθρωποι, πολλοί από αυτούς φοιτητές', en: '57 people, many of them students' },
    plain: {
      el: 'Στη χειρότερη σιδηροδρομική τραγωδία της Ελλάδας, ο τόπος αλλοιώθηκε πριν ολοκληρωθεί η έρευνα, και η δίωξη των υπουργών πέρασε από ψηφοφορία σε μια Βουλή όπου η κυβέρνηση έχει την πλειοψηφία.',
      en: 'In Greece’s worst rail disaster, the site was altered before the investigation was complete, and prosecuting ministers had to pass a vote in a Parliament where the government holds the majority.',
    },
    facts: [
      {
        el: '28 Φεβρουαρίου 2023: μετωπική σύγκρουση επιβατικής και εμπορικής αμαξοστοιχίας κοντά στα Τέμπη. 57 νεκροί.',
        en: '28 February 2023: head-on collision of a passenger and a freight train near Tempi. 57 dead.',
      },
      {
        el: '3–7 Μαρτίου 2023: μετά το τέλος της διάσωσης ο χώρος καθαρίζεται και καλύπτεται με χαλίκι και υλικά — κατά την εισαγγελική πρόταση, πριν ολοκληρωθούν οι έρευνες και χωρίς έγκριση των δικαστικών αρχών.',
        en: '3–7 March 2023: after rescue ends the site is cleared and covered with gravel and material — per the prosecutor’s recommendation, before investigations were complete and without approval from judicial authorities.',
      },
      {
        el: 'Άρθρο 86 του Συντάγματος: μόνο η Βουλή μπορεί να κινήσει δίωξη κατά υπουργού. Πάνω από 1,3 εκατομμύρια πολίτες υπέγραψαν για την κατάργηση της ασυλίας.',
        en: 'Article 86 of the Constitution: only Parliament can open a prosecution against a minister. More than 1.3 million citizens signed to abolish the immunity.',
      },
      {
        el: '2025: από τις μεγαλύτερες διαδηλώσεις στη σύγχρονη ιστορία της χώρας (26 Ιανουαρίου, 28 Φεβρουαρίου). Τον Ιούλιο η Βουλή (157 ψήφοι) παραπέμπει τον πρώην υπουργό Μεταφορών στο Δικαστικό Συμβούλιο — μόνο για το πλημμέλημα της παράβασης καθήκοντος.',
        en: '2025: some of the largest protests in the country’s modern history (26 January, 28 February). In July Parliament (157 votes) refers the former transport minister to the Judicial Council — for the misdemeanour of breach of duty only.',
      },
      {
        el: 'Μάρτιος 2026: ξεκινά στη Λάρισα η κύρια δίκη 36 κατηγορουμένων — υπαλλήλων και στελεχών· οι πολιτικοί κρίνονται μόνο από το Ειδικό Δικαστήριο.',
        en: 'March 2026: the main trial of 36 defendants — staff and executives — opens in Larissa; politicians can be tried only by the Special Court.',
      },
      {
        el: '29 Σεπτεμβρίου 2026: το Δικαστικό Συμβούλιο παραπέμπει τον πρώην υφυπουργό και τέσσερις ακόμη σε δίκη στο Ειδικό Δικαστήριο για παράβαση καθήκοντος (πλημμέλημα) για τις εργασίες στον τόπο. Όλοι τεκμαίρονται αθώοι.',
        en: '29 September 2026: the Judicial Council sends the former deputy minister and four others to trial before the Special Court for breach of duty (misdemeanour) over the site works. All are presumed innocent.',
      },
    ],
    outcome: {
      el: 'Η κύρια δίκη έχει ξεκινήσει. Οι πολιτικοί προϊστάμενοι αντιμετωπίζουν μόνο πλημμελήματα — και μόνο αφού το επέτρεψε η Βουλή.',
      en: 'The main trial is underway. Political superiors face only misdemeanours — and only after Parliament allowed it.',
    },
    breach: {
      el: 'Ισονομία σημαίνει ότι ο υπουργός και ο σταθμάρχης δικάζονται με τον ίδιο κώδικα από τον ίδιο δικαστή. Το άρθρο 86 αντιστρέφει την αρχή: οι συνάδελφοι του υπουργού αποφασίζουν αν θα δικαστεί και για ποιο αδίκημα. Και ένας τόπος που αλλοιώνεται πριν από την έρευνα αφαιρεί από τις οικογένειες το δικαίωμα να μάθουν.',
      en: 'Isonomia means the minister and the stationmaster are tried under the same code by the same judge. Article 86 inverts the principle: the minister’s colleagues decide whether and for what he is tried. And a site altered before the investigation takes from the families the right to know.',
    },
    patterns: ['self-shield', 'altered-evidence'],
    safeguards: ['seal', 'clock', 'reasons'],
    counterfactual: {
      el: 'Η Σφραγισμένη Αλυσίδα θα είχε απαιτήσει πλήρη τρισδιάστατη σάρωση και δειγματοληψία του τόπου πριν μπει οποιοδήποτε μηχάνημα — και θα είχε καταγράψει δημόσια ποιος έδωσε την εντολή για τις εργασίες. Το Ρολόι Παραγραφής θα έδειχνε κάθε μέρα σε ποιον θεσμό βρίσκεται ο φάκελος των υπουργών και πόσος χρόνος απομένει.',
      en: 'The Sealed Chain would have required a full 3D scan and sampling of the site before any machine moved in — and would have logged publicly who ordered the works. The Limitation Clock would have shown, every day, which institution held the ministers’ file and how much time was left.',
    },
    antilogos: {
      el: 'Η ασυλία των υπουργών δεν γεννήθηκε για να προστατεύει τη διαφθορά αλλά για να εμποδίζει την ποινικοποίηση της πολιτικής: χωρίς φίλτρο, κάθε νέα κυβέρνηση θα έσερνε τους προκατόχους της στα δικαστήρια. Και οι εργασίες στον τόπο μπορεί να έγιναν για λόγους ασφάλειας και για να αποκατασταθεί η κυκλοφορία.',
      en: 'Ministerial immunity was not born to protect corruption but to prevent the criminalisation of politics: without a filter, every new government would drag its predecessors to court. And the site works may have been done for safety and to restore traffic.',
    },
    reply: {
      el: 'Το φίλτρο μπορεί να υπάρχει χωρίς να ανήκει στην πλειοψηφία: ένα ανεξάρτητο δικαστικό συμβούλιο μπορεί να κόβει τις καταχρηστικές διώξεις χωρίς οι συνάδελφοι του υπουργού να ψηφίζουν γι’ αυτόν. Και η ασφάλεια δεν απαιτεί ποτέ να σβηστούν τα τεκμήρια — απαιτεί να καταγραφούν πρώτα. Μια σάρωση κρατά ώρες· η αλήθεια χάνεται για πάντα.',
      en: 'The filter can exist without belonging to the majority: an independent judicial council can screen out abusive prosecutions without the minister’s colleagues voting on him. And safety never requires erasing evidence — it requires recording it first. A scan takes hours; the truth is lost forever.',
    },
    lever: {
      el: 'Στήριξε την αναθεώρηση του άρθρου 86. Ζήτησε νόμο: κανένας θανατηφόρος τόπος δεν αγγίζεται πριν υπάρξει πλήρης ψηφιακή καταγραφή του.',
      en: 'Back the revision of Article 86. Ask for a law: no fatal site is touched before a full digital record of it exists.',
    },
    scores: { harm: 10, power: 9, recurrence: 7, remedy: 7 },
    status: {
      el: 'Ανοιχτή. Κύρια δίκη 36 κατηγορουμένων σε εξέλιξη (Λάρισα, από Μάρτιο 2026). Παραπομπή πρώην υφυπουργού και τεσσάρων ακόμη για πλημμέλημα (29/9/2026). Όλοι τεκμαίρονται αθώοι.',
      en: 'Open. Main trial of 36 defendants underway (Larissa, since March 2026). Former deputy minister and four others sent to trial for a misdemeanour (29 Sep 2026). All presumed innocent.',
    },
    sources: [
      { title: 'Wikipedia — Tempi train crash', url: 'https://en.wikipedia.org/wiki/Tempi_train_crash' },
      { title: 'ProtoThema — Former deputy minister referred to Special Court over crash-site works (29 Sep 2026)', url: 'https://en.protothema.gr/2026/09/29/christos-triantopoulos-referred-to-special-court-over-alteration-of-tempi-train-crash-site/' },
      { title: 'Neos Kosmos — Former minister referred to the Judicial Council (Jul 2025)', url: 'https://neoskosmos.com/en/2025/07/23/news/greece/kostas-a-karamanlis-referred-to-the-judicial-council-in-relation-to-tempi-train-tragedy/' },
      { title: 'IPJ — Parliament votes to investigate ex-transport minister (Jun 2025)', url: 'https://parliamentjournal.com/2025/06/21/greece-parliament-votes-to-investigate-ex-transport-minister-over-tempi-train-tragedy/' },
    ],
  },
  {
    id: 'pune-2024',
    when: '2024–',
    place: { el: 'Πούνε, Ινδία', en: 'Pune, India' },
    title: {
      el: 'Ένα Porsche, δύο νεκροί νέοι μηχανικοί — και ένα δείγμα αίματος που αντικαταστάθηκε στο νοσοκομείο',
      en: 'A Porsche, two young engineers dead — and a blood sample swapped at the hospital',
    },
    harmed: { el: 'Aneesh Awadhiya και Ashwini Koshta, 24 ετών', en: 'Aneesh Awadhiya and Ashwini Koshta, both 24' },
    plain: {
      el: 'Ο ανήλικος γιος ισχυρού κατασκευαστή σκότωσε δύο νέους ενώ, κατά την κατηγορία, οδηγούσε μεθυσμένος· γιατροί κατηγορούνται ότι πέταξαν το δείγμα αίματός του και έστειλαν για ανάλυση αίμα άλλου ανθρώπου.',
      en: 'The teenage son of a powerful developer killed two young people while, prosecutors say, driving drunk; doctors are accused of binning his blood sample and sending someone else’s blood for testing.',
    },
    facts: [
      {
        el: '19 Μαΐου 2024: ένα Porsche Taycan χτυπά τη μοτοσικλέτα δύο μηχανικών λογισμικού στο Kalyani Nagar. Πεθαίνουν και οι δύο. Οδηγός, κατά την αστυνομία, ένας 17χρονος.',
        en: '19 May 2024: a Porsche Taycan hits two software engineers on a motorbike in Kalyani Nagar. Both die. The driver, police say, is a 17-year-old.',
      },
      {
        el: 'Μέσα σε λίγες ώρες το Συμβούλιο Ανηλίκων τον αφήνει ελεύθερο με όρους όπως μια έκθεση 300 λέξεων για την οδική ασφάλεια. Η κατακραυγή οδηγεί σε αναθεώρηση.',
        en: 'Within hours the Juvenile Justice Board releases him on conditions including a 300-word essay on road safety. Public outrage forces a review.',
      },
      {
        el: 'Δύο γιατροί και ένας υπάλληλος του νοσοκομείου Sassoon συλλαμβάνονται: κατηγορούνται ότι πέταξαν το δείγμα του και έστειλαν για ανάλυση αίμα της μητέρας του.',
        en: 'Two doctors and a staffer at Sassoon hospital are arrested, accused of discarding his sample and sending his mother’s blood for testing.',
      },
      {
        el: 'Ο οδηγός της οικογένειας καταγγέλλει ότι πιέστηκε να αναλάβει την ευθύνη. Ο πατέρας και ο παππούς συλλαμβάνονται.',
        en: 'The family driver says he was pressured to take the blame. The father and grandfather are arrested.',
      },
    ],
    outcome: {
      el: 'Η συγκάλυψη αποκαλύφθηκε — αλλά μόνο επειδή η οργή του κοινού ανάγκασε την αστυνομία να ψάξει. Ο ανήλικος αφέθηκε ελεύθερος με απόφαση του Ανώτερου Δικαστηρίου· η υπόθεση εκκρεμεί.',
      en: 'The cover-up was exposed — but only because public anger forced police to dig. The teenager was released on a High Court order; the case is pending.',
    },
    breach: {
      el: 'Εδώ η διαφθορά δεν χρειάστηκε δικαστή· χρειάστηκε μόνο ένα δείγμα αίματος. Όταν το τεκμήριο αγοράζεται, η δίκη γίνεται θέατρο: ο δικαστής κρίνει δίκαια πάνω σε ψεύτικα δεδομένα. Και όταν ένας μισθωτός οδηγός πιέζεται να πάρει τη θέση του γιου, η ισονομία αντιστρέφεται ολοκληρωτικά.',
      en: 'Corruption here did not need a judge; it only needed a blood sample. When evidence can be bought, the trial becomes theatre: the judge rules fairly on false data. And when a paid driver is pressured to take the son’s place, isonomia is turned completely upside down.',
    },
    patterns: ['altered-evidence', 'scapegoat'],
    safeguards: ['seal', 'reconstruct', 'mirror'],
    counterfactual: {
      el: 'Με τη Σφραγισμένη Αλυσίδα, το δείγμα θα σφραγιζόταν στη λήψη με αποτύπωμα και ταυτοποίηση DNA του δότη· η αντικατάσταση θα φαινόταν στο πρώτο εργαστήριο, όχι μετά από εβδομάδες δημόσιας πίεσης. Η Ανεξάρτητη Ανασύνθεση — κάμερες, καταγραφικό του οχήματος — θα είχε δείξει ποιος ήταν στο τιμόνι πριν καν τεθεί το ερώτημα.',
      en: 'With the Sealed Chain, the sample would be sealed at collection with a fingerprint and a DNA match to the donor; the swap would show at the first lab, not after weeks of public pressure. Independent Reconstruction — cameras, the car’s event recorder — would have shown who was at the wheel before the question was even asked.',
    },
    antilogos: {
      el: 'Η διαφθορά απλώς θα μετακινηθεί νωρίτερα: αν ο γιατρός πληρώνεται, μπορεί να πάρει αίμα από άλλον πριν από τη σφράγιση. Καμία τεχνολογία δεν σώζει ένα σύστημα όπου όλοι οι κρίκοι είναι αγορασμένοι.',
      en: 'Corruption will simply move earlier: if the doctor is paid, they can draw someone else’s blood before the seal. No technology saves a system where every link is bought.',
    },
    reply: {
      el: 'Γι’ αυτό η σφράγιση περιλαμβάνει ταυτοποίηση του δότη τη στιγμή της λήψης, μπροστά σε δεύτερο, κληρωμένο μάρτυρα. Η διαφθορά δεν εξαλείφεται — ακριβαίνει. Πρέπει πια να αγοράσεις δύο ανθρώπους που δεν ξέρεις από πριν, όχι έναν που ξέρεις.',
      en: 'That is why sealing includes identifying the donor at the moment of collection, before a second, randomly assigned witness. Corruption is not eliminated — it becomes expensive. You now have to buy two people you cannot know in advance, not one you can.',
    },
    lever: {
      el: 'Ζήτησε κάθε ιατροδικαστικό δείγμα να σφραγίζεται ψηφιακά μπροστά σε δεύτερο, κληρωμένο μάρτυρα — και το μητρώο πρόσβασης να είναι ανοιχτό στις οικογένειες των θυμάτων.',
      en: 'Ask that every forensic sample be digitally sealed before a second, randomly assigned witness — with the access log open to victims’ families.',
    },
    scores: { harm: 7, power: 6, recurrence: 9, remedy: 10 },
    status: {
      el: 'Ανοιχτή. Όλοι οι κατηγορούμενοι τεκμαίρονται αθώοι μέχρι αμετάκλητης απόφασης.',
      en: 'Open. All accused are presumed innocent until final judgment.',
    },
    sources: [
      { title: 'ThePrint — Sassoon doctors who “switched blood samples” arrested (2024)', url: 'https://theprint.in/india/pune-porsche-case-2-sassoon-hospital-doctors-who-switched-blood-samples-of-minor-accused-arrested/2103293/' },
      { title: 'Outlook India — Two more arrested for swapping samples; nine held (2024)', url: 'https://www.outlookindia.com/national/pune-porsche-crash-2-more-arrested-for-swapping-blood-samples-total-9-persons-held-so-far' },
      { title: 'Tribune India — Two doctors held for changing juvenile’s blood samples (2024)', url: 'https://www.tribuneindia.com/news/india/porsche-crash-two-docs-held-for-changing-juveniles-blood-samples-625408' },
    ],
  },
  {
    id: 'moscow-2010',
    when: '2010–2011',
    place: { el: 'Μόσχα, Ρωσία', en: 'Moscow, Russia' },
    title: {
      el: 'Το αυτοκίνητο ενός αντιπροέδρου της Lukoil συγκρούστηκε μετωπικά — και κατηγορήθηκε η νεκρή οδηγός',
      en: 'A Lukoil vice-president’s car collided head-on — and the dead driver was charged',
    },
    harmed: { el: 'Olga Alexandrina, 35, και Vera Sidelnikova, 72', en: 'Olga Alexandrina, 35, and Vera Sidelnikova, 72' },
    plain: {
      el: 'Δύο γυναίκες σκοτώθηκαν σε μετωπική σύγκρουση με το αυτοκίνητο κορυφαίου στελέχους πετρελαϊκής εταιρείας· η αστυνομία έριξε την ευθύνη στη νεκρή οδηγό και αργότερα της απήγγειλε κατηγορία μετά θάνατον.',
      en: 'Two women died in a head-on collision with a top oil executive’s car; police blamed the dead driver and later charged her posthumously.',
    },
    facts: [
      {
        el: '25 Φεβρουαρίου 2010, λεωφόρος Leninsky: η Mercedes S-500 που μετέφερε τον αντιπρόεδρο της Lukoil Anatoly Barkov συγκρούεται μετωπικά με ένα Citroën C3. Σκοτώνονται και οι δύο γυναίκες.',
        en: '25 February 2010, Leninsky Prospekt: the Mercedes S-500 carrying Lukoil vice-president Anatoly Barkov collides head-on with a Citroën C3. Both women are killed.',
      },
      {
        el: 'Η αστυνομία δηλώνει αμέσως ότι έφταιγε το Citroën. Αυτόπτες μάρτυρες λένε ότι η Mercedes κινούνταν στο αντίθετο ρεύμα για να αποφύγει την κίνηση.',
        en: 'Police immediately blame the Citroën. Eyewitnesses say it was the Mercedes driving in the oncoming lane to dodge traffic.',
      },
      {
        el: 'Φθινόπωρο 2010: η υπόθεση κλείνει με υπαίτια τη νεκρή οδηγό, παρά ανεξάρτητες έρευνες που κατέληξαν αλλιώς.',
        en: 'Autumn 2010: the case is closed with the dead driver at fault, despite independent inquiries finding otherwise.',
      },
      {
        el: '2011: οι οικογένειες δικαιώνονται στο Συνταγματικό Δικαστήριο για το κλείσιμο. Τον Αύγουστο οι ανακριτές απαγγέλλουν στη νεκρή γυναίκα κατηγορία. Η έρευνα δεν αποδίδει ποτέ ευθύνη στο αυτοκίνητο του στελέχους.',
        en: '2011: the families win at the Constitutional Court over the closure. In August investigators charge the dead woman. The investigation never assigns fault to the executive’s car.',
      },
    ],
    outcome: {
      el: 'Η μόνη κατηγορούμενη ήταν νεκρή. Η υπόθεση έγινε σύμβολο του κινήματος των «μπλε κουβάδων» κατά των προνομίων των ισχυρών στους δρόμους.',
      en: 'The only accused was dead. The case became a symbol of the “blue buckets” movement against the privileges of the powerful on the road.',
    },
    breach: {
      el: 'Η πιο σκοτεινή μορφή ατιμωρησίας δεν είναι να αθωωθεί ο ισχυρός· είναι να ενοχοποιηθεί το θύμα. Εδώ ο θεσμός δεν έκλεισε απλώς τα μάτια — έγραψε μια άλλη ιστορία και την υπέγραψε με το όνομα της νεκρής.',
      en: 'The darkest form of impunity is not acquitting the powerful; it is convicting the victim. Here the institution did not merely look away — it wrote another story and signed it with the dead woman’s name.',
    },
    patterns: ['victim-blamed', 'captured-investigation'],
    safeguards: ['reconstruct', 'reasons', 'conflicts'],
    counterfactual: {
      el: 'Η Ανεξάρτητη Ανασύνθεση θα είχε συλλέξει καταγραφικά οχημάτων, κάμερες κυκλοφορίας και μαρτυρίες μέσα σε μία ώρα, θα είχε ανασυνθέσει τις λωρίδες και θα την είχε δώσει στις οικογένειες πριν κλείσει η έρευνα. Μια επίσημη αφήγηση που συγκρούεται με τη φυσική θα γινόταν αυτόματα δημόσιο ερώτημα.',
      en: 'Independent Reconstruction would have gathered vehicle recorders, traffic cameras and witness accounts within an hour, rebuilt the lanes, and handed the result to the families before the investigation could close. An official story that contradicts the physics would automatically become a public question.',
    },
    antilogos: {
      el: 'Σε ένα κράτος όπου η εξουσία ελέγχει τα δεδομένα, ένα σύστημα ανασύνθεσης απλώς θα «αποδείκνυε» την επίσημη εκδοχή με επιστημονικό κύρος — χειρότερο από το τίποτα.',
      en: 'In a state where power controls the data, a reconstruction system would simply “prove” the official version with scientific authority — worse than nothing.',
    },
    reply: {
      el: 'Γι’ αυτό τα δεδομένα και ο κώδικας της ανασύνθεσης δίνονται στις οικογένειες και σε ανεξάρτητους πραγματογνώμονες, και κάθε μοντέλο είναι ανοιχτό. Ένα ψέμα με ανοιχτά δεδομένα μπορεί να το διαψεύσει οποιοσδήποτε· ένα ψέμα σε κλειστό φάκελο, κανείς.',
      en: 'That is why the reconstruction’s data and code go to the families and to independent experts, and every model is open. Anyone can refute a lie with open data; no one can refute a lie in a closed file.',
    },
    lever: {
      el: 'Ζήτησε το δικαίωμα κάθε οικογένειας θύματος να λαμβάνει όλα τα δεδομένα της ανασύνθεσης πριν κλείσει μια έρευνα.',
      en: 'Ask for every victim’s family to have the right to all reconstruction data before an investigation can close.',
    },
    scores: { harm: 8, power: 8, recurrence: 7, remedy: 8 },
    status: {
      el: 'Κλειστή χωρίς ευθύνη για τον ισχυρό. Η νεκρή οδηγός κατηγορήθηκε μετά θάνατον (2011).',
      en: 'Closed without liability for the powerful. The dead driver was charged posthumously (2011).',
    },
    sources: [
      { title: 'The Moscow Times — LUKoil crash case closed (2010)', url: 'https://www.themoscowtimes.com/2010/09/06/lukoil-crash-case-closed-a1222' },
      { title: 'The Moscow Times — Dead driver charged (2011)', url: 'https://www.themoscowtimes.com/2011/08/14/dead-driver-charged-a8896' },
      { title: 'Transnational Institute — The class war on Leninsky Prospekt', url: 'https://www.tni.org/en/article/the-class-war-on-leninsky-prospekt' },
    ],
  },
]
