// Comment generator for EVERY proposal (all ministries). Each comment is built
// from THIS proposal's own substance — its concrete mechanism (lever), its own
// counter-argument (tension), its plain meaning, the dimension it most raises —
// plus a ministry-specific "where it shows up" colour. To avoid a linear / AI
// feel at scale, every stance has multiple phrasings selected per proposal, so
// no two proposals read the same. Voices mix field-credentialed experts and
// ordinary citizens. Replies attach only to a parent they logically answer, and
// stay on-topic. (The flagship proposals use hand-researched threads in
// curatedComments.ts; this covers the rest.)

import type { Comment, Proposal } from '../lib/types'
import { getDimension, type DimensionId } from '../constants/dimensions'

const AUTHORS = [
  'Δήμητρα Κ.', 'Γιώργος Π.', 'Ελένη Μ.', 'Νίκος Τ.', 'Σοφία Α.', 'Θανάσης Ρ.',
  'Μαρία Λ.', 'Κώστας Β.', 'Αναστασία Δ.', 'Παναγιώτης Ζ.', 'Ειρήνη Σ.', 'Βασίλης Η.',
  'Κατερίνα Ν.', 'Στέφανος Λ.', 'Χριστίνα Φ.', 'Δημήτρης Γ.', 'Αγγελική Μ.', 'Πέτρος Κ.',
  'Ζωή Α.', 'Μανώλης Β.', 'Φωτεινή Τ.', 'Αλέξανδρος Μ.', 'Δέσποινα Λ.', 'Γιάννης Κ.',
]

const EXPERT_ROLES: Record<string, string[]> = {
  finance: ['οικονομολόγος', 'φοροτεχνικός', 'καθηγήτρια δημόσιων οικονομικών'],
  foreign: ['διεθνολόγος', 'πρώην διπλωμάτης', 'αναλύτρια γεωπολιτικής'],
  defence: ['αναλυτής άμυνας', 'απόστρατος αξιωματικός', 'ερευνήτρια ασφάλειας'],
  interior: ['πολιτειολόγος', 'στέλεχος αυτοδιοίκησης', 'ειδικός δημόσιας διοίκησης'],
  justice: ['δικηγόρος', 'δικαστής ε.τ.', 'καθηγήτρια νομικής'],
  education: ['εκπαιδευτικός', 'καθηγήτρια παιδαγωγικής', 'ερευνητής εκπαίδευσης'],
  health: ['γιατρός', 'επιδημιολόγος', 'νοσηλεύτρια'],
  labour: ['εργατολόγος', 'οικονομολόγος εργασίας', 'συνδικαλίστρια'],
  migration: ['νομικός ασύλου', 'κοινωνική λειτουργός', 'ερευνήτρια μετανάστευσης'],
  'citizen-protection': ['εγκληματολόγος', 'αξιωματικός ε.α.', 'ειδικός πολιτικής προστασίας'],
  development: ['οικονομολόγος', 'σύμβουλος επιχειρήσεων', 'ερευνήτρια καινοτομίας'],
  environment: ['περιβαλλοντολόγος', 'μηχανικός ΑΠΕ', 'κλιματολόγος'],
  rural: ['γεωπόνος', 'κτηνίατρος', 'οικονομολόγος υπαίθρου'],
  maritime: ['ναυτιλιακός οικονομολόγος', 'πλοίαρχος ε.α.', 'μηχανικός νησιωτικών υποδομών'],
  tourism: ['οικονομολόγος τουρισμού', 'ξενοδόχος', 'χωροτάκτης'],
  culture: ['αρχαιολόγος', 'ιστορικός τέχνης', 'πολιτιστική διαχειρίστρια'],
  infrastructure: ['πολιτικός μηχανικός', 'συγκοινωνιολόγος', 'χωροτάκτρια'],
  digital: ['μηχανικός λογισμικού', 'ειδικός κυβερνοασφάλειας', 'νομικός δεδομένων'],
  pm: ['καθηγητής πολιτικής επιστήμης', 'οικονομολόγος', 'αναλύτρια δημόσιας πολιτικής'],
}

