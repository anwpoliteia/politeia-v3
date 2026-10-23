// ΑΙΓΙΣ — cases 6–10. Same rules as cases-a.ts: sourced facts checked on
// 2026-09-30; where death tolls differ by source, the range is given.

import type { ToolCase } from '../types'

export const CASES_B: readonly ToolCase[] = [
  {
    id: 'lahaina-2023',
    when: '2023–2026',
    place: { el: 'Λαχάινα, Μάουι, Χαβάη', en: 'Lahaina, Maui, Hawaii' },
    title: {
      el: 'Το μεγαλύτερο δίκτυο σειρήνων του κόσμου έμεινε σιωπηλό: πώς η υπηρεσία έκτακτης ανάγκης του Μάουι έχασε το παράθυρο προειδοποίησης της Λαχάινα',
      en: 'The world’s largest outdoor siren network stayed silent: how Maui’s emergency agency lost Lahaina’s warning window',
    },
    harmed: { el: '102 νεκροί και πάνω από 2.000 κτίρια κατεστραμμένα', en: '102 dead and more than 2,000 buildings destroyed' },
    plain: {
      el: 'Η Χαβάη έχει το μεγαλύτερο δίκτυο εξωτερικών σειρήνων στον κόσμο. Όταν η φωτιά έφτασε στη Λαχάινα, δεν ήχησε καμία. Τα μηνύματα στα κινητά δεν έφτασαν, γιατί είχαν πέσει όλες οι κεραίες. Η λογοδοσία ήρθε ως μια παραίτηση και ένας διακανονισμός 4 δισ. δολαρίων — όχι ως δίκη.',
      en: 'Hawaii has the world’s largest network of outdoor sirens. When the fire reached Lahaina, none sounded. Phone alerts did not arrive, because every cell tower was down. Accountability came as one resignation and a $4 billion settlement — not a trial.',
    },
    facts: [
      {
        el: '8 Αυγούστου 2023: η φωτιά ξεκινά το πρωί από καλώδια ηλεκτροδότησης που επανενεργοποιήθηκαν· τα συνεργεία την περιορίζουν και φεύγουν γύρω στις 2 μ.μ.· γύρω στις 3 μ.μ. άνεμοι 120–130 χλμ./ώρα την αναζωπυρώνουν.',
        en: '8 August 2023: the fire starts in the morning from re-energised power lines; crews contain it and leave around 2 pm; around 3 pm winds of 74–80 mph rekindle it.',
      },
      {
        el: '8 Αυγούστου 2023: οι σειρήνες — μέρος του μεγαλύτερου δικτύου εξωτερικών σειρήνων στον κόσμο, που επιτρέπεται να χρησιμοποιηθεί και για φωτιές — δεν ηχούν ποτέ. Η επίσημη ανασκόπηση βρήκε ότι η ενεργοποίησή τους δεν συζητήθηκε καν εκείνη τη μέρα.',
        en: '8 August 2023: the sirens — part of the world’s largest outdoor siren network, whose rules allow use for fires — never sound. The official review found their activation was not even discussed that day.',
      },
      {
        el: '8–9 Αυγούστου 2023: η κομητεία στέλνει τουλάχιστον 14 ειδοποιήσεις σε κινητά, αλλά και οι 21 κεραίες της Δυτικής Μάουι έχουν πέσει — οι κάτοικοι δεν τις λαμβάνουν.',
        en: '8–9 August 2023: the county sends at least 14 wireless emergency alerts, but all 21 cell towers serving West Maui are down — residents do not receive them.',
      },
      {
        el: '16–17 Αυγούστου 2023: ο επικεφαλής της υπηρεσίας έκτακτης ανάγκης δηλώνει ότι «δεν μετανιώνει», φοβούμενος ότι οι κάτοικοι θα έτρεχαν προς την ενδοχώρα, «μέσα στη φωτιά» — και την επομένη παραιτείται, επικαλούμενος λόγους υγείας.',
        en: '16–17 August 2023: the emergency agency’s administrator says he has “no regrets,” fearing residents would have run inland, “into the fire” — and resigns the next day, citing health reasons.',
      },
      {
        el: 'Απρίλιος και Σεπτέμβριος 2024: οι ανεξάρτητες εκθέσεις για τον Γενικό Εισαγγελέα βρίσκουν «έλλειψη ειδοποιήσεων έκτακτης ανάγκης για τους κατοίκους», μια «κατακερματισμένη δομή διοίκησης» και ότι στις 7:19 μ.μ. ο επικεφαλής πίστευε ακόμη πως «είχε χαθεί μόνο μία επιχείρηση» — 84 ευρήματα, 140 συστάσεις.',
        en: 'April and September 2024: the independent reports for the Attorney General find “a lack of emergency alerts for residents,” a “siloed command structure” and that at 7:19 pm the administrator still believed “only one business had been lost” — 84 findings, 140 recommendations.',
      },
    ],
    outcome: {
      el: 'Μία παραίτηση· διακανονισμός 4 δισ. δολαρίων, από τον οποίο η πολιτεία της Χαβάης πληρώνει 808 εκατ. Κανένας αξιωματούχος δεν δικάστηκε.',
      en: 'One resignation; a $4 billion settlement, of which the State of Hawaii pays $808 million. No official has been tried.',
    },
    breach: {
      el: 'Ένα σύστημα προειδοποίησης που δεν χρησιμοποιείται δεν είναι σύστημα· είναι διακόσμηση. Όταν το εργαλείο υπάρχει και οι κανόνες το επιτρέπουν, αλλά κανείς δεν συζητά καν να το χρησιμοποιήσει, και ο υπεύθυνος δεν ξέρει ότι η πόλη καίγεται, οι κάτοικοι δεν ειδοποιήθηκαν επειδή κανείς δεν έβλεπε.',
      en: 'A warning system that is not used is not a system; it is decoration. When the tool exists and the rules allow it, yet no one even discusses using it, and the person in charge does not know the town is burning, residents were not warned because no one was watching.',
    },
    patterns: ['late-alert', 'blame-diffused', 'no-reckoning'],
    safeguards: ['alert-ledger', 'after-action', 'alert-trigger'],
    counterfactual: {
      el: 'Το Κατώφλι Ειδοποίησης θα είχε ετοιμάσει μήνυμα και σειρήνα με την αναζωπύρωση και τους ανέμους — και κάποιος θα έπρεπε να γράψει γιατί δεν ήχησαν. Το Ημερολόγιο Ειδοποιήσεων θα είχε δείξει ότι τα μηνύματα έφευγαν προς κεραίες που δεν λειτουργούσαν. Και η Έκθεση της Επόμενης Μέρας θα παρακολουθεί δημόσια κάθε μία από τις 140 συστάσεις.',
      en: 'The Alert Threshold would have drafted an alert and a siren call on the rekindling and the winds — and someone would have had to write why they did not sound. The Alert Ledger would have shown alerts going out to towers that were down. And the Day-After Report would track each of the 140 recommendations publicly.',
    },
    antilogos: {
      el: 'Τη φωτιά την προκάλεσαν καλώδια ρεύματος και κρίθηκε «ατυχηματική»· οι εκθέσεις δεν βρήκαν «μία μοναδική αιτία». Το επιχείρημα για τις σειρήνες δεν ήταν παράλογο — στη Χαβάη οι σειρήνες σημαίνουν τσουνάμι και οι κάτοικοι κινούνται προς την ενδοχώρα. Και οι αστυνομικοί και πυροσβέστες που εκκένωναν πόρτα-πόρτα χαρακτηρίστηκαν ήρωες.',
      en: 'The fire was caused by power lines and ruled “accidental”; the reports found “no single cause.” The siren argument was not absurd — in Hawaii sirens mean tsunami and residents move inland. And the police and firefighters who evacuated door to door were called heroes.',
    },
    reply: {
      el: 'Το επιχείρημα για τις σειρήνες μπορεί να ήταν σωστό — αλλά έπρεπε να έχει αποφασιστεί πριν, όχι να μη συζητηθεί καθόλου εκείνη τη μέρα. Η πρόταση δεν λέει «πάντα σειρήνα»· λέει ότι η απόφαση να μη σταλεί προειδοποίηση πρέπει να παίρνεται συνειδητά, με όνομα και ώρα.',
      en: 'The siren argument may have been right — but it had to be settled beforehand, not left undiscussed on the day. The proposal does not say “always sound the siren”; it says the decision not to warn must be taken consciously, with a name and a time.',
    },
    lever: {
      el: 'Ζήτησε από την πολιτική προστασία της περιοχής σου να δημοσιεύσει ποιοι τρόποι προειδοποίησης υπάρχουν και ποιος αποφασίζει να τους χρησιμοποιήσει.',
      en: 'Ask your area’s civil protection to publish which warning methods exist and who decides to use them.',
    },
    scores: { harm: 9, power: 6, recurrence: 8, remedy: 8 },
    status: {
      el: 'Ο αστικός διακανονισμός καταβάλλεται από το 2026. Δεν βρέθηκε ποινική έρευνα για αξιωματούχους· ο πρώην επικεφαλής δεν έχει κριθεί υπαίτιος από κανένα δικαστήριο.',
      en: 'The civil settlement is being paid out from 2026. No criminal inquiry into officials was found; the former administrator has not been found at fault by any court.',
    },
    sources: [
      { title: 'Civil Beat — Maui blames wildfire on downed power line (2024)', url: 'https://www.civilbeat.org/2024/10/the-verdict-is-in-maui-blames-devastating-wildfire-on-downed-power-line' },
      { title: 'NBC Washington / AP — Maui’s top emergency official out after failing to sound sirens (2023)', url: 'https://www.nbcwashington.com/news/national-international/mauis-top-emergency-official-is-out-after-failing-to-sound-sirens-as-fires-approached/' },
      { title: 'PBS NewsHour / AP — Maui sues cell carriers over alerts never received (2024)', url: 'https://www.pbs.org/newshour/amp/nation/maui-sues-cell-carriers-over-text-message-alerts-that-were-never-received-during-lahaina-wildfires' },
      { title: 'FSRI — Lahaina fire incident analysis report released (2024)', url: 'https://fsri.org/research-update/lahaina-fire-incident-analysis-report-released-attorney-general-hawaii' },
      { title: 'Hawaii Tribune-Herald — Settlement poised for first payout (2026)', url: 'https://www.hawaiitribune-herald.com/2026/06/08/hawaii-news/maui-wildfires-settlement-poised-for-first-payout/' },
    ],
  },
  {
    id: 'valencia-dana-2024',
    when: '2024–2026',
    place: { el: 'Βαλένθια, Ισπανία', en: 'Valencia, Spain' },
    title: {
      el: 'Κόκκινος συναγερμός στις 7:30 το πρωί, μήνυμα στα κινητά στις 8:11 το βράδυ: το κενό δεκατριών ωρών της περιφερειακής διοίκησης έκτακτης ανάγκης',
      en: 'Red alert at 7:30 am, phone warning at 8:11 pm: the regional emergency command’s thirteen-hour gap',
    },
    harmed: {
      el: 'Πάνω από 220 νεκροί (229–232 ανάλογα με την πηγή), κυρίως ηλικιωμένοι που εγκλωβίστηκαν πριν από το βραδινό μήνυμα',
      en: 'More than 220 dead (229–232 depending on source), mostly elderly people trapped before the evening alert',
    },
    plain: {
      el: 'Η μετεωρολογική υπηρεσία έβγαλε κόκκινο συναγερμό το πρωί. Το μήνυμα στα κινητά των πολιτών στάλθηκε στις 8:11 το βράδυ — αφού είχε ήδη αρχίσει η πλημμύρα και είχαν γίνει πάνω από 15.000 κλήσεις στο 112. Ο πρόεδρος της περιφέρειας βρισκόταν για ώρες σε γεύμα. Παραιτήθηκε έναν χρόνο μετά, κρατώντας τη βουλευτική του ασυλία.',
      en: 'The met service issued a red alert in the morning. The phone alert to citizens went out at 8:11 pm — after flooding had begun and more than 15,000 calls had been made to 112. The regional president spent hours at lunch. He resigned a year later, keeping his parliamentary immunity.',
    },
    facts: [
      {
        el: '29 Οκτωβρίου 2024, περίπου 7:30 π.μ.: η κρατική μετεωρολογική υπηρεσία εκδίδει κόκκινο — τον υψηλότερο — συναγερμό για τη Βαλένθια· σε ορισμένα σημεία πέφτει σε λιγότερο από 8 ώρες η βροχή ενός χρόνου.',
        en: '29 October 2024, about 7:30 am: the national met agency issues a red — the highest — alert for Valencia; in places a year’s rain falls in under 8 hours.',
      },
      {
        el: '29 Οκτωβρίου 2024, 8:11 μ.μ.: στέλνεται το μήνυμα προειδοποίησης της περιφέρειας στα κινητά — αφού έχει ήδη αρχίσει η πλημμύρα και μετά από πάνω από 15.000 κλήσεις στο 112. Η ανακρίτρια το χαρακτήρισε «καθυστερημένο και λανθασμένο».',
        en: '29 October 2024, 8:11 pm: the regional government’s phone alert goes out — after flooding has begun and more than 15,000 calls to 112. The investigating judge called it “late and erroneous.”',
      },
      {
        el: '29 Οκτωβρίου 2024: ο πρόεδρος της περιφέρειας περνά σχεδόν τέσσερις ώρες σε γεύμα με δημοσιογράφο σε εστιατόριο, μένει ως τις 6 περίπου το απόγευμα και φτάνει στο κέντρο επιχειρήσεων γύρω στις 7:30 μ.μ.',
        en: '29 October 2024: the regional president spends nearly four hours at lunch with a journalist in a restaurant, stays until about 6 pm and reaches the emergency command centre around 7:30 pm.',
      },
      {
        el: '2025: η ανακρίτρια θέτει υπό έρευνα για ανθρωποκτονία από αμέλεια την πρώην περιφερειακή υπουργό αρμόδια για τις έκτακτες ανάγκες και τον πρώην γραμματέα της· και οι δύο είχαν απομακρυνθεί λίγες εβδομάδες μετά την πλημμύρα.',
        en: '2025: the investigating judge places the former regional minister in charge of emergencies and her former emergencies secretary under investigation for reckless homicide; both had been dismissed weeks after the flood.',
      },
      {
        el: '3 Νοεμβρίου 2025: ο πρόεδρος παραιτείται («έπρεπε να είχα ακυρώσει τις υποχρεώσεις μου») αλλά κρατά τη βουλευτική έδρα και την ασυλία του. 16 Μαρτίου 2026: το Ανώτατο Δικαστήριο της περιφέρειας αρνείται «προς το παρόν» να τον ερευνήσει, μη βρίσκοντας στοιχεία «επαρκούς στερεότητας».',
        en: '3 November 2025: the president resigns (“I should have cancelled my appointments”) but keeps his parliamentary seat and immunity. 16 March 2026: the regional High Court refuses “at this time” to investigate him, finding no evidence “with sufficient solidity.”',
      },
    ],
    outcome: {
      el: 'Πολιτική λογοδοσία: παραίτηση του προέδρου έναν χρόνο μετά, απομάκρυνση δύο υπευθύνων. Δικαστική: καμία δίκη ακόμη.',
      en: 'Political accountability: the president resigned a year later, two emergency chiefs were fired. Judicial: no trial yet.',
    },
    breach: {
      el: 'Δεκατρείς ώρες ανάμεσα σε έναν κόκκινο συναγερμό και ένα μήνυμα στα κινητά είναι δεκατρείς ώρες που οι πολίτες θα μπορούσαν να είχαν ανέβει στον πάνω όροφο, να μην είχαν πάρει το αυτοκίνητο, να είχαν πάρει τους γονείς τους. Όταν ο άνθρωπος που αποφασίζει λείπει, η απόφαση απλώς δεν παίρνεται.',
      en: 'Thirteen hours between a red alert and a phone message are thirteen hours in which citizens could have gone upstairs, left the car, fetched their parents. When the person who decides is absent, the decision is simply not taken.',
    },
    patterns: ['late-alert', 'absent-command', 'forecast-ignored'],
    safeguards: ['alert-trigger', 'command-log', 'alert-ledger'],
    counterfactual: {
      el: 'Το Κατώφλι Ειδοποίησης θα είχε ετοιμάσει μήνυμα με τον κόκκινο συναγερμό των 7:30 — και κάθε ώρα που δεν στελνόταν, κάποιος θα έπρεπε να γράφει γιατί. Το Ημερολόγιο Διοίκησης Κρίσης θα είχε περάσει την απόφαση στον αναπληρωτή όσο ο πρόεδρος έλειπε. Και το Ημερολόγιο Ειδοποιήσεων θα έδειχνε δημόσια το χάσμα ανάμεσα στο νερό και στο μήνυμα, σε κάθε δήμο.',
      en: 'The Alert Threshold would have drafted an alert on the 7:30 red warning — and for every hour it was not sent, someone would have had to write why. The Crisis Command Log would have passed the decision to a deputy while the president was away. And the Alert Ledger would show publicly the gap between water and message, town by town.',
    },
    antilogos: {
      el: 'Η βροχή ήταν ακραία, και σε ορισμένες πόλεις το νερό έφτασε ώρες μετά τη βροχή. Ο πρόεδρος ρίχνει ευθύνη στην κρατική αρχή λεκάνης απορροής, που το αρνείται. Οι εισαγγελείς και το Ανώτατο Δικαστήριο — όχι μόνο οι δικηγόροι του — έκριναν τα στοιχεία εναντίον του ανεπαρκή, και η ευθύνη για τις προειδοποιήσεις μοιράζεται ανάμεσα σε κράτος και περιφέρεια.',
      en: 'The rain was extreme, and in some towns the water arrived hours after the rain. The president blames the state river-basin authority, which denies it. Prosecutors and the High Court — not only his lawyers — found the evidence against him insufficient, and responsibility for warnings is split between state and region.',
    },
    reply: {
      el: 'Ότι το νερό ήρθε ώρες μετά τη βροχή σημαίνει ακριβώς ότι υπήρχε χρόνος να σταλεί προειδοποίηση. Και ότι η ευθύνη μοιράζεται ανάμεσα σε δύο επίπεδα είναι ο λόγος που χρειάζεται ένα ημερολόγιο που δείχνει ποιος ήξερε τι και πότε — ώστε να μη μένει στο δικαστήριο να το ανασυνθέσει χρόνια μετά.',
      en: 'That the water came hours after the rain means precisely that there was time to warn. And that responsibility is split between two levels is why a log is needed showing who knew what and when — so a court is not left to reconstruct it years later.',
    },
    lever: {
      el: 'Ζήτησε κάθε κόκκινη προειδοποίηση της ΕΜΥ να συνοδεύεται δημόσια από την ώρα που στάλθηκε — ή όχι — μήνυμα 112 για κάθε περιοχή.',
      en: 'Ask that every red warning from the met service be shown publicly alongside the time a 112 message was — or was not — sent for each area.',
    },
    scores: { harm: 10, power: 8, recurrence: 8, remedy: 9 },
    status: {
      el: 'Ανοιχτή — ανάκριση σε εξέλιξη. Η πρώην υπουργός και ο γραμματέας της ερευνώνται και τεκμαίρονται αθώοι· ο πρώην πρόεδρος δεν ερευνάται και τεκμαίρεται αθώος.',
      en: 'Open — investigation under way. The former minister and her secretary are under investigation and presumed innocent; the former president is not under investigation and is presumed innocent.',
    },
    sources: [
      { title: 'KTVZ / CNN — Too little, too late: residents trapped with no warning (2024)', url: 'https://ktvz.com/news/national-world/cnn-world/2024/11/01/too-little-too-late-how-valencias-residents-were-trapped-with-no-warning-in-spains-deadly-floods/' },
      { title: 'The Olive Press — Judge orders sacked emergency chiefs to explain late warning (2025)', url: 'https://theolivepress.es/spain-news/2025/03/10/judge-orders-sacked-emergency-chiefs-to-explain-why-valencia-flood-warning-was-sent-so-late' },
      { title: 'The Local — Leader of flood-hit Valencia resigns (2025)', url: 'https://www.thelocal.es/20251103/breaking-leader-of-flood-hit-valencia-resigns' },
      { title: 'Ara — Valencian High Court rejects charging the former president now (2026)', url: 'https://en.ara.cat/politics/the-valencian-high-court-of-justice-rejects-charging-mazon-now_1_5679874.amp.html' },
    ],
  },
  {
    id: 'derna-2023',
    when: '2012–2026',
    place: { el: 'Ντέρνα, Λιβύη', en: 'Derna, Libya' },
    title: {
      el: 'Τα χρήματα συντήρησης είχαν εγκριθεί, τα φράγματα δεν επισκευάστηκαν ποτέ: οι αρχές υδάτων και φραγμάτων της Λιβύης καταδικάστηκαν για τη Ντέρνα — και το Ανώτατο Δικαστήριο διέταξε νέα δίκη',
      en: 'Maintenance money was allocated, the dams were never repaired: Libya’s water and dam authorities convicted for Derna — then the Supreme Court ordered a retrial',
    },
    harmed: {
      el: 'Πάνω από 4.000 καταγεγραμμένοι νεκροί κατά τον ΠΟΥ, χιλιάδες αγνοούμενοι — ο τελικός αριθμός αμφισβητείται· τουλάχιστον 25.000 εκτοπισμένοι',
      en: 'Over 4,000 registered deaths per the WHO, thousands missing — the final toll is disputed; at least 25,000 displaced',
    },
    plain: {
      el: 'Δύο φράγματα πάνω από τη Ντέρνα είχαν ανάγκη συντήρησης εδώ και χρόνια· τα χρήματα είχαν εγκριθεί, οι εργασίες δεν έγιναν ποτέ. Τη νύχτα της καταιγίδας οι αρχές επέβαλαν απαγόρευση κυκλοφορίας — κράτησαν τους ανθρώπους στα σπίτια — και διαβεβαίωσαν ότι «τα φράγματα είναι σε καλή κατάσταση». Κατέρρευσαν μέσα στη νύχτα.',
      en: 'Two dams above Derna had needed maintenance for years; money had been allocated, the work never done. On the night of the storm the authorities imposed a curfew — keeping people at home — and assured that “the dams are in good condition.” They collapsed in the night.',
    },
    facts: [
      {
        el: 'Πριν από την καταστροφή: έλεγχος του 2021 της Ελεγκτικής Υπηρεσίας της Λιβύης βρήκε ότι τα φράγματα δεν είχαν συντηρηθεί, παρά τα πάνω από 2 εκατ. δολάρια που είχαν εγκριθεί γι’ αυτό το 2012 και το 2013. Υδρολόγος είχε προειδοποιήσει το 2022 για «πιθανή καταστροφή».',
        en: 'Before the disaster: a 2021 audit by Libya’s Audit Bureau found the dams had not been maintained despite more than $2 million allocated for it in 2012 and 2013. A hydrologist had warned in 2022 of “a potential catastrophe.”',
      },
      {
        el: '10 Σεπτεμβρίου 2023: οι αρχές ασφαλείας της Ντέρνα επιβάλλουν απαγόρευση κυκλοφορίας για τις «αναμενόμενες καιρικές συνθήκες» — οι άνθρωποι μένουν σπίτι, δεν εκκενώνονται· την ίδια νύχτα το υπουργείο Υδάτων γράφει ότι «τα φράγματα είναι σε καλή κατάσταση και όλα είναι υπό έλεγχο».',
        en: '10 September 2023: Derna’s security directorate imposes a curfew for the “expected weather conditions” — people stay home rather than evacuate; the same night the Water Resources Ministry posts that “the dams are in good condition and things are under control.”',
      },
      {
        el: '11 Σεπτεμβρίου 2023: τα δύο φράγματα, χτισμένα τη δεκαετία του 1970, καταρρέουν και ένα κύμα σαρώνει το ρέμα που διασχίζει την πόλη. Ο γενικός γραμματέας του Παγκόσμιου Μετεωρολογικού Οργανισμού δηλώνει ότι με λειτουργική μετεωρολογική υπηρεσία και εκκενώσεις «θα μπορούσαμε να είχαμε αποφύγει τα περισσότερα θύματα».',
        en: '11 September 2023: the two dams, built in the 1970s, collapse and a wave sweeps down the wadi through the city. The World Meteorological Organization’s head says that with a functioning met service and evacuations “we could have avoided most of the human casualties.”',
      },
      {
        el: '28 Ιουλίου 2024: το δικαστήριο της Ντέρνα καταδικάζει 12 από 16 στελέχη διαχείρισης φραγμάτων σε 9 έως 26–27 χρόνια για αμέλεια και σπατάλη δημόσιου χρήματος· 4 αθωώνονται.',
        en: '28 July 2024: the Derna court convicts 12 of 16 dam-management officials to 9 to 26–27 years for negligence and waste of public money; 4 are acquitted.',
      },
      {
        el: 'Οκτώβριος 2025: το Ανώτατο Δικαστήριο της Λιβύης κρίνει ότι οι αποφάσεις του 2024 «παραβίασαν τον νόμο», τις ακυρώνει και διατάσσει νέα δίκη των 12 στη Βεγγάζη.',
        en: 'October 2025: Libya’s Supreme Court finds the 2024 verdicts “violated the law,” quashes them and orders a retrial of the 12 in Benghazi.',
      },
    ],
    outcome: {
      el: 'Βαριές καταδίκες μέσα σε έναν χρόνο — που ακυρώθηκαν το 2025· η υπόθεση ξεκινά από την αρχή.',
      en: 'Heavy convictions within a year — quashed in 2025; the case starts over.',
    },
    breach: {
      el: 'Ένα φράγμα πάνω από μια πόλη είναι μια υπόσχεση που ανανεώνεται με κάθε συντήρηση. Όταν τα χρήματα εγκρίνονται και οι εργασίες δεν γίνονται, όταν οι επιστήμονες προειδοποιούν και η απάντηση είναι απαγόρευση κυκλοφορίας αντί για εκκένωση, η πόλη κοιμάται κάτω από έναν κίνδυνο που όλοι γνώριζαν εκτός από αυτήν.',
      en: 'A dam above a city is a promise renewed with every maintenance. When the money is allocated and the work not done, when scientists warn and the answer is a curfew instead of an evacuation, the city sleeps beneath a danger everyone knew about except the city itself.',
    },
    patterns: ['unfinished-works', 'reassurance', 'forecast-ignored'],
    safeguards: ['prevention-ledger', 'open-risk', 'alert-trigger'],
    counterfactual: {
      el: 'Το Ίχνος του Ευρώ της Πρόληψης θα είχε δείξει από το 2013 ότι τα χρήματα συντήρησης εγκρίθηκαν και οι εργασίες δεν έγιναν — το εύρημα του ελέγχου του 2021 θα ήταν δημόσιο οκτώ χρόνια νωρίτερα. Το Ο Κίνδυνος Λέγεται Όπως Είναι θα είχε δημοσιεύσει την προειδοποίηση του υδρολόγου δίπλα στη διαβεβαίωση «όλα υπό έλεγχο».',
      en: 'Following the Prevention Euro would have shown from 2013 that maintenance money was allocated and the work not done — the 2021 audit finding would have been public eight years earlier. Risk Told as It Is would have published the hydrologist’s warning next to the “all under control” assurance.',
    },
    antilogos: {
      el: 'Η Λιβύη έχει δύο αντίπαλες κυβερνήσεις και πάνω από μια δεκαετία συγκρούσεων· διεθνής αξιολόγηση απέδωσε την καταστροφή και σε παρωχημένο υδρολογικό σχεδιασμό. Η χώρα δεν είχε καν λειτουργική υπηρεσία προειδοποίησης — αποτυχία κρατικής ικανότητας, όχι μόνο ατομική αμέλεια. Και η γρήγορη, βαριά απόφαση του 2024 κρίθηκε η ίδια παράνομη.',
      en: 'Libya has two rival governments and more than a decade of conflict; an international assessment also blamed outdated hydrological design. The country lacked even a functioning warning service — a failure of state capacity, not only individual negligence. And the fast, heavy 2024 verdict was itself found unlawful.',
    },
    reply: {
      el: 'Ακριβώς: μια γρήγορη καταδίκη δεν είναι απόδειξη δίκαιης λογοδοσίας — και μια δημόσια καταγραφή είναι πολύ πιο δύσκολο να ακυρωθεί από μια απόφαση. Ακόμη και ένα κράτος σε σύγκρουση μπορεί να δημοσιεύει ότι ένα κονδύλι εγκρίθηκε και ένα έργο δεν έγινε. Αυτό θα έφτανε για να ξέρει η πόλη.',
      en: 'Exactly: a fast conviction is not proof of fair accountability — and a public record is far harder to quash than a verdict. Even a state in conflict can publish that funds were allocated and a work not done. That would have been enough for the city to know.',
    },
    lever: {
      el: 'Ζήτησε δημόσια λίστα όλων των φραγμάτων της χώρας με την ημερομηνία της τελευταίας επιθεώρησης και τις εκκρεμείς εργασίες συντήρησης.',
      en: 'Ask for a public list of every dam in the country with its last inspection date and pending maintenance work.',
    },
    scores: { harm: 10, power: 8, recurrence: 7, remedy: 8 },
    status: {
      el: 'Ανοιχτή — νέα δίκη στο Εφετείο της Βεγγάζης. Με την ακύρωση της απόφασης, οι 12 δεν έχουν ισχύουσα καταδίκη και τεκμαίρονται αθώοι· οι 4 του 2024 είναι αθώοι.',
      en: 'Open — retrial at the Benghazi Court of Appeal. With the verdict quashed, the 12 have no standing conviction and are presumed innocent; the 4 acquitted in 2024 are acquitted.',
    },
    sources: [
      { title: 'Khaleej Times / Reuters — “They knew”: fury that warnings went unheeded (2023)', url: 'https://www.khaleejtimes.com/world/they-knew-fury-of-libyans-that-warnings-went-unheeded-before-flood' },
      { title: 'The Week / AP — Top prosecutor says 8 officials jailed (2023)', url: 'https://www.theweek.in/news/world/2023/09/25/libyas-top-prosecutor-says-8-officials-jailed-as-part-of-investigation-into-dams-deadly-collapse.html' },
      { title: 'JURIST — Court convicts twelve for role in deadly floods (2024)', url: 'https://www.jurist.org/news/2024/07/libya-court-convicts-twelve-for-role-in-deadly-floods-that-killed-thousands/' },
      { title: 'Annahar — Libya retries officials over the Derna dams (2025)', url: 'https://www.annahar.com/arab-world/north-africa/253041/ليبيا-تعيد-محاكمة-مسؤولين-بسبب-انهيار-سدي-درنة-خلال-الإعصار-دانيال' },
    ],
  },
  {
    id: 'itaewon-2022',
    when: '2022–2026',
    place: { el: 'Ιτεγουόν, Σεούλ', en: 'Itaewon, Seoul' },
    title: {
      el: 'Τουλάχιστον 11 κλήσεις έκτακτης ανάγκης, κανένας αστυνομικός στον δρόμο: καταδικάστηκε ο διοικητής του τοπικού τμήματος — ο δήμαρχος της συνοικίας και ο αρχηγός της αστυνομίας της Σεούλ αθωώθηκαν',
      en: 'At least 11 emergency calls, no police on the street: the local station chief convicted — the district head and the Seoul police chief acquitted',
    },
    harmed: { el: '159 νεκροί, οι περισσότεροι κάτω των 30 — ανάμεσά τους 26 ξένοι', en: '159 dead, most under 30 — 26 of them foreign nationals' },
    plain: {
      el: 'Τη νύχτα του Halloween πλήθος συνθλίφτηκε σε ένα στενό κατηφορικό δρομάκι της Σεούλ. Ώρες πριν, κάτοικοι είχαν καλέσει τουλάχιστον 11 φορές την αστυνομία για τον συνωστισμό. Καμία δύναμη ελέγχου πλήθους δεν ήταν εκεί. Σε πρώτο βαθμό καταδικάστηκαν τα τοπικά στελέχη· οι ανώτεροι αθωώθηκαν.',
      en: 'On Halloween night a crowd was crushed in a narrow sloping alley in Seoul. Hours earlier, people had called the police at least 11 times about the crowding. No crowd-control officers were there. At first instance the local officials were convicted; their superiors were acquitted.',
    },
    facts: [
      {
        el: '29 Οκτωβρίου 2022, ώρες πριν: το αστυνομικό τμήμα της συνοικίας αγνοεί τουλάχιστον 11 κλήσεις έκτακτης ανάγκης για κίνδυνο συνωστισμού και καταγράφει ψευδώς ότι ανταποκρίθηκε· καμία δύναμη ελέγχου πλήθους δεν βρίσκεται στο Ιτεγουόν, και η συνοικία δεν ενεργοποιεί το κέντρο αντιμετώπισης καταστροφών.',
        en: '29 October 2022, hours before: the local police station ignores at least 11 emergency calls about crowding risks and falsely logs responses; no crowd-control officers are in Itaewon, and the district does not activate its disaster response centre.',
      },
      {
        el: '29 Οκτωβρίου 2022: το πλήθος συνθλίβεται σε ένα στενό κατηφορικό δρομάκι· 159 νεκροί.',
        en: '29 October 2022: the crowd is crushed in a narrow sloping alley; 159 dead.',
      },
      {
        el: 'Ιανουάριος 2023: ειδική ομάδα 501 αστυνομικών χαρακτηρίζει την καταστροφή «ανθρωπογενή» και παραπέμπει 23 αξιωματούχους· ένας πρώην αξιωματικός κατηγορείται ότι διέγραψε εσωτερικές αναφορές που προειδοποιούσαν για συνωστισμό. Τα υπουργεία και η πόλη κρίνονται «μη νομικά υπεύθυνα» για τον έλεγχο πλήθους.',
        en: 'January 2023: a 501-strong special police team calls the disaster “man-made” and refers 23 officials to prosecutors; a former officer is charged with deleting internal reports warning of overcrowding. The ministries and the city are found “not legally responsible” for crowd control.',
      },
      {
        el: '30 Σεπτεμβρίου – 17 Οκτωβρίου 2024: ο πρώην διοικητής του τοπικού τμήματος καταδικάζεται σε 3 χρόνια για ανθρωποκτονία από αμέλεια· ο δήμαρχος της συνοικίας αθωώνεται επειδή ο νόμος δεν απαιτούσε σχέδιο «για εκδηλώσεις χωρίς διοργανωτή», και ο πρώην αρχηγός της αστυνομίας της Σεούλ αθωώνεται. Μια εκπρόσωπος των οικογενειών: «Τι σημαίνει όταν λένε ότι υπάρχει πρόβλημα, αλλά κανείς δεν φταίει;»',
        en: '30 September – 17 October 2024: the former local station chief is sentenced to 3 years for negligence causing death; the district head is acquitted because the law did not require plans “for events without organizers,” and the former Seoul police chief is acquitted. A families’ representative: “What does it mean when they say there is a problem, but no one is at fault?”',
      },
      {
        el: '23 Οκτωβρίου 2025: κρατική επιθεώρηση βρίσκει ότι η μεταφορά του προεδρικού γραφείου στη συνοικία ήταν «βασικός παράγοντας» της έλλειψης αστυνομικών — οι διαδηλώσεις στην περιοχή του τμήματος αυξήθηκαν από 34 σε 921 — και ζητά πειθαρχικά για 62 αξιωματούχους.',
        en: '23 October 2025: a government inspection finds that moving the presidential office into the district was “a key factor” in the lack of police — rallies in the station’s area rose from 34 to 921 — and seeks discipline for 62 officials.',
      },
    ],
    outcome: {
      el: 'Πρωτόδικες καταδίκες μόνο για την τοπική αστυνομική αλυσίδα· αθωώσεις για τη συνοικία και τον αρχηγό της Σεούλ. Μια κρατική έρευνα δείχνει ψηλότερα.',
      en: 'First-instance convictions only for the local police chain; acquittals for the district and the Seoul chief. A state inquiry points higher.',
    },
    breach: {
      el: 'Όταν οι πολίτες καλούν ξανά και ξανά για να πουν «εδώ θα γίνει κακό», η κλήση είναι η προειδοποίηση. Όταν οι κλήσεις καταγράφονται ψευδώς ως απαντημένες, οι αναφορές διαγράφονται και κανένας νόμος δεν ορίζει ποιος είναι υπεύθυνος για ένα πλήθος χωρίς διοργανωτή, η ευθύνη χάνεται ακριβώς εκεί όπου χρειαζόταν.',
      en: 'When citizens call again and again to say “someone will get hurt here,” the call is the warning. When calls are falsely logged as answered, reports are deleted and no law says who is responsible for a crowd without an organiser, responsibility vanishes exactly where it was needed.',
    },
    patterns: ['blame-diffused', 'forecast-ignored', 'no-reckoning'],
    safeguards: ['single-responsible', 'alert-ledger', 'reckoning-ledger'],
    counterfactual: {
      el: 'Ο Ένας Επώνυμος Υπεύθυνος θα είχε ορίσει εκ των προτέρων ποιος φέρει την ευθύνη για ένα γνωστό πλήθος εκατοντάδων χιλιάδων χωρίς διοργανωτή. Το Ημερολόγιο Ειδοποιήσεων θα κατέγραφε κάθε κλήση και την πραγματική απάντηση — καμία ψευδής καταχώριση δεν θα μπορούσε να περάσει. Και η Ζυγαριά των Νεκρών θα έδειχνε ποιοι κρίθηκαν και ποιοι όχι.',
      en: 'One Named Office would have set in advance who is responsible for a known crowd of hundreds of thousands without an organiser. The Alert Ledger would record every call and the real response — no false entry could pass. And the Scale of the Dead would show who was judged and who was not.',
    },
    antilogos: {
      el: 'Δεν υπήρχε διοργανωτής, και κανένας νόμος τότε δεν απαιτούσε σχέδιο για ένα ανοργάνωτο πλήθος — κενό του νόμου, όχι μόνο των ανθρώπων. Δύο διαφορετικά σώματα έκριναν τα υπουργεία μη νομικά υπεύθυνα, και οι αστυνομικές δυνάμεις είχαν στραγγιστεί από μια πολιτική απόφαση πάνω από όσους δικάστηκαν.',
      en: 'There was no organiser, and no law then required a plan for an unorganised crowd — a gap in the law, not only in people. Two different bodies found the ministries not legally responsible, and police numbers had been drained by a political decision above those on trial.',
    },
    reply: {
      el: 'Ακριβώς αυτό διορθώνει η πρόταση: ένα κενό του νόμου που φαίνεται μόνο μετά από 159 θανάτους. Ένας χάρτης ευθυνών θα είχε δείξει το κενό εκ των προτέρων. Και αν η απόφαση που στράγγιξε την αστυνομία πάρθηκε ψηλότερα, ένα δημόσιο ημερολόγιο θα έδειχνε κι αυτό.',
      en: 'That is exactly what the proposal fixes: a legal gap that shows only after 159 deaths. A map of responsibilities would have shown the gap in advance. And if the decision that drained the police was taken higher up, a public log would show that too.',
    },
    lever: {
      el: 'Ζήτησε για κάθε μεγάλη μη οργανωμένη συγκέντρωση — γιορτές, πανηγύρια, δρόμους νυχτερινής ζωής — να ορίζεται δημόσια ένας υπεύθυνος για την ασφάλεια του πλήθους.',
      en: 'Ask that for every large unorganised gathering — festivals, fairs, nightlife streets — one office be publicly named responsible for crowd safety.',
    },
    scores: { harm: 9, power: 8, recurrence: 7, remedy: 8 },
    status: {
      el: 'Ανοιχτή. Οι καταδίκες είναι πρωτόδικες και υπό έφεση — τεκμαίρονται αθώοι ως την αμετάκλητη απόφαση. Οι αθωωθέντες είναι αθώοι· η εισαγγελία άσκησε έφεση. Ειδική επιτροπή έρευνας συνεχίζει ως το 2027.',
      en: 'Open. The convictions are first-instance and under appeal — presumed innocent until final judgment. Those acquitted are innocent; prosecutors appealed. A special investigation committee continues until 2027.',
    },
    sources: [
      { title: 'Korea JoongAng Daily — Constitutional Court rejects impeachment of interior minister (2023)', url: 'https://www.koreajoongangdaily.com/korea/constitutional-court-rejects-impeachment-of-interior-minister-over-itaewon-crowd-crush/11029646' },
      { title: 'Korea Times — Presidential office relocation blamed for police failures (2025)', url: 'https://www.koreatimes.co.kr/amp/southkorea/politics/20251023/presidential-office-relocation-blamed-for-police-failures-in-itaewon-crowd-crush' },
      { title: 'The Sun / AFP — Police wrap up probe, 23 officials referred (2023)', url: 'https://thesun.my/news/police-in-s-korea-wrap-up-months-long-probe-into-itaewon-crush-23-officials-referred-to-prosecution-lm10495824/' },
      { title: 'Asia News Network — Former Seoul police chief acquitted (2024)', url: 'https://asianews.network/?p=171988' },
      { title: 'Seoul Shinmun — First-instance verdicts (2024)', url: 'https://m.seoul.co.kr/news/2024/09/30/20240930500156' },
    ],
  },
  {
    id: 'rigopiano-2017',
    when: '2017–2026',
    place: { el: 'Ριγκοπιάνο, Αμπρούτσο, Ιταλία', en: 'Rigopiano, Abruzzo, Italy' },
    title: {
      el: 'Η περιφέρεια δεν σχεδίασε ποτέ τον χάρτη χιονοστιβάδων που απαιτούσε νόμος του 1992, η νομαρχία θεώρησε τον συναγερμό φάρσα: εννέα χρόνια μετά, τρεις διευθυντές καταδικάστηκαν',
      en: 'The region never drew the avalanche map a 1992 law required, the prefecture called the alarm a hoax: nine years later, three directors convicted',
    },
    harmed: { el: '29 νεκροί από τους 40 ανθρώπους του ξενοδοχείου — επισκέπτες και προσωπικό', en: '29 dead of the 40 people in the hotel — guests and staff' },
    plain: {
      el: 'Μετά από τέσσερις σεισμούς και σφοδρή χιονόπτωση, οι επισκέπτες ενός ορεινού ξενοδοχείου ζητούσαν απεγνωσμένα να φύγουν. Ο δρόμος δεν καθαρίστηκε. Μια χιονοστιβάδα έθαψε το ξενοδοχείο, και ο πρώτος συναγερμός θεωρήθηκε φάρσα. Η βασική αιτία, κατά το δικαστήριο: ένας χάρτης κινδύνου που δεν σχεδιάστηκε ποτέ.',
      en: 'After four earthquakes and heavy snowfall, guests at a mountain hotel were desperate to leave. The road was not cleared. An avalanche buried the hotel, and the first alarm was dismissed as a hoax. The root cause, according to the court: a hazard map that was never drawn.',
    },
    facts: [
      {
        el: '16 Ιανουαρίου 2017: κατά την πραγματογνωμοσύνη για την εισαγγελία, το ξενοδοχείο «έπρεπε να είχε εκκενωθεί» εκείνο το απόγευμα, δύο μέρες πριν από τη χιονοστιβάδα, αφού τα δελτία προειδοποιούσαν για έντονη χιονόπτωση και πιθανές χιονοστιβάδες.',
        en: '16 January 2017: according to the expert report for prosecutors, the hotel “should have been evacuated” that afternoon, two days before the avalanche, since bulletins warned of heavy snow and possible avalanches.',
      },
      {
        el: '18 Ιανουαρίου 2017: ο διευθυντής του ξενοδοχείου στέλνει email στον νομάρχη, την επαρχία, την αστυνομία και τον δήμαρχο ζητώντας επέμβαση: δύο μέτρα χιόνι, τηλέφωνα εκτός λειτουργίας, καύσιμα ως την επομένη, «οι επισκέπτες είναι τρομοκρατημένοι από τους σεισμούς».',
        en: '18 January 2017: the hotel manager emails the prefect, the province, the police and the mayor asking for intervention: two metres of snow, phones down, fuel until the next day, “guests are terrified by the seismic shocks.”',
      },
      {
        el: '18 Ιανουαρίου 2017: η χιονοστιβάδα χτυπά μεταξύ 16:30 και 16:48. Ένας επιζών καλεί στις 17:08· η νομαρχία θεωρεί τον συναγερμό «φάρσα», και ξανά στις 18:03. Η διάσωση ενεργοποιείται μόνο στις 19:01, και τα πρώτα ελικόπτερα φτάνουν το επόμενο πρωί.',
        en: '18 January 2017: the avalanche strikes between 16:30 and 16:48. A survivor calls at 17:08; the prefecture dismisses the alarm as a “hoax,” and again at 18:03. Rescue is activated only at 19:01, and the first helicopters arrive the next morning.',
      },
      {
        el: '3 Δεκεμβρίου 2024: το ιταλικό Ακυρωτικό καθιστά αμετάκλητη την καταδίκη του πρώην νομάρχη Πεσκάρα για πλαστογραφία και άρνηση εκτέλεσης υπηρεσιακών καθηκόντων, και στέλνει σε νέα δίκη την ευθύνη έξι περιφερειακών διευθυντών πολιτικής προστασίας.',
        en: '3 December 2024: Italy’s Court of Cassation makes final the former Pescara prefect’s conviction for forgery and refusal of official duties, and sends the liability of six regional civil-protection directors to a new trial.',
      },
      {
        el: '11 Φεβρουαρίου 2026: το Εφετείο της Περούτζια καταδικάζει τρεις πρώην διευθυντές της περιφέρειας σε 2 χρόνια για καταστροφή από αμέλεια, επειδή δεν σχεδιάστηκε ο χάρτης κινδύνου χιονοστιβάδων που απαιτούσε νόμος του 1992: «η απουσία του απέκλεισε κάθε δυνατότητα να προληφθούν η καταστροφή και οι θάνατοι». Για δύο στελέχη της επαρχίας οι κατηγορίες παραγράφηκαν.',
        en: '11 February 2026: the Perugia appeal court convicts three former regional directors to 2 years for negligent disaster, because the avalanche hazard map required by a 1992 law was never drawn: “its absence precluded every possibility of preventing the destruction and deaths.” For two provincial officials the charges were time-barred.',
      },
    ],
    outcome: {
      el: 'Αμετάκλητα: ο πρώην νομάρχης (για πλαστογραφία, όχι για τους θανάτους) και ο διευθυντής του ξενοδοχείου. Σε δεύτερο βαθμό: τρεις πρώην διευθυντές της περιφέρειας. Οι περισσότεροι από τους 30 αρχικούς κατηγορουμένους αθωώθηκαν.',
      en: 'Final: the former prefect (for forgery, not for the deaths) and the hotel manager. On appeal: three former regional directors. Most of the 30 original defendants were acquitted.',
    },
    breach: {
      el: 'Ένας νόμος του 1992 ζητούσε από την περιφέρεια να χαρτογραφήσει πού πέφτουν οι χιονοστιβάδες. Είκοσι πέντε χρόνια μετά, ο χάρτης δεν υπήρχε — και ένα ξενοδοχείο λειτουργούσε ακριβώς εκεί. Όταν η πρόληψη μένει ανεκτέλεστη για ένα τέταρτο του αιώνα, ο κίνδυνος δεν είναι απρόβλεπτος· είναι απλώς αχαρτογράφητος.',
      en: 'A 1992 law asked the region to map where avalanches fall. Twenty-five years later, the map did not exist — and a hotel operated right there. When prevention stays undone for a quarter-century, the danger is not unforeseeable; it is simply unmapped.',
    },
    patterns: ['unfinished-works', 'forecast-ignored', 'blame-diffused'],
    safeguards: ['prevention-ledger', 'alert-ledger', 'single-responsible'],
    counterfactual: {
      el: 'Το Ίχνος του Ευρώ της Πρόληψης θα έδειχνε δημόσια, κάθε χρόνο από το 1992, ότι ο χάρτης χιονοστιβάδων εκκρεμούσε — και ποια περιφέρεια τον όφειλε. Το Ημερολόγιο Ειδοποιήσεων θα είχε καταγράψει το email του ξενοδοχείου με ώρα και παραλήπτες, και κανένας συναγερμός δεν θα μπορούσε να απορριφθεί ως φάρσα χωρίς υπογραφή.',
      en: 'Following the Prevention Euro would have shown publicly, every year since 1992, that the avalanche map was pending — and which region owed it. The Alert Ledger would have logged the hotel’s email with its time and recipients, and no alarm could be dismissed as a hoax without a signature.',
    },
    antilogos: {
      el: 'Τέσσερις σεισμοί άνω των 5 Ρίχτερ χτύπησαν την ίδια μέρα, με εξαιρετική χιονόπτωση. Η χιονοστιβάδα έπεσε πριν από την πρώτη κλήση, και μέρος της καθυστέρησης οφείλεται σε λάθος πληροφορία από τον ίδιο τον διευθυντή του ξενοδοχείου. Σε τέσσερις βαθμούς, οι περισσότεροι κατηγορούμενοι αθωώθηκαν.',
      en: 'Four earthquakes above magnitude 5 struck the same day, with exceptional snowfall. The avalanche fell before the first call, and part of the delay came from wrong information relayed by the hotel’s own manager. Across four court levels, most defendants were acquitted.',
    },
    reply: {
      el: 'Ούτε ο ταχύτερος συναγερμός δεν θα έσωζε όσους είχαν ήδη θαφτεί. Αυτό όμως κάνει τον χάρτη πιο σημαντικό, όχι λιγότερο: η απόφαση που μετρούσε πάρθηκε — ή δεν πάρθηκε — πολλά χρόνια πριν, όταν ένα ξενοδοχείο χτίστηκε και λειτουργούσε σε σημείο που κανείς δεν είχε μελετήσει.',
      en: 'Not even the fastest alarm would have saved those already buried. But that makes the map more important, not less: the decision that mattered was taken — or not taken — years before, when a hotel stood and operated in a spot no one had studied.',
    },
    lever: {
      el: 'Ζήτησε από την περιφέρειά σου να δημοσιεύσει ποιοι χάρτες κινδύνου (πλημμύρας, κατολίσθησης, χιονοστιβάδας) απαιτούνται από τον νόμο και ποιοι έχουν ολοκληρωθεί.',
      en: 'Ask your region to publish which hazard maps (flood, landslide, avalanche) the law requires and which have been completed.',
    },
    scores: { harm: 8, power: 6, recurrence: 7, remedy: 8 },
    status: {
      el: 'Πρώην νομάρχης και διευθυντής ξενοδοχείου: αμετάκλητα. Οι τρεις περιφερειακοί διευθυντές καταδικάστηκαν σε δεύτερο βαθμό — όχι αμετάκλητα, τεκμαίρονται αθώοι. Οι αθωωθέντες είναι αθώοι· όσων οι κατηγορίες παραγράφηκαν δεν κρίθηκαν.',
      en: 'Former prefect and hotel manager: final. The three regional directors were convicted on appeal — not final, presumed innocent. Those acquitted are innocent; those whose charges were time-barred were never judged.',
    },
    sources: [
      { title: 'ANSA — Rigopiano should have been evacuated, report says (2017)', url: 'https://www.ansa.it/english/news/2017/11/29/rigopiano-should-have-been-evacuated-report-3_1aa37d41-97ab-4eaf-bcd2-c0ef93457461.html' },
      { title: 'L’Adige — The hotel’s email to the authorities (2017)', url: 'https://www.ladige.it/cronaca/rigopiano-lemail-dellhotel-alle-autorita-clienti-terrorizzati-intervenite-ti1bcois' },
      { title: 'Il Fatto Quotidiano — First alarm at 17:08, rescue activated at 19:01 (2017)', url: 'https://www.ilfattoquotidiano.it/2017/01/25/hotel-rigopiano-primo-allarme-al-118-alle-17-08-macchina-soccorsi-si-attivo-alle-19-01/3341271/' },
      { title: 'Il Fatto Quotidiano — Cassation confirms former prefect’s conviction (2024)', url: 'https://www.ilfattoquotidiano.it/2024/12/03/processo-rigopiano-la-cassazione-conferma-la-condanna-per-lex-prefetto-di-pescara/7790322/' },
      { title: 'Il Post — Three convicted in the second appeal trial (2026)', url: 'https://www.ilpost.it/2026/02/11/tre-persone-condannate-processo-appello-bis-rigopiano-sindaco-farindola/' },
    ],
  },
]
