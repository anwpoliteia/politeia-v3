// ΔΗΜΗΤΡΑ — cases 1–5. Every fact is sourced and was checked on 2026-09-29.
// Headlines name the office, not the officer; the harmed are always named.
// Open cases carry the presumption of innocence explicitly.

import type { ToolCase } from '../types'

export const CASES_A: readonly ToolCase[] = [
  {
    id: 'opekepe-2016',
    when: '2016–2026',
    place: { el: 'Ελλάδα', en: 'Greece' },
    title: {
      el: 'Ο οργανισμός αγροτικών πληρωμών πλήρωνε για βοσκοτόπια που δεν ήταν δικά τους — και η πλειοψηφία της Βουλής αποφάσιζε ποιοι υπουργοί θα ερευνηθούν',
      en: 'The farm payments agency paid for pastures that were not the claimants’ — and the parliamentary majority decided which ministers would be investigated',
    },
    harmed: { el: 'Οι αληθινοί αγρότες και οι φορολογούμενοι της Ελλάδας', en: 'Greece’s real farmers and taxpayers' },
    plain: {
      el: 'Για χρόνια ο ΟΠΕΚΕΠΕ πλήρωνε ενισχύσεις για γη που δεν ανήκε στους δηλούντες και για ζώα που δεν υπήρχαν· η ΕΕ υποχρέωσε την Ελλάδα να επιστρέψει εκατοντάδες εκατομμύρια, ενώ η έρευνα για τους πολιτικούς περνούσε από την ψηφοφορία της Βουλής.',
      en: 'For years OPEKEPE paid support for land the claimants did not hold and animals that did not exist; the EU made Greece forfeit hundreds of millions, while the investigation of politicians had to pass a parliamentary vote.',
    },
    facts: [
      {
        el: 'Η Ευρωπαϊκή Εισαγγελία (EPPO) ερευνά οργανωμένη απάτη στον ΟΠΕΚΕΠΕ, τον οργανισμό που πληρώνει τις ευρωπαϊκές αγροτικές ενισχύσεις στην Ελλάδα. Τον Μάρτιο 2025 απαγγέλλει κατηγορίες σε 100 υπόπτους.',
        en: 'The European Public Prosecutor’s Office (EPPO) investigates organised fraud at OPEKEPE, the agency that pays EU farm support in Greece. In March 2025 it charges 100 suspects.',
      },
      {
        el: 'Οι δηλώσεις αφορούσαν γη που δεν ανήκε στους δηλούντες και φουσκωμένους αριθμούς ζώων — κατά τα δημοσιεύματα, ακόμη και «μπανανιές στον Όλυμπο, ελαιώνες σε στρατιωτικά αεροδρόμια και βοσκοτόπια στη θάλασσα». Το μεγαλύτερο μέρος αφορά βοσκοτόπια στην Κρήτη.',
        en: 'Claims covered land the claimants did not hold and inflated animal counts — reportedly even “banana plantations on Mount Olympus, olive groves on military airfields and pasture for sheep in the sea.” Most concerns pasture in Crete.',
      },
      {
        el: 'Ιούνιος 2025: η Κομισιόν υποχρεώνει την Ελλάδα να επιστρέψει 392,2 εκατ. ευρώ λόγω σοβαρών ελλείψεων και υπόνοιας απάτης (2016–2023). Στις 27 Ιουνίου, μετά τη διαβίβαση δικογραφίας 3.000 σελίδων στη Βουλή, παραιτούνται πέντε κυβερνητικά στελέχη, ανάμεσά τους ο υπουργός Μετανάστευσης.',
        en: 'June 2025: the Commission makes Greece forfeit €392.2 million over serious deficiencies and suspected fraud (2016–2023). On 27 June, after a 3,000-page case file reaches Parliament, five government officials resign, the migration minister among them.',
      },
      {
        el: 'Καλοκαίρι 2025: η κυβερνητική πλειοψηφία απορρίπτει την ειδική εξεταστική της αντιπολίτευσης και ψηφίζει ευρύτερη έρευνα για τη διαχείριση από το 1998. Κατά το Politico, υπουργός δήλωσε δημόσια ότι η πλειοψηφία «δεν θέλει να ερευνηθούν».',
        en: 'Summer 2025: the governing majority rejects the opposition’s dedicated inquiry and votes a broader probe of management since 1998. According to Politico, a minister said publicly that the majority “doesn’t want them to be investigated.”',
      },
      {
        el: '1 Απριλίου 2026: η Ευρωπαία Γενική Εισαγγελέας ζητά άρση ασυλίας για 11 εν ενεργεία βουλευτές και διαβιβάζει στοιχεία για πρώην υπουργό και υφυπουργό· η EPPO σημειώνει ότι το άρθρο 86 την αναγκάζει να «σπάσει» την έρευνα. Στις 3 Απριλίου παραιτούνται τρία μέλη της κυβέρνησης.',
        en: '1 April 2026: the European Chief Prosecutor asks for immunity to be lifted for 11 sitting MPs and refers material on a former minister and deputy minister; EPPO notes Article 86 forces it to “split” its investigation. On 3 April three members of the government resign.',
      },
    ],
    outcome: {
      el: 'Ο ΟΠΕΚΕΠΕ καταργήθηκε και απορροφήθηκε από την ΑΑΔΕ. Οι έρευνες συνεχίζονται· οι πολιτικοί κρίνονται μόνο όσο το επιτρέπει η Βουλή. Τα πρόστιμα της ΕΕ τα πληρώνουν όλοι οι φορολογούμενοι.',
      en: 'OPEKEPE was abolished and absorbed into the tax authority (AADE). Investigations continue; politicians are examined only as far as Parliament allows. The EU penalties are paid by every taxpayer.',
    },
    breach: {
      el: 'Η ενίσχυση υπάρχει για να κρατά ζωντανό όποιον δουλεύει τη γη. Όταν πληρώνει βοσκοτόπια στη θάλασσα, ο αληθινός κτηνοτρόφος χάνει τρεις φορές: ως δικαιούχος που περιμένει, ως φορολογούμενος που πληρώνει το πρόστιμο, και ως πολίτης που βλέπει τους υπεύθυνους να ψηφίζουν για τον εαυτό τους.',
      en: 'Support exists to keep alive whoever works the land. When it pays for pasture in the sea, the real herder loses three times: as a claimant who waits, as a taxpayer who pays the penalty, and as a citizen watching those responsible vote on themselves.',
    },
    patterns: ['phantom-land', 'phantom-herd', 'captured-agency', 'self-shield'],
    safeguards: ['geo', 'registry', 'pressure-log'],
    counterfactual: {
      el: 'Το Δορυφορικό Μάτι θα είχε δει πριν από την πρώτη πληρωμή ότι τα «βοσκοτόπια» ήταν θάλασσα, αεροδρόμια και βουνοκορφές. Το Ενιαίο Μητρώο Γης θα είχε απορρίψει μισθωτήρια για γη του Δημοσίου ή άλλων. Και το Μητρώο Πιέσεων θα έδειχνε δημόσια ποιοι πολιτικοί ενδιαφέρθηκαν για ποιους φακέλους — ώστε η Βουλή να μην ψηφίζει στο σκοτάδι.',
      en: 'The Satellite Witness would have seen before the first payment that the “pastures” were sea, airfields and mountaintops. The One Land Register would have rejected leases on land owned by the state or by others. And the Pressure Register would have shown publicly which politicians took an interest in which files — so Parliament could not vote in the dark.',
    },
    antilogos: {
      el: 'Η ίδια η κυβέρνηση κατάργησε τον ΟΠΕΚΕΠΕ, έδωσε τους ελέγχους στην ΑΑΔΕ και οι υπουργοί παραιτήθηκαν: τα διορθωτικά μέτρα λειτούργησαν χωρίς αλγορίθμους. Και η γη στην Ελλάδα είναι κατακερματισμένη, οι μισθώσεις συχνά άτυπες — μια αυστηρή διασταύρωση θα έκοβε και έντιμους κτηνοτρόφους.',
      en: 'The government itself abolished OPEKEPE, moved controls to AADE, and ministers resigned: the corrections worked without algorithms. And Greek land is fragmented, leases often informal — a strict cross-check would cut honest herders too.',
    },
    reply: {
      el: 'Τα μέτρα ήρθαν μετά από χρόνια, ένα πρόστιμο εκατοντάδων εκατομμυρίων και μια δικογραφία της ΕΕ — όχι από τον έλεγχο του ίδιου του κράτους. Και η διασταύρωση δεν κόβει· σημαίνει. Ο κτηνοτρόφος με άτυπη μίσθωση εξηγεί σε έναν επιθεωρητή· ο «κτηνοτρόφος» με βοσκότοπο στη θάλασσα δεν μπορεί να εξηγήσει σε κανέναν.',
      en: 'The measures came after years, a penalty of hundreds of millions and an EU case file — not from the state’s own controls. And a cross-check does not cut; it flags. The herder with an informal lease explains to an inspector; the “herder” with pasture in the sea can explain to no one.',
    },
    lever: {
      el: 'Ζήτησε δημόσιο χάρτη όλων των πληρωμών βοσκοτόπων ανά αγροτεμάχιο και δικαιούχο — και μητρώο κάθε πολιτικής παρέμβασης στον οργανισμό πληρωμών.',
      en: 'Ask for a public map of every pasture payment by parcel and recipient — and a register of every political intervention at the paying agency.',
    },
    scores: { harm: 9, power: 9, recurrence: 8, remedy: 9 },
    status: {
      el: 'Ανοιχτή. Έρευνες της EPPO σε εξέλιξη· αίτημα άρσης ασυλίας 11 βουλευτών (Απρίλιος 2026). Όλοι τεκμαίρονται αθώοι.',
      en: 'Open. EPPO investigations ongoing; immunity requested for 11 MPs (April 2026). All presumed innocent.',
    },
    sources: [
      { title: 'Wikipedia — OPEKEPE (Payment and Control Agency)', url: 'https://en.wikipedia.org/wiki/Payment_and_Control_Agency_for_Guidance_and_Guarantee_Community_Aid' },
      { title: 'EPPO — New developments in the agricultural subsidy fraud probe (1 Apr 2026)', url: 'https://www.eppo.europa.eu/en/media/news/greece-new-developments-eppos-probe-large-scale-agricultural-subsidy-fraud' },
      { title: 'Euronews — Five Greek officials resign over farm-subsidy fraud (27 Jun 2025)', url: 'https://euronews.com/2025/06/27/five-greek-government-officials-resign-over-eu-farming-subsidy-fraud-allegations' },
      { title: 'Balkan Insight — Greek ministers resign over EU agriculture fraud (3 Apr 2026)', url: 'https://balkaninsight.com/2026/04/03/greek-ministers-resign-over-eu-agriculture-fraud-scandal/bi/' },
      { title: 'To Vima — Politico: PM blocks ministerial probe (Aug 2025)', url: 'https://www.tovima.com/politics/politico-greek-prime-minister-blocks-ministerial-probe-into-massive-eu-farm-subsidy-fraud/' },
    ],
  },
  {
    id: 'opekepe-auditor-2026',
    when: '–2026',
    place: { el: 'Ελλάδα', en: 'Greece' },
    title: {
      el: 'Η επικεφαλής Εσωτερικού Ελέγχου του οργανισμού πληρωμών κατήγγειλε κακοδιαχείριση — και απομακρύνθηκε',
      en: 'The payments agency’s head of internal audit reported malpractice — and was removed',
    },
    harmed: { el: 'Η Παρασκευή Τυχεροπούλου — και κάθε υπάλληλος που σκέφτεται να μιλήσει', en: 'Paraskevi Tycheropoulou — and every official thinking of speaking up' },
    plain: {
      el: 'Η υπάλληλος που είχε ως δουλειά να ελέγχει τον ΟΠΕΚΕΠΕ κατήγγειλε κακοδιαχείριση και απομακρύνθηκε· ένα δικαστήριο έκρινε την απομάκρυνση παράνομη και καταχρηστική, όμως στο μεταξύ ο οργανισμός και η θέση της είχαν καταργηθεί.',
      en: 'The official whose job was to audit OPEKEPE reported malpractice and was removed; a court found the removal unlawful and abusive, but by then the agency and her post had been abolished.',
    },
    facts: [
      {
        el: 'Η Παρασκευή Τυχεροπούλου, διευθύντρια Εσωτερικού Ελέγχου του ΟΠΕΚΕΠΕ, καταγγέλλει κακοδιαχείριση και απομακρύνεται από τη θέση της με απόφαση του τότε γενικού διευθυντή.',
        en: 'Paraskevi Tycheropoulou, OPEKEPE’s Director of Internal Audit, reports malpractice and is removed from her post by decision of the then director general.',
      },
      {
        el: 'Μάρτιος 2026: το Μονομελές Πρωτοδικείο Αθηνών κρίνει την απομάκρυνση «παράνομη και καταχρηστική», ακυρώνει την απόφαση και διατάζει την άμεση επαναφορά της, με ποινή 100 ευρώ για κάθε μέρα καθυστέρησης.',
        en: 'March 2026: the Athens Single-Member First Instance Court rules the removal “unlawful and abusive,” annuls the decision and orders her immediate reinstatement, with a €100 penalty for every day of delay.',
      },
      {
        el: 'Η ΑΑΔΕ, που απορρόφησε τον ΟΠΕΚΕΠΕ, ασκεί έφεση: η θέση της καταργήθηκε την 1η Ιανουαρίου 2026 με την ένταξη του οργανισμού στην ΑΑΔΕ.',
        en: 'AADE, which absorbed OPEKEPE, appeals: her post was abolished on 1 January 2026 when the agency was merged into AADE.',
      },
      {
        el: 'Ο δικηγόρος της χαρακτηρίζει τη στάση της ΑΑΔΕ παράνομη πράξη αντεκδίκησης.',
        en: 'Her lawyer calls AADE’s stance an unlawful act of retaliation.',
      },
    ],
    outcome: {
      el: 'Δικαίωση στα χαρτιά, χωρίς θέση στην πράξη. Το μήνυμα προς κάθε υπάλληλο: όποιος μιλά χάνει — ακόμη κι όταν κερδίζει.',
      en: 'Vindicated on paper, without a post in practice. The message to every official: whoever speaks loses — even when they win.',
    },
    breach: {
      el: 'Ένας οργανισμός πληρωμών υπάρχει για να προστατεύει τα χρήματα της γης· ο εσωτερικός έλεγχος είναι τα μάτια του. Όταν η ελέγκτρια που βλέπει απομακρύνεται, ο θεσμός δεν τυφλώνεται κατά λάθος — επιλέγει να μη βλέπει.',
      en: 'A paying agency exists to protect the money of the land; internal audit is its eyes. When the auditor who sees is removed, the institution is not blinded by accident — it chooses not to see.',
    },
    patterns: ['whistleblower-punished', 'captured-agency'],
    safeguards: ['shield', 'pressure-log', 'clock'],
    counterfactual: {
      el: 'Η Ασπίδα Μάρτυρα θα είχε σφραγίσει την καταγγελία της με χρονοσφραγίδα σε ανεξάρτητη αρχή. Η απομάκρυνσή της θα σημαινόταν αυτόματα ως πιθανά αντίποινα, και η διοίκηση θα έπρεπε να αποδείξει το αντίθετο πριν εκτελεστεί — όπως ήδη προβλέπει η ευρωπαϊκή οδηγία για τους μάρτυρες δημοσίου συμφέροντος.',
      en: 'The Witness Shield would have time-stamped and sealed her report with an independent authority. Her removal would have been flagged automatically as possible retaliation, and management would have had to prove otherwise before acting — as the EU whistleblower directive already requires.',
    },
    antilogos: {
      el: 'Οι διοικήσεις πρέπει να μπορούν να αλλάζουν στελέχη· αν κάθε καταγγέλλων γίνεται αμετακίνητος, η καταγγελία γίνεται ασυλία. Και η θέση καταργήθηκε με νόμο για όλον τον οργανισμό, όχι για εκείνη.',
      en: 'Managements must be able to change staff; if every reporter becomes immovable, a report becomes immunity. And the post was abolished by law for the whole agency, not for her.',
    },
    reply: {
      el: 'Γι’ αυτό η Ασπίδα δεν απαγορεύει τη μετακίνηση· ζητά απόδειξη. Αν η απομάκρυνση δεν σχετίζεται με την καταγγελία, η διοίκηση το δείχνει σε μία σελίδα. Και η κατάργηση μιας θέσης δεν σβήνει ό,τι είδε η ελέγκτρια — η καταγγελία πρέπει να επιβιώνει της θέσης.',
      en: 'That is why the Shield does not forbid a transfer; it asks for proof. If the removal is unrelated to the report, management shows it in a page. And abolishing a post does not erase what the auditor saw — the report must outlive the post.',
    },
    lever: {
      el: 'Ζήτησε κάθε καταγγελία υπαλλήλου για ευρωπαϊκά κονδύλια να καταγράφεται σε ανεξάρτητη αρχή, και κάθε δυσμενής μεταβολή του καταγγέλλοντος να δημοσιοποιείται με αιτιολογία.',
      en: 'Ask that every official’s report about EU funds be logged with an independent authority, and every adverse move against the reporter be published with its reasons.',
    },
    scores: { harm: 5, power: 7, recurrence: 9, remedy: 8 },
    status: {
      el: 'Ανοιχτή. Απόφαση επαναφοράς (Μάρτιος 2026)· εκκρεμεί η έφεση της ΑΑΔΕ.',
      en: 'Open. Reinstatement ordered (March 2026); AADE’s appeal pending.',
    },
    sources: [
      { title: 'HellaZ — Court win for whistleblower at scandal-ridden farm agency (2026)', url: 'https://hellaz.eu/portal/court-win-for-whistleblower-at-scandal-ridden-farm-subsidy-agency-584822.html' },
      { title: 'Athens Times — Tycheropoulou reinstated after court ruling (2026)', url: 'https://athens-times.com/opekepe-paraskevi-tycheropoulou-reinstated-after-court-overturns-dismissal/' },
      { title: 'Athens Times — AADE appeals the reinstatement (2026)', url: 'https://athens-times.com/aade-appeals-ruling-that-reinstated-paraskevi-tycheropoulou-at-opekepe/' },
      { title: 'Athens Times — Lawyer denounces AADE decision as retaliation (2026)', url: 'https://athens-times.com/paraskevi-tycheropoulou-lawyer-denounces-aade-decision-as-illegal-retaliatory-act/' },
    ],
  },
  {
    id: 'greek-blockades-2025',
    when: '2025–2026',
    place: { el: 'Ελλάδα', en: 'Greece' },
    title: {
      el: 'Οι αληθινοί αγρότες έκλεισαν τους δρόμους της χώρας με τα τρακτέρ τους — για να πληρωθούν όσα τους χρωστούσαν',
      en: 'Real farmers blocked the country’s roads with their tractors — to be paid what they were owed',
    },
    harmed: { el: 'Αγρότες και κτηνοτρόφοι σε όλη την Ελλάδα', en: 'Farmers and herders across Greece' },
    plain: {
      el: 'Μετά την απάτη, οι πληρωμές των έντιμων αγροτών καθυστέρησαν· από την 1η Δεκεμβρίου 2025 τρακτέρ έκλεισαν αυτοκινητόδρομους και συνοριακούς σταθμούς, με συγκρούσεις σε αεροδρόμια και λιμάνια.',
      en: 'After the fraud, honest farmers’ payments were delayed; from 1 December 2025 tractors blocked motorways and border crossings, with clashes at airports and ports.',
    },
    facts: [
      {
        el: '1 Δεκεμβρίου 2025: ξεκινούν μαζικά μπλόκα αγροτών και κτηνοτρόφων, με αιτία τις καθυστερημένες πληρωμές της ΚΑΠ μετά το σκάνδαλο του ΟΠΕΚΕΠΕ, το υψηλό κόστος παραγωγής, τις ζωονόσους και τις ανεπαρκείς αποζημιώσεις.',
        en: '1 December 2025: mass blockades by farmers and herders begin, driven by delayed CAP payments after the OPEKEPE scandal, high production costs, livestock epidemics and inadequate compensation.',
      },
      {
        el: 'Τα τρακτέρ κόβουν τον κεντρικό άξονα Βορρά–Νότου και κλείνουν συνοριακούς σταθμούς· σημειώνονται συγκρούσεις και καταλήψεις σε αεροδρόμια και λιμάνια.',
        en: 'Tractors cut the main north–south highway and close border crossings; there are clashes and occupations at airports and ports.',
      },
      {
        el: 'Οι αγρότες ζητούν να δημοσιοποιηθούν τα ονόματα όσων υπεξαίρεσαν, να επιστραφούν τα χρήματα στους πραγματικούς δικαιούχους και να μη μεταφερθεί ο ΟΠΕΚΕΠΕ στην ΑΑΔΕ.',
        en: 'Farmers demand the names of those who embezzled, the return of the money to the real beneficiaries, and that OPEKEPE not be transferred to AADE.',
      },
      {
        el: 'Η κυβέρνηση προτείνει πακέτο μέτρων· οι αγρότες κρατούν τα μπλόκα και στις αρχές του 2026.',
        en: 'The government offers a package of measures; farmers keep the blockades into early 2026.',
      },
    ],
    outcome: {
      el: 'Ο κόπος των έντιμων έγινε όμηρος της απάτης των άλλων. Η δικαιοσύνη για τους υπεύθυνους καθυστερεί· η πληρωμή των αθώων καθυστέρησε πρώτη.',
      en: 'The toil of the honest became hostage to the fraud of others. Justice for those responsible is slow; the payment of the innocent was delayed first.',
    },
    breach: {
      el: 'Ο Ησίοδος το έγραψε πριν από είκοσι επτά αιώνες: η δουλειά δεν είναι ντροπή. Ντροπή είναι ένα σύστημα όπου ο αεργός πληρώθηκε πρώτος και ο εργάτης βγαίνει στον δρόμο με το τρακτέρ του για να πάρει ό,τι του ανήκει.',
      en: 'Hesiod wrote it twenty-seven centuries ago: work is no disgrace. The disgrace is a system where the idle were paid first and the worker takes his tractor onto the highway to get what is his.',
    },
    patterns: ['honest-pay', 'captured-agency'],
    safeguards: ['fast-lane', 'open-ledger', 'clock'],
    counterfactual: {
      el: 'Η Προτεραιότητα στον Έντιμο θα είχε πληρώσει πρώτες και στην ώρα τους τις δηλώσεις που περνούσαν καθαρά τη διασταύρωση, αφήνοντας το πάγωμα μόνο στους σημασμένους φακέλους. Το Ανοιχτό Κατάστιχο θα έδειχνε σε κάθε αγρότη πού βρίσκεται η δική του πληρωμή — και σε ποιους πήγαν τα χρήματα που λείπουν.',
      en: 'The Honest Fast Lane would have paid first, and on time, the claims that passed the cross-checks cleanly, leaving the freeze only on flagged files. The Open Ledger would have shown every farmer where their own payment stood — and to whom the missing money went.',
    },
    antilogos: {
      el: 'Τα μπλόκα δεν αφορούν μόνο την απάτη: κόστος ενέργειας, τιμές παραγωγού, ζωονόσοι. Κανένα εργαλείο διαφάνειας δεν κάνει φθηνότερο το ρεύμα ή δεν σταματά μια επιζωοτία.',
      en: 'The blockades are not only about the fraud: energy costs, producer prices, livestock disease. No transparency tool makes electricity cheaper or stops an epidemic.',
    },
    reply: {
      el: 'Σωστά — και γι’ αυτό το εργαλείο δεν υπόσχεται να λύσει τα πάντα. Υπόσχεται κάτι μικρότερο και βέβαιο: ο έντιμος να μην πληρώνει με καθυστέρηση την απάτη του διπλανού του. Και ένα από τα αιτήματα των μπλόκων — «τα ονόματα» — είναι ακριβώς αυτό που δίνει το Ανοιχτό Κατάστιχο.',
      en: 'True — which is why this tool does not promise to fix everything. It promises something smaller and certain: that the honest do not pay, in delay, for the fraud next door. And one of the blockades’ demands — “the names” — is exactly what the Open Ledger gives.',
    },
    lever: {
      el: 'Ζήτησε νόμο: όταν παγώνουν πληρωμές λόγω απάτης, οι καθαρές δηλώσεις πληρώνονται μέσα σε 30 ημέρες και το πάγωμα αφορά μόνο τους σημασμένους φακέλους.',
      en: 'Ask for a law: when payments freeze because of fraud, clean claims are paid within 30 days and the freeze covers only flagged files.',
    },
    scores: { harm: 8, power: 6, recurrence: 8, remedy: 8 },
    status: {
      el: 'Ανοιχτό κοινωνικό ζήτημα· οι κινητοποιήσεις συνεχίστηκαν στις αρχές του 2026.',
      en: 'An open social issue; the mobilisations continued into early 2026.',
    },
    sources: [
      { title: 'Wikipedia — 2025 Greek farmer protests', url: 'https://en.wikipedia.org/wiki/2025_Greek_farmer_protests' },
      { title: 'Euronews — Farmers block Athens motorway as subsidy fallout continues (1 Dec 2025)', url: 'https://www.euronews.com/2025/12/01/greek-farmers-block-athens-motorway-as-fallout-from-illegal-subsidies-fraud-continues' },
      { title: 'Al Jazeera — Farmers clash with police over delayed EU subsidies (1 Dec 2025)', url: 'https://www.aljazeera.com/news/2025/12/1/greek-farmers-clash-with-police-amid-protests-over-delayed-eu-subsidies' },
      { title: 'ProtoThema — All the farmers’ demands (14 Dec 2025)', url: 'https://en.protothema.gr/2025/12/14/see-all-the-farmers-demands-to-the-government-they-do-not-want-opekepes-control-to-be-transferred-to-aade/' },
    ],
  },
  {
    id: 'slovakia-2018',
    when: '2018–2026',
    place: { el: 'Σλοβακία', en: 'Slovakia' },
    title: {
      el: 'Ένας δημοσιογράφος ερευνούσε πώς δίκτυο με δεσμούς στη μαφία έπαιρνε ευρωπαϊκές επιδοτήσεις — και δολοφονήθηκε μαζί με τη μνηστή του',
      en: 'A journalist investigating how a mafia-linked network harvested EU subsidies was murdered with his fiancée',
    },
    harmed: { el: 'Ján Kuciak και Martina Kušnírová, 27 ετών', en: 'Ján Kuciak and Martina Kušnírová, both 27' },
    plain: {
      el: 'Ο Ján Kuciak έγραφε για τους δεσμούς κυβερνητικών στελεχών με ιταλικό μαφιόζικο δίκτυο που κατηγορούνταν για απάτες με ευρωπαϊκές επιδοτήσεις· σκοτώθηκαν στο σπίτι τους, και οι έρευνες για τις επιδοτήσεις άνοιξαν μόνο μετά τον θάνατό του.',
      en: 'Ján Kuciak was writing about ties between government figures and an Italian mafia network accused of EU subsidy fraud; they were killed at home, and investigations into the subsidies opened only after his death.',
    },
    facts: [
      {
        el: '21 Φεβρουαρίου 2018: ο δημοσιογράφος Ján Kuciak και η μνηστή του Martina Kušnírová δολοφονούνται στο σπίτι τους στη Veľká Mača.',
        en: '21 February 2018: journalist Ján Kuciak and his fiancée Martina Kušnírová are murdered at their home in Veľká Mača.',
      },
      {
        el: 'Το ημιτελές του άρθρο περιέγραφε δεσμούς κυβερνητικών στελεχών με ιταλικό μαφιόζικο δίκτυο που κατηγορούνταν για απάτες με ευρωπαϊκές επιδοτήσεις.',
        en: 'His unfinished article described ties between government figures and an Italian mafia network accused of defrauding EU subsidies.',
      },
      {
        el: 'Η OLAF, η υπηρεσία της ΕΕ κατά της απάτης, επιβεβαίωσε ότι οι έρευνές της για άμεσες αγροτικές ενισχύσεις ξεκίνησαν εξαιτίας της δολοφονίας.',
        en: 'OLAF, the EU’s anti-fraud office, confirmed its investigations into direct farm payments began because of the murder.',
      },
      {
        el: 'Ο επιχειρηματίας που κατηγορείται ως εντολέας αθωώθηκε δύο φορές· τον Μάιο 2025 το Ανώτατο Δικαστήριο ακύρωσε ξανά την αθώωση και τον Ιανουάριο 2026 ξεκίνησε νέα δίκη.',
        en: 'The businessman accused of ordering the killing was acquitted twice; in May 2025 the Supreme Court quashed the acquittal again, and a new trial began in January 2026.',
      },
    ],
    outcome: {
      el: 'Οι έρευνες για τις επιδοτήσεις άνοιξαν μόνο αφού χύθηκε αίμα· ο φερόμενος εντολέας δικάζεται για τρίτη φορά.',
      en: 'Investigations into the subsidies opened only after blood was spilled; the alleged mastermind is on trial for the third time.',
    },
    breach: {
      el: 'Οι επιδοτήσεις υπάρχουν για να ζει ο αγρότης· εδώ έγιναν λόγος να πεθάνει ένας δημοσιογράφος. Όταν ο μόνος έλεγχος που λειτουργεί είναι ένας 27χρονος ρεπόρτερ, και οι θεσμοί κινούνται μόνο μετά την κηδεία του, ο έλεγχος έχει ιδιωτικοποιηθεί — και το κόστος του πληρώνεται με ζωές.',
      en: 'Subsidies exist so the farmer can live; here they became the reason a journalist died. When the only working check is a 27-year-old reporter, and institutions move only after his funeral, oversight has been privatised — and its cost is paid in lives.',
    },
    patterns: ['violence', 'captured-agency'],
    safeguards: ['open-ledger', 'shield', 'geo'],
    counterfactual: {
      el: 'Το Ανοιχτό Κατάστιχο θα είχε κάνει δημόσιο αυτό που ο Kuciak χρειάστηκε μήνες για να βρει: ποιοι εισέπρατταν ενισχύσεις για ποια γη, και με ποιους δεσμούς. Όταν η πληροφορία ανήκει σε όλους, δεν υπάρχει ένας άνθρωπος να σωπάσει. Η Ασπίδα Μάρτυρα θα κατέγραφε δημόσια κάθε απειλή κατά όσων ερευνούν — ώστε η απειλή να γίνεται είδηση πριν γίνει έγκλημα.',
      en: 'The Open Ledger would have made public what took Kuciak months to find: who was paid for which land, and with what ties. When information belongs to everyone, there is no single person to silence. The Witness Shield would log publicly every threat against those who investigate — so a threat becomes news before it becomes a crime.',
    },
    antilogos: {
      el: 'Η δημοσιοποίηση όλων των δικαιούχων δεν σταματά τη μαφία· μπορεί ακόμη και να της δείξει ποια γη αξίζει να αρπάξει και ποιον αγρότη να πιέσει.',
      en: 'Publishing every recipient does not stop the mafia; it might even show it which land is worth seizing and which farmer to squeeze.',
    },
    reply: {
      el: 'Η μαφία ήξερε ήδη· όσοι δεν ήξεραν ήταν οι πολίτες. Η διαφάνεια δεν δίνει στο έγκλημα κάτι που δεν έχει — του αφαιρεί το μονοπώλιο της πληροφορίας και τον έναν στόχο που αρκεί να σκοτώσει.',
      en: 'The mafia already knew; it was the citizens who did not. Transparency gives crime nothing it lacks — it takes away its monopoly on information and the single target it only has to kill.',
    },
    lever: {
      el: 'Ζήτησε δημόσια, αναζητήσιμη βάση όλων των αγροτικών πληρωμών με τους πραγματικούς ιδιοκτήτες των εταιρειών — ώστε κανένας δημοσιογράφος να μην είναι ο μόνος που ξέρει.',
      en: 'Ask for a public, searchable database of all farm payments with companies’ real owners — so no journalist is ever the only one who knows.',
    },
    scores: { harm: 9, power: 7, recurrence: 6, remedy: 6 },
    status: {
      el: 'Ανοιχτή για τον φερόμενο εντολέα: νέα δίκη από τον Ιανουάριο 2026. Τεκμαίρεται αθώος.',
      en: 'Open for the alleged mastermind: new trial since January 2026. Presumed innocent.',
    },
    sources: [
      { title: 'CPJ — Ján Kuciak', url: 'https://cpj.org/data/people/jan-kuciak/' },
      { title: 'ARTICLE 19 — Continued call for full justice for the Kuciak assassination', url: 'https://www.article19.org/resources/slovakia-continued-call-for-full-justice-for-kuciak-assassination/' },
      { title: 'EUobserver — Slovak rule of law in spotlight over journalist murder', url: 'https://euobserver.com/104334/slovak-rule-of-law-in-spotlight-over-journalist-murder' },
      { title: 'Euronews — MEPs want further investigations into misuse of EU funds in Slovakia (2021)', url: 'https://www.euronews.com/my-europe/2021/10/26/meps-want-further-investigations-into-misuse-of-eu-funds-in-slovakia' },
    ],
  },
  {
    id: 'czechia-2007',
    when: '2007–2026',
    place: { el: 'Τσεχία', en: 'Czech Republic' },
    title: {
      el: 'Ο πρωθυπουργός κατηγορείται για απάτη με επιδότηση της ΕΕ — και η Βουλή αρνήθηκε να άρει την ασυλία του',
      en: 'The prime minister is charged with EU subsidy fraud — and parliament refused to lift his immunity',
    },
    harmed: { el: 'Οι μικρές επιχειρήσεις για τις οποίες προοριζόταν η ενίσχυση', en: 'The small businesses the support was meant for' },
    plain: {
      el: 'Ο ιδιοκτήτης ενός από τους μεγαλύτερους αγροτοδιατροφικούς ομίλους της Ευρώπης κατηγορείται ότι έβγαλε ένα συνεδριακό κέντρο από τον όμιλο για να πάρει επιδότηση για μικρές επιχειρήσεις· ως πρωθυπουργός, η ασυλία του παγώνει τη δίκη ως το 2029.',
      en: 'The owner of one of Europe’s largest agri-food groups is charged with moving a conference centre out of the group to win a small-business subsidy; as prime minister, his immunity freezes the trial until 2029.',
    },
    facts: [
      {
        el: '2007–2008: η εταιρεία του συνεδριακού κέντρου Čapí hnízdo («Φωλιά του Πελαργού») μεταφέρεται από τον όμιλο Agrofert του Andrej Babiš σε μέλη της οικογένειάς του — κατά την κατηγορία, για να πάρει επιδότηση περίπου 2 εκατ. ευρώ για μικρομεσαίες επιχειρήσεις.',
        en: '2007–2008: the company behind the Čapí hnízdo (“Stork’s Nest”) conference centre is moved from Andrej Babiš’s Agrofert group to his family members — prosecutors say, to win a roughly €2 million subsidy meant for small and medium businesses.',
      },
      {
        el: '2022: ο πρώην πρωθυπουργός και η πρώην σύμβουλός του παραπέμπονται σε δίκη. Το δικαστήριο της Πράγας τους αθωώνει δύο φορές.',
        en: '2022: the former prime minister and his former adviser are sent to trial. The Prague court acquits them twice.',
      },
      {
        el: 'Ιούνιος 2025: το Εφετείο της Πράγας ακυρώνει την αθώωση και δεσμεύει το δικαστήριο να τους κρίνει ένοχους με βάση τα στοιχεία.',
        en: 'June 2025: the Prague High Court overturns the acquittal and binds the lower court to find them guilty on the evidence.',
      },
      {
        el: 'Οκτώβριος 2025: το κόμμα του κερδίζει τις εκλογές και επιστρέφει πρωθυπουργός. Το 2026 η Βουλή απορρίπτει την άρση της ασυλίας του — η δίκη δεν μπορεί να συνεχιστεί πριν λήξει η θητεία του, το 2029.',
        en: 'October 2025: his party wins the election and he returns as prime minister. In 2026 the Chamber refuses to lift his immunity — the trial cannot resume before his term ends in 2029.',
      },
    ],
    outcome: {
      el: 'Ο κατηγορούμενος για απάτη με ευρωπαϊκά κονδύλια κυβερνά τη χώρα που διαχειρίζεται τα ευρωπαϊκά κονδύλια· η δίκη του έχει παγώσει.',
      en: 'The man charged with EU-funds fraud governs the country that manages EU funds; his trial is frozen.',
    },
    breach: {
      el: 'Η ενίσχυση για μικρές επιχειρήσεις υπάρχει επειδή ο μικρός δεν μπορεί να σταθεί απέναντι στον μεγάλο. Όταν ο μεγαλύτερος «ντύνεται» μικρός για να την πάρει, και μετά γίνεται ο νομοθέτης που κρίνει αν θα δικαστεί, ο θεσμός δεν λυγίζει απλώς· αντιστρέφεται.',
      en: 'Small-business support exists because the small cannot stand against the large. When the largest dresses as small to take it, and then becomes the lawmaker deciding whether he will be tried, the institution does not merely bend; it inverts.',
    },
    patterns: ['owner-regulator', 'self-shield'],
    safeguards: ['interest-map', 'open-ledger', 'clock'],
    counterfactual: {
      el: 'Ο Χάρτης Συμφερόντων θα έβλεπε ότι η «μικρή» εταιρεία ανήκε σε οικογένεια που ελέγχει έναν από τους μεγαλύτερους ομίλους της χώρας — πριν εγκριθεί η επιδότηση, όχι δεκαπέντε χρόνια μετά. Το Ρολόι θα έδειχνε δημόσια πόσος χρόνος χάνεται όσο η ασυλία κρατά τη δίκη παγωμένη.',
      en: 'The Interest Map would have seen that the “small” company belonged to a family controlling one of the country’s largest groups — before the subsidy was approved, not fifteen years later. The Clock would show publicly how much time is lost while immunity keeps the trial frozen.',
    },
    antilogos: {
      el: 'Οι ψηφοφόροι τον επανεξέλεξαν γνωρίζοντας την υπόθεση· η ασυλία των βουλευτών προστατεύει το κοινοβούλιο από στοχευμένες διώξεις, και ο ίδιος αθωώθηκε δύο φορές από δικαστήριο.',
      en: 'Voters re-elected him knowing the case; parliamentary immunity protects the legislature from targeted prosecution, and he was acquitted twice by a court.',
    },
    reply: {
      el: 'Η εκλογή δεν είναι αθώωση και η ασυλία δεν είναι κρίση. Ένα σώμα που αποφασίζει αν θα δικαστεί ο αρχηγός της πλειοψηφίας του κρίνει τον εαυτό του. Και οι δύο αθωώσεις ακυρώθηκαν από ανώτερο δικαστήριο — το ερώτημα μένει ανοιχτό και οφείλει να απαντηθεί από δικαστή, όχι από ψηφοφορία.',
      en: 'An election is not an acquittal, and immunity is not a judgment. A chamber deciding whether its own majority leader is tried is judging itself. And both acquittals were overturned by a higher court — the question stays open and must be answered by a judge, not a vote.',
    },
    lever: {
      el: 'Ζήτησε η ασυλία των βουλευτών να μην καλύπτει υποθέσεις απάτης με ευρωπαϊκά κονδύλια — και κάθε δικαιούχος ενίσχυσης να δηλώνει τον πραγματικό τελικό ιδιοκτήτη του.',
      en: 'Ask that parliamentary immunity not cover EU-funds fraud — and that every recipient of support declare its ultimate beneficial owner.',
    },
    scores: { harm: 5, power: 10, recurrence: 7, remedy: 7 },
    status: {
      el: 'Ανοιχτή· η δίκη έχει παγώσει όσο διαρκεί η ασυλία. Τεκμαίρεται αθώος.',
      en: 'Open; the trial is frozen while immunity lasts. Presumed innocent.',
    },
    sources: [
      { title: 'Brno Daily — Appeal hearing begins in the subsidy fraud case (May 2025)', url: 'https://brnodaily.com/2025/05/26/news/politics/appeal-hearing-begins-in-babiss-subsidy-fraud-case-with-intense-media-interest/' },
      { title: 'Brno Daily — Babiš to block requests for his release to be tried (Jan 2026)', url: 'https://brnodaily.com/2026/01/15/news/politics/babis-to-block-requests-for-his-release-to-be-tried-again-in-subsidy-fraud-case/' },
      { title: 'Expats.cz — What the new twist in the court case means', url: 'https://www.expats.cz/czech-news/article/explained-what-a-new-twist-in-ex-pm-s-court-case-means-for-czech-politics' },
      { title: 'Al Jazeera — Ex-PM and aide indicted in EU subsidy fraud case (2022)', url: 'https://www.aljazeera.com/news/2022/3/21/czech-ex-pm-babis-his-aide-indicted-in-eu-subsidy-fraud-case' },
    ],
  },
]
