// The ten safeguards of ΑΙΓΙΣ. Each is a PROPOSAL (Hard Rule 1): the AI
// watches those who receive the forecast, hold the budget and command the
// response — never the front-line firefighter; named humans decide.

import type { Safeguard } from '../types'

export const SAFEGUARDS: readonly Safeguard[] = [
  {
    id: 'alert-trigger',
    n: 'Σ1',
    name: { el: 'Κατώφλι Ειδοποίησης', en: 'The Alert Threshold' },
    precedent: {
      el: 'Ο Ευρωπαϊκός Κώδικας Ηλεκτρονικών Επικοινωνιών (άρθρο 110) υποχρεώνει ήδη κάθε κράτος της ΕΕ να έχει σύστημα προειδοποίησης του κοινού μέσω κινητών τηλεφώνων.',
      en: 'The European Electronic Communications Code (Article 110) already requires every EU state to have a public warning system through mobile phones.',
    },
    plain: {
      el: 'Όταν μια επίσημη πρόγνωση περνά ένα όριο κινδύνου, το μήνυμα προς τους πολίτες ετοιμάζεται αυτόματα — και ένας επώνυμος υπεύθυνος πρέπει να το στείλει ή να εξηγήσει γραπτώς γιατί όχι, μέσα σε λίγα λεπτά.',
      en: 'When an official forecast crosses a danger threshold, the alert to citizens is drafted automatically — and a named official must send it, or explain in writing why not, within minutes.',
    },
    how: {
      el: 'Η ΤΝ διαβάζει τις προειδοποιήσεις της μετεωρολογικής υπηρεσίας, των υδρολογικών σταθμών και του δείκτη κινδύνου πυρκαγιάς, και ετοιμάζει μήνυμα για τις περιοχές που απειλούνται. Η σιωπή δεν είναι επιλογή: κάθε απόφαση — αποστολή ή άρνηση — καταγράφεται με ώρα και όνομα.',
      en: 'The AI reads warnings from the met service, river gauges and the fire-danger index, and drafts an alert for the areas at risk. Silence is not an option: every decision — send or decline — is recorded with a time and a name.',
    },
    humans: {
      el: 'Ο υπεύθυνος πολιτικής προστασίας αποφασίζει αν θα σταλεί· η ΤΝ απλώς φροντίζει να μην ξεχαστεί η απόφαση.',
      en: 'The civil-protection official decides whether to send it; the AI simply makes sure the decision is not forgotten.',
    },
    antilogos: {
      el: 'Πολλά αυτόματα μηνύματα φέρνουν «κόπωση συναγερμού» — οι πολίτες σταματούν να τα προσέχουν. Και ένα λάθος μήνυμα εκκένωσης μπορεί να στείλει ανθρώπους στον δρόμο προς τη φωτιά.',
      en: 'Too many automatic alerts cause “alert fatigue” — citizens stop paying attention. And a wrong evacuation message can send people down the road toward the fire.',
    },
    distributional: {
      el: 'Χάνει η αδράνεια των γραφείων. Κερδίζουν όσοι μένουν σε ρέματα, δάση και ακτές — συχνά οι πιο απομονωμένοι.',
      en: 'Desk inertia loses. Those living by streams, forests and coasts gain — often the most isolated.',
    },
    virtues: ['phronesis', 'andreia'],
    delta: { bodily_safety: 5, life_health: 3, institutional_justice: 2 },
  },
  {
    id: 'alert-ledger',
    n: 'Σ2',
    name: { el: 'Ημερολόγιο Ειδοποιήσεων', en: 'The Alert Ledger' },
    precedent: {
      el: 'Μετά τη φωτιά της Λαχάινα, η ανεξάρτητη έρευνα της Χαβάης ανασυνέθεσε λεπτό προς λεπτό τι έγινε — 84 ευρήματα, 140 συστάσεις. Ένα δημόσιο ημερολόγιο το κάνει από την πρώτη στιγμή.',
      en: 'After the Lahaina fire, Hawaii’s independent review rebuilt what happened minute by minute — 84 findings, 140 recommendations. A public ledger does it from the first moment.',
    },
    plain: {
      el: 'Κάθε ειδοποίηση που στάλθηκε — και κάθε ειδοποίηση που εξετάστηκε και δεν στάλθηκε — καταγράφεται δημόσια με ώρα, περιοχή και κείμενο.',
      en: 'Every alert sent — and every alert considered and not sent — is recorded publicly with its time, area and text.',
    },
    how: {
      el: 'Μετά από κάθε συμβάν, η ΤΝ συγκρίνει την ώρα κάθε ειδοποίησης με την ώρα που έφτασε η φωτιά ή το νερό σε κάθε οικισμό, και με το αν λειτουργούσαν τα δίκτυα. Το χάσμα φαίνεται σε χάρτη.',
      en: 'After each event, the AI compares the time of each alert with when fire or water reached each settlement, and with whether the networks were working. The gap shows on a map.',
    },
    humans: {
      el: 'Οι ερευνητές ερμηνεύουν τα κενά· το ημερολόγιο απλώς δεν αφήνει κανέναν να τα ξαναγράψει.',
      en: 'Investigators interpret the gaps; the ledger simply does not let anyone rewrite them.',
    },
    antilogos: {
      el: 'Όποιος ξέρει ότι κάθε ώρα θα κριθεί δημόσια, μπορεί να στέλνει μηνύματα για να καλυφθεί, όχι για να προστατεύσει — ή να διστάζει ακόμη περισσότερο.',
      en: 'Someone who knows every hour will be judged publicly may send alerts to cover themselves, not to protect — or hesitate even more.',
    },
    distributional: {
      el: 'Χάνουν όσοι θα ήθελαν να ξαναγράψουν τη νύχτα της καταστροφής. Κερδίζουν οι οικογένειες, που μαθαίνουν τι έγινε χωρίς να περιμένουν χρόνια.',
      en: 'Those who would rewrite the night of the disaster lose. Families gain, learning what happened without waiting years.',
    },
    virtues: ['parrhesia', 'dikaiosyne'],
    delta: { institutional_justice: 4, affiliation_trust: 3, bodily_safety: 2 },
  },
  {
    id: 'evac-plan',
    n: 'Σ3',
    name: { el: 'Σχέδιο Διαφυγής για Κάθε Οικισμό', en: 'An Escape Plan for Every Settlement' },
    precedent: {
      el: 'Το σχέδιο πολιτικής προστασίας «Ξενοκράτης» υπάρχει από το 2003· το 2015 ο Άρειος Πάγος επικύρωσε την καταδίκη νομάρχη και δημάρχου επειδή δεν εφάρμοσαν τα μέτρα του.',
      en: 'Greece’s “Xenokratis” civil-protection plan has existed since 2003; in 2015 the Supreme Court upheld the conviction of a prefect and a mayor for failing to apply its measures.',
    },
    plain: {
      el: 'Κάθε οικισμός σε ζώνη κινδύνου έχει δημόσιο σχέδιο εκκένωσης και δρόμους διαφυγής, δοκιμασμένα κάθε χρόνο — και η ΤΝ σημαίνει όσους δεν έχουν.',
      en: 'Every settlement in a danger zone has a public evacuation plan and escape routes, tested every year — and the AI flags those that do not.',
    },
    how: {
      el: 'Η ΤΝ διασταυρώνει τους χάρτες κινδύνου πυρκαγιάς και πλημμύρας με τους οικισμούς και ελέγχει αν υπάρχει εγκεκριμένο σχέδιο, πότε δοκιμάστηκε και αν οι δρόμοι διαφυγής είναι ανοιχτοί. Όπου λείπει, το κενό φαίνεται δημόσια με την υπηρεσία που το οφείλει.',
      en: 'The AI overlays fire and flood risk maps with settlements and checks whether an approved plan exists, when it was tested and whether escape roads are open. Where it is missing, the gap shows publicly with the body that owes it.',
    },
    humans: {
      el: 'Οι δήμοι και η πολιτική προστασία συντάσσουν τα σχέδια· οι κάτοικοι τα δοκιμάζουν.',
      en: 'Municipalities and civil protection draw up the plans; residents test them.',
    },
    antilogos: {
      el: 'Ένα σχέδιο στα χαρτιά δίνει ψεύτικη ασφάλεια — η πραγματική φωτιά ή πλημμύρα σπάνια ακολουθεί το σενάριο. Και οι μικροί δήμοι δεν έχουν προσωπικό να συντάξουν και να δοκιμάσουν σχέδια για κάθε οικισμό.',
      en: 'A plan on paper gives false security — real fires and floods rarely follow the script. And small municipalities lack staff to draft and test plans for every settlement.',
    },
    distributional: {
      el: 'Κοστίζει χρόνο στους δήμους. Ωφελούνται οι κάτοικοι οικισμών όπως το Μάτι, που δεν είχαν πού να πάνε.',
      en: 'It costs municipalities time. Residents of places like Mati, who had nowhere to go, gain.',
    },
    virtues: ['phronesis', 'sophrosyne'],
    delta: { bodily_safety: 5, life_health: 3, affiliation_trust: 2 },
  },
  {
    id: 'vulnerable-registry',
    n: 'Σ4',
    name: { el: 'Κανείς Δεν Μένει Πίσω', en: 'No One Left Behind' },
    precedent: {
      el: 'Η Ιαπωνία υποχρεώνει από το 2013 τους δήμους να τηρούν κατάλογο όσων χρειάζονται βοήθεια για να εκκενώσουν — με τη συναίνεσή τους.',
      en: 'Since 2013 Japan has required municipalities to keep a list of people who need help to evacuate — with their consent.',
    },
    plain: {
      el: 'Οι δομές φροντίδας και όσοι χρειάζονται βοήθεια για να φύγουν — εφόσον το θέλουν — καταγράφονται, και παίρνουν πρώτοι την εντολή και τη βοήθεια εκκένωσης.',
      en: 'Care homes and people who need help to leave — if they choose — are registered, and receive the evacuation order and help first.',
    },
    how: {
      el: 'Το μητρώο είναι εθελοντικό, κρυπτογραφημένο και ανοίγει μόνο όταν κηρυχθεί κατάσταση έκτακτης ανάγκης στη συγκεκριμένη περιοχή. Η ΤΝ βάζει κάθε δομή φροντίδας στην κορυφή της λίστας εκκένωσης και ελέγχει ότι κάποιος ανέλαβε επώνυμα την ευθύνη της.',
      en: 'The register is voluntary, encrypted and opens only when an emergency is declared in that specific area. The AI puts every care home at the top of the evacuation list and checks that someone has taken named responsibility for it.',
    },
    humans: {
      el: 'Οι πολίτες αποφασίζουν αν θα εγγραφούν· οι διασώστες αποφασίζουν πώς θα φτάσουν.',
      en: 'Citizens decide whether to register; rescuers decide how to reach them.',
    },
    antilogos: {
      el: 'Ένα μητρώο ευάλωτων ανθρώπων είναι ευαίσθητα δεδομένα υγείας· αν διαρρεύσει, δείχνει σε κακόβουλους ποιος ζει μόνος και ανήμπορος.',
      en: 'A register of vulnerable people is sensitive health data; if it leaks, it shows bad actors who lives alone and helpless.',
    },
    distributional: {
      el: 'Δεν χάνει κανείς. Κερδίζουν όσοι δεν μπορούν να τρέξουν — ηλικιωμένοι, άνθρωποι με αναπηρία, οι ένοικοι των δομών φροντίδας.',
      en: 'No one loses. Those who cannot run gain — the elderly, people with disabilities, residents of care homes.',
    },
    virtues: ['dikaiosyne', 'eudaimonia'],
    delta: { life_health: 5, bodily_safety: 4, affiliation_trust: 3 },
  },
  {
    id: 'prevention-ledger',
    n: 'Σ5',
    name: { el: 'Το Ίχνος του Ευρώ της Πρόληψης', en: 'Following the Prevention Euro' },
    precedent: {
      el: 'Το 2023 η Εισαγγελία του Αρείου Πάγου χρειάστηκε να διατάξει έρευνα για το αν χρήματα αντιπλημμυρικής προστασίας πήγαν σε δρόμους και αθλητικές εγκαταστάσεις — ερώτημα που ένα δημόσιο μητρώο απαντά πριν από την πλημμύρα.',
      en: 'In 2023 the Supreme Court prosecutor had to order an inquiry into whether flood-prevention money went to roads and sports facilities — a question a public ledger answers before the flood.',
    },
    plain: {
      el: 'Κάθε ευρώ πρόληψης φαίνεται σε χάρτη: για ποιο έργο προϋπολογίστηκε, πόσο πληρώθηκε και αν το έργο τελείωσε.',
      en: 'Every prevention euro shows on a map: which work it was budgeted for, how much was paid and whether the work was finished.',
    },
    how: {
      el: 'Η ΤΝ συνδέει τους προϋπολογισμούς περιφερειών και δήμων με τις συμβάσεις και τις πληρωμές, και σημαίνει κάθε μεταφορά κονδυλίων από αντιπλημμυρικά ή αντιπυρικά σε άλλους σκοπούς, καθώς και κάθε έργο πρόληψης που μελετήθηκε αλλά δεν ξεκίνησε.',
      en: 'The AI links regional and municipal budgets to contracts and payments, and flags every transfer of funds from flood or fire prevention to other purposes, and every prevention work designed but never started.',
    },
    humans: {
      el: 'Τα αιρετά συμβούλια αποφασίζουν τις προτεραιότητες· απλώς δεν μπορούν να τις αλλάζουν στο σκοτάδι.',
      en: 'Elected councils set priorities; they simply cannot change them in the dark.',
    },
    antilogos: {
      el: 'Οι ανάγκες αλλάζουν: μια μεταφορά κονδυλίων σε δρόμο μπορεί να είναι απολύτως δικαιολογημένη. Ένας κόκκινος χάρτης θα ενοχοποιεί αποφάσεις που ήταν σωστές τη στιγμή που πάρθηκαν.',
      en: 'Needs change: moving funds to a road may be entirely justified. A red map would incriminate decisions that were right when they were made.',
    },
    distributional: {
      el: 'Χάνουν τα έργα βιτρίνας που τρώνε τα χρήματα της πρόληψης. Κερδίζουν οι πεδιάδες και τα χωριά που πλημμυρίζουν.',
      en: 'Showcase projects that eat the prevention budget lose. The plains and villages that flood gain.',
    },
    virtues: ['sophrosyne', 'dikaiosyne'],
    delta: { bodily_safety: 4, economic_security: 2, institutional_justice: 3 },
  },
  {
    id: 'command-log',
    n: 'Σ6',
    name: { el: 'Ημερολόγιο Διοίκησης Κρίσης', en: 'The Crisis Command Log' },
    precedent: {
      el: 'Το ημερολόγιο γέφυρας ενός πλοίου καταγράφει εδώ και αιώνες κάθε απόφαση του πλοιάρχου με την ώρα της — γιατί στη θάλασσα η ευθύνη πρέπει να έχει όνομα.',
      en: 'A ship’s logbook has for centuries recorded every decision of the captain with its time — because at sea responsibility must have a name.',
    },
    plain: {
      el: 'Όταν κηρύσσεται έκτακτη ανάγκη, η παρουσία και οι αποφάσεις του υπευθύνου καταγράφονται με ώρα — και αν λείπει, η διοίκηση περνά αυτόματα στον αναπληρωτή.',
      en: 'When an emergency is declared, the responsible official’s presence and decisions are logged with times — and if absent, command passes automatically to the deputy.',
    },
    how: {
      el: 'Το κέντρο επιχειρήσεων καταγράφει ποιος ήταν παρών, ποια πληροφορία έφτασε σε ποιον και τι αποφασίστηκε. Αν ο υπεύθυνος δεν απαντά μέσα σε ορισμένο χρόνο, ο αναπληρωτής αναλαμβάνει με πλήρη εξουσία — και αυτό φαίνεται στο ημερολόγιο.',
      en: 'The operations centre logs who was present, what information reached whom and what was decided. If the official does not respond within a set time, the deputy takes over with full authority — and that shows in the log.',
    },
    humans: {
      el: 'Οι υπεύθυνοι αποφασίζουν όπως πάντα· το ημερολόγιο εξασφαλίζει ότι υπάρχει πάντα κάποιος να αποφασίσει.',
      en: 'Officials decide as always; the log ensures there is always someone to decide.',
    },
    antilogos: {
      el: 'Σε μια κρίση οι υπεύθυνοι πρέπει να κινούνται, να επισκέπτονται το πεδίο, να συντονίζονται — η απαίτηση να «φαίνονται» σε ένα ημερολόγιο μπορεί να γίνει γραφειοκρατία την πιο κρίσιμη ώρα.',
      en: 'In a crisis officials must move, visit the field, coordinate — requiring them to “appear” in a log may become bureaucracy at the most critical hour.',
    },
    distributional: {
      el: 'Χάνουν όσοι έλειπαν χωρίς να το ξέρει κανείς. Κερδίζουν όσοι περίμεναν μια απόφαση που δεν ερχόταν.',
      en: 'Those absent without anyone knowing lose. Those waiting for a decision that never came gain.',
    },
    virtues: ['andreia', 'phronesis'],
    delta: { bodily_safety: 4, institutional_justice: 3, affiliation_trust: 2 },
  },
  {
    id: 'open-risk',
    n: 'Σ7',
    name: { el: 'Ο Κίνδυνος Λέγεται Όπως Είναι', en: 'Risk Told as It Is' },
    precedent: {
      el: 'Η Αθήνα τιμούσε την παρρησία — το δικαίωμα και το χρέος να λες στη συνέλευση την αλήθεια, ακόμη κι όταν δεν αρέσει.',
      en: 'Athens honoured parrhesia — the right and the duty to tell the assembly the truth, even when it is unwelcome.',
    },
    plain: {
      el: 'Η ενημέρωση για έναν κίνδυνο δημοσιεύει την εκτίμηση των ίδιων των ειδικών, με την αβεβαιότητά της, υπογεγραμμένη από αυτούς — όχι μεταφρασμένη σε «μην ανησυχείτε» από έναν αξιωματούχο.',
      en: 'Communication about a hazard publishes the experts’ own assessment, with its uncertainty, signed by them — not translated into “don’t worry” by an official.',
    },
    how: {
      el: 'Τα πρακτικά κάθε επιτροπής κινδύνου δημοσιεύονται αυτούσια. Η ΤΝ συγκρίνει κάθε δημόσια δήλωση αξιωματούχου με το τι είπαν πραγματικά οι ειδικοί, και σημαίνει κάθε δήλωση που είναι πιο καθησυχαστική από την εκτίμηση.',
      en: 'The minutes of every risk committee are published in full. The AI compares each official’s public statement with what the experts actually said, and flags any statement more reassuring than the assessment.',
    },
    humans: {
      el: 'Οι ειδικοί εκτιμούν τον κίνδυνο· οι αξιωματούχοι αποφασίζουν τα μέτρα — αλλά δεν αλλάζουν την εκτίμηση.',
      en: 'Experts assess the risk; officials decide the measures — but do not change the assessment.',
    },
    antilogos: {
      el: 'Η ωμή δημοσίευση αβέβαιων εκτιμήσεων μπορεί να προκαλέσει πανικό ή να κουράσει το κοινό με κινδύνους που δεν έρχονται ποτέ. Μερικές φορές η ηρεμία είναι όντως το σωστό μήνυμα.',
      en: 'Publishing raw, uncertain assessments may cause panic or tire the public with dangers that never come. Sometimes calm really is the right message.',
    },
    distributional: {
      el: 'Χάνει η επικοινωνιακή διαχείριση του φόβου. Κερδίζουν όσοι αποφασίζουν μόνοι τους αν θα μείνουν μέσα απόψε.',
      en: 'Spin-managed fear loses. Those who decide for themselves whether to stay indoors tonight gain.',
    },
    virtues: ['parrhesia', 'sophia'],
    delta: { bodily_safety: 3, institutional_justice: 3, affiliation_trust: 4 },
  },
  {
    id: 'single-responsible',
    n: 'Σ8',
    name: { el: 'Ένας Επώνυμος Υπεύθυνος', en: 'One Named Office' },
    precedent: {
      el: 'Η ανεξάρτητη επιτροπή για το Μάτι (2019) μέτρησε 45 φορείς με ρόλο στην πυροπροστασία «χωρίς σαφή αλυσίδα διοίκησης».',
      en: 'The independent committee on Mati (2019) counted 45 agencies with a role in fire protection and “no clear chain of command.”',
    },
    plain: {
      el: 'Για κάθε κίνδυνο σε κάθε περιοχή, ένας φορέας — με όνομα και υπεύθυνο — έχει την τελική ευθύνη, και αυτό είναι δημόσιο πριν από την καταστροφή.',
      en: 'For each hazard in each area, one body — named, with a person in charge — holds final responsibility, and that is public before the disaster.',
    },
    how: {
      el: 'Η ΤΝ χαρτογραφεί ποιος είναι αρμόδιος για κάθε ρέμα, δάσος, φράγμα και δρόμο διαφυγής, και σημαίνει κάθε σημείο όπου η αρμοδιότητα είναι διπλή, κενή ή αμφισβητούμενη — ώστε να λυθεί πριν από την κρίση, όχι στο δικαστήριο.',
      en: 'The AI maps who is responsible for each stream, forest, dam and escape road, and flags every point where responsibility is duplicated, empty or disputed — so it is resolved before the crisis, not in court.',
    },
    humans: {
      el: 'Η Βουλή και η κυβέρνηση ορίζουν τις αρμοδιότητες· ο χάρτης απλώς δείχνει πού δεν τις όρισαν.',
      en: 'Parliament and government assign responsibilities; the map simply shows where they did not.',
    },
    antilogos: {
      el: 'Οι καταστροφές ξεπερνούν τα όρια κάθε φορέα· η συγκέντρωση όλης της ευθύνης σε έναν μπορεί να τον υπερφορτώσει και να αφήσει τους άλλους να αδρανούν.',
      en: 'Disasters cross every agency’s boundaries; concentrating all responsibility in one may overload it and let the others sit idle.',
    },
    distributional: {
      el: 'Χάνει η δυνατότητα κάθε φορέα να δείχνει τον άλλον. Κερδίζουν οι οικογένειες που θα ξέρουν σε ποιον να ζητήσουν λόγο.',
      en: 'Each agency’s ability to point at another is lost. Families gain, knowing whom to ask for an account.',
    },
    virtues: ['dikaiosyne', 'phronesis'],
    delta: { institutional_justice: 4, bodily_safety: 3, affiliation_trust: 2 },
  },
  {
    id: 'after-action',
    n: 'Σ9',
    name: { el: 'Η Έκθεση της Επόμενης Μέρας', en: 'The Day-After Report' },
    precedent: {
      el: 'Μετά τη Λαχάινα, ο Γενικός Εισαγγελέας της Χαβάης ανέθεσε ανεξάρτητη ανάλυση που δημοσίευσε 84 ευρήματα και 140 συστάσεις — ανεξάρτητα από οποιαδήποτε δίκη.',
      en: 'After Lahaina, Hawaii’s Attorney General commissioned an independent analysis that published 84 findings and 140 recommendations — independent of any trial.',
    },
    plain: {
      el: 'Μέσα σε λίγους μήνες από κάθε θανατηφόρα καταστροφή, ανεξάρτητη επιτροπή δημοσιεύει τι πήγε στραβά — και κάθε σύσταση αποκτά προθεσμία και υπεύθυνο.',
      en: 'Within months of every deadly disaster, an independent panel publishes what went wrong — and each recommendation gets a deadline and an owner.',
    },
    how: {
      el: 'Η έκθεση δεν αποδίδει ποινικές ευθύνες· εξηγεί το σύστημα. Η ΤΝ παρακολουθεί δημόσια την υλοποίηση κάθε σύστασης, και όταν η ίδια σύσταση εμφανίζεται σε έκθεση δεύτερης καταστροφής, το σημαίνει.',
      en: 'The report assigns no criminal blame; it explains the system. The AI tracks each recommendation’s implementation publicly, and flags when the same recommendation appears in the report of a second disaster.',
    },
    humans: {
      el: 'Η επιτροπή γράφει, η κυβέρνηση υλοποιεί, η Βουλή ελέγχει.',
      en: 'The panel writes, the government implements, Parliament checks.',
    },
    antilogos: {
      el: 'Οι εκθέσεις συχνά γράφονται και ξεχνιούνται· μια ακόμη επιτροπή μπορεί να γίνει υποκατάστατο της λογοδοσίας αντί για δρόμος προς αυτήν.',
      en: 'Reports are often written and forgotten; another panel may become a substitute for accountability rather than a road to it.',
    },
    distributional: {
      el: 'Κοστίζει λίγο. Κερδίζουν όσοι θα ζήσουν την επόμενη καταστροφή — αν τα διδάγματα της προηγούμενης έχουν γίνει πράξη.',
      en: 'It costs little. Those who will live through the next disaster gain — if the lessons of the last have been applied.',
    },
    virtues: ['sophia', 'phronesis'],
    delta: { bodily_safety: 4, institutional_justice: 3, affiliation_trust: 3 },
  },
  {
    id: 'reckoning-ledger',
    n: 'Σ10',
    name: { el: 'Η Ζυγαριά των Νεκρών', en: 'The Scale of the Dead' },
    precedent: {
      el: 'Ο Σόλων έδωσε σε κάθε πολίτη το δικαίωμα να ζητά δικαιοσύνη για λογαριασμό του αδικημένου (Αθηναίων Πολιτεία 9) — η λογοδοσία δεν ήταν υπόθεση μόνο των συγγενών.',
      en: 'Solon gave every citizen the right to seek justice on behalf of the wronged (Constitution of the Athenians 9) — accountability was not only the relatives’ business.',
    },
    plain: {
      el: 'Για κάθε θανατηφόρα καταστροφή, ένας δημόσιος πίνακας δείχνει δίπλα-δίπλα τους νεκρούς και τι απέγινε με όσους αποφάσιζαν: καταδίκη, εξαγορά, αθώωση, παραγραφή, ασυλία ή τίποτα.',
      en: 'For every deadly disaster, a public table shows side by side the dead and what became of those who decided: conviction, buyout, acquittal, time limits, immunity or nothing.',
    },
    how: {
      el: 'Η ΤΝ ενημερώνει τον πίνακα από τις δικαστικές αποφάσεις και δείχνει το μοτίβο σε βάθος χρόνου: πόσα χρόνια χρειάζονται, πόσες ποινές εξαγοράζονται, πόσοι φτάνουν στην παραγραφή. Οι αθωωθέντες αναφέρονται ως αθώοι.',
      en: 'The AI updates the table from court rulings and shows the pattern over time: how many years it takes, how many sentences are bought out, how many reach time limits. Those acquitted are listed as innocent.',
    },
    humans: {
      el: 'Τα δικαστήρια κρίνουν κάθε υπόθεση· η ζυγαριά απλώς δείχνει στους πολίτες το σύνολο.',
      en: 'Courts judge each case; the scale simply shows citizens the whole.',
    },
    antilogos: {
      el: 'Ένας πίνακας που βάζει νεκρούς δίπλα σε αθωώσεις υπονοεί ότι οι αθωώσεις ήταν λάθος — πιέζει τα δικαστήρια να καταδικάζουν για να «ισορροπήσει» η ζυγαριά.',
      en: 'A table placing the dead beside acquittals implies the acquittals were wrong — pressuring courts to convict so the scale “balances.”',
    },
    distributional: {
      el: 'Χάνει η λήθη. Κερδίζουν οι οικογένειες και κάθε πολίτης που θέλει να ξέρει αν η ευθύνη έχει κόστος.',
      en: 'Oblivion loses. Families gain — and every citizen who wants to know whether responsibility has a cost.',
    },
    virtues: ['dikaiosyne', 'parrhesia'],
    delta: { institutional_justice: 5, affiliation_trust: 3 },
  },
]
