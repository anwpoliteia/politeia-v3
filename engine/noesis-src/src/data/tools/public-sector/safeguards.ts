// The ten safeguards of ΑΡΙΣΤΕΙΔΗΣ. Each is a PROPOSAL (Hard Rule 1): the AI
// watches those who appoint, pay and fund — never the ordinary civil servant;
// named humans decide.

import type { Safeguard } from '../types'

export const SAFEGUARDS: readonly Safeguard[] = [
  {
    id: 'open-hiring',
    n: 'Σ1',
    name: { el: 'Ανοιχτή Πρόσληψη', en: 'Open Hiring' },
    precedent: {
      el: 'Το Σύνταγμα (άρθρο 103) ορίζει ήδη ότι η πρόσληψη στο Δημόσιο γίνεται με αντικειμενικά κριτήρια, μέσω ανεξάρτητης αρχής — του ΑΣΕΠ.',
      en: 'The Constitution (Article 103) already requires public hiring by objective criteria, through an independent authority — ASEP.',
    },
    plain: {
      el: 'Κάθε πρόσληψη στο Δημόσιο — και κάθε προσωρινή — γίνεται με ανοιχτή, δημοσιευμένη διαδικασία, με ανώνυμη δημόσια βαθμολογία.',
      en: 'Every public hire — including temporary ones — goes through an open, published procedure, with an anonymised public score.',
    },
    how: {
      el: 'Η προκήρυξη, τα κριτήρια και η τελική κατάταξη δημοσιεύονται. Η ΤΝ σημαίνει κάθε πρόσληψη που έγινε εκτός διαγωνισμού, κάθε «ειδική» διαδικασία και κάθε σύμβαση που ανανεώνεται για μόνιμες ανάγκες.',
      en: 'The call, the criteria and the final ranking are published. The AI flags every hire made outside a competition, every “special” procedure and every contract renewed for permanent needs.',
    },
    humans: {
      el: 'Ο ΑΣΕΠ και οι επιτροπές κρίνουν τους υποψηφίους· η ΤΝ απλώς δεν αφήνει την παράκαμψη να περάσει σιωπηλά.',
      en: 'ASEP and the committees judge the candidates; the AI simply does not let a bypass pass silently.',
    },
    antilogos: {
      el: 'Οι διαγωνισμοί αργούν μήνες ή χρόνια, ενώ ένα νοσοκομείο ή ένας δήμος χρειάζεται προσωπικό αύριο — γι’ αυτό υπάρχουν οι προσωρινές προσλήψεις. Και οι εξετάσεις μετρούν την απομνημόνευση, όχι πάντα την ικανότητα.',
      en: 'Competitions take months or years, while a hospital or a municipality needs staff tomorrow — that is why temporary hiring exists. And exams measure memorisation, not always ability.',
    },
    distributional: {
      el: 'Χάνουν όσοι μπαίνουν με «άκρη». Κερδίζουν οι υποψήφιοι χωρίς γνωριμίες — και οι πολίτες που θα εξυπηρετηθούν από τους καλύτερους.',
      en: 'Those who get in through “connections” lose. Candidates without connections gain — and so do citizens served by the best.',
    },
    virtues: ['dikaiosyne', 'sophrosyne'],
    delta: { institutional_justice: 5, affiliation_trust: 3, economic_security: 1 },
  },
  {
    id: 'one-payroll',
    n: 'Σ2',
    name: { el: 'Μία Μισθοδοσία, Ένας Αριθμός', en: 'One Payroll, One Number' },
    precedent: {
      el: 'Το 2016 η Νιγηρία αφαίρεσε από τη μισθοδοσία 23.846 ανύπαρκτους υπαλλήλους συνδέοντας κάθε μισθό με τον μοναδικό τραπεζικό αριθμό ταυτοποίησης του δικαιούχου.',
      en: 'In 2016 Nigeria removed 23,846 non-existent workers from its payroll by linking each salary to the payee’s unique bank verification number.',
    },
    plain: {
      el: 'Κάθε δημόσιος μισθός και κάθε σύνταξη πληρώνεται μόνο σε έναν μοναδικό αριθμό — ΑΜΚΑ και ΑΦΜ — που διασταυρώνεται καθημερινά με το μητρώο θανάτων και το μητρώο προσωπικού.',
      en: 'Every public salary and pension is paid only against one unique number — social-security and tax ID — cross-checked daily with the death register and the staff register.',
    },
    how: {
      el: 'Η ΤΝ ελέγχει αν ένας αριθμός πληρώνεται δύο φορές, αν ένας λογαριασμός δέχεται πολλούς μισθούς, αν μια σύνταξη πληρώνεται μετά από θάνατο, ή αν κάποιος μισθοδοτείται σε υπηρεσία όπου δεν εμφανίζεται ποτέ. Κάθε σήμα πάει σε ελεγκτή, όχι σε αυτόματη διακοπή.',
      en: 'The AI checks whether one number is paid twice, whether one account receives many salaries, whether a pension is paid after a death, or whether someone is paid by an office where they never appear. Every flag goes to an auditor, not to an automatic cut-off.',
    },
    humans: {
      el: 'Ο ελεγκτής εξετάζει κάθε σήμα πριν σταματήσει οποιαδήποτε πληρωμή — ένας ηλικιωμένος που ξέχασε ένα χαρτί δεν είναι απατεώνας.',
      en: 'The auditor examines each flag before any payment stops — an elderly person who forgot a form is not a fraudster.',
    },
    antilogos: {
      el: 'Οι αυτόματες διασταυρώσεις κάνουν λάθη: ένας ζωντανός άνθρωπος μπορεί να καταγραφεί νεκρός, και μια διακοπή σύνταξης μπορεί να αφήσει έναν ηλικιωμένο χωρίς εισόδημα για μήνες.',
      en: 'Automatic cross-checks make mistakes: a living person can be recorded as dead, and a stopped pension can leave an elderly person without income for months.',
    },
    distributional: {
      el: 'Χάνουν όσοι εισέπρατταν για ανθρώπους που δεν υπήρχαν ή είχαν πεθάνει. Κερδίζουν οι πραγματικοί συνταξιούχοι και υπάλληλοι.',
      en: 'Those collecting for people who did not exist or had died lose. Real pensioners and staff gain.',
    },
    virtues: ['sophrosyne', 'dikaiosyne'],
    delta: { economic_security: 4, institutional_justice: 3 },
  },
  {
    id: 'document-seal',
    n: 'Σ3',
    name: { el: 'Δοκιμασία Δικαιολογητικών', en: 'Scrutiny of Credentials' },
    precedent: {
      el: 'Στην Αθήνα κάθε άρχων περνούσε δοκιμασία πριν αναλάβει — έλεγχο δημόσιο ότι πληροί όσα απαιτεί ο νόμος (Αθηναίων Πολιτεία 55).',
      en: 'In Athens every magistrate underwent a dokimasia before taking office — a public check that they met what the law required (Constitution of the Athenians 55).',
    },
    plain: {
      el: 'Βεβαιώσεις προϋπηρεσίας, πτυχία και πιστοποιητικά για πρόσληψη ή μονιμοποίηση εκδίδονται ψηφιακά από τον φορέα που τα βεβαιώνει και ελέγχονται αυτόματα — όχι σε χαρτί που μπορεί να πλαστογραφηθεί.',
      en: 'Service certificates, degrees and documents for hiring or tenure are issued digitally by the body that certifies them and checked automatically — not on paper that can be forged.',
    },
    how: {
      el: 'Κάθε δικαιολογητικό φέρει ψηφιακή υπογραφή του εκδότη. Η ΤΝ διασταυρώνει την προϋπηρεσία με τα ασφαλιστικά μητρώα — αν κάποιος δηλώνει χρόνια εργασίας για τα οποία δεν πληρώθηκαν ποτέ εισφορές, το σημαίνει.',
      en: 'Every document carries the issuer’s digital signature. The AI cross-checks claimed service against social-security records — if someone declares years of work for which no contributions were ever paid, it flags it.',
    },
    humans: {
      el: 'Τα υπηρεσιακά συμβούλια αποφασίζουν· απλώς δεν μπορούν πια να δεχτούν χαρτί που κανείς δεν έλεγξε.',
      en: 'Service councils decide; they simply can no longer accept paper nobody checked.',
    },
    antilogos: {
      el: 'Παλιοί εργοδότες και αρχεία δεν υπάρχουν πάντα ψηφιακά· ένας τίμιος εργαζόμενος με δεκαετίες δουλειάς σε μικρό φορέα μπορεί να μην μπορεί να αποδείξει την προϋπηρεσία του.',
      en: 'Old employers and archives are not always digital; an honest worker with decades at a small body may be unable to prove their service.',
    },
    distributional: {
      el: 'Χάνουν όσοι μπήκαν με πλαστά χαρτιά. Κερδίζουν οι υποψήφιοι που διαγωνίζονται τίμια για λίγες θέσεις.',
      en: 'Those who got in with forged papers lose. Candidates who compete honestly for few posts gain.',
    },
    virtues: ['dikaiosyne', 'sophia'],
    delta: { institutional_justice: 4, affiliation_trust: 3 },
  },
  {
    id: 'hiring-audit',
    n: 'Σ4',
    name: { el: 'Ο Έλεγχος των Προσλήψεων', en: 'The Hiring Audit' },
    precedent: {
      el: 'Στο Σικάγο, μετά από δεκαετίες πολιτικών προσλήψεων, ένας ανεξάρτητος επόπτης και ο Γενικός Επιθεωρητής της πόλης ελέγχουν πλέον τις προσλήψεις· το 2014 δικαστήριο διαπίστωσε «ουσιαστική συμμόρφωση».',
      en: 'In Chicago, after decades of political hiring, an independent monitor and the city’s Inspector General now oversee hiring; in 2014 a court found “substantial compliance.”',
    },
    plain: {
      el: 'Η ΤΝ ελέγχει τα μοτίβα των προσλήψεων — όχι τους ανθρώπους — για σημάδια ρουσφετιού: προσλήψεις λίγο πριν από εκλογές, βαθμολογίες που αλλάζουν, οι ίδιοι «ευνοούμενοι» από τις ίδιες επιτροπές.',
      en: 'The AI checks hiring patterns — not people — for signs of patronage: hires just before elections, scores that change, the same “favourites” from the same committees.',
    },
    how: {
      el: 'Τα ανώνυμα δεδομένα προσλήψεων κάθε φορέα αναλύονται με δημόσια μέθοδο. Τα σήματα πηγαίνουν σε ανεξάρτητο επιθεωρητή, που μπορεί να ζητήσει τα πρακτικά και τις βαθμολογίες. Κάθε αλλαγή βαθμολογίας μετά τη συνέντευξη καταγράφεται με όνομα.',
      en: 'Each body’s anonymised hiring data is analysed with a public method. Flags go to an independent inspector, who can request minutes and scores. Any change of score after an interview is recorded with a name.',
    },
    humans: {
      el: 'Ο επιθεωρητής ερευνά· η ΤΝ δεν κρίνει κανέναν υποψήφιο.',
      en: 'The inspector investigates; the AI judges no candidate.',
    },
    antilogos: {
      el: 'Η εξωτερική εποπτεία κοστίζει και μπορεί να γίνει ατέρμονη — το αμερικανικό εφετείο είπε το 2022 ότι η εποπτεία στο Σικάγο είχε γίνει «αόριστη ομοσπονδιακή δικαστική επιτήρηση». Και ένας φορέας που φοβάται τον έλεγχο μπορεί να μην προσλαμβάνει καθόλου.',
      en: 'External oversight costs money and can become endless — the US appeals court said in 2022 that Chicago-area oversight had become “indefinite federal judicial supervision.” And a body afraid of audit may stop hiring altogether.',
    },
    distributional: {
      el: 'Χάνουν οι πολιτικοί μηχανισμοί προσλήψεων. Κερδίζουν όσοι είναι «εξίσου ή περισσότερο ικανοί» και προσπερνιούνταν.',
      en: 'Political hiring machines lose. Those “equally or more qualified” who were passed over gain.',
    },
    virtues: ['dikaiosyne', 'parrhesia'],
    delta: { institutional_justice: 4, affiliation_trust: 3 },
  },
  {
    id: 'merit-boards',
    n: 'Σ5',
    name: { el: 'Διοικήσεις με Αξιοκρατία', en: 'Boards by Merit' },
    precedent: {
      el: 'Η Επιτροπή Zondo της Νότιας Αφρικής πρότεινε το 2022 μόνιμη ανεξάρτητη επιτροπή, με δημόσιες ακροάσεις, για τους διορισμούς στις διοικήσεις δημόσιων επιχειρήσεων· στην Ελλάδα, 90 γενικοί διευθυντές επιλέχθηκαν για πρώτη φορά με κοινή διαδικασία το 2019.',
      en: 'South Africa’s Zondo Commission proposed in 2022 a standing independent committee, with public hearings, for appointments to state-company boards; in Greece, 90 directors-general were chosen through a common process for the first time in 2019.',
    },
    plain: {
      el: 'Οι διοικήσεις δημόσιων οργανισμών και επιχειρήσεων επιλέγονται από ανεξάρτητη επιτροπή, με δημοσιευμένα κριτήρια και δημόσια ακρόαση — ο υπουργός διορίζει μέσα από τη λίστα των καταλληλότερων.',
      en: 'Boards of public bodies and state companies are selected by an independent committee, with published criteria and a public hearing — the minister appoints from the list of the best qualified.',
    },
    how: {
      el: 'Η ΤΝ δημοσιεύει τα βιογραφικά, τα κριτήρια και τη βαθμολογία των υποψηφίων, και σημαίνει κάθε διορισμό εκτός λίστας ή κάθε απομάκρυνση στελέχους χωρίς πειθαρχική διαδικασία.',
      en: 'The AI publishes candidates’ CVs, criteria and scores, and flags every appointment made outside the list, and every removal of an executive without disciplinary process.',
    },
    humans: {
      el: 'Η κυβέρνηση διορίζει — δημοκρατικά λογοδοτεί γι’ αυτό — αλλά μέσα από μια λίστα που δεν έφτιαξε η ίδια.',
      en: 'The government appoints — and is democratically accountable for it — but from a list it did not draw up itself.',
    },
    antilogos: {
      el: 'Μια εκλεγμένη κυβέρνηση πρέπει να μπορεί να εφαρμόσει το πρόγραμμά της με ανθρώπους που το πιστεύουν· «ανεξάρτητες» επιτροπές μπορεί να αναπαράγουν μια κλειστή ελίτ. Στη Νότια Αφρική, το κυβερνών κόμμα υπερασπίζεται την πρακτική ως εργαλείο διόρθωσης των ανισοτήτων του απαρτχάιντ.',
      en: 'An elected government must be able to carry out its programme with people who believe in it; “independent” committees may reproduce a closed elite. In South Africa, the governing party defends the practice as a tool to correct apartheid-era imbalances.',
    },
    distributional: {
      el: 'Χάνουν τα κομματικά στελέχη που περίμεναν θέσεις. Κερδίζουν οι χρήστες του ρεύματος, των τρένων και των νοσοκομείων που διοικούνται από τους ικανότερους.',
      en: 'Party cadres waiting for posts lose. Users of power, trains and hospitals run by the most capable gain.',
    },
    virtues: ['sophia', 'dikaiosyne'],
    delta: { institutional_justice: 4, economic_security: 3, affiliation_trust: 3 },
  },
  {
    id: 'fund-trace',
    n: 'Σ6',
    name: { el: 'Ίχνος Κάθε Κονδυλίου', en: 'Every Fund Traced' },
    precedent: {
      el: 'Το 2013 το Ανώτατο Δικαστήριο των Φιλιππίνων κατάργησε τα κονδύλια που διέθεταν οι βουλευτές κατά την κρίση τους, κρίνοντας αντισυνταγματικό κάθε ρόλο νομοθέτη στην εκτέλεση του προϋπολογισμού.',
      en: 'In 2013 the Philippine Supreme Court abolished the funds legislators allocated at their discretion, holding any role for lawmakers in executing the budget unconstitutional.',
    },
    plain: {
      el: 'Κάθε διακριτικό κονδύλι — επιχορηγήσεις σε οργανώσεις, έκτακτες ενισχύσεις, μεταβιβάσεις — ακολουθείται ως τον τελικό δικαιούχο, και κανένα χρήμα δεν περνά έξω από τον δημοσιονομικό έλεγχο.',
      en: 'Every discretionary fund — grants to organisations, emergency aid, transfers — is traced to the final beneficiary, and no money passes outside financial audit.',
    },
    how: {
      el: 'Η ΤΝ συνδέει κάθε πληρωμή με τον δικαιούχο, τους πραγματικούς δικαιούχους του και το έργο που δηλώθηκε. Σημαίνει οργανώσεις χωρίς ιστορικό, δικαιούχους που δεν πληρούν τα κριτήρια, μεσάζοντες που παίρνουν προμήθειες και κάθε διαδικασία που παρακάμπτει τον ελεγκτή.',
      en: 'The AI links each payment to the recipient, its beneficial owners and the declared project. It flags organisations with no track record, ineligible beneficiaries, intermediaries taking commissions and any procedure that bypasses the auditor.',
    },
    humans: {
      el: 'Οι ελεγκτές και τα δικαστήρια κρίνουν· η ΤΝ απλώς δεν αφήνει κανένα ευρώ χωρίς διεύθυνση.',
      en: 'Auditors and courts judge; the AI simply leaves no euro without an address.',
    },
    antilogos: {
      el: 'Η ευέλικτη χρηματοδότηση χρειάζεται σε κρίσεις — μια κλειστή επιχείρηση, μια απολυμένη οικογένεια δεν μπορεί να περιμένει τον ελεγκτή. Και οι βουλευτές ξέρουν τις ανάγκες της περιφέρειάς τους καλύτερα από ένα υπουργείο.',
      en: 'Flexible funding is needed in crises — a closed business or a laid-off family cannot wait for the auditor. And MPs know their district’s needs better than a ministry.',
    },
    distributional: {
      el: 'Χάνουν οι ψεύτικες οργανώσεις και οι μεσάζοντες. Κερδίζουν οι φτωχές κοινότητες για τις οποίες υποτίθεται ότι γίνονταν τα «έργα».',
      en: 'Fake organisations and middlemen lose. The poor communities the “projects” were supposedly for gain.',
    },
    virtues: ['dikaiosyne', 'sophrosyne'],
    delta: { economic_security: 4, institutional_justice: 4 },
  },
  {
    id: 'influence-ledger',
    n: 'Σ7',
    name: { el: 'Μητρώο Επιρροής', en: 'The Influence Ledger' },
    precedent: {
      el: 'Μετά το σκάνδαλο του 2022, το Ευρωπαϊκό Κοινοβούλιο υιοθέτησε δηλώσεις περιουσίας στην αρχή και στο τέλος κάθε θητείας και δημοσίευση των συναντήσεων με ομάδες συμφερόντων και τρίτες χώρες (2023).',
      en: 'After the 2022 scandal, the European Parliament adopted asset declarations at the start and end of each term and publication of meetings with interest groups and third countries (2023).',
    },
    plain: {
      el: 'Οι συναντήσεις των εκπροσώπων με ομάδες συμφερόντων και ξένες κυβερνήσεις, τα δώρα και τα ταξίδια δημοσιεύονται — και η ΤΝ τα διασταυρώνει με τις ψήφους και τις δηλώσεις περιουσίας.',
      en: 'Representatives’ meetings with interest groups and foreign governments, gifts and trips are published — and the AI cross-checks them against votes and asset declarations.',
    },
    how: {
      el: 'Όταν ένας εκπρόσωπος αλλάζει στάση μετά από σειρά συναντήσεων ή ταξιδιών, ή όταν η περιουσία του αυξάνεται πέρα από τα έσοδά του, η ΤΝ το σημαίνει στην επιτροπή δεοντολογίας — με ημερομηνίες, όχι με υπονοούμενα.',
      en: 'When a representative shifts stance after a series of meetings or trips, or when their wealth grows beyond their income, the AI flags it to the ethics committee — with dates, not insinuation.',
    },
    humans: {
      el: 'Η επιτροπή δεοντολογίας και οι εισαγγελείς κρίνουν· μια συνάντηση δεν είναι έγκλημα.',
      en: 'The ethics committee and prosecutors judge; a meeting is not a crime.',
    },
    antilogos: {
      el: 'Οι εκπρόσωποι πρέπει να συναντούν πολίτες, ενώσεις και ξένους αξιωματούχους — είναι η δουλειά τους. Η διασταύρωση συναντήσεων και ψήφων μπορεί να δημιουργήσει ψευδείς υποψίες και να τους κάνει να αποφεύγουν τον διάλογο.',
      en: 'Representatives must meet citizens, associations and foreign officials — it is their job. Cross-checking meetings against votes may create false suspicion and make them avoid dialogue.',
    },
    distributional: {
      el: 'Χάνει η κρυφή επιρροή. Κερδίζουν οι ψηφοφόροι, που ξέρουν ποιος μίλησε στον εκπρόσωπό τους πριν ψηφίσει.',
      en: 'Hidden influence loses. Voters gain, knowing who spoke to their representative before the vote.',
    },
    virtues: ['parrhesia', 'dikaiosyne'],
    delta: { institutional_justice: 5, affiliation_trust: 4 },
  },
  {
    id: 'enforce-annulment',
    n: 'Σ8',
    name: { el: 'Η Ακύρωση Εκτελείται', en: 'Annulments Enforced' },
    precedent: {
      el: 'Το Σύνταγμα απαγορεύει ρητά τη μονιμοποίηση προσωπικού ή τη μετατροπή των συμβάσεών του σε αορίστου χρόνου με νόμο (άρθρο 103 παρ. 8).',
      en: 'The Constitution expressly forbids making staff permanent, or converting their contracts to indefinite ones, by law (Article 103(8)).',
    },
    plain: {
      el: 'Όταν ο ΑΣΕΠ ή ένα δικαστήριο ακυρώνει μια πρόσληψη ή μονιμοποίηση, η απόφαση εκτελείται μέσα σε προθεσμία — και κάθε καθυστέρηση φαίνεται δημόσια με το όνομα του υπευθύνου.',
      en: 'When ASEP or a court annuls a hire or a tenure decision, the ruling is enforced within a deadline — and any delay shows publicly with the responsible person’s name.',
    },
    how: {
      el: 'Η ΤΝ συνδέει κάθε ακυρωτική απόφαση με τη μισθοδοσία. Αν ο μισθός συνεχίζει να πληρώνεται μετά την προθεσμία, το σημαίνει στο Ελεγκτικό Συνέδριο και στη δημοσιότητα.',
      en: 'The AI links every annulment to the payroll. If the salary keeps being paid after the deadline, it flags it to the Court of Audit and to the public.',
    },
    humans: {
      el: 'Οι αρχές αποφασίζουν την ακύρωση· ο φορέας την εκτελεί — με δικαίωμα προσφυγής του εργαζομένου.',
      en: 'The authorities decide the annulment; the body enforces it — with the worker’s right of appeal intact.',
    },
    antilogos: {
      el: 'Άνθρωποι που δούλεψαν μια δεκαετία καλόπιστα, πληρώνοντας εισφορές και κάνοντας οικογένειες, δεν μπορούν να απολύονται για λάθη που έκαναν άλλοι· η εκτέλεση χωρίς έλεος μπορεί να είναι νέα αδικία.',
      en: 'People who worked a decade in good faith, paying contributions and raising families, cannot be dismissed for others’ mistakes; enforcement without mercy can be a new injustice.',
    },
    distributional: {
      el: 'Χάνουν όσοι μπήκαν με ψευδή στοιχεία. Κερδίζουν όσοι περιμένουν στη σειρά του διαγωνισμού.',
      en: 'Those who got in on false information lose. Those waiting their turn in the competition gain.',
    },
    virtues: ['dikaiosyne', 'andreia'],
    delta: { institutional_justice: 4, affiliation_trust: 2 },
  },
  {
    id: 'no-oblivion',
    n: 'Σ9',
    name: { el: 'Χωρίς Σιωπηλή Λήθη', en: 'No Silent Forgetting' },
    precedent: {
      el: 'Στις εὔθυνες, κάθε πολίτης μπορούσε να καταθέσει κατηγορία κατά άρχοντα που μόλις είχε λογοδοτήσει (Αθηναίων Πολιτεία 48) — η λογοδοσία δεν έληγε σιωπηλά.',
      en: 'At the euthynai, any citizen could bring a charge against a magistrate who had just rendered account (Constitution of the Athenians 48) — accountability did not end silently.',
    },
    plain: {
      el: 'Κάθε υπόθεση διαφθοράς σε δημόσιο αξίωμα δείχνει δημόσια πόσο διαρκεί, κάθε αναβολή, και αν έληξε με χάρη, παραγραφή ή ακύρωση — με την αιτιολογία.',
      en: 'Every case of corruption in public office shows publicly how long it has lasted, every adjournment, and whether it ended in a pardon, time limits or annulment — with the reasons.',
    },
    how: {
      el: 'Η ΤΝ ενημερώνει έναν δημόσιο πίνακα από τις δικαστικές αποφάσεις. Όταν μια χάρη, μια παραγραφή ή μια ακύρωση κλείνει υπόθεση δημόσιου αξιώματος, η αιτιολογία δημοσιεύεται δίπλα της — ώστε η κοινωνία να κρίνει το μοτίβο, όχι μόνο την περίπτωση.',
      en: 'The AI updates a public table from court rulings. When a pardon, time limit or annulment closes a public-office case, the reasoning is published beside it — so society judges the pattern, not only the instance.',
    },
    humans: {
      el: 'Τα δικαστήρια και ο Πρόεδρος αποφασίζουν όπως ορίζει ο νόμος· ο πίνακας απλώς θυμάται.',
      en: 'Courts and the head of state decide as the law provides; the table simply remembers.',
    },
    antilogos: {
      el: 'Η χάρη και η παραγραφή είναι νόμιμοι θεσμοί με λόγους ύπαρξης, και οι ακυρώσεις από ανώτατα δικαστήρια είναι συχνά σωστές. Ένας πίνακας «ατιμωρησίας» μπορεί να παρουσιάσει νόμιμες αποφάσεις ως σκάνδαλα.',
      en: 'Pardons and time limits are lawful institutions with reasons to exist, and annulments by top courts are often right. An “impunity” table may present lawful decisions as scandals.',
    },
    distributional: {
      el: 'Χάνει η λήθη. Κερδίζει η εμπιστοσύνη ότι ο νόμος ισχύει και για τους ισχυρούς.',
      en: 'Oblivion loses. Trust that the law applies to the powerful too gains.',
    },
    virtues: ['parrhesia', 'dikaiosyne'],
    delta: { institutional_justice: 5, affiliation_trust: 3 },
  },
  {
    id: 'staff-register',
    n: 'Σ10',
    name: { el: 'Δημόσιο Μητρώο Θέσεων', en: 'The Public Post Register' },
    precedent: {
      el: 'Το 2010 η Ελλάδα κατέγραψε για πρώτη φορά ποιους πληρώνει το Δημόσιο — 768.009 πρόσωπα σε δύο μήνες — και η απογραφή έγινε μόνιμο μητρώο συνδεδεμένο με ενιαία αρχή πληρωμής.',
      en: 'In 2010 Greece recorded for the first time whom the state pays — 768,009 people in two months — and the census became a permanent register linked to a single payment authority.',
    },
    plain: {
      el: 'Κάθε δημόσια θέση υπάρχει σε δημόσιο οργανόγραμμα με τη δηλωμένη ανάγκη της — και κάθε νέα θέση χρειάζεται τεκμηριωμένη ανάγκη πριν δημιουργηθεί.',
      en: 'Every public post appears in a public organisational chart with its stated need — and every new post needs a documented need before it is created.',
    },
    how: {
      el: 'Η ΤΝ συγκρίνει θέσεις, ανάγκες και προσλήψεις ανά φορέα, και σημαίνει θέσεις που δημιουργούνται χωρίς ανάγκη, υπηρεσίες με πολύ περισσότερο προσωπικό από όμοιές τους, και κύματα προσλήψεων πριν από εκλογές.',
      en: 'The AI compares posts, needs and hires by body, and flags posts created without need, offices with far more staff than comparable ones, and hiring waves before elections.',
    },
    humans: {
      el: 'Η διοίκηση ορίζει τις ανάγκες· η Βουλή εγκρίνει τα οργανογράμματα.',
      en: 'The administration sets the needs; Parliament approves the organisational charts.',
    },
    antilogos: {
      el: 'Η «ανάγκη» είναι συχνά πολιτική κρίση — πόσους νοσηλευτές, πόσους δασκάλους θέλουμε. Ένας αλγόριθμος που συγκρίνει υπηρεσίες μπορεί να γίνει πρόσχημα για περικοπές σε περιοχές που έχουν πραγματικά περισσότερες ανάγκες.',
      en: '“Need” is often a political judgement — how many nurses, how many teachers we want. An algorithm comparing offices may become a pretext for cuts in areas that genuinely need more.',
    },
    distributional: {
      el: 'Χάνουν οι θέσεις που δημιουργούνται για πρόσωπα. Κερδίζουν οι υπηρεσίες που πραγματικά λείπει προσωπικό.',
      en: 'Posts created for people lose. Services genuinely short of staff gain.',
    },
    virtues: ['phronesis', 'sophrosyne'],
    delta: { institutional_justice: 3, economic_security: 3, affiliation_trust: 2 },
  },
]
