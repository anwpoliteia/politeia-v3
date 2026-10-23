// The ten safeguards of ΙΣΟΝΟΜΙΑ. Each is a PROPOSAL (Hard Rule 1): the AI
// watches, records and asks; named humans decide and answer for it. Every
// safeguard points upward — at those who hold power — never at the citizen.

import type { Safeguard } from '../types'

export const SAFEGUARDS: readonly Safeguard[] = [
  {
    id: 'mirror',
    n: 'Σ1',
    name: { el: 'Κάτοπτρο Ισονομίας', en: 'Isonomia Mirror' },
    precedent: {
      el: 'Ἰσονομία — η ισότητα όλων απέναντι στον νόμο, το πρώτο όνομα της αθηναϊκής δημοκρατίας.',
      en: 'Isonomia — equality of all before the law, the first name of Athenian democracy.',
    },
    plain: {
      el: 'Όποτε κατηγορείται κάποιος ισχυρός, η ΤΝ δείχνει δημόσια τι αντιμετώπισαν απλοί πολίτες για την ίδια πράξη.',
      en: 'Whenever someone powerful is accused, the AI shows publicly what ordinary citizens faced for the same act.',
    },
    how: {
      el: 'Συγκρίνει την κατηγορία, τη συμφωνία και την ποινή με ανωνυμοποιημένες όμοιες υποθέσεις (ίδια βλάβη, ίδια πράξη). Αν ο αξιωματούχος αντιμετωπίζεται ηπιότερα από το εύρος των πολιτών, απαιτείται γραπτή αιτιολόγηση και αυτόματος έλεγχος από ανεξάρτητο εισαγγελέα.',
      en: 'Compares the charge, the plea deal and the sentence with anonymised like cases (same harm, same act). If the official is treated more leniently than the range citizens received, a written justification and an automatic review by an independent prosecutor are required.',
    },
    humans: {
      el: 'Ο εισαγγελέας εξακολουθεί να αποφασίζει· απλώς δεν μπορεί πια να αποφασίσει σιωπηλά.',
      en: 'The prosecutor still decides; they simply can no longer decide in silence.',
    },
    antilogos: {
      el: 'Καμία υπόθεση δεν είναι ίδια με άλλη· η σύγκριση μπορεί να σπρώξει εισαγγελείς να κατηγορούν υπερβολικά μόνο για να μη φανούν επιεικείς.',
      en: 'No two cases are alike; the comparison could push prosecutors to overcharge only to avoid looking lenient.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι κέρδιζαν από την αδιαφάνεια. Ωφελούνται τα θύματα χωρίς μέσα, γνωριμίες ή φωνή.',
      en: 'Those who profited from opacity pay. Victims without means, connections or a voice gain.',
    },
    virtues: ['dikaiosyne', 'parrhesia'],
    delta: { institutional_justice: 6, affiliation_trust: 4, bodily_safety: 2 },
  },
  {
    id: 'seal',
    n: 'Σ2',
    name: { el: 'Σφραγισμένη Αλυσίδα Τεκμηρίων', en: 'Sealed Evidence Chain' },
    precedent: {
      el: 'Στην Αθήνα τα έγγραφα μιας δίκης σφραγίζονταν σε δοχείο (ἐχῖνος) ώστε να μη μπορεί να προστεθεί ή να αφαιρεθεί τίποτα.',
      en: 'In Athens the documents of a case were sealed in a jar (echinos) so nothing could be added or removed.',
    },
    plain: {
      el: 'Κάθε δείγμα, βίντεο και τόπος σφραγίζεται ψηφιακά τη στιγμή της λήψης — καμία αλλαγή δεν περνά απαρατήρητη.',
      en: 'Every sample, video and scene is digitally sealed the moment it is taken — no change goes unseen.',
    },
    how: {
      el: 'Κρυπτογραφικό αποτύπωμα σε κάθε δείγμα αίματος, κάμερα σώματος και βίντεο τη στιγμή της λήψης· ταυτοποίηση του δότη με DNA μπροστά σε δεύτερο, κληρωμένο μάρτυρα· πλήρης τρισδιάστατη σάρωση κάθε θανατηφόρου τόπου πριν επιτραπεί οποιαδήποτε εργασία. Κάθε πρόσβαση καταγράφεται σε δημόσιο μητρώο.',
      en: 'A cryptographic fingerprint on every blood sample, bodycam and video at capture; donor identity matched by DNA before a second, randomly assigned witness; a full 3D scan of every fatal scene before any works are allowed. Every access is logged in a public register.',
    },
    humans: {
      el: 'Ιατροδικαστές και ανακριτές κρατούν τα τεκμήρια· η ΤΝ απλώς θυμάται κάθε άγγιγμα.',
      en: 'Forensic staff and investigators keep custody; the AI simply remembers every touch.',
    },
    antilogos: {
      el: 'Κόστος και πολυπλοκότητα· και ένα διεφθαρμένο σύστημα μπορεί να αλλοιώσει το δείγμα πριν από τη σφράγιση.',
      en: 'Cost and complexity; and a corrupt system can tamper with a sample before it is sealed.',
    },
    distributional: {
      el: 'Πληρώνει ο προϋπολογισμός της ιατροδικαστικής υπηρεσίας. Ωφελείται κάθε διάδικος — αθώος ή θύμα.',
      en: 'The forensic service budget pays. Every party gains — the innocent and the victim alike.',
    },
    virtues: ['sophia', 'dikaiosyne'],
    delta: { institutional_justice: 5, bodily_safety: 3, affiliation_trust: 3 },
  },
  {
    id: 'conflicts',
    n: 'Σ3',
    name: { el: 'Χάρτης Συμφερόντων', en: 'Conflict Map' },
    precedent: {
      el: 'Ο όρκος των ηλιαστών: να ακούσουν εξίσου και τους δύο διαδίκους και να μη δεχτούν δώρα — ούτε οι ίδιοι ούτε άλλος για λογαριασμό τους.',
      en: 'The Athenian jurors’ oath: to hear both parties equally and to accept no gifts — neither themselves nor anyone on their behalf.',
    },
    plain: {
      el: 'Όταν ο κατηγορούμενος συνδέεται με όσους τον ερευνούν, η υπόθεση περνά αυτόματα σε ανεξάρτητη αρχή.',
      en: 'When the accused is connected to those investigating, the case passes automatically to an independent body.',
    },
    how: {
      el: 'Διασταυρώνει δημόσια μητρώα — αξιώματα, ιεραρχίες, οικογενειακούς δεσμούς αξιωματούχων, δωρεές — ανάμεσα στον κατηγορούμενο και στην αστυνομία, την εισαγγελία και το δικαστήριο. Κάθε σύγκρουση σημαίνεται πριν από την πρώτη ανακριτική πράξη.',
      en: 'Cross-checks public registers — offices, chains of command, officials’ family ties, donations — between the accused and the police, prosecutors and court. Every conflict is flagged before the first investigative step.',
    },
    humans: {
      el: 'Ένα ανεξάρτητο όργανο αποφασίζει τη μεταφορά· κανείς δεν μπορεί να κρύψει τη σύγκρουση.',
      en: 'An independent body decides the transfer; no one can hide the conflict.',
    },
    antilogos: {
      el: 'Κίνδυνος για την ιδιωτικότητα των συγγενών και ψευδώς θετικά σε μικρές κοινωνίες όπου όλοι γνωρίζονται.',
      en: 'A privacy risk for relatives, and false positives in small communities where everyone knows everyone.',
    },
    distributional: {
      el: 'Πληρώνουν τα δίκτυα επιρροής. Ωφελούνται τα θύματα απέναντι σε οικογένειες με εξουσία.',
      en: 'Networks of influence pay. Victims facing powerful families gain.',
    },
    virtues: ['dikaiosyne', 'sophrosyne'],
    delta: { institutional_justice: 5, affiliation_trust: 3, practical_reason: 2 },
  },
  {
    id: 'anomaly',
    n: 'Σ4',
    name: { el: 'Ανιχνευτής Αποκλίσεων', en: 'Outcome Anomaly Watch' },
    precedent: {
      el: 'Οι αθηναίοι λογισταί εξέταζαν τους λογαριασμούς κάθε άρχοντα· μια απόκλιση ήταν αφορμή για ερώτηση, όχι για καταδίκη.',
      en: 'The Athenian logistai examined every magistrate’s accounts; a discrepancy was a reason to ask, not to convict.',
    },
    plain: {
      el: 'Αν ένας δικαστής αποφασίζει σταθερά πολύ διαφορετικά από τους συναδέλφους του, το σύστημα το δείχνει — πριν περάσουν χρόνια.',
      en: 'If a judge consistently rules far off from peers, the system shows it — before years go by.',
    },
    how: {
      el: 'Παρακολουθεί ανωνυμοποιημένα, ανά δικαστή και δικαστήριο, τα ποσοστά κράτησης, αθώωσης, ποινών και νομικής εκπροσώπησης. Οι στατιστικά ακραίες αποκλίσεις πηγαίνουν σε επιθεώρηση — με τα δεδομένα, όχι με ετυμηγορία.',
      en: 'Tracks, per judge and per court, detention, acquittal, sentencing and legal-representation rates. Statistical outliers go to judicial inspection — with the data, not a verdict.',
    },
    humans: {
      el: 'Η επιθεώρηση δικαστηρίων κρίνει· μια απόκλιση μπορεί να είναι και θάρρος.',
      en: 'Judicial inspection judges; an outlier can also be courage.',
    },
    antilogos: {
      el: 'Πίεση για ομοιομορφία: ο δικαστής που αποφασίζει γενναία διαφορετικά θα μοιάζει «ύποπτος».',
      en: 'Pressure to conform: a judge who bravely rules differently will look “suspicious.”',
    },
    distributional: {
      el: 'Πληρώνουν οι δικαστές με κρυφά συμφέροντα. Ωφελούνται οι πιο αδύναμοι διάδικοι — παιδιά, άποροι, όσοι δεν έχουν δικηγόρο.',
      en: 'Judges with hidden interests pay. The weakest parties gain — children, the poor, those without a lawyer.',
    },
    virtues: ['sophia', 'phronesis'],
    delta: { institutional_justice: 6, affiliation_trust: 3, bodily_safety: 2 },
  },
  {
    id: 'pothen',
    n: 'Σ5',
    name: { el: 'Πόθεν Έσχες σε Πραγματικό Χρόνο', en: 'Live Asset Audit' },
    precedent: {
      el: 'Το «πόθεν έσχες;» — από πού το απέκτησες; — είναι ερώτημα της ελληνικής δημόσιας ζωής εδώ και γενιές.',
      en: '“Pothen esches?” — where did you get it? — has been a question of Greek public life for generations.',
    },
    plain: {
      el: 'Η περιουσία και ο τρόπος ζωής κάθε δικαστή και εισαγγελέα διασταυρώνονται συνεχώς με το εισόδημά του.',
      en: 'The wealth and lifestyle of every judge and prosecutor are continuously matched against their income.',
    },
    how: {
      el: 'Συγκρίνει τις δηλώσεις περιουσίας με μητρώα ακινήτων, οχημάτων, εταιρειών και συναλλαγών συγγενών και μεσαζόντων. Μια ανεξήγητη διαφορά σημαίνεται στην αρχή ελέγχου.',
      en: 'Matches asset declarations against property, vehicle and company registers and the transactions of relatives and intermediaries. An unexplained gap is flagged to the audit authority.',
    },
    humans: {
      el: 'Η αρχή ελέγχου ερευνά και αποφασίζει· η ΤΝ δεν κατηγορεί κανέναν.',
      en: 'The audit authority investigates and decides; the AI accuses no one.',
    },
    antilogos: {
      el: 'Οι δωροδοκίες κρύβονται σε κρυπτονομίσματα, αχυρανθρώπους και εξωτερικό — τα μητρώα δεν τα βλέπουν όλα.',
      en: 'Bribes hide in crypto, nominees and offshore — registers do not see everything.',
    },
    distributional: {
      el: 'Πληρώνουν οι αξιωματούχοι με ανεξήγητο πλούτο — και όλοι οι δικαστές ένα κόστος ιδιωτικότητας. Ωφελείται κάθε διάδικος.',
      en: 'Officials with unexplained wealth pay — and every judge pays a privacy cost. Every litigant gains.',
    },
    virtues: ['dikaiosyne', 'sophrosyne'],
    delta: { institutional_justice: 5, affiliation_trust: 3, economic_security: 1 },
  },
  {
    id: 'kleros',
    n: 'Σ6',
    name: { el: 'Κληρωτήριο', en: 'Kleroterion' },
    precedent: {
      el: 'Στην Αθήνα οι δικαστές κληρώνονταν το πρωί της δίκης με το κληρωτήριο, ώστε κανείς να μην ξέρει ποιον να δωροδοκήσει (Αθηναίων Πολιτεία 63–66).',
      en: 'In Athens jurors were drawn by the kleroterion on the morning of the trial, so no one knew whom to bribe (Constitution of the Athenians 63–66).',
    },
    plain: {
      el: 'Κανείς δεν διαλέγει τον δικαστή του: η ανάθεση γίνεται με επαληθεύσιμη κλήρωση.',
      en: 'No one picks their judge: assignment is by verifiable lot.',
    },
    how: {
      el: 'Κάθε υπόθεση ανατίθεται με δημόσια, κρυπτογραφικά επαληθεύσιμη κλήρωση· κάθε επανανάθεση ή εξαίρεση καταγράφεται με την αιτιολογία της.',
      en: 'Every case is assigned by a public, cryptographically verifiable draw; every re-assignment or exception is logged with its reason.',
    },
    humans: {
      el: 'Οι πρόεδροι των δικαστηρίων διαχειρίζονται την ύλη· δεν μπορούν να τη δρομολογούν.',
      en: 'Court presidents manage the docket; they can no longer route it.',
    },
    antilogos: {
      el: 'Η τυχαιότητα αγνοεί την εξειδίκευση· σύνθετες υποθέσεις μπορεί να πέσουν σε άπειρους δικαστές.',
      en: 'Randomness ignores expertise; complex cases may land with inexperienced judges.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι «αγόραζαν» σύνθεση. Ωφελούνται όλοι οι διάδικοι εξίσου.',
      en: 'Those who bought a panel pay. All parties gain equally.',
    },
    virtues: ['dikaiosyne', 'sophrosyne'],
    delta: { institutional_justice: 4, affiliation_trust: 3 },
  },
  {
    id: 'reconstruct',
    n: 'Σ7',
    name: { el: 'Ανεξάρτητη Ανασύνθεση', en: 'Independent Reconstruction' },
    precedent: {
      el: 'Ο Αριστοτέλης: ο νόμος κοιτάζει μόνο τη διαφορά της βλάβης. Η φυσική ενός δυστυχήματος δεν ξέρει ποιος είναι ισχυρός.',
      en: 'Aristotle: the law looks only at the difference in the harm. The physics of a crash does not know who is powerful.',
    },
    plain: {
      el: 'Το δυστύχημα ανασυντίθεται από τα δεδομένα, όχι από την αφήγηση της αρχής που ερευνά.',
      en: 'A crash is rebuilt from the data, not from the account of the authority investigating it.',
    },
    how: {
      el: 'Συλλέγει καταγραφικά οχημάτων, κάμερες, δεδομένα κινητών και ίχνη· ανασυνθέτει ταχύτητα, λωρίδα, οδηγό και χρόνο αντίδρασης· δίνει την ανασύνθεση, με ανοιχτά δεδομένα, στις οικογένειες πριν κλείσει οποιαδήποτε έρευνα.',
      en: 'Gathers vehicle event recorders, cameras, phone data and marks; rebuilds speed, lane, driver and reaction time; hands the reconstruction, with open data, to the families before any investigation can close.',
    },
    humans: {
      el: 'Πραγματογνώμονες υπογράφουν επώνυμα· οι οικογένειες μπορούν να την αμφισβητήσουν.',
      en: 'Experts sign by name; families can contest it.',
    },
    antilogos: {
      el: 'Τα μοντέλα ανασύνθεσης κάνουν λάθη και μπορεί να δώσουν ψεύτικη βεβαιότητα με επιστημονικό κύρος.',
      en: 'Reconstruction models make errors and can lend false certainty the authority of science.',
    },
    distributional: {
      el: 'Πληρώνει ο προϋπολογισμός της τροχαίας. Ωφελούνται όσοι δεν μπορούν να πληρώσουν δικό τους πραγματογνώμονα.',
      en: 'The traffic-police budget pays. Those who cannot afford their own expert gain.',
    },
    virtues: ['sophia', 'parrhesia'],
    delta: { institutional_justice: 4, bodily_safety: 4, affiliation_trust: 2 },
  },
  {
    id: 'reasons',
    n: 'Σ8',
    name: { el: 'Δημόσια Αιτιολόγηση', en: 'Public Reasons' },
    precedent: {
      el: 'Η παρρησία: το δικαίωμα και το χρέος να λέγεται δημόσια η αλήθεια — ακόμη και στην εξουσία.',
      en: 'Parrhesia: the right and duty to speak the truth in public — even to power.',
    },
    plain: {
      el: 'Κάθε αρχειοθέτηση, αθώωση ή επιεικής συμφωνία δημοσιεύεται με αιτιολογία σε απλή γλώσσα — και η ΤΝ δείχνει ό,τι αγνοήθηκε.',
      en: 'Every dropped case, acquittal or lenient deal is published with plain-language reasons — and the AI shows what was left out.',
    },
    how: {
      el: 'Αντιπαραβάλλει την αιτιολογία με τον φάκελο: δείχνει ποια τεκμήρια — βίντεο, ομολογίες, μαρτυρίες, αιτήματα που δεν έγιναν ποτέ — δεν απαντήθηκαν. Το κενό γίνεται δημόσιο ερώτημα με αποδέκτη.',
      en: 'Checks the reasons against the case file: shows which evidence — video, admissions, testimony, requests never made — went unanswered. The gap becomes a public question with an addressee.',
    },
    humans: {
      el: 'Το δικαστήριο αποφασίζει· η αιτιολογία του διαβάζεται από όλους.',
      en: 'The court decides; its reasoning is read by everyone.',
    },
    antilogos: {
      el: 'Η δημοσιότητα μπορεί να εκθέσει θύματα και μάρτυρες ή να επηρεάσει εκκρεμείς δίκες.',
      en: 'Publicity can expose victims and witnesses, or sway pending trials.',
    },
    distributional: {
      el: 'Πληρώνουν οι πρόχειρες και οι αγορασμένες αποφάσεις. Ωφελούνται οι οικογένειες που μένουν χωρίς εξήγηση.',
      en: 'Careless and purchased rulings pay. Families left without an explanation gain.',
    },
    virtues: ['parrhesia', 'sophia'],
    delta: { institutional_justice: 4, practical_reason: 3, affiliation_trust: 2 },
  },
  {
    id: 'clock',
    n: 'Σ9',
    name: { el: 'Ρολόι Παραγραφής', en: 'The Limitation Clock' },
    precedent: {
      el: 'Εὐθῦναι: κάθε αθηναίος άρχων λογοδοτούσε δημόσια στο τέλος της θητείας του, και κάθε πολίτης μπορούσε να καταγγείλει (Αθηναίων Πολιτεία 48, 54).',
      en: 'Euthynai: every Athenian magistrate answered publicly at the end of office, and any citizen could bring a charge (Constitution of the Athenians 48, 54).',
    },
    plain: {
      el: 'Όταν κατηγορείται αξιωματούχος, ένα δημόσιο ρολόι δείχνει πόσος χρόνος μένει πριν «σβήσει» η υπόθεση — και ποιος την κρατά.',
      en: 'When an official is accused, a public clock shows how long remains before the case expires — and who is holding it.',
    },
    how: {
      el: 'Παρακολουθεί κάθε προθεσμία — παραγραφή, κοινοβουλευτικές συνόδους, ψηφοφορίες για άρση ασυλίας — και καταγράφει ποιος θεσμός κρατά τον φάκελο και για πόσο. Όταν ο χρόνος λιγοστεύει, ειδοποιεί όσους πολίτες ακολουθούν την υπόθεση.',
      en: 'Tracks every deadline — limitation periods, parliamentary sessions, votes to lift immunity — and logs which institution holds the file and for how long. When time runs short, it alerts the citizens following the case.',
    },
    humans: {
      el: 'Η Βουλή και τα δικαστήρια αποφασίζουν· απλώς δεν μπορούν πια να αφήσουν τον χρόνο να αποφασίσει γι’ αυτούς.',
      en: 'Parliament and the courts decide; they can no longer let the clock decide for them.',
    },
    antilogos: {
      el: 'Κίνδυνος λαϊκού δικαστηρίου: η πίεση μιας αντίστροφης μέτρησης μπορεί να γίνει δημόσια καταδίκη πριν από τη δίκη.',
      en: 'Risk of trial by crowd: the pressure of a countdown can become a public conviction before any trial.',
    },
    distributional: {
      el: 'Πληρώνουν όσοι επένδυαν στην καθυστέρηση. Ωφελούνται οι οικογένειες που περιμένουν χρόνια.',
      en: 'Those who invested in delay pay. Families who wait for years gain.',
    },
    virtues: ['andreia', 'parrhesia'],
    delta: { institutional_justice: 5, practical_reason: 4, affiliation_trust: 2 },
  },
  {
    id: 'waiver',
    n: 'Σ10',
    name: { el: 'Άρση Ασυλίας εξ Ορισμού', en: 'Immunity Waiver by Default' },
    precedent: {
      el: 'Στην Αθήνα ούτε ο στρατηγός ούτε ο άρχων βρισκόταν πάνω από την εύθυνα· η ασυλία ήταν εξαίρεση, όχι καταφύγιο.',
      en: 'In Athens neither general nor magistrate stood above the audit of office; immunity was an exception, not a refuge.',
    },
    plain: {
      el: 'Όταν κάποιος με ασυλία σκοτώσει ή τραυματίσει σοβαρά, η άρση ζητείται αυτόματα και δημόσια — πριν προλάβει να φύγει.',
      en: 'When someone with immunity kills or seriously injures, a waiver is requested automatically and publicly — before they can leave.',
    },
    how: {
      el: 'Ενώνει την αστυνομική αναφορά με το μητρώο ασυλιών· ειδοποιεί το υπουργείο Εξωτερικών και καταγράφει δημόσια το αίτημα άρσης και την απάντηση, με ημερομηνίες και ώρες.',
      en: 'Links the police report with the immunity register; notifies the foreign ministry and logs publicly the waiver request and the answer, with dates and times.',
    },
    humans: {
      el: 'Οι κυβερνήσεις αποφασίζουν για την άρση· δεν μπορούν πια να το κάνουν αθόρυβα.',
      en: 'Governments decide on the waiver; they can no longer do it quietly.',
    },
    antilogos: {
      el: 'Η ασυλία προστατεύει και διπλωμάτες από στημένες διώξεις σε αυταρχικά κράτη· η αυτοματοποίηση μπορεί να τη διαβρώσει.',
      en: 'Immunity also protects diplomats from staged prosecution in authoritarian states; automation could erode it.',
    },
    distributional: {
      el: 'Πληρώνει η διπλωματική άνεση. Ωφελούνται οι οικογένειες που αλλιώς θα μάθαιναν από τις ειδήσεις ότι ο δράστης έφυγε.',
      en: 'Diplomatic convenience pays. Families who would otherwise learn from the news that the driver has left gain.',
    },
    virtues: ['dikaiosyne', 'andreia'],
    delta: { institutional_justice: 3, bodily_safety: 2, affiliation_trust: 2 },
  },
]
