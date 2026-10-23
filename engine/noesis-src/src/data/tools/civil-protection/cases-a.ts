// ΑΙΓΙΣ — cases 1–5: three Greek, then L'Aquila and the Ahr valley. Facts
// checked against sources on 2026-09-30. The office in the headline, never
// the officer; acquittals stated as acquittals; presumption of innocence for
// every open case.

import type { ToolCase } from '../types'

export const CASES_A: readonly ToolCase[] = [
  {
    id: 'mati-2018',
    when: '2018–2026',
    place: { el: 'Μάτι, Ανατολική Αττική', en: 'Mati, East Attica' },
    title: {
      el: 'Η ηγεσία της Πυροσβεστικής και η Γενική Γραμματεία Πολιτικής Προστασίας καταδικάστηκαν για το Μάτι — η περιφέρεια και οι δήμαρχοι αθωώθηκαν δύο φορές',
      en: 'Fire Service leadership and Civil Protection’s secretary-general convicted for Mati — the region and the mayors acquitted twice',
    },
    harmed: {
      el: '104 νεκροί (οι μετρήσεις κυμαίνονται από 102 ως 104) — άνθρωποι που κάηκαν εγκλωβισμένοι στα αυτοκίνητα ή πνίγηκαν στη θάλασσα',
      en: '104 dead (counts range from 102 to 104) — people burned trapped in their cars or drowned in the sea',
    },
    plain: {
      el: 'Η φωτιά στο Μάτι σκότωσε πάνω από εκατό ανθρώπους. Η ανεξάρτητη επιτροπή βρήκε ότι δεν υπήρχε σχέδιο εκκένωσης ούτε δρόμοι διαφυγής, και ότι το σύστημα 112 είχε νομοθετηθεί το 2014 αλλά δεν εφαρμόστηκε ποτέ. Επτά χρόνια μετά, καταδικάστηκε αμετάκλητα η επιχειρησιακή ηγεσία — οι αιρετοί αθωώθηκαν.',
      en: 'The Mati fire killed more than a hundred people. The independent committee found no evacuation plan and no escape routes, and that the 112 system had been legislated in 2014 but never implemented. Seven years on, the operational leadership was finally convicted — the elected officials were acquitted.',
    },
    facts: [
      {
        el: '23 Ιουλίου 2018: η φωτιά σαρώνει το Μάτι με ανέμους ως 120 χλμ./ώρα· άνθρωποι καίγονται σε αυτοκίνητα κολλημένα στην κίνηση και άλλοι πνίγονται μπαίνοντας στη θάλασσα.',
        en: '23 July 2018: the fire sweeps through Mati with winds up to 120 km/h; people burn in cars stuck in traffic and others drown wading into the sea.',
      },
      {
        el: 'Φεβρουάριος 2019: η ανεξάρτητη επιτροπή εμπειρογνωμόνων διαπιστώνει «κανένα σχέδιο εκκένωσης, κανέναν καθορισμένο δρόμο διαφυγής», 45 φορείς στην πυροπροστασία «χωρίς σαφή αλυσίδα διοίκησης», και ένα σύστημα έγκαιρης προειδοποίησης 112 νομοθετημένο το 2014 αλλά ποτέ εφαρμοσμένο.',
        en: 'February 2019: the independent expert committee finds “no evacuation plans, no designated escape routes,” 45 agencies in fire protection with “no clear chain of command,” and a 112 early-warning system legislated in 2014 but never implemented.',
      },
      {
        el: '29 Απριλίου 2024: σε πρώτο βαθμό καταδικάζονται 6 από 21 κατηγορουμένους με ποινές σε αναστολή ή εξαγοράσιμες· αθωώνονται 15, ανάμεσά τους ο γενικός γραμματέας Πολιτικής Προστασίας, η περιφερειάρχης Αττικής και τρεις δήμαρχοι ή αντιδήμαρχοι.',
        en: '29 April 2024: at first instance 6 of 21 defendants are convicted with suspended or convertible sentences; 15 are acquitted, among them the Civil Protection secretary-general, the Attica regional governor and three mayors or deputy mayors.',
      },
      {
        el: '3–4 Ιουνίου 2025: στο Εφετείο καταδικάζονται 10 — ανάμεσά τους 8 ανώτατοι αξιωματικοί της Πυροσβεστικής και ο πρώην γενικός γραμματέας Πολιτικής Προστασίας· τέσσερις οδηγούνται απευθείας στη φυλακή με 5 χρόνια. Η περιφερειάρχης και οι δήμαρχοι αθωώνονται ξανά.',
        en: '3–4 June 2025: on appeal 10 are convicted — among them 8 senior Fire Service officers and the former Civil Protection secretary-general; four go straight to prison with 5 years. The regional governor and the mayors are acquitted again.',
      },
      {
        el: '29 Μαΐου 2026: ο Άρειος Πάγος καθιστά αμετάκλητες τις καταδίκες των τεσσάρων· στις 29 Σεπτεμβρίου 2026 το Εφετείο διατηρεί τις ποινές.',
        en: '29 May 2026: the Supreme Court makes the four convictions irrevocable; on 29 September 2026 the Appeals Court keeps the sentences unchanged.',
      },
    ],
    outcome: {
      el: 'Αμετάκλητες καταδίκες τεσσάρων στελεχών της επιχειρησιακής αλυσίδας· οι αιρετοί αθωώθηκαν σε δύο βαθμούς.',
      en: 'Irrevocable convictions of four members of the operational chain; the elected officials were acquitted at two levels.',
    },
    breach: {
      el: 'Η πολιτική προστασία υπάρχει για τη στιγμή που ο καπνός φαίνεται στον ορίζοντα: να ξέρει ο καθένας πού να πάει. Όταν δεν υπάρχει σχέδιο εκκένωσης, όταν ο δρόμος διαφυγής καταλήγει σε αδιέξοδο και όταν το μήνυμα προειδοποίησης έχει ψηφιστεί αλλά δεν έχει στηθεί, οι άνθρωποι δεν πεθαίνουν μόνο από τη φωτιά.',
      en: 'Civil protection exists for the moment smoke appears on the horizon: so everyone knows where to go. When there is no evacuation plan, when the escape road ends in a dead end and when the warning system has been voted but never built, people do not die only from the fire.',
    },
    patterns: ['no-evacuation-plan', 'blame-diffused', 'late-alert', 'no-reckoning'],
    safeguards: ['evac-plan', 'single-responsible', 'alert-trigger'],
    counterfactual: {
      el: 'Το Σχέδιο Διαφυγής για Κάθε Οικισμό θα είχε σημάνει δημόσια το Μάτι — δάσος, πυκνή δόμηση, αδιέξοδοι δρόμοι προς τη θάλασσα — ως οικισμό χωρίς σχέδιο. Ο Ένας Επώνυμος Υπεύθυνος θα είχε λύσει το κουβάρι των 45 φορέων πριν από τη φωτιά. Και το Κατώφλι Ειδοποίησης θα είχε κάνει το 112 υποχρέωση με όνομα, όχι νόμο στο συρτάρι.',
      en: 'An Escape Plan for Every Settlement would have flagged Mati publicly — forest, dense building, dead-end roads to the sea — as a settlement without a plan. One Named Office would have untangled the 45 agencies before the fire. And the Alert Threshold would have made 112 a duty with a name, not a law in a drawer.',
    },
    antilogos: {
      el: 'Άνεμοι ως 120 χλμ./ώρα άφησαν ελάχιστο χρόνο για εκκένωση. Οι ειδικοί ρίχνουν την ευθύνη σε δεκαετίες άναρχης δόμησης, όχι μόνο στην αντίδραση εκείνης της μέρας. Και η λογοδοσία έφτασε ως την κορυφή της επιχειρησιακής αλυσίδας — δεν είναι μια υπόθεση όπου δεν καταδικάστηκε κανείς.',
      en: 'Winds up to 120 km/h left very little time to evacuate. Experts blame decades of unplanned building, not only the response on the day. And accountability did reach the top of the operational chain — this is not a case where no one was convicted.',
    },
    reply: {
      el: 'Σωστά — και αυτό δείχνει ακριβώς πού βρίσκεται το κενό: η επιχειρησιακή αλυσίδα κρίθηκε για τις αποφάσεις μιας μέρας· κανείς δεν κρίθηκε για τα χρόνια χωρίς σχέδιο και χωρίς 112. Αυτά τα χρόνια είναι που η πρόταση κάνει ορατά, πριν από την επόμενη φωτιά.',
      en: 'True — and that shows exactly where the gap is: the operational chain was judged for one day’s decisions; no one was judged for the years without a plan and without 112. Those years are what the proposal makes visible, before the next fire.',
    },
    lever: {
      el: 'Ζήτησε από τον δήμο σου το εγκεκριμένο σχέδιο εκκένωσης της γειτονιάς σου και την ημερομηνία της τελευταίας άσκησης.',
      en: 'Ask your municipality for your neighbourhood’s approved evacuation plan and the date of its last drill.',
    },
    scores: { harm: 10, power: 7, recurrence: 8, remedy: 9 },
    status: {
      el: 'Οι καταδίκες των τεσσάρων είναι αμετάκλητες (Μάιος 2026). Οι αιρετοί αθωώθηκαν και είναι νομικά αθώοι.',
      en: 'The four convictions are irrevocable (May 2026). The elected officials were acquitted and are legally innocent.',
    },
    sources: [
      { title: 'VOA / AP — Six convicted over 2018 wildfires that killed 104 (2024)', url: 'https://www.voanews.com/a/six-convicted-amid-fury-over-2018-wildfires-that-killed-104-at-greek-resort-/7589252.html' },
      { title: 'MacroPolis — Independent committee report on Mati (2019)', url: 'https://www.macropolis.gr/?i=portal.en.society.8061' },
      { title: 'The National Herald — Appeals court convicts 10, acquits 11 (2025)', url: 'https://www.thenationalherald.com/greece-appeals-court-delivers-guilty-verdict-for-10-accused-in-mati-trial-acquits-11/' },
      { title: 'Hellas Journal — Four must go straight to jail (2025)', url: 'https://hellasjournal.com/2025/06/four-convicted-in-mati-trial-must-go-straight-to-jail-court-rules/' },
      { title: 'Proto Thema — Mati defendants definitively guilty (2026)', url: 'https://en.protothema.gr/2026/05/29/defendants-in-the-deadly-mati-wildfire-case-definitively-found-guilty-by-irrevocable-supreme-court-ruling/' },
    ],
  },
  {
    id: 'thessaly-daniel-2023',
    when: '2023–2026',
    place: { el: 'Θεσσαλία', en: 'Thessaly' },
    title: {
      el: 'Τρία χρόνια μετά τον Daniel: οι δαπάνες της περιφέρειας για αντιπλημμυρικά υπό έρευνα, καμία δίκη ακόμη',
      en: 'Three years after Daniel: the region’s flood-prevention spending under investigation, no trial yet',
    },
    harmed: {
      el: '17 άμεσοι θάνατοι· μια επιστημονική μελέτη εκτιμά 335 υπερβάλλοντες θανάτους στις πληγείσες περιοχές τις 90 επόμενες ημέρες',
      en: '17 direct deaths; a peer-reviewed study estimates 335 excess deaths in the affected areas over the following 90 days',
    },
    plain: {
      el: 'Η καταιγίδα Daniel έριξε στη Θεσσαλία τη μεγαλύτερη βροχή που έχει καταγραφεί ποτέ στην Ελλάδα. Η εισαγγελία εξετάζει αν οι προγνώσεις αγνοήθηκαν, αν χρήματα για αντιπλημμυρικά πήγαν σε δρόμους και γήπεδα, και γιατί έμειναν ημιτελή έργα. Τρία χρόνια μετά, δεν έχει γίνει καμία δίκη.',
      en: 'Storm Daniel dropped the heaviest rain ever recorded in Greece on Thessaly. Prosecutors are examining whether forecasts were ignored, whether flood-prevention money went to roads and sports grounds, and why works were left unfinished. Three years on, there has been no trial.',
    },
    facts: [
      {
        el: '5 Σεπτεμβρίου 2023: η Ζαγορά καταγράφει 754 χιλιοστά βροχής σε λιγότερο από 21 ώρες — το μεγαλύτερο ημερήσιο ύψος βροχής που έχει καταγραφεί ποτέ στην Ελλάδα.',
        en: '5 September 2023: Zagora records 754 mm of rain in under 21 hours — the heaviest daily total ever recorded in Greece.',
      },
      {
        el: '13 Σεπτεμβρίου 2023: η Εισαγγελία του Αρείου Πάγου διατάσσει έρευνες για τα μέτρα που πάρθηκαν παρά τις ακριβείς προγνώσεις της ΕΜΥ, για το αν χρήματα αντιπλημμυρικής προστασίας πήγαν σε δρόμους και αθλητικές εγκαταστάσεις, για την κατάρρευση γέφυρας, το ημιτελές φράγμα του Ενιπέα και τα αντλιοστάσια του Βόλου που δεν λειτουργούσαν.',
        en: '13 September 2023: the Supreme Court prosecutor orders inquiries into what was done despite precise met-service forecasts, whether flood-prevention money went to roads and sports facilities, a collapsed bridge, the unfinished Enipeas dam and Volos pumping stations that did not work.',
      },
      {
        el: 'Η έρευνα στην Καρδίτσα εξετάζει ποια αντιπλημμυρικά έργα του 2020–2023 μελετήθηκαν, χρηματοδοτήθηκαν, κατασκευάστηκαν ή έμειναν στα χαρτιά, και συγκρίνει τις δαπάνες τους με τους προϋπολογισμούς για δρόμους, αθλητισμό και επικοινωνία.',
        en: 'The Karditsa inquiry examines which flood works of 2020–2023 were designed, funded, built or left on paper, and compares their spending with budgets for roads, sport and communications.',
      },
      {
        el: 'Ως τον Σεπτέμβριο 2026: η εισαγγελία Καρδίτσας σχηματίζει δικογραφία κατά 18 προσώπων — 4 αιρετών, ανάμεσά τους ο πρώην περιφερειάρχης Θεσσαλίας, και 14 υπαλλήλων — για ανθρωποκτονία από αμέλεια και πλημμύρα από αμέλεια για 9 θανάτους.',
        en: 'By September 2026: the Karditsa prosecutor forms a case file against 18 people — 4 elected officials, the former Thessaly regional governor among them, and 14 civil servants — for negligent homicide and negligent flooding over 9 deaths.',
      },
      {
        el: '7 Σεπτεμβρίου 2026: η προκαταρκτική έρευνα στη Λάρισα δεν έχει ολοκληρωθεί, λόγω συμπληρωματικής πραγματογνωμοσύνης· ανοιχτές παραμένουν και οι έρευνες σε Τρίκαλα και Μαγνησία.',
        en: '7 September 2026: the Larissa preliminary inquiry is still incomplete, pending a supplementary expert report; the Trikala and Magnesia inquiries also remain open.',
      },
    ],
    outcome: {
      el: 'Καμία δίκη, καμία καταδίκη τρία χρόνια μετά· τέσσερις εισαγγελίες τρέχουν με διαφορετικές ταχύτητες.',
      en: 'No trial and no conviction three years on; four prosecutors’ offices move at different speeds.',
    },
    breach: {
      el: 'Τα χρήματα της αντιπλημμυρικής προστασίας είναι ασφάλεια ζωής για ολόκληρες πεδιάδες. Αν πήγαν αλλού, το έμαθαν οι κάτοικοι όταν μπήκε το νερό — και αν δεν πήγαν αλλού, κανείς δεν μπορούσε να το αποδείξει πριν. Και στις δύο περιπτώσεις, το σκοτάδι γύρω από την πρόληψη είναι μέρος της καταστροφής.',
      en: 'Flood-prevention money is life insurance for whole plains. If it went elsewhere, residents learned it when the water came in — and if it did not, no one could prove it beforehand. Either way, the darkness around prevention is part of the disaster.',
    },
    patterns: ['diverted-prevention', 'unfinished-works', 'forecast-ignored'],
    safeguards: ['prevention-ledger', 'alert-trigger'],
    counterfactual: {
      el: 'Το Ίχνος του Ευρώ της Πρόληψης θα είχε δείξει σε χάρτη, πριν από τον Daniel, ποια αντιπλημμυρικά είχαν προϋπολογιστεί, ποια είχαν πληρωθεί και ποια —όπως το φράγμα του Ενιπέα— έμεναν ημιτελή. Το ερώτημα που χρειάστηκε εισαγγελική παρέμβαση θα είχε απάντηση πριν από τη βροχή. Και το Κατώφλι Ειδοποίησης θα έκανε κάθε πρόγνωση της ΕΜΥ απόφαση με όνομα.',
      en: 'Following the Prevention Euro would have shown on a map, before Daniel, which flood works were budgeted, which were paid and which — like the Enipeas dam — stood unfinished. The question that needed a prosecutor would have had an answer before the rain. And the Alert Threshold would have made each met-service forecast a decision with a name.',
    },
    antilogos: {
      el: 'Η βροχή έσπασε το εθνικό ρεκόρ κατά πάνω από 100 χιλιοστά — κανένα έργο σχεδιασμένο με κανονικά πρότυπα δεν θα άντεχε παντού. Το αν τα χρήματα κατανεμήθηκαν λάθος είναι κατηγορία υπό έρευνα, όχι εύρημα, και η σχετική έκθεση της Εθνικής Αρχής Διαφάνειας δεν έχει δημοσιευθεί.',
      en: 'The rain broke the national record by more than 100 mm — no work designed to normal standards would have held everywhere. Whether money was misallocated is an allegation under inquiry, not a finding, and the National Transparency Authority’s report has not been published.',
    },
    reply: {
      el: 'Ακριβώς: κανένα έργο δεν θα άντεχε παντού — αλλά τα ημιτελή δεν άντεξαν πουθενά. Και αν η κατανομή ήταν σωστή, ένα δημόσιο μητρώο θα το είχε δείξει από την αρχή, προστατεύοντας και τους αιρετούς που τώρα περιμένουν χρόνια μια έρευνα.',
      en: 'Exactly: no work would have held everywhere — but the unfinished ones held nowhere. And if the allocation was right, a public ledger would have shown it from the start, protecting the officials who now wait years for an inquiry too.',
    },
    lever: {
      el: 'Ζήτησε από την περιφέρειά σου λίστα όλων των αντιπλημμυρικών έργων που έχουν προϋπολογιστεί από το 2020, με το στάδιο του καθενός.',
      en: 'Ask your region for a list of every flood work budgeted since 2020, with the stage each has reached.',
    },
    scores: { harm: 9, power: 7, recurrence: 9, remedy: 8 },
    status: {
      el: 'Ανοιχτή — προδικασία σε τέσσερις εισαγγελίες. Οι 18 της Καρδίτσας τεκμαίρονται αθώοι· κανένα δικαστήριο δεν έχει εξετάσει τα στοιχεία.',
      en: 'Open — pre-trial in four prosecutors’ offices. The 18 in Karditsa are presumed innocent; no court has examined the evidence.',
    },
    sources: [
      { title: 'Weatherzone — Storm Daniel breaks rainfall record in Greece (2023)', url: 'https://www.weatherzone.com/au/news/storm-daniel-breaks-rainfall-record-in-greece/1489771' },
      { title: 'SDNA — Supreme Court prosecutor orders inquiry (2023)', url: 'https://www.sdna.gr/politiko-deltio/ellada/1120806_eisaggeliki-parembasi-ki-entoli-gia-ereyna-giati-plimmyrise-i' },
      { title: 'Europost — Three years on, 18 accused in Karditsa (2026)', url: 'https://europost.gr/perasan-tria-chronia-apo-ti-foniki-kakokairia-daniel-18-katigoroymenoi-gia-anthropoktonia-apo-ameleia-stin-karditsa/' },
      { title: 'Aftodioikisi — Daniel three years on: Larissa inquiry still open (2026)', url: 'https://www.aftodioikisi.gr/koinonia/daniel-tria-chronia-meta-i-dikaiosyni-akomi-ereyna-ti-larisa/' },
      { title: 'Journal of Public Health — Excess mortality after Storm Daniel', url: 'https://academic.oup.com/jpubhealth/article/47/2/217/8010872' },
    ],
  },
  {
    id: 'ilia-2007',
    when: '2007–2015',
    place: { el: 'Ζαχάρω, Ηλεία', en: 'Zacharo, Ilia' },
    title: {
      el: 'Ο νομάρχης και ο δήμαρχος καταδικάστηκαν για τους νεκρούς της φωτιάς του 2007 — και εξαγόρασαν ποινές δέκα ετών με 5 ευρώ τη μέρα',
      en: 'The prefect and the mayor were convicted for the 2007 fire deaths — and bought out ten-year sentences at €5 a day',
    },
    harmed: {
      el: '35–36 νεκροί στην υπόθεση της Ζαχάρως· η αντιπυρική περίοδος του 2007 σκότωσε 85 ανθρώπους στην Ελλάδα',
      en: '35–36 dead in the Zacharo case; the 2007 fire season killed 85 people in Greece',
    },
    plain: {
      el: 'Στις φωτιές της Ηλείας το 2007 πέθαναν δεκάδες άνθρωποι σε αυτοκίνητα και σπίτια. Σε μια σπάνια απόφαση, ο νομάρχης και ο δήμαρχος καταδικάστηκαν αμετάκλητα επειδή δεν εφάρμοσαν το σχέδιο πολιτικής προστασίας. Η ποινή όμως ήταν δέκα χρόνια εξαγοράσιμα με 5 ευρώ τη μέρα — κανείς δεν πήγε φυλακή.',
      en: 'In the 2007 Ilia fires dozens of people died in cars and homes. In a rare ruling, the prefect and the mayor were irrevocably convicted for failing to apply the civil-protection plan. But the sentence was ten years convertible at €5 a day — no one went to prison.',
    },
    facts: [
      {
        el: '24 Αυγούστου 2007 και μετά: μετά από τρεις διαδοχικούς καύσωνες άνω των 40 βαθμών και ξηρασία, οι φωτιές καίνε περίπου 2.700 τετρ. χιλιόμετρα· μόνο τον Αύγουστο πεθαίνουν 67 άνθρωποι.',
        en: '24 August 2007 onward: after three consecutive heatwaves above 40 °C and drought, fires burn about 2,700 km²; 67 people die in August alone.',
      },
      {
        el: 'Δεκέμβριος 2012 – 2014: δικάζονται πέντε — η κάτοικος που έβαλε κατά λάθος τη φωτιά, ο πρώην νομάρχης Ηλείας, ο πρώην δήμαρχος Ζαχάρως, ένας εποχικός παρατηρητής πυρκαγιών και ένας τοπικός διοικητής της Πυροσβεστικής.',
        en: 'December 2012 – 2014: five are tried — the resident who accidentally started the fire, the former Ilia prefect, the former Zacharo mayor, a seasonal fire lookout and a local fire commander.',
      },
      {
        el: 'Οκτώβριος 2015: ο Άρειος Πάγος απορρίπτει τις αναιρέσεις του πρώην νομάρχη και του πρώην δημάρχου· γίνεται αμετάκλητη η καταδίκη τους για παράλειψη λήψης των αναγκαίων μέτρων — δεν εφάρμοσαν τα μέτρα πυροπροστασίας του σχεδίου «Ξενοκράτης» — με αποτέλεσμα θανάτους.',
        en: 'October 2015: the Supreme Court rejects the appeals of the former prefect and former mayor; their conviction for failing to take the necessary measures — not applying the fire-prevention measures of the “Xenokratis” plan — with deaths resulting, becomes irrevocable.',
      },
      {
        el: 'Οι ποινές ήταν δέκα χρόνια για τον καθένα, εξαγοράσιμες προς 5 ευρώ τη μέρα σε μηνιαίες δόσεις· κανείς δεν πήγε φυλακή.',
        en: 'The sentences were ten years each, convertible at €5 a day in monthly instalments; no one went to prison.',
      },
    ],
    outcome: {
      el: 'Σπάνια αμετάκλητη καταδίκη αιρετών για θανάτους από φωτιά — με εξαγοράσιμη ποινή, οκτώ χρόνια μετά.',
      en: 'A rare irrevocable conviction of elected officials for fire deaths — with a convertible sentence, eight years later.',
    },
    breach: {
      el: 'Ένα σχέδιο πολιτικής προστασίας υπάρχει για να εφαρμοστεί πριν έρθει η φωτιά. Όταν η παράλειψή του κοστίζει δεκάδες ζωές, και η ποινή για αυτό είναι 5 ευρώ τη μέρα, το μήνυμα προς κάθε επόμενο αιρετό είναι σαφές: η πρόληψη είναι προαιρετική, και η αμέλεια έχει τιμή.',
      en: 'A civil-protection plan exists to be applied before the fire comes. When failing to apply it costs dozens of lives, and the penalty is €5 a day, the message to every future official is clear: prevention is optional, and negligence has a price.',
    },
    patterns: ['no-evacuation-plan', 'no-reckoning'],
    safeguards: ['evac-plan', 'reckoning-ledger'],
    counterfactual: {
      el: 'Το Σχέδιο Διαφυγής για Κάθε Οικισμό θα είχε δείξει δημόσια, πριν από το καλοκαίρι, αν τα μέτρα του «Ξενοκράτη» είχαν εφαρμοστεί στη Ζαχάρω. Και η Ζυγαριά των Νεκρών θα έβαζε δίπλα-δίπλα τους 35 νεκρούς και τα 5 ευρώ τη μέρα — ώστε η κοινωνία να αποφασίσει αν αυτή η αναλογία της αρκεί.',
      en: 'An Escape Plan for Every Settlement would have shown publicly, before summer, whether the Xenokratis measures had been applied in Zacharo. And the Scale of the Dead would have set the 35 dead beside the €5 a day — so society could decide whether that ratio is enough.',
    },
    antilogos: {
      el: 'Εδώ οι αιρετοί καταδικάστηκαν — η ιστορία «ποτέ δεν πληρώνει κανείς» δεν ισχύει παντού. Η περίοδος ήταν ακραία, πολλές φωτιές του 2007 αποδόθηκαν σε εμπρησμούς, και αυτή τη φωτιά την έβαλε κατά λάθος μια ηλικιωμένη κάτοικος.',
      en: 'Here the officials were convicted — the story that “no one ever pays” is not universally true. The season was extreme, many 2007 fires were attributed to arson, and this one was started accidentally by an elderly resident.',
    },
    reply: {
      el: 'Σωστά — και γι’ αυτό η υπόθεση είναι πολύτιμη: δείχνει ότι η ευθύνη μπορεί να αποδειχθεί. Δείχνει όμως και ότι, ακόμη κι όταν αποδειχθεί, η ποινή μπορεί να μην έχει κανένα βάρος. Η πρόταση δεν ζητά αυστηρότερους δικαστές· ζητά ο πολίτης να βλέπει το σύνολο.',
      en: 'True — and that is why the case is valuable: it shows responsibility can be proven. But it also shows that even when proven, the penalty may carry no weight. The proposal does not ask for harsher judges; it asks that citizens see the whole picture.',
    },
    lever: {
      el: 'Ζήτησε να δημοσιεύεται κάθε χρόνο, πριν από την αντιπυρική περίοδο, ποιοι δήμοι έχουν εφαρμόσει τα μέτρα του σχεδίου πολιτικής προστασίας.',
      en: 'Ask that each year, before fire season, it be published which municipalities have applied the civil-protection plan’s measures.',
    },
    scores: { harm: 9, power: 6, recurrence: 8, remedy: 8 },
    status: {
      el: 'Κλειστή — αμετάκλητη από τον Οκτώβριο 2015.',
      en: 'Closed — irrevocable since October 2015.',
    },
    sources: [
      { title: 'Wikipedia — 2007 Greek forest fires', url: 'https://en.wikipedia.org/wiki/2007_Greek_forest_fires' },
      { title: 'Avgi — Former prefect of Ilia and mayor of Zacharo definitively guilty (2015)', url: 'https://www.avgi.gr/koinonia/159137_oristika-enohoi-o-proin-nomarhis-ileias-kai-o-proin-dimarhos-zaharos' },
      { title: 'Newpost — Sentences upheld for the 2007 Ilia fires (2015)', url: 'https://newpost.gr/eidiseis/epikyrwthhkan-oi-poines-gia-tis-fonikes-pyrkagies-toy-2007-sthn-hleia/' },
      { title: 'Mixani tou Chronou — Who was tried for the Ilia fire deaths', url: 'https://www.mixanitouxronou.gr/poioi-kathisan-sto-edolio-gia-toys-63-nekroys-stis-fonikes-pyrkagies-tis-ileias-to-2007-i-ypothesi-telesidikise-okto-chronia-meta-kai-oi-katigoroymenoi-exagorasan-tis-poines-me-5-eyro-tin-imera/' },
    ],
  },
  {
    id: 'laquila-2009',
    when: '2009–2016',
    place: { el: 'Λ’Άκουιλα, Ιταλία', en: 'L’Aquila, Italy' },
    title: {
      el: 'Η Πολιτική Προστασία είπε στη Λ’Άκουιλα ότι οι δονήσεις «δεν είναι κίνδυνος» — ο αναπληρωτής της ήταν ο μόνος που καταδικάστηκε μετά από 309 θανάτους',
      en: 'Civil Protection told L’Aquila the tremors were “no danger” — its deputy head was the only one convicted after 309 died',
    },
    harmed: {
      el: '309 νεκροί, περίπου 1.600 τραυματίες και 40.000 άστεγοι· η ποινική υπόθεση αφορούσε 29 ανθρώπους που φέρεται να έμειναν μέσα λόγω του καθησυχασμού',
      en: '309 dead, about 1,600 injured and 40,000 homeless; the criminal case concerned 29 people who allegedly stayed indoors because of the reassurance',
    },
    plain: {
      el: 'Μετά από μήνες δονήσεων, μια κρατική επιτροπή συνεδρίασε στη Λ’Άκουιλα, και ο αναπληρωτής επικεφαλής της Πολιτικής Προστασίας είπε στον Τύπο ότι «δεν υπάρχει κίνδυνος». Έξι μέρες μετά ένας σεισμός σκότωσε 309. Η υπόθεση δεν αφορούσε την πρόβλεψη του σεισμού — αφορούσε τον ψευδή καθησυχασμό.',
      en: 'After months of tremors, a state committee met in L’Aquila, and Civil Protection’s deputy head told the press there was “no danger.” Six days later an earthquake killed 309. The case was not about predicting the quake — it was about false reassurance.',
    },
    facts: [
      {
        el: '31 Μαρτίου 2009: μετά από μήνες δονήσεων και μια δόνηση 4,1 στις 30 Μαρτίου, η Επιτροπή Μεγάλων Κινδύνων συνεδριάζει στη Λ’Άκουιλα· συμμετέχουν επτά μέλη, ανάμεσά τους ο αναπληρωτής επικεφαλής του Τμήματος Πολιτικής Προστασίας.',
        en: '31 March 2009: after months of tremors and a magnitude 4.1 shock on 30 March, the Major Risks Commission meets in L’Aquila; seven members attend, among them the deputy head of the Civil Protection Department.',
      },
      {
        el: 'Ο αναπληρωτής λέει στον Τύπο ότι οι δονήσεις δεν αποτελούν «κανέναν κίνδυνο» και ότι οι ειδικοί τον διαβεβαίωσαν πως η κατάσταση είναι «ευνοϊκή» λόγω της συνεχούς εκτόνωσης ενέργειας — ισχυρισμό που οι περισσότεροι ειδικοί θεωρούν λανθασμένο. Τηλεφωνικές υποκλοπές έδειξαν αργότερα τον επικεφαλής της Πολιτικής Προστασίας να περιγράφει τη συνεδρίαση ως «επικοινωνιακή επιχείρηση, γιατί θέλουμε να καθησυχάσουμε τον κόσμο». Στις 6 Απριλίου χτυπά σεισμός 6,3.',
        en: 'The deputy tells the press the tremors pose “no danger” and that experts assured him the situation was “favourable” because of continuous energy discharge — a claim most experts call false. Wiretaps later showed the head of Civil Protection describing the meeting as a “media operation, because we want to reassure people.” On 6 April a magnitude 6.3 quake strikes.',
      },
      {
        el: '22 Οκτωβρίου 2012: το δικαστήριο της Λ’Άκουιλα καταδικάζει και τους επτά — έξι επιστήμονες και τον αναπληρωτή — για πολλαπλή ανθρωποκτονία από αμέλεια, με 6 χρόνια ο καθένας.',
        en: '22 October 2012: the L’Aquila court convicts all seven — six scientists and the deputy — of multiple manslaughter, 6 years each.',
      },
      {
        el: '10 Νοεμβρίου 2014: το Εφετείο αθωώνει τους έξι επιστήμονες και καταδικάζει μόνο τον αναπληρωτή, με 2 χρόνια σε αναστολή. 20 Νοεμβρίου 2015: το ιταλικό Ακυρωτικό επικυρώνει.',
        en: '10 November 2014: the Court of Appeal acquits the six scientists and convicts only the deputy, with 2 years suspended. 20 November 2015: the Court of Cassation confirms.',
      },
      {
        el: '30 Σεπτεμβρίου 2016: σε χωριστή δίκη, ο πρώην επικεφαλής της Πολιτικής Προστασίας αθωώνεται («το γεγονός δεν υφίσταται»), λίγες μέρες πριν από την παραγραφή.',
        en: '30 September 2016: in a separate trial, the former head of Civil Protection is acquitted (“the fact does not exist”), days before the limitation date.',
      },
    ],
    outcome: {
      el: 'Μία αμετάκλητη καταδίκη — του αξιωματούχου που μίλησε εκ μέρους της Πολιτικής Προστασίας — με 2 χρόνια σε αναστολή. Οι επιστήμονες και ο επικεφαλής αθωώθηκαν.',
      en: 'One final conviction — of the official who spoke for Civil Protection — with 2 years suspended. The scientists and the head were acquitted.',
    },
    breach: {
      el: 'Κανείς δεν μπορεί να προβλέψει έναν σεισμό. Μπορεί όμως να πει την αλήθεια για την αβεβαιότητα. Όταν η ενημέρωση για τον κίνδυνο σχεδιάζεται για να «καθησυχάσει τον κόσμο» και όχι για να τον ενημερώσει, οι πολίτες αποφασίζουν να μείνουν μέσα με βάση μια διαβεβαίωση που δεν έδωσε κανένας ειδικός.',
      en: 'No one can predict an earthquake. But anyone can tell the truth about uncertainty. When risk communication is designed to “reassure people” rather than inform them, citizens decide to stay indoors on the strength of an assurance no expert gave.',
    },
    patterns: ['reassurance', 'no-reckoning'],
    safeguards: ['open-risk', 'reckoning-ledger'],
    counterfactual: {
      el: 'Το Ο Κίνδυνος Λέγεται Όπως Είναι θα είχε δημοσιεύσει αυτούσια την εκτίμηση των επιστημόνων — ότι ένας μεγάλος σεισμός ήταν απίθανος «αλλά δεν μπορούσε να αποκλειστεί» — υπογεγραμμένη από τους ίδιους. Και θα είχε σημάνει ότι η δήλωση «κανένας κίνδυνος» ήταν πιο καθησυχαστική από την ίδια την εκτίμηση.',
      en: 'Risk Told as It Is would have published the scientists’ assessment verbatim — that a big quake was unlikely “but could not be excluded” — signed by them. And it would have flagged that the “no danger” statement was more reassuring than the assessment itself.',
    },
    antilogos: {
      el: 'Οι σεισμοί δεν προβλέπονται, και τα ανώτερα δικαστήρια αθώωσαν τους επιστήμονες μετά από ακρόαση των στοιχείων. Ο πιο θανατηφόρος μηχανισμός ήταν η κατάρρευση κτιρίων, όχι το μήνυμα — και σε αστικές δίκες Ιταλοί δικαστές έχουν ρίξει μέρος της ευθύνης στα ίδια τα θύματα, μια βαθιά αμφιλεγόμενη θέση.',
      en: 'Earthquakes cannot be predicted, and the higher courts cleared the scientists after hearing the evidence. The deadliest mechanism was building collapse, not the message — and in civil cases Italian judges have placed part of the blame on the victims themselves, a deeply contested position.',
    },
    reply: {
      el: 'Η πρόταση δεν ζητά από κανέναν να προβλέψει σεισμούς. Ζητά κάτι πιο απλό: ο πολίτης να ακούει τι είπαν οι επιστήμονες, όχι τι θα ήθελε η διοίκηση να έχουν πει. Αυτό προστατεύει και τους ίδιους τους επιστήμονες — που εδώ βρέθηκαν κατηγορούμενοι για ένα μήνυμα που δεν διατύπωσαν.',
      en: 'The proposal asks no one to predict earthquakes. It asks something simpler: that citizens hear what the scientists said, not what the administration wished they had said. That protects the scientists too — who here found themselves accused over a message they did not phrase.',
    },
    lever: {
      el: 'Ζήτησε τα πρακτικά κάθε επιτροπής εκτίμησης σεισμικού ή πλημμυρικού κινδύνου να δημοσιεύονται αυτούσια την ίδια μέρα.',
      en: 'Ask that the minutes of every seismic or flood risk committee be published verbatim the same day.',
    },
    scores: { harm: 10, power: 7, recurrence: 6, remedy: 7 },
    status: {
      el: 'Ποινική υπόθεση κλειστή (Νοέμβριος 2015). Οι έξι επιστήμονες είναι αθώοι· ο πρώην επικεφαλής αθωώθηκε το 2016. Αστικές υποθέσεις αποζημίωσης συνεχίζονται.',
      en: 'Criminal case closed (November 2015). The six scientists are acquitted; the former head was acquitted in 2016. Civil damages cases continue.',
    },
    sources: [
      { title: 'Physics World — L’Aquila verdict quashed', url: 'https://physicsworld.com/a/laquila-verdict-quashed/' },
      { title: 'Eos — Six of L’Aquila seven acquitted on appeal (2014)', url: 'https://eos.org/articles/six-laquila-seven-acquitted-appeal' },
      { title: 'Dawn / AFP — Italy scientists sentenced to jail in quake trial (2012)', url: 'https://dawn.com/2012/10/22/italy-scientists-sentenced-to-jail-in-quake-trial/' },
      { title: 'LaPresse — Cassation confirms scientists’ acquittal (2015)', url: 'https://www.lapresse.it/cronaca/2015/11/20/sisma-laquila-cassazione-conferma-assoluzione-scienziati-grandi-rischi/' },
      { title: 'Il Fatto Quotidiano — Former head acquitted in Grandi Rischi bis (2016)', url: 'https://www.ilfattoquotidiano.it/2016/09/30/processo-grandi-rischi-bis-assolto-guido-bertolaso-lavvocato-di-parte-civile-cadono-le-braccia/3067634/' },
    ],
  },
  {
    id: 'ahr-valley-2021',
    when: '2021–2026',
    place: { el: 'Κοιλάδα του Αρ, Γερμανία', en: 'Ahr valley, Germany' },
    title: {
      el: 'Η εντολή εκκένωσης της περιφέρειας ήρθε μετά τις 11 το βράδυ: οι εισαγγελείς βρήκαν «σοβαρές ελλείψεις» αλλά κανένα έγκλημα — το κράτος ζητά τώρα τη σύνταξη του επικεφαλής',
      en: 'The district’s evacuation order came after 11 pm: prosecutors found “considerable deficiencies” but no crime — the state now wants the district chief’s pension',
    },
    harmed: {
      el: '135 νεκροί στην περιοχή του Αρ — ανάμεσά τους 12 ένοικοι με νοητική αναπηρία που πνίγηκαν κοιμισμένοι σε δομή φροντίδας στο Σίντσιχ',
      en: '135 dead in the Ahr region — among them 12 residents with intellectual disabilities who drowned asleep in a care home in Sinzig',
    },
    plain: {
      el: 'Το απόγευμα η υπηρεσία περιβάλλοντος προειδοποίησε ότι ο ποταμός θα ξεπεράσει κατά πολύ κάθε ρεκόρ. Η περιφέρεια κήρυξε συναγερμό και άρχισε εκκενώσεις μόνο μετά τις 11 το βράδυ. Στις 3 τα ξημερώματα δώδεκα άνθρωποι με αναπηρία πνίγηκαν στον ύπνο τους. Κανείς δεν δικάστηκε.',
      en: 'In the afternoon the environment agency warned the river would far exceed any record. The district declared an emergency and began evacuating only after 11 pm. At 3 am twelve people with disabilities drowned in their sleep. No one was tried.',
    },
    facts: [
      {
        el: '14 Ιουλίου 2021: το απόγευμα η υπηρεσία περιβάλλοντος του κρατιδίου ενημερώνει ότι ο Αρ θα ξεπεράσει «σημαντικά» το ρεκόρ των 3,37 μέτρων· γύρω στις 21:30 νεότερη πρόγνωση μιλά για σχεδόν 7 μέτρα. Μόνο γύρω στις 23:15 η περιφέρεια κηρύσσει τον υψηλότερο βαθμό καταστροφής και ξεκινά εκκενώσεις.',
        en: '14 July 2021: in the afternoon the state environment agency says the Ahr will “significantly exceed” its 3.37 m record; around 21:30 a sharper forecast predicts almost 7 m. Only around 23:15 does the district declare the top disaster level and begin evacuations.',
      },
      {
        el: '15 Ιουλίου 2021, περίπου 3 π.μ.: δώδεκα ένοικοι με νοητική αναπηρία πνίγονται κοιμισμένοι σε δομή φροντίδας στο Σίντσιχ — δεν είχαν εκκενωθεί πριν ξεχειλίσει ο ποταμός.',
        en: '15 July 2021, about 3 am: twelve residents with intellectual disabilities drown asleep in a care home in Sinzig — they had not been evacuated before the river overflowed.',
      },
      {
        el: '5 Αυγούστου 2021: η εισαγγελία του Κόμπλεντς ανοίγει έρευνα για ανθρωποκτονία από αμέλεια κατά του επικεφαλής της περιφέρειας — που είχε αποκλειστικά τη διοίκηση της αντιμετώπισης — και ενός μέλους της ομάδας κρίσης. Ο επικεφαλής παραιτείται τον Οκτώβριο 2021.',
        en: '5 August 2021: Koblenz prosecutors open a negligent-homicide inquiry into the district administrator — who held sole command of the disaster response — and a crisis-team member. The administrator resigns in October 2021.',
      },
      {
        el: '18 Απριλίου 2024: μετά από 300 και πλέον μάρτυρες, η εισαγγελία κλείνει την υπόθεση: η πολιτική προστασία είχε «αρκετά σοβαρές ελλείψεις», αλλά η πλημμύρα ήταν «έκτακτη φυσική καταστροφή» και δεν μπορεί να αποδειχθεί ποινική ευθύνη. Τον Μάιο 2026 το Ανώτερο Δικαστήριο απορρίπτει ως απαράδεκτη την αίτηση των συγγενών να ασκηθεί δίωξη.',
        en: '18 April 2024: after 300-plus witnesses, prosecutors close the case: civil protection had “quite considerable deficiencies,” but the flood was an “extraordinary natural disaster” and criminal liability cannot be proven. In May 2026 the Higher Regional Court throws out the relatives’ motion to force prosecution as inadmissible.',
      },
      {
        el: 'Ιούλιος–Σεπτέμβριος 2025: η πειθαρχική έρευνα του υπουργείου Εσωτερικών κρίνει ότι ο πρώην επικεφαλής «παραβίασε βαριά και συνολικά τα υπηρεσιακά του καθήκοντα» — ήταν σε μεγάλο βαθμό απών από τις επιχειρήσεις· το ένα τρίτο της σύνταξής του παρακρατείται προσωρινά.',
        en: 'July–September 2025: the interior ministry’s disciplinary inquiry finds the former administrator “gravely and comprehensively violated his official duties” — he was largely absent from operations; a third of his pension is provisionally withheld.',
      },
    ],
    outcome: {
      el: 'Καμία ποινική κατηγορία. Λογοδοσία μόνο πολιτική (παραίτηση υπουργού Εσωτερικών του κρατιδίου) και πειθαρχική (μερική παρακράτηση σύνταξης).',
      en: 'No criminal charge. Accountability only political (a state interior minister resigned) and disciplinary (pension partly withheld).',
    },
    breach: {
      el: 'Μια πρόγνωση που λέει «σχεδόν διπλάσιο από κάθε ρεκόρ» είναι εντολή να φύγουν οι άνθρωποι από τις όχθες. Όταν ο μόνος που μπορεί να δώσει αυτή την εντολή λείπει, και όταν κανείς δεν έχει σκεφτεί ποιος θα ξυπνήσει τους ενοίκους μιας δομής φροντίδας, η πλημμύρα βρίσκει ανθρώπους που δεν είχαν καμία πιθανότητα.',
      en: 'A forecast saying “almost double any record” is an order for people to leave the riverbanks. When the only person who can give that order is absent, and no one has thought about who will wake the residents of a care home, the flood finds people who had no chance.',
    },
    patterns: ['forecast-ignored', 'absent-command', 'vulnerable-left', 'late-alert'],
    safeguards: ['command-log', 'vulnerable-registry', 'alert-trigger'],
    counterfactual: {
      el: 'Το Κατώφλι Ειδοποίησης θα είχε ετοιμάσει μήνυμα εκκένωσης με την πρόγνωση του απογεύματος — και κάποιος θα έπρεπε να υπογράψει γιατί δεν στάλθηκε. Το Ημερολόγιο Διοίκησης Κρίσης θα είχε περάσει την εξουσία στον αναπληρωτή όταν ο επικεφαλής δεν απαντούσε. Και το Κανείς Δεν Μένει Πίσω θα είχε βάλει τη δομή του Σίντσιχ πρώτη στη λίστα.',
      en: 'The Alert Threshold would have drafted an evacuation alert on the afternoon forecast — and someone would have had to sign why it was not sent. The Crisis Command Log would have passed authority to the deputy when the chief did not respond. And No One Left Behind would have put the Sinzig home first on the list.',
    },
    antilogos: {
      el: 'Το νερό ανέβηκε σχεδόν στο διπλάσιο του ιστορικού ρεκόρ· μετά από τέσσερα χρόνια και 35.000 σελίδες, δύο επίπεδα εισαγγελέων δεν μπόρεσαν να συνδέσουν τις παραλείψεις με τους θανάτους με βεβαιότητα. Η αποτυχία ήταν πολυεπίπεδη, και ο δικηγόρος του πρώην επικεφαλής λέει ότι η πειθαρχική δίωξη καλύπτει τις ευθύνες της κυβέρνησης του κρατιδίου.',
      en: 'The water rose to almost double the historic record; after four years and 35,000 pages, two levels of prosecutors could not link the failures to the deaths with certainty. The failure was multi-level, and the former chief’s lawyer says the disciplinary case covers up the state government’s own responsibility.',
    },
    reply: {
      el: 'Ακριβώς επειδή η ποινική δίκη δεν μπορεί να φτάσει τις συστημικές αποτυχίες, χρειάζονται κανόνες που τις προλαβαίνουν. Ένας αυτόματος αναπληρωτής και ένα μητρώο ευάλωτων δεν χρειάζονται απόδειξη ενοχής για να λειτουργήσουν — χρειάζονται μόνο να υπάρχουν πριν από τη νύχτα της πλημμύρας.',
      en: 'Precisely because criminal trials cannot reach systemic failures, rules that pre-empt them are needed. An automatic deputy and a register of the vulnerable need no proof of guilt to work — they only need to exist before the night of the flood.',
    },
    lever: {
      el: 'Ζήτησε κάθε δομή φροντίδας σε ζώνη πλημμύρας ή πυρκαγιάς να έχει γραπτό, δοκιμασμένο σχέδιο εκκένωσης με επώνυμο υπεύθυνο.',
      en: 'Ask that every care home in a flood or fire zone have a written, tested evacuation plan with a named person in charge.',
    },
    scores: { harm: 10, power: 7, recurrence: 8, remedy: 8 },
    status: {
      el: 'Ποινικός δρόμος κλειστός — καμία κατηγορία· ο πρώην επικεφαλής και το μέλος της ομάδας κρίσης είναι νομικά αθώοι. Η πειθαρχική διαδικασία είναι ανοιχτή και ισχύει το τεκμήριο αθωότητας.',
      en: 'Criminal route closed — no charge; the former chief and the crisis-team member are legally innocent. Disciplinary proceedings are open and the presumption of innocence applies.',
    },
    sources: [
      { title: 'Autohaus / dpa — Late warnings, serious accusations against the district (2021)', url: 'https://www.autohaus.de/nachrichten/schadenbusiness/verspaetete-warnungen-schwere-vorwuerfe-gegen-den-landkreis-ahrweiler-2920018' },
      { title: 'The Local — Prosecutors consider manslaughter probe (2021)', url: 'https://www.thelocal.de/20210802/german-prosecutors-consider-manslaughter-probe-into-deadly-floods' },
      { title: 'The Local — Prosecutors drop investigation into flood disaster (2024)', url: 'https://www.thelocal.de/20240418/german-prosecutors-drop-investigation-into-unforeseeable-flood-disaster' },
      { title: 'Rechtslupe — The failed motion to force prosecution (2026)', url: 'https://www.rechtslupe.de/strafrecht/die-ahrtalflut-und-der-gescheiterte-klageerzwingungsantrag-3353503' },
      { title: 'evangelisch.de — Minister finds serious misconduct by former administrator (2025)', url: 'https://www.evangelisch.de/inhalte/247182/03-09-2025/ahrtalflut-minister-bescheinigt-ex-landrat-erhebliche-dienstvergehen' },
    ],
  },
]
