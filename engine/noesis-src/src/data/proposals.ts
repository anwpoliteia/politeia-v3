// Seed proposals. Each is a complete instance of the canonical unit (spec §4.2):
// plain-language summary, situation, advisory recommendation, full reasoning,
// adversarial counter-argument, virtue marks, nine-dimension Eudaimonia delta,
// distributional note, confidence + uncertainty, cited sources, accountable role.
//
// No imperative phrasing in any agent text (Hard Rule 1); every recommendation
// uses advisory language ("προτείνεται", "we propose", "could").

import type { Proposal } from '../lib/types'

export const PROPOSALS: readonly Proposal[] = [
  {
    id: 'prop-environment-01',
    ministryId: 'min-environment',
    version: 1,
    supersedes: null,
    status: 'proposal',
    stakes: 'high',
    title: {
      el: 'Επιτάχυνση υπεράκτιων αιολικών στο Αιγαίο, με δεσμευτικές ζώνες προστασίας',
      en: 'Accelerate Aegean offshore wind, paired with binding protection zones',
    },
    plain: {
      el: 'Προτείνεται να χτιστούν περισσότερα θαλάσσια αιολικά πάρκα γρηγορότερα, αλλά μακριά από ευαίσθητες θαλάσσιες περιοχές και τουριστικά νησιά.',
      en: 'We propose building more offshore wind farms faster, but kept away from sensitive marine areas and tourist islands.',
    },
    situation: {
      el: 'Η Ελλάδα εισάγει το μεγαλύτερο μέρος της ενέργειάς της και παραμένει εκτεθειμένη σε διακυμάνσεις τιμών. Το υπεράκτιο αιολικό δυναμικό του Αιγαίου είναι από τα υψηλότερα στην Ευρώπη, όμως η αδειοδότηση είναι αργή και υπάρχουν συγκρούσεις με την αλιεία, τον τουρισμό και την προστασία οικοτόπων.',
      en: 'Greece imports most of its energy and remains exposed to price shocks. The Aegean’s offshore wind potential is among Europe’s highest, yet permitting is slow and there are conflicts with fishing, tourism and habitat protection.',
    },
    recommendation: {
      el: 'Προτείνεται μια ταχεία διαδικασία αδειοδότησης δεκαοκτώ μηνών για έργα εκτός προκαθορισμένων ζωνών αποκλεισμού (διαδρόμοι κητωδών, περιοχές Natura 2000, οπτικό πεδίο κατοικημένων ακτών), συνδυασμένη με δεσμευτικό μερίδιο τοπικής ιδιοκτησίας και αναδιανομή εσόδων στις νησιωτικές κοινότητες.',
      en: 'We propose an eighteen-month fast-track permit for projects outside pre-defined exclusion zones (cetacean corridors, Natura 2000 sites, the sightline of inhabited coasts), combined with a binding local-ownership share and revenue redistribution to island communities.',
    },
    reasoning: {
      el: 'Η ανάλυση εξετάζει τρία ενεργειακά σενάρια έως το 2035. Το προτεινόμενο σενάριο μειώνει την εξάρτηση από εισαγόμενο φυσικό αέριο κατά εκτιμώμενο 18–24% και σταθεροποιεί τις τιμές χονδρικής. Οι ζώνες αποκλεισμού περιορίζουν την οικολογική και τουριστική ζημία· το μερίδιο τοπικής ιδιοκτησίας μετατρέπει την τοπική αντίσταση σε τοπικό όφελος, κατά το πρότυπο των δανικών συνεταιρισμών. Η βεβαιότητα περιορίζεται από την αβεβαιότητα στις τιμές εξοπλισμού και στους χρόνους διασύνδεσης δικτύου.',
      en: 'The analysis examines three energy scenarios to 2035. The proposed scenario lowers dependence on imported gas by an estimated 18–24% and stabilises wholesale prices. The exclusion zones limit ecological and tourism harm; the local-ownership share converts local resistance into local benefit, on the Danish cooperative model. Confidence is bounded by uncertainty in equipment prices and grid-interconnection timelines.',
    },
    counterArgument: {
      el: 'Ο ισχυρότερος αντίλογος: ακόμη και εκτός ζωνών αποκλεισμού, τα υπεράκτια πάρκα αλλάζουν μη αναστρέψιμα το θαλάσσιο τοπίο και τα οικοσυστήματα με τρόπους που τα μοντέλα υποεκτιμούν· οι χρόνοι διασύνδεσης δικτύου ιστορικά ξεπερνούν τις προβλέψεις, οπότε το όφελος τιμής μπορεί να καθυστερήσει χρόνια ενώ το κόστος επιβαρύνει σήμερα τους καταναλωτές. Μια πιο συντηρητική σταδιακή επέκταση με πιλοτικά έργα θα μείωνε τον κίνδυνο μη αναστρέψιμου σφάλματος.',
      en: 'The strongest case against: even outside exclusion zones, offshore farms irreversibly alter the seascape and ecosystems in ways the models underestimate; grid-interconnection timelines have historically overrun forecasts, so the price benefit could be delayed years while the cost falls on consumers now. A more conservative, pilot-led expansion would reduce the risk of an irreversible error.',
    },
    virtues: ['sophrosyne', 'phronesis', 'sophia', 'eudaimonia'],
    eudaimoniaDelta: {
      environment_ecology: 6,
      economic_security: 5,
      life_health: 2,
      institutional_justice: 1,
      affiliation_trust: -2,
      play_culture: -1,
    },
    distributionalNote: {
      el: 'Ωφελούνται οι καταναλωτές ενέργειας πανελλαδικά και οι νησιωτικές κοινότητες που λαμβάνουν μερίδιο εσόδων. Επιβαρύνονται βραχυπρόθεσμα οι αλιείς σε ορισμένες ζώνες και όσοι ανησυχούν για το τοπίο· προβλέπεται αποζημίωση μετάβασης για τον αλιευτικό στόλο.',
      en: 'Energy consumers nationwide and island communities receiving a revenue share gain. Fishers in some zones and those concerned with the seascape bear a short-term cost; a transition payment for the fishing fleet is included.',
    },
    confidence: 0.68,
    uncertainty: {
      el: 'Η σύσταση θα άλλαζε αν νεότερα δεδομένα έδειχναν χρόνους διασύνδεσης δικτύου άνω των πέντε ετών ή ουσιαστική επίδραση στους πληθυσμούς κητωδών εκτός των μοντελοποιημένων διαδρόμων.',
      en: 'The recommendation would change if newer data showed grid-interconnection times beyond five years or a material effect on cetacean populations outside the modelled corridors.',
    },
    sources: [
      { title: 'IEA — Renewables 2024', url: 'https://www.iea.org/reports/renewables-2024' },
      { title: 'ΕΛΕΤΑΕΝ — Υπεράκτια αιολικά (Hellenic Wind Energy Association)', url: 'https://eletaen.gr/' },
      { title: 'EMODnet — Marine habitat data', url: 'https://emodnet.ec.europa.eu/' },
    ],
    modelUsed: 'claude-opus-5',
    accountableRole: {
      el: 'Υπουργός Περιβάλλοντος & Ενέργειας',
      en: 'Minister of Environment & Energy',
    },
    createdAt: '2026-06-09T09:00:00Z',
  },
  {
    id: 'prop-finance-01',
    ministryId: 'min-finance',
    version: 1,
    supersedes: null,
    status: 'proposal',
    stakes: 'high',
    title: {
      el: 'Σταδιακή κατάργηση της εισφοράς αλληλεγγύης για μεσαία εισοδήματα σε τρία έτη',
      en: 'Phase out the solidarity levy on middle incomes over three years',
    },
    plain: {
      el: 'Προτείνεται να μειωθεί σταδιακά ένας πρόσθετος φόρος στα μεσαία εισοδήματα, ώστε να μένουν περισσότερα χρήματα στα νοικοκυριά.',
      en: 'We propose gradually removing an extra tax on middle incomes so households keep more of what they earn.',
    },
    situation: {
      el: 'Η εισφορά αλληλεγγύης θεσπίστηκε ως έκτακτο μέτρο της κρίσης. Παραμένει για ορισμένες κατηγορίες, επιβαρύνοντας δυσανάλογα τα μεσαία εισοδήματα, ενώ ο δημοσιονομικός χώρος έχει βελτιωθεί αλλά παραμένει περιορισμένος.',
      en: 'The solidarity levy was introduced as an emergency crisis measure. It persists for some brackets, weighing disproportionately on middle incomes, while fiscal space has improved but remains limited.',
    },
    recommendation: {
      el: 'Προτείνεται τριετής σταδιακή κατάργηση για εισοδήματα έως €40.000, με ρήτρα αναστολής αν το πρωτογενές πλεόνασμα πέσει κάτω από συμφωνημένο όριο, ώστε να μη διακινδυνεύσει η δημοσιονομική σταθερότητα.',
      en: 'We propose a three-year phase-out for incomes up to €40,000, with a suspension clause if the primary surplus falls below an agreed floor, so fiscal stability is not put at risk.',
    },
    reasoning: {
      el: 'Η προσομοίωση δείχνει αύξηση του διαθέσιμου εισοδήματος για ~2,1 εκατ. φορολογούμενους, με πολλαπλασιαστή κατανάλωσης που ανακτά μέρος της απώλειας εσόδων. Η ρήτρα αναστολής διατηρεί την εγκράτεια. Το κόστος εκτιμάται σε €0,9–1,3 δισ. ετησίως στην πλήρη εφαρμογή· το εύρος αντανακλά αβεβαιότητα στην ελαστικότητα κατανάλωσης.',
      en: 'The simulation shows higher disposable income for ~2.1m taxpayers, with a consumption multiplier recovering part of the foregone revenue. The suspension clause preserves temperance. The cost is estimated at €0.9–1.3bn per year at full implementation; the range reflects uncertainty in the consumption elasticity.',
    },
    counterArgument: {
      el: 'Ο ισχυρότερος αντίλογος: η απώλεια εσόδων είναι βέβαιη ενώ ο πολλαπλασιαστής είναι αβέβαιος· αν η ανάπτυξη επιβραδυνθεί, το μέτρο θα έχει μειώσει το δημοσιονομικό απόθεμα ακριβώς όταν χρειάζεται. Τα ίδια χρήματα θα μπορούσαν να αποδώσουν μεγαλύτερο κέρδος ευδαιμονίας αν κατευθύνονταν στη στοχευμένη στήριξη των χαμηλότερων εισοδημάτων, που έχουν υψηλότερη οριακή ροπή προς κατανάλωση.',
      en: 'The strongest case against: the revenue loss is certain while the multiplier is uncertain; if growth slows, the measure will have reduced the fiscal buffer exactly when it is needed. The same money could yield a larger eudaimonia gain if directed to targeted support for lower incomes, who have a higher marginal propensity to consume.',
    },
    virtues: ['sophrosyne', 'dikaiosyne', 'phronesis'],
    eudaimoniaDelta: {
      economic_security: 5,
      affiliation_trust: 2,
      practical_reason: 1,
      institutional_justice: -2,
    },
    distributionalNote: {
      el: 'Ωφελούνται κυρίως τα μεσαία εισοδήματα έως €40.000. Δεν ωφελούνται άμεσα τα χαμηλότερα εισοδήματα κάτω από το αφορολόγητο· γι’ αυτό προτείνεται παράλληλη εξέταση στοχευμένου επιδόματος. Το κόστος επωμίζεται ο κρατικός προϋπολογισμός.',
      en: 'Mainly middle incomes up to €40,000 gain. The lowest incomes below the tax-free threshold do not benefit directly; a parallel targeted allowance is therefore proposed for consideration. The cost falls on the state budget.',
    },
    confidence: 0.64,
    uncertainty: {
      el: 'Η σύσταση θα άλλαζε αν η μεσοπρόθεσμη πρόβλεψη ανάπτυξης αναθεωρούνταν προς τα κάτω κατά περισσότερο από μία ποσοστιαία μονάδα.',
      en: 'The recommendation would change if the medium-term growth forecast were revised down by more than one percentage point.',
    },
    sources: [
      { title: 'ΕΛΣΤΑΤ — Στατιστική Αρχή Ελλάδος', url: 'https://www.statistics.gr/' },
      { title: 'European Commission — Fiscal Statistical Annex', url: 'https://economy-finance.ec.europa.eu/' },
      { title: 'ΟΟΣΑ — Economic Surveys: Greece', url: 'https://www.oecd.org/economy/greece-economic-snapshot/' },
    ],
    modelUsed: 'claude-opus-5',
    accountableRole: { el: 'Υπουργός Οικονομικών', en: 'Minister of Finance' },
    createdAt: '2026-06-04T11:30:00Z',
  },
  {
    id: 'prop-health-01',
    ministryId: 'min-health',
    version: 1,
    supersedes: null,
    status: 'proposal',
    stakes: 'standard',
    title: {
      el: 'Καθολική προληπτική πρωτοβάθμια φροντίδα στις νησιωτικές και ορεινές περιοχές',
      en: 'Universal preventive primary care for island and mountain regions',
    },
    plain: {
      el: 'Προτείνεται δωρεάν τακτικός προληπτικός έλεγχος υγείας για όσους ζουν σε απομακρυσμένα νησιά και ορεινά χωριά.',
      en: 'We propose free regular preventive health checks for people living on remote islands and mountain villages.',
    },
    situation: {
      el: 'Οι κάτοικοι μικρών νησιών και ορεινών περιοχών έχουν χαμηλότερη πρόσβαση σε πρωτοβάθμια φροντίδα και διαγιγνώσκονται αργότερα. Το αποτέλεσμα είναι χειρότερες εκβάσεις και υψηλότερο κόστος δευτεροβάθμιας περίθαλψης.',
      en: 'Residents of small islands and mountain regions have lower access to primary care and are diagnosed later. The result is worse outcomes and higher secondary-care costs.',
    },
    recommendation: {
      el: 'Προτείνεται ένα δίκτυο κινητών μονάδων και τηλεϊατρικής που προσφέρει ετήσιο προληπτικό έλεγχο χωρίς κόστος, με προτεραιότητα σε περιοχές χωρίς μόνιμο ιατρό.',
      en: 'We propose a network of mobile units and telemedicine offering a no-cost annual preventive check, prioritising areas without a resident doctor.',
    },
    reasoning: {
      el: 'Η ανάλυση QALY δείχνει ότι η έγκαιρη ανίχνευση καρδιαγγειακών και μεταβολικών παραγόντων κινδύνου αποδίδει υψηλό όφελος ανά ευρώ, ενώ μειώνει μελλοντικές εισαγωγές. Η ισότητα πρόσβασης βελτιώνεται μετρήσιμα για περίπου 480.000 κατοίκους.',
      en: 'QALY analysis shows that early detection of cardiovascular and metabolic risk factors yields high benefit per euro, while reducing future admissions. Access equity improves measurably for roughly 480,000 residents.',
    },
    counterArgument: {
      el: 'Ο ισχυρότερος αντίλογος: η στελέχωση κινητών μονάδων ανταγωνίζεται για το ίδιο σπάνιο ιατρικό προσωπικό που ήδη λείπει από τα νησιά· χωρίς λύση στο πρόβλημα προσωπικού, το πρόγραμμα κινδυνεύει να μείνει στα χαρτιά ή να αποδυναμώσει τα υπάρχοντα αγροτικά ιατρεία.',
      en: 'The strongest case against: staffing mobile units competes for the same scarce medical workforce already missing from the islands; without solving the workforce problem, the programme risks remaining on paper or hollowing out existing rural clinics.',
    },
    virtues: ['eudaimonia', 'dikaiosyne', 'phronesis'],
    eudaimoniaDelta: {
      life_health: 7,
      institutional_justice: 3,
      affiliation_trust: 2,
      economic_security: -1,
    },
    distributionalNote: {
      el: 'Ωφελούνται κάτοικοι απομακρυσμένων περιοχών, δυσανάλογα ηλικιωμένοι. Το κόστος επωμίζεται ο προϋπολογισμός υγείας· υπάρχει κίνδυνος μετατόπισης προσωπικού από αστικά κέντρα.',
      en: 'Residents of remote areas, disproportionately the elderly, gain. The cost falls on the health budget; there is a risk of staff displacement from urban centres.',
    },
    confidence: 0.76,
    uncertainty: {
      el: 'Η σύσταση θα ενισχυόταν ή θα αποδυναμωνόταν ανάλογα με τη διαθεσιμότητα προσωπικού· απαιτείται δέσμευση για κίνητρα στελέχωσης.',
      en: 'The recommendation would strengthen or weaken with workforce availability; a commitment to staffing incentives is required.',
    },
    sources: [
      { title: 'WHO — Primary Health Care', url: 'https://www.who.int/health-topics/primary-health-care' },
      { title: 'ΕΟΔΥ — Εθνικός Οργανισμός Δημόσιας Υγείας', url: 'https://eody.gov.gr/' },
    ],
    modelUsed: 'claude-sonnet-4-6',
    accountableRole: { el: 'Υπουργός Υγείας', en: 'Minister of Health' },
    createdAt: '2026-05-28T08:15:00Z',
  },
  {
    id: 'prop-migration-02',
    ministryId: 'min-migration',
    version: 2,
    supersedes: 'prop-migration-01',
    status: 'proposal',
    stakes: 'high',
    title: {
      el: 'Ταχεία διαδικασία ασύλου με νομικές εγγυήσεις και αποκεντρωμένη ένταξη',
      en: 'Fast-track asylum with legal safeguards and decentralised integration',
    },
    plain: {
      el: 'Προτείνεται να εξετάζονται οι αιτήσεις ασύλου πιο γρήγορα και δίκαια, και όσοι γίνονται δεκτοί να εντάσσονται σε μικρότερες κοινότητες αντί για μεγάλα κέντρα.',
      en: 'We propose deciding asylum claims faster and fairly, and settling those accepted in smaller communities rather than large centres.',
    },
    situation: {
      el: 'Οι μακρές διαδικασίες αφήνουν αιτούντες σε αβεβαιότητα για χρόνια, επιβαρύνουν τα νησιά και υπονομεύουν τόσο την ένταξη όσο και την κοινωνική εμπιστοσύνη. Η προηγούμενη έκδοση της πρότασης δεν περιελάμβανε επαρκείς νομικές εγγυήσεις — αυτή η έκδοση τις προσθέτει.',
      en: 'Long procedures leave applicants in limbo for years, strain the islands and undermine both integration and social trust. The previous version lacked adequate legal safeguards — this version adds them.',
    },
    recommendation: {
      el: 'Προτείνεται στόχος εξέτασης πρώτου βαθμού εντός έξι μηνών με υποχρεωτική νομική συνδρομή και δικαίωμα ουσιαστικής προσφυγής, σε συνδυασμό με αποκεντρωμένη ένταξη σε δήμους που συμμετέχουν εθελοντικά, με χρηματοδότηση ανά άτομο.',
      en: 'We propose a six-month first-instance target with mandatory legal aid and a substantive right of appeal, combined with decentralised integration in municipalities that opt in, funded per capita.',
    },
    reasoning: {
      el: 'Η ανάλυση εξισορροπεί τις διεθνείς νομικές υποχρεώσεις, την τοπική φέρουσα ικανότητα και τα δεδομένα ένταξης. Η ταχύτερη διαδικασία με εγγυήσεις μειώνει το ανθρώπινο κόστος της αναμονής και το οικονομικό κόστος της φιλοξενίας, ενώ η αποκέντρωση βελτιώνει τα αποτελέσματα ένταξης κατά τη διεθνή εμπειρία. Η βεβαιότητα είναι μέτρια λόγω εξάρτησης από τη διοικητική ικανότητα.',
      en: 'The analysis balances international legal obligations, local carrying capacity and integration data. Faster processing with safeguards lowers the human cost of waiting and the fiscal cost of reception, while decentralisation improves integration outcomes per international experience. Confidence is moderate given dependence on administrative capacity.',
    },
    counterArgument: {
      el: 'Ο ισχυρότερος αντίλογος: η ταχύτητα και η ποιότητα βρίσκονται σε ένταση — πιεστικοί στόχοι έξι μηνών χωρίς ανάλογη αύξηση εξειδικευμένου προσωπικού κινδυνεύουν να οδηγήσουν σε βιαστικές, λανθασμένες απορρίψεις που παραβιάζουν το δικαίωμα ασύλου. Η εθελοντική αποκέντρωση μπορεί να αφήσει το βάρος σε λίγους πρόθυμους δήμους.',
      en: 'The strongest case against: speed and quality are in tension — aggressive six-month targets without a matching rise in trained staff risk rushed, wrongful rejections that violate the right to asylum. Voluntary decentralisation may leave the burden on a few willing municipalities.',
    },
    virtues: ['dikaiosyne', 'parrhesia', 'phronesis', 'eudaimonia'],
    eudaimoniaDelta: {
      institutional_justice: 5,
      bodily_safety: 3,
      affiliation_trust: 2,
      practical_reason: 2,
      economic_security: 1,
    },
    distributionalNote: {
      el: 'Ωφελούνται οι αιτούντες άσυλο και τα υπερφορτωμένα νησιά. Επιβαρύνονται διοικητικά οι συμμετέχοντες δήμοι· η χρηματοδότηση ανά άτομο στοχεύει να αντισταθμίσει το κόστος. Υπάρχει κίνδυνος για τους αιτούντες αν οι εγγυήσεις υποχωρήσουν χάριν ταχύτητας.',
      en: 'Asylum applicants and overburdened islands gain. Participating municipalities bear an administrative cost; per-capita funding aims to offset it. There is a risk to applicants if safeguards yield to speed.',
    },
    confidence: 0.61,
    uncertainty: {
      el: 'Η σύσταση θα άλλαζε αν η διοικητική ικανότητα δεν μπορούσε να εγγυηθεί την ποιότητα εξέτασης στους νέους χρόνους· τότε θα προτεινόταν χαλαρότερος στόχος.',
      en: 'The recommendation would change if administrative capacity could not guarantee decision quality at the new timelines; a looser target would then be proposed.',
    },
    sources: [
      { title: 'UNHCR — Asylum in Europe', url: 'https://www.unhcr.org/' },
      { title: 'EUAA — Asylum Report 2024', url: 'https://euaa.europa.eu/asylum-report-2024' },
    ],
    modelUsed: 'claude-opus-5',
    accountableRole: {
      el: 'Υπουργός Μετανάστευσης & Ασύλου',
      en: 'Minister of Migration & Asylum',
    },
    createdAt: '2026-06-11T14:20:00Z',
  },
  {
    id: 'prop-defence-01',
    ministryId: 'min-defence',
    version: 1,
    supersedes: null,
    status: 'proposal',
    stakes: 'high',
    title: {
      el: 'Σταδιακή μετάβαση προς ημι-επαγγελματικές ένοπλες δυνάμεις με συντομότερη θητεία',
      en: 'Gradual shift toward semi-professional armed forces with shorter conscription',
    },
    plain: {
      el: 'Προτείνεται περισσότεροι επαγγελματίες στρατιωτικοί και μικρότερη υποχρεωτική θητεία, διατηρώντας την αποτρεπτική ικανότητα.',
      en: 'We propose more professional soldiers and shorter compulsory service, while keeping deterrence intact.',
    },
    situation: {
      el: 'Η αποτροπή απαιτεί τεχνική εξειδίκευση που η σύντομη θητεία δύσκολα προσφέρει, ενώ η μακρά υποχρεωτική θητεία έχει υψηλό κόστος ευκαιρίας για τους νέους και την οικονομία. Αυτή είναι μια πολιτικά δύσκολη πρόταση και επισημαίνεται ρητά ως τέτοια.',
      en: 'Deterrence requires technical specialisation that short conscription struggles to provide, while long compulsory service carries a high opportunity cost for the young and the economy. This is a politically hard proposal and is flagged explicitly as such.',
    },
    recommendation: {
      el: 'Προτείνεται δεκαετής μετάβαση που αυξάνει τους επαγγελματίες σε εξειδικευμένους κλάδους, μειώνει τη θητεία, και διατηρεί εκπαιδευμένη εφεδρεία — με ανεξάρτητη αποτίμηση αποτρεπτικής ικανότητας σε κάθε φάση.',
      en: 'We propose a ten-year transition that grows the professional force in specialised branches, shortens conscription, and maintains a trained reserve — with an independent deterrence assessment at each phase.',
    },
    reasoning: {
      el: 'Η αποτίμηση σταθμίζει την αποτρεπτική ικανότητα έναντι του δημοσιονομικού και κοινωνικού κόστους. Τα συγκριτικά δεδομένα από συμμαχικές χώρες δείχνουν ότι εξειδικευμένες, επαγγελματικές μονάδες αποδίδουν υψηλότερη ετοιμότητα ανά ευρώ· η μειωμένη θητεία απελευθερώνει ανθρώπινο κεφάλαιο. Η αβεβαιότητα είναι υψηλή λόγω του γεωπολιτικού περιβάλλοντος.',
      en: 'The assessment weighs deterrence against fiscal and social cost. Comparative data from allied states show specialised professional units deliver higher readiness per euro; reduced conscription frees human capital. Uncertainty is high given the geopolitical environment.',
    },
    counterArgument: {
      el: 'Ο ισχυρότερος αντίλογος: σε ένα ασταθές γεωπολιτικό περιβάλλον, η μείωση του αριθμού των εκπαιδευμένων εφέδρων μειώνει τη μαζική κινητοποίηση σε κρίση· το κόστος ενός επαγγελματικού στρατού είναι σταθερό και υψηλό, και αν η δημοσιονομική κατάσταση επιδεινωθεί, η αποτροπή θα πληγεί. Η κοινωνική συνοχή που προσφέρει η κοινή θητεία είναι επίσης δύσκολα αντικαταστάσιμη.',
      en: 'The strongest case against: in a volatile geopolitical environment, reducing trained reserves lowers mass-mobilisation capacity in a crisis; a professional force has a fixed, high cost, and if the fiscal position worsens, deterrence suffers. The social cohesion shared conscription provides is also hard to replace.',
    },
    virtues: ['andreia', 'phronesis', 'parrhesia'],
    eudaimoniaDelta: {
      bodily_safety: 3,
      economic_security: 3,
      knowledge_education: 2,
      practical_reason: 1,
      affiliation_trust: -3,
    },
    distributionalNote: {
      el: 'Ωφελούνται οι νέοι (μικρότερη θητεία) και η οικονομία (ανθρώπινο κεφάλαιο). Επιβαρύνεται ο αμυντικός προϋπολογισμός· υπάρχει κίνδυνος για τη μαζική εφεδρεία και την κοινωνική λειτουργία της κοινής θητείας.',
      en: 'The young (shorter service) and the economy (human capital) gain. The defence budget bears the cost; there is a risk to mass reserve capacity and to the social function of shared conscription.',
    },
    confidence: 0.55,
    uncertainty: {
      el: 'Η σύσταση θα αναστελλόταν αν η ανεξάρτητη αποτίμηση αποτροπής σε οποιαδήποτε φάση έδειχνε καθαρή μείωση της αποτρεπτικής ικανότητας.',
      en: 'The recommendation would be suspended if the independent deterrence assessment at any phase showed a net loss of deterrent capacity.',
    },
    sources: [
      { title: 'NATO — Defence Expenditure', url: 'https://www.nato.int/' },
      { title: 'IISS — The Military Balance', url: 'https://www.iiss.org/publications/the-military-balance' },
    ],
    modelUsed: 'claude-opus-5',
    accountableRole: {
      el: 'Υπουργός Εθνικής Άμυνας',
      en: 'Minister of National Defence',
    },
    createdAt: '2026-05-19T10:00:00Z',
  },
  {
    id: 'prop-education-01',
    ministryId: 'min-education',
    version: 1,
    supersedes: null,
    status: 'proposal',
    stakes: 'standard',
    title: {
      el: 'Ώρες κριτικής σκέψης και ψηφιακής παιδείας στο λύκειο',
      en: 'Critical-thinking and digital-literacy hours in upper secondary school',
    },
    plain: {
      el: 'Προτείνεται οι μαθητές λυκείου να μαθαίνουν να αξιολογούν πληροφορίες και να αναγνωρίζουν την παραπληροφόρηση.',
      en: 'We propose that upper-secondary students learn to evaluate information and recognise disinformation.',
    },
    situation: {
      el: 'Η έκθεση των νέων σε παραπληροφόρηση και αλγοριθμική χειραγώγηση αυξάνεται, ενώ το πρόγραμμα σπουδών δεν καλλιεργεί συστηματικά κριτική αξιολόγηση πηγών.',
      en: 'Young people’s exposure to disinformation and algorithmic manipulation is rising, while the curriculum does not systematically cultivate critical source evaluation.',
    },
    recommendation: {
      el: 'Προτείνεται μία εβδομαδιαία ώρα κριτικής σκέψης και ψηφιακής παιδείας στις τρεις τάξεις του λυκείου, με ανοιχτό υλικό και επιμόρφωση εκπαιδευτικών.',
      en: 'We propose one weekly hour of critical thinking and digital literacy across the three upper-secondary years, with open materials and teacher training.',
    },
    reasoning: {
      el: 'Η σοφία ως αποδεικτικό κριτήριο: τα διεθνή δεδομένα δείχνουν ότι η ρητή διδασκαλία αξιολόγησης πηγών βελτιώνει μετρήσιμα την ανθεκτικότητα στην παραπληροφόρηση. Το κόστος είναι χαμηλό και αντιστρέψιμο.',
      en: 'Wisdom as evidentiary standard: international data show explicit source-evaluation teaching measurably improves resilience to disinformation. The cost is low and reversible.',
    },
    counterArgument: {
      el: 'Ο ισχυρότερος αντίλογος: το πρόγραμμα σπουδών είναι ήδη υπερφορτωμένο· μια ακόμη ώρα ανταγωνίζεται θεμελιώδη μαθήματα, και χωρίς ποιοτική επιμόρφωση εκπαιδευτικών η ώρα κινδυνεύει να γίνει τυπική, χωρίς ουσιαστικό αποτέλεσμα.',
      en: 'The strongest case against: the curriculum is already overloaded; another hour competes with foundational subjects, and without quality teacher training the hour risks becoming a formality with no real effect.',
    },
    virtues: ['sophia', 'parrhesia', 'phronesis'],
    eudaimoniaDelta: {
      knowledge_education: 5,
      practical_reason: 4,
      affiliation_trust: 2,
    },
    distributionalNote: {
      el: 'Ωφελούνται όλοι οι μαθητές λυκείου, με μεγαλύτερο σχετικό όφελος για όσους έχουν λιγότερη πρόσβαση σε ψηφιακή καθοδήγηση στο σπίτι. Κόστος: ώρες προγράμματος και επιμόρφωση.',
      en: 'All upper-secondary students gain, with greater relative benefit for those with less access to digital guidance at home. Cost: curriculum hours and teacher training.',
    },
    confidence: 0.74,
    uncertainty: {
      el: 'Η σύσταση εξαρτάται από την ποιότητα της επιμόρφωσης· χωρίς αυτήν, το αναμενόμενο όφελος μειώνεται σημαντικά.',
      en: 'The recommendation depends on training quality; without it, the expected benefit falls significantly.',
    },
    sources: [
      { title: 'OECD — PISA 2022', url: 'https://www.oecd.org/pisa/' },
      { title: 'EU — Digital Education Action Plan', url: 'https://education.ec.europa.eu/' },
    ],
    modelUsed: 'claude-sonnet-4-6',
    accountableRole: {
      el: 'Υπουργός Παιδείας & Θρησκευμάτων',
      en: 'Minister of Education & Religious Affairs',
    },
    createdAt: '2026-05-30T07:45:00Z',
  },
  {
    id: 'prop-nous-01',
    ministryId: 'min-pm',
    version: 1,
    supersedes: null,
    status: 'proposal',
    stakes: 'high',
    title: {
      el: 'Σύνθεση: οι τρεις χαμηλότερες διαστάσεις και πού να εστιάσει η κυβέρνηση',
      en: 'Synthesis: the three lowest dimensions and where government should focus',
    },
    plain: {
      el: 'Συνολικά, η χώρα υστερεί περισσότερο στην οικονομική ασφάλεια, την κοινωνική εμπιστοσύνη και το περιβάλλον — εκεί προτείνεται να δοθεί προτεραιότητα.',
      en: 'Overall, the country lags most in economic security, social trust and the environment — we propose focusing there.',
    },
    situation: {
      el: 'Διασταυρώνοντας τις ενεργές προτάσεις όλων των υπουργείων, ο ΝΟΥΣ εντοπίζει ότι οι χαμηλότερες διαστάσεις του Δείκτη Ευδαιμονίας είναι η Οικονομική Ασφάλεια, η Κοινωνική Εμπιστοσύνη και το Περιβάλλον, με μία σαφή διυπουργική ένταση.',
      en: 'Cross-referencing all active proposals, NOUS finds the lowest Index dimensions are Economic Security, Social Trust and the Environment, with one clear cross-ministry tension.',
    },
    recommendation: {
      el: 'Προτείνεται η ιεράρχηση των προτάσεων που ανεβάζουν περισσότερο αυτές τις τρεις διαστάσεις, με ρητή διαχείριση της έντασης μεταξύ της επέκτασης υπεράκτιων αιολικών (Περιβάλλον) και των ανησυχιών τουρισμού/ναυτιλίας (Οικονομία/Πολιτισμός).',
      en: 'We propose prioritising the proposals that most raise these three dimensions, with explicit management of the tension between offshore-wind expansion (Environment) and tourism/maritime concerns (Economy/Culture).',
    },
    reasoning: {
      el: 'Η σύνθεση αποφεύγει τη διπλομέτρηση οφελών που εμφανίζονται σε πολλές προτάσεις και σταθμίζει τις αντισταθμίσεις. Η πρόταση για τα υπεράκτια αιολικά ανεβάζει το Περιβάλλον και την Οικονομική Ασφάλεια, αλλά κατεβάζει οριακά την Κοινωνική Εμπιστοσύνη και τον Πολιτισμό σε ορισμένες νησιωτικές περιοχές — μια ένταση που πρέπει να διαχειριστεί ρητά, όχι να αποκρυφτεί.',
      en: 'The synthesis avoids double-counting benefits that appear in several proposals and weighs the trade-offs. The offshore-wind proposal raises Environment and Economic Security, but marginally lowers Social Trust and Culture in some island regions — a tension to be managed explicitly, not hidden.',
    },
    counterArgument: {
      el: 'Ο ισχυρότερος αντίλογος: η εστίαση στις τρεις χαμηλότερες διαστάσεις μπορεί να παραμελήσει διαστάσεις που είναι υψηλές σήμερα αλλά εύθραυστες (π.χ. Υγεία)· η ιεράρχηση βάσει του τρέχοντος επιπέδου ρισκάρει να αντιδρά αντί να προλαμβάνει.',
      en: 'The strongest case against: focusing on the three lowest dimensions can neglect dimensions that are high today but fragile (e.g. Health); ranking by current level risks reacting rather than preventing.',
    },
    virtues: ['eudaimonia', 'phronesis', 'sophia', 'parrhesia'],
    eudaimoniaDelta: {
      economic_security: 3,
      affiliation_trust: 3,
      environment_ecology: 3,
      institutional_justice: 2,
    },
    distributionalNote: {
      el: 'Η σύνθεση είναι ουδέτερη ως προς τη διανομή· κάθε επιμέρους πρόταση φέρει τη δική της κατανεμητική σημείωση. Ο ΝΟΥΣ επισημαίνει ρητά ότι οι νησιωτικές κοινότητες επωμίζονται μέρος του κόστους της ενεργειακής μετάβασης.',
      en: 'The synthesis is distribution-neutral; each underlying proposal carries its own distributional note. NOUS flags explicitly that island communities bear part of the cost of the energy transition.',
    },
    confidence: 0.7,
    uncertainty: {
      el: 'Η σύνθεση θα αναθεωρούνταν αν νέα δεδομένα του Δείκτη μετέβαλλαν την κατάταξη των χαμηλότερων διαστάσεων.',
      en: 'The synthesis would be revised if new Index data changed the ranking of the lowest dimensions.',
    },
    sources: [
      { title: 'POLITEIA — Eudaimonia Index (internal series)', url: '/nous' },
    ],
    modelUsed: 'claude-opus-5',
    accountableRole: { el: 'Πρωθυπουργός', en: 'Prime Minister' },
    createdAt: '2026-06-13T16:00:00Z',
  },
] as const

const BY_ID = new Map(PROPOSALS.map((p) => [p.id, p]))
export const getProposalById = (id: string) => BY_ID.get(id)
export const getProposalsByMinistry = (ministryId: string) =>
  PROPOSALS.filter((p) => p.ministryId === ministryId)