// Where a ministry's decisions show up in people's lives — used for colour.
const FLAVOR: Record<string, string> = {
  finance: 'στο πορτοφόλι του μέσου νοικοκυριού',
  foreign: 'στη θέση της χώρας απέναντι στους εταίρους',
  defence: 'στην ασφάλεια των συνόρων μας',
  interior: 'στην καθημερινή συναλλαγή με τον δήμο',
  justice: 'στην ταχύτητα και τη δικαιοσύνη των δικαστηρίων',
  education: 'στην τάξη των παιδιών μας',
  health: 'στην ουρά του νοσοκομείου',
  labour: 'στο μεροκάματο και στη σύνταξη',
  migration: 'στις τοπικές κοινωνίες υποδοχής',
  'citizen-protection': 'στην ασφάλεια της γειτονιάς',
  development: 'στις μικρές επιχειρήσεις της γειτονιάς',
  environment: 'στον λογαριασμό του ρεύματος και στο τοπίο',
  rural: 'στο χωράφι και στον στάβλο',
  maritime: 'στο εισιτήριο του πλοίου και στη ζωή των νησιών',
  tourism: 'στις τοπικές κοινωνίες των προορισμών',
  culture: 'στην πρόσβαση όλων στον πολιτισμό',
  infrastructure: 'στον δρόμο και στη συγκοινωνία που χρησιμοποιούμε',
  digital: 'στην εξυπηρέτησή μας από το κράτος online',
  pm: 'στη συνολική εικόνα της χώρας',
}

