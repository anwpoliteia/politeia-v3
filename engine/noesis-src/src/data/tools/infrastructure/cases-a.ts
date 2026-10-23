// ΔΑΙΔΑΛΟΣ — cases 1–5: four Greek, then Novi Sad. Facts checked against
// sources on 2026-09-30. The office in the headline, never the officer; the
// harmed always named; presumption of innocence for every open case.

import type { ToolCase } from '../types'

export const CASES_A: readonly ToolCase[] = [
  {
    id: 'contract-717-2014',
    when: '2014–2026',
    place: { el: 'Άξονας Αθήνα–Θεσσαλονίκη–Προμαχώνας', en: 'Athens–Thessaloniki–Promachonas rail axis' },
    title: {
      el: 'Η σύμβαση ασφαλείας του σιδηροδρόμου που άργησε επτά χρόνια: πώς η ΕΡΓΟΣΕ και το υπουργείο Μεταφορών άφησαν τη σηματοδότηση να περιμένει',
      en: 'The railway safety contract that ran seven years late: how the rail-works agency and the transport ministry let signalling wait',
    },
    harmed: {
      el: 'Ο ευρωπαϊκός και ο ελληνικός προϋπολογισμός — και οι επιβάτες και οι εργαζόμενοι μιας γραμμής που λειτουργούσε χωρίς τηλεδιοίκηση όταν στα Τέμπη σκοτώθηκαν 57 άνθρωποι',
      en: 'The EU and Greek budgets — and the passengers and staff of a line that ran without remote control when 57 people were killed at Tempi',
    },
    plain: {
      el: 'Η Σύμβαση 717 υπογράφηκε το 2014 για να εκσυγχρονίσει τη σηματοδότηση και την τηλεδιοίκηση του κεντρικού σιδηροδρομικού άξονα ως το 2016. Πήρε επτά παρατάσεις. Η Ευρωπαϊκή Εισαγγελία κατηγορεί 23 πρόσωπα για απάτη σε βάρος κονδυλίων της ΕΕ· η Βουλή αρνήθηκε να ερευνήσει τους υπουργούς.',
      en: 'Contract 717 was signed in 2014 to modernise signalling and remote control on the main rail axis by 2016. It got seven extensions. The European Public Prosecutor charges 23 people with fraud against EU funds; Parliament refused to investigate the ministers.',
    },
    facts: [
      {
        el: 'Σεπτέμβριος 2014: η ΕΡΓΟΣΕ υπογράφει τη Σύμβαση 717 (41,3 εκατ. ευρώ) με την κοινοπραξία ΤΟΜΗ (όμιλος ΑΚΤΩΡ)–Alstom για σηματοδότηση, τηλεδιοίκηση και αντικατάσταση 70 αλλαγών τροχιάς σε 519 χιλιόμετρα.',
        en: 'September 2014: the rail-works agency ERGOSE signs Contract 717 (€41.3 million) with the TOMI (AKTOR group)–Alstom consortium for signalling, remote control and 70 track switches over 519 km.',
      },
      {
        el: 'Η σύμβαση έπρεπε να ολοκληρωθεί ως το 2016, χρηματοδοτούνταν κατά 85% από το Ταμείο Συνοχής της ΕΕ και πήρε επτά παρατάσεις, που η Ευρωπαϊκή Εισαγγελία χαρακτηρίζει μη εγκεκριμένες.',
        en: 'The contract was due by 2016, was 85% co-financed by the EU Cohesion Fund, and received seven extensions that the European Public Prosecutor calls unauthorised.',
      },
      {
        el: '28 Νοεμβρίου 2022 — τρεις μήνες πριν από τα Τέμπη — η Ευρωπαϊκή Εισαγγελία ανοίγει έρευνα. Στις 12 Δεκεμβρίου 2023 κατηγορεί 23 πρόσωπα (14 της ΕΡΓΟΣΕ, 4 της Διαχειριστικής Αρχής, 5 εκπροσώπους της κοινοπραξίας) για απάτη, ψευδή βεβαίωση και υπεξαίρεση, με ζημιά άνω των 15,6 εκατ. ευρώ.',
        en: '28 November 2022 — three months before Tempi — the European Public Prosecutor opens an investigation. On 12 December 2023 it charges 23 people (14 from ERGOSE, 4 from the EU-funds Managing Authority, 5 consortium representatives) with fraud, false certification and misappropriation, alleging damage over €15.6 million.',
      },
      {
        el: '25 Νοεμβρίου 2023: η Ολομέλεια της Βουλής, με μυστική ψηφοφορία, απορρίπτει τις προτάσεις για προανακριτική επιτροπή για δύο πρώην υπουργούς Μεταφορών.',
        en: '25 November 2023: Parliament’s plenary, by secret ballot, rejects motions for a preliminary inquiry into two former transport ministers.',
      },
      {
        el: '2 Ιουνίου 2025: νέες κατηγορίες κατά 16 προσώπων για περίπου 2,7 εκατ. ευρώ αποζημιώσεις «αδράνειας μηχανημάτων» που καταβλήθηκαν στην κοινοπραξία το 2019–2020 παρά τις ημιτελείς εργασίες — με έγκριση του υπουργού μετά από θετική γνώμη της ΕΡΓΟΣΕ.',
        en: '2 June 2025: further charges against 16 people over about €2.7 million in “machinery outage” compensation paid to the consortium in 2019–2020 despite incomplete works — approved by the minister after a positive ERGOSE opinion.',
      },
    ],
    outcome: {
      el: 'Καμία ποινική καταδίκη ακόμη. Πολιτικό δικαστήριο (966/2024) έκρινε ΟΣΕ και Hellenic Train υπεύθυνους για «βαριά αμέλεια» επειδή λειτουργούσαν τη γραμμή χωρίς την τηλεδιοίκηση που προβλεπόταν από το 2014.',
      en: 'No criminal conviction yet. A civil court (966/2024) held OSE and Hellenic Train liable for “serious negligence” for running the line without the remote control planned since 2014.',
    },
    breach: {
      el: 'Ένα σύστημα σηματοδότησης δεν είναι πολυτέλεια· είναι ο τρόπος με τον οποίο δύο τρένα δεν βρίσκονται στην ίδια γραμμή. Όταν η προθεσμία του γίνεται επτά παρατάσεις, και η Βουλή ψηφίζει μυστικά να μην ερευνηθούν οι υπουργοί, η ασφάλεια των επιβατών έχει γίνει διαδικαστικό ζήτημα.',
      en: 'A signalling system is not a luxury; it is how two trains are kept off the same track. When its deadline becomes seven extensions, and Parliament votes in secret not to investigate the ministers, passenger safety has become a procedural matter.',
    },
    patterns: ['late-safety', 'extensions', 'escaped'],
    safeguards: ['safety-clock', 'open-contract', 'named-vote'],
    counterfactual: {
      el: 'Το Ρολόι Ασφαλείας θα μετρούσε δημόσια κάθε μέρα καθυστέρησης από το 2016, με το όνομα όποιου υπέγραψε κάθε παράταση — επτά φορές. Η Ανοιχτή Σύμβαση θα είχε δείξει τις αποζημιώσεις για εργασίες που δεν είχαν γίνει. Και η Επώνυμη Ψήφος θα έκανε τη βουλευτική απόφαση να μην ερευνηθούν οι υπουργοί ορατή, με ονόματα.',
      en: 'The Safety Clock would have counted every day of delay publicly from 2016, with the name of whoever signed each extension — seven times. The Open Contract would have shown compensation paid for work not done. And the Named Vote would have made Parliament’s decision not to investigate the ministers visible, with names.',
    },
    antilogos: {
      el: 'Πρώην υπουργός υποστηρίζει ότι η αρχική σύμβαση του 2014 ήταν προβληματική — τέσσερις αρνητικές αποφάσεις του Ελεγκτικού Συνεδρίου, υλικά που δεν παράγονταν πια — οπότε ο επανασχεδιασμός ήταν αναπόφευκτος. Η καθυστέρηση διατρέχει τέσσερις ή πέντε κυβερνήσεις, και η καταιγίδα Daniel κατέστρεψε το τμήμα της Θεσσαλίας. Οι κατηγορίες αφορούν απάτη σε βάρος της ΕΕ, όχι το δυστύχημα.',
      en: 'A former minister argues the original 2014 contract was flawed — four adverse Court of Audit decisions, materials no longer made — so redesign was unavoidable. The delay spans four or five governments, and Storm Daniel destroyed the Thessaly section. The charges concern fraud against the EU, not the crash.',
    },
    reply: {
      el: 'Όλα αυτά μπορεί να είναι αληθινά — και ακριβώς γι’ αυτό έπρεπε να είναι δημόσια τότε, όχι να ανακαλύπτονται μετά από 57 θανάτους. Ένα ρολόι δεν αποφασίζει ποιος φταίει· δείχνει ότι κάποιος έπρεπε να απαντά κάθε μέρα που η γραμμή λειτουργούσε χωρίς το σύστημα που είχε πληρωθεί.',
      en: 'All of that may be true — which is exactly why it should have been public at the time, not discovered after 57 deaths. A clock does not decide who is at fault; it shows that someone had to answer every day the line ran without the system that had been paid for.',
    },
    lever: {
      el: 'Ζήτησε δημόσιο χάρτη με κάθε σύστημα ασφαλείας σιδηροδρόμων και δρόμων που καθυστερεί, με τις μέρες καθυστέρησης και την υπηρεσία που το οφείλει.',
      en: 'Ask for a public map of every delayed rail and road safety system, with the days of delay and the body that owes it.',
    },
    scores: { harm: 9, power: 9, recurrence: 8, remedy: 9 },
    status: {
      el: 'Η υπόθεση της Ευρωπαϊκής Εισαγγελίας βρίσκεται σε ανάκριση (Ιούλιος 2026) — όλοι οι ύποπτοι τεκμαίρονται αθώοι. Η Βουλή δεν επέτρεψε έρευνα για τους υπουργούς.',
      en: 'The European Public Prosecutor’s case is at the investigation stage (July 2026) — all suspects are presumed innocent. Parliament did not allow an investigation of the ministers.',
    },
    sources: [
      { title: 'EPPO — Charges against 23 suspects over railway signalling (2023)', url: 'https://www.eppo.europa.eu/en/media/news/greece-eppo-charges-23-suspects-crimes-involving-railway-signalling-systems' },
      { title: 'To Vima — Timeline of Contract 717 (2023)', url: 'https://www.tovima.gr/2023/03/03/society/tempi-to-xroniko-tis-symvasis-717-gia-simatodotisi-kai-tiledioikisi/' },
      { title: 'Lamia Report — Parliament rejects preliminary committee on Contract 717 (2023)', url: 'https://www.lamiareport.gr/ellada/item/271546-tempi-aporrifthike-apo-tin-olomeleia-tis-voulis-i-systasi-prokatarktikis-epitropis-gia-ti-symvasi-717/' },
      { title: 'Legal Post — EPPO brings additional charges (2025)', url: 'https://www.legalpost.eu/2025/06/greece-eppo-brings-additional-charges.html' },
      { title: 'Capital.gr — First court ruling links Contract 717 to the tragedy (2025)', url: 'https://www.capital.gr/epikairotita/3899798/i-proti-dikastiki-krisi-gia-ta-tempi-sundeei-ti-sumbasi-717-me-to-tragiko-apotelesma/' },
    ],
  },
  {
    id: 'siemens-greece-1997',
    when: '1997–2024',
    place: { el: 'Αθήνα', en: 'Athens' },
    title: {
      el: 'Ένας υπουργός Μεταφορών, ένας λογαριασμός στην Ελβετία, και μια δίκη είκοσι χρόνων που έληξε κυρίως με παραγραφή',
      en: 'A transport minister, a Swiss account, and a twenty-year trial that ended mostly in the statute of limitations',
    },
    harmed: { el: 'Το ελληνικό Δημόσιο και ο τότε κρατικός ΟΤΕ', en: 'The Greek state and the then state-owned telecoms company OTE' },
    plain: {
      el: 'Η Siemens φέρεται να πλήρωνε για να παίρνει δημόσιες συμβάσεις στην Ελλάδα. Ένας πρώην υπουργός καταδικάστηκε για ξέπλυμα. Στη μεγάλη δίκη του ΟΤΕ όμως, σχεδόν όλοι αθωώθηκαν — κυρίως επειδή οι πράξεις είχαν παραγραφεί — και ο πρώην επικεφαλής της Siemens Ελλάς δεν εκδόθηκε ποτέ από τη Γερμανία.',
      en: 'Siemens allegedly paid to win public contracts in Greece. One former minister was convicted of money laundering. But in the main OTE trial almost everyone was acquitted — mostly because the acts were time-barred — and the former head of Siemens Hellas was never extradited by Germany.',
    },
    facts: [
      {
        el: '1998 και 2000: ο τότε υπουργός Μεταφορών λαμβάνει 450.000 μάρκα (περίπου 230.000 ευρώ) από τη Siemens σε λογαριασμό στην Ελβετία — ποσό που το δικαστήριο αντιμετώπισε ως «δώρο» για την επιλογή της Siemens στη σύμβαση ψηφιοποίησης του ΟΤΕ του 1997.',
        en: '1998 and 2000: the then transport minister receives 450,000 German marks (about €230,000) from Siemens in a Swiss account — which the court treated as a “gift” for choosing Siemens in OTE’s 1997 digitalisation contract.',
      },
      {
        el: '5 Απριλίου 2012: η Siemens και το ελληνικό Δημόσιο ανακοινώνουν συμβιβασμό — παραίτηση από απαιτήσεις 80 εκατ., έως 90 εκατ. για προγράμματα κατά της διαφθοράς και πάνω από 100 εκατ. σε δραστηριότητα στην Ελλάδα. Η Βουλή τον επικυρώνει.',
        en: '5 April 2012: Siemens and the Greek state announce a settlement — €80 million of claims waived, up to €90 million for anti-corruption and academic programmes, and over €100 million of activity in Greece. Parliament ratifies it.',
      },
      {
        el: '11 Μαΐου 2018: το Πενταμελές Εφετείο Κακουργημάτων επικυρώνει με 4–1 την καταδίκη του πρώην υπουργού για ξέπλυμα, μειώνοντας την ποινή από 8 σε 5 χρόνια, εξαγοράσιμα με 140.000 ευρώ σε δόσεις.',
        en: '11 May 2018: the Five-Member Felony Appeals Court upholds the former minister’s money-laundering conviction 4–1, cutting the sentence from 8 to 5 years, convertible to €140,000 in instalments.',
      },
      {
        el: '19 Νοεμβρίου 2019: στη δίκη του ΟΤΕ (64 κατηγορούμενοι, 10 πέθαναν πριν την απόφαση) καταδικάζονται 22, απαλλάσσονται 27 λόγω παραγραφής και 5 κρίνονται αθώοι. Ο πρώην επικεφαλής της Siemens Ελλάς καταδικάζεται ερήμην — η Γερμανία είχε αρνηθεί την έκδοσή του.',
        en: '19 November 2019: in the OTE trial (64 defendants, 10 died before the verdict) 22 are convicted, 27 are cleared on limitation grounds and 5 are found not guilty. The former Siemens Hellas chief is convicted in absentia — Germany had refused to extradite him.',
      },
      {
        el: '26–27 Σεπτεμβρίου 2022: το Εφετείο αθωώνει 20 από τους 22, κυρίως επειδή οι πράξεις πριν το 2002 είχαν παραγραφεί. Την επομένη ο Εισαγγελέας του Αρείου Πάγου διατάσσει έρευνα για το αν κάποιος «συνέβαλε ουσιωδώς» στην παραγραφή.',
        en: '26–27 September 2022: the appeals court acquits 20 of the 22, mostly because acts before 2002 were time-barred. The next day the Supreme Court Prosecutor orders an inquiry into whether anyone “substantially contributed” to the limitation.',
      },
    ],
    outcome: {
      el: 'Ένας πρώην υπουργός καταδικάστηκε με εξαγοράσιμη ποινή· η μεγάλη δίκη έληξε σχεδόν ολοκληρωτικά με αθωώσεις και παραγραφή.',
      en: 'One former minister convicted with a convertible sentence; the main trial ended almost entirely in acquittals and limitation.',
    },
    breach: {
      el: 'Μια δημόσια σύμβαση πρέπει να κερδίζεται με την καλύτερη προσφορά, όχι με έναν λογαριασμό στο εξωτερικό. Και όταν η δικαιοσύνη χρειάζεται είκοσι χρόνια ώσπου ο χρόνος να σβήσει τις πράξεις, η παραγραφή δεν προστατεύει πια τον κατηγορούμενο από μια ατέρμονη δίκη· προστατεύει το σύστημα από την απάντηση.',
      en: 'A public contract should be won with the best offer, not an account abroad. And when justice takes twenty years until time erases the acts, limitation no longer protects a defendant from an endless trial; it protects the system from an answer.',
    },
    patterns: ['bribed-award', 'escaped'],
    safeguards: ['open-contract', 'prescription-clock'],
    counterfactual: {
      el: 'Το Ρολόι Παραγραφής θα έδειχνε δημόσια, χρόνο με τον χρόνο, πόσο απείχε η υπόθεση από την παραγραφή — και ποιος χειριζόταν κάθε αναβολή. Η Ανοιχτή Σύμβαση θα είχε κάνει ορατή την ανάθεση του 1997 και τις πληρωμές γύρω της.',
      en: 'The Limitation Clock would have shown publicly, year by year, how far the case was from expiry — and who handled each adjournment. The Open Contract would have made the 1997 award and the payments around it visible.',
    },
    antilogos: {
      el: 'Οι αθωώσεις του 2022 ήταν εν μέρει επί της ουσίας: το δικαστήριο έκρινε «μη αποδεδειγμένο» ότι δημόσιοι λειτουργοί πλούτισαν παράνομα. Ο πρώην υπουργός υποστήριξε ότι τα χρήματα ήταν προεκλογική χρηματοδότηση, όχι δωροδοκία, και ο συμβιβασμός έφερε στο Δημόσιο χρήματα χωρίς να χρειαστεί δίκη.',
      en: 'The 2022 acquittals were partly on the merits: the court found illegal enrichment of public servants “not proven.” The former minister argued the money was campaign funding, not a bribe, and the settlement brought the state money without a trial.',
    },
    reply: {
      el: 'Όσοι αθωώθηκαν είναι αθώοι. Αλλά η παραγραφή δεν είναι αθωότητα — είναι απουσία απάντησης, και τα 27 πρόσωπα που απαλλάχθηκαν έτσι δεν μάθαμε ποτέ αν ήταν ένοχα ή όχι. Ένα ορατό ρολόι δεν πιέζει τους δικαστές· εμποδίζει τον χρόνο να γίνει ο αόρατος κατηγορούμενος που πάντα κερδίζει.',
      en: 'Those acquitted are innocent. But limitation is not innocence — it is the absence of an answer, and for the 27 cleared that way we never learned whether they were guilty or not. A visible clock does not pressure judges; it stops time from becoming the invisible defendant who always wins.',
    },
    lever: {
      el: 'Ζήτησε κάθε δικαστική υπόθεση για δημόσια σύμβαση να δείχνει δημόσια την ημερομηνία παραγραφής της.',
      en: 'Ask that every court case over a public contract show its limitation date publicly.',
    },
    scores: { harm: 5, power: 8, recurrence: 8, remedy: 7 },
    status: {
      el: 'Κλειστή. Οι περισσότεροι κατηγορούμενοι είναι νομικά αθώοι — είτε αθωώθηκαν είτε η δίωξη έσβησε με παραγραφή, που δεν αποτελεί κρίση ενοχής.',
      en: 'Closed. Most defendants are legally innocent — acquitted, or the prosecution extinguished by limitation, which is not a finding of guilt.',
    },
    sources: [
      { title: 'Liberal — Former minister sentenced to 5 convertible years', url: 'https://www.liberal.gr/epikairotita/se-exagorasimi-poini-fylakisis-5-eton-katadikastike-o-tasos-mantelis' },
      { title: 'Siemens — Settlement agreement with the Hellenic Republic (2012)', url: 'https://press.siemens.com/global/en/pressrelease/siemens-and-hellenic-republic-reach-settlement-agreement-and-mark-new-beginning' },
      { title: 'Keep Talking Greece — Siemens scandal court ruling (2019)', url: 'https://www.keeptalkinggreece.com/2019/11/19/siemens-scandal-greece-court-ruling/' },
      { title: 'Keep Talking Greece — Siemens appeal acquittals (2022)', url: 'https://www.keeptalkinggreece.com/2022/09/26/siemens-scandal-greece-acquital-court/' },
      { title: 'EfSyn — Supreme Court intervention over the acquittals (2022)', url: 'https://www.efsyn.gr/ellada/dikaiosyni/360858_parembasi-areioy-pagoy-gia-ti-skandalodi-athoosi-olon-gia-ta-mayra-tameia/' },
    ],
  },
  {
    id: 'construction-cartel-2017',
    when: '1989–2019',
    place: { el: 'Ελλάδα, πανελλαδικά', en: 'Greece, nationwide' },
    title: {
      el: 'Ποιος κερδίζει τον διαγωνισμό αποφασιζόταν πριν από τον διαγωνισμό: το καρτέλ των κατασκευαστών που οι αναθέτουσες αρχές δεν εντόπισαν ποτέ',
      en: 'Who won the tender was decided before the tender: the contractors’ cartel the awarding authorities never caught',
    },
    harmed: {
      el: 'Οι Έλληνες φορολογούμενοι και έργα συγχρηματοδοτούμενα από την ΕΕ — μετρό, προαστιακός, σιδηρόδρομοι, οδικοί άξονες, παραχωρήσεις',
      en: 'Greek taxpayers and EU co-funded projects — metro, suburban rail, railways, road axes, concessions',
    },
    plain: {
      el: 'Οι μεγαλύτερες κατασκευαστικές εταιρείες της χώρας συμφωνούσαν από πριν ποιος θα κερδίσει κάθε διαγωνισμό και με ποια έκπτωση — συνήθως μηδενική. Η Επιτροπή Ανταγωνισμού τις επέβαλε πρόστιμα 80,7 εκατ. ευρώ για το 2005–2012· για τα προηγούμενα χρόνια, τα αδικήματα είχαν παραγραφεί.',
      en: 'The country’s largest construction firms agreed in advance who would win each tender and at what discount — usually zero. The Competition Commission fined them €80.7 million for 2005–2012; for the earlier years, the offences were time-barred.',
    },
    facts: [
      {
        el: 'Φεβρουάριος 2013: η Επιτροπή Ανταγωνισμού κάνει αιφνιδιαστικούς ελέγχους σε κατασκευαστικές εταιρείες· η έρευνα διευρύνεται μέσα σε τρία χρόνια.',
        en: 'February 2013: the Hellenic Competition Commission raids construction firms; over three years the probe widens.',
      },
      {
        el: '20 Μαΐου 2016: ενώ η έρευνα είναι σε εξέλιξη, κυβερνητικό νομοσχέδιο προτείνει η πληρωμή προστίμου της Επιτροπής να «εξαλείφει τον ποινικό χαρακτήρα» των αδικημάτων — διάταξη που επικρίθηκε ως φωτογραφική.',
        en: '20 May 2016: while the probe is live, a government bill proposes that paying a Commission cartel fine would “erase the criminal character” of the offences — criticised as tailor-made for this case.',
      },
      {
        el: 'Αύγουστος 2017: η Επιτροπή επιβάλλει με διαδικασία διευθέτησης πρόστιμα περίπου 80,7 εκατ. ευρώ για το 2005–2012 — ΑΚΤΩΡ 38,5 εκατ., ΤΕΡΝΑ 18,6 εκατ., J&P ΑΒΑΞ 18,3 εκατ., Intrakat 4,3 εκατ. Η εταιρεία που αποκάλυψε το καρτέλ με αίτηση επιείκειας δεν πλήρωσε τίποτα.',
        en: 'August 2017: through a settlement procedure the Commission fines the firms about €80.7 million for 2005–2012 — AKTOR €38.5m, TERNA €18.6m, J&P AVAX €18.3m, Intrakat €4.3m. The firm that revealed the cartel under leniency paid nothing.',
      },
      {
        el: 'Η μέθοδος, όπως τη δέχθηκαν οι εταιρείες: οι μεγάλοι εργολάβοι προσυμφωνούσαν τον νικητή και την έκπτωση, οι άλλοι κατέθεταν προσφορές-«βιτρίνα» ή απείχαν έναντι ανταλλάγματος, και τα έργα εκτελούνταν από κοινού.',
        en: 'The method, as the firms accepted: the top contractors pre-agreed the winner and the discount, the others submitted cover bids or stayed out for compensation, and the works were then carried out jointly.',
      },
      {
        el: 'Μάρτιος 2019: δεύτερη απόφαση διαπιστώνει ότι πολύ περισσότερες εταιρείες συμμετείχαν στη νόθευση διαγωνισμών το 1989–2000 — χωρίς πρόστιμα, λόγω παραγραφής.',
        en: 'March 2019: a second decision finds many more firms took part in bid-rigging in 1989–2000 — with no fines, because of the limitation period.',
      },
    ],
    outcome: {
      el: 'Διοικητικά πρόστιμα περίπου 80,7 εκατ. ευρώ με έκπτωση διευθέτησης· δεν βρέθηκαν ποινικές καταδίκες προσώπων.',
      en: 'Administrative fines of about €80.7 million with a settlement discount; no criminal convictions of individuals found.',
    },
    breach: {
      el: 'Ο διαγωνισμός υπάρχει για να πληρώνει το Δημόσιο την πραγματική τιμή ενός έργου, όχι αυτή που συμφώνησαν μεταξύ τους όσοι θα το χτίσουν. Είκοσι τρία χρόνια στημένων διαγωνισμών σημαίνουν ότι κάθε μετρό, κάθε δρόμος, κάθε σταθμός πληρώθηκε σε τιμή καρτέλ — από όλους μας.',
      en: 'A tender exists so the state pays the real price of a work, not the one agreed among those who will build it. Twenty-three years of rigged tenders mean every metro, road and station was paid for at a cartel price — by all of us.',
    },
    patterns: ['rigged-bid', 'escaped'],
    safeguards: ['bid-screen', 'prescription-clock'],
    counterfactual: {
      el: 'Ο Ανιχνευτής Στημένων Διαγωνισμών θα είχε δει το αποτύπωμα από τα πρώτα χρόνια: ίδιοι νικητές με τη σειρά, μηδενικές εκπτώσεις, οι ίδιοι «χαμένοι» σε κάθε διαγωνισμό. Το Ρολόι Παραγραφής θα έδειχνε ότι τα αδικήματα του 1989–2000 έσβηναν πριν κανείς τα εξετάσει.',
      en: 'The Rigged-Tender Screen would have seen the fingerprint from the early years: the same winners in rotation, zero discounts, the same “losers” in every tender. The Limitation Clock would have shown the 1989–2000 offences expiring before anyone examined them.',
    },
    antilogos: {
      el: 'Η ΑΚΤΩΡ χαρακτήρισε το πρόστιμο «άδικο»· άλλες εταιρείες είπαν ότι συμβιβάστηκαν για να τελειώσει η αβεβαιότητα, όχι ως ομολογία. Το καρτέλ αποκαλύφθηκε επειδή μια εταιρεία ομολόγησε — το σύστημα λειτούργησε εν μέρει — και καμία απόφαση δεν βρήκε δωροδοκία δημόσιου λειτουργού.',
      en: 'AKTOR called the fine “unjust”; other firms said they settled to end uncertainty, not as an admission. The cartel was exposed because a firm confessed — the system partly worked — and no decision found any official bribed.',
    },
    reply: {
      el: 'Το σύστημα λειτούργησε όταν ένας από τους συμμετέχοντες αποφάσισε να μιλήσει — είκοσι τέσσερα χρόνια μετά. Η πρόταση δεν περιμένει ομολογία: τα δεδομένα των διαγωνισμών υπάρχουν ήδη, και ένας ανοιχτός έλεγχός τους βλέπει το μοτίβο χωρίς να χρειάζεται να κατηγορήσει κανέναν.',
      en: 'The system worked when one participant decided to talk — twenty-four years later. The proposal does not wait for a confession: tender data already exists, and an open screen sees the pattern without needing to accuse anyone.',
    },
    lever: {
      el: 'Ζήτησε κάθε δημόσιος διαγωνισμός έργου να δημοσιεύει όλες τις προσφορές και τις εκπτώσεις, όχι μόνο τον νικητή.',
      en: 'Ask that every public-works tender publish all bids and discounts, not only the winner.',
    },
    scores: { harm: 6, power: 8, recurrence: 9, remedy: 9 },
    status: {
      el: 'Διοικητική υπόθεση ανταγωνισμού, διευθετημένη το 2017· οι εταιρείες δεν έχουν «καταδικαστεί» ποινικά. Δεν επιβεβαιώθηκε αν ακολούθησαν προσφυγές ή ποινική δίωξη.',
      en: 'An administrative competition case, settled in 2017; the firms are not criminally “convicted.” Whether appeals or criminal proceedings followed was not confirmed.',
    },
    sources: [
      { title: 'The Press Project — €80m fine for a 30-year contractors’ cartel', url: 'https://www.thepressproject.gr/article/114972/Prostimo-80-ekat-euro-gia-30-xronia-kartel-stous-ergolabous' },
      { title: 'Energypress — Fines on the largest construction firms and their responses (2017)', url: 'https://energypress.gr/news/prostima-epevale-i-epitropi-antagonismoy-stoys-megaloys-ton-kataskeyon-ti-apantoyn-oi-etaireies' },
      { title: 'EfSyn — Final fine on the cartel (2017)', url: 'https://www.efsyn.gr/oikonomia/elliniki-oikonomia/119601_oristiko-prostimo-sto-kartel/' },
      { title: 'EfSyn — Criminal immunity for the contractors’ cartel (2016)', url: 'https://www.efsyn.gr/politiki/kybernisi/69508_poiniki-asylia-gia-kartel-ton-ergolabon/' },
      { title: 'Mononews — Who escaped the fine because of limitation (2019)', url: 'https://www.mononews.gr/business/pii-glitosan-to-prostimo-apo-tin-epitropi-antagonismou-gia-kartel-stis-kataskeves-logo-paragrafis' },
    ],
  },
  {
    id: 'mandra-2017',
    when: '2017–2025',
    place: { el: 'Μάνδρα, Δυτική Αττική', en: 'Mandra, West Attica' },
    title: {
      el: 'Μια «απροστάτευτη πόλη»: ο δήμος, η πολεοδομία και η υπηρεσία ρεμάτων άφησαν σπίτια πάνω στην κοίτη ενός ρέματος',
      en: 'An “unprotected city”: the municipality, the planning office and the stream service left homes standing in a streambed',
    },
    harmed: { el: '24 νεκροί (25 κατά μεταγενέστερες δικαστικές αναφορές)', en: '24 dead (25 in later court reports)' },
    plain: {
      el: 'Τον Νοέμβριο 2017 μια ξαφνική πλημμύρα σάρωσε τη Μάνδρα. Τα αντιπλημμυρικά έργα δεν είχαν ολοκληρωθεί και σπίτια είχαν χτιστεί παράνομα πάνω στην κοίτη του ρέματος. Οκτώ χρόνια δικών κατέληξαν σε τρεις ποινές με αναστολή για «πρόκληση πλημμύρας» — και σε καμία καταδίκη για τους θανάτους.',
      en: 'In November 2017 a flash flood swept through Mandra. Flood-protection works had not been finished and homes had been built illegally in the streambed. Eight years of trials ended in three suspended sentences for “causing a flood” — and no conviction for the deaths.',
    },
    facts: [
      {
        el: '16 Ιουνίου 2022: σε πρώτο βαθμό η τότε περιφερειάρχης Αττικής αθωώνεται κατά πλειοψηφία, 12 ακόμη αθωώνονται και 8 καταδικάζονται για πλημμελήματα. Η κατηγορία υποστήριζε ότι δεν προγραμμάτισε και δεν ολοκλήρωσε βασικά αντιπλημμυρικά έργα.',
        en: '16 June 2022: at first instance the then Attica regional governor is acquitted by majority, 12 others are acquitted and 8 are convicted of misdemeanours. The prosecution had argued she failed to schedule and complete key flood-protection works.',
      },
      {
        el: '29 Οκτωβρίου 2024: το Τριμελές Εφετείο καταδικάζει 3 από τους 8 — την τότε δήμαρχο, τον προϊστάμενο της πολεοδομίας Ελευσίνας και υπάλληλο της υπηρεσίας ρεμάτων — μόνο για πλημμύρα από αμέλεια, με 14 και 18 μήνες με αναστολή. Όλοι αθωώνονται για ανθρωποκτονία από αμέλεια.',
        en: '29 October 2024: the Three-Member Appeals Court convicts 3 of the 8 — the then mayor, the Elefsina planning chief and a regional stream-service official — only of causing a flood by negligence, with 14 and 18 months suspended. All are acquitted of negligent homicide.',
      },
      {
        el: 'Η πρόεδρος του δικαστηρίου χαρακτηρίζει τη Μάνδρα «απροστάτευτη πόλη» και κρίνει ότι συνέβαλαν κτίρια χτισμένα παράνομα στην κοίτη του ρέματος· απορρίπτει την υπεράσπιση ότι τα κτίρια ήταν «κληρονομημένα».',
        en: 'The presiding judge calls Mandra an “unprotected city” and finds that buildings illegally built in the streambed contributed; she rejects the defence that the buildings were “inherited.”',
      },
      {
        el: 'Η έφεση του εισαγγελέα κατά των υπολοίπων αθωωθέντων — ανάμεσά τους η περιφερειάρχης — κρίνεται εκπρόθεσμη, οπότε δεν ξαναδικάστηκαν ποτέ.',
        en: 'The prosecutor’s appeal against the others acquitted — the regional governor among them — is ruled out of time, so they were never retried.',
      },
      {
        el: '2 Ιουλίου 2025: αφού ο Άρειος Πάγος αναιρεί την αθώωση για ανθρωποκτονία μετά από προσφυγή των οικογενειών, ξεκινά τρίτη δίκη για τους 3 — ενώ η οκταετής παραγραφή λήγει τον Νοέμβριο 2025.',
        en: '2 July 2025: after the Supreme Court annuls the homicide acquittal on the families’ appeal, a third trial of the 3 begins — while the eight-year limitation period expires in November 2025.',
      },
    ],
    outcome: {
      el: 'Τρεις ποινές πλημμελήματος με αναστολή για «πρόκληση πλημμύρας»· για τους θανάτους δεν καταδικάστηκε κανείς.',
      en: 'Three suspended misdemeanour sentences for “causing a flood”; no one was convicted for the deaths.',
    },
    breach: {
      el: 'Τα αντιπλημμυρικά έργα και η οριοθέτηση των ρεμάτων υπάρχουν για να μη μπαίνει το νερό στα σπίτια. Όταν τα έργα μένουν στα χαρτιά, όταν χτίζεται πάνω στην κοίτη και όταν η έφεση για τους ανώτερους χάνεται επειδή κατατέθηκε αργά, η ευθύνη πέφτει στα χαμηλότερα σκαλιά — και ο χρόνος σβήνει τα υπόλοιπα.',
      en: 'Flood works and stream boundaries exist so water does not enter homes. When the works stay on paper, when building happens in the streambed, and when the appeal against the higher-ups is lost because it was filed late, responsibility falls to the lowest rungs — and time erases the rest.',
    },
    patterns: ['late-safety', 'neglected-maintenance', 'escaped'],
    safeguards: ['safety-clock', 'health-register', 'prescription-clock'],
    counterfactual: {
      el: 'Το Ρολόι Ασφαλείας θα έδειχνε δημόσια πόσα χρόνια καθυστερούσαν τα αντιπλημμυρικά της Μάνδρας και ποια υπηρεσία τα όφειλε. Το Μητρώο Υγείας Έργων θα είχε καταγράψει τα ρέματα με κτίσματα στην κοίτη τους. Και το Ρολόι Παραγραφής θα είχε προειδοποιήσει ότι η υπόθεση έτρεχε προς τη λήξη της.',
      en: 'The Safety Clock would have shown publicly how many years Mandra’s flood works were late and which body owed them. The Structure Health Register would have logged the streams with buildings in their beds. And the Limitation Clock would have warned that the case was running out of time.',
    },
    antilogos: {
      el: 'Η περιφερειάρχης αθωώθηκε και είναι νομικά αθώα· τα δικαστήρια απέδωσαν ευθύνες σε τοπικούς υπαλλήλους, όχι σε κορυφαίους πολιτικούς. Η αυθαίρετη δόμηση στην κοίτη προϋπήρχε της δημάρχου κατά δεκαετίες.',
      en: 'The regional governor was acquitted and is legally innocent; the courts placed liability on local officials, not top politicians. The illegal building in the streambed predated the mayor by decades.',
    },
    reply: {
      el: 'Γι’ αυτό ακριβώς η πρόταση δεν στοχεύει πρόσωπα αλλά ρολόγια. Αν τα αυθαίρετα στην κοίτη προϋπήρχαν δεκαετίες, τότε δεκαετίες υπηρεσιών τα έβλεπαν — και ένα δημόσιο μητρώο θα έκανε αυτή τη γνώση αδύνατο να αγνοηθεί, πριν γίνει δίκη χωρίς απάντηση.',
      en: 'That is exactly why the proposal targets clocks, not people. If the buildings in the streambed stood for decades, then decades of agencies saw them — and a public register would have made that knowledge impossible to ignore, before it became a trial without an answer.',
    },
    lever: {
      el: 'Ζήτησε από την περιφέρειά σου δημόσιο χάρτη των ρεμάτων με εκκρεμή αντιπλημμυρικά έργα και κτίσματα στην κοίτη τους.',
      en: 'Ask your region for a public map of streams with pending flood works and buildings in their beds.',
    },
    scores: { harm: 9, power: 6, recurrence: 8, remedy: 8 },
    status: {
      el: 'Στις 28 Αυγούστου 2025 το Τριμελές Εφετείο Πλημμελημάτων αθώωσε ομόφωνα και τους τρεις για ανθρωποκτονία από αμέλεια. Είναι νομικά αθώοι για τους θανάτους, όπως και όλοι οι αθωωθέντες.',
      en: 'On 28 August 2025 the Three-Member Misdemeanour Appeals Court unanimously acquitted all three of negligent homicide. They are legally innocent of the deaths, as are all those acquitted.',
    },
    sources: [
      { title: 'To Vima — Greek court convicts three for role in Mandra floods (2024)', url: 'https://www.tovima.com/society/greek-court-convicts-three-for-role-in-mandra-floods/amp/' },
      { title: 'Powergame — Mandra: three back in the dock (2025)', url: 'https://www.powergame.gr/ellada/988603/mandra-xana-sto-edolio-3-atoma-gia-ti-foniki-plimmyra/' },
      { title: 'in.gr — First-instance verdict on Mandra (2022)', url: 'https://www.in.gr/2022/06/16/politics/nd-gia-mandra-kai-athoosi-dourou-paramenoun-oi-politikes-eythynes/' },
      { title: 'Proto Thema — Unanimous acquittal of the three on appeal (2025)', url: 'https://www.protothema.gr/greece/article/1688007/mandra-omofoni-athoosi-ton-trion-katigoroumenon-apo-to-trimeles-efeteio-plimmelimaton/' },
    ],
  },
  {
    id: 'novi-sad-2024',
    when: '2018–2026',
    place: { el: 'Νόβι Σαντ, Σερβία', en: 'Novi Sad, Serbia' },
    title: {
      el: 'Ένας σταθμός που ξανάνοιξε, ένα στέγαστρο που έπεσε: το υπουργείο Κατασκευών και Μεταφορών και η κρατική εταιρεία σιδηροδρομικής υποδομής στο εδώλιο',
      en: 'A station that reopened, a canopy that fell: the construction and transport ministry and the state rail-infrastructure company in the dock',
    },
    harmed: { el: '16 νεκροί και ένας βαριά τραυματίας', en: '16 dead and one seriously injured' },
    plain: {
      el: 'Ο κεντρικός σταθμός του Νόβι Σαντ ανακαινίστηκε στο πλαίσιο σύμβασης με κινεζική κοινοπραξία, που η κυβέρνηση δημοσίευσε μόνο εν μέρει. Την 1η Νοεμβρίου 2024 το τσιμεντένιο στέγαστρο κατέρρευσε σκοτώνοντας 16 ανθρώπους. Ακολούθησαν μήνες μαζικών διαδηλώσεων και μια δίκη που σταμάτησε και ξεκίνησε ξανά.',
      en: 'Novi Sad’s main station was renovated under a contract with a Chinese consortium that the government published only in part. On 1 November 2024 its concrete canopy collapsed, killing 16. Months of mass protests followed, and a trial that stopped and restarted.',
    },
    facts: [
      {
        el: '28 Μαΐου 2018: υπογράφεται η συμφωνία ανακατασκευής με κοινοπραξία της China Railway International και της China Communications Construction· η κυβέρνηση δημοσίευσε αργότερα τα έγγραφα μόνο εν μέρει, και η σύμβαση του Μαΐου 2018 έλειπε.',
        en: '28 May 2018: the reconstruction agreement is signed with a China Railway International / China Communications Construction joint venture; the government later published the records only in part, and the May 2018 contract was missing.',
      },
      {
        el: 'Οκτώβριος 2023 – Ιούλιος 2024: μια εκτίμηση κόστους μιλούσε για περίπου 4 εκατ. ευρώ, ενώ ο υπουργός δήλωσε ότι δαπανήθηκαν 65 εκατ. — δεν είναι σαφές αν τα δύο ποσά αφορούν το ίδιο αντικείμενο.',
        en: 'October 2023 – July 2024: one cost estimate spoke of about €4 million, while the minister said €65 million had been spent — it is unclear whether the two figures cover the same scope.',
      },
      {
        el: '1 Νοεμβρίου 2024: το στέγαστρο του σταθμού καταρρέει· 16 νεκροί. Ο υπουργός παραιτείται λίγες μέρες μετά.',
        en: '1 November 2024: the station canopy collapses; 16 dead. The minister resigns days later.',
      },
      {
        el: '30 Δεκεμβρίου 2024: πρώτο κατηγορητήριο κατά 13 προσώπων — ανάμεσά τους ο πρώην υπουργός, δύο διευθυντές της κρατικής εταιρείας υποδομής και μηχανικοί. Τον Απρίλιο 2025 το Ανώτερο Δικαστήριο το επιστρέφει για περισσότερα στοιχεία· τον Μάρτιο 2025 κατηγορούνται χωριστά 3 αξιωματούχοι στο Βελιγράδι.',
        en: '30 December 2024: a first indictment of 13 — among them the former minister, two directors of the state infrastructure company and engineers. In April 2025 the Higher Court returns it for more evidence; in March 2025 3 officials are separately indicted in Belgrade.',
      },
      {
        el: '13 Ιουλίου 2026: το Εφετείο του Νόβι Σαντ ανατρέπει απόφαση που είχε σταματήσει τη διαδικασία για 6 κατηγορουμένους, ανάμεσά τους τον πρώην υπουργό· η δίκη τους συνεχίζεται για βαριά εγκλήματα κατά της γενικής ασφάλειας και παράνομη κατασκευή.',
        en: '13 July 2026: the Novi Sad Appeals Court overturns a decision that had halted proceedings against 6 defendants, the former minister among them; their trial resumes for serious crimes against general safety and illegal construction.',
      },
    ],
    outcome: {
      el: 'Κανείς δεν έχει καταδικαστεί· η δίκη ξαναρχίζει.',
      en: 'No one has been convicted; the trial is resuming.',
    },
    breach: {
      el: 'Ένας σταθμός είναι ο χώρος όπου περιμένουν όλοι — μαθητές, εργαζόμενοι, ηλικιωμένοι. Όταν η σύμβαση ανακαίνισής του λείπει από τα δημοσιευμένα έγγραφα, όταν το κόστος του δεν εξηγείται και όταν ξανανοίγει πριν ελεγχθεί πλήρως, αυτοί που περιμένουν δεν ξέρουν τι κρέμεται πάνω από τα κεφάλια τους.',
      en: 'A station is where everyone waits — students, workers, the elderly. When its renovation contract is missing from the published records, when its cost is unexplained and when it reopens before full inspection, the people waiting do not know what hangs over their heads.',
    },
    patterns: ['opened-uncertified', 'cost-overrun', 'ignored-engineer'],
    safeguards: ['opening-seal', 'cost-mirror', 'engineer-voice'],
    counterfactual: {
      el: 'Η Σφραγίδα Παράδοσης θα είχε εμποδίσει τα εγκαίνια χωρίς ανεξάρτητο, δημοσιευμένο πιστοποιητικό για ολόκληρο το κτίριο — και το στέγαστρο. Το Κάτοπτρο Κόστους θα είχε απαιτήσει εξήγηση για το χάσμα 4 και 65 εκατ. Και η Φωνή του Μηχανικού θα είχε κρατήσει με ημερομηνία κάθε προειδοποίηση για πρόσθετα φορτία.',
      en: 'The Opening Seal would have blocked the reopening without an independent, published certificate for the whole building — canopy included. The Cost Mirror would have demanded an explanation for the €4m versus €65m gap. And the Engineer’s Voice would have kept any warning about added loads, with a date.',
    },
    antilogos: {
      el: 'Οι κινέζοι ανάδοχοι λένε ότι το στέγαστρο δεν περιλαμβανόταν στο αντικείμενο της άδειας του 2021· ένας μηχανικός που εργάστηκε στο έργο ως το 2023 λέει ότι περιλαμβανόταν και ότι τα πρόσθετα φορτία το έριξαν — ζήτημα αμφισβητούμενο, όχι δικαστικό εύρημα. Τα δικαστήρια επιβράδυναν την υπόθεση για λόγους αποδείξεων, που μπορεί να δείχνουν αδύναμους φακέλους, όχι πολιτική καθυστέρηση.',
      en: 'The Chinese contractors say the canopy was outside the scope of the 2021 permit; an engineer who worked on the project until 2023 says it was inside, and that added loads brought it down — a disputed claim, not a court finding. Courts slowed the case on evidentiary grounds, which may reflect weak files, not political delay.',
    },
    reply: {
      el: 'Ακριβώς: αν ούτε οι ίδιοι οι συμμετέχοντες συμφωνούν αν το στέγαστρο ήταν μέρος του έργου, τότε κανείς δεν το είχε ελέγξει ως τέτοιο. Η Σφραγίδα Παράδοσης δεν ρωτά σε ποιο συμβόλαιο ανήκει ένα στέγαστρο· ρωτά αν κάποιος υπέγραψε ότι αντέχει, πριν σταθούν άνθρωποι από κάτω.',
      en: 'Exactly: if not even the participants agree whether the canopy was part of the project, then no one checked it as such. The Opening Seal does not ask which contract a canopy belongs to; it asks whether someone signed that it holds, before people stand beneath it.',
    },
    lever: {
      el: 'Ζήτησε κάθε δημόσιο κτίριο να ανοίγει μετά από ανακαίνιση μόνο με δημοσιευμένο πιστοποιητικό ασφαλείας για ολόκληρο το κτίριο.',
      en: 'Ask that every public building reopen after renovation only with a published safety certificate for the whole building.',
    },
    scores: { harm: 9, power: 8, recurrence: 7, remedy: 8 },
    status: {
      el: 'Ανοιχτή — κανείς δεν έχει καταδικαστεί. Όλοι οι κατηγορούμενοι τεκμαίρονται αθώοι.',
      en: 'Open — no one has been convicted. All defendants are presumed innocent.',
    },
    sources: [
      { title: 'European Western Balkans — No progress in multiple investigations (2025)', url: 'https://europeanwesternbalkans.com/2025/07/10/no-progress-in-multiple-investigations-eight-months-since-the-novi-sad-tragedy/' },
      { title: 'Tanjug — Novi Sad Appeals Court upholds indictment (2026)', url: 'https://www.tanjug.rs/english/society/265852/novi-sad-appeals-court-upholds-indictment-in-railway-station-tragedy-case/amp' },
      { title: 'RFE/RL — Victims of the Novi Sad station tragedy', url: 'https://www.rferl.org/a/serbia-train-station-tragedy-victims-novi-sad/33184844.html' },
    ],
  },
]
