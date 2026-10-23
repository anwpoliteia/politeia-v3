// The Canon & The Statecraft (reference appendix to /blueprint).
// Part I maps each foundational text to a component of POLITEIA; Part II is the
// five durable political tactics. Bilingual; EL is authoritative (Hard Rule 5).

import type { Bilingual } from '../lib/types'

// Which component of POLITEIA a work underpins. Copper marks the realist /
// safeguard side (Αντίλογος, anti-corruption structure); gold the rest.
export type CanonTag =
  | 'foundation'
  | 'eudaimonia'
  | 'nous'
  | 'counsellors'
  | 'deliberation'
  | 'citizen'
  | 'safeguards'
  | 'antilogos'

// `route` points to where this component lives in the running system, so the
// Canon becomes a navigable map of the architecture.
export const CANON_TAGS: Record<
  CanonTag,
  { label: Bilingual; tone: 'gold' | 'copper'; route: string }
> = {
  foundation: { label: { el: 'Πηγή', en: 'Source' }, tone: 'gold', route: '/' },
  eudaimonia: { label: { el: 'Δείκτης Ευδαιμονίας', en: 'Eudaimonia Index' }, tone: 'gold', route: '/nous' },
  nous: { label: { el: 'ΝΟΥΣ', en: 'NOUS' }, tone: 'gold', route: '/nous' },
  counsellors: { label: { el: 'Σύμβουλοι', en: 'Counsellors' }, tone: 'gold', route: '/ministries' },
  deliberation: { label: { el: 'Διαβούλευση', en: 'Deliberation' }, tone: 'gold', route: '/proposal/prop-environment-01' },
  citizen: { label: { el: 'Πολίτης', en: 'Citizen' }, tone: 'gold', route: '/signup' },
  safeguards: { label: { el: 'Εγγυήσεις', en: 'Safeguards' }, tone: 'copper', route: '/blueprint' },
  antilogos: { label: { el: 'Αντίλογος', en: 'Counter-argument' }, tone: 'copper', route: '/proposal/prop-defence-01' },
}

export const CANON_TAG_ORDER: CanonTag[] = [
  'foundation',
  'eudaimonia',
  'nous',
  'counsellors',
  'deliberation',
  'citizen',
  'safeguards',
  'antilogos',
]

export interface CanonWork {
  author: Bilingual
  title: Bilingual
  note: Bilingual
  tag: CanonTag
}

export interface CanonSection {
  numeral: string
  title: Bilingual
  subtitle: Bilingual
  works: CanonWork[]
}

