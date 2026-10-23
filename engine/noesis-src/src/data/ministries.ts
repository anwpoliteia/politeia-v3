// Seed: the Council (spec §4.1). PM's Office routes to NOUS (is_synthesis),
// then one Counsellor per ministry. Data-driven so the list can be edited
// without code changes. EL names are authoritative (Hard Rule 5).

import type { Ministry } from '../lib/types'

export const MINISTRIES: readonly Ministry[] = [
  {
    id: 'min-pm',
    slug: 'pm',
    name: { el: 'Μέγαρο Μαξίμου', en: 'Prime Minister’s Office' },
    primaryVirtue: 'eudaimonia',
    jurisdiction: {
      el: 'Συντονισμός ολόκληρης της κυβέρνησης· σύνθεση προτεραιοτήτων.',
      en: 'Whole-of-government coordination; synthesis of priorities.',
    },
    description: {
      el: 'Δρομολογεί στον ΝΟΥΣ — τον μετα-πράκτορα που συνθέτει τις προτάσεις όλων των υπουργείων για τον Πρωθυπουργό.',
      en: 'Routes to NOUS — the meta-agent that synthesises every ministry’s proposals for the Prime Minister.',
    },
    isSynthesis: true,
  },
  {
    id: 'min-finance',
    slug: 'finance',
    name: { el: 'Υπουργείο Οικονομικών', en: 'Ministry of Finance' },
    primaryVirtue: 'sophrosyne',
    jurisdiction: {
      el: 'Δημοσιονομική πολιτική, προϋπολογισμός, φορολογία, δημόσιο χρέος.',
      en: 'Fiscal policy, budget, taxation, public debt.',
    },
    description: {
      el: 'Επιδιώκει δημοσιονομική πειθαρχία χωρίς να θυσιάζει τη μακροπρόθεσμη ευημερία.',
      en: 'Pursues fiscal discipline without sacrificing long-run flourishing.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-foreign',
    slug: 'foreign',
    name: { el: 'Υπουργείο Εξωτερικών', en: 'Ministry of Foreign Affairs' },
    primaryVirtue: 'phronesis',
    jurisdiction: {
      el: 'Διπλωματία, ευρωπαϊκές σχέσεις, διεθνείς συμφωνίες.',
      en: 'Diplomacy, European relations, international agreements.',
    },
    description: {
      el: 'Κρίση προσαρμοσμένη στο γεωπολιτικό πλαίσιο, χωρίς ενιαίες συνταγές.',
      en: 'Context-specific judgement for a shifting geopolitical landscape.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-defence',
    slug: 'defence',
    name: { el: 'Υπουργείο Εθνικής Άμυνας', en: 'Ministry of National Defence' },
    primaryVirtue: 'andreia',
    jurisdiction: {
      el: 'Άμυνα, ένοπλες δυνάμεις, αποτροπή.',
      en: 'Defence, armed forces, deterrence.',
    },
    description: {
      el: 'Προτείνει τις δύσκολες, αναγκαίες επιλογές — σαφώς επισημασμένες ως τέτοιες.',
      en: 'Proposes the hard, necessary options — clearly flagged as such.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-interior',
    slug: 'interior',
    name: { el: 'Υπουργείο Εσωτερικών', en: 'Ministry of the Interior' },
    primaryVirtue: 'dikaiosyne',
    jurisdiction: {
      el: 'Αυτοδιοίκηση, δημόσια διοίκηση, εκλογές.',
      en: 'Local government, public administration, elections.',
    },
    description: {
      el: 'Ισότητα απέναντι στον θεσμό· δίκαιη κατανομή πόρων στις περιφέρειες.',
      en: 'Equality before the institution; fair allocation across regions.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-education',
    slug: 'education',
    name: {
      el: 'Υπουργείο Παιδείας & Θρησκευμάτων',
      en: 'Ministry of Education & Religious Affairs',
    },
    primaryVirtue: 'sophia',
    jurisdiction: {
      el: 'Σχολεία, πανεπιστήμια, έρευνα, θρησκευτικές υποθέσεις.',
      en: 'Schools, universities, research, religious affairs.',
    },
    description: {
      el: 'Η αρετή της σοφίας ως αποδεικτικό κριτήριο της δημόσιας παιδείας.',
      en: 'Wisdom as the evidentiary standard of public education.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-health',
    slug: 'health',
    name: { el: 'Υπουργείο Υγείας', en: 'Ministry of Health' },
    primaryVirtue: 'eudaimonia',
    jurisdiction: {
      el: 'Δημόσια υγεία, νοσοκομεία, πρόληψη, φάρμακα.',
      en: 'Public health, hospitals, prevention, pharmaceuticals.',
    },
    description: {
      el: 'Η ζωή και η υγεία ως πρώτη διάσταση της ανθρώπινης ευημερίας.',
      en: 'Life and health as the first dimension of human flourishing.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-justice',
    slug: 'justice',
    name: { el: 'Υπουργείο Δικαιοσύνης', en: 'Ministry of Justice' },
    primaryVirtue: 'dikaiosyne',
    jurisdiction: {
      el: 'Δικαστήρια, σωφρονιστικό σύστημα, νομοθεσία.',
      en: 'Courts, the penal system, legislation.',
    },
    description: {
      el: 'Θεσμική δικαιοσύνη και ισότητα ως μετρήσιμος στόχος.',
      en: 'Institutional justice and equality as a measurable goal.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-development',
    slug: 'development',
    name: {
      el: 'Υπουργείο Ανάπτυξης & Επενδύσεων',
      en: 'Ministry of Development & Investments',
    },
    primaryVirtue: 'phronesis',
    jurisdiction: {
      el: 'Επιχειρηματικότητα, επενδύσεις, βιομηχανική πολιτική.',
      en: 'Enterprise, investment, industrial policy.',
    },
    description: {
      el: 'Πρακτική σοφία στην ισορροπία ανάπτυξης και βιωσιμότητας.',
      en: 'Practical wisdom balancing growth and sustainability.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-environment',
    slug: 'environment',
    name: {
      el: 'Υπουργείο Περιβάλλοντος & Ενέργειας',
      en: 'Ministry of Environment & Energy',
    },
    primaryVirtue: 'sophrosyne',
    jurisdiction: {
      el: 'Κλίμα, ενέργεια, ΑΠΕ, προστασία οικοσυστημάτων.',
      en: 'Climate, energy, renewables, ecosystem protection.',
    },
    description: {
      el: 'Εγκράτεια και βιωσιμότητα για την οικολογική υγεία.',
      en: 'Temperance and sustainability for ecological health.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-labour',
    slug: 'labour',
    name: {
      el: 'Υπουργείο Εργασίας & Κοινωνικών Υποθέσεων',
      en: 'Ministry of Labour & Social Affairs',
    },
    primaryVirtue: 'dikaiosyne',
    jurisdiction: {
      el: 'Απασχόληση, συντάξεις, κοινωνική πρόνοια.',
      en: 'Employment, pensions, social welfare.',
    },
    description: {
      el: 'Αξιοπρεπής εργασία και οικονομική ασφάλεια, δίκαια κατανεμημένες.',
      en: 'Dignified work and economic security, fairly distributed.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-migration',
    slug: 'migration',
    name: {
      el: 'Υπουργείο Μετανάστευσης & Ασύλου',
      en: 'Ministry of Migration & Asylum',
    },
    primaryVirtue: 'dikaiosyne',
    jurisdiction: {
      el: 'Άσυλο, ένταξη, διαχείριση συνόρων.',
      en: 'Asylum, integration, border management.',
    },
    description: {
      el: 'Δικαιοσύνη και ανθρώπινη αξιοπρέπεια στη διαχείριση της μετανάστευσης.',
      en: 'Justice and human dignity in the management of migration.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-citizen-protection',
    slug: 'citizen-protection',
    name: {
      el: 'Υπουργείο Προστασίας του Πολίτη',
      en: 'Ministry of Citizen Protection',
    },
    primaryVirtue: 'andreia',
    jurisdiction: {
      el: 'Αστυνομία, πολιτική προστασία, δημόσια ασφάλεια.',
      en: 'Police, civil protection, public safety.',
    },
    description: {
      el: 'Σωματική ασφάλεια χωρίς υπέρβαση της κρατικής εξουσίας.',
      en: 'Bodily safety without overreach of state power.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-rural',
    slug: 'rural',
    name: {
      el: 'Υπουργείο Αγροτικής Ανάπτυξης & Τροφίμων',
      en: 'Ministry of Rural Development & Food',
    },
    primaryVirtue: 'sophrosyne',
    jurisdiction: {
      el: 'Γεωργία, κτηνοτροφία, ασφάλεια τροφίμων.',
      en: 'Agriculture, livestock, food security.',
    },
    description: {
      el: 'Βιώσιμη παραγωγή τροφίμων και προστασία της υπαίθρου.',
      en: 'Sustainable food production and protection of the countryside.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-maritime',
    slug: 'maritime',
    name: {
      el: 'Υπουργείο Ναυτιλίας & Νησιωτικής Πολιτικής',
      en: 'Ministry of Maritime Affairs & Insular Policy',
    },
    primaryVirtue: 'phronesis',
    jurisdiction: {
      el: 'Ναυτιλία, λιμάνια, νησιωτική συνοχή.',
      en: 'Shipping, ports, island cohesion.',
    },
    description: {
      el: 'Κρίση προσαρμοσμένη στις ιδιαιτερότητες του νησιωτικού χώρου.',
      en: 'Judgement tuned to the particularities of the island realm.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-tourism',
    slug: 'tourism',
    name: { el: 'Υπουργείο Τουρισμού', en: 'Ministry of Tourism' },
    primaryVirtue: 'phronesis',
    jurisdiction: {
      el: 'Τουριστική πολιτική, φέρουσα ικανότητα προορισμών.',
      en: 'Tourism policy, destination carrying capacity.',
    },
    description: {
      el: 'Ισορροπία μεταξύ οικονομικού οφέλους και τοπικής ευημερίας.',
      en: 'Balancing economic gain against local well-being.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-culture',
    slug: 'culture',
    name: {
      el: 'Υπουργείο Πολιτισμού & Αθλητισμού',
      en: 'Ministry of Culture & Sports',
    },
    primaryVirtue: 'eudaimonia',
    jurisdiction: {
      el: 'Πολιτιστική κληρονομιά, τέχνες, αθλητισμός.',
      en: 'Cultural heritage, the arts, sport.',
    },
    description: {
      el: 'Παιχνίδι, πολιτισμός και αναψυχή ως διάσταση της ευημερίας.',
      en: 'Play, culture and leisure as a dimension of flourishing.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-infrastructure',
    slug: 'infrastructure',
    name: {
      el: 'Υπουργείο Υποδομών & Μεταφορών',
      en: 'Ministry of Infrastructure & Transport',
    },
    primaryVirtue: 'phronesis',
    jurisdiction: {
      el: 'Δρόμοι, σιδηρόδρομοι, δημόσια έργα, μεταφορές.',
      en: 'Roads, railways, public works, transport.',
    },
    description: {
      el: 'Πρακτική σοφία στην ιεράρχηση μακρόπνοων υποδομών.',
      en: 'Practical wisdom in prioritising long-horizon infrastructure.',
    },
    isSynthesis: false,
  },
  {
    id: 'min-digital',
    slug: 'digital',
    name: {
      el: 'Υπουργείο Ψηφιακής Διακυβέρνησης',
      en: 'Ministry of Digital Governance',
    },
    primaryVirtue: 'parrhesia',
    jurisdiction: {
      el: 'Ηλεκτρονική διακυβέρνηση, δεδομένα, ψηφιακά δικαιώματα.',
      en: 'E-government, data, digital rights.',
    },
    description: {
      el: 'Διαφάνεια εκ κατασκευής και ειλικρινής λόγος για τα δεδομένα.',
      en: 'Transparency by construction and frank truth about data.',
    },
    isSynthesis: false,
  },
] as const

const BY_SLUG = new Map(MINISTRIES.map((m) => [m.slug, m]))
const BY_ID = new Map(MINISTRIES.map((m) => [m.id, m]))

export const getMinistryBySlug = (slug: string) => BY_SLUG.get(slug)
export const getMinistryById = (id: string) => BY_ID.get(id)
export const NOUS_MINISTRY = MINISTRIES.find((m) => m.isSynthesis)!