function hash(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

const cap = (s: string) => (s ? s.charAt(0).toLocaleUpperCase('el') + s.slice(1) : s)

function dims(p: Proposal): { top: string; down: string | null } {
  const entries = Object.entries(p.eudaimoniaDelta) as [DimensionId, number][]
  const up = entries.filter(([, v]) => v > 0).sort((a, b) => b[1] - a[1])[0]
  const down = entries.filter(([, v]) => v < 0).sort((a, b) => a[1] - b[1])[0]
  return {
    top: up ? getDimension(up[0]).el : 'την ευημερία',
    down: down ? getDimension(down[0]).el : null,
  }
}

interface Ctx {
  title: string
  plainCore: string
  lever: string
  tensionShort: string
  top: string
  down: string | null
  flavor: string
}

function ctxFor(p: Proposal): Ctx {
  const slug = p.ministryId.replace(/^min-/, '')
  const plainCore = p.plain.el.replace(/^Προτείνεται\s+/, '').replace(/\.$/, '').trim()
  const lever = p.recommendation.el.replace(/^Προτείνεται\s+/, '').replace(/\.$/, '').trim()
  const tension = p.counterArgument.el.replace(/^Ο ισχυρότερος αντίλογος:\s*/, '').trim()
  const tensionShort = tension.split('. ')[0].replace(/\.$/, '') + '.'
  const { top, down } = dims(p)
  return { title: p.title.el, plainCore, lever, tensionShort, top, down, flavor: FLAVOR[slug] ?? 'στην καθημερινότητά μας' }
}

interface Stance {
  key: string
  baseScore: number
  expert: boolean
  body: (c: Ctx, k: number) => string
}

// Each stance offers three phrasings; the per-proposal index `k` picks one, so
// the same stance reads differently across proposals.
const STANCES: Stance[] = [
  {
    key: 'expert_caution',
    baseScore: 185,
    expert: true,
    body: (c, k) =>
      [
        `Το κρίσιμο σημείο είναι αυτό που παραδέχεται κι η ίδια η πρόταση: ${c.tensionShort} Πριν επεκταθεί παντού, θέλω να δω ότι απαντιέται.`,
        `Δεν με χαλάει η κατεύθυνση, με χαλάει ο κίνδυνος που λέει κι ο αντίλογος: ${c.tensionShort} Αυτό σηκώνει συζήτηση, όχι προσπέραση.`,
        `Ένα «ναι» εδώ έχει όρους. ${c.tensionShort} Χωρίς απάντηση σ’ αυτό, μιλάμε για ευχή, όχι για σχέδιο.`,
      ][k],
  },
  {
    key: 'expert_distribution',
    baseScore: 170,
    expert: true,
    body: (c, k) =>
      c.down
        ? [
            `Το όφελος δεν πέφτει ισόποσα — την επιβάρυνση στο «${c.down}» θα τη σηκώσουν οι αδύναμοι. Θέλει ρητή αντιστάθμιση, όχι μια αράδα στο τέλος.`,
            `Με προβληματίζει η κατανομή: το «${c.down}» επιβαρύνεται, και συνήθως αυτό σημαίνει τους ίδιους πάντα.`,
            `Αν δεν αντισταθμιστεί η ζημιά στο «${c.down}», απλώς μετακινούμε το βάρος στους πιο αδύναμους.`,
          ][k]
        : [
            `Ποιος κερδίζει και ποιος πληρώνει από «${c.title}»; Όσο δεν μπαίνει νούμερο, κρατάω επιφύλαξη.`,
            `Καλό για κάποιους — αλλά για ποιους ακριβώς; Το «${c.title}» θέλει ξεκάθαρο ποιος ωφελείται και ποιος όχι.`,
            `Πριν πω ναι, θέλω να ξέρω ποιος επωμίζεται το κόστος του «${c.title}». Όχι αόριστα — με ονόματα ομάδων.`,
          ][k],
  },
  {
    key: 'expert_method',
    baseScore: 150,
    expert: true,
    body: (c, k) =>
      [
        `Όλα κρίνονται στην εφαρμογή. Αν προχωρήσει ${c.lever}, ας μπουν εξαρχής μετρήσιμοι στόχοι για το «${c.top}».`,
        `Η ιδέα είναι το εύκολο. Το «${c.lever}» χρειάζεται δείκτες και χρονοδιάγραμμα, αλλιώς σε δύο χρόνια θα μαλώνουμε αν πέτυχε.`,
        `Δείξτε μου πώς μετριέται η επιτυχία στο «${c.top}» και τότε μιλάμε σοβαρά για ${c.lever}.`,
      ][k],
  },
  {
    key: 'expert_evidence',
    baseScore: 145,
    expert: true,
    body: (c, k) =>
      [
        `Πού στηρίζεται η εκτίμηση για το «${c.top}»; Θέλω στοιχεία και πηγές, όχι βεβαιότητες.`,
        `Η εμπειρία αλλού δεν είναι μονόδρομη. Ποια δεδομένα δείχνουν ότι αυτό δουλεύει για το «${c.top}»;`,
        `Καλό θα ήταν να δούμε τους αριθμούς πίσω από το «${c.top}» πριν δεσμευτούμε σε οτιδήποτε.`,
      ][k],
  },
  {
    key: 'expert_support',
    baseScore: 110,
    expert: true,
    body: (c, k) =>
      [
        `Η κατεύθυνση είναι σωστή — έχει δουλέψει κι αλλού για το «${c.top}». Το θέμα είναι το «πώς», όχι το «αν».`,
        `Συμφωνώ στην ουσία. Τέτοιες πολιτικές βοήθησαν το «${c.top}» όπου εφαρμόστηκαν σωστά· ας μην το χαλάσουμε στην εκτέλεση.`,
        `Λογική πρόταση. Το «${c.top}» έχει περιθώριο, κι αυτό κινείται προς τη σωστή μεριά — με σοβαρή εφαρμογή.`,
      ][k],
  },
  {
    key: 'citizen_objection',
    baseScore: 165,
    expert: false,
    body: (c, k) =>
      [
        `Με ανησυχεί αυτό ακριβώς: ${c.tensionShort} Ας μην το προσπεράσουμε επειδή η ιδέα ακούγεται καλή.`,
        `Ωραία τα λόγια, αλλά: ${c.tensionShort} Αυτό δεν λύνεται με ευχές.`,
        `Πριν πανηγυρίσουμε: ${c.tensionShort} Κάποιος πρέπει να απαντήσει σ’ αυτό πρώτα.`,
      ][k],
  },
  {
    key: 'citizen_cost',
    baseScore: 140,
    expert: false,
    body: (c, k) =>
      [
        `Ακούγεται καλό, αλλά «${c.title}» ποιος θα το πληρώσει; Φοβάμαι ότι θα φανεί ${c.flavor}.`,
        `Πάλι το ίδιο: ωραία ιδέα, θολό κόστος. Στο τέλος το βλέπουμε ${c.flavor}.`,
        `Ποιος σηκώνει τον λογαριασμό; Γιατί συνήθως καταλήγει ${c.flavor}.`,
      ][k],
  },
  {
    key: 'citizen_implementation',
    baseScore: 132,
    expert: false,
    body: (_c, k) =>
      [
        `Καλό στα χαρτιά. Ποιος θα το εφαρμόσει και πότε; Έχουμε ξαναδεί εξαγγελίες να μένουν στα λόγια.`,
        `Η χώρα δεν έχει πρόβλημα ιδεών, έχει πρόβλημα εφαρμογής. Ποιος το αναλαμβάνει στην πράξη;`,
        `Ωραίο σχέδιο. Σε έναν χρόνο θα έχει υλοποιηθεί ή θα συζητάμε γιατί κόλλησε;`,
      ][k],
  },
  {
    key: 'citizen_question',
    baseScore: 125,
    expert: false,
    body: (c, k) =>
      [
        `Ειλικρινής ερώτηση: ${c.plainCore} — πώς θα γίνει στην πράξη; Θέλω να καταλάβω πριν πω ναι ή όχι.`,
        `Για να καταλάβω: ${c.plainCore}. Με ποια σειρά και με ποιους πόρους;`,
        `${cap(c.plainCore)}; Ωραία — αλλά το «πώς» είναι που με προβληματίζει.`,
      ][k],
  },
  {
    key: 'citizen_priorities',
    baseScore: 115,
    expert: false,
    body: (c, k) =>
      [
        `Σωστό, αλλά είναι το «${c.title}» η προτεραιότητα τώρα; Υπάρχουν πιο επείγοντα ${c.flavor}.`,
        `Δεν διαφωνώ, αλλά με τόσα ανοιχτά μέτωπα, εδώ θα ρίξουμε ενέργεια;`,
        `Καλή ιδέα, ίσως λάθος στιγμή. Τα ίδια χρήματα πιάνουν πιο πολύ τόπο αλλού.`,
      ][k],
  },
  {
    key: 'citizen_local',
    baseScore: 100,
    expert: false,
    body: (c, k) =>
      [
        `Εδώ στην περιοχή μας το θέμα είναι υπαρκτό ${c.flavor}. Αν προχωρήσει, ας φτάσει και σ’ εμάς, όχι μόνο στα μεγάλα κέντρα.`,
        `Από την επαρχία το βλέπω αλλιώς: ό,τι αποφασίζεται στην Αθήνα αργεί χρόνια να φανεί ${c.flavor}.`,
        `Να μας ρωτήσουν κιόλας. Το ζούμε ${c.flavor} και ξέρουμε τι χρειάζεται.`,
      ][k],
  },
  {
    key: 'citizen_support',
    baseScore: 88,
    expert: false,
    body: (c, k) =>
      [
        `Όπως το καταλαβαίνω, ${c.plainCore}. Αυτό θα βοηθούσε πραγματικά — το στηρίζω.`,
        `Επιτέλους κάτι συγκεκριμένο: ${c.plainCore}. Ναι σ’ αυτό.`,
        `Αν είναι όντως ${c.plainCore}, γιατί δεν έγινε νωρίτερα; Το στηρίζω.`,
      ][k],
  },
]

interface ReplyTemplate {
  targets: string[]
  body: (c: Ctx, k: number) => string
}

const REPLIES: ReplyTemplate[] = [
  {
    targets: ['citizen_cost', 'expert_distribution', 'citizen_priorities'],
    body: (c, k) =>
      [
        `Το κόστος αντισταθμίζεται μεσοπρόθεσμα — δες την ανάλυση. Δεν είναι σκέτη δαπάνη, είναι επένδυση στο «${c.top}».`,
        `Καταλαβαίνω τον φόβο για το κόστος, αλλά η αδράνεια στο «${c.top}» κοστίζει κι αυτή — απλώς δεν φαίνεται στον λογαριασμό.`,
      ][k % 2],
  },
  {
    targets: ['citizen_objection', 'expert_caution', 'expert_method', 'expert_distribution'],
    body: (_c, k) =>
      [
        `Συμφωνώ. Και χωρίς ισχυρές εγγυήσεις, ακριβώς αυτός ο κίνδυνος που περιγράφεις γίνεται βεβαιότητα.`,
        `Ακριβώς εκεί είναι το στοίχημα. Αν δεν μπει δικλίδα γι’ αυτό, η υπόλοιπη πρόταση δεν αρκεί.`,
      ][k % 2],
  },
  {
    targets: ['expert_evidence', 'citizen_question'],
    body: (c, k) =>
      [
        `Οι πηγές είναι παρατιθέμενες στο τέλος της πρότασης. Στηρίζουν την κατεύθυνση για το «${c.top}», αν και όχι κατηγορηματικά.`,
        `Καλή ερώτηση — και το «πώς» είναι όντως το ζητούμενο. Γι’ αυτό έχει σημασία να μπουν δείκτες από την αρχή.`,
      ][k % 2],
  },
  {
    targets: ['citizen_implementation'],
    body: (c, k) =>
      [
        `Δίκαιη ανησυχία για την εφαρμογή. Γι’ αυτό χρειάζονται χρονοδιάγραμμα και δείκτες — όχι να εγκαταλείψουμε το «${c.title}».`,
        `Συμφωνώ ότι το πρόβλημα είναι η εκτέλεση. Αλλά αν λέμε πάντα «δεν θα εφαρμοστεί», δεν γίνεται ποτέ τίποτα.`,
      ][k % 2],
  },
  {
    targets: ['expert_support', 'citizen_support', 'citizen_local'],
    body: (_c, k) =>
      [
        `Συμμερίζομαι την αισιοδοξία, αλλά ας απαντηθούν πρώτα οι ενστάσεις πιο πάνω. Το θέμα το αξίζει.`,
        `Κι εγώ θετικά το βλέπω — αρκεί να μη μείνει στην εξαγγελία όπως τόσες φορές.`,
      ][k % 2],
  },
]

const DAY = 86_400_000

function makeComment(
  p: Proposal,
  idx: number,
  authorName: string,
  parentId: string | null,
  body: string,
  baseScore: number,
): Comment {
  const jitter = (hash(p.id + idx) % 41) - 20
  return {
    id: `gc-${p.id}-${idx}`,
    proposalId: p.id,
    userId: 'seed',
    authorName,
    parentId,
    body,
    createdAt: new Date(
      +new Date(p.createdAt) + (idx + 1) * 3 * 3_600_000 + (hash(p.id) % 6) * DAY,
    ).toISOString(),
    score: Math.max(0, baseScore + jitter),
  }
}

const cache = new Map<string, Comment[]>()

export function commentsFor(p: Proposal): Comment[] {
  const cached = cache.get(p.id)
  if (cached) return cached

  const v = hash(p.id)
  const c = ctxFor(p)
  const slug = p.ministryId.replace(/^min-/, '')
  const roles = EXPERT_ROLES[slug] ?? ['ειδικός', 'ερευνήτρια', 'αναλυτής']

  const ordered = [
    ...STANCES.slice(v % STANCES.length),
    ...STANCES.slice(0, v % STANCES.length),
  ]
  const topLevel = ordered.slice(0, 10)

  const out: Comment[] = []
  const topInfo: { comment: Comment; key: string }[] = []
  topLevel.forEach((stance, i) => {
    const name = AUTHORS[(v + i) % AUTHORS.length]
    const authorName = stance.expert ? `${name} · ${roles[(v + i) % roles.length]}` : name
    const k = (v + i * 7) % 3 // per-proposal, per-position phrasing
    const comment = makeComment(p, i, authorName, null, stance.body(c, k), stance.baseScore)
    out.push(comment)
    topInfo.push({ comment, key: stance.key })
  })

  const used = new Set<string>()
  let r = 0
  for (const reply of REPLIES) {
    const parent =
      topInfo.find((ti) => reply.targets.includes(ti.key) && !used.has(ti.comment.id)) ??
      topInfo.find((ti) => reply.targets.includes(ti.key))
    if (!parent) continue
    used.add(parent.comment.id)
    const name = AUTHORS[(v + 12 + r) % AUTHORS.length]
    out.push(makeComment(p, 100 + r, name, parent.comment.id, reply.body(c, v + r), 40 + (hash(p.id + 'r' + r) % 35)))
    r += 1
  }

  cache.set(p.id, out)
  return out
}