export const CANON_SECTIONS: readonly CanonSection[] = [
  {
    numeral: 'I',
    title: { el: 'Τα Θεμελιώδη Κείμενα', en: 'The Foundational Texts' },
    subtitle: {
      el: 'Το κυριολεκτικό επώνυμο και η φιλοσοφική μηχανή.',
      en: 'The literal namesake and the philosophical engine.',
    },
    works: [
      {
        author: { el: 'Πλάτων', en: 'Plato' },
        title: { el: 'Πολιτεία', en: 'Republic (Πολιτεία)' },
        tag: 'foundation',
        note: {
          el: 'Ο πηγαίος κώδικας. Η δικαιοσύνη ως η ορθή τάξη ψυχής και πόλης· η ιδέα του Αγαθού· διακυβέρνηση από σοφία. Η ΠΟΛΙΤΕΙΑ είναι η δημοκρατική του αντιστροφή — κρατά την επιστημική φιλοδοξία και απορρίπτει την εξουσία του φιλοσόφου-βασιλιά.',
          en: 'The source code. Justice as the right ordering of soul and city; the Form of the Good; government by wisdom. POLITEIA is its democratic inversion — it keeps the epistemic ambition and discards the philosopher-king’s authority.',
        },
      },
      {
        author: { el: 'Πλάτων', en: 'Plato' },
        title: { el: 'Πολιτικός', en: 'Statesman (Πολιτικός)' },
        tag: 'nous',
        note: {
          el: 'Στον «Πολιτικό», η ευδαιμονία επιτυγχάνεται μόνο μέσω της σωστής διακυβέρνησης: ο ιδανικός κυβερνήτης δεν υπηρετεί μια ομάδα, αλλά υφαίνει τους διαφορετικούς χαρακτήρες των πολιτών σε ένα αρμονικό, ισορροπημένο σύνολο. Απαιτεί την πολιτική επιστήμη — τη γνώση του τι είναι αληθινά καλό και δίκαιο — και αξίζει μόνο όταν οδηγεί στην ηθική βελτίωση και την ευδαιμονία. Η εικόνα του βασιλικού υφαντή είναι ο ΝΟΥΣ: η σύνθεση που ενώνει τα πολλά σε ένα συνεκτικό όλο.',
          en: 'In the «Statesman», eudaimonia is attained only through right governance: the ideal ruler serves no faction but weaves the citizens’ differing characters into one harmonious, balanced whole. It demands the political science — knowing what is truly good and just — and is worth pursuing only when it leads to moral improvement and flourishing. The figure of the royal weaver is NOUS: the synthesis that unites the many into one coherent whole.',
        },
      },
      {
        author: { el: 'Πλάτων', en: 'Plato' },
        title: { el: 'Νόμοι', en: 'Laws (Νόμοι)' },
        tag: 'safeguards',
        note: {
          el: 'Το «δεύτερο άριστο» κράτος που έγραψε στα γηρατειά του: κράτος δικαίου αντί για διακυβέρνηση των σοφών, μικτό πολίτευμα, πειθώ πριν τον εξαναγκασμό. Πλησιέστερο σε ό,τι πραγματικά είναι η ΠΟΛΙΤΕΙΑ απ’ ό,τι η ίδια η Πολιτεία.',
          en: 'The “second-best” state Plato wrote in old age: rule of law over rule of the wise, mixed constitution, persuasion before compulsion. Closer to what POLITEIA actually is than the Republic is.',
        },
      },
      {
        author: { el: 'Αριστοτέλης', en: 'Aristotle' },
        title: { el: 'Πολιτικά', en: 'Politics (Πολιτικά)' },
        tag: 'citizen',
        note: {
          el: 'Όπου politeia σημαίνει την αγαθή μορφή λαϊκής διακυβέρνησης — το συνταγματικό μέσον. Το μικτό πολίτευμα, η σταθεροποιητική μεσαία τάξη, η ιδιότητα του πολίτη ως «ἄρχειν καὶ ἄρχεσθαι ἐναλλάξ». Αυτός είναι ο ρόλος του Πολίτη στο σχήμα μας.',
          en: 'Where politeia means the good form of popular rule — the constitutional middle. The mixed constitution, the stabilising middle class, citizenship defined as ruling-and-being-ruled in turn. This is the citizen (Πολίτης) role in the schema.',
        },
      },
      {
        author: { el: 'Αριστοτέλης', en: 'Aristotle' },
        title: { el: 'Ηθικά Νικομάχεια', en: 'Nicomachean Ethics (Ηθικά Νικομάχεια)' },
        tag: 'eudaimonia',
        note: {
          el: 'Η μηχανή του Δείκτη Ευδαιμονίας. Η ευδαιμονία ως ο τελικός σκοπός, η αρετή ως το μέσον, και η φρόνησις (πρακτική σοφία) ως η ικανότητα που ο Σύμβουλος καλείται να προσομοιώσει. Χωρίς αυτό το βιβλίο, η αντικειμενική συνάρτηση δεν έχει θεμέλιο.',
          en: 'The engine of the Eudaimonia Index. Eudaimonia as the final end, virtue as the mean, and phronesis (practical wisdom) as the faculty a Counsellor is meant to simulate. Without this book the objective function has no foundation.',
        },
      },
    ],
  },
  {
    numeral: 'II',
    title: { el: 'Η αρετή & η νεοπλατωνική ραχοκοκαλιά', en: 'The Greek Virtue & Neoplatonic Spine' },
    subtitle: {
      el: 'Επειδή το όραμα επικαλέστηκε όλες τις αρετές της ελληνικής φιλοσοφίας — και επειδή ο μετα-πράκτορας πήρε το όνομά του από μια νεοπλατωνική έννοια.',
      en: 'Because the brief invoked all the virtues of Greek philosophy — and because the meta-agent is named after a Neoplatonic concept.',
    },
    works: [
      {
        author: { el: 'Πλωτίνος', en: 'Plotinus' },
        title: { el: 'Εννεάδες', en: 'Enneads (Ἐννεάδες)' },
        tag: 'nous',
        note: {
          el: 'Ο νοῦς — η Νόηση, η δεύτερη υπόσταση — είναι κυριολεκτικά η πηγή του ονόματος του ΝΟΥ. Η απορροή Ἕν → Νοῦς → Ψυχή είναι μια καθαρή μεταφορά για τη σύνθεση-από-ενότητα: ο ΝΟΥΣ ενοποιεί τους υπουργικούς Συμβούλους σε μία συνεκτική οπτική.',
          en: 'νοῦς — the Intellect, the second hypostasis — is literally where NOUS gets its name. The emanation One → Nous → Soul is a clean metaphor for synthesis-from-unity: NOUS unifying the ministerial Counsellors into a single coherent perspective.',
        },
      },
      {
        author: { el: 'Μάρκος Αυρήλιος', en: 'Marcus Aurelius' },
        title: { el: 'Τὰ εἰς ἑαυτόν', en: 'Meditations (Τὰ εἰς ἑαυτόν)' },
        tag: 'safeguards',
        note: {
          el: 'Ο φιλόσοφος που πράγματι κατέχει την εξουσία. Η διακυβέρνηση ως καθήκον και όχι ως επιθυμία — η διάθεση που η ΠΟΛΙΤΕΙΑ κωδικοποιεί στον κανόνα «επώνυμοι άνθρωποι παραμένουν υπεύθυνοι».',
          en: 'The philosopher actually holding power. Governance as duty rather than appetite — the disposition POLITEIA encodes in its “named humans remain accountable” rule.',
        },
      },
      {
        author: { el: 'Επίκτητος', en: 'Epictetus' },
        title: { el: 'Ἐγχειρίδιον', en: 'Enchiridion (Ἐγχειρίδιον)' },
        tag: 'counsellors',
        note: {
          el: 'Η διχοτομία του ελέγχου. Μια πειθαρχία για να οριοθετείται τι μπορεί υπεύθυνα να συμβουλεύσει ένας Σύμβουλος έναντι όσων κείνται εκτός της αρμοδιότητας κάθε πράκτορα.',
          en: 'The dichotomy of control. A discipline for scoping what a Counsellor can responsibly advise on versus what lies outside any agent’s remit.',
        },
      },
    ],
  },
  {
    numeral: 'III',
    title: { el: 'Δυνατότητες & το μέτρο της ευημερίας', en: 'Capabilities & the Measure of Flourishing' },
    subtitle: {
      el: 'Ο εννιαδιάστατος Δείκτης Ευδαιμονίας, αντλημένος απευθείας από την πηγή.',
      en: 'The nine-dimension Eudaimonia Index, sourced directly.',
    },
    works: [
      {
        author: { el: 'Μάρθα Νάσμπαουμ', en: 'Martha Nussbaum' },
        title: { el: 'Δημιουργώντας Δυνατότητες', en: 'Creating Capabilities' },
        tag: 'eudaimonia',
        note: {
          el: 'Η προσέγγιση των δυνατοτήτων από την οποία προέρχεται ο Δείκτης. Οι δέκα κεντρικές δυνατότητες είναι η πιο υπερασπίσιμη λειτουργικοποίηση της «ευημερίας» που έχει γραφτεί — η διαφορά μεταξύ ενός μετρήσιμου στόχου και αόριστων καλών προθέσεων.',
          en: 'The capabilities approach the Index is derived from. The ten central capabilities are the most defensible operationalisation of “flourishing” anyone has written — the difference between a measurable objective and vague good intentions.',
        },
      },
      {
        author: { el: 'Αμάρτια Σεν', en: 'Amartya Sen' },
        title: { el: 'Η ανάπτυξη ως ελευθερία', en: 'Development as Freedom' },
        tag: 'eudaimonia',
        note: {
          el: 'Επαναπλαισιώνει τον στόχο της διακυβέρνησης ως διεύρυνση πραγματικών ελευθεριών (δυνατοτήτων), όχι του ΑΕΠ. Το επιχείρημα για το γιατί ένας δείκτης ευημερίας υπερτερεί ενός δείκτη ανάπτυξης.',
          en: 'Reframes the goal of governance as the expansion of real freedoms (capabilities), not GDP. The argument for why a flourishing-index beats a growth-index.',
        },
      },
      {
        author: { el: 'Αμάρτια Σεν', en: 'Amartya Sen' },
        title: { el: 'Η ιδέα της δικαιοσύνης', en: 'The Idea of Justice' },
        tag: 'deliberation',
        note: {
          el: 'Κρίσιμο για τη μέθοδο της ΠΟΛΙΤΕΙΑΣ: η δικαιοσύνη προάγεται μέσω δημόσιου συλλογισμού και συγκριτικής βελτίωσης, όχι με τη συναγωγή ενός τέλειου θεσμού. Η φιλοσοφική άδεια για μια πλατφόρμα που βάζει πρώτη τη διαβούλευση και «συγκρίνει προτάσεις στο φως».',
          en: 'Critical for POLITEIA’s method: justice advanced through public reasoning and comparative improvement, not by deducing one perfect institution. The philosophical licence for a deliberation-first, “compare proposals in the open” platform.',
        },
      },
    ],
  },
  {
    numeral: 'IV',
    title: { el: 'Διαβούλευση, δικαιοσύνη & ο δημόσιος χώρος', en: 'Deliberation, Justice & the Public Realm' },
    subtitle: {
      el: 'Ο δημοκρατικός μηχανισμός — το επίπεδο σχολίων, ψήφων και αντιλόγου.',
      en: 'The democratic mechanism — the comment, vote, and counter-argument layer.',
    },
    works: [
      {
        author: { el: 'Τζον Ρωλς', en: 'John Rawls' },
        title: { el: 'Θεωρία της δικαιοσύνης / Πολιτικός φιλελευθερισμός', en: 'A Theory of Justice / Political Liberalism' },
        tag: 'counsellors',
        note: {
          el: 'Η αρχική θέση και ο δημόσιος λόγος — το κριτήριο ότι μια πρόταση πρέπει να είναι δικαιολογήσιμη με όρους που όλοι οι πολίτες μπορούν να αποδεχθούν. Αυτός ακριβώς είναι ο πήχης στον οποίο κρατείται ο ορατός συλλογισμός των Συμβούλων.',
          en: 'The original position and public reason — the standard that a proposal must be justifiable in terms all citizens can accept. That is exactly the bar the Counsellors’ visible reasoning is held to.',
        },
      },
      {
        author: { el: 'Γιούργκεν Χάμπερμας', en: 'Jürgen Habermas' },
        title: { el: 'Μεταξύ γεγονότων και κανόνων', en: 'Between Facts and Norms' },
        tag: 'deliberation',
        note: {
          el: 'Διαβουλευτική δημοκρατία και δημόσια σφαίρα. Η νομιμοποίηση πηγάζει από τον τεκμηριωμένο διάλογο μεταξύ ίσων, όχι από την άθροιση προτιμήσεων. Ο θεωρητικός πυρήνας του συστήματος νηματικού συλλογισμού και της ανάδειξης του «ισχυρότερου αντιλόγου των πολιτών».',
          en: 'Deliberative democracy and the public sphere. Legitimacy arises from reasoned discourse among equals, not aggregated preference. The theoretical core of the threaded-reasoning system and the “strongest citizen counter-argument” surfacing.',
        },
      },
      {
        author: { el: 'Χάνα Άρεντ', en: 'Hannah Arendt' },
        title: { el: 'Η ανθρώπινη κατάσταση', en: 'The Human Condition' },
        tag: 'deliberation',
        note: {
          el: 'Η πολιτική ως δράση σε έναν κοινό δημόσιο χώρο, όπου η πολλαπλότητα είναι η προϋπόθεση, όχι ελάττωμα. Το επιχείρημα για το γιατί η διαβούλευση πρέπει να είναι ορατή — η πολιτική συμβαίνει στην εμφάνιση, στο φως.',
          en: 'Politics as action in a shared public realm, where plurality is the condition, not a bug. The argument for why deliberation must be visible — politics happens in appearance, in the open.',
        },
      },
    ],
  },
  {
    numeral: 'V',
    title: { el: 'Θεσμοί ενάντια στη διαφθορά', en: 'Institutions Against Corruption' },
    subtitle: {
      el: 'Οι εγγυήσεις — η δομική θωράκιση κατά της διαφθοράς.',
      en: 'The safeguards — the structural cousin of the anti-corruption work.',
    },
    works: [
      {
        author: { el: 'Μοντεσκιέ', en: 'Montesquieu' },
        title: { el: 'Το πνεύμα των νόμων', en: 'The Spirit of the Laws' },
        tag: 'safeguards',
        note: {
          el: 'Η διάκριση των εξουσιών· η εξουσία πρέπει να ελέγχει την εξουσία. Ο δομικός πρόγονος του «η ΤΝ μόνο προτείνει· οι άνθρωποι αποφασίζουν και παραμένουν υπεύθυνοι».',
          en: 'Separation of powers; power must check power. The structural ancestor of “AI proposes only; humans decide and remain accountable.”',
        },
      },
      {
        author: { el: 'Χάμιλτον, Μάντισον & Τζέι', en: 'Hamilton, Madison & Jay' },
        title: { el: 'Τα Ομοσπονδιακά Κείμενα (ιδίως 10 & 51)', en: 'The Federalist Papers (esp. 10 & 51)' },
        tag: 'antilogos',
        note: {
          el: 'Το σπουδαιότερο πρακτικό κείμενο που έχει γραφτεί για τον σχεδιασμό θεσμών ανθεκτικών στη διαφθορά. Η φατρία είναι αναπόφευκτη· η απάντηση είναι η δομή, όχι η αρετή. Το Federalist 51 είναι η άμεση θεωρητική θεμελίωση του Αντιλόγου (βλ. Τακτική 5).',
          en: 'The greatest practical text ever written on corruption-resistant institutional design. Faction is inevitable; the answer is structure, not virtue. Federalist 51 is the direct theoretical justification for the Αντίλογος (see Tactic 5).',
        },
      },
      {
        author: { el: 'Αλέξις ντε Τοκβίλ', en: 'Alexis de Tocqueville' },
        title: { el: 'Η δημοκρατία στην Αμερική', en: 'Democracy in America' },
        tag: 'safeguards',
        note: {
          el: 'Η πολιτειακή συσσωμάτωση ως το ανοσοποιητικό σύστημα μιας ελεύθερης κοινωνίας· η τυραννία της πλειοψηφίας ως η νόσος της. Ο σχεδιαστικός περιορισμός της ΠΟΛΙΤΕΙΑΣ — καμία μέτρηση εμπλοκής, καμία ατέρμονη κύλιση — είναι μια υπεράσπιση ακριβώς της πολιτικής κουλτούρας που ο Τοκβίλ φοβόταν ότι χάνεται.',
          en: 'Civic association as the immune system of a free society; the tyranny of the majority as its disease. POLITEIA’s design constraint — no engagement metrics, no infinite scroll — is a defence of exactly the civic culture Tocqueville feared losing.',
        },
      },
    ],
  },
  {
    numeral: 'VI',
    title: { el: 'Ο αναγκαίος Αντίλογος', en: 'The Necessary Αντίλογος' },
    subtitle: {
      el: 'Το ρεαλιστικό αντίβαρο — και η ειλικρινής υπόθεση εναντίον της ίδιας της ΠΟΛΙΤΕΙΑΣ. Μια πλατφόρμα χτισμένη στον υποχρεωτικό αντίλογο οφείλει να κρατά τον δικό της κανόνα στο ίδιο μέτρο.',
      en: 'The realist counterweight — and the honest case against POLITEIA itself. A platform built on mandatory counter-argument must hold its own canon to the same standard.',
    },
    works: [
      {
        author: { el: 'Μακιαβέλι', en: 'Machiavelli' },
        title: { el: 'Ο Ηγεμόνας + Διατριβές πάνω στον Λίβιο', en: 'The Prince + Discourses on Livy' },
        tag: 'antilogos',
        note: {
          el: 'Διαβασμένα μαζί. Ο Ηγεμόνας είναι η ψυχρή μηχανική της εξουσίας· οι Διατριβές είναι ο ρεπουμπλικανός Μακιαβέλι — για τη θεμελίωση ανθεκτικών ελεύθερων κρατών και για το γιατί οι θεσμοί, όχι οι καλοί άνθρωποι, κρατούν τις δημοκρατίες έντιμες. Το διορθωτικό σε κάθε αφελή ιδεαλισμό του σχεδιασμού.',
          en: 'Read together. The Prince is the cold mechanics of power; the Discourses is the republican Machiavelli — on founding durable free states and on why institutions, not good men, keep republics honest. The corrective to any naïve idealism in the design.',
        },
      },
      {
        author: { el: 'Θουκυδίδης', en: 'Thucydides' },
        title: { el: 'Ιστορία του Πελοποννησιακού Πολέμου', en: 'History of the Peloponnesian War' },
        tag: 'antilogos',
        note: {
          el: 'Ο Διάλογος των Μηλίων και ο εκφυλισμός της αθηναϊκής δημοκρατίας σε δημαγωγία. Η μόνιμη προειδοποίηση για το τι θα μπορούσε να καταντήσει η ίδια η διαβούλευση της ΠΟΛΙΤΕΙΑΣ αν αποτύχουν οι εγγυήσεις.',
          en: 'The Melian Dialogue and the decay of Athenian democracy into demagoguery. The permanent warning about what POLITEIA’s own deliberation could degrade into if the safeguards fail.',
        },
      },
      {
        author: { el: 'Τζέιμς Σκοτ', en: 'James C. Scott' },
        title: { el: 'Βλέποντας σαν κράτος', en: 'Seeing Like a State' },
        tag: 'antilogos',
        note: {
          el: 'Το ισχυρότερο μεμονωμένο επιχείρημα εναντίον ολόκληρης της παραδοχής. Τα υψηλο-μοντερνιστικά κεντρικά σχέδια αποτυγχάνουν επειδή εξαλείφουν την τοπική, άρρητη, μη αναγνώσιμη γνώση (μῆτις) πάνω στην οποία λειτουργούν οι πραγματικές κοινωνίες. Το σημαντικότερο βιβλίο της λίστας ακριβώς επειδή την αντικρούει — η ισχυρότερη εκδοχή του αντιλόγου, στην οποία πρέπει να δοκιμάζεται ο συλλογισμός κάθε Συμβούλου.',
          en: 'The strongest single argument against the entire premise. High-modernist central schemes fail because they erase the local, tacit, illegible knowledge (mētis) that real societies run on. The most important book on this list because it argues against it — the steel-manned case every Counsellor’s reasoning should be pressure-tested against.',
        },
      },
    ],
  },
] as const

