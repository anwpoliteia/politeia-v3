// ΙΠΠΟΔΑΜΟΣ — cases 6–10. Same rules as cases-a.ts: sourced facts checked on
// 2026-09-30; where sources disagree (death tolls, sentences) the range is
// given rather than a guess.

import type { ToolCase } from '../types'

export const CASES_B: readonly ToolCase[] = [
  {
    id: 'turkey-earthquakes-2023',
    when: '2018–2026',
    place: { el: 'Νότια Τουρκία', en: 'Southern Türkiye' },
    title: {
      el: 'Το υπουργείο Περιβάλλοντος και οι δημοτικές υπηρεσίες ελέγχου: αμνηστία επί πληρωμή νομιμοποίησε εκατομμύρια ακατάλληλα ακίνητα χωρίς έλεγχο — πριν από έναν σεισμό με 53.000 νεκρούς',
      en: 'The environment ministry and municipal inspectors: a paid amnesty legalised millions of units without inspection — before an earthquake that killed 53,000',
    },
    harmed: { el: '53.725 νεκροί και πάνω από 107.000 τραυματίες στην Τουρκία', en: '53,725 dead and over 107,000 injured in Türkiye' },
    plain: {
      el: 'Το 2018 η Τουρκία επέτρεψε στους ιδιοκτήτες αυθαιρέτων να τα νομιμοποιήσουν πληρώνοντας, χωρίς ουσιαστικό έλεγχο. Πέντε χρόνια αργότερα δύο σεισμοί ισοπέδωσαν έντεκα επαρχίες. Εκατοντάδες εργολάβοι διώχθηκαν — αλλά για να ερευνηθεί ένας δημόσιος υπάλληλος χρειαζόταν άδεια της κυβέρνησης.',
      en: 'In 2018 Türkiye let owners of illegal buildings legalise them by paying, without real inspection. Five years later two earthquakes flattened eleven provinces. Hundreds of contractors were prosecuted — but investigating a public official needed the government’s permission.',
    },
    facts: [
      {
        el: '2018–2019: η αμνηστία επιτρέπει σε ιδιοκτήτες αυθαιρέτων να «πληρώσουν ένα τέλος και να νομιμοποιηθούν χωρίς εκτεταμένο έλεγχο». Ο υπουργός Περιβάλλοντος δηλώνει στη Βουλή ότι νομιμοποιήθηκαν πάνω από 7 εκατομμύρια μονάδες και εισπράχθηκαν 23 δισ. λίρες (περίπου 4 δισ. δολάρια).',
        en: '2018–2019: the amnesty lets owners of unauthorised buildings “pay a fee and have it legalized without extensive inspection.” The environment minister tells parliament over 7 million units were legalised and TRY 23 billion (about $4 billion) collected.',
      },
      {
        el: '6 Φεβρουαρίου 2023: σεισμοί 7,8 και 7,5 Ρίχτερ την ίδια μέρα· 53.725 νεκροί και πάνω από 107.000 τραυματίες.',
        en: '6 February 2023: earthquakes of magnitude 7.8 and 7.5 on the same day; 53,725 dead and over 107,000 injured.',
      },
      {
        el: 'Ως τις 4 Μαρτίου 2023: πάνω από 230 συλλήψεις, κυρίως εργολάβων.',
        en: 'By 4 March 2023: more than 230 arrests, mostly contractors.',
      },
      {
        el: 'Δεκέμβριος 2024: οι εισαγγελείς χρειάζονται άδεια της κυβέρνησης για να ερευνήσουν δημόσιους υπαλλήλους· οι ενώσεις οικογενειών μέτρησαν άδεια για μόλις 39 αξιωματούχους, που αφορούν 7 κτίρια όπου πέθαναν 395 άνθρωποι.',
        en: 'December 2024: prosecutors need government permission to investigate public officials; families’ groups counted permission for only 39 officials, linked to 7 buildings where 395 people died.',
      },
      {
        el: 'Φεβρουάριος 2025: 2.031 έρευνες, 1.397 κατηγορητήρια, 75 δίκες ολοκληρωμένες με 130 καταδικασμένους. Ένας εργολάβος στα Άδανα καταδικάστηκε σε 62 ισόβια και 865 χρόνια για μια 14όροφη πολυκατοικία όπου πέθαναν 92.',
        en: 'February 2025: 2,031 investigations, 1,397 indictments, 75 trials concluded with 130 sentenced. An Adana contractor received 62 life sentences plus 865 years for a 14-storey block where 92 died.',
      },
    ],
    outcome: {
      el: 'Καταδίκες εργολάβων· ελάχιστοι αξιωματούχοι δικάστηκαν.',
      en: 'Contractor convictions; few officials tried.',
    },
    breach: {
      el: 'Μια χώρα σε σεισμική ζώνη έχει έναν μόνο λόγο να ελέγχει τα κτίρια: να μην πέσουν πάνω σε όσους κοιμούνται μέσα. Όταν ο έλεγχος αντικαθίσταται από ένα τέλος, το κράτος εισπράττει χρήματα για έναν κίνδυνο που δεν μέτρησε ποτέ — και όταν χρειάζεται άδεια για να ερευνηθεί όποιος υπέγραψε, η ευθύνη σταματά στον εργολάβο.',
      en: 'A country in an earthquake zone has one reason to inspect buildings: so they do not fall on those sleeping inside. When inspection is replaced by a fee, the state collects money for a risk it never measured — and when permission is needed to investigate whoever signed, responsibility stops at the contractor.',
    },
    patterns: ['amnesty', 'officials-shielded'],
    safeguards: ['amnesty-audit', 'suspension', 'random-inspection'],
    counterfactual: {
      el: 'Το Καμία Τακτοποίηση Χωρίς Έλεγχο θα είχε ζητήσει στατικό έλεγχο πριν νομιμοποιηθεί οποιοδήποτε μεγάλο κτίριο σε σεισμική ζώνη — ακόμη και ένα δείγμα θα έδειχνε τον κίνδυνο. Και ο κανόνας ότι δεν χρειάζεται άδεια για να ερευνηθεί ένας υπάλληλος θα έφερνε στο δικαστήριο και όσους ενέκριναν, όχι μόνο όσους έχτισαν.',
      en: 'No Amnesty Without Inspection would have required a structural check before any large building in an earthquake zone was legalised — even a sample would have shown the danger. And the rule that no permission is needed to investigate an official would have brought to court those who approved, not only those who built.',
    },
    antilogos: {
      el: 'Οι σεισμοί ήταν εξαιρετικά ισχυροί — δύο άνω των 7,5 Ρίχτερ την ίδια μέρα. Οι καταδίκες που βρέθηκαν αφορούν κακό σχεδιασμό και κατασκευή, και κανένα δικαστήριο δεν έχει συνδέσει συγκεκριμένους θανάτους με την ίδια την αμνηστία. Ο μετρημένος αριθμός των 39 αξιωματούχων είναι ελλιπής.',
      en: 'The earthquakes were exceptionally strong — two above magnitude 7.5 in one day. The convictions found concern bad design and construction, and no court has tied specific deaths to the amnesty itself. The count of 39 officials is incomplete.',
    },
    reply: {
      el: 'Κανένας κανονισμός δεν σταματά έναν σεισμό· σταματά όμως ένα κτίριο από το να γίνει παγίδα. Το ότι κανένα δικαστήριο δεν έχει εξετάσει την αμνηστία δεν αποδεικνύει ότι ήταν αθώα — δείχνει ότι κανείς δεν μπορούσε να τη φέρει στο δικαστήριο χωρίς την άδεια όσων την ψήφισαν.',
      en: 'No regulation stops an earthquake; it can stop a building from becoming a trap. That no court has examined the amnesty does not prove it harmless — it shows no one could bring it to court without the permission of those who passed it.',
    },
    lever: {
      el: 'Ζήτησε καμία τακτοποίηση σε σεισμογενή περιοχή να μην ολοκληρώνεται χωρίς υπογεγραμμένο στατικό έλεγχο.',
      en: 'Ask that no legalisation in a seismic area be completed without a signed structural check.',
    },
    scores: { harm: 10, power: 10, recurrence: 8, remedy: 7 },
    status: {
      el: 'Πάνω από 1.200 υποθέσεις ήταν ανοιχτές τον Φεβρουάριο 2025· όσοι δεν έχουν καταδικαστεί τεκμαίρονται αθώοι.',
      en: 'Over 1,200 cases were still open in February 2025; those not convicted are presumed innocent.',
    },
    sources: [
      { title: 'NBC News — Anger at the amnesty after the earthquakes (2023)', url: 'https://www.nbcnews.com/news/world/turkey-earthquakes-death-toll-anger-erdogan-ak-party-amnesty-rcna71400' },
      { title: 'Human Rights Watch — No transparency in earthquake deaths inquiry (2024)', url: 'https://www.hrw.org/news/2024/12/13/turkiye-no-transparency-earthquake-deaths-inquiry' },
      { title: 'Stockholm Center for Freedom — Justice remains elusive on 2nd anniversary (2025)', url: 'https://stockholmcf.org/justice-remains-elusive-for-victims-families-on-2nd-anniversary-of-turkey-earthquakes/' },
    ],
  },
  {
    id: 'rana-plaza-2013',
    when: '2013–2026',
    place: { el: 'Σαβάρ, Μπανγκλαντές', en: 'Savar, Bangladesh' },
    title: {
      el: 'Η δημοτική αρχή της Σαβάρ: ένα κτίριο με παράνομους ορόφους στέγασε εργοστάσια ενδυμάτων — ρωγμές φάνηκαν την προηγούμενη μέρα, και 1.136 πέθαναν',
      en: 'The Savar municipal authority: a building with illegal floors housed garment factories — cracks showed the day before, and 1,136 died',
    },
    harmed: {
      el: 'Περίπου 1.136 νεκροί (οι μετρήσεις κυμαίνονται από 1.130 ως 1.138), κυρίως εργάτριες και εργάτες ενδυμάτων· 2.438 διασώθηκαν',
      en: 'About 1,136 dead (counts range from 1,130 to 1,138), mostly garment workers; 2,438 rescued alive',
    },
    plain: {
      el: 'Το Rana Plaza είχε ορόφους που χτίστηκαν παράνομα και στέγαζε εργοστάσια. Την προηγούμενη μέρα εμφανίστηκαν ρωγμές· το πρωί, λίγο αφού άναψαν οι γεννήτριες, κατέρρευσε. Δεκατρία χρόνια μετά, η μόνη καταδίκη αφορά την περιουσία του ιδιοκτήτη — όχι τους θανάτους.',
      en: 'Rana Plaza had illegally built floors and housed factories. Cracks appeared the day before; in the morning, shortly after the generators came on, it collapsed. Thirteen years later, the only conviction concerns the owner’s wealth — not the deaths.',
    },
    facts: [
      {
        el: 'Το κτίριο είχε ορόφους που προστέθηκαν παράνομα πέρα από την άδειά του, και στέγαζε εργοστάσια ενδυμάτων.',
        en: 'The building had floors added illegally beyond its permit, and housed garment factories.',
      },
      {
        el: '23 Απριλίου 2013: εμφανίζονται ορατές ρωγμές. Την επόμενη μέρα, γύρω στις 9:45 το πρωί, λίγο αφού άναψαν οι γεννήτριες, το κτίριο καταρρέει.',
        en: '23 April 2013: visible cracks appear. The next day, at about 9:45 a.m., shortly after the generators are switched on, the building collapses.',
      },
      {
        el: '29 Αυγούστου 2017: ειδικό δικαστήριο της Ντάκα καταδικάζει τον ιδιοκτήτη σε 3 χρόνια για συσσώρευση περιουσίας από αδήλωτες πηγές, σε υπόθεση της Επιτροπής κατά της Διαφθοράς.',
        en: '29 August 2017: a Dhaka special court jails the owner for 3 years for amassing wealth from undisclosed sources, in an Anti-Corruption Commission case.',
      },
      {
        el: 'Ιούλιος 2016 → Μάιος 2026: κατηγορίες για ανθρωποκτονία κατά 41 κατηγορουμένων· ως τον Μάιο 2026 έχουν εξεταστεί 150 από 594 μάρτυρες, 25 κατηγορούμενοι είναι ελεύθεροι με εγγύηση και 13 φυγόδικοι.',
        en: 'July 2016 → May 2026: murder charges against 41 accused; by May 2026, 150 of 594 witnesses have been examined, 25 accused are on bail and 13 have absconded.',
      },
      {
        el: '12 Οκτωβρίου 2025: η υπόθεση μεταφέρεται σε δικαστήριο ταχείας διαδικασίας.',
        en: '12 October 2025: the case is moved to a fast-track court.',
      },
    ],
    outcome: {
      el: 'Μία καταδίκη για αδήλωτη περιουσία (2017)· η δίκη για τους θανάτους συνεχίζεται 13 χρόνια μετά.',
      en: 'One conviction for undeclared wealth (2017); the trial over the deaths continues 13 years on.',
    },
    breach: {
      el: 'Μια άδεια δόμησης λέει πόσους ορόφους αντέχει ένα κτίριο και τι μπορεί να γίνει μέσα. Όταν προστίθενται όροφοι που κανείς δεν ελέγχει, όταν εργοστάσια με βαριές γεννήτριες μπαίνουν εκεί που κανείς δεν τα υπολόγισε, και όταν οι ρωγμές της προηγούμενης μέρας δεν αδειάζουν το κτίριο, ο νόμος δεν απέτυχε μία φορά· απέτυχε σε κάθε όροφο.',
      en: 'A building permit says how many floors a building can bear and what may happen inside. When floors are added that no one inspects, when factories with heavy generators move in where no one accounted for them, and when the previous day’s cracks do not empty the building, the law did not fail once; it failed on every floor.',
    },
    patterns: ['extra-floors', 'ignored-warning', 'bribed-permit'],
    safeguards: ['sky-check', 'warning-clock', 'signed-permit'],
    counterfactual: {
      el: 'Το Μάτι από Ψηλά θα είχε δει τους ορόφους να προστίθενται πέρα από την άδεια — ένα κτίριο που ψηλώνει είναι το πιο εύκολο πράγμα να φανεί από ψηλά. Το Ρολόι της Προειδοποίησης θα είχε κάνει τις ρωγμές της 23ης Απριλίου υποχρεωτική εκκένωση ως την αυτοψία. Και η Υπογραφή στον Χάρτη θα έδειχνε ποιος ενέκρινε τι.',
      en: 'The Eye from Above would have seen floors being added beyond the permit — a building growing taller is the easiest thing to see from above. The Warning Clock would have turned the cracks of 23 April into a mandatory evacuation until inspection. And Signed on the Map would have shown who approved what.',
    },
    antilogos: {
      el: 'Η μόνη καταδίκη ως τώρα αφορά την προσωπική περιουσία, όχι τους θανάτους ή τις άδειες· οι περισσότεροι κατηγορούμενοι είναι ελεύθεροι με εγγύηση και τεκμαίρονται αθώοι. Οι αριθμοί των νεκρών διαφέρουν ανά πηγή.',
      en: 'The only conviction so far concerns personal wealth, not the deaths or the permits; most accused are free on bail and presumed innocent. Death tolls differ by source.',
    },
    reply: {
      el: 'Γι’ αυτό η πρόταση δεν περιμένει τη δίκη. Δεκατρία χρόνια δικαστηρίων δεν φέρνουν πίσω κανέναν· ένας δορυφόρος που βλέπει τον ένατο όροφο να χτίζεται, και ένας κανόνας που αδειάζει το κτίριο με την πρώτη ρωγμή, θα είχαν φέρει όλους πίσω στο σπίτι τους εκείνο το βράδυ.',
      en: 'That is why the proposal does not wait for the trial. Thirteen years of courts bring no one back; a satellite that sees the ninth floor going up, and a rule that empties the building at the first crack, would have brought everyone home that evening.',
    },
    lever: {
      el: 'Ζήτησε κάθε κτίριο με εργαζόμενους να εκκενώνεται αυτόματα όταν αναφέρονται δομικές ρωγμές, ως την αυτοψία μηχανικού.',
      en: 'Ask that any building with workers inside be evacuated automatically when structural cracks are reported, until an engineer inspects.',
    },
    scores: { harm: 10, power: 6, recurrence: 8, remedy: 8 },
    status: {
      el: 'Η δίκη για τους θανάτους συνεχίζεται· πέρα από την καταδίκη του 2017, όλοι οι κατηγορούμενοι τεκμαίρονται αθώοι.',
      en: 'The trial over the deaths continues; beyond the 2017 conviction, all accused are presumed innocent.',
    },
    sources: [
      { title: 'The Business Standard — Prosecution races to fast-track Rana Plaza trial (2026)', url: 'https://www.tbsnews.net/bangladesh/prosecution-races-fast-track-trial-rana-plaza-case-1431106' },
      { title: 'Al Jazeera — Rana Plaza owner jailed for three years over corruption (2017)', url: 'https://www.aljazeera.com/news/2017/8/29/rana-plaza-owner-jailed-for-three-years-over-corruption' },
    ],
  },
  {
    id: 'marbella-malaya-2006',
    when: '1990s–2015',
    place: { el: 'Μαρμπέγια, Ισπανία', en: 'Marbella, Spain' },
    title: {
      el: 'Ο πολεοδομικός σύμβουλος και δήμαρχοι της Μαρμπέγια: άδειες για εργολάβους με αντάλλαγμα — η μεγαλύτερη υπόθεση πολεοδομικής διαφθοράς της Ισπανίας',
      en: 'Marbella’s planning adviser and mayors: licences for developers in exchange for bribes — Spain’s largest urban-planning corruption case',
    },
    harmed: {
      el: 'Τα δημόσια οικονομικά και οι κάτοικοι της Μαρμπέγια — και οι αγοραστές περίπου 16.500 κατοικιών που έμειναν σε νομικό κενό',
      en: 'Marbella’s public finances and residents — and the buyers of some 16,500 homes left in legal limbo',
    },
    plain: {
      el: 'Για χρόνια, στο δημαρχείο της Μαρμπέγια οι άδειες για τους εργολάβους είχαν τιμή. Η κυβέρνηση διέλυσε ολόκληρο το δημοτικό συμβούλιο — πρώτη φορά στην ισπανική δημοκρατία — και τα δικαστήρια καταδίκασαν δεκάδες. Η «λύση» όμως, ένα σχέδιο πόλης που νομιμοποιούσε τα αυθαίρετα, ακυρώθηκε κι αυτή.',
      en: 'For years, at Marbella town hall, licences for developers had a price. The government dissolved the entire council — the first time in Spanish democracy — and the courts convicted dozens. But the “fix,” a town plan legalising the illegal homes, was struck down too.',
    },
    facts: [
      {
        el: '2006: η κυβέρνηση θέτει ολόκληρο τον δήμο υπό διοίκηση — πρώτη φορά στην ισπανική δημοκρατία — αφού ξεσπά το σκάνδαλο.',
        en: '2006: the government places the whole municipality under administration — the first time in Spanish democracy — after the scandal breaks.',
      },
      {
        el: '4 Οκτωβρίου 2013: το δικαστήριο της Μάλαγα διαπιστώνει «ένα σύστημα γενικευμένης πολιτικής και οικονομικής διαφθοράς»· ο πολεοδομικός σύμβουλος καταδικάζεται σε 11 χρόνια και πρόστιμο 240 εκατ. ευρώ, σε απόφαση άνω των 5.000 σελίδων.',
        en: '4 October 2013: the Málaga court finds “a scheme of generalized political and economic corruption”; the planning adviser is sentenced to 11 years and a €240 million fine, in a judgment of over 5,000 pages.',
      },
      {
        el: 'Οκτώβριος 2013: καταδικάζονται 53 από περίπου 95 κατηγορουμένους, ανάμεσά τους πρώην δήμαρχοι· 42 αθωώνονται.',
        en: 'October 2013: 53 of about 95 defendants are convicted, among them former mayors; 42 are acquitted.',
      },
      {
        el: 'Ιούλιος 2015: το Ανώτατο Δικαστήριο επικυρώνει τις περισσότερες καταδίκες και αυξάνει την ποινή του πολεοδομικού συμβούλου από 11 σε 17 χρόνια.',
        en: 'July 2015: the Supreme Court confirms most convictions and raises the planning adviser’s sentence from 11 to 17 years.',
      },
      {
        el: '4 Νοεμβρίου 2015: το Ανώτατο Δικαστήριο ακυρώνει το σχέδιο πόλης του 2010, που νομιμοποιούσε κατοικίες χτισμένες παράνομα από το 1986, αφήνοντας τουλάχιστον 16.500 σπίτια σε νομικό κενό.',
        en: '4 November 2015: the Supreme Court annuls the 2010 town plan, which had legalised homes built illegally since 1986, leaving at least 16,500 homes in legal limbo.',
      },
    ],
    outcome: {
      el: 'Τελεσίδικες καταδίκες (2015)· η νομιμοποίηση των αυθαιρέτων ακυρώθηκε.',
      en: 'Final convictions (2015); the legalisation of the illegal homes was annulled.',
    },
    breach: {
      el: 'Το σχέδιο πόλης είναι η συμφωνία μιας κοινότητας για το πώς θα μεγαλώσει. Όταν κάθε άδεια έχει τιμή, η πόλη δεν σχεδιάζεται από τους κατοίκους της αλλά από όποιον πληρώνει — και όταν η «λύση» είναι να νομιμοποιηθούν όλα, το κόστος το σηκώνουν οι καλόπιστοι αγοραστές, όχι όσοι πούλησαν τις υπογραφές.',
      en: 'A town plan is a community’s agreement on how it will grow. When every licence has a price, the town is planned not by its residents but by whoever pays — and when the “fix” is to legalise everything, the cost falls on good-faith buyers, not on those who sold the signatures.',
    },
    patterns: ['bribed-permit', 'amnesty', 'court-ignored'],
    safeguards: ['lifestyle-check', 'court-enforce', 'signed-permit'],
    counterfactual: {
      el: 'Οι Εὔθυναι θα είχαν δει τον πλουτισμό του πολεοδομικού συμβούλου πολύ πριν από το πρόστιμο των 240 εκατ. Η Υπογραφή στον Χάρτη θα έδειχνε ποιοι εργολάβοι έπαιρναν πάντα τις άδειες, και η Απόφαση Εκτελείται θα είχε σημάνει τις άδειες που ακύρωναν τα δικαστήρια πριν χτιστούν χιλιάδες σπίτια πάνω τους.',
      en: 'The Euthynai would have seen the planning adviser’s enrichment long before the €240 million fine. Signed on the Map would have shown which developers always got the licences, and The Ruling Is Enforced would have flagged the licences courts annulled before thousands of homes were built on them.',
    },
    antilogos: {
      el: 'Το σύστημα λειτούργησε: το συμβούλιο διαλύθηκε, δεκάδες καταδικάστηκαν, το Ανώτατο αύξησε ποινές. Και 42 κατηγορούμενοι αθωώθηκαν — η δικαιοσύνη ξεχώρισε ενόχους από αθώους χωρίς καμία ΤΝ.',
      en: 'The system worked: the council was dissolved, dozens were convicted, the Supreme Court raised sentences. And 42 defendants were acquitted — justice separated guilty from innocent without any AI.',
    },
    reply: {
      el: 'Λειτούργησε — μετά από χρόνια, και μετά από χιλιάδες σπίτια που τώρα δεν μπορούν ούτε να νομιμοποιηθούν ούτε να γκρεμιστούν. Η πρόταση δεν αντικαθιστά τα δικαστήρια· φέρνει την ίδια γνώση νωρίτερα, όταν ένα σημάδι σε έναν χάρτη κοστίζει λιγότερο από 16.500 οικογένειες σε νομικό κενό.',
      en: 'It worked — after years, and after thousands of homes that now can be neither legalised nor demolished. The proposal does not replace the courts; it brings the same knowledge earlier, when a mark on a map costs less than 16,500 families in legal limbo.',
    },
    lever: {
      el: 'Ζήτησε από τον δήμο σου να δημοσιεύει ποιοι εργολάβοι πήραν άδειες και πόσες, ανά χρόνο.',
      en: 'Ask your municipality to publish which developers received permits and how many, each year.',
    },
    scores: { harm: 6, power: 8, recurrence: 7, remedy: 8 },
    status: {
      el: 'Κλειστή· οι καταδίκες είναι τελεσίδικες και οι αθωώσεις ισχύουν.',
      en: 'Closed; the convictions are final and the acquittals stand.',
    },
    sources: [
      { title: 'OCCRP — Spain: 53 convicted in massive corruption trial (2013)', url: 'https://www.occrp.org/en/news/spain-53-convicted-in-massive-corruption-trial' },
      { title: 'Consejo General del Poder Judicial — Málaga court judgment in the Malaya case (2013)', url: 'https://www.poderjudicial.es/cgpj/en/Judiciary/Novelties/La-Audiencia-Provincial-de-Malaga-condena-a-Roca-a-11-anos-de-prision-y-multa-de-240-millones-de-euros--Sentencia-del--Caso-Malaya-' },
      { title: 'Consejo General del Poder Judicial — Supreme Court confirms most Malaya sentences (2015)', url: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/Noticias-Judiciales/El-TS-confirma-la-mayoria-de-las-penas-del-caso-Malaya-y-eleva-de-11-a-17-anos-la-condena-a-Juan-Antonio-Roca' },
      { title: 'The Olive Press — Marbella town plan scrapped (2015)', url: 'https://theolivepress.es/spain-news/2015/11/06/marbellas-town-plans-scrapped-questioning-legality-of-16500-homes' },
    ],
  },
  {
    id: 'rebsamen-2017',
    when: '2017–2022',
    place: { el: 'Πόλη του Μεξικού', en: 'Mexico City' },
    title: {
      el: 'Οι υπογράφοντες μηχανικοί και οι αρχές του δήμου: ένα παράνομο σπίτι στην οροφή ενός δημοτικού σχολείου — 19 παιδιά νεκρά',
      en: 'The signing engineers and the borough authorities: an illegal home on a primary school’s roof — 19 children dead',
    },
    harmed: { el: '26 νεκροί — 19 παιδιά και 7 ενήλικες του σχολείου Enrique Rébsamen', en: '26 dead — 19 children and 7 adults at the Enrique Rébsamen school' },
    plain: {
      el: 'Στην οροφή ενός ιδιωτικού σχολείου χτίστηκε παράνομα μια κατοικία που πρόσθεσε πάνω από 230 τόνους στο κτίριο. Στον σεισμό του 2017 το σχολείο κατέρρευσε. Καταδικάστηκαν η ιδιοκτήτρια και ένας επιβλέπων μηχανικός — κανένας δημόσιος υπάλληλος.',
      en: 'An illegal home was built on the roof of a private school, adding more than 230 tonnes to the building. In the 2017 earthquake the school collapsed. The owner and one supervising engineer were convicted — no public official.',
    },
    facts: [
      {
        el: 'Πριν από το 2017: στον τέταρτο όροφο του σχολείου χτίζεται χωρίς άδεια κατοικία, που προσθέτει «πάνω από 230 τόνους» στη δομή.',
        en: 'Before 2017: an unauthorised dwelling is built on the school’s fourth floor, adding “more than 230 tons” to the structure.',
      },
      {
        el: '19 Σεπτεμβρίου 2017: στον σεισμό το σχολείο καταρρέει· πεθαίνουν 19 παιδιά και 7 ενήλικες.',
        en: '19 September 2017: in the earthquake the school collapses; 19 children and 7 adults die.',
      },
      {
        el: '14 Οκτωβρίου 2020: η ιδιοκτήτρια και διευθύντρια καταδικάζεται σε 31 χρόνια για ανθρωποκτονία από αμέλεια 26 ανθρώπων.',
        en: '14 October 2020: the owner and director is sentenced to 31 years for the culpable homicide of 26 people.',
      },
      {
        el: '14 Ιουλίου 2021: ο υπεύθυνος μηχανικός έργου που υπέγραψε την κατασκευή καταδικάζεται σε 208 χρόνια· η ποινή μειώθηκε αργότερα στο εφετείο (οι αναφερόμενοι αριθμοί διαφέρουν).',
        en: '14 July 2021: the licensed works director who signed off the construction is sentenced to 208 years; the sentence was later reduced on appeal (reported figures differ).',
      },
      {
        el: 'Σεπτέμβριος 2022: ο αρχιτέκτονας που ενέκρινε την κατασκευή είναι ακόμη υπό δίκη και ένας δεύτερος υπεύθυνος μηχανικός φυγοδικεί· οι οικογένειες σημειώνουν ότι κανένας υπάλληλος της πολιτικής προστασίας, των έργων ή της παιδείας δεν έχει διωχθεί.',
        en: 'September 2022: the architect who authorised the construction is still in proceedings and a second works director is a fugitive; families note that no civil-protection, works or education official has been prosecuted.',
      },
    ],
    outcome: {
      el: 'Καταδίκες της ιδιοκτήτριας και ενός μηχανικού· κανένας δημόσιος υπάλληλος.',
      en: 'Convictions of the owner and one engineer; no public official.',
    },
    breach: {
      el: 'Ένα σχολείο είναι το κτίριο που εμπιστευόμαστε περισσότερο — αφήνουμε μέσα τα παιδιά μας. Η υπογραφή του μηχανικού και η επιθεώρηση του δήμου υπάρχουν για να μην προστεθεί ποτέ βάρος που το κτίριο δεν αντέχει. Όταν ένα ολόκληρο σπίτι χτίζεται στην οροφή και κανείς δεν το σταματά, η υπογραφή ήταν απλώς μελάνι.',
      en: 'A school is the building we trust most — we leave our children inside it. The engineer’s signature and the borough’s inspection exist so that weight the building cannot bear is never added. When a whole home is built on the roof and no one stops it, the signature was only ink.',
    },
    patterns: ['extra-floors', 'rubber-stamp'],
    safeguards: ['random-inspection', 'sky-check'],
    counterfactual: {
      el: 'Η Αιφνίδια Αυτοψία δίνει προτεραιότητα στα σχολεία: ένας επιθεωρητής από άλλη περιοχή θα είχε δει την κατοικία στην οροφή — και θα είχε καταγράψει ποιος υπέγραψε ότι όλα ήταν εντάξει. Το Μάτι από Ψηλά θα είχε δει ένα σχολείο να αποκτά έναν όροφο που δεν υπήρχε στην άδειά του.',
      en: 'The Unannounced Inspection gives priority to schools: an inspector from another area would have seen the home on the roof — and recorded who signed that all was well. The Eye from Above would have seen a school gain a floor that was not in its permit.',
    },
    antilogos: {
      el: 'Η ιδιοκτήτρια υποστήριξε ότι στηρίχτηκε σε έγγραφα που υπέγραψαν πιστοποιημένοι επαγγελματίες και οι αρχές — δηλαδή ότι το σύστημα της είπε πως όλα ήταν νόμιμα. Και τα δικαστήρια όντως τιμώρησαν αυστηρά όσους καταδίκασαν.',
      en: 'The owner argued she relied on documents signed by licensed professionals and the authorities — in other words, that the system told her everything was lawful. And the courts did punish severely those they convicted.',
    },
    reply: {
      el: 'Ακριβώς: αν οι υπογραφές έλεγαν ότι όλα ήταν νόμιμα, τότε οι υπογραφές είναι το πρόβλημα — και αυτές είναι που η πρόταση ελέγχει. Μια αυστηρή ποινή μετά τον θάνατο 19 παιδιών δεν είναι το σύστημα που λειτουργεί· είναι το σύστημα που ήρθε αργά.',
      en: 'Exactly: if the signatures said everything was lawful, then the signatures are the problem — and they are what the proposal checks. A severe sentence after 19 children die is not the system working; it is the system arriving late.',
    },
    lever: {
      el: 'Ζήτησε κάθε σχολικό κτίριο να έχει δημόσιο φάκελο στατικής επάρκειας με την ημερομηνία της τελευταίας αυτοψίας.',
      en: 'Ask that every school building have a public structural-safety file with the date of its last inspection.',
    },
    scores: { harm: 9, power: 5, recurrence: 7, remedy: 8 },
    status: {
      el: 'Οι καταδίκες ισχύουν όσο βρέθηκε· η υπόθεση του αρχιτέκτονα και του φυγόδικου δεν έχει επιβεβαιωθεί μετά το 2022 — τεκμαίρονται αθώοι.',
      en: 'The convictions stand as far as found; the architect’s case and the fugitive’s have not been confirmed after 2022 — they are presumed innocent.',
    },
    sources: [
      { title: 'Milenio — Rébsamen school: two sentenced, one on trial, one fugitive (2022)', url: 'https://www.milenio.com/policia/colegio-rebsamen-dos-sentenciados-un-procesado-y-un-profugo' },
      { title: 'Chilango — Sentence against the school’s owner (2020)', url: 'https://www.chilango.com/noticias/sentencia-contra-monica-garcia-villegas/' },
      { title: 'Zeta Tijuana — Works director sentenced to 208 years (2021)', url: 'https://zetatijuana.com/2021/07/sentencian-a-208-anos-de-prision-a-director-responsable-de-obra-del-colegio-rebsamen/' },
    ],
  },
  {
    id: 'lagos-ikoyi-2021',
    when: '2019–2026',
    place: { el: 'Λάγκος, Νιγηρία', en: 'Lagos, Nigeria' },
    title: {
      el: 'Οι υπηρεσίες αδειών και ελέγχου δόμησης του Λάγκος: ένας πύργος 21 ορόφων κατέρρευσε υπό κατασκευή — ο ιατροδικαστής έκρινε αμελείς τις ίδιες τις υπηρεσίες',
      en: 'Lagos permit and building-control agencies: a 21-storey tower collapsed under construction — the coroner found the agencies themselves negligent',
    },
    harmed: {
      el: 'Τουλάχιστον 42 νεκροί (46 κατά μεταγενέστερες αναφορές) — εργάτες και ο ίδιος ο διευθύνων σύμβουλος της κατασκευάστριας',
      en: 'At least 42 dead (46 in later reports) — workers and the developer’s own managing director',
    },
    plain: {
      el: 'Ένας πύργος 21 ορόφων στο Ικόγι κατέρρευσε ενώ χτιζόταν. Ο ιατροδικαστής έκρινε ότι έπεσε από αμέλεια των ίδιων των υπηρεσιών που τον ενέκριναν και τον επέβλεπαν. Η πολιτεία διέταξε δίωξη της εταιρείας και πειθαρχικό έλεγχο των υπαλλήλων — αλλά καμία απόφαση δεν έχει βρεθεί.',
      en: 'A 21-storey tower in Ikoyi collapsed while under construction. The coroner found it fell through the negligence of the very agencies that approved and supervised it. The state ordered the company prosecuted and the officials disciplined — but no outcome has been found.',
    },
    facts: [
      {
        el: '1 Νοεμβρίου 2021: ο υπό κατασκευή πύργος 21 ορόφων στην οδό Gerrard του Ικόγι καταρρέει· τουλάχιστον 42 νεκροί.',
        en: '1 November 2021: the 21-storey tower under construction on Gerrard Road, Ikoyi, collapses; at least 42 dead.',
      },
      {
        el: 'Νοέμβριος 2021: ο κυβερνήτης αναστέλλει επ’ αόριστον τον επικεφαλής της υπηρεσίας ελέγχου δόμησης· αργότερα επανέρχεται, αφού απαλλάσσεται από το υπηρεσιακό συμβούλιο.',
        en: 'November 2021: the governor suspends the head of the building-control agency indefinitely; he is later reinstated after being cleared by the personnel board.',
      },
      {
        el: '17 Φεβρουαρίου 2022: η Λευκή Βίβλος της πολιτείας δέχεται 26 από τις 28 συστάσεις της επιτροπής έρευνας (91 μάρτυρες) και διατάσσει ποινική δίωξη της κατασκευάστριας και πειθαρχικό έλεγχο όλων των υπαλλήλων που ενέκριναν το έργο το 2019.',
        en: '17 February 2022: the state White Paper accepts 26 of the inquiry panel’s 28 recommendations (91 witnesses) and orders criminal prosecution of the developer and a disciplinary panel for all officials who approved the project in 2019.',
      },
      {
        el: '10 Αυγούστου 2022: ο ιατροδικαστής κρίνει ότι ο πύργος «κατέρρευσε από αμέλεια των ρυθμιστικών υπηρεσιών που ήταν αρμόδιες για την έγκριση και την επίβλεψη».',
        en: '10 August 2022: the coroner finds the tower “collapsed due to negligence by regulatory agencies responsible for the approval and supervision.”',
      },
      {
        el: 'Ο ιατροδικαστής βρίσκει επίσης ότι η πυκνότητα και οι αποστάσεις ήταν σε «κατάφωρη παραβίαση» των κανονισμών δόμησης, με σχεδιαστικά λάθη και χωρίς έλεγχο ποιότητας.',
        en: 'The coroner also finds density and setbacks in “gross violation” of building regulations, with design errors and no quality control.',
      },
    ],
    outcome: {
      el: 'Διατάχθηκε δίωξη της εταιρείας και πειθαρχικός έλεγχος· δεν βρέθηκε απόφαση.',
      en: 'Prosecution of the company and disciplinary review ordered; no outcome found.',
    },
    breach: {
      el: 'Οι υπηρεσίες ελέγχου δόμησης υπάρχουν για να δουν αυτό που ο εργολάβος δεν θέλει να δει. Όταν ένας ιατροδικαστής κρίνει ότι οι ίδιες οι υπηρεσίες ήταν αμελείς, και ο επικεφαλής τους επιστρέφει στη θέση του ενώ η δίωξη χάνεται, ο κύκλος κλείνει χωρίς κανέναν υπόλογο.',
      en: 'Building-control agencies exist to see what the developer does not want seen. When a coroner finds the agencies themselves negligent, and their head returns to post while the prosecution fades, the circle closes with no one accountable.',
    },
    patterns: ['extra-floors', 'officials-shielded'],
    safeguards: ['random-inspection', 'signed-permit', 'suspension'],
    counterfactual: {
      el: 'Η Αιφνίδια Αυτοψία, με προτεραιότητα στα ψηλά κτίρια, θα είχε στείλει επιθεωρητή από άλλη υπηρεσία σε έναν πύργο 21 ορόφων υπό κατασκευή. Η Υπογραφή στον Χάρτη θα έδειχνε τι ακριβώς είχε εγκριθεί και από ποιον — και το Όχι στην Ίδια Καρέκλα θα κρατούσε τις εγκρίσεις μακριά από όσους ερευνώνταν ως την κρίση τους.',
      en: 'The Unannounced Inspection, prioritising high-rises, would have sent an inspector from another agency to a 21-storey tower under construction. Signed on the Map would have shown exactly what was approved and by whom — and Not in the Same Chair would have kept approvals away from those under investigation until judged.',
    },
    antilogos: {
      el: 'Ο επικεφαλής της κατασκευάστριας πέθανε στην κατάρρευση· ο επικεφαλής της υπηρεσίας απαλλάχθηκε τυπικά. Ο ιατροδικαστής μίλησε για αμέλεια, όχι για αποδεδειγμένη δωροδοκία.',
      en: 'The developer’s head died in the collapse; the agency head was formally cleared. The coroner spoke of negligence, not proven bribery.',
    },
    reply: {
      el: 'Η αμέλεια αρκεί — δεν χρειάζεται δωροδοκία για να πεθάνουν 42 άνθρωποι. Η πρόταση δεν ζητά ενόχους· ζητά μια επιθεώρηση που δεν εξαρτάται από την υπηρεσία που ενέκρινε, και ένα δημόσιο ίχνος που δεν χάνεται όταν ξεθωριάσουν οι ειδήσεις.',
      en: 'Negligence is enough — no bribe is needed for 42 people to die. The proposal seeks no culprits; it seeks an inspection that does not depend on the agency that approved, and a public trail that does not vanish when the news fades.',
    },
    lever: {
      el: 'Ζήτησε κάθε ψηλό κτίριο υπό κατασκευή να έχει δημόσια πινακίδα με τους εγκεκριμένους ορόφους, την υπογραφή της έγκρισης και την ημερομηνία της τελευταίας αυτοψίας.',
      en: 'Ask that every high-rise under construction display a public sign with its approved floors, the approving signature and the date of the last inspection.',
    },
    scores: { harm: 8, power: 6, recurrence: 8, remedy: 8 },
    status: {
      el: 'Δεν βρέθηκε απόφαση για την εταιρεία ή για υπαλλήλους· όλοι τεκμαίρονται αθώοι.',
      en: 'No outcome found for the company or any official; all are presumed innocent.',
    },
    sources: [
      { title: 'Radio Nigeria Lagos — Coroner accuses building agencies of complicity (2022)', url: 'https://radionigerialagos.gov.ng/ikoyi-tower-coroner-accuses-building-agencies-of-complicity/' },
      { title: 'ThisDay — White Paper: Lagos to prosecute developer (2022)', url: 'https://www.thisdaylive.com/2022/02/17/white-paper-on-ikoyi-collapsed-building-lagos-to-prosecute-developer-fourscore-heights/' },
      { title: 'TheCable — Governor reinstates suspended building agency boss', url: 'https://thecable.ng/ikoyi-high-rise-collapse-sanwo-olu-reinstates-suspended-lagos-building-agency-boss' },
      { title: 'Wikipedia — 2021 Lagos high-rise collapse', url: 'https://en.wikipedia.org/wiki/2021_Lagos_high-rise_collapse' },
    ],
  },
]
