// ΑΡΙΣΤΕΙΔΗΣ — cases 1–5: three Greek, the European Parliament, Nigeria. Facts
// checked against sources on 2026-09-30. Offices in headlines; people who are
// charged but not convicted are never named (Hard Rule 6, presumption of
// innocence).

import type { ToolCase } from '../types'

export const CASES_A: readonly ToolCase[] = [
  {
    id: 'greece-census-2010',
    when: '2010–2019',
    place: { el: 'Ελλάδα', en: 'Greece' },
    title: {
      el: 'Το κράτος που δεν ήξερε τη μισθοδοσία του: το υπουργείο Εσωτερικών μετρά για πρώτη φορά τους δημοσίους υπαλλήλους (2010)',
      en: 'The state that did not know its own payroll: the interior ministry counts its civil servants for the first time (2010)',
    },
    harmed: {
      el: 'Οι φορολογούμενοι, που πλήρωναν μισθολογικό κόστος που κανείς δεν μπορούσε να ελέγξει· οι υποψήφιοι που προσπερνιούνταν από προσλήψεις-ρουσφέτια· οι πολίτες που εξυπηρετούνταν από μια κομματικοποιημένη διοίκηση',
      en: 'Taxpayers, funding a wage bill no one could audit; candidates passed over by patronage hires; citizens served by a politicised administration',
    },
    plain: {
      el: 'Ως το 2010, το ελληνικό κράτος δεν ήξερε πόσους ανθρώπους πλήρωνε. Η πρώτη απογραφή μέτρησε 768.009 πρόσωπα σε δύο μήνες. Η Ευρωπαϊκή Επιτροπή περιγράφει «υψηλό επίπεδο πελατειακών σχέσεων σε όλα τα επίπεδα» — με την πύλη εισόδου να είναι οι προσωρινές συμβάσεις, όχι οι διαγωνισμοί του ΑΣΕΠ.',
      en: 'Until 2010 the Greek state did not know how many people it paid. The first census counted 768,009 people in two months. The European Commission describes “a high level of clientelism across all levels” — with the entry gate being temporary contracts, not ASEP competitions.',
    },
    facts: [
      {
        el: '30 Ιουλίου 2010: το υπουργείο Εσωτερικών δημοσιεύει τα πρώτα αποτελέσματα της απογραφής — 768.009 μοναδικά πρόσωπα που πληρώνονται από το κράτος, από τα οποία 82% μόνιμοι, 7% αορίστου και 6% ορισμένου χρόνου.',
        en: '30 July 2010: the interior ministry publishes the first census results — 768,009 unique people paid by the state, of whom 82% permanent, 7% indefinite-contract and 6% fixed-term.',
      },
      {
        el: 'Κατά μελέτη της Ευρωπαϊκής Επιτροπής, πριν από την κρίση «το κράτος δεν ήξερε τον ακριβή αριθμό των δημοσίων υπαλλήλων, το μισθολογικό κόστος ή τους τομείς ευθύνης», και η απογραφή «ξεκαθάρισε για πρώτη φορά» το μέγεθος της διοίκησης.',
        en: 'According to a European Commission paper, before the crisis “the state did not know the exact number of the public servants, its wage costs or the responsibility areas,” and the census “clarified for the first time” the administration’s size.',
      },
      {
        el: 'Η ίδια μελέτη περιγράφει «υψηλό επίπεδο πελατειακών σχέσεων σε όλα τα επίπεδα»: κάθε νικητής των εκλογών γέμιζε τη διοίκηση με πολιτικά πρόσωπα και νέες θέσεις «χωρίς συγκεκριμένες ανάγκες» — «ακραία κομματικοποίηση του διοικητικού συστήματος».',
        en: 'The same paper describes “a high level of clientelism across all levels”: each election winner filled the administration with political appointees and new posts “not based on specific needs” — “an extreme politicisation of the administrative system.”',
      },
      {
        el: 'Μελέτη του 2018 για την Κομισιόν σημειώνει ότι δήμαρχοι και περιφερειάρχες «έτειναν να υπερβαίνουν τις δαπάνες προσλαμβάνοντας πλεονάζον προσωπικό, όπως προσωρινούς, σε μια τυπική ανταλλαγή θέσεων για ψήφους», και ότι οι βραχυχρόνιες πελατειακές προσλήψεις είναι «διάχυτες».',
        en: 'A 2018 study for the Commission notes mayors and regional governors “tended to overspend by hiring excess administrative personnel, such as temporary employees, in a typical public jobs-for-votes exchange,” and that short-term patronage hiring is “rampant.”',
      },
      {
        el: '2009–2018: με πάγωμα προσλήψεων και κανόνα αποχωρήσεων, το προσωπικό της δημόσιας διοίκησης μειώνεται 25%, από 907.973 σε 685.170, και οι προσωρινοί κατά 55%· δημιουργείται ενιαία αρχή πληρωμής που διασταυρώνει τους δικαιούχους με την απογραφή.',
        en: '2009–2018: with a hiring freeze and an attrition rule, public-administration staff fall 25%, from 907,973 to 685,170, and temporary staff by 55%; a single payment authority is created to cross-check payees against the census.',
      },
    ],
    outcome: {
      el: 'Η απογραφή έγινε μόνιμο μητρώο συνδεδεμένο με ενιαία μισθοδοσία· το 2019 επιλέχθηκαν για πρώτη φορά 90 γενικοί διευθυντές με κοινή διαδικασία.',
      en: 'The census became a permanent register linked to a single payroll; in 2019, 90 directors-general were chosen through a common process for the first time.',
    },
    breach: {
      el: 'Μια δημόσια υπηρεσία υπάρχει για τον πολίτη, όχι για όποιον κέρδισε τις εκλογές. Όταν το κράτος δεν ξέρει καν πόσους πληρώνει, κάθε θέση μπορεί να γίνει αντάλλαγμα — και ο πολίτης πληρώνει δύο φορές: ως φορολογούμενος και ως εξυπηρετούμενος.',
      en: 'A public service exists for the citizen, not for whoever won the election. When the state does not even know how many it pays, every post can become currency — and the citizen pays twice: as taxpayer and as the person being served.',
    },
    patterns: ['bypass-exam', 'party-appointments'],
    safeguards: ['staff-register', 'open-hiring', 'merit-boards'],
    counterfactual: {
      el: 'Το Δημόσιο Μητρώο Θέσεων θα υπήρχε δεκαετίες πριν από την κρίση — και θα έδειχνε κάθε κύμα προσωρινών προσλήψεων πριν από εκλογές. Η Ανοιχτή Πρόσληψη θα είχε κλείσει την πύλη των «προσωρινών για μόνιμες ανάγκες», και οι Διοικήσεις με Αξιοκρατία θα είχαν κρατήσει τις ανώτερες θέσεις μακριά από κάθε νέα κυβέρνηση.',
      en: 'The Public Post Register would have existed decades before the crisis — and shown every wave of temporary hires before elections. Open Hiring would have closed the gate of “temporary staff for permanent needs,” and Boards by Merit would have kept senior posts away from each new government.',
    },
    antilogos: {
      el: 'Η είσοδος στη μόνιμη δημοσιοϋπαλληλία ήταν ήδη αξιοκρατική μέσω ΑΣΕΠ· το ρουσφέτι περνούσε κυρίως από προσωρινές συμβάσεις και διορισμούς. Η μεταρρύθμιση αποδείχθηκε εφικτή — και μέρος της ανατράπηκε το 2019, όταν επανήλθαν πολιτικά διοριζόμενοι γενικοί γραμματείς.',
      en: 'Entry to the permanent civil service was already merit-based through ASEP; patronage ran mainly through temporary contracts and appointments. Reform proved possible — and part of it was reversed in 2019, when politically appointed secretaries-general returned.',
    },
    reply: {
      el: 'Ακριβώς: η απογραφή δείχνει ότι η αλλαγή γίνεται — σε δύο μήνες, χωρίς κόστος. Και η ανατροπή του 2019 δείχνει γιατί χρειάζεται να είναι μόνιμη και ορατή: ό,τι εξαρτάται από τη βούληση μιας κυβέρνησης, το ξεκάνει η επόμενη.',
      en: 'Exactly: the census shows change is possible — in two months, at no cost. And the 2019 reversal shows why it must be permanent and visible: whatever depends on one government’s will, the next one undoes.',
    },
    lever: {
      el: 'Ζήτησε από τον δήμο και την περιφέρειά σου να δημοσιεύουν κάθε χρόνο πόσους απασχολούν, με ποια σχέση εργασίας και πόσοι προσλήφθηκαν εκτός ΑΣΕΠ.',
      en: 'Ask your municipality and region to publish every year how many they employ, on what terms, and how many were hired outside ASEP.',
    },
    scores: { harm: 6, power: 8, recurrence: 10, remedy: 9 },
    status: {
      el: 'Όχι ποινική υπόθεση — συστημικό διοικητικό εύρημα. Κανείς δεν κατηγορείται.',
      en: 'Not a criminal case — a systemic administrative finding. No individual is accused.',
    },
    sources: [
      { title: 'Ministry of Interior — Results of the public payroll census (2010)', url: 'https://www.ypes.gr/enimerotiko-simeioma-me-ta-apotelesmata-tis-apografis-ton-misthodotoymenon-apo-to-dimosio-ypallilon-kai-leitoyrgon/' },
      { title: 'European Commission — Discussion Paper 167 on Greek public administration (2022)', url: 'https://economy-finance.ec.europa.eu/document/download/97fb3144-72fb-4ec6-aeef-f35edfdf4292_en?filename=dp167_en.pdf' },
      { title: 'European Commission — Study on Greek public administration (Sotiropoulos, 2018)', url: 'https://ec.europa.eu/social/BlobServlet?docId=19953&langId=en' },
    ],
  },
  {
    id: 'greece-pensions-dead-2012',
    when: '2010–2014',
    place: { el: 'Ελλάδα', en: 'Greece' },
    title: {
      el: 'Τα ταμεία που πλήρωναν νεκρούς: η απογραφή του υπουργείου Εργασίας και του Γενικού Λογιστηρίου βρίσκει χιλιάδες αποθανόντες «συνταξιούχους»',
      en: 'The funds that paid the dead: the labour ministry and General Accounting Office census finds thousands of deceased “pensioners”',
    },
    harmed: {
      el: 'Οι φορολογούμενοι και οι ασφαλισμένοι· οι πραγματικοί συνταξιούχοι, που είδαν τις συντάξεις τους να κόβονται ενώ οι διαρροές συνεχίζονταν',
      en: 'Taxpayers and contributors; genuine pensioners, whose pensions were cut while the leaks went on',
    },
    plain: {
      el: 'Τα ασφαλιστικά ταμεία δεν ήξεραν ποιοι από τους συνταξιούχους τους είχαν πεθάνει. Μια σύνταξη πληρωνόταν σε κάποιον που είχε πεθάνει το 1999. Η λύση ήταν απλή — καμία παροχή χωρίς ΑΜΚΑ και ΑΦΜ — αλλά ήρθε μόνο μέσα στην κρίση.',
      en: 'The pension funds did not know which of their pensioners had died. One pension was paid to someone who died in 1999. The fix was simple — no benefit without social-security and tax numbers — but came only in the crisis.',
    },
    facts: [
      {
        el: '31 Αυγούστου 2010: ο υφυπουργός Εργασίας αναφέρει ότι το υπουργείο πλήρωνε περίπου 500 δικαιούχους άνω των 110 ετών και ότι πάνω από 300 είχαν πεθάνει: «Βρήκαμε μια σύνταξη που πληρωνόταν σε κάποιον που πέθανε το 1999».',
        en: '31 August 2010: the deputy labour minister says the ministry was paying about 500 claimants over 110 and that more than 300 had died: “We found one pension was paid to someone who had died in 1999.”',
      },
      {
        el: '1 Αυγούστου 2012: επείγουσα εγκύκλιος σε όλα τα ταμεία — «καμία ασφαλιστική παροχή δεν θα δίνεται χωρίς ΑΜΚΑ και ΑΦΜ» — με στόχο την εκκαθάριση ως την 1η Ιανουαρίου 2013.',
        en: '1 August 2012: an urgent circular to all funds — “no insurance benefit will be paid without a social-security number and tax number” — aiming for a clean-up by 1 January 2013.',
      },
      {
        el: 'Φεβρουάριος 2013: 189.714 συνταξιούχοι δεν έχουν δηλώσει ΑΦΜ και 307.473 δεν έχουν δηλώσει ΑΜΚΑ· οι διασταυρώσεις πρέπει να ολοκληρωθούν ως τις 10 Μαρτίου.',
        en: 'February 2013: 189,714 pensioners have not submitted a tax number and 307,473 have not declared a social-security number; cross-checks must be completed by 10 March.',
      },
      {
        el: 'Μάρτιος 2013: η απογραφή των συνταξιούχων του Δημοσίου βρίσκει 2.301 δικαιούχους που είχαν πεθάνει τουλάχιστον έξι μήνες πριν σταματήσει η σύνταξή τους, με κόστος 26,1 εκατ.· είχαν ανακτηθεί 13,7 εκατ.',
        en: 'March 2013: the public-sector pension census finds 2,301 claimants who had died at least six months before their pension stopped, costing €26.1 million; €13.7 million had been recovered.',
      },
      {
        el: '17 Σεπτεμβρίου 2014: το Γενικό Λογιστήριο αναφέρει 3.423 συνταξιούχους καταγεγραμμένους ως νεκρούς τουλάχιστον έξι μήνες πριν διαγραφούν· πληρώθηκαν 64,4 εκατ. αχρεωστήτως και ανακτήθηκαν 42,2 εκατ.',
        en: '17 September 2014: the General Accounting Office reports 3,423 pensioners registered as dead at least six months before removal; €64.4 million was paid wrongly and €42.2 million recovered.',
      },
    ],
    outcome: {
      el: 'Συντάξεις μόνο με ΑΜΚΑ και ΑΦΜ, διασταυρωμένα με φορολογικό και ληξιαρχικό μητρώο· σημαντικό μέρος των χρημάτων ανακτήθηκε.',
      en: 'Pensions only against social-security and tax numbers, cross-checked with tax and civil registries; a significant share of the money was recovered.',
    },
    breach: {
      el: 'Ένα σύστημα συντάξεων είναι υπόσχεση ανάμεσα στις γενιές. Όταν τα ταμεία δεν βλέπουν ούτε τον θάνατο ενός δικαιούχου, κάθε ευρώ που χάνεται το πληρώνουν οι ζωντανοί συνταξιούχοι — εκείνοι ακριβώς που είδαν τις συντάξεις τους να περικόπτονται στην κρίση.',
      en: 'A pension system is a promise between generations. When the funds cannot even see a claimant’s death, every euro lost is paid by the living pensioners — exactly those who saw their pensions cut in the crisis.',
    },
    patterns: ['ghost-payroll'],
    safeguards: ['one-payroll'],
    counterfactual: {
      el: 'Η Μία Μισθοδοσία, Ένας Αριθμός θα είχε διασταυρώσει κάθε σύνταξη με το ληξιαρχείο κάθε μέρα — η σύνταξη του 1999 θα είχε σταματήσει τον επόμενο μήνα, όχι έντεκα χρόνια μετά. Και ένας ελεγκτής θα εξέταζε πρώτα κάθε σήμα, ώστε κανένας ηλικιωμένος να μη χάσει τη σύνταξή του για ένα χαρτί.',
      en: 'One Payroll, One Number would have cross-checked every pension against the civil registry daily — the 1999 pension would have stopped the next month, not eleven years later. And an auditor would review each flag first, so no elderly person lost their pension over a form.',
    },
    antilogos: {
      el: 'Πρόκειται κυρίως για απάτη συγγενών και γραφειοκρατική τύφλωση, όχι για ρουσφέτι. Όσοι δεν δήλωσαν στοιχεία ήταν κυρίως ηλικιωμένοι αγρότες και βετεράνοι — όχι απαραίτητα απατεώνες. Και τα ποσά ανακτήθηκαν σε μεγάλο βαθμό.',
      en: 'This was mainly relatives’ fraud and bureaucratic blindness, not patronage. Those who did not register were mostly elderly farmers and veterans — not necessarily fraudsters. And the money was largely recovered.',
    },
    reply: {
      el: 'Σωστά — και γι’ αυτό η υπόθεση ανήκει εδώ: το ίδιο κενό που επιτρέπει σε έναν συγγενή να εισπράττει μια σύνταξη, επιτρέπει σε έναν φορέα να πληρώνει έναν υπάλληλο που δεν υπάρχει. Η λύση είναι ίδια, απλή, και αποδείχθηκε ότι δουλεύει.',
      en: 'True — and that is why the case belongs here: the same gap that lets a relative collect a pension lets an office pay an employee who does not exist. The fix is the same, simple, and proven to work.',
    },
    lever: {
      el: 'Ζήτησε να δημοσιεύεται κάθε χρόνο πόσες πληρωμές σταμάτησαν μετά από διασταύρωση με το ληξιαρχείο, και πόσα χρήματα ανακτήθηκαν.',
      en: 'Ask that it be published every year how many payments stopped after cross-checking with the civil registry, and how much was recovered.',
    },
    scores: { harm: 5, power: 3, recurrence: 7, remedy: 10 },
    status: {
      el: 'Κυρίως διοικητική εκκαθάριση και ανάκτηση. Δεν βρέθηκαν καταδίκες· οι ατομικές υποθέσεις είναι φερόμενες και ισχύει το τεκμήριο αθωότητας.',
      en: 'Mainly an administrative clean-up and recovery. No convictions were found; individual cases are alleged and the presumption of innocence applies.',
    },
    sources: [
      { title: 'Neos Kosmos — Greece pays pensions to the dead (2010)', url: 'https://neoskosmos.com/en/?p=4461' },
      { title: 'in.gr — No benefits for pensioners without AMKA or AFM (2012)', url: 'https://www.in.gr/2012/08/01/economy/kamia-paroxi-se-syntaksioyxoys-xwris-amka-i-afm/amp/' },
      { title: 'To Vima — Thousands of pensioners not registered (2013)', url: 'https://www.tovima.gr/2013/02/21/international/thousands-of-pensioners-not-registered/' },
      { title: 'Neos Kosmos — Pension census finds deceased claimants (2013)', url: 'https://neoskosmos.com/en/?p=16668' },
      { title: 'Neos Kosmos — €64.4m paid to dead pensioners (2014)', url: 'https://neoskosmos.com/en/?p=25672' },
    ],
  },
  {
    id: 'greece-contract-conversions-2004',
    when: '2004–2014',
    place: { el: 'Ελλάδα', en: 'Greece' },
    title: {
      el: 'Από το συμβόλαιο στη μονιμότητα με διάταγμα: η μετατροπή συμβάσεων του υπουργείου Εσωτερικών το 2004 — και η πρώτη ακύρωση από τον ΑΣΕΠ για πλαστά στοιχεία',
      en: 'From contract to tenure by decree: the interior ministry’s 2004 contract conversions — and ASEP’s first annulment over forged papers',
    },
    harmed: {
      el: 'Οι υποψήφιοι που διαγωνίζονται στον ΑΣΕΠ για περιορισμένες θέσεις· οι φορολογούμενοι· οι τίμιοι συμβασιούχοι, που η πραγματική τους υπηρεσία μπήκε στο ίδιο σακί με τις πλαστές',
      en: 'Candidates competing in ASEP for limited posts; taxpayers; honest contract workers, whose real service was lumped in with forged claims',
    },
    plain: {
      el: 'Το 2004 ένα προεδρικό διάταγμα επέτρεψε σε συμβασιούχους με διαδοχικές συμβάσεις να γίνουν αορίστου χρόνου. Δέκα χρόνια μετά, οι έλεγχοι βρήκαν πλαστές βεβαιώσεις προϋπηρεσίας που είχαν γίνει δεκτές από τα υπηρεσιακά συμβούλια. Ο ΑΣΕΠ ακύρωσε τις μετατροπές σε έναν δήμο — ο δήμος αρνήθηκε να απολύσει.',
      en: 'In 2004 a presidential decree let contract workers on successive contracts become indefinite staff. Ten years later, checks found forged service certificates that service councils had accepted. ASEP annulled the conversions in one municipality — the municipality refused to dismiss them.',
    },
    facts: [
      {
        el: '12 Ιουλίου 2004: ο υπουργός Εσωτερικών ανακοινώνει ότι ως τον Οκτώβριο θα είναι γνωστό «πόσοι και ποιοι συμβασιούχοι θα μονιμοποιηθούν», και υπόσχεται ότι «όλες οι προσλήψεις μόνιμου προσωπικού και αορίστου χρόνου θα περνούν από τον ΑΣΕΠ».',
        en: '12 July 2004: the interior minister announces that by October it will be known “how many and which contract workers will be made permanent,” and promises that “all recruitments of permanent and indefinite staff will go through ASEP.”',
      },
      {
        el: 'Το Προεδρικό Διάταγμα 164/2004 ενσωμάτωσε οδηγία της ΕΕ κατά της κατάχρησης διαδοχικών συμβάσεων, με μεταβατική διάταξη για τη μετατροπή τους υπό κριτήρια· το Σύνταγμα (άρθρο 103 παρ. 8) απαγορεύει ρητά τη μονιμοποίηση ή μετατροπή συμβάσεων με νόμο.',
        en: 'Presidential Decree 164/2004 transposed an EU directive against abuse of successive contracts, with a transitional provision for converting them under criteria; the Constitution (Article 103(8)) expressly forbids tenure or conversion by law.',
      },
      {
        el: 'Φεβρουάριος 2014: το υπουργείο Διοικητικής Μεταρρύθμισης θέτει σε έλεγχο δικαιολογητικών τις 35.239 μετατροπές· υπάλληλοι του υπουργείου Πολιτισμού είχαν μονιμοποιηθεί «με πλαστές βεβαιώσεις προϋπηρεσίας που έγιναν δεκτές από τα υπηρεσιακά συμβούλια». Το 2013 εκδόθηκαν 1.645 πειθαρχικές αποφάσεις και 248 οριστικές απολύσεις.',
        en: 'February 2014: the administrative reform ministry puts the 35,239 conversions under document checks; culture ministry staff had been made permanent “with forged service certificates accepted by the service councils.” In 2013, 1,645 disciplinary decisions and 248 permanent dismissals were issued.',
      },
      {
        el: '14 Νοεμβρίου 2014: ο ΑΣΕΠ κρίνει παράνομη τη μετατροπή των συμβάσεων 27 συμβασιούχων του Δήμου Δραπετσώνας το 2004, επειδή «κατασκεύασαν με ψευδή στοιχεία τη νομιμότητα της μετατροπής», με ζημιά άνω των 2 εκατ. ευρώ — «πιλοτική υπόθεση» για άλλους δήμους. Ο φάκελος πάει στον εισαγγελέα.',
        en: '14 November 2014: ASEP rules illegal the 2004 conversion of 27 contract workers of the Municipality of Drapetsona, because they “constructed the legality of the conversion with false information,” with damage over €2 million — a “pilot case” for other municipalities. The file goes to a prosecutor.',
      },
      {
        el: 'Ίδια περίοδος: η νέα δημοτική αρχή αρνείται να λύσει τις συμβάσεις εργασίας, και ο υπουργός αναμένεται να ζητήσει από το Ελεγκτικό Συνέδριο να σταματήσει τη μισθοδοσία.',
        en: 'Same period: the new municipal authority refuses to end the employment contracts, and the minister is expected to ask the Court of Audit to stop the salaries.',
      },
    ],
    outcome: {
      el: 'Μαζικές μετατροπές το 2004–2005· δέκα χρόνια μετά, οι πρώτοι συστηματικοί έλεγχοι και μία πιλοτική ακύρωση. Από το 2021, η προϋπηρεσία δίνει μόνο μόρια σε νέο διαγωνισμό, όχι δικαίωμα μετατροπής.',
      en: 'Mass conversions in 2004–2005; ten years later, the first systematic checks and one pilot annulment. Since 2021, prior service only earns points in a new competition, not a right to conversion.',
    },
    breach: {
      el: 'Ο διαγωνισμός υπάρχει για να κρίνονται όλοι με τα ίδια μέτρα. Όταν οι προσωρινές θέσεις γίνονται μόνιμες με διάταγμα, και οι βεβαιώσεις που το επιτρέπουν δεν ελέγχονται για δέκα χρόνια, η μονιμότητα στο Δημόσιο παύει να είναι αποτέλεσμα αξίας· γίνεται αποτέλεσμα χρόνου — και χαρτιού.',
      en: 'A competition exists so everyone is judged by the same measure. When temporary posts become permanent by decree, and the certificates enabling it go unchecked for ten years, tenure in the public sector stops being the result of merit; it becomes the result of time — and paper.',
    },
    patterns: ['temp-to-tenure', 'forged-papers', 'impunity'],
    safeguards: ['document-seal', 'enforce-annulment', 'open-hiring'],
    counterfactual: {
      el: 'Η Δοκιμασία Δικαιολογητικών θα είχε διασταυρώσει κάθε βεβαίωση προϋπηρεσίας με τις ασφαλιστικές εισφορές το 2004 — τα χρόνια χωρίς εισφορές θα φαίνονταν αμέσως. Και η Ακύρωση Εκτελείται θα είχε σταματήσει τη μισθοδοσία των 27 στην προθεσμία, αντί για μια άρνηση του δήμου.',
      en: 'Scrutiny of Credentials would have cross-checked every service certificate against social-security contributions in 2004 — years with no contributions would have shown at once. And Annulments Enforced would have stopped the 27 salaries by the deadline, instead of a municipal refusal.',
    },
    antilogos: {
      el: 'Το διάταγμα ενσωμάτωνε οδηγία της ΕΕ που προστατεύει τους εργαζόμενους από τις ατέρμονες «προσωρινές» συμβάσεις — μια κατάχρηση που χτίστηκε και από προηγούμενες κυβερνήσεις. Η αποδεδειγμένη παρανομία στη Δραπετσώνα αφορά πλαστά έγγραφα των ίδιων των εργαζομένων, όχι εντολή πολιτικού.',
      en: 'The decree transposed an EU directive protecting workers from endless “temporary” contracts — an abuse built up by earlier governments too. The proven wrongdoing at Drapetsona concerns forged documents by the workers themselves, not a politician’s order.',
    },
    reply: {
      el: 'Σωστά — και ακριβώς γι’ αυτό η πρόταση δεν τιμωρεί τη μετατροπή, αλλά ελέγχει τα χαρτιά της. Ένας τίμιος συμβασιούχος με πραγματική υπηρεσία δεν έχει τίποτα να φοβηθεί από μια διασταύρωση· αυτός που έφερε πλαστή βεβαίωση έχει. Και ένας δήμος που αρνείται να εκτελέσει μια ακύρωση, το κάνει πλέον δημόσια.',
      en: 'True — which is exactly why the proposal does not punish conversion but checks its papers. An honest contract worker with real service has nothing to fear from a cross-check; the one who brought a forged certificate does. And a municipality refusing to enforce an annulment now does so in public.',
    },
    lever: {
      el: 'Ζήτησε κάθε βεβαίωση προϋπηρεσίας για πρόσληψη ή μονιμοποίηση να διασταυρώνεται αυτόματα με τις ασφαλιστικές εισφορές στον e-ΕΦΚΑ.',
      en: 'Ask that every service certificate for hiring or tenure be automatically cross-checked against social-security contributions.',
    },
    scores: { harm: 6, power: 7, recurrence: 9, remedy: 9 },
    status: {
      el: 'Η ακύρωση του ΑΣΕΠ (2014) είναι διοικητικό εύρημα· η ποινική διαδικασία που ανοίχτηκε δεν βρέθηκε να έχει καταλήξει. Ισχύει το τεκμήριο αθωότητας.',
      en: 'ASEP’s annulment (2014) is an administrative finding; the criminal proceedings opened were not found to have concluded. The presumption of innocence applies.',
    },
    sources: [
      { title: 'in.gr — By October it will be clear how many contract workers become permanent (2004)', url: 'https://www.in.gr/2004/07/12/greece/ton-oktwbrio-ksekatharizei-posoi-symbasioyxoi-tha-monimopoiithoyn/' },
      { title: 'Hellenic Parliament — Interior ministry answer on PD 164/2004 (2021)', url: 'https://www.hellenicparliament.gr/UserFiles/67715b2c-ec81-4f0c-ad6a-476a34d732bd/11604448.pdf' },
      { title: 'Aftodioikisi — Conversions under document checks (2014)', url: 'https://www.aftodioikisi.gr/ipourgeia/ston-aera-48-910-dimosioi-ipalliloi/' },
      { title: 'in.gr — ASEP: illegal conversions at Drapetsona (2014)', url: 'https://www.in.gr/2014/11/14/greece/asep-paranomes-oi-monimopoiiseis-symbasioyxwn-ston-dimo-drapetswnas/' },
      { title: 'To Vima — ASEP issues monumental verdict on illegal recruitments (2014)', url: 'https://www.tovima.gr/2014/11/14/international/asep-issues-monumental-verdict-on-illegal-recruitments/' },
    ],
  },
  {
    id: 'eu-parliament-2022',
    when: '2022–2026',
    place: { el: 'Βρυξέλλες', en: 'Brussels' },
    title: {
      el: 'Σακούλες με μετρητά και μια αντιπροεδρία: φερόμενες ξένες δωροδοκίες για επιρροή μέσα στο Ευρωπαϊκό Κοινοβούλιο',
      en: 'Bags of cash and a vice-presidency: alleged foreign bribes for influence inside the European Parliament',
    },
    harmed: {
      el: 'Οι πολίτες και οι φορολογούμενοι της ΕΕ — η ακεραιότητα των ψηφοφοριών του Κοινοβουλίου· οι τίμιοι ευρωβουλευτές και υπάλληλοι',
      en: 'EU citizens and taxpayers — the integrity of Parliament’s votes; honest MEPs and staff',
    },
    plain: {
      el: 'Η βελγική αστυνομία βρήκε περίπου 1,5 εκατ. ευρώ σε μετρητά σε σπίτια στις Βρυξέλλες, ανάμεσά τους και στο σπίτι της τότε αντιπροέδρου του Ευρωπαϊκού Κοινοβουλίου από την Ελλάδα. Κατηγορούνται τουλάχιστον δέκα πρόσωπα· μόνο ένας πρώην ευρωβουλευτής έχει ομολογήσει. Τέσσερα χρόνια μετά, δεν έχει ξεκινήσει δίκη.',
      en: 'Belgian police found about €1.5 million in cash at homes in Brussels, including the home of the then Vice-President of the European Parliament from Greece. At least ten people are charged; only one former MEP has confessed. Four years on, no trial has begun.',
    },
    facts: [
      {
        el: '9 Δεκεμβρίου 2022: έρευνες στις Βρυξέλλες εντοπίζουν περίπου 1,5 εκατ. ευρώ σε μετρητά — περίπου 150.000 στο σπίτι της τότε αντιπροέδρου, περίπου 600.000 στο σπίτι ενός πρώην ευρωβουλευτή, και «εκατοντάδες χιλιάδες» σε βαλίτσα σε ξενοδοχείο.',
        en: '9 December 2022: raids in Brussels find about €1.5 million in cash — about €150,000 at the then Vice-President’s home, about €600,000 at a former MEP’s home, and “several hundred thousand euros” in a suitcase at a hotel.',
      },
      {
        el: '13 Δεκεμβρίου 2022: το Κοινοβούλιο τερματίζει τη θητεία της ως αντιπροέδρου με 625 ψήφους υπέρ, 1 κατά και 2 αποχές. Κατηγορείται για συμμετοχή σε εγκληματική οργάνωση, διαφθορά και ξέπλυμα· αρνείται σταθερά όλες τις κατηγορίες.',
        en: '13 December 2022: Parliament ends her term as Vice-President by 625 votes to 1, with 2 abstentions. She is charged with membership of a criminal organisation, corruption and money laundering; she has consistently denied all charges.',
      },
      {
        el: 'Ιανουάριος 2023: ο πρώην ευρωβουλευτής συμφωνεί σε συνεργασία με τη δικαιοσύνη και παραδέχεται ότι έλαβε δωροδοκίες· ο σύντροφός της, κοινοβουλευτικός βοηθός, παραδέχεται επίσης δωροδοκίες αλλά λέει ότι εκείνη δεν είχε ανάμειξη.',
        en: 'January 2023: the former MEP agrees to cooperate with justice and admits taking bribes; her partner, a parliamentary assistant, also admits taking bribes but says she was not involved.',
      },
      {
        el: 'Σεπτέμβριος 2023: το Κοινοβούλιο ψηφίζει αυστηρότερους κανόνες — δηλώσεις περιουσίας στην αρχή και στο τέλος κάθε θητείας, δημοσίευση συναντήσεων με ομάδες συμφερόντων και τρίτες χώρες.',
        en: 'September 2023: Parliament votes tighter rules — asset declarations at the start and end of each term, publication of meetings with interest groups and third countries.',
      },
      {
        el: '23 Φεβρουαρίου 2026: βελγικό εφετείο απορρίπτει το αίτημα της υπεράσπισης να σταματήσει η υπόθεση, κρίνοντας ότι οι εισαγγελείς δεν τη χειρίστηκαν εσφαλμένα και ότι «η βουλευτική ασυλία δεν είναι προσωπικό προνόμιο».',
        en: '23 February 2026: a Belgian appeal court rejects the defence bid to halt the case, finding prosecutors did not mishandle it and that “parliamentary immunity is not a personal privilege.”',
      },
    ],
    outcome: {
      el: 'Η έρευνα συνεχίζεται· τουλάχιστον δέκα κατηγορούμενοι· αυστηρότεροι κανόνες δεοντολογίας από το 2023.',
      en: 'The investigation continues; at least ten charged; tighter ethics rules since 2023.',
    },
    breach: {
      el: 'Ένα κοινοβούλιο υπάρχει για να εκπροσωπεί τους πολίτες του — όχι τα συμφέροντα όποιου πληρώνει. Αν η στάση ενός εκπροσώπου μπορεί να αγοραστεί με μια σακούλα μετρητά, η ψήφος του πολίτη που τον εξέλεξε έχει ήδη ακυρωθεί πριν καν μετρηθεί.',
      en: 'A parliament exists to represent its citizens — not the interests of whoever pays. If a representative’s stance can be bought with a bag of cash, the vote of the citizen who elected them has been cancelled before it was even counted.',
    },
    patterns: ['bought-votes', 'impunity'],
    safeguards: ['influence-ledger', 'no-oblivion'],
    counterfactual: {
      el: 'Το Μητρώο Επιρροής — ακριβώς ό,τι υιοθέτησε το Κοινοβούλιο το 2023 — θα είχε δείξει πριν από τις έρευνες ποιοι εκπρόσωποι συναντούσαν συχνά ποιες ξένες αντιπροσωπείες, και πώς άλλαζαν οι τοποθετήσεις τους. Το Χωρίς Σιωπηλή Λήθη θα έδειχνε δημόσια γιατί, τέσσερα χρόνια μετά, δεν έχει οριστεί δίκη.',
      en: 'The Influence Ledger — exactly what Parliament adopted in 2023 — would have shown before the raids which representatives met which foreign delegations often, and how their positions shifted. No Silent Forgetting would show publicly why, four years on, no trial has been set.',
    },
    antilogos: {
      el: 'Η ξένη παρέμβαση δεν ήταν καν συγκεκριμένο έγκλημα στο Βέλγιο ως το 2024. Η κατηγορία στηρίζεται σε έναν συνεργαζόμενο μάρτυρα που ομολόγησε ο ίδιος δωροδοκία· ο αρχικός ανακριτής αποσύρθηκε για σύγκρουση συμφερόντων. Η υπεράσπιση μιλά για «Belgiangate», και οι χώρες που κατονομάστηκαν αρνούνται ότι προσπάθησαν να αγοράσουν επιρροή.',
      en: 'Foreign interference was not even a specific crime in Belgium until 2024. The case rests on a cooperating witness who himself admitted bribery; the original investigating judge stepped aside over a conflict of interest. The defence calls it “Belgiangate,” and the countries named deny trying to buy influence.',
    },
    reply: {
      el: 'Όλα αυτά κάνουν τη διαφάνεια πιο αναγκαία, όχι λιγότερο. Αν η δικαστική οδός είναι αργή και αμφισβητούμενη, ένα δημόσιο μητρώο συναντήσεων και περιουσιών προστατεύει και τον αθώο εκπρόσωπο — του δίνει δεδομένα για να αποδείξει ότι δεν άλλαξε στάση για κανένα αντάλλαγμα.',
      en: 'All of this makes transparency more necessary, not less. If the judicial path is slow and contested, a public register of meetings and assets also protects an innocent representative — it gives them data to prove they changed no stance for any favour.',
    },
    lever: {
      el: 'Ζήτησε από τους Έλληνες βουλευτές και ευρωβουλευτές να δημοσιεύουν τις συναντήσεις τους με ομάδες συμφερόντων και ξένες αντιπροσωπείες.',
      en: 'Ask Greek MPs and MEPs to publish their meetings with interest groups and foreign delegations.',
    },
    scores: { harm: 6, power: 9, recurrence: 6, remedy: 8 },
    status: {
      el: 'Ανοιχτή — δεν έχει οριστεί δίκη. Μόνο ο πρώην ευρωβουλευτής έχει ομολογήσει· όλοι οι άλλοι, και η πρώην αντιπρόεδρος, τεκμαίρονται αθώοι.',
      en: 'Open — no trial date set. Only the former MEP has confessed; everyone else, including the former Vice-President, is presumed innocent.',
    },
    sources: [
      { title: 'European Parliament — Vice-President’s term ended (2022)', url: 'https://www.europarl.europa.eu/news/en/press-room/20221213IPR64610/eva-kaili-no-longer-vice-president-of-the-european-parliament' },
      { title: 'Euronews — Three years on, still awaiting trial (2025)', url: 'https://www.euronews.com/news/2025/12/12/three-years-on-former-mep-kaili-still-awaits-trial-in-case-slammed-as-belgiangate' },
      { title: 'European Parliament — Parliament strengthens integrity rules (2023)', url: 'https://www.europarl.europa.eu/news/en/press-room/20230911IPR04919/parliament-strengthens-rules-on-integrity-transparency-and-accountability' },
      { title: 'Inside World Football — Belgian court rules probe can continue (2026)', url: 'https://www.insideworldfootball.com/2026/02/23/belgian-court-rules-qatargate-probe-can-continue' },
    ],
  },
  {
    id: 'nigeria-ghost-workers-2016',
    when: '2015–2016',
    place: { el: 'Νιγηρία', en: 'Nigeria' },
    title: {
      el: 'Το ομοσπονδιακό υπουργείο Οικονομικών βρίσκει 23.846 υπαλλήλους-φαντάσματα στη μισθοδοσία, συνδέοντας τους μισθούς με τραπεζικές ταυτότητες',
      en: 'The federal finance ministry finds 23,846 ghost workers on the payroll by matching salaries to bank IDs',
    },
    harmed: {
      el: 'Οι φορολογούμενοι, που πλήρωναν ανύπαρκτους υπαλλήλους μέσα σε δημοσιονομική κρίση· οι πραγματικοί υπάλληλοι και συνταξιούχοι, που πληρώνονταν καθυστερημένα',
      en: 'Taxpayers, funding non-existent staff during a fiscal crisis; real civil servants and pensioners, paid late',
    },
    plain: {
      el: 'Όταν η Νιγηρία συνέδεσε κάθε δημόσιο μισθό με τον μοναδικό τραπεζικό αριθμό ταυτοποίησης του δικαιούχου, βρήκε μέχρι και 20 ονόματα σε έναν αριθμό. Δεκάδες χιλιάδες «υπάλληλοι» δεν υπήρχαν. Ο έλεγχος κράτησε δύο μήνες.',
      en: 'When Nigeria linked every public salary to the payee’s unique bank verification number, it found up to 20 names on one number. Tens of thousands of “employees” did not exist. The check took two months.',
    },
    facts: [
      {
        el: '12 Φεβρουαρίου 2016: η υπουργός Οικονομικών λέει στη Γερουσία ότι η σύνδεση της μισθοδοσίας με τον τραπεζικό αριθμό ταυτοποίησης έδειξε «20 ονόματα σε έναν αριθμό», και ότι 320.000 ομοσπονδιακοί υπάλληλοι εντάχθηκαν στην ενιαία μισθοδοσία σε δύο μήνες — έναντι 295.000 στα προηγούμενα πέντε χρόνια.',
        en: '12 February 2016: the finance minister tells the Senate that matching the payroll to the bank verification number showed “20 names to one BVN number,” and that 320,000 federal staff were enrolled in the integrated payroll within two months — against 295,000 in the previous five years.',
      },
      {
        el: '28 Φεβρουαρίου 2016: το υπουργείο ανακοινώνει ότι 23.846 ανύπαρκτοι υπάλληλοι αφαιρέθηκαν από τη μισθοδοσία, με εξοικονόμηση περίπου 11,5 εκατ. δολαρίων τον μήνα.',
        en: '28 February 2016: the ministry announces 23,846 non-existent workers were removed from the payroll, saving about $11.5 million a month.',
      },
      {
        el: 'Απρίλιος 2016: ο επικεφαλής της αρχής κατά της διαφθοράς αναφέρει ότι κοινός έλεγχος βρήκε πάνω από 37.000 υπαλλήλους-φαντάσματα και ότι «ο αριθμός σίγουρα θα αυξηθεί».',
        en: 'April 2016: the head of the anti-corruption agency says a joint audit found more than 37,000 ghost workers and that “the figure will definitely increase.”',
      },
      {
        el: 'Μάρτιος 2016: ανάλυση σημειώνει ότι προηγούμενη υπουργός είχε ήδη εντοπίσει 62.893 υπαλλήλους-φαντάσματα «λίγα χρόνια πριν», και ρίχνει την ευθύνη σε στελέχη προσωπικού και σε «εγκρίνοντες και λογιστικούς υπαλλήλους» που εκμεταλλεύονται τα κενά.',
        en: 'March 2016: an analysis notes an earlier minister had already identified 62,893 ghost workers “a few years back,” and blames HR managers and “approving and accounting officers” who exploit the loopholes.',
      },
    ],
    outcome: {
      el: 'Τα ονόματα ανεστάλησαν και παραπέμφθηκαν στην αρχή κατά της διαφθοράς· η σύνδεση μισθοδοσίας και τραπεζικής ταυτότητας έγινε μόνιμος έλεγχος.',
      en: 'The names were suspended and referred to the anti-corruption agency; linking payroll to bank ID became a permanent control.',
    },
    breach: {
      el: 'Κάθε μισθός που πηγαίνει σε κάποιον που δεν υπάρχει είναι μισθός που δεν πηγαίνει σε έναν δάσκαλο ή έναν νοσηλευτή. Όταν η ίδια η υπηρεσία που πληρώνει δεν ξέρει ποιον πληρώνει, τα κενά δεν είναι τυχαία — είναι ευκαιρία για όσους την ελέγχουν.',
      en: 'Every salary going to someone who does not exist is a salary not going to a teacher or a nurse. When the very office that pays does not know whom it pays, the gaps are not accidental — they are an opportunity for those who control it.',
    },
    patterns: ['ghost-payroll'],
    safeguards: ['one-payroll'],
    counterfactual: {
      el: 'Η Μία Μισθοδοσία, Ένας Αριθμός είναι ακριβώς αυτό που έκανε η Νιγηρία το 2016 — απλώς εφαρμοσμένο από την αρχή, όχι μετά από χρόνια διαρροών. Η ΤΝ θα σήμαινε κάθε λογαριασμό που δέχεται πολλούς μισθούς την πρώτη φορά που συμβαίνει.',
      en: 'One Payroll, One Number is exactly what Nigeria did in 2016 — just applied from the start, not after years of leakage. The AI would flag every account receiving many salaries the first time it happens.',
    },
    antilogos: {
      el: 'Πολλά «φαντάσματα» δεν ήταν επινοημένα πρόσωπα αλλά αδυναμίες του συστήματος — νεκροί ή μετακινημένοι υπάλληλοι που συνέχιζαν να πληρώνονται. Οι αριθμοί διαφέρουν πολύ ανάλογα με το στάδιο του ελέγχου, και ανακοινώθηκαν μέσα σε κυβερνητική εκστρατεία χωρίς ανεξάρτητο έλεγχο.',
      en: 'Many “ghosts” were not invented people but system weaknesses — dead or transferred staff still being paid. The figures vary widely by audit stage, and were announced during a government campaign without independent audit.',
    },
    reply: {
      el: 'Ακριβώς — και γι’ αυτό η λύση είναι τεχνική, όχι τιμωρητική. Είτε ο μισθός πήγαινε σε επινοημένο πρόσωπο είτε σε έναν νεκρό, η διασταύρωση το σταματά. Και οι αριθμοί χρειάζονται ανεξάρτητο έλεγχο — ακριβώς αυτό που προσφέρει ένα δημόσιο, μόνιμο μητρώο.',
      en: 'Exactly — which is why the fix is technical, not punitive. Whether the salary went to an invented person or a dead one, cross-checking stops it. And the figures need independent audit — exactly what a public, permanent register offers.',
    },
    lever: {
      el: 'Ζήτησε να δημοσιεύεται κάθε χρόνο πόσοι λογαριασμοί δέχονται πάνω από έναν δημόσιο μισθό ή σύνταξη.',
      en: 'Ask that it be published every year how many accounts receive more than one public salary or pension.',
    },
    scores: { harm: 6, power: 5, recurrence: 8, remedy: 10 },
    status: {
      el: 'Δεν βρέθηκαν καταδίκες για τις εγγραφές του 2016 — δεν πρέπει να υπονοείται ότι καταδικάστηκε κανείς.',
      en: 'No convictions were found for the 2016 entries — it must not be implied that anyone was convicted.',
    },
    sources: [
      { title: 'Blueprint — BVN exposed 23,000 ghost workers (2016)', url: 'https://blueprint.ng/bvn-exposed-23000-ghost-workers-fg/' },
      { title: 'VOA — Nigeria saves millions by firing ghost workers (2016)', url: 'https://www.voanews.com/a/nigeria-saves-millions-by-firing-ghost-workers/3211879.html' },
      { title: 'Newsweek — 37,000 ghost workers, says anti-corruption chief (2016)', url: 'https://www.newsweek.com/nigeria-37000-ghost-workers-civil-service-says-anti-corruption-chief-450027' },
      { title: 'BusinessDay — Caging Nigeria’s ghost workers (2016)', url: 'https://businessday.ng/analysis/article/caging-nigerias-ghost-workers/' },
    ],
  },
]
