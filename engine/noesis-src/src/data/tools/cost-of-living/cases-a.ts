// ΑΓΟΡΑΝΟΜΟΣ — cases 1–5: four Greek, then Canada’s bread. Facts checked
// against sources on 2026-09-30. Companies named where authorities named them;
// individuals never in headlines; presumption of innocence for open matters.

import type { ToolCase } from '../types'

export const CASES_A: readonly ToolCase[] = [
  {
    id: 'greece-dairy-cartel-2007',
    when: '2004–2026',
    place: { el: 'Ελλάδα', en: 'Greece' },
    title: {
      el: 'Οι μεγαλύτερες γαλακτοβιομηχανίες της χώρας συμφώνησαν να κρατούν χαμηλά την τιμή που πλήρωναν στους κτηνοτρόφους',
      en: 'The country’s largest dairies agreed to hold down what they paid farmers for milk',
    },
    harmed: {
      el: 'Οι κτηνοτρόφοι, που πληρώνονταν λιγότερα για το γάλα τους — και οι καταναλωτές, που έχασαν τον ανταγωνισμό στο φρέσκο γάλα και το γιαούρτι',
      en: 'Dairy farmers, paid less for their milk — and consumers, who lost competition in fresh milk and yogurt',
    },
    plain: {
      el: 'Πέντε μεγάλες γαλακτοβιομηχανίες συναντήθηκαν σε ξενοδοχείο της Λάρισας και συμφώνησαν να μην αφήνουν τους κτηνοτρόφους να αλλάζουν αγοραστή και να κρατούν χαμηλά τις τιμές παραγωγού. Πήραν πρόστιμο 48 εκατ. — πολύ κάτω από όσο επέτρεπε ο νόμος. Μόλις το 2026 ο Άρειος Πάγος άνοιξε τον δρόμο για αποζημιώσεις των κτηνοτρόφων.',
      en: 'Five large dairies met at a hotel in Larisa and agreed to stop farmers switching buyers and to hold down farm-gate prices. They were fined €48 million — far below what the law allowed. Only in 2026 did the Supreme Court open the way for farmers’ compensation.',
    },
    facts: [
      {
        el: '31 Μαΐου 2004: πέντε γαλακτοβιομηχανίες (Vivartia, ΜΕΒΓΑΛ, ΦΑΓΕ, Nestlé, Όλυμπος) συναντώνται σε ξενοδοχείο της Λάρισας και συμφωνούν να περιορίσουν τη δυνατότητα των παραγωγών να αλλάζουν αγοραστή, να κρατούν χαμηλά τις τιμές παραγωγού και να συντονίζονται στο γιαούρτι.',
        en: '31 May 2004: five dairies (Vivartia, MEVGAL, FAGE, Nestlé, Olympos) meet at a Larisa hotel and agree to restrict farmers’ ability to switch buyers, hold down producer prices and coordinate on yogurt.',
      },
      {
        el: 'Δεκέμβριος 2007: η Επιτροπή Ανταγωνισμού επιβάλλει συνολικά 48,27 εκατ. ευρώ — Vivartia 16,1 εκατ., ΜΕΒΓΑΛ 13,3 εκατ., ΦΑΓΕ 9,4 εκατ., Nestlé 6,2 εκατ., Όλυμπος 3,2 εκατ.',
        en: 'December 2007: the Competition Commission imposes €48.27 million in total — Vivartia €16.1m, MEVGAL €13.3m, FAGE €9.4m, Nestlé €6.2m, Olympos €3.2m.',
      },
      {
        el: 'Τα πρόστιμα αντιστοιχούσαν περίπου στο 12% του τζίρου των εταιρειών στο παστεριωμένο γάλα, ενώ ο νόμος επέτρεπε έως 30% — πάνω από 100 εκατ.· το χαμηλότερο ποσό συμφωνήθηκε για να υπάρξει ομόφωνη απόφαση.',
        en: 'The fines equalled about 12% of the firms’ pasteurised-milk turnover, while the law allowed up to 30% — over €100 million; the lower figure was agreed to secure a unanimous vote.',
      },
      {
        el: 'Η Επιτροπή χαρακτήρισε τη Vivartia και τη ΜΕΒΓΑΛ «πυρήνα» του καρτέλ.',
        en: 'The Commission named Vivartia and MEVGAL as the “core” of the cartel.',
      },
      {
        el: 'Μάρτιος 2026: η Ολομέλεια του Αρείου Πάγου (1/2026, 50–8) κρίνει ότι κτηνοτροφική επιχείρηση που πούλησε γάλα σε τιμές καρτέλ μπορεί να διεκδικήσει το «κόστος που εξοικονόμησαν» οι γαλακτοβιομηχανίες ως αδικαιολόγητο πλουτισμό, με εικοσαετή παραγραφή.',
        en: 'March 2026: the Supreme Court plenary (1/2026, 50–8) rules that a dairy farm that sold milk at cartel prices can claim the dairies’ “saved cost” as unjust enrichment, under a 20-year limitation.',
      },
    ],
    outcome: {
      el: 'Περίπου 48 εκατ. σε πρόστιμα· κανένα πρόγραμμα αποζημίωσης για κτηνοτρόφους ή καταναλωτές — μόνο ατομικές αγωγές, που ανοίγουν ξανά μετά το 2026.',
      en: 'About €48 million in fines; no compensation scheme for farmers or consumers — only individual lawsuits, reopened after 2026.',
    },
    breach: {
      el: 'Η εποπτεία της αγοράς υπάρχει για να μην μπορούν λίγοι μεγάλοι αγοραστές να ορίζουν μόνοι τους πόσο αξίζει η δουλειά χιλιάδων κτηνοτρόφων. Όταν το πρόστιμο κόβεται στο μισό για να βρεθεί ομοφωνία, και οι αδικημένοι περιμένουν είκοσι δύο χρόνια για έναν δρόμο αποζημίωσης, το καρτέλ δεν τιμωρείται· απλώς φορολογείται ελαφρά.',
      en: 'Market oversight exists so a few big buyers cannot decide alone what thousands of farmers’ work is worth. When the fine is cut in half to find unanimity, and the wronged wait twenty-two years for a path to compensation, the cartel is not punished; it is lightly taxed.',
    },
    patterns: ['squeezed-producer', 'tiny-fine', 'no-refund'],
    safeguards: ['chain-mirror', 'fine-mirror', 'automatic-refund'],
    counterfactual: {
      el: 'Το Κάτοπτρο της Αλυσίδας θα είχε δείξει την τιμή παραγωγού να μένει χαμηλά ενώ η τιμή στο ράφι όχι — το σημάδι ενός καρτέλ αγοραστών. Το Πρόστιμο Πάνω από το Κέρδος θα είχε κάνει δημόσια την απόφαση να επιβληθεί το 12% αντί για το 30%. Και η Επιστροφή Χωρίς Αγωγή θα είχε φτάσει στους κτηνοτρόφους χωρίς να περιμένουν τον Άρειο Πάγο.',
      en: 'The Chain Mirror would have shown the producer price staying low while the shelf price did not — the mark of a buyers’ cartel. Fines Above the Gain would have made public the decision to impose 12% instead of 30%. And Refunds Without a Lawsuit would have reached farmers without waiting for the Supreme Court.',
    },
    antilogos: {
      el: 'Η αποδεδειγμένη βλάβη αφορούσε τους κτηνοτρόφους, όχι μια αποδεδειγμένη υπερχρέωση των καταναλωτών. Οκτώ από τους 58 αρεοπαγίτες διαφώνησαν, κρίνοντας ότι οι έγκυρες συμβάσεις πώλησης αποκλείουν αξιώσεις πλουτισμού.',
      en: 'The proven harm was to farmers, not a proven consumer overcharge. Eight of the 58 Supreme Court judges dissented, holding that valid sale contracts rule out enrichment claims.',
    },
    reply: {
      el: 'Ακριβώς — και γι’ αυτό το εργαλείο κοιτάζει ολόκληρη την αλυσίδα, όχι μόνο το ράφι. Ένα καρτέλ που πιέζει τον παραγωγό δεν φαίνεται στην απόδειξη του σούπερ μάρκετ· φαίνεται μόνο αν κάποιος βάλει τις δύο τιμές δίπλα-δίπλα.',
      en: 'Exactly — which is why the tool looks at the whole chain, not only the shelf. A cartel squeezing the producer does not show on the supermarket receipt; it shows only if someone puts the two prices side by side.',
    },
    lever: {
      el: 'Ζήτησε να δημοσιεύεται κάθε μήνα η τιμή παραγωγού και η τιμή ραφιού για το γάλα, το ψωμί και τα βασικά τρόφιμα.',
      en: 'Ask that the producer price and shelf price for milk, bread and basic foods be published every month.',
    },
    scores: { harm: 6, power: 7, recurrence: 8, remedy: 8 },
    status: {
      el: 'Τα πρόστιμα ισχύουν. Μετά την απόφαση του Αρείου Πάγου (2026) η αγωγή του κτηνοτρόφου επιστρέφει στο Εφετείο.',
      en: 'The fines stand. After the Supreme Court ruling (2026) the farmer’s claim returns to the Court of Appeal.',
    },
    sources: [
      { title: 'emakedonia.gr — €48.27m fines on the milk cartel (2007)', url: 'https://www.emakedonia.gr/prostima-4827-ekat-eyro-sto-kartel-galaktos-9766' },
      { title: 'To Vima — Fines on the milk cartel (2008)', url: 'https://www.tovima.gr/2008/11/25/finance/prostima-47-633-ekat-gia-to-kartel-sto-gala-2/' },
      { title: 'Lawspot — Supreme Court plenary 1/2026 on the milk cartel', url: 'https://www.lawspot.gr/nomika-nea/kartel-etaireion-emporias-galaktos-kai-notheuse-antagonismou-apodotea-sumphona-me-tis-diataxeis-adikaiologetou-ploutismou-e-dapane-pou-exoikonometheke-olap-12026/' },
      { title: 'Mononews — 20-year limitation for dairy farmers’ compensation (2026)', url: 'https://www.mononews.gr/business/apofasi-stathmos-areiou-pagou-stin-20etia-i-paragrafi-gia-apozimioseis-galaktoparagogon-apo-megales-viomichanies' },
    ],
  },
  {
    id: 'greece-margin-cap-2022-2026',
    when: '2022–2026',
    place: { el: 'Ελλάδα', en: 'Greece' },
    title: {
      el: 'Αλυσίδες σούπερ μάρκετ και πολυεθνικές τροφίμων πήραν πρόστιμα επειδή ξεπέρασαν το νόμιμο πλαφόν στο περιθώριο κέρδους',
      en: 'Supermarket chains and food multinationals fined for exceeding the legal profit-margin ceiling',
    },
    harmed: {
      el: 'Τα νοικοκυριά που αγόραζαν βασικά αγαθά — τρόφιμα, είδη υγιεινής, βρεφικά — στα κύματα ακρίβειας του 2022–2026',
      en: 'Households buying staples — food, hygiene and baby goods — through the 2022–2026 inflation waves',
    },
    plain: {
      el: 'Στην κρίση ακρίβειας η κυβέρνηση πάγωσε τα περιθώρια κέρδους στα επίπεδα του 2021. Αλυσίδες και πολυεθνικές τα ξεπέρασαν και πήραν πρόστιμα — μικρά μπροστά στον τζίρο τους. Το πλαφόν καταργήθηκε το 2025 ως επιτυχία και επανήλθε εννέα μήνες μετά.',
      en: 'In the cost-of-living crisis the government froze profit margins at 2021 levels. Chains and multinationals exceeded them and were fined — small sums against their turnover. The cap was ended in 2025 as a success and brought back nine months later.',
    },
    facts: [
      {
        el: '16 Φεβρουαρίου 2023: το υπουργείο Ανάπτυξης επιβάλλει πρόστιμα σε τέσσερις αλυσίδες για υπέρβαση του πλαφόν — ΑΒ Βασιλόπουλος 319.900 ευρώ, Lidl Hellas 26.880, Γαλαξίας 21.397, Κρητικός 9.380· ο νόμος όριζε πρόστιμο διπλάσιο του παράνομου οφέλους.',
        en: '16 February 2023: the development ministry fines four chains for breaching the cap — AB Vassilopoulos €319,900, Lidl Hellas €26,880, Galaxias €21,397, Kritikos €9,380; the law set fines at double the illegal gain.',
      },
      {
        el: '30 Απριλίου 2025: το υπουργείο καταθέτει τροπολογία που καταργεί το πλαφόν από τις 30 Ιουνίου 2025, αποδίδοντάς του την αποκλιμάκωση του πληθωρισμού στα τρόφιμα.',
        en: '30 April 2025: the ministry tables an amendment ending the cap from 30 June 2025, crediting it with easing food inflation.',
      },
      {
        el: '6 Φεβρουαρίου 2026: η Ανεξάρτητη Αρχή Προστασίας Καταναλωτή επιβάλλει 1,05 εκατ. ευρώ σε πέντε εταιρείες για παραβάσεις του 2023–2025 — Lidl Hellas 670.925, Nestlé Hellas 144.700, ΑΒ Βασιλόπουλος 109.900, Market In 72.370, Flora Food 52.870. Από 3.168 κωδικούς που ελέγχθηκαν, 65 (περίπου 2%) ήταν σε παράβαση.',
        en: '6 February 2026: the consumer protection authority fines five firms €1.05 million for 2023–2025 breaches — Lidl Hellas €670,925, Nestlé Hellas €144,700, AB Vassilopoulos €109,900, Market In €72,370, Flora Food €52,870. Of 3,168 product codes checked, 65 (about 2%) were in breach.',
      },
      {
        el: '11 Μαρτίου 2026: με Πράξη Νομοθετικού Περιεχομένου, εν μέσω αναταραχής στις τιμές πετρελαίου, το πλαφόν επανέρχεται ως τις 30 Ιουνίου 2026 — περιθώρια σούπερ μάρκετ όχι πάνω από τον μέσο όρο του 2025, όριο στα καύσιμα, πρόστιμα έως 5 εκατ.',
        en: '11 March 2026: by Act of Legislative Content, amid oil-price turmoil, the cap returns until 30 June 2026 — supermarket margins no higher than 2025 averages, a limit on fuel, fines up to €5 million.',
      },
      {
        el: '13 Μαρτίου 2026: η λίστα επεκτείνεται σε φρούτα και λαχανικά μετά από αυξήσεις λιανικής έως 54%.',
        en: '13 March 2026: the list is widened to fruit and vegetables after retail rises of up to 54%.',
      },
    ],
    outcome: {
      el: 'Επαναλαμβανόμενα πρόστιμα, μικρά για επιχειρήσεις με μεγάλο τζίρο· ρύθμιση που ανοιγοκλείνει ανάλογα με την κρίση.',
      en: 'Repeated fines, small for firms with large turnovers; regulation switched on and off with each crisis.',
    },
    breach: {
      el: 'Όταν οι τιμές ανεβαίνουν για όλους, το περιθώριο κέρδους είναι το σημείο όπου κρίνεται αν η κρίση μοιράζεται ή αν γίνεται ευκαιρία. Ένα πλαφόν που ανοιγοκλείνει, με πρόστιμα που χωρούν άνετα στον προϋπολογισμό μιας αλυσίδας, δεν είναι εποπτεία· είναι συναγερμός που χτυπά μόνο όταν η φωτιά έχει ήδη ανάψει.',
      en: 'When prices rise for everyone, the profit margin is where it is decided whether the crisis is shared or becomes an opportunity. A cap switched on and off, with fines that fit easily in a chain’s budget, is not oversight; it is an alarm that sounds only once the fire is already lit.',
    },
    patterns: ['crisis-margin', 'tiny-fine'],
    safeguards: ['chain-mirror', 'live-price', 'fine-mirror'],
    counterfactual: {
      el: 'Το Κάτοπτρο της Αλυσίδας και οι Τιμές σε Πραγματικό Χρόνο θα έκαναν τα περιθώρια ορατά μόνιμα — όχι μόνο όταν ψηφίζεται έκτακτο μέτρο. Και το Πρόστιμο Πάνω από το Κέρδος θα έδειχνε δημόσια αν τα 670.000 ευρώ ήταν περισσότερα ή λιγότερα από όσα κέρδισε η παράβαση.',
      en: 'The Chain Mirror and Live Prices would have made margins permanently visible — not only when an emergency measure is voted. And Fines Above the Gain would have shown publicly whether €670,000 was more or less than the breach earned.',
    },
    antilogos: {
      el: 'Μόνο το 2% των κωδικών ήταν σε παράβαση. Οι αλυσίδες υποστήριξαν ότι ο υπολογισμός αγνοούσε πραγματικά λειτουργικά κόστη και προσφορές. Και ένα πλαφόν στο περιθώριο δεν μειώνει τις τιμές — ό,τι ήταν ακριβό το 2021 έμεινε ακριβό.',
      en: 'Only 2% of codes were in breach. The chains argued the calculation ignored real operating costs and promotions. And a margin cap does not lower prices — whatever was dear in 2021 stayed dear.',
    },
    reply: {
      el: 'Ακριβώς: αν η συντριπτική πλειονότητα των τιμών είναι τίμια, η μόνιμη διαφάνεια δεν βλάπτει κανέναν τίμιο — και γλιτώνει τη χώρα από έκτακτα μέτρα που ανοιγοκλείνουν. Το ζητούμενο δεν είναι το πλαφόν· είναι να φαίνεται πάντα πού πηγαίνει κάθε αύξηση.',
      en: 'Exactly: if the vast majority of prices are honest, permanent transparency harms no honest seller — and spares the country emergency measures switched on and off. The goal is not the cap; it is always seeing where each rise goes.',
    },
    lever: {
      el: 'Ζήτησε τα περιθώρια κέρδους στα βασικά αγαθά να δημοσιεύονται μόνιμα, όχι μόνο σε περιόδους κρίσης.',
      en: 'Ask that margins on staples be published permanently, not only in times of crisis.',
    },
    scores: { harm: 7, power: 7, recurrence: 9, remedy: 8 },
    status: {
      el: 'Τα πρόστιμα έχουν επιβληθεί· οι προσφυγές των εταιρειών δεν επιβεβαιώθηκαν. Δεν επιβεβαιώθηκε αν το πλαφόν παρατάθηκε πέρα από τις 30 Ιουνίου 2026.',
      en: 'The fines have been imposed; the outcomes of company challenges were not confirmed. Whether the cap was extended beyond 30 June 2026 was not confirmed.',
    },
    sources: [
      { title: 'Capital.gr — The four supermarket chains fined for profiteering (2023)', url: 'https://www.capital.gr/epixeiriseis/3699147/upourgeio-anaptuxis-oi-tesseris-alusides-souper-market-pou-epebale-prostimo-gia-aisxrokerdeia/' },
      { title: 'Ministry of Development — Amendment ending the cap (2025)', url: 'https://www.mindev.gov.gr/katathesi-tropologias-gia-tin-oloklirosi/' },
      { title: 'HuffPost Greece — €1.05m fines on three chains and two multinationals (2026)', url: 'https://www.huffingtonpost.gr/ikonomia/prostima-105-ekat-evro-se-3-megales-alysides-souper-market-kai-2-polyethnikes-gia-tin-ypervasi-plafon-sta-kerdi-poies-einai/' },
      { title: 'NewsIT — Margin cap on fuel and supermarket goods (2026)', url: 'https://www.newsit.gr/oikonomia/xristika/metra-kata-tis-akriveias-plafon-sto-perithorio-kerdous-se-kaysima-kai-proionta-souper-market-ti-allazei-gia-tis-epixeiriseis-prostima-eos-5-ekat-eyro-gia-tin-aisxrokerdeia/4622728/' },
      { title: 'EEA — Cap extended to fruit and vegetables (2026)', url: 'https://www.eea.gr/arthra-eea/plafon-kerdoys-se-perissotera-proionta-sti-lista-kai-froyta-kai-lachanika-ayxiseis-eos-kai-54-2/' },
    ],
  },
  {
    id: 'greece-power-windfall-2021',
    when: '2021–2024',
    place: { el: 'Ελλάδα', en: 'Greece' },
    title: {
      el: 'Οι ηλεκτροπαραγωγοί κράτησαν υπερκέρδη όταν η χονδρεμπορική τιμή έσπαγε ρεκόρ· το κράτος ανέκτησε το 90% εκ των υστέρων',
      en: 'Power generators kept windfall margins as wholesale prices hit records; the state clawed back 90% after the fact',
    },
    harmed: {
      el: 'Νοικοκυριά και επιχειρήσεις που πλήρωναν λογαριασμούς ρεύματος στην ενεργειακή κρίση — και οι φορολογούμενοι που χρηματοδότησαν τις επιδοτήσεις',
      en: 'Households and businesses paying electricity bills in the energy crisis — and taxpayers who funded the subsidies',
    },
    plain: {
      el: 'Στην ενεργειακή κρίση η χονδρεμπορική τιμή του ρεύματος έσπασε κάθε ρεκόρ, και οι παραγωγοί είχαν υπερκέρδη εκατοντάδων εκατομμυρίων. Το κράτος τα υπολόγισε και τα φορολόγησε στο 90% — μήνες αργότερα, ενώ οι λογαριασμοί είχαν ήδη πληρωθεί.',
      en: 'In the energy crisis the wholesale power price broke every record, and producers made windfall profits of hundreds of millions. The state calculated them and levied 90% — months later, after the bills had already been paid.',
    },
    facts: [
      {
        el: 'Α΄ τρίμηνο 2022: η χονδρεμπορική τιμή του ρεύματος στην Ελλάδα φτάνει κατά μέσο όρο τα 235,55 ευρώ/MWh, με ρεκόρ 426,90 ευρώ/MWh στις 8 Μαρτίου 2022.',
        en: 'Q1 2022: the Greek wholesale power price averages €235.55/MWh, with a record €426.90/MWh on 8 March 2022.',
      },
      {
        el: 'Μάιος 2022: η Ρυθμιστική Αρχή Ενέργειας υπολογίζει υπερκέρδη 591 εκατ. ευρώ για τους μεγάλους παραγωγούς για το διάστημα Οκτωβρίου 2021 – Μαρτίου 2022· η κυβέρνηση ανακοινώνει έκτακτη εισφορά 90%.',
        en: 'May 2022: the Energy Regulatory Authority calculates windfall profits of €591 million for large producers for October 2021 – March 2022; the government announces a 90% levy.',
      },
      {
        el: 'Η εισφορά είναι αναδρομική για Οκτώβριο 2021 – Ιούνιο 2022, με αναμενόμενα έσοδα 373,5 εκατ.· από τον Ιούλιο 2022 ένας μηχανισμός πλαφόν στις πληρωμές των παραγωγών αποφέρει πάνω από 2,7 δισ.',
        en: 'The levy is retroactive for October 2021 – June 2022, expected to raise €373.5 million; from July 2022 a cap on producer payments raises over €2.7 billion.',
      },
      {
        el: 'Σεπτέμβριος 2023: παραγωγοί προσβάλλουν τη μέθοδο, υποστηρίζοντας ότι το 2021 ήταν στρεβλή βάση σύγκρισης και ότι οι μονάδες φυσικού αερίου δεν είχαν πραγματικά υπερκέρδη, αφού ανέβηκε και το κόστος καυσίμου.',
        en: 'September 2023: producers challenge the method, arguing 2021 was a distorted baseline and gas units had no true windfall, since fuel costs rose too.',
      },
      {
        el: 'Οκτώβριος 2024: το Συμβούλιο της Επικρατείας (185/2024) κρίνει την εισφορά συνταγματική και συμβατή με το δίκαιο της ΕΕ — «όχι φόρο» αλλά μέτρο για τη λειτουργία της αγοράς, σημειώνοντας ότι οι παραγωγοί κράτησαν το αναμενόμενο κέρδος και μέρος των υπερκερδών.',
        en: 'October 2024: the Council of State (185/2024) upholds the levy as constitutional and EU-compatible — “not a tax” but a market-functioning measure, noting producers kept their expected profit and part of the windfall.',
      },
    ],
    outcome: {
      el: 'Εισφορά 90% (περίπου 370 εκατ.) και μηχανισμός πλαφόν (πάνω από 2,7 δισ.)· τα έσοδα χρηματοδότησαν επιδοτήσεις λογαριασμών.',
      en: 'A 90% levy (about €370 million) and a cap mechanism (over €2.7 billion); proceeds funded bill subsidies.',
    },
    breach: {
      el: 'Όταν το ρεύμα γίνεται είδος πολυτελείας μέσα σε μια χειμωνιάτικη κρίση, οι πολίτες έχουν δικαίωμα να ξέρουν τι πληρώνουν. Μια ανάκτηση υπερκερδών που έρχεται μήνες μετά διορθώνει τα δημόσια οικονομικά — αλλά όχι τον λογαριασμό που πληρώθηκε με στερήσεις.',
      en: 'When electricity becomes a luxury in a winter crisis, citizens have a right to know what they are paying for. A windfall clawback that arrives months later mends the public finances — but not the bill paid through hardship.',
    },
    patterns: ['crisis-margin', 'opaque-bill'],
    safeguards: ['bill-breakdown'],
    counterfactual: {
      el: 'Ο Λογαριασμός που Εξηγείται θα έκανε τον ίδιο υπολογισμό της Ρυθμιστικής Αρχής κάθε μήνα, δημόσια, την ώρα της κρίσης — και θα έδειχνε σε κάθε λογαριασμό τι ήταν κόστος και τι περιθώριο. Η παρέμβαση θα ερχόταν πριν πληρωθούν οι λογαριασμοί, όχι μετά.',
      en: 'A Bill That Explains Itself would have done the regulator’s same calculation every month, publicly, during the crisis — and shown on each bill what was cost and what was margin. Intervention would have come before the bills were paid, not after.',
    },
    antilogos: {
      el: 'Δεν επρόκειτο για καρτέλ: καμία αρχή δεν βρήκε συμπαιγνία· τα υπερκέρδη προήλθαν από τον σχεδιασμό της αγοράς σε ένα σοκ φυσικού αερίου. Οι παραγωγοί είχαν πραγματικό επιχείρημα για το κόστος, και το δικαστήριο έκρινε με βάση το δημόσιο συμφέρον, όχι απόδειξη παρανομίας.',
      en: 'This was not a cartel: no authority found collusion; the windfall came from market design in a gas shock. Producers had a real cost argument, and the court ruled on public interest, not proof of wrongdoing.',
    },
    reply: {
      el: 'Ακριβώς γι’ αυτό η πρόταση δεν ψάχνει ενόχους αλλά διαφάνεια. Όταν ένας νόμιμος μηχανισμός αγοράς παράγει υπερκέρδη εκατοντάδων εκατομμυρίων μέσα σε έξι μήνες, οι πολίτες πρέπει να το βλέπουν την ώρα που συμβαίνει — ώστε η πολιτική απάντηση να έρχεται εγκαίρως.',
      en: 'That is exactly why the proposal seeks transparency, not culprits. When a lawful market mechanism produces hundreds of millions in windfalls within six months, citizens must see it as it happens — so the political response comes in time.',
    },
    lever: {
      el: 'Ζήτησε κάθε λογαριασμός ρεύματος να δείχνει σε μία γραμμή το περιθώριο του προμηθευτή δίπλα στη χονδρεμπορική τιμή του μήνα.',
      en: 'Ask that every electricity bill show the supplier’s margin on one line beside that month’s wholesale price.',
    },
    scores: { harm: 8, power: 8, recurrence: 7, remedy: 8 },
    status: {
      el: 'Κλειστή — η εισφορά κρίθηκε νόμιμη από το ΣτΕ (2024). Καμία κατηγορία παρανομίας κατά παραγωγών.',
      en: 'Closed — the levy was upheld by the Council of State (2024). No allegation of wrongdoing against producers.',
    },
    sources: [
      { title: 'Argus — Greece to tax power generators’ windfall profits (2022)', url: 'https://www.argusmedia.com/en/news/2330224-greece-to-tax-power-generators-windfall-profits' },
      { title: 'Euronews — How countries are taxing energy windfalls (2022)', url: 'https://www.euronews.com/next/2022/12/08/energy-crisis-tax' },
      { title: 'Energypress — Windfall levy before the Council of State (2023)', url: 'https://energypress.gr/news/sto-symboylio-tis-epikrateias-i-forologisi-ton-yperkerdon-ton-ilektroparagogon-i' },
      { title: 'EEA — Council of State upholds the windfall levy (2024)', url: 'https://www.eea.gr/arthra-eea/syntagmatiki-krithike-apo-to-symvoylio-tis-epikrateias-i-ektakti-eisfora-sta-yperkerdi-ton-paragogon-energeias/' },
    ],
  },
  {
    id: 'greece-housing-2018-2026',
    when: '2018–2026',
    place: { el: 'Ελλάδα — Αττική, Θεσσαλονίκη, νησιά', en: 'Greece — Attica, Thessaloniki, islands' },
    title: {
      el: 'Η στεγαστική πολιτική έμεινε πίσω από τη «χρυσή βίζα» και τη βραχυχρόνια μίσθωση — ενώ οι ενοικιαστές πλήρωναν το μεγαλύτερο βάρος στην ΕΕ',
      en: 'Housing policy lagged behind the golden visa and short-term letting — while tenants carried the heaviest burden in the EU',
    },
    harmed: {
      el: 'Ενοικιαστές και όσοι αγοράζουν πρώτη κατοικία — ιδίως οι νέοι και τα χαμηλά εισοδήματα σε Αθήνα, Θεσσαλονίκη και τουριστικά νησιά',
      en: 'Tenants and first-time buyers — especially young people and low-income households in Athens, Thessaloniki and tourist islands',
    },
    plain: {
      el: 'Σχεδόν ένας στους τρεις ανθρώπους στην Ελλάδα ξοδεύει πάνω από το 40% του εισοδήματός του για στέγη — το υψηλότερο ποσοστό στην ΕΕ. Οι τιμές σχεδόν διπλασιάστηκαν σε Αθήνα και Θεσσαλονίκη, ενώ 2,2 εκατομμύρια σπίτια μένουν κενά. Τα μέτρα ήρθαν αργά, και ακόμη δεν υπάρχει δημόσιο μητρώο ενοικίων.',
      en: 'Almost one in three people in Greece spends over 40% of income on housing — the highest rate in the EU. Prices nearly doubled in Athens and Thessaloniki, while 2.2 million homes stand empty. Measures came late, and there is still no public rent register.',
    },
    facts: [
      {
        el: '2024: το 28,9% των ανθρώπων στην Ελλάδα ζει σε νοικοκυριά που ξοδεύουν πάνω από το 40% του διαθέσιμου εισοδήματος για στέγη — το υψηλότερο ποσοστό στην ΕΕ, έναντι μέσου όρου 8,2% (Eurostat).',
        en: '2024: 28.9% of people in Greece live in households spending over 40% of disposable income on housing — the highest rate in the EU, against an 8.2% average (Eurostat).',
      },
      {
        el: 'Οι τιμές διαμερισμάτων αυξάνονται 13,9% το 2023, 9,1% το 2024 και 7,8% το 2025 (Τράπεζα της Ελλάδος).',
        en: 'Apartment prices rise 13.9% in 2023, 9.1% in 2024 and 7.8% in 2025 (Bank of Greece).',
      },
      {
        el: '2 Απριλίου 2024: η Βουλή αυξάνει το ελάχιστο όριο της «χρυσής βίζας» στα 800.000 ευρώ σε Αττική, Θεσσαλονίκη, Μύκονο, Σαντορίνη και μεγάλα νησιά — από 250.000–500.000 ευρώ.',
        en: '2 April 2024: Parliament raises the golden-visa minimum to €800,000 in Attica, Thessaloniki, Mykonos, Santorini and large islands — from €250,000–€500,000.',
      },
      {
        el: 'Από 1 Ιανουαρίου 2025 απαγορεύονται νέες εγγραφές βραχυχρόνιας μίσθωσης στο κέντρο της Αθήνας· τον Ιούλιο 2025 οι καταχωρίσεις φτάνουν τα 245.944 ακίνητα (+57.000 σε έναν χρόνο).',
        en: 'From 1 January 2025 new short-term-rental registrations are banned in central Athens; in July 2025 listings reach 245,944 properties (+57,000 in a year).',
      },
      {
        el: '24 Ιουνίου 2026: μελέτη του Γραφείου Προϋπολογισμού της Βουλής βρίσκει αύξηση τιμών 95,7% στην Αθήνα και 94% στη Θεσσαλονίκη (2018–2025) και 2,2 εκατ. κενές κατοικίες — το 34,5% του αποθέματος.',
        en: '24 June 2026: a Parliamentary Budget Office study finds prices up 95.7% in Athens and 94% in Thessaloniki (2018–2025) and 2.2 million vacant dwellings — 34.5% of the stock.',
      },
    ],
    outcome: {
      el: 'Αυστηρότερα όρια στη «χρυσή βίζα» και πάγωμα βραχυχρόνιων μισθώσεων· καμία υπόθεση επιβολής κατά εταιρείας — πρόκειται για αποτυχία πολιτικής, όχι για καρτέλ.',
      en: 'Tighter golden-visa thresholds and a short-term-rental freeze; no enforcement case against any firm — a policy failure, not a cartel.',
    },
    breach: {
      el: 'Η στέγη δεν είναι απλώς αγαθό· είναι η προϋπόθεση για να μείνει ένας νέος άνθρωπος στην πόλη του, να κάνει οικογένεια, να ζήσει καλά. Όταν τα μέτρα έρχονται χρόνια μετά το πρόβλημα, και κανείς δεν μετρά δημόσια τα ενοίκια ούτε τα κλειστά σπίτια, η πολιτική γίνεται στα τυφλά — και το λογαριασμό τον πληρώνουν οι ενοικιαστές.',
      en: 'Housing is not just a good; it is the condition for a young person to stay in their city, start a family, live well. When measures arrive years after the problem, and no one publicly counts rents or empty homes, policy is made blind — and tenants pay the bill.',
    },
    patterns: ['housing-squeeze', 'late-regulator'],
    safeguards: ['housing-register'],
    counterfactual: {
      el: 'Το Μητρώο Ενοικίων και Κλειστών Σπιτιών θα είχε δείξει από το 2018, γειτονιά προς γειτονιά, πόσο ανέβαιναν τα ενοίκια και πόσα σπίτια έμεναν κλειστά ή γίνονταν βραχυχρόνιες μισθώσεις — και θα είχε μετρήσει αν η «χρυσή βίζα» και το πάγωμα αδειών έπιασαν τόπο, αντί για εκτιμήσεις χρόνια μετά.',
      en: 'The Rent and Empty-Homes Register would have shown from 2018, neighbourhood by neighbourhood, how fast rents rose and how many homes stood empty or became short-term lets — and would have measured whether the golden visa and licence freeze worked, instead of estimates years later.',
    },
    antilogos: {
      el: 'Κατά το Γραφείο Προϋπολογισμού, οι αποκλειστικά βραχυχρόνιες μισθώσεις είναι μόλις το 0,4% του αποθέματος και ανέβασαν τα ενοίκια το πολύ 1,8%· η Αθήνα είχε μάλιστα τη βραδύτερη άνοδο τιμών στα τέλη του 2025. Καμία αρχή δεν βρήκε συμπαιγνία ιδιοκτητών ή πλατφορμών.',
      en: 'According to the Budget Office, short-term-only lets are just 0.4% of the stock and raised rents by at most 1.8%; Athens even had the slowest price growth in late 2025. No authority found collusion by landlords or platforms.',
    },
    reply: {
      el: 'Αυτά τα στοιχεία δείχνουν ακριβώς γιατί χρειάζεται μητρώο: χωρίς δεδομένα, η δημόσια συζήτηση κατηγορεί ό,τι είναι ορατό — τις πλατφόρμες — ενώ οι 2,2 εκατομμύρια κλειστές κατοικίες μένουν αόρατες. Μια πολιτική που μετρά βρίσκει τη σωστή αιτία.',
      en: 'These figures show exactly why a register is needed: without data, public debate blames what is visible — the platforms — while 2.2 million empty homes stay invisible. A policy that measures finds the right cause.',
    },
    lever: {
      el: 'Ζήτησε ένα ανώνυμο δημόσιο μητρώο ενοικίων ανά γειτονιά, από τα μισθωτήρια που ήδη δηλώνονται στην ΑΑΔΕ.',
      en: 'Ask for an anonymised public rent register by neighbourhood, built from leases already declared to the tax authority.',
    },
    scores: { harm: 9, power: 6, recurrence: 9, remedy: 7 },
    status: {
      el: 'Ζήτημα πολιτικής — κανείς δεν κατηγορείται. Το πάγωμα στην Αθήνα ισχύει ως το τέλος του 2026· το όριο των 800.000 ευρώ από το 2024.',
      en: 'A policy case — no one is accused. The Athens freeze runs to end-2026; the €800,000 threshold since 2024.',
    },
    sources: [
      { title: 'Eurostat — Living conditions in Europe: housing', url: 'https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Living_conditions_in_Europe_-_housing' },
      { title: 'Balkan Insight — New golden visa prices aim to fight housing crisis (2024)', url: 'https://balkaninsight.com/2024/04/03/new-greek-golden-visa-prices-aim-to-fight-housing-crisis/bi/' },
      { title: 'Keep Talking Greece — Short-term rentals limited in five regions (2025)', url: 'https://www.keeptalkinggreece.com/2025/09/24/short-term-rentals-limit-greece-5-regions/' },
      { title: 'GTP — Greece’s 2.2 million vacant homes a key factor in housing crisis (2026)', url: 'https://news.gtp.gr/2026/06/24/study-greeces-2-2-million-vacant-homes-key-factor-in-housing-crisis/' },
      { title: 'Bank of Greece — Residential property prices (2025)', url: 'https://www.bankofgreece.gr/en/news-and-media/press-office/news-list/news?announcement=f1380e7b-543f-42d2-a285-f70eadc54c7b' },
    ],
  },
  {
    id: 'canada-bread-2001-2015',
    when: '2001–2025',
    place: { el: 'Καναδάς', en: 'Canada' },
    title: {
      el: 'Οι μεγαλύτεροι αρτοποιοί και μια αλυσίδα σούπερ μάρκετ του Καναδά συντόνιζαν τις αυξήσεις στο ψωμί για πάνω από μια δεκαετία — η αλυσίδα που ομολόγησε πήρε ασυλία',
      en: 'Canada’s biggest bakers and a grocery chain coordinated bread price rises for over a decade — the chain that confessed got immunity',
    },
    harmed: { el: 'Τα καναδικά νοικοκυριά που αγόραζαν συσκευασμένο ψωμί — πάνω από 20 εκατομμύρια άνθρωποι', en: 'Canadian households buying packaged bread — over 20 million people' },
    plain: {
      el: 'Για χρόνια, οι αυξήσεις στο ψωμί του Καναδά ακολουθούσαν έναν άγραφο κανόνα: περίπου 7 σεντς στη χονδρική, 10 στη λιανική. Η αλυσίδα που το ομολόγησε πρώτη δεν διώχθηκε ποτέ και έδωσε δωροκάρτες 25 δολαρίων. Ένας αρτοποιός καταδικάστηκε σε πρόστιμο-ρεκόρ.',
      en: 'For years, bread price rises in Canada followed an unwritten rule: about 7 cents wholesale, 10 retail. The chain that confessed first was never prosecuted and handed out $25 gift cards. One bakery was given a record fine.',
    },
    facts: [
      {
        el: '19 Δεκεμβρίου 2017: η Loblaw και η George Weston παραδέχονται ότι συμμετείχαν σε ρύθμιση για τον συντονισμό των τιμών του συσκευασμένου ψωμιού από το 2001 ως το 2015· το είχαν καταγγείλει οι ίδιες το 2015 ως αιτούσες ασυλία, οπότε δεν θα αντιμετώπιζαν ποινικές διώξεις.',
        en: '19 December 2017: Loblaw and George Weston admit taking part in an arrangement to coordinate packaged-bread prices from 2001 to 2015; they had reported it themselves in 2015 as immunity applicants, so would face no criminal charges.',
      },
      {
        el: 'Ιανουάριος 2018: έγγραφα της Υπηρεσίας Ανταγωνισμού αναφέρουν ότι τουλάχιστον 7 εταιρείες ακολουθούσαν μια «σύμβαση 7/10» — περίπου 7 σεντς αύξηση στη χονδρική και 10 στη λιανική· οι ισχυρισμοί δεν έχουν αποδειχθεί στο δικαστήριο.',
        en: 'January 2018: Competition Bureau documents allege at least 7 companies followed a “7/10 convention” — about 7 cents wholesale and 10 cents retail increases; the allegations are unproven in court.',
      },
      {
        el: '21 Ιουνίου 2023: δικαστήριο του Οντάριο επιβάλλει στην Canada Bread πρόστιμο 50 εκατ. δολαρίων — το μεγαλύτερο για καρτέλ τιμών σε καναδικό δικαστήριο — αφού ομολόγησε ενοχή για αυξήσεις του 2007 και του 2011.',
        en: '21 June 2023: an Ontario court fines Canada Bread C$50 million — the highest price-fixing fine ever imposed by a Canadian court — after it pleads guilty over price rises in 2007 and 2011.',
      },
      {
        el: 'Ιούνιος 2023: η Υπηρεσία Ανταγωνισμού δηλώνει ότι συνεχίζει να ερευνά φερόμενες συμπράξεις και άλλων αλυσίδων — που αρνούνται κάθε εμπλοκή.',
        en: 'June 2023: the Competition Bureau says it continues investigating alleged price-fixing by other chains — which deny any involvement.',
      },
      {
        el: '7 Μαΐου 2025: εγκρίνεται συλλογικός συμβιβασμός 500 εκατ. δολαρίων με τη Loblaw και τη George Weston — περίπου 25 δολάρια ανά άτομο.',
        en: '7 May 2025: a C$500 million class settlement with Loblaw and George Weston is approved — about $25 per person.',
      },
    ],
    outcome: {
      el: 'Μία ποινική καταδίκη (50 εκατ.)· ασυλία για όσους ομολόγησαν πρώτοι· συμβιβασμός 500 εκατ., περίπου 25 δολάρια ανά άτομο.',
      en: 'One criminal conviction (C$50 million); immunity for those who confessed first; a C$500 million settlement, about $25 per person.',
    },
    breach: {
      el: 'Το ψωμί είναι το πιο βασικό αγαθό κάθε σπιτιού. Όταν οι τιμές του ανεβαίνουν με έναν άγραφο κανόνα για δεκατέσσερα χρόνια χωρίς να το δει καμία αρχή, και η αποκάλυψη έρχεται μόνο επειδή ένας συμμετέχων αποφάσισε να μιλήσει, η εποπτεία δεν εντόπισε τίποτα· απλώς περίμενε.',
      en: 'Bread is every home’s most basic good. When its prices rise by an unwritten rule for fourteen years without any authority seeing it, and exposure comes only because a participant chose to talk, oversight detected nothing; it simply waited.',
    },
    patterns: ['lockstep-rise', 'no-refund', 'late-regulator'],
    safeguards: ['lockstep-screen', 'automatic-refund', 'live-price'],
    counterfactual: {
      el: 'Ο Ανιχνευτής Ταυτόχρονων Αυξήσεων θα είχε δει τον κανόνα «7/10» στα δεδομένα τιμών μέσα σε λίγους μήνες — σταθερή αναλογία χονδρικής και λιανικής, ίδιες μέρες σε όλες τις αλυσίδες. Και η Επιστροφή Χωρίς Αγωγή θα είχε κάνει την επιείκεια να καλύπτει το πρόστιμο, όχι την αποζημίωση των νοικοκυριών.',
      en: 'The Lockstep-Rise Screen would have seen the “7/10” rule in price data within months — a fixed wholesale-to-retail ratio, the same days across every chain. And Refunds Without a Lawsuit would have made leniency cover the fine, not households’ compensation.',
    },
    antilogos: {
      el: 'Η ασυλία είναι το τίμημα του προγράμματος επιείκειας που αποκάλυψε το καρτέλ — χωρίς αυτήν ίσως δεν θα το μαθαίναμε ποτέ. Η αποδεδειγμένη ποινικά συμπεριφορά αφορά δύο αυξήσεις, όχι ολόκληρο το φερόμενο σχέδιο δεκαέξι ετών.',
      en: 'Immunity is the price of the leniency programme that exposed the cartel — without it we might never have known. The criminally proven conduct covers two price rises, not the full alleged sixteen-year scheme.',
    },
    reply: {
      el: 'Η επιείκεια είναι πολύτιμη — αλλά μια αγορά που μαθαίνει για ένα καρτέλ μόνο όταν ο πρωταίτιος αποφασίσει να σωθεί, δεν εποπτεύεται. Ο ανιχνευτής δεν αντικαθιστά την επιείκεια· κάνει τη σιωπή πιο επικίνδυνη, ώστε οι ομολογίες να έρχονται νωρίτερα.',
      en: 'Leniency is valuable — but a market that learns of a cartel only when the ringleader decides to save itself is not being overseen. The screen does not replace leniency; it makes silence riskier, so confessions come sooner.',
    },
    lever: {
      el: 'Ζήτησε από την Επιτροπή Ανταγωνισμού να δημοσιεύει κάθε χρόνο έλεγχο παράλληλων αυξήσεων στα βασικά αγαθά.',
      en: 'Ask the Competition Commission to publish a yearly screen of parallel price rises in staples.',
    },
    scores: { harm: 6, power: 8, recurrence: 8, remedy: 8 },
    status: {
      el: 'Η καταδίκη της Canada Bread είναι οριστική. Οι άλλες αλυσίδες αρνούνται κάθε εμπλοκή, δεν έχουν κατηγορηθεί και τεκμαίρονται αθώες.',
      en: 'Canada Bread’s conviction is final. The other chains deny involvement, have not been charged and are presumed innocent.',
    },
    sources: [
      { title: 'Canadian Grocer — Loblaw and George Weston admit bread price-fixing (2017)', url: 'https://canadiangrocer.com/loblaw-george-weston-admit-bread-price-fixing' },
      { title: 'The Daily Meal — Canadian bread wholesalers’ price-fixing scheme (2018)', url: 'https://www.thedailymeal.com/eat/canadian-bread-wholesalers-price-fixing-scheme/' },
      { title: 'Competition Bureau Canada — Canada Bread sentenced to $50 million fine (2023)', url: 'https://www.canada.ca/en/competition-bureau/news/2023/06/canada-bread-sentenced-to-50-million-fine-after-pleading-guilty-to-fixing-wholesale-bread-prices.html' },
      { title: 'Canadian Grocer — Judge approves $500m settlement (2025)', url: 'https://canadiangrocer.com/judge-approves-500m-settlement-loblaw-george-weston-bread-price-fixing-case' },
    ],
  },
]
