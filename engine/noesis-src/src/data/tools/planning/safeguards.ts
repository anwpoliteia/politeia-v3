// The ten safeguards of ΙΠΠΟΔΑΜΟΣ. Each is a PROPOSAL (Hard Rule 1): the AI
// watches those who sign permits and those who build big — never the owner of
// a small irregularity; named humans decide.

import type { Safeguard } from '../types'

export const SAFEGUARDS: readonly Safeguard[] = [
  {
    id: 'signed-permit',
    n: 'Σ1',
    name: { el: 'Η Υπογραφή στον Χάρτη', en: 'Signed on the Map' },
    precedent: {
      el: 'Στην αρχαία Αθήνα τα όρια των ιδιοκτησιών σημαδεύονταν με χαραγμένους λίθους, τους όρους, ορατούς σε όλους.',
      en: 'In ancient Athens the limits of property were marked with inscribed stones, the horoi, visible to all.',
    },
    plain: {
      el: 'Κάθε άδεια δόμησης φαίνεται σε δημόσιο χάρτη μαζί με το τι επιτρέπει και ποιος υπάλληλος και ποιος μηχανικός την υπέγραψαν.',
      en: 'Every building permit appears on a public map, with what it allows and which official and which engineer signed it.',
    },
    how: {
      el: 'Όροφοι, ύψος, κάλυψη και χρήση κάθε άδειας δημοσιεύονται με γεωγραφικό σημείο. Η ΤΝ δείχνει μοτίβα: υπάλληλος που εγκρίνει δυσανάλογα πολλές «δύσκολες» άδειες, μηχανικός που περνά πάντα από τον ίδιο υπάλληλο, φάκελοι που εγκρίθηκαν ελλιπείς.',
      en: 'The floors, height, footprint and use allowed by each permit are published with a location. The AI shows patterns: an official approving disproportionately many “difficult” permits, an engineer who always goes through the same official, files approved incomplete.',
    },
    humans: {
      el: 'Η ΤΝ δείχνει ένα μοτίβο· ανεξάρτητος ελεγκτής κρίνει αν είναι παρανομία ή απλώς δύσκολη περιοχή.',
      en: 'The AI shows a pattern; an independent auditor judges whether it is wrongdoing or simply a difficult area.',
    },
    antilogos: {
      el: 'Η δημοσιότητα των ονομάτων μπορεί να εκθέσει έντιμους υπαλλήλους σε πιέσεις και απειλές από όσους απορρίφθηκαν.',
      en: 'Publishing names could expose honest officials to pressure and threats from those they refused.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι πουλούσαν υπογραφές. Ωφελούνται οι γείτονες, που βλέπουν τι επιτρέπεται δίπλα τους.',
      en: 'Those who sold signatures pay. Neighbours gain, seeing what is allowed next to them.',
    },
    virtues: ['dikaiosyne', 'parrhesia'],
    delta: { institutional_justice: 4, environment_ecology: 3, affiliation_trust: 3 },
  },
  {
    id: 'random-desk',
    n: 'Σ2',
    name: { el: 'Τυχαίος Χειριστής', en: 'The Random Desk' },
    precedent: {
      el: 'Οι Αθηναίοι κλήρωναν τους δικαστές με τον κληρωτήριο τη μέρα της δίκης, ώστε κανείς να μην ξέρει από πριν ποιον να δωροδοκήσει (Αθηναίων Πολιτεία 63–66).',
      en: 'The Athenians drew jurors by lot with the kleroterion on the day of trial, so no one knew in advance whom to bribe (Constitution of the Athenians 63–66).',
    },
    plain: {
      el: 'Κάθε φάκελος πάει σε υπάλληλο που ορίζεται με κλήρωση — όχι σε όποιον «ξέρει» ο μηχανικός.',
      en: 'Every file goes to an official chosen by lot — not to whoever the engineer “knows.”',
    },
    how: {
      el: 'Η ανάθεση γίνεται αυτόματα, αν χρειαστεί και σε υπάλληλο άλλου δήμου, και ο αιτών δεν μαθαίνει ποιος χειρίζεται τον φάκελό του μέχρι την απόφαση. Κάθε φάκελος έχει δημόσιο χρόνο εξέτασης, ώστε κανένα «γρηγορόσημο» να μη χρειάζεται.',
      en: 'Assignment is automatic, if needed to an official in another municipality, and the applicant does not learn who handles the file until the decision. Every file has a public processing time, so no “speed-up fee” is ever needed.',
    },
    humans: {
      el: 'Ο υπάλληλος κρίνει τον φάκελο όπως πάντα· απλώς δεν τον διαλέγει.',
      en: 'The official judges the file as always; they just do not choose it.',
    },
    antilogos: {
      el: 'Ο τοπικός υπάλληλος ξέρει την περιοχή — τα ρέματα, τα δάση, τις ιδιαιτερότητες. Ένας τυχαίος χειριστής από μακριά μπορεί να κάνει λάθη που ο ντόπιος δεν θα έκανε.',
      en: 'The local official knows the area — the streams, the forests, the particulars. A random handler from afar may make mistakes a local would not.',
    },
    distributional: {
      el: 'Χάνουν οι μεσάζοντες. Κερδίζει ο πολίτης χωρίς «γνωριμίες» — και ο έντιμος μηχανικός.',
      en: 'Brokers lose. The citizen without “connections” gains — and so does the honest engineer.',
    },
    virtues: ['dikaiosyne', 'sophrosyne'],
    delta: { institutional_justice: 4, economic_security: 2, affiliation_trust: 3 },
  },
  {
    id: 'sky-check',
    n: 'Σ3',
    name: { el: 'Το Μάτι από Ψηλά', en: 'The Eye from Above' },
    precedent: {
      el: 'Η Ελλάδα επενδύει ήδη 130 εκατ. ευρώ σε δορυφορικές εικόνες και ΤΝ για τον εντοπισμό αυθαιρέτων (2025) — το ερώτημα είναι ποιον κοιτάζουν πρώτα.',
      en: 'Greece is already investing €130 million in satellite imagery and AI to spot illegal building (2025) — the question is whom they look at first.',
    },
    plain: {
      el: 'Δορυφορικές εικόνες συγκρίνουν ό,τι χτίστηκε με ό,τι επέτρεπε η άδεια — ξεκινώντας από τα μεγάλα έργα, όχι από την πέργκολα της γιαγιάς.',
      en: 'Satellite images compare what was built with what the permit allowed — starting with large works, not a grandmother’s pergola.',
    },
    how: {
      el: 'Η ΤΝ ελέγχει πρώτα κτίρια πάνω από ένα όριο όγκου, ξενοδοχεία, πολυκατοικίες και έργα σε δάσος, ακτή ή ρέμα. Το αρχείο εικόνων δείχνει και πότε χτίστηκε κάτι — έτσι μια δήλωση «πριν το 2011» ελέγχεται αντικειμενικά.',
      en: 'The AI checks first buildings above a size threshold, hotels, apartment blocks and works in forests, on coasts or in streams. The image archive also shows when something was built — so a “before 2011” declaration can be checked objectively.',
    },
    humans: {
      el: 'Η ΤΝ σημαίνει απόκλιση· μηχανικός της υπηρεσίας κάνει αυτοψία και αποφασίζει.',
      en: 'The AI flags a discrepancy; an agency engineer inspects on site and decides.',
    },
    antilogos: {
      el: 'Η εναέρια επιτήρηση κάθε ιδιοκτησίας είναι ιδιωτικότητα που χάνεται για όλους, και μια μηχανή που βλέπει «απόκλιση» δεν ξέρει αν υπάρχει νόμιμη εξήγηση.',
      en: 'Aerial surveillance of every property is privacy lost for everyone, and a machine that sees a “discrepancy” does not know whether there is a lawful explanation.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι χτίζουν μεγάλα πέρα από την άδειά τους. Ωφελούνται οι ακτές, τα δάση και όσοι μένουν δίπλα.',
      en: 'Those who build big beyond their permit pay. Coasts, forests and those who live nearby gain.',
    },
    virtues: ['sophia', 'dikaiosyne'],
    delta: { environment_ecology: 5, bodily_safety: 3, institutional_justice: 3 },
  },
  {
    id: 'amnesty-audit',
    n: 'Σ4',
    name: { el: 'Καμία Τακτοποίηση Χωρίς Έλεγχο', en: 'No Amnesty Without Inspection' },
    precedent: {
      el: 'Το Συμβούλιο της Επικρατείας έκρινε αντισυνταγματική την τακτοποίηση αυθαιρέτων με πρόστιμο χωρίς καμία πολεοδομική αξιολόγηση (ΣτΕ Ολ. 1118/2014).',
      en: 'The Council of State held that legalising illegal buildings for a fee without any planning assessment was unconstitutional (CoS Plenary 1118/2014).',
    },
    plain: {
      el: 'Μια μεγάλη αυθαιρεσία δεν νομιμοποιείται μόνο με πληρωμή· πρώτα ελέγχεται αν στέκει και αν βλάπτει.',
      en: 'A large illegal build is not legalised by payment alone; first it is checked whether it stands and whether it harms.',
    },
    how: {
      el: 'Κάθε τακτοποίηση πάνω από ένα όριο απαιτεί στατικό έλεγχο από ανεξάρτητο μηχανικό που ορίζεται με κλήρωση, και διασταύρωση της ημερομηνίας κατασκευής με το αρχείο εικόνων. Οι μικρές παραβάσεις παραμένουν απλές.',
      en: 'Every legalisation above a threshold requires a structural check by an independent engineer drawn by lot, and the construction date is cross-checked against the image archive. Small violations stay simple.',
    },
    humans: {
      el: 'Ο μηχανικός κρίνει την ασφάλεια· η Βουλή εξακολουθεί να ορίζει τα όρια.',
      en: 'The engineer judges safety; Parliament still sets the thresholds.',
    },
    antilogos: {
      el: 'Χωρίς εύκολη τακτοποίηση, εκατομμύρια ιδιοκτησίες μένουν «παγωμένες» — δεν πωλούνται, δεν κληρονομούνται, δεν ανακαινίζονται. Ο έλεγχος κοστίζει, και το κόστος το πληρώνει κι ο καλόπιστος ιδιοκτήτης.',
      en: 'Without easy legalisation, millions of properties stay “frozen” — they cannot be sold, inherited or renovated. Inspection costs money, and the good-faith owner pays it too.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι έχτισαν μεγάλα και επικίνδυνα. Ωφελούνται όσοι θα μείνουν μέσα και δίπλα όταν έρθει ο σεισμός.',
      en: 'Those who built big and unsafe pay. Those who will live inside and beside when the earthquake comes gain.',
    },
    virtues: ['phronesis', 'dikaiosyne'],
    delta: { bodily_safety: 5, environment_ecology: 3, institutional_justice: 2, economic_security: -1 },
  },
  {
    id: 'warning-clock',
    n: 'Σ5',
    name: { el: 'Το Ρολόι της Προειδοποίησης', en: 'The Warning Clock' },
    precedent: {
      el: 'Ο Κώδικας του Χαμουραμπί έκανε τον κατασκευαστή υπόλογο αν το σπίτι που έχτισε κατέρρεε και σκότωνε — η ευθύνη για ό,τι στέκει είναι από τους αρχαιότερους νόμους.',
      en: 'The Code of Hammurabi held the builder liable if a house he built collapsed and killed — responsibility for what stands is among the oldest laws.',
    },
    plain: {
      el: 'Κάθε έκθεση μηχανικού ή καταγγελία για δομικό κίνδυνο ξεκινά ένα δημόσιο ρολόι: επιθεώρηση μέσα σε προθεσμία, αλλιώς κλιμάκωση.',
      en: 'Every engineer’s report or complaint of structural danger starts a public clock: inspection within a deadline, or escalation.',
    },
    how: {
      el: 'Η προειδοποίηση καταχωρείται με ημερομηνία και βαθμό κινδύνου. Αν δεν γίνει αυτοψία εγκαίρως, η υπόθεση πηγαίνει αυτόματα σε ανώτερη αρχή και ενημερώνονται οι ένοικοι. Κανείς δεν μπορεί να πει «είναι σε πολύ καλή κατάσταση» χωρίς υπογεγραμμένη αυτοψία.',
      en: 'The warning is logged with a date and a risk level. If no inspection happens in time, the case goes automatically to a higher authority and the residents are told. No one can say “it is in very good shape” without a signed inspection.',
    },
    humans: {
      el: 'Ο επιθεωρητής κρίνει τον κίνδυνο· το ρολόι απλώς δεν τον αφήνει να ξεχαστεί.',
      en: 'The inspector judges the risk; the clock simply does not let it be forgotten.',
    },
    antilogos: {
      el: 'Οι υπηρεσίες θα πνιγούν από καταγγελίες, πολλές αβάσιμες, και οι πραγματικοί κίνδυνοι θα χαθούν μέσα στον θόρυβο. Η δημόσια ένδειξη κινδύνου μπορεί επίσης να ρίξει την αξία ακινήτων άδικα.',
      en: 'Agencies will drown in complaints, many unfounded, and real dangers will be lost in the noise. A public danger flag may also unfairly sink property values.',
    },
    distributional: {
      el: 'Πληρώνουν οι υπηρεσίες που αδρανούσαν. Ωφελούνται οι ένοικοι, που μαθαίνουν τι ξέρει ήδη το κράτος.',
      en: 'Agencies that sat still pay. Residents gain, learning what the state already knows.',
    },
    virtues: ['phronesis', 'andreia'],
    delta: { bodily_safety: 5, life_health: 3, institutional_justice: 2 },
  },
  {
    id: 'random-inspection',
    n: 'Σ6',
    name: { el: 'Αιφνίδια Αυτοψία', en: 'The Unannounced Inspection' },
    precedent: {
      el: 'Μετά το Γκρένφελ, η Βρετανία δημιούργησε Ρυθμιστή Ασφάλειας Κτιρίων: κάθε ψηλό κτίριο περνά από υποχρεωτικούς ελέγχους πριν χτιστεί και πριν κατοικηθεί.',
      en: 'After Grenfell, Britain created a Building Safety Regulator: every high-rise must pass mandatory checks before it is built and before it is occupied.',
    },
    plain: {
      el: 'Ένα τυχαίο δείγμα εργοταξίων ελέγχεται αιφνιδιαστικά από επιθεωρητές άλλης περιοχής — και το ιστορικό κάθε υπογράφοντα γίνεται δημόσιο.',
      en: 'A random sample of building sites is inspected without notice by inspectors from another area — and each signer’s record becomes public.',
    },
    how: {
      el: 'Η ΤΝ επιλέγει εργοτάξια με κλήρωση, με μεγαλύτερη πιθανότητα για ψηλά κτίρια, σχολεία και χώρους συνάθροισης. Αν ο επιβλέπων υπέγραψε κάτι που δεν υπάρχει στο εργοτάξιο, αυτό καταγράφεται στο δημόσιο ιστορικό του.',
      en: 'The AI selects sites by lot, weighted toward high-rises, schools and places of assembly. If the supervisor signed off something that is not on site, it goes on their public record.',
    },
    humans: {
      el: 'Ο επιθεωρητής βλέπει και κρίνει· ο κλήρος απλώς διαλέγει πού θα πάει.',
      en: 'The inspector sees and judges; the lot only chooses where they go.',
    },
    antilogos: {
      el: 'Οι αιφνίδιοι έλεγχοι καθυστερούν τα έργα και αυξάνουν το κόστος — στη Βρετανία οι εγκρίσεις ψηλών κτιρίων έφτασαν τις 22 εβδομάδες αντί για 8–12. Η καθυστέρηση μπορεί η ίδια να γεννήσει πίεση για «γρηγορόσημα».',
      en: 'Surprise inspections delay projects and raise costs — in Britain high-rise approvals took 22 weeks instead of 8–12. Delay can itself breed pressure for “speed-up fees.”',
    },
    distributional: {
      el: 'Πληρώνουν όσοι υπέγραφαν χωρίς να δουν. Ωφελούνται τα παιδιά στα σχολεία και όσοι κοιμούνται σε ψηλά κτίρια.',
      en: 'Those who signed without seeing pay. Children in schools and people sleeping in high-rises gain.',
    },
    virtues: ['andreia', 'dikaiosyne'],
    delta: { bodily_safety: 5, life_health: 2, institutional_justice: 2, economic_security: -1 },
  },
  {
    id: 'material-trace',
    n: 'Σ7',
    name: { el: 'Ίχνος Υλικού', en: 'Material Trace' },
    precedent: {
      el: 'Η δημόσια έρευνα για το Γκρένφελ βρήκε «συστηματική ανεντιμότητα» κατασκευαστών υλικών που χειραγώγησαν δοκιμές· η κυβέρνηση δέχθηκε 49 από τις 58 συστάσεις της (2025).',
      en: 'The Grenfell inquiry found “systematic dishonesty” by product makers who manipulated tests; the government accepted 49 of its 58 recommendations (2025).',
    },
    plain: {
      el: 'Κάθε υλικό κρίσιμο για την ασφάλεια — επένδυση, μόνωση, σκυρόδεμα — συνοδεύεται από το πιστοποιητικό του σε δημόσιο μητρώο, και τυχαία δείγματα ξαναδοκιμάζονται.',
      en: 'Every safety-critical material — cladding, insulation, concrete — carries its certificate in a public register, and random samples are retested.',
    },
    how: {
      el: 'Το μητρώο δείχνει ποιο εργαστήριο δοκίμασε τι, με ποια σύνθεση, και σε ποια κτίρια μπήκε το υλικό. Ανεξάρτητα εργαστήρια ξαναδοκιμάζουν δείγματα από την αγορά· αν ένα αποτέλεσμα δεν επαναλαμβάνεται, κάθε κτίριο με το υλικό σημαίνεται.',
      en: 'The register shows which lab tested what, with which composition, and which buildings the material went into. Independent labs retest samples from the market; if a result does not repeat, every building with the material is flagged.',
    },
    humans: {
      el: 'Τα εργαστήρια δοκιμάζουν, οι ρυθμιστές αποφασίζουν αποσύρσεις.',
      en: 'Labs test; regulators decide withdrawals.',
    },
    antilogos: {
      el: 'Οι επαναληπτικές δοκιμές κοστίζουν και καθυστερούν τα υλικά στην αγορά, και οι κατασκευαστές θα πουν ότι η συνταγή τους είναι εμπορικό απόρρητο.',
      en: 'Repeat testing costs money and delays materials to market, and manufacturers will say their formulas are trade secrets.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι χειραγωγούσαν δοκιμές. Ωφελούνται οι ένοικοι ψηλών κτιρίων, που δεν διαλέγουν τα υλικά γύρω τους.',
      en: 'Those who manipulated tests pay. High-rise residents, who never choose the materials around them, gain.',
    },
    virtues: ['sophia', 'parrhesia'],
    delta: { bodily_safety: 5, life_health: 3, institutional_justice: 2 },
  },
  {
    id: 'court-enforce',
    n: 'Σ8',
    name: { el: 'Η Απόφαση Εκτελείται', en: 'The Ruling Is Enforced' },
    precedent: {
      el: 'Το Σύνταγμα υποχρεώνει τη διοίκηση να συμμορφώνεται με τις δικαστικές αποφάσεις (άρθρο 95 παρ. 5)· το ΣτΕ έκρινε το 2026 ότι νόμος που τις παρακάμπτει «υπονομεύει» τη δικαιοσύνη.',
      en: 'The Constitution obliges the administration to comply with court rulings (Article 95(5)); in 2026 the Council of State held that a law bypassing them “undermines” justice.',
    },
    plain: {
      el: 'Κάθε τελεσίδικη απόφαση που ακυρώνει άδεια μπαίνει σε δημόσιο μητρώο με προθεσμία εκτέλεσης — και κάθε νόμος που την παρακάμπτει σημαίνεται.',
      en: 'Every final ruling annulling a permit enters a public register with an enforcement deadline — and every law that bypasses it is flagged.',
    },
    how: {
      el: 'Το μητρώο δείχνει την απόφαση, την υπηρεσία που οφείλει να την εκτελέσει και την ημερομηνία. Αν περάσει η προθεσμία, η καθυστέρηση φαίνεται δημόσια με το όνομα του υπεύθυνου. Η ΤΝ διασταυρώνει κάθε νέα ρύθμιση τακτοποίησης με τις εκκρεμείς αποφάσεις.',
      en: 'The register shows the ruling, the service obliged to enforce it, and the date. If the deadline passes, the delay shows publicly with the responsible person’s name. The AI cross-checks every new legalisation rule against pending rulings.',
    },
    humans: {
      el: 'Τα δικαστήρια αποφασίζουν· η ΤΝ απλώς θυμάται ότι αποφάσισαν.',
      en: 'Courts decide; the AI simply remembers that they did.',
    },
    antilogos: {
      el: 'Η κατεδάφιση ενός κτιρίου πλήττει και καλόπιστους αγοραστές που δεν ήξεραν τίποτα· μερικές φορές η αποζημίωση είναι δικαιότερη από την εκτέλεση.',
      en: 'Demolishing a building also hurts good-faith buyers who knew nothing; sometimes compensation is fairer than enforcement.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι έχτισαν πάνω σε ακυρωμένη άδεια. Ωφελούνται οι πολίτες που κέρδισαν στο δικαστήριο και περιμένουν ακόμη.',
      en: 'Those who built on an annulled permit pay. Citizens who won in court and are still waiting gain.',
    },
    virtues: ['dikaiosyne', 'andreia'],
    delta: { institutional_justice: 5, environment_ecology: 3, affiliation_trust: 2 },
  },
  {
    id: 'lifestyle-check',
    n: 'Σ9',
    name: { el: 'Εὔθυναι για τις Πολεοδομίες', en: 'Euthynai for Planning Offices' },
    precedent: {
      el: 'Κάθε Αθηναίος άρχοντας, στο τέλος της θητείας του, λογοδοτούσε στους λογιστές για κάθε δραχμή που πέρασε από τα χέρια του (Αθηναίων Πολιτεία 48, 54).',
      en: 'Every Athenian magistrate, at the end of office, answered to the auditors for every drachma that passed through their hands (Constitution of the Athenians 48, 54).',
    },
    plain: {
      el: 'Η περιουσία όσων υπογράφουν άδειες διασταυρώνεται με το εισόδημά τους — γιατί τα χρήματα στον απορροφητήρα είναι το τελευταίο στάδιο, όχι το πρώτο.',
      en: 'The wealth of those who sign permits is matched against their income — because cash in the cooker hood is the last stage, not the first.',
    },
    how: {
      el: 'Οι προϊστάμενοι και υπάλληλοι πολεοδομιών υποβάλλουν δήλωση περιουσίας, που η ΤΝ διασταυρώνει με μισθούς, ακίνητα, αυτοκίνητα και καταθέσεις. Κάθε απόκλιση πηγαίνει σε ανεξάρτητο ελεγκτή — όχι στον προϊστάμενο της ίδιας υπηρεσίας.',
      en: 'Planning heads and officials file asset declarations, which the AI matches against salaries, property, cars and deposits. Every gap goes to an independent auditor — not to the head of the same office.',
    },
    humans: {
      el: 'Ο ελεγκτής ζητά εξηγήσεις και κρίνει· μια κληρονομιά ή μια πώληση ακινήτου είναι νόμιμη απάντηση.',
      en: 'The auditor asks for explanations and judges; an inheritance or a property sale is a lawful answer.',
    },
    antilogos: {
      el: 'Ο έλεγχος περιουσίας για χαμηλόμισθους υπαλλήλους είναι επεμβατικός, και οικογενειακά χρήματα — προίκες, κληρονομιές, δώρα γάμου — μοιάζουν ύποπτα χωρίς να είναι.',
      en: 'Asset checks on low-paid officials are intrusive, and family money — dowries, inheritances, wedding gifts — looks suspicious without being so.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι πλούτιζαν από τις υπογραφές τους. Ωφελούνται οι έντιμοι υπάλληλοι, που παύουν να είναι ύποπτοι μαζί με τους άλλους.',
      en: 'Those who grew rich on their signatures pay. Honest officials gain, no longer suspected alongside the rest.',
    },
    virtues: ['dikaiosyne', 'sophrosyne'],
    delta: { institutional_justice: 4, affiliation_trust: 3, economic_security: 1 },
  },
  {
    id: 'suspension',
    n: 'Σ10',
    name: { el: 'Όχι στην Ίδια Καρέκλα', en: 'Not in the Same Chair' },
    precedent: {
      el: 'Στην Αθήνα ο δήμος ψήφιζε σε κάθε πρυτανεία αν οι άρχοντες ασκούσαν καλά τα καθήκοντά τους, και μπορούσε να τους απομακρύνει αμέσως (Αθηναίων Πολιτεία 43, 61).',
      en: 'In Athens the assembly voted each prytany on whether magistrates were doing their duties well, and could remove them at once (Constitution of the Athenians 43, 61).',
    },
    plain: {
      el: 'Όποιος διώκεται για άδειες δεν υπογράφει άδειες μέχρι να κριθεί — μετακινείται, δεν τιμωρείται. Και καμία άδεια δεν χρειάζεται για να ερευνηθεί ένας υπάλληλος.',
      en: 'Anyone prosecuted over permits signs no permits until judged — moved, not punished. And no permission is needed to investigate an official.',
    },
    how: {
      el: 'Με την άσκηση δίωξης, το σύστημα αφαιρεί αυτόματα από τον υπάλληλο το δικαίωμα υπογραφής αδειών και τον μετακινεί σε θέση χωρίς εγκρίσεις, με πλήρη μισθό. Αν αθωωθεί, επιστρέφει με δημόσια αποκατάσταση.',
      en: 'When charges are brought, the system automatically removes the official’s right to sign permits and moves them to a post without approvals, on full pay. If acquitted, they return with public reinstatement.',
    },
    humans: {
      el: 'Ο εισαγγελέας διώκει, το δικαστήριο κρίνει· ο κανόνας απλώς κρατά την υπογραφή μακριά ως τότε.',
      en: 'The prosecutor charges, the court judges; the rule simply keeps the signature away until then.',
    },
    antilogos: {
      el: 'Η μετακίνηση πριν από την απόφαση μοιάζει με τιμωρία αθώου — και μια ψευδής καταγγελία αρκεί για να βγάλει έναν ενοχλητικό υπάλληλο από τη θέση του.',
      en: 'Moving someone before a verdict looks like punishing the innocent — and a false complaint would be enough to remove an inconvenient official.',
    },
    distributional: {
      el: 'Χάνουν όσοι ήλπιζαν ότι η δίωξη θα ξεχαστεί. Κερδίζουν οι πολίτες που θα έπαιρναν άδεια από τον ίδιο άνθρωπο.',
      en: 'Those hoping the prosecution would be forgotten lose. Citizens who would have gone to the same person for a permit gain.',
    },
    virtues: ['sophrosyne', 'dikaiosyne'],
    delta: { institutional_justice: 4, affiliation_trust: 3 },
  },
]
