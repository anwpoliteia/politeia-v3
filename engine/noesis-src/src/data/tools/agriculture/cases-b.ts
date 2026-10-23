// ΔΗΜΗΤΡΑ — cases 6–10. Same rules as cases-a.ts: sourced facts checked on
// 2026-09-29, the office in the headline, the harmed always named, and the
// presumption of innocence stated for every open case.

import type { ToolCase } from '../types'

export const CASES_B: readonly ToolCase[] = [
  {
    id: 'hungary-2015',
    when: '2015–2019',
    place: { el: 'Ουγγαρία', en: 'Hungary' },
    title: {
      el: 'Η κυβέρνηση πούλησε και μίσθωσε κρατική γη φτηνά σε φίλους της — και μαζί της τις επιδοτήσεις της ΕΕ',
      en: 'The government sold and leased state land cheaply to its friends — and with it the EU subsidies',
    },
    harmed: { el: 'Οι μικροί αγρότες της Ουγγαρίας', en: 'Hungary’s small farmers' },
    plain: {
      el: 'Από το 2015 η ουγγρική κυβέρνηση πούλησε και δημοπράτησε μισθώσεις εκατοντάδων χιλιάδων εκταρίων κρατικής γης σε χαμηλές τιμές, κυρίως σε επιχειρηματίες κοντά στο κυβερνών κόμμα· μαζί με τη γη πήγαν και οι ευρωπαϊκές επιδοτήσεις της.',
      en: 'From 2015 Hungary’s government sold and auctioned leases on hundreds of thousands of hectares of state land at low prices, mostly to businessmen close to the ruling party; the EU subsidies went with the land.',
    },
    facts: [
      {
        el: 'Η ΕΕ πληρώνει περίπου 65 δισ. δολάρια τον χρόνο σε αγροτικές επιδοτήσεις· στην Ουγγαρία και σε μεγάλο μέρος της Κεντρικής και Ανατολικής Ευρώπης το μεγαλύτερο μέρος καταλήγει σε λίγους και καλά δικτυωμένους, κατά την έρευνα των New York Times (2019).',
        en: 'The EU pays about $65 billion a year in farm subsidies; in Hungary and much of Central and Eastern Europe the bulk goes to a connected few, according to a 2019 New York Times investigation.',
      },
      {
        el: '2015: η κυβέρνηση αρχίζει να πουλά και να δημοπρατεί μισθώσεις εκατοντάδων χιλιάδων εκταρίων κρατικής γης σε χαμηλές τιμές· οι περισσότερες καταλήγουν σε επιχειρηματίες με στενούς δεσμούς με το Fidesz.',
        en: '2015: the government starts selling and auctioning leases on hundreds of thousands of hectares of state land at cut prices; most go to businessmen closely tied to Fidesz.',
      },
      {
        el: 'Ο παιδικός φίλος του πρωθυπουργού, Lőrinc Mészáros, αναδεικνύεται ο μεγαλύτερος μεμονωμένος αγοραστής σε δημοπρασίες κρατικής γης· ο ίδιος ο πρωθυπουργός είναι άμεσος δικαιούχος ενισχύσεων της ΚΑΠ.',
        en: 'The prime minister’s childhood friend, Lőrinc Mészáros, becomes the largest single buyer at auctions of state land; the prime minister himself is a direct recipient of CAP support.',
      },
      {
        el: 'Οι μικροί αγρότες μένουν εξαρτημένοι από τους νέους γαιοκτήμονες — ένα σύστημα που οι Times περιέγραψαν ως «σύγχρονη φεουδαρχία».',
        en: 'Small farmers are left beholden to the new landholders — a system the Times called “modern feudalism.”',
      },
    ],
    outcome: {
      el: 'Νόμιμο στα χαρτιά, καταστροφικό στην ουσία: η γη και οι επιδοτήσεις της πέρασαν σε λίγους, και ο μικρός αγρότης έγινε ενοικιαστής του φίλου της εξουσίας.',
      en: 'Legal on paper, ruinous in substance: the land and its subsidies passed to a few, and the small farmer became a tenant of power’s friend.',
    },
    breach: {
      el: 'Η ενίσχυση υπάρχει για τον αγρότη, όχι για τον γαιοκτήμονα με τη σωστή φιλία. Όταν το κράτος μοιράζει τη γη στους δικούς του, η επιδότηση παύει να είναι πολιτική για την ύπαιθρο και γίνεται μισθός πολιτικής πίστης — πληρωμένος από όλους τους Ευρωπαίους.',
      en: 'Support exists for the farmer, not for the landholder with the right friendship. When the state hands the land to its own, the subsidy stops being policy for the countryside and becomes a salary for political loyalty — paid by every European.',
    },
    patterns: ['land-to-allies', 'owner-regulator'],
    safeguards: ['auction', 'interest-map', 'open-ledger'],
    counterfactual: {
      el: 'Ο Κλήρος και η Ανοιχτή Δημοπρασία θα έκαναν κάθε πώληση και μίσθωση δημόσια καταγεγραμμένη, με τιμές σε σύγκριση με την αγορά. Ο Χάρτης Συμφερόντων θα έδειχνε, σε κάθε κατακύρωση, τον δεσμό του πλειοδότη με την κυβέρνηση. Η απόφαση θα έμενε στο κράτος· η σιωπή όχι.',
      en: 'Lot and Open Auction would have made every sale and lease a public record, priced against the market. The Interest Map would have shown, at every award, the bidder’s tie to the government. The decision would stay with the state; the silence would not.',
    },
    antilogos: {
      el: 'Οι δημοπρασίες ήταν νόμιμες· οι μεγάλοι παραγωγοί είναι συχνά πιο αποδοτικοί, και η συγκέντρωση της γης αφορά όλη την Ευρώπη, όχι μόνο τους φίλους μιας κυβέρνησης.',
      en: 'The auctions were legal; large producers are often more efficient, and land concentration is a Europe-wide trend, not just a government’s friends.',
    },
    reply: {
      el: 'Η νομιμότητα της διαδικασίας δεν απαντά ποιος κέρδιζε — αυτό το απαντά μόνο η δημοσιότητα των δεσμών. Αν οι νικητές δεν συνδέονταν με την εξουσία, ο Χάρτης θα το έδειχνε και θα καθάριζε την κυβέρνηση. Και η αποδοτικότητα δεν χρειάζεται φτηνή δημόσια γη για να αποδειχθεί.',
      en: 'A lawful procedure does not answer who won — only public ties do. If the winners were not linked to power, the Map would show it and clear the government. And efficiency does not need cheap public land to prove itself.',
    },
    lever: {
      el: 'Ζήτησε κάθε πώληση ή μίσθωση δημόσιας γης να δημοσιεύεται με τιμή, πλειοδότη και πραγματικό δικαιούχο — και ανώτατο όριο ενισχύσεων ανά όμιλο εταιρειών.',
      en: 'Ask that every sale or lease of public land be published with price, bidder and beneficial owner — and a cap on support per corporate group.',
    },
    scores: { harm: 7, power: 9, recurrence: 8, remedy: 6 },
    status: {
      el: 'Χωρίς ποινική απόφαση για τις δημοπρασίες· καταγεγραμμένο από διεθνή δημοσιογραφική έρευνα.',
      en: 'No criminal ruling on the auctions; documented by international investigative reporting.',
    },
    sources: [
      { title: 'NYT “The Money Farmers” (2019), via Homeland Security Newswire', url: 'https://www.homelandsecuritynewswire.com/dr20191105-the-money-farmers-how-oligarchs-and-populists-milk-the-e-u-for-millions' },
      { title: 'Euronews — Land grab: Hungary’s political elite accused of milking the system (2020)', url: 'https://www.euronews.com/my-europe/2020/01/17/land-grab-hungary-s-political-elite-accused-of-milking-the-system' },
      { title: 'Slow Food — How EU farming subsidies lead to land grabbing in Hungary', url: 'https://www.slowfood.com/a-broken-system-how-eu-farming-subsidies-lead-to-land-grabbing-in-hungary/' },
    ],
  },
  {
    id: 'nebrodi-2016',
    when: '2012–2025',
    place: { el: 'Νέβροδα, Σικελία, Ιταλία', en: 'Nebrodi, Sicily, Italy' },
    title: {
      el: 'Η «μαφία των βοσκοτόπων» έπαιρνε ευρωπαϊκές ενισχύσεις — και ο πρόεδρος του πάρκου που τη σταμάτησε δέχτηκε δολοφονική επίθεση',
      en: 'The “pasture mafia” took EU farm support — and the park president who stopped it survived an assassination attempt',
    },
    harmed: { el: 'Οι κτηνοτρόφοι των Νεβρόδων · ο Giuseppe Antoci', en: 'The herders of the Nebrodi · Giuseppe Antoci' },
    plain: {
      el: 'Δύο μαφιόζικες οικογένειες έπαιρναν ευρωπαϊκές ενισχύσεις με εικονικό ή παράνομο έλεγχο γης και απειλές κατά κτηνοτρόφων· όταν ο πρόεδρος του Πάρκου Νεβρόδων αυστηροποίησε τους ελέγχους, έγινε στόχος.',
      en: 'Two mafia clans took EU support through fictitious or unlawful control of land and threats against herders; when the Nebrodi Park’s president tightened checks, he became a target.',
    },
    facts: [
      {
        el: 'Ως πρόεδρος του Πάρκου Νεβρόδων, ο Giuseppe Antoci επιβάλλει αυστηρούς ελέγχους ιστορικού σε όσους ζητούν μισθώσεις γης και ενισχύσεις — και οι αρχές βλέπουν ότι οι οικογένειες απομυζούν κονδύλια της ΕΕ.',
        en: 'As president of the Nebrodi Park, Giuseppe Antoci imposes strict background checks on those seeking land leases and support — and authorities see the clans siphoning EU funds.',
      },
      {
        el: '2016: δέχεται δολοφονική απόπειρα — η σοβαρότερη επίθεση κατά θεσμικού προσώπου στην Ιταλία από τη δεκαετία του 1990.',
        en: '2016: he survives an assassination attempt — the most serious attack on an institutional figure in Italy since the 1990s.',
      },
      {
        el: 'Η δικαιοσύνη αποκαλύπτει σύστημα που απέσπασε τουλάχιστον 5 εκατ. ευρώ από ευρωπαϊκά αγροτικά κονδύλια, με συνεργούς λογιστές, πολιτικούς και δημόσιους υπαλλήλους.',
        en: 'The courts expose a scheme that drained at least €5 million in EU farm funds, with accountants, politicians and public employees involved.',
      },
      {
        el: 'Η πρώτη μεγάλη δίκη καταδικάζει 91 κατηγορουμένους σε συνολικά 660 χρόνια· η δεύτερη («Nebrodi 2») καταδικάζει 45 από τους 54 σε 325 χρόνια.',
        en: 'The first maxi-trial convicts 91 defendants to a combined 660 years; the second (“Nebrodi 2”) convicts 45 of 54 to 325 years.',
      },
    ],
    outcome: {
      el: 'Μία από τις λίγες ιστορίες όπου ο θεσμός κέρδισε — επειδή ένας άνθρωπος έβαλε ελέγχους πριν από την πληρωμή και επέζησε για να τους δει να δικαιώνονται.',
      en: 'One of the few stories where the institution won — because one man put checks before payment and survived to see them vindicated.',
    },
    breach: {
      el: 'Η γη των βοσκών έγινε εργαλείο εκβιασμού των βοσκών. Όταν η ενίσχυση μπορεί να αρπαχτεί με απειλή, το κράτος χρηματοδοτεί άθελά του τον φόβο — και ο έντιμος κτηνοτρόφος πληρώνει με τη γη του και την ασφάλειά του.',
      en: 'The herders’ land became a tool for extorting the herders. When support can be seized by threat, the state unwittingly funds fear — and the honest herder pays with his land and his safety.',
    },
    patterns: ['violence', 'phantom-land', 'land-to-allies'],
    safeguards: ['registry', 'interest-map', 'shield'],
    counterfactual: {
      el: 'Το Ενιαίο Μητρώο Γης και ο Χάρτης Συμφερόντων θα έκαναν σε όλη την ΕΕ, αυτόματα, αυτό που ο Antoci έκανε με το χέρι σε ένα πάρκο: έλεγχο πριν από την πληρωμή. Και επειδή ο έλεγχος θα ήταν σύστημα και όχι πρόσωπο, δεν θα υπήρχε ένας άνθρωπος να στοχοποιηθεί.',
      en: 'The One Land Register and the Interest Map would do across the EU, automatically, what Antoci did by hand in one park: check before payment. And because the check would be a system, not a person, there would be no single person to target.',
    },
    antilogos: {
      el: 'Οι αντιμαφιόζικοι έλεγχοι καθυστερούν και επιβαρύνουν όλους τους αιτούντες· ο μικρός κτηνοτρόφος πληρώνει σε γραφειοκρατία την εγκληματικότητα των λίγων.',
      en: 'Anti-mafia checks slow and burden every applicant; the small herder pays in paperwork for the crimes of a few.',
    },
    reply: {
      el: 'Γι’ αυτό ο έλεγχος πρέπει να είναι αυτόματη διασταύρωση, όχι χαρτιά για τον αγρότη. Ο έντιμος κτηνοτρόφος δεν συμπληρώνει τίποτα επιπλέον — τα μητρώα μιλούν μεταξύ τους. Η γραφειοκρατία είναι το κόστος του χειροκίνητου ελέγχου· η ΤΝ είναι το αντίδοτό της.',
      en: 'That is why the check must be an automatic cross-match, not paperwork for the farmer. The honest herder fills in nothing extra — the registers talk to each other. Bureaucracy is the cost of manual checking; the AI is its antidote.',
    },
    lever: {
      el: 'Ζήτησε κάθε μίσθωση δημόσιας γης για βοσκή να περνά αυτόματο έλεγχο πραγματικού δικαιούχου — όπως έκαναν οι έλεγχοι του Antoci στη Σικελία.',
      en: 'Ask that every lease of public grazing land pass an automatic beneficial-owner check — as Antoci’s checks did in Sicily.',
    },
    scores: { harm: 7, power: 5, recurrence: 7, remedy: 9 },
    status: {
      el: 'Καταδίκες σε δύο μεγάλες δίκες· σε έφεση επικυρώθηκαν δεκάδες καταδίκες.',
      en: 'Convictions in two maxi-trials; dozens upheld on appeal.',
    },
    sources: [
      { title: 'La Sicilia — Maxi-trial Nebrodi 2: 45 convictions, 325 years', url: 'https://en.lasicilia.it/news/news/3074605/maxiprocesso-nebrodi-2-a-blow-to-the-mafia-of-european-funds-45-convictions-and-325-years-in-prison.html' },
      { title: 'La Nuova Ecologia — 65 convictions on appeal', url: 'https://www.lanuovaecologia.it/mafia-pascoli-maxiprocesso-nebrodi-sentenza-65-condanne/' },
      { title: 'Politico via AgTech Daily — Mafia clans jailed after pocketing millions in EU funds', url: 'https://agtechdaily.com/mafia-clans-jailed-in-landmark-trial-after-pocketing-millions-in-eu-funds-politico/' },
    ],
  },
  {
    id: 'bihar-1996',
    when: '1996–2022',
    place: { el: 'Μπιχάρ, Ινδία', en: 'Bihar, India' },
    title: {
      el: 'Εκατομμύρια για ζωοτροφές που δεν αγοράστηκαν ποτέ — και ένας πρώην επικεφαλής της πολιτείας καταδικάστηκε 17 χρόνια μετά',
      en: 'Millions for fodder never bought — and a former chief minister convicted 17 years later',
    },
    harmed: { el: 'Οι φορολογούμενοι και οι κτηνοτρόφοι του Μπιχάρ', en: 'The taxpayers and herders of Bihar' },
    plain: {
      el: 'Από τα ταμεία του Τμήματος Κτηνοτροφίας του Μπιχάρ αναλήφθηκαν με ψεύτικα τιμολόγια περίπου 950 κροτ ρουπίες για ζωοτροφές και εφόδια που δεν υπήρξαν· ο πρώην επικεφαλής της πολιτείας καταδικάστηκε σε τέσσερις χωριστές υποθέσεις από το 2013 ως το 2022.',
      en: 'About ₹950 crore was drawn from the treasuries of Bihar’s Animal Husbandry Department against fake bills for fodder and supplies that never existed; the former chief minister was convicted in four separate cases from 2013 to 2022.',
    },
    facts: [
      {
        el: 'Ιανουάριος 1996: έφοδος του διοικητή της περιοχής στο Τμήμα Κτηνοτροφίας στο Chaibasa αποκαλύπτει ψευδείς αναλήψεις από δημόσια ταμεία.',
        en: 'January 1996: a raid by the district’s deputy commissioner on the Animal Husbandry Department at Chaibasa exposes fraudulent withdrawals from public treasuries.',
      },
      {
        el: 'Μάρτιος 1996: υπό την πίεση της κοινής γνώμης, το Ανώτερο Δικαστήριο της Πάτνα αναθέτει την έρευνα στην κεντρική υπηρεσία ερευνών (CBI).',
        en: 'March 1996: under public pressure, the Patna High Court hands the investigation to the Central Bureau of Investigation (CBI).',
      },
      {
        el: '30 Σεπτεμβρίου 2013: ο πρώην επικεφαλής της πολιτείας Lalu Prasad Yadav καταδικάζεται μαζί με 45 ακόμη στην πρώτη υπόθεση, σε πέντε χρόνια φυλάκιση.',
        en: '30 September 2013: former chief minister Lalu Prasad Yadav is convicted with 45 others in the first case and sentenced to five years.',
      },
      {
        el: 'Ακολουθούν καταδίκες τον Δεκέμβριο 2017, τον Ιανουάριο 2018 και τον Φεβρουάριο 2022 — η τελευταία για 139 κροτ από το ταμείο Doranda: πέντε χρόνια και πρόστιμο 60 λακ.',
        en: 'Convictions follow in December 2017, January 2018 and February 2022 — the last for ₹139 crore from the Doranda treasury: five years and a ₹60 lakh fine.',
      },
    ],
    outcome: {
      el: 'Καταδίκες — αλλά 17 χρόνια μετά την αποκάλυψη, σε μια σειρά δικών που κράτησε πάνω από ένα τέταρτο του αιώνα.',
      en: 'Convictions — but 17 years after exposure, in a series of trials lasting more than a quarter of a century.',
    },
    breach: {
      el: 'Τα χρήματα για ζωοτροφές υπήρχαν για να ζουν τα ζώα και οι άνθρωποι που ζουν από αυτά. Όταν ένα ολόκληρο τμήμα πληρώνει τιμολόγια για ανύπαρκτα φορτία, δεν πρόκειται για λάθος· πρόκειται για κράτος που έγινε μηχανή εκταμίευσης για τους δικούς του. Και μια δικαιοσύνη που χρειάζεται 26 χρόνια δεν αποκαθιστά — απλώς καταγράφει.',
      en: 'Fodder money existed so animals — and the people who live from them — could live. When a whole department pays bills for loads that never came, it is not an error; it is a state turned into a disbursement machine for its own. And justice that takes 26 years does not repair — it only records.',
    },
    patterns: ['phantom-herd', 'captured-agency', 'self-shield'],
    safeguards: ['open-ledger', 'herd', 'clock'],
    counterfactual: {
      el: 'Το Ανοιχτό Κατάστιχο θα έδειχνε από τον πρώτο μήνα τιμολόγια ζωοτροφών δυσανάλογα με τα ζώα της περιοχής. Το Μητρώο Ζωντανών Κοπαδιών θα ρωτούσε: για ποια ζώα; Και το Ρολόι θα μετρούσε δημόσια τα χρόνια όσο η υπόθεση περνούσε από δικαστήριο σε δικαστήριο.',
      en: 'The Open Ledger would have shown from the first month fodder bills out of all proportion to the district’s animals. The Living Herd Register would have asked: for which animals? And the Clock would have counted the years publicly as the case moved from court to court.',
    },
    antilogos: {
      el: 'Η υπόθεση αποκαλύφθηκε από έναν έντιμο διοικητικό υπάλληλο και διώχθηκε ως το τέλος· ο θεσμός τελικά λειτούργησε. Καμία ΤΝ δεν θα επιτάχυνε τα ινδικά δικαστήρια.',
      en: 'The case was exposed by one honest administrator and prosecuted to the end; the institution worked in the end. No AI would speed up India’s courts.',
    },
    reply: {
      el: 'Λειτούργησε — για όσους πρόλαβαν να δικαστούν. Ένας έντιμος υπάλληλος είναι τύχη, όχι σύστημα. Η ΤΝ δεν επιταχύνει το δικαστήριο· κάνει την κλοπή ορατή από τον πρώτο μήνα αντί για μετά από χρόνια, ώστε να μη χρειάζεται μια δίκη δεκαετιών για να μάθουμε ό,τι έδειχναν τα τιμολόγια.',
      en: 'It worked — for those who lived to be tried. One honest official is luck, not a system. The AI does not speed up the court; it makes the theft visible in the first month instead of years later, so we do not need decades of trials to learn what the bills already showed.',
    },
    lever: {
      el: 'Ζήτησε κάθε δημόσια δαπάνη για ζωοτροφές, φάρμακα ζώων και αγροτικές εισροές να δημοσιεύεται με ποσότητες και προορισμό — και να διασταυρώνεται με το μητρώο ζώων.',
      en: 'Ask that every public purchase of fodder, veterinary drugs and farm inputs be published with quantities and destination — and cross-checked against the animal register.',
    },
    scores: { harm: 8, power: 9, recurrence: 7, remedy: 8 },
    status: {
      el: 'Καταδίκες σε τέσσερις υποθέσεις (2013–2022).',
      en: 'Convictions in four cases (2013–2022).',
    },
    sources: [
      { title: 'LiveLaw — CBI court convicts in ₹139 crore Doranda case (2022)', url: 'https://www.livelaw.in/news-updates/fodder-scam-cbi-court-convicts-lalu-prasad-yadav-139-crore-doranda-treasury-191992' },
      { title: 'Business Today — Five years’ imprisonment in fodder scam case (2022)', url: 'https://www.businesstoday.in/latest/politics/story/fodder-scam-case-cbi-court-sentences-lalu-prasad-to-5-yrs-imprisonment-323334-2022-02-21' },
      { title: 'The Wire — Explained: what is the fodder scam', url: 'https://thewire.in/law/explained-fodder-scam-lalu-prasad-yadav' },
    ],
  },
  {
    id: 'brazil-2017',
    when: '2017',
    place: { el: 'Βραζιλία', en: 'Brazil' },
    title: {
      el: 'Υγειονομικοί επιθεωρητές πληρώνονταν για να εγκρίνουν κρέας ακατάλληλο για κατανάλωση — από τους μεγαλύτερους παραγωγούς του κόσμου',
      en: 'Health inspectors were paid to approve meat unfit to eat — by some of the world’s largest producers',
    },
    harmed: { el: 'Καταναλωτές στη Βραζιλία και στις χώρες εξαγωγής', en: 'Consumers in Brazil and its export markets' },
    plain: {
      el: 'Η ομοσπονδιακή αστυνομία της Βραζιλίας αποκάλυψε σύστημα όπου υγειονομικοί επιθεωρητές και πολιτικοί δωροδοκούνταν για να εγκρίνουν κρέας ακατάλληλο για κατανάλωση — και οι εταιρείες επηρέαζαν ποιος επιθεωρητής θα ελέγχει τα εργοστάσιά τους.',
      en: 'Brazil’s federal police exposed a scheme in which health inspectors and politicians were bribed to approve meat unfit to eat — and companies influenced which inspector would check their plants.',
    },
    facts: [
      {
        el: '17 Μαρτίου 2017: η ομοσπονδιακή αστυνομία δημοσιοποιεί την επιχείρηση «Carne Fraca» («Αδύναμη Σάρκα») μετά από δύο χρόνια έρευνας: πάνω από 1.000 αστυνομικοί, έφοδοι σε έξι πολιτείες, πάνω από 300 εντάλματα.',
        en: '17 March 2017: federal police make public Operation “Carne Fraca” (“Weak Flesh”) after a two-year inquiry: over 1,000 officers, raids in six states, more than 300 warrants.',
      },
      {
        el: 'Κατά τις κατηγορίες, οι BRF και JBS — από τους μεγαλύτερους παραγωγούς κρέατος στον κόσμο — είχαν εκπροσώπους που επηρέαζαν την επιλογή των επιθεωρητών στα εργοστάσιά τους και τους δωροδοκούσαν.',
        en: 'According to the allegations, BRF and JBS — among the world’s largest meat producers — had representatives who influenced the choice of inspectors at their plants and bribed them.',
      },
      {
        el: 'Οι καταγγελίες περιλάμβαναν επανασυσκευασία ληγμένου κρέατος και αλλοίωση χρώματος και οσμής με χημικές ουσίες.',
        en: 'The allegations included repackaging out-of-date meat and masking colour and smell with chemicals.',
      },
      {
        el: 'Κίνα, Χιλή και Χονγκ Κονγκ αναστέλλουν προσωρινά όλες τις εισαγωγές κρέατος από τη Βραζιλία.',
        en: 'China, Chile and Hong Kong temporarily suspend all meat imports from Brazil.',
      },
    ],
    outcome: {
      el: 'Έρευνες, διακανονισμοί και βαριά ζημιά στις εξαγωγές. Ο έλεγχος που διαλέγει ο ελεγχόμενος αποδείχθηκε ο φτηνότερος να αγοραστεί.',
      en: 'Investigations, settlements and heavy damage to exports. The inspection chosen by the inspected proved the cheapest to buy.',
    },
    breach: {
      el: 'Ο υγειονομικός έλεγχος υπάρχει για να στέκεται ανάμεσα στο κέρδος και στο στομάχι του πολίτη. Όταν ο ελεγχόμενος διαλέγει τον ελεγκτή του, ο έλεγχος γίνεται υπηρεσία που αγοράζεται — και το ρίσκο το τρώει, κυριολεκτικά, ο καταναλωτής.',
      en: 'Food inspection exists to stand between profit and the citizen’s stomach. When the inspected chooses the inspector, inspection becomes a service for sale — and the consumer, quite literally, eats the risk.',
    },
    patterns: ['bribed-inspector', 'captured-agency'],
    safeguards: ['auction', 'shield', 'interest-map'],
    counterfactual: {
      el: 'Ο Κλήρος θα είχε αναθέσει επιθεωρητές στα εργοστάσια με επαληθεύσιμη κλήρωση και εναλλαγή — κανείς παραγωγός δεν θα ήξερε ποιον να «καλλιεργήσει». Η Ασπίδα Μάρτυρα θα έδινε στους έντιμους επιθεωρητές ασφαλή δρόμο να καταγγείλουν.',
      en: 'The Lot would have assigned inspectors to plants by verifiable draw and rotation — no producer would know whom to “cultivate.” The Witness Shield would have given honest inspectors a safe way to report.',
    },
    antilogos: {
      el: 'Η εναλλαγή επιθεωρητών σβήνει τη γνώση για κάθε εργοστάσιο· ο επιθεωρητής που μένει χρόνια σε μια μονάδα την ξέρει καλύτερα από κάθε κληρωμένο.',
      en: 'Rotating inspectors erases knowledge of each plant; an inspector who stays for years knows a site better than anyone drawn by lot.',
    },
    reply: {
      el: 'Γι’ αυτό ο κλήρος δεν είναι τυφλός: γίνεται ανάμεσα σε επιθεωρητές με την ίδια ειδίκευση, και ο προηγούμενος παραδίδει φάκελο στον επόμενο. Η γνώση μεταφέρεται· η σχέση που αγοράζεται, όχι.',
      en: 'That is why the lot is not blind: it draws among inspectors with the same expertise, and the outgoing one hands a file to the next. Knowledge transfers; the relationship that can be bought does not.',
    },
    lever: {
      el: 'Ζήτησε οι κτηνιατρικοί και υγειονομικοί επιθεωρητές σε σφαγεία και μονάδες τροφίμων να ορίζονται με δημόσια κλήρωση και να εναλλάσσονται.',
      en: 'Ask that veterinary and food inspectors at slaughterhouses and food plants be assigned by public lot and rotated.',
    },
    scores: { harm: 7, power: 7, recurrence: 7, remedy: 8 },
    status: {
      el: 'Πολλαπλές ποινικές και διοικητικές διαδικασίες· η BRF συμφώνησε διακανονισμό με τις αρχές.',
      en: 'Multiple criminal and administrative proceedings; BRF reached a leniency deal with the authorities.',
    },
    sources: [
      { title: 'Wikipedia — Operation Weak Meat', url: 'https://en.wikipedia.org/wiki/Operation_Weak_Meat' },
      { title: 'CNN Money — Brazil’s spoiled meat scandal widens worldwide (2017)', url: 'https://money.cnn.com/2017/03/22/news/economy/brazil-meat-scandal/index.html' },
      { title: 'Al Jazeera — Police raid meatpacking plants in bribery probe (2017)', url: 'https://www.aljazeera.com/amp/news/2017/3/18/police-raid-meatpacking-plants-in-bribery-probe' },
      { title: 'MEAT+POULTRY — BRF and Brazilian government reach leniency deal', url: 'https://www.meatpoultry.com/articles/27825-brf-brazilian-government-reach-leniency-deal' },
    ],
  },
  {
    id: 'kenya-2018',
    when: '2018',
    place: { el: 'Κένυα', en: 'Kenya' },
    title: {
      el: 'Έμποροι που παρίσταναν τους αγρότες πληρώθηκαν δισεκατομμύρια — οι αληθινοί αγρότες έμειναν απλήρωτοι',
      en: 'Traders posing as farmers were paid billions — real farmers went unpaid',
    },
    harmed: { el: 'Οι καλλιεργητές καλαμποκιού της Κένυας', en: 'Kenya’s maize growers' },
    plain: {
      el: 'Χρήματα για την αγορά καλαμποκιού από αγρότες πήγαν σε μικρή ομάδα εμπόρων με ψεύτικα έντυπα επαλήθευσης, ενώ οι πραγματικοί αγρότες δεν μπόρεσαν να πουλήσουν ή δεν πληρώθηκαν.',
      en: 'Money to buy maize from farmers went to a small group of traders using false verification forms, while real farmers could not sell or were not paid.',
    },
    facts: [
      {
        el: '2018: 11,3 δισ. σελίνια που προορίζονταν για την αγορά καλαμποκιού από αγρότες υπεξαιρούνται, κατά τις έρευνες, μέσα από σχήμα εμπόρων και υπαλλήλων του Εθνικού Συμβουλίου Δημητριακών (NCPB).',
        en: '2018: Sh11.3 billion meant to buy maize from farmers is embezzled, according to investigations, through a scheme of traders and staff at the National Cereals and Produce Board (NCPB).',
      },
      {
        el: 'Οκτώ έμποροι που παρίσταναν τους αγρότες πληρώθηκαν 1,9 δισ. σελίνια· κάποιοι, κατά τις καταγγελίες, λαθρεμπορεύονταν καλαμπόκι από την Ουγκάντα για να το πουλήσουν στο Συμβούλιο.',
        en: 'Eight traders posing as farmers were paid Sh1.9 billion; some, it is alleged, smuggled maize from Uganda to sell to the Board.',
      },
      {
        el: 'Οι πραγματικοί αγρότες δεν μπόρεσαν να πουλήσουν τη σοδειά τους ή έμειναν απλήρωτοι μετά την παράδοση.',
        en: 'Genuine farmers were unable to sell their harvest or went unpaid after delivery.',
      },
      {
        el: 'Ο γενικός γραμματέας του υπουργείου Γεωργίας, ο διευθύνων σύμβουλος και ο οικονομικός διευθυντής του NCPB κατηγορούνται για παράτυπες αγορές καλαμποκιού 5,6 δισ. σελινιών.',
        en: 'The agriculture ministry’s principal secretary and the NCPB’s managing director and finance manager are charged over irregular maize purchases worth Sh5.6 billion.',
      },
    ],
    outcome: {
      el: 'Κατηγορίες σε αξιωματούχους και εμπόρους· οι αγρότες που περίμεναν την πληρωμή τους έμειναν να περιμένουν.',
      en: 'Charges against officials and traders; the farmers waiting for payment were left waiting.',
    },
    breach: {
      el: 'Το ίδιο σχήμα με τον ΟΠΕΚΕΠΕ, σε άλλη ήπειρο: τα χρήματα του αγρότη φτάνουν σε όποιον παριστάνει τον αγρότη. Όταν το κράτος δεν ξεχωρίζει τον παραγωγό από τον μεσάζοντα, πληρώνει τον γρηγορότερο και τον καλύτερα δικτυωμένο — ποτέ τον πιο έντιμο.',
      en: 'The same pattern as OPEKEPE, on another continent: the farmer’s money reaches whoever poses as a farmer. When the state cannot tell the grower from the middleman, it pays the fastest and the best connected — never the most honest.',
    },
    patterns: ['phantom-land', 'honest-pay', 'captured-agency'],
    safeguards: ['geo', 'open-ledger', 'fast-lane'],
    counterfactual: {
      el: 'Το Δορυφορικό Μάτι θα έδειχνε ότι οι «αγρότες» που πληρώθηκαν περισσότερο δεν είχαν χωράφια που να δικαιολογούν τις παραδόσεις τους. Το Ανοιχτό Κατάστιχο θα έκανε ορατό ότι οκτώ ονόματα πήραν το ένα έκτο των χρημάτων. Και η Προτεραιότητα στον Έντιμο θα είχε πληρώσει πρώτους όσους η σοδειά τους επαληθευόταν από τη γη τους.',
      en: 'The Satellite Witness would have shown that the best-paid “farmers” had no fields to match their deliveries. The Open Ledger would have made visible that eight names took a sixth of the money. And the Honest Fast Lane would have paid first those whose harvest their land could vouch for.',
    },
    antilogos: {
      el: 'Οι έμποροι είναι νόμιμος κρίκος της αλυσίδας· συγκεντρώνουν τη σοδειά μικρών παραγωγών που δεν μπορούν να τη μεταφέρουν μόνοι τους. Ο αποκλεισμός τους θα έβλαπτε ακριβώς τους μικρούς.',
      en: 'Traders are a legitimate link in the chain; they gather the harvest of small growers who cannot haul it themselves. Excluding them would hurt the smallest.',
    },
    reply: {
      el: 'Ο έμπορος δεν αποκλείεται· απλώς δηλώνεται ως έμπορος. Το πρόβλημα δεν ήταν η ύπαρξη μεσαζόντων αλλά ότι πληρώθηκαν ως αγρότες, με ψεύτικα έντυπα, από ένα πρόγραμμα που υπήρχε για τους αγρότες.',
      en: 'The trader is not excluded; he simply registers as a trader. The problem was not middlemen existing but that they were paid as farmers, on false forms, from a programme that existed for farmers.',
    },
    lever: {
      el: 'Ζήτησε κάθε κρατική αγορά αγροτικών προϊόντων να δημοσιεύει τον πωλητή, την ποσότητα και τη γη από την οποία προέρχεται η σοδειά.',
      en: 'Ask that every state purchase of farm produce publish the seller, the quantity and the land the harvest came from.',
    },
    scores: { harm: 8, power: 7, recurrence: 8, remedy: 8 },
    status: {
      el: 'Ποινικές διαδικασίες κατά αξιωματούχων και εμπόρων. Όλοι τεκμαίρονται αθώοι.',
      en: 'Criminal proceedings against officials and traders. All presumed innocent.',
    },
    sources: [
      { title: 'Daily Nation — Details of Sh11.3bn scandal at cereals board', url: 'https://nation.africa/kenya/news/details-of-sh11-3bn-scandal-at-cereals-board-82496' },
      { title: 'Wikipedia — National Cereals and Produce Board scandals', url: 'https://en.wikipedia.org/wiki/National_Cereals_and_Produce_Board_scandals' },
      { title: 'Law and Power Kenya — NCPB employees, maize traders charged', url: 'https://www.lawandpowerkenya.com/ncpb-employees-maize-traders-charged-in-maize-scandal/' },
    ],
  },
]