export interface Tactic {
  n: number
  name: Bilingual
  mechanism: Bilingual
  proof: Bilingual
  seeAlso: Bilingual
  occasion: Bilingual
  tie?: Bilingual // explicit link back to a POLITEIA feature
  tieHref?: string
  image?: { src: string; alt: Bilingual; caption: Bilingual } // illustrative plate
}

export const TACTICS: readonly Tactic[] = [
  {
    n: 1,
    name: {
      el: 'Αφομοίωση — οικειοποιήσου την καλύτερη ιδέα της αντιπολίτευσης και η αντιπολίτευση διαλύεται',
      en: 'Co-optation — absorb your opposition’s best idea and the opposition dissolves',
    },
    mechanism: {
      el: 'Δεν νικάς ένα λαϊκό παράπονο αντιτιθέμενος σ’ αυτό· το νικάς ικανοποιώντας το με τους δικούς σου όρους, αφαιρώντας το καύσιμο πριν απλωθεί η φωτιά.',
      en: 'You cannot defeat a popular grievance by opposing it; you defeat it by satisfying it on your own terms, removing the fuel before the fire spreads.',
    },
    proof: {
      el: 'Μπίσμαρκ, δεκαετία 1880. Αντιμέτωπος με ανερχόμενο σοσιαλδημοκρατικό κίνημα, συνδύασε τους Αντι-σοσιαλιστικούς Νόμους (το μαστίγιο) με το πρώτο κράτος πρόνοιας στον κόσμο — ασφάλιση υγείας (1883), ασφάλιση ατυχημάτων (1884), συντάξεις γήρατος (1889). Υλοποίησε τα ίδια τα αιτήματα των σοσιαλιστών για να τους στερήσει την υπόθεσή τους. Το σύγχρονο κράτος πρόνοιας γεννήθηκε ως αντεπαναστατικός ελιγμός.',
      en: 'Bismarck, 1880s. Facing a rising Social Democratic movement, he paired the Anti-Socialist Laws (the stick) with the world’s first welfare state — health insurance (1883), accident insurance (1884), old-age pensions (1889). He implemented the socialists’ own demands to strip them of their cause. The modern welfare state was born as a counter-revolutionary manoeuvre.',
    },
    seeAlso: {
      el: 'Ο Αύγουστος διατήρησε κάθε ρεπουμπλικανικό τύπο — Σύγκλητο, υπάτους, «πρώτο πολίτη» — ενώ κατείχε απόλυτη εξουσία. Άσε τους ηττημένους να κρατήσουν τα σύμβολα.',
      en: 'Augustus preserving every republican form — Senate, consuls, “first citizen” — while holding absolute power. Let the defeated keep the symbols.',
    },
    occasion: {
      el: 'Όταν μια αντίπαλη παράταξη κατέχει μια ιδέα πιο δημοφιλή από τη δική σου. Μην την πολεμάς — οικειοποιήσου την.',
      en: 'When a rival faction holds an idea more popular than yours. Don’t fight it — own it.',
    },
  },
  {
    n: 2,
    name: {
      el: 'Έλεγξε το πλαίσιο — όποιος ορίζει το ερώτημα έχει ήδη κερδίσει την απάντηση',
      en: 'Control the Frame — whoever defines the question has already won the answer',
    },
    mechanism: {
      el: 'Οι περισσότεροι δεν επιλέγουν ανάμεσα σε απαντήσεις· αποδέχονται το ερώτημα όπως τίθεται και συλλογίζονται μέσα του. Όρισε τους όρους και έχεις προαποφασίσει το αποτέλεσμα.',
      en: 'Most people don’t choose between answers; they accept the question as posed and reason inside it. Set the terms and you’ve pre-decided the outcome.',
    },
    proof: {
      el: 'Ρέιγκαν, 1980. Μία φράση στο τελικό ντιμπέιτ απέναντι στον Κάρτερ — «Είστε σε καλύτερη θέση απ’ ό,τι πριν τέσσερα χρόνια;» — μετέτρεψε μια εκλογή περί ιδεολογίας και επάρκειας σε ένα μοναδικό δημοψήφισμα για τον προσωπικό οικονομικό πόνο, που ο Κάρτερ δεν μπορούσε να κερδίσει. Μια ολόκληρη εκστρατεία συμπυκνώθηκε σε ένα καλά διαλεγμένο πλαίσιο.',
      en: 'Reagan, 1980. One line in the closing debate against Carter — “Are you better off than you were four years ago?” — reframed an election about ideology and competence into a single referendum on personal economic pain, which Carter could not win. A whole campaign collapsed into one well-chosen frame.',
    },
    seeAlso: {
      el: 'Οι ραδιοφωνικές «κουβέντες δίπλα στο τζάκι» του Ρούσβελτ μετέτρεψαν την τραπεζική κατάρρευση από «το σύστημα είναι σπασμένο» σε «οι καταθέσεις σας είναι ασφαλείς αν μείνετε ψύχραιμοι» — και ο πανικός σταμάτησε.',
      en: 'FDR’s fireside chats reframing bank failure from “the system is broken” to “your deposits are safe if you stay calm” — and the panic stopped.',
    },
    occasion: {
      el: 'Κάθε αμφισβητούμενη απόφαση όπου οι όροι της συζήτησης είναι ακόμη ανοιχτοί. Κινήσου πρώτος, όρισε το ερώτημα, ανάγκασε τους αντιπάλους να επιχειρηματολογούν στο δικό σου έδαφος.',
      en: 'Any contested decision where the terms of debate are still open. Move first, define the question, make opponents argue on your ground.',
    },
  },
  {
    n: 3,
    name: {
      el: 'Σταδιακότητα — μετατόπισε το παράθυρο ένα αποδεκτό βήμα τη φορά',
      en: 'Gradualism — shift the window one acceptable step at a time',
    },
    mechanism: {
      el: 'Ένας στόχος υπερβολικά ριζοσπαστικός για να περάσει μονομιάς γίνεται αναπόφευκτος όταν σπάει σε βήματα, καθένα από τα οποία ομαλοποιεί το επόμενο. Το «πόδι στην πόρτα», σε ιστορική κλίμακα.',
      en: 'A goal too radical to pass at once becomes inevitable when broken into increments, each of which normalises the next. The foot in the door, scaled to history.',
    },
    proof: {
      el: 'Η βρετανική κατάργηση της δουλείας. Ο Ουίλμπερφορς και οι αντικαταργιστές διέσπασαν σκόπιμα ένα ακέρδιστο αίτημα: πρώτα απαγόρευση του δουλεμπορίου (1807), έπειτα επίθεση στην ίδια τη δουλεία (1833). Κάθε νίκη καθιστούσε την επόμενη ηθικά αναντίρρητη. Το τελικό σημείο επιτεύχθηκε επειδή δεν ζητήθηκε ποτέ όλο μαζί.',
      en: 'British abolition. Wilberforce and the abolitionists deliberately split an unwinnable demand: ban the slave trade first (1807), then attack slavery itself (1833). Each victory made the next morally unanswerable. The end state was reached because it was never asked for all at once.',
    },
    seeAlso: {
      el: 'Το ρητό δόγμα της Φαβιανής Εταιρείας περί «του αναπόφευκτου της σταδιακότητας» — και η εκατονταετής διεύρυνση του δικαιώματος ψήφου.',
      en: 'The Fabian Society’s explicit doctrine of “the inevitability of gradualness” — and the century-long expansion of suffrage.',
    },
    occasion: {
      el: 'Όταν ο προορισμός είναι πολύ μακριά για ένα άλμα. Βάλ’ τον σε σειρά· άσε κάθε βήμα να γίνει η νέα βάση.',
      en: 'When the destination is too far for one leap. Sequence it; let each step become the new baseline.',
    },
  },
  {
    n: 4,
    name: {
      el: 'Μεγαλοθυμία στη νίκη — δώσε στον ηττημένο μερίδιο στην ειρήνη',
      en: 'Magnanimity in Victory — give the defeated a stake in the peace',
    },
    mechanism: {
      el: 'Ένας συντετριμμένος εχθρός δεν έχει τίποτα να χάσει και κάθε λόγο να εξεγερθεί· ένας ενσωματωμένος έχει τα πάντα να χάσει και γίνεται εγγυητής της τάξης που έχτισες. Η επιείκεια είναι η πιο ανθεκτική μορφή στρατηγικής.',
      en: 'A crushed enemy has nothing to lose and every reason to revolt; an integrated one has everything to lose and becomes a guarantor of the order you built. Mercy is the most durable form of strategy.',
    },
    proof: {
      el: 'Το Σχέδιο Μάρσαλ, 1948. Η αντίθεση είναι το δίδαγμα: η τιμωρητική Συνθήκη των Βερσαλλιών (1919) έθρεψε τη μνησικακία που γέννησε τον επόμενο πόλεμο, ενώ η αποκατάσταση της Δυτικής Γερμανίας και της Ιαπωνίας — οικονομική ανασυγκρότηση, ενσωμάτωση, αποκατεστημένη κυριαρχία — μετέτρεψε δύο ηττημένους εχθρούς σε ακρογωνιαίους λίθους μιας σταθερής ειρήνης που κρατά ογδόντα χρόνια.',
      en: 'The Marshall Plan, 1948. The contrast is the lesson: the punitive Treaty of Versailles (1919) bred the resentment that produced the next war, while the rehabilitation of West Germany and Japan — economic reconstruction, integration, restored sovereignty — turned two defeated enemies into the cornerstones of a stable peace that has held for eighty years.',
    },
    seeAlso: {
      el: 'Η Επιτροπή Αλήθειας και Συμφιλίωσης του Μαντέλα και το Παγκόσμιο Κύπελλο Ράγκμπι του 1995 — δένοντας τον πρώην καταπιεστή μέσα στο νέο έθνος αντί να εκδικηθεί εις βάρος του.',
      en: 'Mandela’s Truth and Reconciliation Commission and the 1995 Rugby World Cup — binding the former oppressor into the new nation instead of avenging on it.',
    },
    occasion: {
      el: 'Το πρωί μετά από κάθε καθοριστική νίκη. Αντιστάσου στην όρεξη για αντεκδίκηση· μετάτρεψε τον ηττημένο σε μέτοχο.',
      en: 'The morning after any decisive win. Resist the appetite for retribution; convert the loser into a stakeholder.',
    },
  },
  {
    n: 5,
    name: {
      el: 'Η φιλοδοξία ελέγχει τη φιλοδοξία — μηχανέψου τη σύγκρουση αντί να εμπιστεύεσαι την αρετή',
      en: 'Ambition Checks Ambition — engineer the conflict instead of trusting the virtue',
    },
    mechanism: {
      el: 'Μη βασίζεσαι στην καλοσύνη των ανθρώπων· χτίσε τη δομή ώστε το συμφέρον κάθε δρώντος να συγκρατεί κάθε άλλου. Η αντιπαράθεση κατασκευασμένη σε αρχιτεκτονική. Αυτή είναι η τακτική πάνω στην οποία τρέχει η ίδια η ΠΟΛΙΤΕΙΑ.',
      en: 'Don’t rely on people being good; build the structure so that each actor’s self-interest restrains every other’s. Adversarialism made architectural. This is the tactic POLITEIA itself runs on.',
    },
    proof: {
      el: 'Μάντισον, Federalist 51 (1788): «Η φιλοδοξία πρέπει να αντιπαρατίθεται στη φιλοδοξία». Η αμερικανική διάκριση των εξουσιών σχεδιάστηκε με την παραδοχή ότι οι άνθρωποι δεν είναι άγγελοι — αντιπαραθέτοντας εξουσία σε εξουσία ώστε καμία φατρία να μην μπορεί να καταλάβει το σύνολο. Η μακροβιότητα του συστήματος προέρχεται από τη δυσπιστία χτισμένη στα θεμέλιά του, όχι από την καλοσύνη των αξιωματούχων του.',
      en: 'Madison, Federalist 51 (1788): “Ambition must be made to counteract ambition.” The U.S. separation of powers was designed on the assumption that men are not angels — pitting branch against branch so no faction could capture the whole. The system’s longevity comes from distrust engineered into its bones, not from the goodness of its officeholders.',
    },
    seeAlso: {
      el: '—',
      en: '—',
    },
    occasion: {
      el: 'Κάθε θεσμός που θες να επιβιώνει από κακόβουλους δρώντες — δηλαδή κάθε θεσμός. Σχεδίασε την αντιπολίτευση από μέσα.',
      en: 'Any institution you want to survive bad actors — which is every institution. Design the opposition in.',
    },
    tie: {
      el: 'Αυτός είναι ο Αντίλογός σου: ο υποχρεωτικός αντίλογος σε κάθε πρόταση είναι το Federalist 51 μεταφρασμένο σε προδιαγραφή λογισμικού — η δομική δυσπιστία ως χαρακτηριστικό, ποτέ ως ύστερη σκέψη.',
      en: 'This is your Αντίλογος: the mandatory counter-argument on every proposal is Federalist 51 rendered as a software requirement — structural distrust as a feature, never an afterthought.',
    },
    tieHref: '/proposal/prop-environment-01',
    image: {
      src: '/canon/repin-zaporozhian-cossacks.jpg',
      alt: {
        el: 'Οι Κοζάκοι της Ζαπορίζιας συντάσσουν απάντηση στον Σουλτάνο — πίνακας του Ίλια Ρέπιν',
        en: 'The Zaporozhian Cossacks compose their reply to the Sultan — painting by Ilya Repin',
      },
      caption: {
        el: 'Ίλια Ρέπιν, «Οι Κοζάκοι της Ζαπορίζιας απαντούν στον Σουλτάνο» (1880–1891). Ο αντίλογος προς την εξουσία ως συλλογική, δημόσια πράξη — κανείς δεν λογοκρίνει τον γραφέα.',
        en: 'Ilya Repin, “Reply of the Zaporozhian Cossacks” (1880–1891). The counter-argument to power as a collective, public act — no one censors the scribe.',
      },
    },
  },
] as const
