// ΙΣΟΝΟΜΙΑ — cases 6–10. Same rules as cases-a.ts: sourced facts checked on
// 2026-09-29, the office in the headline, the harmed always named, and the
// presumption of innocence stated for every open case.

import type { ToolCase } from '../types'

export const CASES_B: readonly ToolCase[] = [
  {
    id: 'kyiv-2023',
    when: '2023–',
    place: { el: 'Κίεβο, Ουκρανία', en: 'Kyiv, Ukraine' },
    title: {
      el: 'Ο πρόεδρος του Ανωτάτου Δικαστηρίου συνελήφθη για δωροδοκία 2,7 εκατομμυρίων δολαρίων',
      en: 'The President of the Supreme Court was detained over a $2.7 million bribe',
    },
    harmed: {
      el: 'Κάθε διάδικος που έφτασε στην κορυφή της δικαιοσύνης',
      en: 'Every litigant who reached the top of the justice system',
    },
    plain: {
      el: 'Ο επικεφαλής του ανώτατου δικαστηρίου μιας χώρας κατηγορείται ότι πουλούσε αποφάσεις σε ολιγάρχη· αν η κορυφή πωλείται, κάθε κατώτερη απόφαση μπορεί να αγοραστεί στην έφεση.',
      en: 'The head of a country’s highest court is accused of selling rulings to an oligarch; if the apex is for sale, every lower ruling can be bought on appeal.',
    },
    facts: [
      {
        el: '15 Μαΐου 2023: το Εθνικό Γραφείο Καταπολέμησης της Διαφθοράς (NABU) συλλαμβάνει τον πρόεδρο του Ανωτάτου Δικαστηρίου Vsevolod Kniaziev για δωροδοκία 2,7 εκατ. δολαρίων.',
        en: '15 May 2023: the National Anti-Corruption Bureau (NABU) detains Supreme Court President Vsevolod Kniaziev over a $2.7 million bribe.',
      },
      {
        el: 'Κατά τους ανακριτές, τα χρήματα αγόραζαν ευνοϊκή απόφαση για ολιγάρχη, μέσω δικηγόρου-μεσάζοντα· μπορεί να εμπλέκονται πάνω από δέκα δικαστές.',
        en: 'According to investigators, the money bought a favourable ruling for an oligarch through a lawyer acting as go-between; more than ten judges may be involved.',
      },
      {
        el: 'Την επόμενη μέρα η Ολομέλεια τον καθαιρεί από πρόεδρο, με 140 ψήφους στις 142.',
        en: 'The next day the plenum removes him as President, by 140 votes of 142.',
      },
      {
        el: 'Το Ανώτατο Συμβούλιο Δικαιοσύνης τον απομακρύνει από δικαστή· τον Δεκέμβριο 2024 το Τμήμα Ολομέλειας επικυρώνει την απόφαση.',
        en: 'The High Council of Justice dismisses him as a judge; in December 2024 the Grand Chamber upholds it.',
      },
    ],
    outcome: {
      el: 'Η ποινική υπόθεση εκκρεμεί στο Ανώτατο Αντιδιαφθοριστικό Δικαστήριο. Ο ίδιος τεκμαίρεται αθώος.',
      en: 'The criminal case is pending at the High Anti-Corruption Court. He is presumed innocent.',
    },
    breach: {
      el: 'Ο Αριστοτέλης γράφει ότι ο δικαστής θέλει να είναι «δίκαιον ἔμψυχον» — η δικαιοσύνη με ψυχή. Όταν η κορυφή της δικαιοσύνης κατηγορείται ότι πουλά, το πρόβλημα δεν είναι μία απόφαση αλλά η ίδια η πηγή του μέτρου.',
      en: 'Aristotle writes that the judge wishes to be “justice ensouled.” When the apex of justice is accused of selling, the problem is not one ruling but the very source of the measure.',
    },
    patterns: ['bribed-apex', 'bought-bench'],
    safeguards: ['pothen', 'kleros', 'anomaly'],
    counterfactual: {
      el: 'Το Πόθεν Έσχες σε πραγματικό χρόνο θα διασταύρωνε συνεχώς περιουσία, συγγενείς και μεσάζοντες με τα εισοδήματα. Το Κληρωτήριο θα έκανε αδύνατο να «δρομολογηθεί» η υπόθεση του ολιγάρχη σε συγκεκριμένη σύνθεση. Και οι αποκλίσεις ανά σύνθεση θα έδειχναν ποιες έδρες αποφασίζουν σταθερά υπέρ των ίδιων ισχυρών.',
      en: 'A live asset audit would continuously match wealth, relatives and intermediaries against income. The Kleroterion would make it impossible to route the oligarch’s case to a chosen panel. And per-panel anomalies would show which benches rule consistently for the same powerful parties.',
    },
    antilogos: {
      el: 'Η υπόθεση αποκαλύφθηκε χωρίς ΤΝ: από ανθρώπους του NABU, με κλασική έρευνα. Αυτό δείχνει ότι χρειάζονται ανεξάρτητοι θεσμοί, όχι αλγόριθμοι.',
      en: 'The case was exposed without AI: by NABU officers doing classic investigative work. That shows what is needed is independent institutions, not algorithms.',
    },
    reply: {
      el: 'Συμφωνούμε: η ΤΝ δεν αντικαθιστά το NABU — του δίνει μάτια. Μια ανεξάρτητη αρχή με λίγους ανθρώπους βλέπει όσα προλαβαίνει· με συνεχή διασταύρωση μητρώων βλέπει ό,τι φαίνεται. Η σύλληψη ήρθε αφού η έδρα είχε ήδη πουληθεί· ο στόχος είναι να έρθει πριν.',
      en: 'Agreed: AI does not replace NABU — it gives it eyes. An independent authority with a handful of people sees what it has time for; with continuous register matching it sees everything visible. The arrest came after the bench had already been sold; the goal is to arrive before.',
    },
    lever: {
      el: 'Ζήτησε δημόσια κλήρωση κάθε δικαστικής σύνθεσης και ανοιχτές, μηχαναγνώσιμες δηλώσεις πόθεν έσχες για κάθε δικαστή.',
      en: 'Ask for public, lot-based assignment of every judicial panel and open, machine-readable asset declarations for every judge.',
    },
    scores: { harm: 7, power: 10, recurrence: 7, remedy: 7 },
    status: {
      el: 'Ποινική διαδικασία σε εξέλιξη. Απομακρύνθηκε από δικαστής (επικυρώθηκε Δεκέμβριο 2024). Τεκμαίρεται αθώος.',
      en: 'Criminal proceedings ongoing. Dismissed as a judge (upheld December 2024). Presumed innocent.',
    },
    sources: [
      { title: 'Kyiv Independent — Supreme Court votes no confidence in its chief (2023)', url: 'https://kyivindependent.com/supreme-court-plenum-votes-no-confidence-in-courts-chief-accused-of-bribery/' },
      { title: 'Transparency International Ukraine — HACC case tracker', url: 'https://hacc-decided.ti-ukraine.org/en/cases/52023000000000202' },
      { title: 'Wikipedia — Vsevolod Kniaziev', url: 'https://en.wikipedia.org/wiki/Vsevolod_Kniaziev' },
    ],
  },
  {
    id: 'lakhimpur-2021',
    when: '2021–',
    place: { el: 'Λακχιμπούρ Κέρι, Ινδία', en: 'Lakhimpur Kheri, India' },
    title: {
      el: 'Οχήματα έπεσαν πάνω σε διαδηλωτές αγρότες· κατηγορούμενος ο γιος του υφυπουργού Εσωτερικών',
      en: 'Vehicles drove into protesting farmers; the accused is the son of the junior Home Affairs minister',
    },
    harmed: { el: 'Τέσσερις αγρότες και ένας δημοσιογράφος — οκτώ νεκροί συνολικά', en: 'Four farmers and a journalist — eight dead in all' },
    plain: {
      el: 'Σε υπόθεση όπου ο πατέρας του κατηγορουμένου ήταν υφυπουργός Εσωτερικών και έμεινε στη θέση του, το Ανώτατο Δικαστήριο χρειάστηκε να ορίσει εξωτερικό επόπτη της έρευνας και να ακυρώσει μια εγγύηση που δόθηκε «βιαστικά».',
      en: 'In a case where the accused’s father was the junior Home Affairs minister and stayed in office, the Supreme Court had to appoint an outside monitor of the investigation and cancel a bail granted “in a tearing hurry.”',
    },
    facts: [
      {
        el: '3 Οκτωβρίου 2021: οχήματα πέφτουν πάνω σε αγρότες που διαδήλωναν κατά των αγροτικών νόμων· στη βία που ακολουθεί σκοτώνονται οκτώ άνθρωποι.',
        en: '3 October 2021: vehicles drive into farmers protesting the farm laws; eight people die in the violence that follows.',
      },
      {
        el: 'Κατηγορούμενος ο Ashish Mishra, γιος του Ajay Mishra Teni, υφυπουργού Εσωτερικών της Ινδίας — του υπουργείου εσωτερικής ασφάλειας. Ο πατέρας παραμένει στη θέση του.',
        en: 'The accused is Ashish Mishra, son of Ajay Mishra Teni, India’s Minister of State for Home Affairs — the internal-security ministry. The father stays in office.',
      },
      {
        el: 'Νοέμβριος 2021: το Ανώτατο Δικαστήριο ορίζει πρώην δικαστή να εποπτεύει την έρευνα και ανασυνθέτει την ομάδα με αξιωματικούς εκτός της πολιτείας, για «διαφάνεια, δικαιοσύνη και απόλυτη αμεροληψία».',
        en: 'November 2021: the Supreme Court appoints a former judge to monitor the investigation and rebuilds the team with officers from outside the state, for “transparency, fairness and absolute impartiality.”',
      },
      {
        el: 'Φεβρουάριος 2022: το Ανώτερο Δικαστήριο του Αλλαχαμπάντ δίνει εγγύηση. Απρίλιος 2022: το Ανώτατο Δικαστήριο την ακυρώνει ως δοσμένη «βιαστικά». Ιανουάριος 2023: του δίνει προσωρινή εγγύηση, που παρατείνεται ξανά και ξανά.',
        en: 'February 2022: the Allahabad High Court grants bail. April 2022: the Supreme Court cancels it as granted “in a tearing hurry.” January 2023: it grants him interim bail, extended again and again.',
      },
    ],
    outcome: {
      el: 'Η δίκη σέρνεται για χρόνια ενώ ο κατηγορούμενος είναι ελεύθερος με εγγύηση. Τεκμαίρεται αθώος.',
      en: 'The trial has dragged on for years while the accused is out on bail. He is presumed innocent.',
    },
    breach: {
      el: 'Η ισονομία απαιτεί η έρευνα να μην εξαρτάται από ανθρώπους που εξαρτώνται από τον κατηγορούμενο. Όταν ο πατέρας του κατηγορουμένου κυβερνά την εσωτερική ασφάλεια της χώρας και μένει στη θέση του, κάθε καθυστέρηση και κάθε επιείκεια μοιάζει με υπακοή — ακόμη κι όταν δεν είναι.',
      en: 'Isonomia requires that the investigation not depend on people who depend on the accused. When the accused’s father runs the country’s internal security and stays in office, every delay and every leniency looks like obedience — even when it is not.',
    },
    patterns: ['captured-investigation', 'self-shield'],
    safeguards: ['conflicts', 'clock', 'reasons'],
    counterfactual: {
      el: 'Ο Χάρτης Συμφερόντων θα είχε σημάνει τη σχέση πατέρα–υπουργού την πρώτη ώρα και θα είχε στείλει αυτόματα την υπόθεση σε ανεξάρτητη ομάδα με εξωτερική εποπτεία — αυτό που τελικά έκανε με το χέρι το Ανώτατο Δικαστήριο, εβδομάδες αργότερα. Το Ρολόι θα έδειχνε δημόσια κάθε αναβολή.',
      en: 'The Conflict Map would have flagged the father–minister link in the first hour and routed the case automatically to an independent team with outside supervision — what the Supreme Court eventually did by hand, weeks later. The Clock would show every adjournment in public.',
    },
    antilogos: {
      el: 'Ο γιος δεν είναι ο πατέρας. Η αυτόματη μεταφορά υποθέσεων λόγω συγγένειας τιμωρεί ανθρώπους για τις οικογένειές τους και μπορεί να γίνει όπλο κατά πολιτικών αντιπάλων.',
      en: 'The son is not the father. Automatically moving cases over family ties punishes people for their families and can be weaponised against political opponents.',
    },
    reply: {
      el: 'Η μεταφορά δεν κατηγορεί κανέναν· προστατεύει όλους. Ο κατηγορούμενος δικάζεται το ίδιο, απλώς από ανθρώπους που δεν του χρωστούν τίποτα. Κι αν είναι αθώος, μόνο μια ανεξάρτητη έρευνα μπορεί να τον καθαρίσει πειστικά.',
      en: 'A transfer accuses no one; it protects everyone. The accused is tried the same way, only by people who owe him nothing. And if he is innocent, only an independent investigation can clear him convincingly.',
    },
    lever: {
      el: 'Ζήτησε νόμο: όταν ο κατηγορούμενος ή συγγενής του ασκεί εξουσία πάνω σε όσους ερευνούν, η υπόθεση περνά αυτόματα σε ανεξάρτητη αρχή.',
      en: 'Ask for a law: when the accused or a relative holds power over the investigators, the case passes automatically to an independent authority.',
    },
    scores: { harm: 9, power: 8, recurrence: 7, remedy: 6 },
    status: {
      el: 'Ανοιχτή. Δίκη σε εξέλιξη· ο κατηγορούμενος είναι ελεύθερος με εγγύηση. Τεκμαίρεται αθώος.',
      en: 'Open. Trial ongoing; the accused is out on bail. Presumed innocent.',
    },
    sources: [
      { title: 'SCC Online — Supreme Court cancels bail granted “in a tearing hurry” (2022)', url: 'https://www.scconline.com/blog/post/2022/04/18/lakhimpur-kheri-ashish-mishra-bail-cancelled-allahabad-high-court-supreme-court-legal-law-research-updates-news/' },
      { title: 'LiveLaw — Supreme Court appoints Justice R. K. Jain to monitor the probe (2021)', url: 'https://www.livelaw.in/top-stories/lakhimpur-kheri-case-supreme-court-appoints-justice-rk-jain-ph-hc-judge-to-monitor-investigation-185710' },
      { title: 'Scroll — Victims’ families say bail conditions violated', url: 'https://scroll.in/latest/1066952/lakhimpur-kheri-case-ashish-mishra-violating-bail-conditions-victims-families-tell-supreme-court' },
    ],
  },
  {
    id: 'seattle-2023',
    when: '2023–2026',
    place: { el: 'Σιάτλ, ΗΠΑ', en: 'Seattle, USA' },
    title: {
      el: 'Αστυνομικός με 74 μίλια την ώρα σε δρόμο των 25 σκότωσε φοιτήτρια — πρόστιμο 5.000 δολαρίων',
      en: 'A police officer doing 74 mph on a 25 mph street killed a student — a $5,000 fine',
    },
    harmed: { el: 'Jaahnavi Kandula, 23 ετών', en: 'Jaahnavi Kandula, 23' },
    plain: {
      el: 'Ένας αστυνομικός σκότωσε μια φοιτήτρια σε διάβαση πεζών τρέχοντας σχεδόν τριπλάσια από το όριο· δεν απαγγέλθηκε καμία ποινική κατηγορία, και ένας συνάδελφός του καταγράφηκε να λέει ότι η ζωή της είχε «περιορισμένη αξία».',
      en: 'A police officer killed a student in a crosswalk at nearly three times the limit; no criminal charge was brought, and a colleague was recorded saying her life had “limited value.”',
    },
    facts: [
      {
        el: '23 Ιανουαρίου 2023: ο αστυνομικός Kevin Dave, καθ’ οδόν σε κλήση για υπερβολική δόση με αναμμένους φάρους, τρέχει με 74 μίλια/ώρα σε δρόμο των 25. Χτυπά την Jaahnavi Kandula σε σημασμένη διάβαση με 63 μίλια/ώρα· εκσφενδονίζεται περίπου 42 μέτρα.',
        en: '23 January 2023: Officer Kevin Dave, heading to an overdose call with emergency lights on, is doing 74 mph on a 25 mph street. He hits Jaahnavi Kandula in a marked crosswalk at 63 mph; she is thrown about 138 feet.',
      },
      {
        el: 'Η κάμερα σώματος του αντιπροέδρου του αστυνομικού σωματείου, που αξιολόγησε τον συνάδελφό του για μέθη, τον καταγράφει να γελά, να λέει ότι εκείνη είχε «περιορισμένη αξία» και ότι η πόλη ας «γράψει μια επιταγή» 11.000 δολαρίων.',
        en: 'The bodycam of the police union’s vice-president, who evaluated his colleague for impairment, records him laughing, saying she had “limited value” and that the city should “just write a check” for $11,000.',
      },
      {
        el: 'Φεβρουάριος 2024: η εισαγγελία της κομητείας αρνείται ποινική δίωξη, κρίνοντας ότι δεν μπορεί να αποδείξει ποινική αμέλεια πέρα από εύλογη αμφιβολία.',
        en: 'February 2024: the county prosecutor declines criminal charges, finding criminal negligence could not be proved beyond reasonable doubt.',
      },
      {
        el: 'Δεκέμβριος 2024: πρόστιμο 5.000 δολαρίων για αμελή οδήγηση. Ιανουάριος 2025: απολύεται. Φεβρουάριος 2026: η πόλη συμφωνεί σε αποζημίωση 29 εκατ. δολαρίων στην οικογένεια.',
        en: 'December 2024: a $5,000 fine for negligent driving. January 2025: he is fired. February 2026: the city agrees a $29 million settlement with the family.',
      },
    ],
    outcome: {
      el: 'Καμία ποινική ευθύνη για έναν θάνατο με σχεδόν τριπλάσια ταχύτητα. Απόλυση και αστική αποζημίωση — δύο και τρία χρόνια αργότερα.',
      en: 'No criminal liability for a death at nearly triple the limit. Dismissal and a civil settlement — two and three years later.',
    },
    breach: {
      el: 'Θα είχε γλιτώσει τη δίωξη ένας πολίτης που σκοτώνει πεζό σε διάβαση με σχεδόν τριπλάσια ταχύτητα; Αυτό ακριβώς είναι το ερώτημα που κανείς δεν υποχρεώθηκε να απαντήσει δημόσια. Και η φράση «περιορισμένη αξία» είναι ό,τι αρνείται η ισονομία: ότι μια ζωή αξίζει λιγότερο από μια άλλη.',
      en: 'Would a civilian who killed a pedestrian in a crosswalk at nearly triple the limit have escaped prosecution? That is exactly the question no one was required to answer in public. And “limited value” is what isonomia denies: that one life is worth less than another.',
    },
    patterns: ['downgraded-charge', 'captured-investigation'],
    safeguards: ['mirror', 'reconstruct', 'reasons'],
    counterfactual: {
      el: 'Το Κάτοπτρο Ισονομίας θα είχε θέσει δημόσια το ερώτημα με αριθμούς: τι κατηγορίες αντιμετώπισαν πολίτες που σκότωσαν πεζούς με ανάλογη υπέρβαση ταχύτητας. Η απόφαση μη δίωξης θα έπρεπε να απαντήσει σε αυτή τη σύγκριση — και θα περνούσε από ανεξάρτητο έλεγχο, όχι μόνο από την εισαγγελία που συνεργάζεται καθημερινά με την αστυνομία.',
      en: 'The Isonomia Mirror would have posed the question publicly, with numbers: what charges civilians faced for killing pedestrians at comparable speeds. The decision not to prosecute would have had to answer that comparison — and would go to independent review, not only to the prosecutor who works with the police every day.',
    },
    antilogos: {
      el: 'Ο αστυνομικός έσπευδε σε κλήση για υπερβολική δόση με αναμμένους φάρους. Οι οδηγοί έκτακτης ανάγκης παίρνουν αποφάσεις δευτερολέπτων για να σώσουν ζωές· αν τους διώκουμε όπως τους πολίτες, θα διστάζουν εκεί όπου η ταχύτητα σώζει.',
      en: 'The officer was rushing to an overdose call with lights on. Emergency drivers make split-second choices to save lives; prosecute them like civilians and they will hesitate where speed saves.',
    },
    reply: {
      el: 'Κανείς δεν ζητά να διώκονται όπως οι πολίτες· ζητάμε να κρίνονται με ορατό μέτρο. Αν ο κανόνας λέει ότι 74 μίλια μέσα σε πόλη είναι αποδεκτός κίνδυνος για μια κλήση, ας γραφτεί δημόσια — και ας τον αποφασίσουν οι πολίτες, όχι μια σιωπηλή αρχειοθέτηση.',
      en: 'No one asks that they be prosecuted like civilians; we ask that they be judged by a visible measure. If the rule is that 74 mph through a city is acceptable risk for a call, let it be written publicly — and let citizens decide it, not a silent declination.',
    },
    lever: {
      el: 'Ζήτησε κάθε θάνατος από όχημα της αστυνομίας να κρίνεται από εισαγγελέα εκτός περιφέρειας, με δημόσια σύγκριση με όμοιες υποθέσεις πολιτών.',
      en: 'Ask that every death caused by a police vehicle be reviewed by a prosecutor from outside the jurisdiction, with a public comparison to similar civilian cases.',
    },
    scores: { harm: 7, power: 6, recurrence: 9, remedy: 8 },
    status: {
      el: 'Κλειστή ποινικά (άρνηση δίωξης, Φεβρουάριος 2024). Πρόστιμο 5.000 $, απόλυση (Ιανουάριος 2025), αποζημίωση 29 εκατ. $ (Φεβρουάριος 2026).',
      en: 'Criminally closed (charges declined, February 2024). $5,000 fine, dismissal (January 2025), $29M settlement (February 2026).',
    },
    sources: [
      { title: 'Wikipedia — Killing of Jaahnavi Kandula', url: 'https://en.wikipedia.org/wiki/Killing_of_Jaahnavi_Kandula' },
      { title: 'CNN — Officer who struck and killed graduate student fired (2025)', url: 'https://www.cnn.com/2025/01/07/us/seattle-officer-kevin-dave-fired' },
      { title: 'The Spokesman-Review — Seattle reaches $29M settlement (2026)', url: 'https://www.spokesman.com/stories/2026/feb/12/seattle-reaches-29m-settlement-with-family-of-stud/' },
      { title: 'PubliCola — Officer was driving 74 mph (2023)', url: 'https://publicola.com/2023/06/16/seattle-police-officer-was-driving-74-mph-when-he-hit-and-killed-23-year-old-pedestrian/' },
    ],
  },
  {
    id: 'quetta-2017',
    when: '2017–2020',
    place: { el: 'Κουέτα, Πακιστάν', en: 'Quetta, Pakistan' },
    title: {
      el: 'Κάμερα κατέγραψε το όχημα ενός βουλευτή να παρασύρει τροχονόμο· ο βουλευτής αθωώθηκε',
      en: 'A camera recorded a legislator’s vehicle running over a traffic officer; the legislator was acquitted',
    },
    harmed: { el: 'Ο τροχονόμος Haji Attaullah', en: 'Traffic sergeant Haji Attaullah' },
    plain: {
      el: 'Το βίντεο έδειξε το όχημα, ο ίδιος παραδέχτηκε δημόσια ότι οδηγούσε, αλλά το δικαστήριο αθώωσε επειδή κανένας από τους 20 μάρτυρες κατηγορίας δεν είπε ότι εκείνος ήταν στο τιμόνι.',
      en: 'The video showed the vehicle, he publicly admitted he was driving, yet the court acquitted because none of 20 prosecution witnesses said he was at the wheel.',
    },
    facts: [
      {
        el: 'Ιούνιος 2017: όχημα του βουλευτή της Βελουχιστάν Abdul Majeed Khan Achakzai παρασύρει και σκοτώνει τον τροχονόμο Haji Attaullah στη διασταύρωση GPO της Κουέτα. Το βίντεο της κάμερας ασφαλείας μεταδίδεται σε όλη τη χώρα.',
        en: 'June 2017: a vehicle belonging to Balochistan legislator Abdul Majeed Khan Achakzai runs over and kills traffic sergeant Haji Attaullah at Quetta’s GPO Chowk. The CCTV footage airs nationwide.',
      },
      {
        el: 'Συλλαμβάνεται τρεις μέρες μετά. Παραδέχεται δημόσια ότι οδηγούσε και προτείνει συμβιβασμό «κατά τις φυλετικές παραδόσεις». Έξι μήνες αργότερα παίρνει εγγύηση.',
        en: 'He is arrested three days later. He publicly admits driving and offers to settle “as per tribal traditions.” Six months later he is granted bail.',
      },
      {
        el: '4 Σεπτεμβρίου 2020: το δικαστήριο τον αθωώνει «λόγω έλλειψης αποδείξεων» — το βίντεο δεν έδειχνε ποιος οδηγούσε και κανένας μάρτυρας δεν τον κατονόμασε.',
        en: '4 September 2020: the court acquits him “for lack of evidence” — the footage did not show who was driving and no witness named him.',
      },
      {
        el: 'Η οικογένεια του τροχονόμου διαψεύδει ότι συμβιβάστηκε. Η αθώωση προσβάλλεται στο Ανώτερο Δικαστήριο της Βελουχιστάν.',
        en: 'The officer’s family denies any settlement. The acquittal is challenged in the Balochistan High Court.',
      },
    ],
    outcome: {
      el: 'Αθώωση. Η υπόθεση έγινε σύμβολο στο Πακιστάν για το πώς οι ισχυροί βγαίνουν αλώβητοι ακόμη κι όταν η πράξη είναι σε βίντεο.',
      en: 'Acquittal. The case became a symbol in Pakistan of how the powerful walk free even when the act is on video.',
    },
    breach: {
      el: 'Η δικαιοσύνη απαιτεί αποδείξεις — σωστά. Αλλά όταν οι μάρτυρες σωπαίνουν μπροστά σε έναν ισχυρό, η «έλλειψη αποδείξεων» δεν είναι ουδέτερη: είναι το αποτέλεσμα του φόβου. Μια δημόσια παραδοχή που δεν εξετάζεται ποτέ στο δικαστήριο είναι κενό, όχι αμφιβολία.',
      en: 'Justice demands proof — rightly. But when witnesses fall silent before the powerful, “lack of evidence” is not neutral: it is the product of fear. A public admission that is never examined in court is a gap, not a doubt.',
    },
    patterns: ['unnamed-driver'],
    safeguards: ['reasons', 'reconstruct', 'seal'],
    counterfactual: {
      el: 'Η Δημόσια Αιτιολόγηση θα αντιπαρέβαλλε την απόφαση με τον φάκελο και θα έδειχνε το κενό: μια δημόσια παραδοχή και μια σύλληψη που η απόφαση δεν εξηγεί. Η Ανεξάρτητη Ανασύνθεση — άλλες κάμερες, δεδομένα κινητών — θα είχε δείξει τον οδηγό χωρίς να χρειάζεται μάρτυρας να ρισκάρει τη ζωή του.',
      en: 'Public Reasons would check the ruling against the file and show the gap: a public admission and an arrest the ruling never explains. Independent Reconstruction — other cameras, phone data — would have shown the driver without any witness having to risk their life.',
    },
    antilogos: {
      el: 'Μια δημόσια δήλωση δεν είναι νομική ομολογία, και η δικαιοσύνη οφείλει να αθωώνει όταν η κατηγορία δεν αποδεικνύει ποιος οδηγούσε — ακόμη κι αν όλοι «ξέρουν». Η εναλλακτική είναι η καταδίκη από την κοινή γνώμη.',
      en: 'A public statement is not a legal confession, and justice must acquit when the prosecution fails to prove who was driving — even if everyone “knows.” The alternative is conviction by public opinion.',
    },
    reply: {
      el: 'Ακριβώς. Γι’ αυτό η ΤΝ δεν καταδικάζει· δείχνει γιατί η κατηγορία απέτυχε. Αν απέτυχε επειδή κανείς δεν ζήτησε τα δεδομένα του κινητού ή δεν κάλεσε τον ίδιο να επιβεβαιώσει τη δήλωσή του, αυτό είναι αποτυχία της έρευνας — και πρέπει να έχει όνομα.',
      en: 'Exactly. That is why the AI does not convict; it shows why the prosecution failed. If it failed because no one requested the phone data or called him to confirm his own statement, that is a failure of the investigation — and it must carry a name.',
    },
    lever: {
      el: 'Ζήτησε κάθε αθώωση «λόγω έλλειψης αποδείξεων» σε υπόθεση αξιωματούχου να συνοδεύεται από δημόσια λίστα των τεκμηρίων που δεν ζητήθηκαν ποτέ.',
      en: 'Ask that every acquittal “for lack of evidence” in a case against an official come with a public list of the evidence never requested.',
    },
    scores: { harm: 7, power: 8, recurrence: 7, remedy: 6 },
    status: {
      el: 'Αθώωση (Σεπτέμβριος 2020). Η αθώωση προσβλήθηκε στο Ανώτερο Δικαστήριο της Βελουχιστάν.',
      en: 'Acquitted (September 2020). The acquittal was challenged in the Balochistan High Court.',
    },
    sources: [
      { title: 'Dawn — Former MPA acquitted in Quetta traffic warden case (2020)', url: 'https://www.dawn.com/news/1577912' },
      { title: 'Dawn — Acquittal challenged in the Balochistan High Court (2020)', url: 'https://www.dawn.com/news/1581655' },
      { title: 'The Express Tribune — “Prosecution failed” to prove guilt (2020)', url: 'https://tribune.com.pk/story/2263176/prosecution-failed-to-prove-achakzai-guilty' },
      { title: 'The News — Cop’s family refutes compromise (2020)', url: 'https://www.thenews.com.pk/print/712300-hit-and-run-case-cop-s-family-refutes-compromise-with-ex-mpa-majeed-achakzai' },
    ],
  },
  {
    id: 'northamptonshire-2019',
    when: '2019–2022',
    place: { el: 'Νορθάμπτονσαϊρ, Ηνωμένο Βασίλειο', en: 'Northamptonshire, UK' },
    title: {
      el: 'Οδηγούσε στο λάθος ρεύμα, σκότωσε έναν 19χρονο — και έφυγε από τη χώρα επικαλούμενη διπλωματική ασυλία',
      en: 'She drove on the wrong side, killed a 19-year-old — and left the country claiming diplomatic immunity',
    },
    harmed: { el: 'Harry Dunn, 19 ετών', en: 'Harry Dunn, 19' },
    plain: {
      el: 'Η σύζυγος Αμερικανού αξιωματούχου σκότωσε έναν νεαρό μοτοσικλετιστή και έφυγε από τη Βρετανία με τη στήριξη της κυβέρνησής της· χρειάστηκαν τρία χρόνια αγώνα της οικογένειάς του για μια ποινή με αναστολή.',
      en: 'The wife of a US official killed a young motorcyclist and left Britain with her government’s backing; it took three years of his family’s campaigning to reach a suspended sentence.',
    },
    facts: [
      {
        el: '27 Αυγούστου 2019: η Anne Sacoolas, οδηγώντας στο αντίθετο ρεύμα έξω από τη βάση RAF Croughton, συγκρούεται μετωπικά με τη μοτοσικλέτα του Harry Dunn. Εκείνος πεθαίνει.',
        en: '27 August 2019: Anne Sacoolas, driving on the wrong side of the road outside RAF Croughton, collides head-on with Harry Dunn’s motorbike. He dies.',
      },
      {
        el: 'Λίγο αργότερα φεύγει για τις ΗΠΑ επικαλούμενη διπλωματική ασυλία, με τη στήριξη της αμερικανικής κυβέρνησης. Οι ΗΠΑ αρνούνται την έκδοση.',
        en: 'Soon after, she leaves for the US claiming diplomatic immunity, backed by the US government. The US refuses extradition.',
      },
      {
        el: 'Η οικογένεια του Harry, με πρωτοστάτη τη μητέρα του, αγωνίζεται δημόσια για τρία χρόνια.',
        en: 'Harry’s family, led by his mother, campaigns publicly for three years.',
      },
      {
        el: '8 Δεκεμβρίου 2022: αφού ομολόγησε ενοχή μέσω βιντεοσύνδεσης για θάνατο από απρόσεκτη οδήγηση, καταδικάζεται σε οκτώ μήνες με αναστολή και 12 μήνες αφαίρεση διπλώματος. Δεν εμφανίζεται αυτοπροσώπως, με τη συμβουλή της κυβέρνησής της, παρά το αίτημα του δικαστή.',
        en: '8 December 2022: having pleaded guilty by video link to causing death by careless driving, she is sentenced to eight months suspended and a 12-month driving ban. She does not attend in person, on her government’s advice, despite the judge’s request.',
      },
    ],
    outcome: {
      el: 'Ποινή με αναστολή, στην πράξη ερήμην. Η ασυλία δεν έσβησε το έγκλημα· καθυστέρησε τη δικαιοσύνη τρία χρόνια και τη μετέτρεψε σε βιντεοκλήση.',
      en: 'A suspended sentence, in practice in absentia. Immunity did not erase the crime; it delayed justice three years and turned it into a video call.',
    },
    breach: {
      el: 'Η ισονομία σταματά στα σύνορα μόνο αν το επιτρέψουμε. Η διπλωματική ασυλία φτιάχτηκε για να προστατεύει την ανεξάρτητη διπλωματία, όχι για να μεταφέρει έναν θάνατο σε άλλη δικαιοδοσία. Όταν ένα κράτος τη χρησιμοποιεί για να γλιτώσει έναν άνθρωπο από τη δίκη, υπερασπίζεται το πρόσωπο αντί για τον θεσμό.',
      en: 'Isonomia stops at the border only if we let it. Diplomatic immunity was made to protect independent diplomacy, not to move a death into another jurisdiction. When a state uses it to spare a person a trial, it defends the person instead of the institution.',
    },
    patterns: ['immunity-flight'],
    safeguards: ['waiver', 'clock', 'reasons'],
    counterfactual: {
      el: 'Η Άρση Ασυλίας εξ Ορισμού θα είχε καταγράψει, την ίδια νύχτα, την ασυλία, το αίτημα άρσης και την απάντηση της πρεσβείας — με ώρες — πριν από οποιαδήποτε αναχώρηση. Η δημόσια καταγραφή κάνει την αθόρυβη διαφυγή πολιτικά ακριβή.',
      en: 'Immunity Waiver by Default would have logged, the same night, the immunity, the waiver request and the embassy’s answer — with times — before any departure. A public record makes a quiet exit politically expensive.',
    },
    antilogos: {
      el: 'Η ασυλία είναι αμοιβαία: αν η Βρετανία την αγνοούσε, Βρετανοί διπλωμάτες σε εχθρικά κράτη θα κινδύνευαν από στημένες διώξεις. Ένας αλγόριθμος που «αυτοματοποιεί» την άρση διαβρώνει μια σύμβαση που προστατεύει ζωές.',
      en: 'Immunity is reciprocal: if Britain ignored it, British diplomats in hostile states would face staged prosecutions. An algorithm that “automates” waiver erodes a convention that protects lives.',
    },
    reply: {
      el: 'Η πρόταση δεν αγνοεί την ασυλία· αυτοματοποιεί το ερώτημα, όχι την απάντηση. Η κυβέρνηση εξακολουθεί να αποφασίζει. Απλώς δεν μπορεί πια να αποφασίσει σιωπηλά, ενώ μια μητέρα μαθαίνει από τις ειδήσεις ότι η οδηγός έφυγε.',
      en: 'The proposal does not ignore immunity; it automates the question, not the answer. The government still decides. It simply can no longer decide silently while a mother learns from the news that the driver has left.',
    },
    lever: {
      el: 'Ζήτησε κάθε αίτημα άρσης ασυλίας σε θανατηφόρα υπόθεση να καταχωρείται δημόσια μέσα σε 24 ώρες, μαζί με την απάντηση.',
      en: 'Ask that every immunity-waiver request in a fatal case be publicly logged within 24 hours, along with the answer.',
    },
    scores: { harm: 7, power: 7, recurrence: 4, remedy: 4 },
    status: {
      el: 'Κλειστή. Οκτώ μήνες φυλάκιση με αναστολή (8 Δεκεμβρίου 2022).',
      en: 'Closed. Eight months suspended (8 December 2022).',
    },
    sources: [
      { title: 'Wikipedia — Death of Harry Dunn', url: 'https://en.wikipedia.org/wiki/Death_of_Harry_Dunn' },
      { title: 'CNN — Suspended sentence for causing Harry Dunn’s death (2022)', url: 'https://www.cnn.com/2022/12/08/uk/anne-sacoolas-sentencing-harry-dunn-death-intl-gbr/index.html' },
    ],
  },
]
