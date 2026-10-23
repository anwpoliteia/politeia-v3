// The ten safeguards of ΑΓΟΡΑΝΟΜΟΣ. Each is a PROPOSAL (Hard Rule 1): the AI
// watches the big players in the chain — never the corner grocer; named humans
// decide.

import type { Safeguard } from '../types'

export const SAFEGUARDS: readonly Safeguard[] = [
  {
    id: 'live-price',
    n: 'Σ1',
    name: { el: 'Τιμές σε Πραγματικό Χρόνο', en: 'Live Prices' },
    precedent: {
      el: 'Στη Γερμανία, από το 2013, κάθε πρατήριο καυσίμων δηλώνει κάθε αλλαγή τιμής σε πραγματικό χρόνο στην αρχή ανταγωνισμού· στην Ελλάδα το e-katanalotis δείχνει ήδη τιμές σούπερ μάρκετ από το 2020.',
      en: 'In Germany, since 2013, every fuel station reports each price change in real time to the competition authority; in Greece, e-katanalotis has shown supermarket prices since 2020.',
    },
    plain: {
      el: 'Οι μεγάλες αλυσίδες και τα πρατήρια δηλώνουν κάθε αλλαγή τιμής στα βασικά αγαθά τη στιγμή που γίνεται, σε ανοιχτή βάση που βλέπουν όλοι.',
      en: 'Large chains and fuel stations report every price change on staples the moment it happens, in an open database everyone can see.',
    },
    how: {
      el: 'Η υποχρέωση αφορά μόνο μεγάλες επιχειρήσεις, όχι το μπακάλικο της γειτονιάς. Η ΤΝ κρατά το ιστορικό κάθε τιμής, ώστε ο πολίτης να βλέπει όχι μόνο πού είναι φθηνότερο σήμερα, αλλά και πώς κινήθηκε η τιμή τους τελευταίους μήνες.',
      en: 'The duty applies only to large businesses, not the neighbourhood shop. The AI keeps every price’s history, so citizens see not only where it is cheapest today, but how the price moved over recent months.',
    },
    humans: {
      el: 'Η αρχή ανταγωνισμού και οι πολίτες διαβάζουν· οι επιχειρήσεις ορίζουν ελεύθερα τις τιμές τους.',
      en: 'The competition authority and citizens read; businesses set their prices freely.',
    },
    antilogos: {
      el: 'Η πλήρης διαφάνεια τιμών μπορεί να βοηθήσει και τη σιωπηρή συμπαιγνία: κάθε αλυσίδα βλέπει αμέσως τι κάνει η άλλη και ακολουθεί, χωρίς να χρειάζεται καν συνάντηση.',
      en: 'Full price transparency can also help tacit collusion: every chain sees instantly what the other does and follows, without even needing to meet.',
    },
    distributional: {
      el: 'Κοστίζει λίγο στις μεγάλες επιχειρήσεις. Κερδίζουν τα νοικοκυριά με σφιχτό προϋπολογισμό, που μετρούν κάθε ευρώ.',
      en: 'It costs large businesses little. Households on tight budgets, who count every euro, gain.',
    },
    virtues: ['parrhesia', 'sophrosyne'],
    delta: { economic_security: 4, affiliation_trust: 2 },
  },
  {
    id: 'lockstep-screen',
    n: 'Σ2',
    name: { el: 'Ανιχνευτής Ταυτόχρονων Αυξήσεων', en: 'Lockstep-Rise Screen' },
    precedent: {
      el: 'Γύρω στο 386 π.Χ. η Αθήνα δίκασε τους σιτοπώλες επειδή συμφώνησαν μεταξύ τους να αγοράζουν φθηνά και να πουλούν ακριβά το σιτάρι (Λυσίας, Κατά των σιτοπωλών).',
      en: 'Around 386 BC Athens tried its grain dealers for agreeing among themselves to buy grain cheap and sell it dear (Lysias, Against the Grain Dealers).',
    },
    plain: {
      el: 'Η ΤΝ ελέγχει τα δεδομένα τιμών για ύποπτα μοτίβα — ίδιες αυξήσεις την ίδια μέρα, σταθερές αναλογίες χονδρικής και λιανικής — και τα στέλνει στην Επιτροπή Ανταγωνισμού.',
      en: 'The AI screens price data for suspicious patterns — identical rises on the same day, fixed wholesale-to-retail ratios — and sends them to the Competition Commission.',
    },
    how: {
      el: 'Η μέθοδος ανίχνευσης είναι δημόσια και ελεγμένη από ανεξάρτητους στατιστικούς. Ένα σήμα δεν είναι κατηγορία· είναι λόγος για έρευνα — τώρα, όχι όταν κάποιος συμμετέχων αποφασίσει να ομολογήσει δεκαπέντε χρόνια μετά.',
      en: 'The screening method is public and checked by independent statisticians. A flag is not an accusation; it is a reason to investigate — now, not when some participant decides to confess fifteen years later.',
    },
    humans: {
      el: 'Η Επιτροπή Ανταγωνισμού ερευνά και κρίνει· η ΤΝ απλώς δείχνει πού να κοιτάξει.',
      en: 'The Competition Commission investigates and judges; the AI only shows where to look.',
    },
    antilogos: {
      el: 'Σε μια συγκεντρωμένη αγορά, όλοι οι πωλητές αντιμετωπίζουν τις ίδιες αυξήσεις κόστους την ίδια στιγμή — οι παράλληλες τιμές είναι συχνά φυσιολογικές και όχι απόδειξη συμπαιγνίας.',
      en: 'In a concentrated market, every seller faces the same cost rises at the same moment — parallel prices are often normal, not proof of collusion.',
    },
    distributional: {
      el: 'Πληρώνουν τα καρτέλ. Κερδίζουν όλοι όσοι αγοράζουν ψωμί, γάλα και χαρτί υγείας — δηλαδή όλοι.',
      en: 'Cartels pay. Everyone who buys bread, milk and toilet paper gains — that is, everyone.',
    },
    virtues: ['sophia', 'dikaiosyne'],
    delta: { economic_security: 5, institutional_justice: 3 },
  },
  {
    id: 'chain-mirror',
    n: 'Σ3',
    name: { el: 'Κάτοπτρο της Αλυσίδας', en: 'The Chain Mirror' },
    precedent: {
      el: 'Η Γαλλία έχει από το 2010 δημόσιο Παρατηρητήριο διαμόρφωσης τιμών και περιθωρίων στα τρόφιμα, που δείχνει κάθε χρόνο πώς μοιράζεται η τιμή από τον αγρότη ως το ράφι.',
      en: 'Since 2010 France has had a public Observatory of food price and margin formation, showing each year how the price is shared from farmer to shelf.',
    },
    plain: {
      el: 'Για τα βασικά αγαθά δημοσιεύεται η τιμή σε κάθε κρίκο: τι πήρε ο παραγωγός, τι ο μεταποιητής, τι ο χονδρέμπορος, τι το κατάστημα.',
      en: 'For staples, the price at each link is published: what the producer got, the processor, the wholesaler, the shop.',
    },
    how: {
      el: 'Η ΤΝ συνδέει τις τιμές παραγωγού με τις τιμές ραφιού και δείχνει πότε μεγαλώνει το χάσμα — ιδίως όταν η τιμή στον παραγωγό πέφτει ενώ η τιμή στο ράφι ανεβαίνει, ή όταν τα περιθώρια φουσκώνουν μέσα σε μια κρίση.',
      en: 'The AI links producer prices to shelf prices and shows when the gap widens — especially when the producer price falls while the shelf price rises, or when margins swell during a crisis.',
    },
    humans: {
      el: 'Η Επιτροπή Ανταγωνισμού και η Βουλή αποφασίζουν αν χρειάζεται παρέμβαση.',
      en: 'The Competition Commission and Parliament decide whether intervention is needed.',
    },
    antilogos: {
      el: 'Τα περιθώρια περιλαμβάνουν ενοίκια, μισθούς, ενέργεια και απώλειες· η δημοσίευσή τους χωρίς αυτό το πλαίσιο μπορεί να στοχοποιήσει άδικα επιχειρήσεις με πραγματικά κόστη.',
      en: 'Margins include rent, wages, energy and waste; publishing them without that context may unfairly target businesses with real costs.',
    },
    distributional: {
      el: 'Κερδίζουν οι αγρότες και οι κτηνοτρόφοι, που βλέπουν τι πληρώνει ο τελικός αγοραστής. Κερδίζει και ο καταναλωτής.',
      en: 'Farmers and herders gain, seeing what the final buyer pays. So does the consumer.',
    },
    virtues: ['dikaiosyne', 'parrhesia'],
    delta: { economic_security: 4, affiliation_trust: 3 },
  },
  {
    id: 'price-history',
    n: 'Σ4',
    name: { el: 'Το Ιστορικό Κάθε Έκπτωσης', en: 'Every Discount’s History' },
    precedent: {
      el: 'Η Οδηγία (ΕΕ) 2019/2161 απαιτεί ήδη κάθε ανακοίνωση μείωσης τιμής να αναφέρεται στη χαμηλότερη τιμή των προηγούμενων 30 ημερών.',
      en: 'Directive (EU) 2019/2161 already requires every price-reduction announcement to refer to the lowest price of the previous 30 days.',
    },
    plain: {
      el: 'Κάθε «έκπτωση» δείχνει δίπλα της πώς κινήθηκε η τιμή τους τελευταίους μήνες — και η ΤΝ σημαίνει τις «εκπτώσεις» που ακολούθησαν μια σύντομη, απότομη αύξηση.',
      en: 'Every “discount” shows beside it how the price moved over recent months — and the AI flags “discounts” that followed a short, sharp rise.',
    },
    how: {
      el: 'Από τα δεδομένα τιμών σε πραγματικό χρόνο, η ΤΝ ελέγχει κάθε προωθητική ετικέτα: πόσο διήρκεσε η υψηλότερη τιμή πριν από την «έκπτωση» και αν η τελική τιμή είναι όντως χαμηλότερη από τη συνήθη. Τα ύποπτα πάνε στην αρχή προστασίας καταναλωτή.',
      en: 'From live price data, the AI checks each promotional ticket: how long the higher price lasted before the “discount,” and whether the final price is really lower than the usual one. Suspicious ones go to the consumer authority.',
    },
    humans: {
      el: 'Η αρχή προστασίας καταναλωτή και τα δικαστήρια κρίνουν αν μια ετικέτα παραπλανά.',
      en: 'The consumer authority and the courts judge whether a ticket misleads.',
    },
    antilogos: {
      el: 'Οι τιμές ανεβαίνουν νόμιμα όταν ανεβαίνει το κόστος, και οι εκπτώσεις που ακολουθούν είναι πραγματικές για τον αγοραστή εκείνης της εβδομάδας· το πόσο πρέπει να διαρκεί μια τιμή για να μετρά είναι νομικά αμφισβητούμενο.',
      en: 'Prices rise lawfully when costs rise, and the discounts that follow are real to that week’s buyer; how long a price must last to count is legally contested.',
    },
    distributional: {
      el: 'Χάνουν οι ψεύτικες προσφορές. Κερδίζουν οι αγοραστές που πιστεύουν αυτό που γράφει η ετικέτα.',
      en: 'Fake offers lose. Shoppers who believe what the ticket says gain.',
    },
    virtues: ['parrhesia', 'dikaiosyne'],
    delta: { economic_security: 3, affiliation_trust: 3 },
  },
  {
    id: 'rebate-light',
    n: 'Σ5',
    name: { el: 'Φως στις Επιστροφές', en: 'Light on Rebates' },
    precedent: {
      el: 'Το 2026 η αμερικανική Ομοσπονδιακή Επιτροπή Εμπορίου πέτυχε οι επιστροφές των φαρμάκων να περνούν στον ασθενή στο ταμείο του φαρμακείου — όχι να μένουν στους μεσάζοντες.',
      en: 'In 2026 the US Federal Trade Commission secured that drug rebates pass to the patient at the pharmacy counter — not stay with the middlemen.',
    },
    plain: {
      el: 'Οι εκπτώσεις και επιστροφές ανάμεσα σε παραγωγούς, διανομείς και μεσάζοντες δηλώνονται, και ο πολίτης πληρώνει με βάση την πραγματική — όχι την πλασματική — τιμή.',
      en: 'Discounts and rebates between manufacturers, distributors and middlemen are declared, and the citizen pays based on the real — not the notional — price.',
    },
    how: {
      el: 'Η ΤΝ συγκρίνει την τιμή λίστας με την καθαρή τιμή μετά από επιστροφές, και σημαίνει κάθε περίπτωση όπου η συμμετοχή του πολίτη υπολογίζεται στη λίστα ενώ ο μεσάζων εισπράττει τη διαφορά.',
      en: 'The AI compares list price with net price after rebates, and flags every case where the citizen’s share is calculated on the list while the middleman collects the difference.',
    },
    humans: {
      el: 'Οι ρυθμιστικές αρχές αποφασίζουν τους κανόνες· οι επιχειρήσεις διαπραγματεύονται όπως πάντα.',
      en: 'Regulators set the rules; businesses negotiate as always.',
    },
    antilogos: {
      el: 'Οι επιστροφές μειώνουν το συνολικό κόστος για ασφαλιστικά ταμεία και εργοδότες· η δημοσιοποίησή τους μπορεί να αποδυναμώσει τη διαπραγματευτική δύναμη που τις γεννά.',
      en: 'Rebates lower total costs for insurers and employers; disclosing them may weaken the bargaining power that produces them.',
    },
    distributional: {
      el: 'Χάνουν οι μεσάζοντες που ζούσαν από την αδιαφάνεια. Κερδίζουν οι ασθενείς και όσοι πληρώνουν από την τσέπη τους.',
      en: 'Middlemen who lived on opacity lose. Patients and those paying out of pocket gain.',
    },
    virtues: ['dikaiosyne', 'parrhesia'],
    delta: { life_health: 3, economic_security: 4 },
  },
  {
    id: 'bill-breakdown',
    n: 'Σ6',
    name: { el: 'Λογαριασμός που Εξηγείται', en: 'A Bill That Explains Itself' },
    precedent: {
      el: 'Το 2022 η Ρυθμιστική Αρχή Ενέργειας υπολόγισε — εκ των υστέρων — υπερκέρδη 591 εκατ. για έξι μήνες· το ΣτΕ έκρινε νόμιμη την ανάκτησή τους (185/2024). Η πρόταση κάνει τον ίδιο υπολογισμό σε πραγματικό χρόνο.',
      en: 'In 2022 the Energy Regulatory Authority calculated — after the fact — windfall profits of €591 million for six months; the Council of State upheld recovering them (185/2024). The proposal does the same calculation in real time.',
    },
    plain: {
      el: 'Κάθε λογαριασμός ρεύματος και αερίου δείχνει καθαρά τι είναι κόστος ενέργειας, τι δίκτυο, τι φόροι και τι περιθώριο του προμηθευτή — και η ΤΝ το συγκρίνει με τη χονδρεμπορική τιμή.',
      en: 'Every electricity and gas bill shows plainly what is energy cost, what is network, what is tax and what is the supplier’s margin — and the AI compares it with the wholesale price.',
    },
    how: {
      el: 'Η ρυθμιστική αρχή δημοσιεύει κάθε μήνα το μέσο περιθώριο κάθε προμηθευτή και παραγωγού. Όταν τα περιθώρια ξεπερνούν ένα όριο σε περίοδο κρίσης, η ΤΝ το σημαίνει αμέσως — όχι μήνες αργότερα.',
      en: 'The regulator publishes each supplier’s and producer’s average margin every month. When margins cross a threshold during a crisis, the AI flags it immediately — not months later.',
    },
    humans: {
      el: 'Η ρυθμιστική αρχή και η Βουλή αποφασίζουν αν θα υπάρξει παρέμβαση.',
      en: 'The regulator and Parliament decide whether to intervene.',
    },
    antilogos: {
      el: 'Η αγορά ηλεκτρισμού είναι πολύπλοκη: η οριακή τιμολόγηση μεταφέρει τα σοκ του φυσικού αερίου σε όλη την παραγωγή χωρίς καμία παρανομία, και οι μονάδες αερίου είχαν πραγματικά αυξημένο κόστος.',
      en: 'The electricity market is complex: marginal pricing passes gas shocks to all output with no wrongdoing, and gas units genuinely faced higher costs.',
    },
    distributional: {
      el: 'Χάνει η αδιαφάνεια των υπερκερδών. Κερδίζουν τα νοικοκυριά και οι μικρές επιχειρήσεις που πληρώνουν τους λογαριασμούς.',
      en: 'The opacity of windfalls loses. Households and small businesses paying the bills gain.',
    },
    virtues: ['parrhesia', 'sophia'],
    delta: { economic_security: 4, affiliation_trust: 2 },
  },
  {
    id: 'fine-mirror',
    n: 'Σ7',
    name: { el: 'Πρόστιμο Πάνω από το Κέρδος', en: 'Fines Above the Gain' },
    precedent: {
      el: 'Ο ελληνικός νόμος για το πλαφόν κέρδους όριζε ήδη πρόστιμο διπλάσιο του παράνομου οφέλους — τετραπλάσιο για υποτροπή.',
      en: 'Greece’s margin-cap law already set fines at double the illegal gain — quadruple for repeat offenders.',
    },
    plain: {
      el: 'Κάθε πρόστιμο δημοσιεύεται δίπλα στο εκτιμώμενο παράνομο όφελος — και η ΤΝ σημαίνει κάθε περίπτωση όπου το πρόστιμο είναι μικρότερο από το κέρδος.',
      en: 'Every fine is published beside the estimated illegal gain — and the AI flags every case where the fine is smaller than the profit.',
    },
    how: {
      el: 'Η αρχή που επιβάλλει το πρόστιμο δημοσιεύει τη μέθοδο υπολογισμού, το εκτιμώμενο όφελος και το ανώτατο όριο που επέτρεπε ο νόμος. Όταν επιβάλλεται πολύ κάτω από το όριο, η αιτιολογία γίνεται δημόσια.',
      en: 'The authority imposing the fine publishes its method, the estimated gain and the maximum the law allowed. When it imposes far below the maximum, the reasoning becomes public.',
    },
    humans: {
      el: 'Η αρχή και τα δικαστήρια ορίζουν το ποσό· η σύγκριση απλώς γίνεται ορατή.',
      en: 'The authority and the courts set the amount; the comparison simply becomes visible.',
    },
    antilogos: {
      el: 'Το παράνομο όφελος είναι δύσκολο να υπολογιστεί με ακρίβεια· οι εκτιμήσεις μπορεί να φουσκώνουν, και ένα πολύ υψηλό πρόστιμο μπορεί να κλείσει μια επιχείρηση και να μειώσει τον ανταγωνισμό.',
      en: 'Illegal gain is hard to calculate precisely; estimates may be inflated, and a very high fine could close a business and reduce competition.',
    },
    distributional: {
      el: 'Χάνουν όσοι υπολόγιζαν το πρόστιμο ως κόστος λειτουργίας. Κερδίζουν όσοι τηρούν τους κανόνες.',
      en: 'Those who treated fines as a cost of doing business lose. Those who follow the rules gain.',
    },
    virtues: ['dikaiosyne', 'sophrosyne'],
    delta: { institutional_justice: 4, economic_security: 3 },
  },
  {
    id: 'automatic-refund',
    n: 'Σ8',
    name: { el: 'Επιστροφή Χωρίς Αγωγή', en: 'Refunds Without a Lawsuit' },
    precedent: {
      el: 'Στη Χιλή, μετά το καρτέλ του χαρτιού υγείας, η εταιρεία πλήρωσε περίπου 7.000 πέσος σε κάθε ενήλικο πολίτη — τα περισσότερα αυτόματα, μέσω του δημόσιου τραπεζικού λογαριασμού τους (2018).',
      en: 'In Chile, after the toilet-paper cartel, the company paid about CLP 7,000 to every adult citizen — most automatically, through their public bank account (2018).',
    },
    plain: {
      el: 'Όταν αποδεικνύεται καρτέλ σε βασικό αγαθό, οι καταναλωτές αποζημιώνονται αυτόματα — χωρίς να χρειαστεί ο καθένας να κάνει αγωγή. Η επιείκεια για όποιον καταγγέλλει καλύπτει το πρόστιμο, όχι την επιστροφή.',
      en: 'When a cartel in a staple is proven, consumers are compensated automatically — without each having to sue. Leniency for whoever reports it covers the fine, not the refund.',
    },
    how: {
      el: 'Η ΤΝ υπολογίζει την εκτιμώμενη υπερχρέωση ανά νοικοκυριό από τα δεδομένα τιμών και κατανάλωσης, και η επιστροφή γίνεται μέσω του φορολογικού μητρώου ή του λογαριασμού πληρωμής επιδομάτων — χωρίς αιτήσεις, χωρίς δικηγόρους.',
      en: 'The AI estimates the overcharge per household from price and consumption data, and the refund is paid through the tax register or the benefits account — no applications, no lawyers.',
    },
    humans: {
      el: 'Το δικαστήριο ή η αρχή ανταγωνισμού αποφασίζει το ποσό· η διανομή γίνεται αυτόματα.',
      en: 'A court or the competition authority decides the amount; distribution is automatic.',
    },
    antilogos: {
      el: 'Αν ο πρώτος που καταγγέλλει πρέπει να πληρώσει όλες τις επιστροφές, κανείς δεν θα καταγγέλλει — και η επιείκεια είναι το αποτελεσματικότερο όπλο κατά των καρτέλ. Και μια ενιαία επιστροφή σε όλους δεν αντιστοιχεί σε αυτό που πλήρωσε ο καθένας.',
      en: 'If the first to report must pay all the refunds, no one will report — and leniency is the most effective weapon against cartels. And a flat refund to all does not match what each actually paid.',
    },
    distributional: {
      el: 'Πληρώνουν τα καρτέλ. Κερδίζουν όσοι δεν έχουν ούτε χρόνο ούτε χρήματα για δικαστήρια — δηλαδή σχεδόν όλοι.',
      en: 'Cartels pay. Those with neither time nor money for courts gain — which is almost everyone.',
    },
    virtues: ['dikaiosyne', 'eudaimonia'],
    delta: { economic_security: 4, institutional_justice: 4, affiliation_trust: 2 },
  },
  {
    id: 'resilience-watch',
    n: 'Σ9',
    name: { el: 'Εποπτεία Αντοχής', en: 'Resilience Watch' },
    precedent: {
      el: 'Μετά την κατάρρευση 28 προμηθευτών ενέργειας, η βρετανική ρυθμιστική αρχή περιόρισε το 2022 τη χρήση των προκαταβολών των πελατών ως κεφάλαιο κίνησης — ενώ, κατά την Επιτροπή Δημοσίων Λογαριασμών της Βουλής, τα προβλήματα φαίνονταν από το 2018.',
      en: 'After 28 energy suppliers collapsed, Britain’s regulator in 2022 restricted using customers’ credit balances as working capital — while, per Parliament’s Public Accounts Committee, the problems had been apparent since 2018.',
    },
    plain: {
      el: 'Όσοι παρέχουν βασικές υπηρεσίες — ενέργεια, νερό, τηλεπικοινωνίες — ελέγχονται δημόσια για το αν αντέχουν μια κρίση, πριν έρθει η κρίση.',
      en: 'Providers of essential services — energy, water, telecoms — are publicly checked for whether they can withstand a crisis, before the crisis comes.',
    },
    how: {
      el: 'Η ρυθμιστική αρχή δημοσιεύει ετήσια δοκιμή αντοχής κάθε προμηθευτή. Η ΤΝ παρακολουθεί προειδοποιητικά σημάδια — χρέη, αρνητικά κεφάλαια, χρήση χρημάτων πελατών — και κάθε σήμα που μένει αναπάντητο κλιμακώνεται δημόσια.',
      en: 'The regulator publishes an annual stress test of every supplier. The AI tracks warning signs — debts, negative capital, use of customer money — and any flag left unanswered escalates publicly.',
    },
    humans: {
      el: 'Η ρυθμιστική αρχή αποφασίζει άδειες και κυρώσεις· η ΤΝ δεν αφήνει τα σημάδια να περάσουν απαρατήρητα.',
      en: 'The regulator decides licences and sanctions; the AI does not let warning signs pass unnoticed.',
    },
    antilogos: {
      el: 'Αυστηρότεροι έλεγχοι εισόδου κλείνουν την αγορά σε νέους, φθηνότερους παίκτες και αφήνουν τους μεγάλους χωρίς ανταγωνισμό· η ίδια η Βρετανία είχε ανοίξει την αγορά για να πέσουν οι τιμές.',
      en: 'Stricter entry checks close the market to new, cheaper players and leave the big ones unchallenged; Britain itself had opened the market to bring prices down.',
    },
    distributional: {
      el: 'Χάνουν οι προμηθευτές χωρίς κεφάλαια. Κερδίζουν όλοι οι πελάτες, που αλλιώς πληρώνουν το κόστος κάθε κατάρρευσης στον λογαριασμό τους.',
      en: 'Undercapitalised suppliers lose. Every customer gains, who would otherwise pay the cost of each collapse on their bill.',
    },
    virtues: ['phronesis', 'sophrosyne'],
    delta: { economic_security: 4, affiliation_trust: 2 },
  },
  {
    id: 'housing-register',
    n: 'Σ10',
    name: { el: 'Μητρώο Ενοικίων και Κλειστών Σπιτιών', en: 'The Rent and Empty-Homes Register' },
    precedent: {
      el: 'Το Γραφείο Προϋπολογισμού της Βουλής μέτρησε το 2026 2,2 εκατομμύρια κενές κατοικίες — το 34,5% του αποθέματος — και εκτίμησε ότι εξηγούν έως και το ένα τέταρτο των πρόσφατων αυξήσεων.',
      en: 'In 2026 Parliament’s Budget Office counted 2.2 million vacant dwellings — 34.5% of the stock — and estimated they explain up to a quarter of recent price rises.',
    },
    plain: {
      el: 'Ένα ανώνυμο δημόσιο μητρώο ενοικίων και ένας χάρτης κλειστών κατοικιών δείχνουν πώς κινείται η αγορά — ώστε κάθε στεγαστικό μέτρο να κρίνεται με δεδομένα.',
      en: 'An anonymised public rent register and a map of empty homes show how the market moves — so every housing measure is judged on data.',
    },
    how: {
      el: 'Τα ενοίκια προκύπτουν από τα ήδη δηλωμένα μισθωτήρια, χωρίς στοιχεία προσώπων. Η ΤΝ δείχνει ενοίκια ανά γειτονιά, κενές κατοικίες, βραχυχρόνιες μισθώσεις και τα αποτελέσματα κάθε μέτρου — golden visa, πάγωμα αδειών — μήνα με τον μήνα.',
      en: 'Rents come from already-declared leases, with no personal data. The AI shows rents by neighbourhood, empty homes, short-term lets and the effect of each measure — golden visa, licence freezes — month by month.',
    },
    humans: {
      el: 'Η Βουλή και οι δήμοι αποφασίζουν τη στεγαστική πολιτική· το μητρώο δείχνει αν λειτουργεί.',
      en: 'Parliament and municipalities decide housing policy; the register shows whether it works.',
    },
    antilogos: {
      el: 'Ένας χάρτης κλειστών σπιτιών μπορεί να γίνει πρόσχημα για παρεμβάσεις στην ιδιοκτησία, και πολλές «κενές» κατοικίες είναι ερειπωμένες, κληρονομικές ή εξοχικές — όχι αποθέματα κερδοσκοπίας.',
      en: 'A map of empty homes may become a pretext for interfering with property, and many “vacant” homes are derelict, inherited or holiday homes — not speculative stock.',
    },
    distributional: {
      el: 'Δεν χάνει κανείς από την πληροφορία. Κερδίζουν οι νέοι και οι ενοικιαστές, που πληρώνουν τα υψηλότερα ποσοστά εισοδήματος για στέγη στην ΕΕ.',
      en: 'No one loses from information. Young people and tenants gain, who pay the EU’s highest shares of income for housing.',
    },
    virtues: ['phronesis', 'eudaimonia'],
    delta: { economic_security: 4, affiliation_trust: 3, life_health: 1 },
  },
]
