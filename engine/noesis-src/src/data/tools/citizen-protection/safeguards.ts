// The ten safeguards of ΑΡΓΟΣ. Each is a PROPOSAL (Hard Rule 1). This tool’s AI
// never watches citizens: it watches only the services that hold the power to
// watch, use force and investigate; named humans decide.

import type { Safeguard } from '../types'

export const SAFEGUARDS: readonly Safeguard[] = [
  {
    id: 'independent-probe',
    n: 'Σ1',
    name: { el: 'Ανεξάρτητη Έρευνα εξ Ορισμού', en: 'Independent Investigation by Default' },
    precedent: {
      el: 'Ο Συνήγορος του Πολίτη έχει ήδη Εθνικό Μηχανισμό Διερεύνησης Περιστατικών Αυθαιρεσίας· λείπει η αυτόματη ανάθεση και η υποχρέωση συνεργασίας.',
      en: 'The Greek Ombudsman already runs a National Mechanism for Investigating Incidents of Arbitrariness; what is missing is automatic referral and a duty to cooperate.',
    },
    plain: {
      el: 'Κάθε θάνατος ή σοβαρός τραυματισμός από αστυνομία ή Λιμενικό ερευνάται αυτόματα από ανεξάρτητη αρχή — ποτέ από την ίδια την υπηρεσία.',
      en: 'Every death or serious injury caused by police or coast guard is investigated automatically by an independent authority — never by the service itself.',
    },
    how: {
      el: 'Μόλις καταγραφεί περιστατικό θανάτου, πυροβολισμού ή σοβαρού τραυματισμού, ο φάκελος ανατίθεται αυτόματα σε ανεξάρτητους ερευνητές, με πρόσβαση σε όλα τα τεκμήρια από την πρώτη ώρα. Η υπηρεσία των εμπλεκομένων δεν μπορεί να κρατήσει ούτε ένα.',
      en: 'As soon as a death, shooting or serious injury is logged, the file is assigned automatically to independent investigators, with access to all evidence from the first hour. The involved service cannot hold back a single item.',
    },
    humans: {
      el: 'Οι ανεξάρτητοι ερευνητές και η δικαιοσύνη κρίνουν· η ΤΝ απλώς φροντίζει να μην κρίνει ο συνάδελφος.',
      en: 'Independent investigators and the courts judge; the AI simply makes sure the colleague does not.',
    },
    antilogos: {
      el: 'Οι ανεξάρτητοι ερευνητές δεν ξέρουν τις πραγματικές συνθήκες του δρόμου ή της θάλασσας· η αυτόματη έρευνα μπορεί να κάνει τα όργανα να διστάζουν όταν πρέπει να δράσουν.',
      en: 'Independent investigators do not know the realities of the street or the sea; automatic investigation could make officers hesitate when they must act.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι κάλυπταν συναδέλφους. Ωφελούνται τα θύματα — και οι αστυνομικοί που δεν έχουν τίποτα να κρύψουν.',
      en: 'Those who covered for colleagues pay. Victims gain — and officers who have nothing to hide.',
    },
    virtues: ['dikaiosyne', 'andreia'],
    delta: { bodily_safety: 5, institutional_justice: 5, affiliation_trust: 3 },
  },
  {
    id: 'sealed-footage',
    n: 'Σ2',
    name: { el: 'Σφραγισμένη Εικόνα', en: 'Sealed Footage' },
    precedent: {
      el: 'Οι κάμερες σώματος υπάρχουν ήδη σε πολλές αστυνομίες της Ευρώπης· το ερώτημα δεν είναι αν γράφουν, αλλά ποιος κρατά το αρχείο.',
      en: 'Bodycams already exist in many European police forces; the question is not whether they record, but who holds the file.',
    },
    plain: {
      el: 'Κάμερες σώματος, κάμερες σκαφών και ασύρματοι γράφουν αυτόματα, και το υλικό σφραγίζεται σε ανεξάρτητο αρχείο — καμία κάμερα δεν «χαλά» χωρίς να φανεί.',
      en: 'Bodycams, patrol-boat cameras and radios record automatically, and the footage is sealed in an independent archive — no camera “breaks” without it showing.',
    },
    how: {
      el: 'Κάθε καταγραφή αποκτά κρυπτογραφικό αποτύπωμα και ανεβαίνει σε αρχείο που δεν ελέγχει η υπηρεσία. Μια κάμερα που «δεν λειτουργεί» πρέπει να έχει δηλωθεί ελαττωματική πριν από την επιχείρηση· αν λείπει υλικό από κρίσιμη στιγμή, το βάρος της εξήγησης περνά στην υπηρεσία.',
      en: 'Every recording gets a cryptographic fingerprint and is uploaded to an archive the service does not control. A camera that “does not work” must have been reported faulty before the operation; if footage from a critical moment is missing, the burden of explanation shifts to the service.',
    },
    humans: {
      el: 'Μόνο δικαστικές και ανεξάρτητες αρχές έχουν πρόσβαση· η ΤΝ απλώς εγγυάται ότι τίποτα δεν σβήστηκε.',
      en: 'Only judicial and independent authorities have access; the AI simply guarantees nothing was erased.',
    },
    antilogos: {
      el: 'Η συνεχής καταγραφή καταγράφει και πολίτες, θύματα και μάρτυρες — ένα αρχείο με τόση εικόνα είναι κι αυτό κίνδυνος για την ιδιωτικότητα.',
      en: 'Continuous recording also captures citizens, victims and witnesses — an archive with so much footage is itself a privacy risk.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι βασίζονταν σε κάμερες που «χάλαγαν». Ωφελούνται τα θύματα και οι δίκαιοι αστυνομικοί που κατηγορούνται ψευδώς.',
      en: 'Those who relied on cameras that “broke” pay. Victims gain, and fair officers falsely accused.',
    },
    virtues: ['parrhesia', 'sophia'],
    delta: { institutional_justice: 5, bodily_safety: 3, affiliation_trust: 3 },
  },
  {
    id: 'first-account',
    n: 'Σ3',
    name: { el: 'Η Πρώτη Αφήγηση με Υπογραφή', en: 'The Signed First Account' },
    precedent: {
      el: 'Η παρρησία δεν επιτρέπει να αλλάζει η αλήθεια ανάλογα με το ποιος ρωτά· κάθε επίσημη ανακοίνωση είναι κι αυτή πράξη εξουσίας.',
      en: 'Parrhesia does not allow the truth to change with whoever is asking; every official statement is also an act of power.',
    },
    plain: {
      el: 'Η πρώτη επίσημη εκδοχή για ένα περιστατικό καταγράφεται με όνομα — και αργότερα συγκρίνεται δημόσια με όσα έδειξαν τα τεκμήρια.',
      en: 'The first official account of an incident is recorded with a name — and later compared publicly with what the evidence showed.',
    },
    how: {
      el: 'Κάθε ανακοίνωση, αναφορά ή κατάθεση οργάνων για ένα σοβαρό περιστατικό σφραγίζεται με ημερομηνία και υπογραφή. Όταν τα τεκμήρια — βίντεο, ιατροδικαστικά, μάρτυρες — τη διαψεύδουν, η ΤΝ το δείχνει: ποιος είπε ότι το θύμα ήταν κλέφτης, και πότε αποδείχθηκε το αντίθετο.',
      en: 'Every statement, report or officer testimony about a serious incident is sealed with a date and signature. When the evidence — video, forensics, witnesses — contradicts it, the AI shows it: who said the victim was a thief, and when the opposite was proved.',
    },
    humans: {
      el: 'Η υπηρεσία εξακολουθεί να ενημερώνει· απλώς κάθε ανακοίνωση έχει πια συντάκτη.',
      en: 'The service still informs the public; every statement simply has an author now.',
    },
    antilogos: {
      el: 'Οι πρώτες πληροφορίες είναι πάντα ελλιπείς· αν κάθε αρχική εκτίμηση γίνεται τεκμήριο κατά του οργάνου, η αστυνομία θα σωπαίνει μέχρι το τέλος της έρευνας.',
      en: 'First information is always incomplete; if every early estimate becomes evidence against an officer, police will stay silent until the investigation ends.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι έγραφαν το θύμα ως ένοχο. Ωφελούνται οι οικογένειες που πάλευαν χρόνια να αποκαταστήσουν ένα όνομα.',
      en: 'Those who wrote the victim up as the guilty one pay. Families who fought for years to clear a name gain.',
    },
    virtues: ['parrhesia', 'dikaiosyne'],
    delta: { institutional_justice: 4, affiliation_trust: 4, practical_reason: 2 },
  },
  {
    id: 'force-log',
    n: 'Σ4',
    name: { el: 'Μητρώο Χρήσης Βίας', en: 'Use-of-Force Register' },
    precedent: {
      el: 'Ο νόμος ήδη ορίζει πότε επιτρέπεται η χρήση όπλου· λείπει η δημόσια καταμέτρηση του πότε, πού και εναντίον ποιων χρησιμοποιείται.',
      en: 'The law already defines when a weapon may be used; what is missing is a public count of when, where and against whom it is used.',
    },
    plain: {
      el: 'Κάθε πυροβολισμός και κάθε σοβαρή χρήση βίας από όργανα καταγράφεται — και η ΤΝ δείχνει μοτίβα ανά μονάδα και ανά ομάδα θυμάτων, όπως οι Ρομά.',
      en: 'Every shot fired and every serious use of force by officers is logged — and the AI shows patterns by unit and by group of victims, such as Roma.',
    },
    how: {
      el: 'Καταγράφει κάθε χρήση όπλου ή σοβαρής βίας με το αδίκημα που την προκάλεσε και την έκβαση. Δείχνει μονάδες με ασυνήθιστα συχνή χρήση, υπέρμετρη βία για μικρά αδικήματα, και δυσανάλογη στόχευση ομάδων. Τα στοιχεία των θυμάτων μένουν ανώνυμα και συγκεντρωτικά.',
      en: 'Logs every use of a weapon or serious force with the offence that prompted it and the outcome. Shows units with unusually frequent use, excessive force over petty offences, and disproportionate targeting of groups. Victims’ data stay anonymous and aggregated.',
    },
    humans: {
      el: 'Η ηγεσία και ο ανεξάρτητος ελεγκτής αποφασίζουν εκπαίδευση, μετακίνηση ή δίωξη.',
      en: 'Leadership and the independent overseer decide on training, reassignment or prosecution.',
    },
    antilogos: {
      el: 'Οι αριθμοί χωρίς πλαίσιο αδικούν μονάδες που δουλεύουν στις πιο επικίνδυνες περιοχές.',
      en: 'Numbers without context wrong the units that work in the most dangerous areas.',
    },
    distributional: {
      el: 'Πληρώνουν οι μονάδες με κουλτούρα ατιμωρησίας. Ωφελούνται οι κοινότητες που πυροβολούνται δυσανάλογα.',
      en: 'Units with a culture of impunity pay. Communities that are shot at disproportionately gain.',
    },
    virtues: ['dikaiosyne', 'sophrosyne'],
    delta: { bodily_safety: 5, institutional_justice: 3, affiliation_trust: 3 },
  },
  {
    id: 'mirror',
    n: 'Σ5',
    name: { el: 'Κάτοπτρο Ποινών', en: 'Sentencing Mirror' },
    precedent: {
      el: 'Ο Αριστοτέλης: ο νόμος κοιτάζει μόνο τη διαφορά της βλάβης και μεταχειρίζεται τους ανθρώπους ως ίσους (Ηθικά Νικομάχεια 1132a).',
      en: 'Aristotle: the law looks only at the difference in the harm and treats people as equals (Nicomachean Ethics 1132a).',
    },
    plain: {
      el: 'Όταν κατηγορείται όργανο της τάξης, η ΤΝ δείχνει δημόσια πώς κρίθηκαν πολίτες για την ίδια πράξη — κατηγορία, ποινή, ελαφρυντικά.',
      en: 'When an officer is charged, the AI shows publicly how civilians were judged for the same act — charge, sentence, mitigation.',
    },
    how: {
      el: 'Συγκρίνει κατηγορίες, ποινές και ελαφρυντικά (όπως «πρότερος έντιμος βίος») με ανωνυμοποιημένες όμοιες υποθέσεις πολιτών. Αν το όργανο αντιμετωπίζεται ηπιότερα, η απόκλιση δημοσιεύεται και ο εισαγγελέας εφέσεων ειδοποιείται.',
      en: 'Compares charges, sentences and mitigation (such as “previous lawful life”) with anonymised like cases involving civilians. If the officer is treated more leniently, the gap is published and the appeals prosecutor is notified.',
    },
    humans: {
      el: 'Τα δικαστήρια αποφασίζουν· απλώς η απόφαση μετριέται με το ίδιο μέτρο.',
      en: 'Courts decide; the decision is simply measured with the same yardstick.',
    },
    antilogos: {
      el: 'Τα όργανα δρουν υπό κίνδυνο και με νόμιμη εντολή χρήσης βίας· η σύγκριση με πολίτες αγνοεί ότι η θέση τους είναι διαφορετική.',
      en: 'Officers act under danger and with a lawful mandate to use force; comparing them with civilians ignores that their position is different.',
    },
    distributional: {
      el: 'Πληρώνουν τα ελαφρυντικά που δίνονταν στη στολή. Ωφελείται η εμπιστοσύνη ότι ο νόμος ισχύει και για όσους τον επιβάλλουν.',
      en: 'The leniency extended to the uniform pays. Trust that the law applies to those who enforce it gains.',
    },
    virtues: ['dikaiosyne', 'parrhesia'],
    delta: { institutional_justice: 5, affiliation_trust: 3 },
  },
  {
    id: 'warrant-ledger',
    n: 'Σ6',
    name: { el: 'Μητρώο Άρσεων Απορρήτου', en: 'Surveillance Order Register' },
    precedent: {
      el: 'Η Αρχή Διασφάλισης του Απορρήτου των Επικοινωνιών (ΑΔΑΕ) υπάρχει ακριβώς για αυτό· λείπει η πλήρης, σφραγισμένη καταγραφή που δεν μπορεί να της κρυφτεί.',
      en: 'Greece’s communications-privacy authority (ADAE) exists for exactly this; what is missing is a complete, sealed record that cannot be hidden from it.',
    },
    plain: {
      el: 'Κάθε άρση απορρήτου καταγράφεται σφραγισμένη — και όταν ο στόχος είναι δημοσιογράφος ή πολιτικός, ελέγχεται αυτόματα από ανεξάρτητη αρχή.',
      en: 'Every order lifting communications secrecy is recorded under seal — and when the target is a journalist or politician, it is checked automatically by an independent authority.',
    },
    how: {
      el: 'Κάθε εντολή παρακολούθησης αποκτά σφραγισμένη εγγραφή: ποιος τη ζήτησε, ποιος την υπέγραψε, για πόσο. Η ΑΔΑΕ βλέπει όλο το μητρώο· ετήσια στατιστικά δημοσιεύονται. Ο στόχος ενημερώνεται όταν λήξει ο λόγος μυστικότητας.',
      en: 'Every surveillance order gets a sealed entry: who requested it, who signed it, for how long. ADAE sees the whole register; annual statistics are published. The target is informed once the reason for secrecy ends.',
    },
    humans: {
      el: 'Οι εισαγγελείς εξακολουθούν να εγκρίνουν· απλώς καμία έγκριση δεν μένει αόρατη στον ελεγκτή.',
      en: 'Prosecutors still approve; no approval stays invisible to the overseer.',
    },
    antilogos: {
      el: 'Οι μυστικές υπηρεσίες χρειάζονται μυστικότητα για την εθνική ασφάλεια· ένα μητρώο, όσο σφραγισμένο κι αν είναι, μπορεί να διαρρεύσει.',
      en: 'Intelligence services need secrecy for national security; a register, however sealed, can leak.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι παρακολουθούσαν για πολιτικούς λόγους. Ωφελούνται οι δημοσιογράφοι, η αντιπολίτευση και κάθε πολίτης που μιλά ελεύθερα.',
      en: 'Those who surveilled for political reasons pay. Journalists, the opposition and every citizen who speaks freely gain.',
    },
    virtues: ['parrhesia', 'sophrosyne'],
    delta: { practical_reason: 5, institutional_justice: 4, affiliation_trust: 3 },
  },
  {
    id: 'spyware-trace',
    n: 'Σ7',
    name: { el: 'Ιχνηλάτης Κατασκοπευτικού Λογισμικού', en: 'Spyware Tracer' },
    precedent: {
      el: 'Ανεξάρτητα εργαστήρια έχουν ήδη αποδείξει μολύνσεις σε κινητά δημοσιογράφων και πολιτικών· η Ευρωπαϊκή Πράξη για την Ελευθερία των ΜΜΕ περιορίζει τη χρήση τέτοιου λογισμικού κατά δημοσιογράφων.',
      en: 'Independent labs have already proven infections on journalists’ and politicians’ phones; the European Media Freedom Act restricts using such software against journalists.',
    },
    plain: {
      el: 'Όταν οι ίδιοι άνθρωποι εμφανίζονται και σε νόμιμες παρακολουθήσεις και σε μολύνσεις κατασκοπευτικού λογισμικού, η σύμπτωση σημαίνεται αυτόματα.',
      en: 'When the same people appear both in lawful surveillance and in spyware infections, the overlap is flagged automatically.',
    },
    how: {
      el: 'Διασταυρώνει, με δικαστική εντολή, το μητρώο άρσεων απορρήτου με τους στόχους που εντοπίζουν ανεξάρτητα εργαστήρια, και καταγράφει κάθε σύμβαση ή άδεια εξαγωγής λογισμικού παρακολούθησης. Κάθε επικάλυψη πηγαίνει σε ανεξάρτητο ανακριτή.',
      en: 'Cross-checks, under judicial order, the surveillance register against targets identified by independent labs, and logs every contract or export licence for surveillance software. Every overlap goes to an independent investigating judge.',
    },
    humans: {
      el: 'Ο ανακριτής κρίνει τι σημαίνει μια σύμπτωση· η ΤΝ απλώς δεν αφήνει να περάσει ανεξήγητη.',
      en: 'The investigating judge decides what an overlap means; the AI simply does not let it pass unexplained.',
    },
    antilogos: {
      el: 'Η σύμπτωση δεν αποδεικνύει συνεργασία: ιδιώτες μπορεί να στόχευσαν τα ίδια πρόσωπα για τους δικούς τους λόγους.',
      en: 'An overlap does not prove collusion: private actors may have targeted the same people for their own reasons.',
    },
    distributional: {
      el: 'Πληρώνουν οι πωλητές και οι πελάτες του λογισμικού. Ωφελούνται όλοι όσοι έχουν κινητό και λόγο να μιλούν.',
      en: 'The software’s sellers and buyers pay. Everyone who has a phone and something to say gains.',
    },
    virtues: ['sophia', 'andreia'],
    delta: { practical_reason: 5, institutional_justice: 3 },
  },
  {
    id: 'oversight-deadline',
    n: 'Σ8',
    name: { el: 'Προθεσμία Συνεργασίας', en: 'Cooperation Deadline' },
    precedent: {
      el: 'Οι αθηναίοι εὔθυνοι μπορούσαν να καλέσουν κάθε άρχοντα σε λογοδοσία· κανείς δεν μπορούσε να αρνηθεί να εμφανιστεί.',
      en: 'The Athenian euthynoi could summon any magistrate to account; no one could refuse to appear.',
    },
    plain: {
      el: 'Όταν μια ανεξάρτητη αρχή ζητά έρευνα ή στοιχεία, η υπηρεσία έχει προθεσμία — και κάθε άρνηση γίνεται δημόσια.',
      en: 'When an independent authority requests an investigation or evidence, the service has a deadline — and every refusal becomes public.',
    },
    how: {
      el: 'Καταγράφει κάθε αίτημα του Συνηγόρου του Πολίτη, της ΑΔΑΕ ή δικαστικής αρχής προς αστυνομία, Λιμενικό ή ΕΥΠ, με ημερομηνία και προθεσμία. Αν η απάντηση δεν έρθει ή έρθει άρνηση, το θέμα πηγαίνει αυτόματα στην αρμόδια επιτροπή της Βουλής.',
      en: 'Logs every request from the Ombudsman, ADAE or a judicial authority to the police, coast guard or intelligence service, with a date and deadline. If no answer comes, or a refusal, the matter goes automatically to the competent parliamentary committee.',
    },
    humans: {
      el: 'Η Βουλή και οι αρχές αποφασίζουν συνέπειες· η ΤΝ απλώς μετρά τις μέρες.',
      en: 'Parliament and the authorities decide the consequences; the AI simply counts the days.',
    },
    antilogos: {
      el: 'Σε επιχειρησιακά θέματα ή εκκρεμείς δίκες, η υπηρεσία μπορεί να έχει νόμιμο λόγο να μη δώσει αμέσως στοιχεία.',
      en: 'In operational matters or pending trials, a service may have a lawful reason not to hand over evidence at once.',
    },
    distributional: {
      el: 'Πληρώνουν οι υπηρεσίες που έκλειναν την πόρτα. Ωφελούνται οι ανεξάρτητες αρχές — και οι πολίτες που στηρίζονται σε αυτές.',
      en: 'Services that shut the door pay. Independent authorities gain — and the citizens who rely on them.',
    },
    virtues: ['andreia', 'dikaiosyne'],
    delta: { institutional_justice: 5, affiliation_trust: 3 },
  },
  {
    id: 'reasons',
    n: 'Σ9',
    name: { el: 'Αιτιολόγηση και Εξαίρεση', en: 'Reasons and Recusal' },
    precedent: {
      el: 'Ο όρκος των ηλιαστών: να ακούν εξίσου και τους δύο διαδίκους. Κανείς δεν κρίνει μια υπόθεση στην οποία ήδη υπέγραψε.',
      en: 'The jurors’ oath: to hear both parties equally. No one judges a case they have already signed off on.',
    },
    plain: {
      el: 'Κάθε αρχειοθέτηση δημοσιεύεται με αιτιολογία — και η ΤΝ ελέγχει αν όποιος αρχειοθετεί είχε ήδη ρόλο στην υπόθεση.',
      en: 'Every archiving is published with reasons — and the AI checks whether whoever archives already had a role in the case.',
    },
    how: {
      el: 'Αντιπαραβάλλει την αιτιολογία της αρχειοθέτησης με τον φάκελο και δείχνει ποια τεκμήρια δεν απαντήθηκαν. Διασταυρώνει αν ο εισαγγελέας ή ο δικαστής που αποφασίζει είχε υπογράψει προηγουμένως πράξη στην ίδια υπόθεση — και αν ναι, ζητά εξαίρεση.',
      en: 'Checks the archiving reasons against the file and shows which evidence went unanswered. Cross-checks whether the deciding prosecutor or judge previously signed an act in the same case — and if so, requests recusal.',
    },
    humans: {
      el: 'Η δικαιοσύνη αποφασίζει· απλώς η αιτιολογία διαβάζεται από όλους και ο κρίνων δεν κρίνει τον εαυτό του.',
      en: 'Justice decides; the reasoning is simply read by all, and the one judging does not judge themselves.',
    },
    antilogos: {
      el: 'Η δημοσιότητα των αρχειοθετήσεων εκθέτει και αθώους που ερευνήθηκαν χωρίς λόγο.',
      en: 'Publishing archiving decisions also exposes innocent people who were investigated without cause.',
    },
    distributional: {
      el: 'Πληρώνουν οι αρχειοθετήσεις «στο συρτάρι». Ωφελούνται τα θύματα που δεν έμαθαν ποτέ γιατί έκλεισε η υπόθεσή τους.',
      en: 'Archiving “in the drawer” pays. Victims who never learned why their case was closed gain.',
    },
    virtues: ['parrhesia', 'dikaiosyne'],
    delta: { institutional_justice: 5, practical_reason: 2, affiliation_trust: 2 },
  },
  {
    id: 'witness-video',
    n: 'Σ10',
    name: { el: 'Το Βίντεο του Πολίτη', en: 'The Citizen’s Video' },
    precedent: {
      el: 'Σε πολλές από αυτές τις υποθέσεις, την αλήθεια την κατέγραψε ένας περαστικός με το κινητό του — όχι μια κάμερα της υπηρεσίας.',
      en: 'In many of these cases, the truth was recorded by a passer-by on a phone — not by any service camera.',
    },
    plain: {
      el: 'Κάθε πολίτης που καταγράφει επέμβαση οργάνων μπορεί να σφραγίσει αμέσως το βίντεό του σε ανεξάρτητο αρχείο — ώστε να μην μπορεί κανείς να το σβήσει.',
      en: 'Any citizen who records an officers’ intervention can seal the video at once in an independent archive — so no one can erase it.',
    },
    how: {
      el: 'Ο πολίτης ανεβάζει το βίντεο με ένα άγγιγμα· αποκτά χρονοσφραγίδα και αποτύπωμα και φυλάσσεται κρυπτογραφημένο, προσβάσιμο μόνο σε δικαστικές αρχές και στον ίδιο. Η ταυτότητα του πολίτη προστατεύεται.',
      en: 'The citizen uploads the video with one tap; it gets a timestamp and fingerprint and is stored encrypted, accessible only to judicial authorities and the citizen. The citizen’s identity is protected.',
    },
    humans: {
      el: 'Ο πολίτης αποφασίζει αν θα το καταθέσει· η δικαιοσύνη το αξιολογεί.',
      en: 'The citizen decides whether to submit it; justice weighs it.',
    },
    antilogos: {
      el: 'Τα βίντεο πολιτών δείχνουν αποσπάσματα και μπορεί να παραπλανήσουν· ένα αρχείο τέτοιου υλικού μπορεί να γίνει και εργαλείο στοχοποίησης οργάνων.',
      en: 'Citizens’ videos show fragments and can mislead; an archive of such material could also become a tool for targeting officers.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι βασίζονταν στο ότι «κανείς δεν είδε». Ωφελούνται τα θύματα και οι μάρτυρες που φοβούνται.',
      en: 'Those who relied on “no one saw” pay. Victims gain, and witnesses who are afraid.',
    },
    virtues: ['andreia', 'parrhesia'],
    delta: { bodily_safety: 3, practical_reason: 3, institutional_justice: 3 },
  },
]
