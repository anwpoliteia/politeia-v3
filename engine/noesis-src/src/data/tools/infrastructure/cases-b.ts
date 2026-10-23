// ΔΑΙΔΑΛΟΣ — cases 6–10. Same rules as cases-a.ts: sourced facts checked on
// 2026-09-30; heads of state named as such, officers never in headlines;
// presumption of innocence stated for every open case.

import type { ToolCase } from '../types'

export const CASES_B: readonly ToolCase[] = [
  {
    id: 'genoa-morandi-2018',
    when: '2018–2026',
    place: { el: 'Γένοβα, Ιταλία', en: 'Genoa, Italy' },
    title: {
      el: 'Ο παραχωρησιούχος του αυτοκινητόδρομου και ο επόπτης του υπουργείου: 43 νεκροί σε μια γέφυρα που, κατά την κατηγορία, αφέθηκε χρόνια χωρίς συντήρηση',
      en: 'The motorway concessionaire and the ministry’s overseer: 43 dead on a bridge that, prosecutors say, was left for years without maintenance',
    },
    harmed: { el: '43 νεκροί', en: '43 dead' },
    plain: {
      el: 'Τον Αύγουστο 2018 ένα τμήμα 200 μέτρων της γέφυρας Μοράντι κατέρρευσε. Οι εισαγγελείς υποστήριξαν ότι χρόνια παραμέλησης της συντήρησης προκάλεσαν την κατάρρευση και ότι πολλοί ήξεραν πως μπορούσε να πέσει. Το 2026 καταδικάστηκαν 32 — ανάμεσά τους και ο υπάλληλος του υπουργείου που εποπτεύε τις παραχωρήσεις.',
      en: 'In August 2018 a 200-metre section of the Morandi bridge collapsed. Prosecutors argued that years of neglected maintenance caused it and that many knew it could fall. In 2026, 32 were convicted — among them the ministry official who oversaw the concessions.',
    },
    facts: [
      {
        el: '14 Αυγούστου 2018: τμήμα περίπου 200 μέτρων της οδογέφυρας καταρρέει· 43 νεκροί.',
        en: '14 August 2018: a section of about 200 metres of the viaduct collapses; 43 dead.',
      },
      {
        el: 'Πριν από τη δίκη, ο παραχωρησιούχος και η εταιρεία συντήρησης και μελετών του συμφωνούν να πληρώσουν περίπου 30 εκατ. ευρώ — οπότε οι εταιρείες δεν δικάστηκαν ως νομικά πρόσωπα.',
        en: 'Before trial, the concessionaire and its maintenance and engineering arm agree to pay about €30 million — so the companies were not tried as corporate defendants.',
      },
      {
        el: 'Οι εισαγγελείς υποστήριξαν ότι χρόνια παραμέλησης της συντήρησης προκάλεσαν την κατάρρευση και ότι πολλοί κατηγορούμενοι ήξεραν ότι η γέφυρα μπορούσε να πέσει.',
        en: 'Prosecutors argued years of maintenance neglect caused the collapse and that many defendants knew the bridge could fall.',
      },
      {
        el: '16 Ιουλίου 2026: από 57 κατηγορουμένους, 32 καταδικάζονται για ανθρωποκτονία και κατάρρευση από αμέλεια — σχεδόν 200 χρόνια συνολικά — και 25 αθωώνονται ή απαλλάσσονται λόγω παραγραφής. Ο πρώην διευθύνων σύμβουλος του παραχωρησιούχου καταδικάζεται σε 12 χρόνια.',
        en: '16 July 2026: of 57 defendants, 32 are convicted of homicide and culpable collapse — almost 200 years in total — and 25 are acquitted or time-barred. The concessionaire’s former chief executive is sentenced to 12 years.',
      },
      {
        el: 'Ο υπάλληλος του υπουργείου Μεταφορών που ήταν υπεύθυνος για την εποπτεία των παραχωρήσεων αυτοκινητοδρόμων καταδικάζεται σε 5 χρόνια — καταδικάστηκε δηλαδή και ο επόπτης του κράτους, όχι μόνο η εταιρεία.',
        en: 'The transport ministry manager in charge of overseeing motorway concessions is sentenced to 5 years — the state’s supervisor was convicted too, not only the company.',
      },
    ],
    outcome: {
      el: 'Πρωτόδικες καταδίκες 32 προσώπων· συμβιβασμός 30 εκατ. για τις εταιρείες.',
      en: 'First-instance convictions of 32 people; a €30 million settlement for the companies.',
    },
    breach: {
      el: 'Όταν το κράτος παραχωρεί έναν αυτοκινητόδρομο σε ιδιώτη, δεν παραχωρεί την ευθύνη για όσους τον διασχίζουν. Ο επόπτης υπάρχει για να βεβαιώνεται ότι τα διόδια πληρώνουν συντήρηση και όχι μόνο μερίσματα. Όταν ο επόπτης καταδικάζεται μαζί με τον εποπτευόμενο, η εποπτεία είχε πάψει να υπάρχει.',
      en: 'When the state hands a motorway to a private operator, it does not hand over responsibility for those who cross it. The overseer exists to ensure tolls pay for maintenance and not only dividends. When the overseer is convicted alongside the overseen, supervision had ceased to exist.',
    },
    patterns: ['neglected-maintenance', 'captured-overseer'],
    safeguards: ['health-register', 'independent-overseer'],
    counterfactual: {
      el: 'Το Μητρώο Υγείας Έργων θα είχε κάνει δημόσιες τις επιθεωρήσεις της γέφυρας και τα ελαττώματα που επαναλαμβάνονταν χωρίς επισκευή — και θα σήμαινε ότι ο παραχωρησιούχος έλεγχε τον εαυτό του. Ο Επόπτης Χωρίς Εξάρτηση θα είχε υπογράψει επώνυμα κάθε έγκριση, πριν από τους 43 θανάτους, όχι σε ένα εδώλιο οκτώ χρόνια μετά.',
      en: 'The Structure Health Register would have made the bridge’s inspections public, along with defects that recurred without repair — and flagged that the concessionaire was inspecting itself. The Independent Overseer would have signed every approval by name, before the 43 deaths, not in a dock eight years later.',
    },
    antilogos: {
      el: 'Η υπεράσπιση λέει ότι το πρόβλημα ήταν αρχικό κατασκευαστικό ελάττωμα και ότι ο διευθύνων σύμβουλος στηρίχτηκε στους κορυφαίους μηχανικούς της Ιταλίας· δηλώνει ότι έγινε αποδιοπομπαίος τράγος. 25 από τους 57 αθωώθηκαν ή η δίωξή τους παραγράφηκε.',
      en: 'The defence says the fault was an original construction defect and that the chief executive relied on Italy’s leading engineers; he says he was scapegoated. 25 of the 57 were acquitted or time-barred.',
    },
    reply: {
      el: 'Αν το ελάττωμα ήταν αρχικό, τότε ήταν γνωστό — ή μπορούσε να είναι — για δεκαετίες, από διαδοχικούς ιδιοκτήτες και ελεγκτές. Ακριβώς αυτό λύνει ένα δημόσιο μητρώο: η γνώση δεν μένει σε έναν φάκελο που ο καθένας μπορεί να πει ότι δεν διάβασε.',
      en: 'If the defect was original, then it was known — or knowable — for decades, by successive owners and overseers. That is exactly what a public register solves: knowledge does not stay in a file that anyone can say they never read.',
    },
    lever: {
      el: 'Ζήτησε κάθε γέφυρα σε αυτοκινητόδρομο με παραχώρηση να έχει δημόσιο φάκελο επιθεωρήσεων, υπογεγραμμένο από κρατικό — όχι ιδιωτικό — επόπτη.',
      en: 'Ask that every bridge on a concession motorway have a public inspection file, signed by a state — not private — overseer.',
    },
    scores: { harm: 9, power: 8, recurrence: 7, remedy: 8 },
    status: {
      el: 'Πρωτόδικες καταδίκες μόνο· έχει ανακοινωθεί έφεση. Όσοι δεν έχουν καταδικαστεί αμετάκλητα τεκμαίρονται αθώοι.',
      en: 'First-instance convictions only; an appeal has been announced. Those not finally convicted are presumed innocent.',
    },
    sources: [
      { title: 'ANSA — Morandi bridge disaster verdicts (2026)', url: 'https://www.ansa.it/english/news/2026/07/16/ex-aspi-ceo-castellucci-gets-12-years-as-morandi-bridge-disaster-verdicts-handed_c33761ed-e038-479a-bd34-d377843a2570.html' },
      { title: 'TimesLIVE / AP — Former CEO gets 12-year sentence over bridge collapse (2026)', url: 'https://www.timeslive.co.za/news/world/2026-07-16-former-ceo-of-italian-highway-operator-gets-12-year-sentence-over-deadly-bridge-collapse/' },
    ],
  },
  {
    id: 'mexico-line-12-2021',
    when: '2008–2026',
    place: { el: 'Πόλη του Μεξικού', en: 'Mexico City' },
    title: {
      el: 'Διπλάσιος προϋπολογισμός, ήλοι που δεν συγκολλήθηκαν σωστά: η υπηρεσία κατασκευής του μετρό και η υπερυψωμένη γραμμή που έπεσε εννέα χρόνια μετά τα εγκαίνια',
      en: 'A doubled budget, studs never properly welded: the metro construction agency and the elevated line that fell nine years after opening',
    },
    harmed: { el: '26 νεκροί και 98 τραυματίες', en: '26 dead and 98 injured' },
    plain: {
      el: 'Η Γραμμή 12 του μετρό άνοιξε το 2012 στο διπλάσιο κόστος και έκλεισε μερικώς μόλις δύο χρόνια μετά για δομικά προβλήματα. Το 2021 μια υπερυψωμένη γέφυρα κατέρρευσε κάτω από έναν συρμό. Η ανεξάρτητη έρευνα έδειξε κακές συγκολλήσεις και ανεπαρκή επίβλεψη· πέντε χρόνια μετά, καμία δίκη δεν έχει αρχίσει.',
      en: 'Metro Line 12 opened in 2012 at double its cost and was partly closed just two years later for structural problems. In 2021 an elevated span collapsed under a train. The independent investigation found poor welding and inadequate supervision; five years on, no trial has begun.',
    },
    facts: [
      {
        el: 'Οκτώβριος 2012: η Γραμμή 12 εγκαινιάζεται με τελικό κόστος 26 δισ. πέσος έναντι αρχικού προϋπολογισμού 13 δισ.· τον Μάρτιο 2014 κλείνει μερικώς για 20 μήνες λόγω τεχνικών και δομικών βλαβών.',
        en: 'October 2012: Line 12 opens at a final cost of MX$26 billion against an original MX$13 billion budget; in March 2014 it is partly closed for 20 months over technical and structural faults.',
      },
      {
        el: '3 Μαΐου 2021: η υπερυψωμένη γέφυρα καταρρέει κάτω από συρμό· 26 νεκροί, 98 τραυματίες.',
        en: '3 May 2021: the overpass collapses under a train; 26 dead, 98 injured.',
      },
      {
        el: 'Ιούνιος και Σεπτέμβριος 2021: οι εκθέσεις της DNV, που ανέθεσε η ίδια η πόλη, βρίσκουν κακές συγκολλήσεις ήλων, ελλείποντες συνδέσμους και ανεπαρκή επίβλεψη — η έλλειψη λειτουργικών ήλων οδήγησε σε λυγισμό και κόπωση.',
        en: 'June and September 2021: the reports by DNV, commissioned by the city itself, find poor stud welding, missing fasteners and inadequate supervision — a lack of functional studs led to buckling and fatigue failure.',
      },
      {
        el: 'Δεκέμβριος 2021: η εισαγγελία της πόλης κατηγορεί 10 πρώην αξιωματούχους — ανάμεσά τους τον διευθυντή της υπηρεσίας που κατασκεύασε τη γραμμή — για ανθρωποκτονία από αμέλεια. Τον Φεβρουάριο 2022 η πόλη απορρίπτει την τρίτη έκθεση της DNV ως «ελλιπή», καταγγέλλει τη σύμβαση και την μηνύει.',
        en: 'December 2021: the city prosecutor charges 10 former officials — among them the director of the agency that built the line — with culpable homicide. In February 2022 the city rejects DNV’s third report as “deficient,” terminates the contract and sues DNV.',
      },
      {
        el: 'Μάιος 2026: 8 κατηγορούμενοι περιμένουν δίκη (2 έχουν πεθάνει) χωρίς να έχει οριστεί καν προδικαστική ακρόαση· η ακρόαση έχει αναβληθεί επανειλημμένα.',
        en: 'May 2026: 8 defendants await trial (2 have died) with not even a preliminary hearing set; the hearing has been postponed repeatedly.',
      },
    ],
    outcome: {
      el: 'Καμία καταδίκη· αποζημιώσεις στα θύματα από την πόλη και τον κατασκευαστή. Η γραμμή ξανάνοιξε τον Ιανουάριο 2024.',
      en: 'No conviction; compensation paid to victims by the city and the builder. The line reopened in January 2024.',
    },
    breach: {
      el: 'Ένα έργο που κλείνει για δομικά προβλήματα δύο χρόνια μετά τα εγκαίνιά του έχει ήδη προειδοποιήσει. Όταν αυτή η προειδοποίηση δεν γίνεται λογοδοσία, όταν η πόλη μηνύει τον ίδιο της τον ερευνητή και όταν η δίκη δεν αρχίζει ποτέ, το χρήμα κινείται γρηγορότερα από τη δικαιοσύνη.',
      en: 'A work that closes for structural problems two years after opening has already given its warning. When that warning never becomes accountability, when the city sues its own investigator and when the trial never starts, money moves faster than justice.',
    },
    patterns: ['cost-overrun', 'ignored-engineer'],
    safeguards: ['cost-mirror', 'health-register', 'engineer-voice'],
    counterfactual: {
      el: 'Το Κάτοπτρο Κόστους θα είχε απαιτήσει δημόσια εξήγηση για τον διπλασιασμό του προϋπολογισμού πριν από τα εγκαίνια. Το Μητρώο Υγείας Έργων θα κρατούσε το κλείσιμο του 2014 ως ανοιχτό ελάττωμα με προθεσμία — όχι ως κεφάλαιο που έκλεισε. Και η Φωνή του Μηχανικού θα έδινε σε κάθε τεχνικό που είδε κακές συγκολλήσεις ένα κανάλι που δεν χάνεται.',
      en: 'The Cost Mirror would have demanded a public explanation for the doubled budget before opening. The Structure Health Register would have kept the 2014 closure as an open defect with a deadline — not a closed chapter. And the Engineer’s Voice would have given any technician who saw bad welds a channel that does not get lost.',
    },
    antilogos: {
      el: 'Ο κατασκευαστής αρνήθηκε κάθε ευθύνη αλλά ξαναέχτισε το τμήμα με δικά του έξοδα, και το 90% των θυμάτων δέχθηκε αποζημίωση. Κανένα υψηλόβαθμο πολιτικό πρόσωπο δεν κατηγορήθηκε, και η σύγκρουση της πόλης με τον ερευνητή της αφήνει την αιτία επίσημα αμφισβητούμενη.',
      en: 'The builder denied wrongdoing but rebuilt the section at its own cost, and 90% of victims accepted compensation. No senior political figure was charged, and the city’s clash with its own investigator leaves the cause officially contested.',
    },
    reply: {
      el: 'Η αποζημίωση δεν είναι λογοδοσία — είναι το τίμημα που πληρώνεται για να μη χρειαστεί. Ένα δημόσιο μητρώο και ένα κάτοπτρο κόστους δεν χρειάζονται δίκη για να λειτουργήσουν· δείχνουν τον κίνδυνο όσο υπάρχει ακόμη χρόνος να σωθεί κάποιος.',
      en: 'Compensation is not accountability — it is the price paid so that none is needed. A public register and a cost mirror need no trial to work; they show the danger while there is still time to save someone.',
    },
    lever: {
      el: 'Ζήτησε κάθε έργο μετρό ή σιδηροδρόμου που κλείνει για δομικά προβλήματα να έχει δημόσιο φάκελο με την αιτία και την ανεξάρτητη πιστοποίηση πριν ξανανοίξει.',
      en: 'Ask that any metro or rail work closed for structural problems have a public file with the cause and an independent certification before it reopens.',
    },
    scores: { harm: 9, power: 7, recurrence: 7, remedy: 7 },
    status: {
      el: 'Ανοιχτή — καμία δίκη δεν έχει αρχίσει. Όλοι οι κατηγορούμενοι τεκμαίρονται αθώοι.',
      en: 'Open — no trial has begun. All defendants are presumed innocent.',
    },
    sources: [
      { title: 'Wikipedia — Mexico City Metro overpass collapse', url: 'https://en.wikipedia.org/wiki/Mexico_City_Metro_overpass_collapse' },
      { title: 'Mexico News Daily — City set to file homicide charges (2021)', url: 'https://mexiconewsdaily.com/news/mexico-city-set-to-file-homicide-charges-over-metro-collapse/' },
      { title: 'EjeCentral — Line 12 hearing postponed again', url: 'https://www.ejecentral.com.mx/vuelven-a-aplazar-audiencia-por-colapso-de-l12-del-metro' },
    ],
  },
  {
    id: 'morbi-2022',
    when: '2017–2026',
    place: { el: 'Μόρμπι, Γκουτζαράτ, Ινδία', en: 'Morbi, Gujarat, India' },
    title: {
      el: 'Χωρίς διαγωνισμό, χωρίς πιστοποιητικό, τέσσερις μέρες ανοιχτή: η δημοτική αρχή του Μόρμπι και η σύμβαση μιας κρεμαστής γέφυρας',
      en: 'No tender, no fitness certificate, open four days: the Morbi municipality and a suspension-bridge contract',
    },
    harmed: { el: '135 νεκροί και 56 τραυματίες', en: '135 dead and 56 injured' },
    plain: {
      el: 'Μια ιστορική πεζογέφυρα δόθηκε σε ιδιωτική εταιρεία χωρίς διαγωνισμό και ξανάνοιξε μετά από «επισκευή» χωρίς κανένα πιστοποιητικό αντοχής. Τέσσερις μέρες μετά κατέρρευσε με εκατοντάδες ανθρώπους πάνω της. Η έρευνα βρήκε σχεδόν τα μισά σύρματα του καλωδίου διαβρωμένα.',
      en: 'A historic footbridge was handed to a private company without a tender and reopened after “repairs” with no load certificate. Four days later it collapsed with hundreds of people on it. The investigation found nearly half the cable’s wires corroded.',
    },
    facts: [
      {
        el: 'Ιούνιος 2017: λήγει το μνημόνιο του 2008 με την εταιρεία που λειτουργούσε τη γέφυρα· η εταιρεία συνεχίζει να τη λειτουργεί χωρίς καμία σύμβαση ως τον Μάρτιο 2022.',
        en: 'June 2017: the 2008 agreement with the bridge’s operator expires; the company keeps running it without any agreement until March 2022.',
      },
      {
        el: '8 Μαρτίου 2022: ο επικεφαλής υπάλληλος του δήμου υπογράφει 15ετή σύμβαση επισκευής και λειτουργίας χωρίς διαγωνισμό, υπό την αίρεση έγκρισης από το δημοτικό συμβούλιο — που δεν δόθηκε ποτέ. Η πολιτεία τον έθεσε αργότερα σε αναστολή.',
        en: '8 March 2022: the municipality’s chief officer signs a 15-year repair-and-operate agreement without a tender, subject to council approval that was never given. The state later suspended him.',
      },
      {
        el: '26 Οκτωβρίου 2022: η γέφυρα ξανανοίγει χωρίς προηγούμενη έγκριση και χωρίς πιστοποιητικό αντοχής — όπως παραδέχθηκε ο ίδιος ο δήμος στο Ανώτατο Δικαστήριο της πολιτείας. Στις 30 Οκτωβρίου καταρρέει· 135 νεκροί.',
        en: '26 October 2022: the bridge reopens without prior approval and without a fitness or load certificate — as the municipality itself admitted to the state High Court. On 30 October it collapses; 135 dead.',
      },
      {
        el: 'Φεβρουάριος 2023: η Ειδική Ομάδα Έρευνας βρίσκει 22 από τα 49 σύρματα του φέροντος καλωδίου διαβρωμένα, πιθανόν σπασμένα πριν από την κατάρρευση, καθώς και διοικητικές παραλείψεις και τεχνική ανεπάρκεια.',
        en: 'February 2023: the Special Investigation Team finds 22 of the 49 wires in the load-bearing cable corroded, possibly broken before the collapse, along with administrative lapses and technical incompetence.',
      },
      {
        el: 'Ιανουάριος 2023 – Μάρτιος 2024: κατηγορητήριο 1.262 σελίδων κατά 10 προσώπων, ανάμεσά τους ο διευθύνων σύμβουλος της εταιρείας· η εταιρεία καταθέτει προσωρινή αποζημίωση με εντολή δικαστηρίου· τον Μάρτιο 2024 το Ανώτατο Δικαστήριο αφήνει ελεύθερο με εγγύηση τον διευθύνοντα σύμβουλο.',
        en: 'January 2023 – March 2024: a 1,262-page charge sheet names 10 accused, among them the company’s managing director; the company deposits interim compensation under court order; in March 2024 the Supreme Court grants the managing director bail.',
      },
    ],
    outcome: {
      el: 'Η δίκη εκκρεμεί· προσωρινή αποζημίωση με εντολή δικαστηρίου.',
      en: 'The trial is pending; interim compensation paid under court order.',
    },
    breach: {
      el: 'Μια πεζογέφυρα που ανοίγει ξανά στο κοινό είναι μια δημόσια δήλωση: «ελέγξαμε ότι αντέχει». Όταν αυτή η δήλωση γίνεται χωρίς διαγωνισμό, χωρίς έγκριση και χωρίς κανένα πιστοποιητικό, ο δήμος δεν δανείζει απλώς μια γέφυρα σε έναν ιδιώτη· δανείζει την εμπιστοσύνη των πολιτών του.',
      en: 'A footbridge reopening to the public is a public statement: “we checked that it holds.” When that statement is made without a tender, without approval and without any certificate, the municipality is not just lending a bridge to a private firm; it is lending its citizens’ trust.',
    },
    patterns: ['bribed-award', 'opened-uncertified', 'neglected-maintenance'],
    safeguards: ['opening-seal', 'open-contract', 'health-register'],
    counterfactual: {
      el: 'Η Σφραγίδα Παράδοσης θα είχε κάνει αδύνατη την επαναλειτουργία χωρίς δημοσιευμένο πιστοποιητικό αντοχής — τέσσερις μέρες πριν από 135 θανάτους. Η Ανοιχτή Σύμβαση θα είχε δείξει ότι η γέφυρα λειτουργούσε πέντε χρόνια χωρίς καμία σύμβαση. Και το Μητρώο Υγείας Έργων θα είχε καταγράψει τα διαβρωμένα σύρματα.',
      en: 'The Opening Seal would have made reopening impossible without a published load certificate — four days before 135 deaths. The Open Contract would have shown the bridge running five years without any agreement. And the Structure Health Register would have logged the corroded wires.',
    },
    antilogos: {
      el: 'Στους πρώτους που συνελήφθησαν ήταν χαμηλόβαθμοι εργαζόμενοι, όπως φύλακες· ο διευθύνων σύμβουλος κατηγορήθηκε τελευταίος και είναι ελεύθερος με εγγύηση. Η εταιρεία κατέβαλε αποζημίωση με εντολή δικαστηρίου — όχι ως ομολογία ενοχής.',
      en: 'Among the first arrested were junior staff such as security guards; the managing director was charged last and is on bail. The company paid compensation under court order — not as an admission of guilt.',
    },
    reply: {
      el: 'Αυτό ακριβώς είναι το μοτίβο που η πρόταση σπάει: η ευθύνη πέφτει πρώτα στους φύλακες, που δεν υπέγραψαν τίποτα. Η Σφραγίδα Παράδοσης κοιτάζει αλλού — σε όποιον είχε την εξουσία να ανοίξει τη γέφυρα και το έκανε χωρίς υπογραφή μηχανικού.',
      en: 'That is exactly the pattern the proposal breaks: blame falls first on the guards, who signed nothing. The Opening Seal looks elsewhere — at whoever had the power to open the bridge and did so without an engineer’s signature.',
    },
    lever: {
      el: 'Ζήτησε από τον δήμο σου να δημοσιεύει πότε ελέγχθηκε τελευταία φορά κάθε πεζογέφυρα και ποιος υπέγραψε ότι αντέχει.',
      en: 'Ask your municipality to publish when each footbridge was last inspected and who signed that it holds.',
    },
    scores: { harm: 10, power: 5, recurrence: 7, remedy: 9 },
    status: {
      el: 'Η δίκη εκκρεμεί· δεν βρέθηκε καταδίκη. Όλοι οι κατηγορούμενοι τεκμαίρονται αθώοι.',
      en: 'The trial is pending; no conviction found. All accused are presumed innocent.',
    },
    sources: [
      { title: 'LiveLaw — Bridge reopened without prior nod or fitness certificate (2022)', url: 'https://www.livelaw.in/amp/news-updates/morbi-incident-ajanta-co-reopened-bridge-without-prior-nod-no-fitness-certificate-provided-morbi-civic-body-gujarat-hc-214291' },
      { title: 'The Wire — Administrative lapses and technical incompetence, SIT says', url: 'https://m.thewire.in/article/government/administrative-lapses-and-technical-incompetence-behind-morbi-bridge-collapse-sit-says' },
      { title: 'The Wire — 22 wires may have been broken before collapse (2023)', url: 'https://thewire.in/government/22-wires-on-morbi-bridge-may-have-been-broken-before-collapse-sit-report' },
      { title: 'Free Press Journal — 1,262-page charge sheet (2023)', url: 'https://www.freepressjournal.in/amp/india/morbi-bridge-collapse-gujarat-police-issues-1262-page-chargesheet-jaysukh-patel-of-oreva-group-included-as-accused' },
    ],
  },
  {
    id: 'odebrecht-2016',
    when: '2001–2026',
    place: { el: 'Βραζιλία και 11 ακόμη χώρες', en: 'Brazil and 11 other countries' },
    title: {
      el: 'Μια κατασκευαστική με «τμήμα δωροδοκιών»: πώς συμβάσεις δημόσιων έργων αγοράστηκαν από προεδρικά γραφεία σε όλη τη Λατινική Αμερική',
      en: 'A construction giant with a bribe department: how public-works contracts were bought from presidents’ offices across Latin America',
    },
    harmed: { el: 'Οι φορολογούμενοι 12 χωρών', en: 'Taxpayers in 12 countries' },
    plain: {
      el: 'Η Odebrecht είχε ολόκληρο τμήμα που πλήρωνε μίζες σε αξιωματούχους 12 χωρών για να κερδίζει δημόσια έργα. Ομολόγησε ενοχή το 2016 και πλήρωσε ρεκόρ προστίμων. Στη Βραζιλία όμως ένας μόνο δικαστής ακύρωσε αργότερα όλα τα στοιχεία της συμφωνίας επιείκειας — και η εταιρεία επαναδιαπραγματεύεται τα πρόστιμά της.',
      en: 'Odebrecht had an entire department paying bribes to officials in 12 countries to win public works. It pleaded guilty in 2016 and paid record penalties. But in Brazil a single judge later annulled all the evidence from its leniency deal — and the company is renegotiating its fines.',
    },
    facts: [
      {
        el: '2001–2016: η Odebrecht πληρώνει περίπου 788 εκατ. δολάρια σε μίζες σε αξιωματούχους τουλάχιστον 12 χωρών, μέσω ενός «Τμήματος Δομημένων Επιχειρήσεων» που λειτουργούσε ως τμήμα δωροδοκιών.',
        en: '2001–2016: Odebrecht pays about $788 million in bribes to officials in at least 12 countries, through a “Division of Structured Operations” that functioned as a bribe department.',
      },
      {
        el: '21 Δεκεμβρίου 2016: ομολογεί ενοχή στις ΗΠΑ· μαζί με τη Braskem συμφωνεί σε συνολική ποινή-ρεκόρ 3,5 δισ. δολαρίων σε ΗΠΑ, Βραζιλία και Ελβετία.',
        en: '21 December 2016: it pleads guilty in the US; with Braskem it agrees to a record combined penalty of $3.5 billion across the US, Brazil and Switzerland.',
      },
      {
        el: '22 Οκτωβρίου 2024: ο πρώην πρόεδρος του Περού Αλεχάντρο Τολέδο καταδικάζεται σε 20 χρόνια και 6 μήνες επειδή έλαβε 35 εκατ. δολάρια από την Odebrecht, που κέρδισε δύο τμήματα του Διωκεάνιου Αυτοκινητόδρομου.',
        en: '22 October 2024: Peru’s former president Alejandro Toledo is sentenced to 20 years and 6 months for taking $35 million from Odebrecht, which won two sections of the Interoceanic Highway.',
      },
      {
        el: 'Σεπτέμβριος 2023: ένας μόνο δικαστής του Ανωτάτου Δικαστηρίου της Βραζιλίας ακυρώνει όλα τα στοιχεία που προέκυψαν από τη συμφωνία επιείκειας· ως τον Μάρτιο 2026 καμία από τις τρεις προσφυγές δεν είχε εξεταστεί από την ολομέλεια.',
        en: 'September 2023: a single Brazilian Supreme Court justice annuls all evidence derived from the leniency agreement; as of March 2026 none of the three appeals had been heard by the full bench.',
      },
      {
        el: 'Φεβρουάριος 2024: ο ίδιος δικαστής αναστέλλει την καταβολή προστίμων επιείκειας 8,5 δισ. ρεάλ (περίπου 1,7 δισ. δολάρια) και επιτρέπει στην εταιρεία να ζητήσει αναθεώρηση της συμφωνίας του 2016.',
        en: 'February 2024: the same justice suspends payment of BRL 8.5 billion (about $1.7 billion) in leniency fines and lets the company seek a review of its 2016 deal.',
      },
    ],
    outcome: {
      el: 'Η ομολογία στις ΗΠΑ ισχύει· στη Βραζιλία μεγάλο μέρος των στοιχείων είναι πλέον άχρηστο.',
      en: 'The US plea stands; in Brazil much of the evidence is now unusable.',
    },
    breach: {
      el: 'Ένα δημόσιο έργο χρηματοδοτείται από όλους για να εξυπηρετεί όλους. Όταν μια εταιρεία έχει τμήμα αφιερωμένο στο να αγοράζει προέδρους, κάθε αυτοκινητόδρομος και κάθε φράγμα γίνεται πρώτα συναλλαγή και μετά έργο — και όταν τα στοιχεία ακυρώνονται με την υπογραφή ενός δικαστή, η λογοδοσία ξεγράφεται μαζί τους.',
      en: 'A public work is funded by all to serve all. When a company has a department dedicated to buying presidents, every highway and dam becomes a transaction first and a work second — and when the evidence is annulled by one judge’s signature, accountability is written off with it.',
    },
    patterns: ['bribed-award', 'rigged-bid'],
    safeguards: ['bid-screen', 'open-contract', 'independent-overseer'],
    counterfactual: {
      el: 'Η Ανοιχτή Σύμβαση και ο Ανιχνευτής Στημένων Διαγωνισμών θα είχαν δείξει την ίδια εταιρεία να κερδίζει μεγάλα έργα σε δώδεκα χώρες με παρόμοια μοτίβα. Ο Επόπτης Χωρίς Εξάρτηση θα είχε διασταυρώσει αναδόχους και υπεργολάβους με μητρώα πραγματικών δικαιούχων — εκεί που κρύβονταν οι ροές.',
      en: 'The Open Contract and the Rigged-Tender Screen would have shown the same company winning major works in twelve countries with similar patterns. The Independent Overseer would have cross-checked contractors and subcontractors against beneficial-owner registers — where the flows were hidden.',
    },
    antilogos: {
      el: 'Τα ίδια τα δικαστήρια της Βραζιλίας, όχι οι κατηγορούμενοι, αποδόμησαν μεγάλο μέρος της υπόθεσης, και η ίδια η επιχείρηση κατά της διαφθοράς κατηγορείται για καταχρήσεις — ο δικαστής χαρακτήρισε «ιστορικό λάθος» μια από τις φυλακίσεις της. Η εταιρεία επιβιώνει με νέο όνομα.',
      en: 'Brazil’s own courts, not the defendants, dismantled much of the case, and the anti-corruption drive itself stands accused of abuse — the justice called one of its imprisonments a “historic error.” The company survives under a new name.',
    },
    reply: {
      el: 'Αυτό δείχνει γιατί η λογοδοσία δεν μπορεί να εξαρτάται από μια μεγάλη ποινική εκστρατεία που μπορεί να καταχραστεί ή να ακυρωθεί. Ένα ανοιχτό, διαρκές σύστημα δεδομένων δεν έχει πρωταγωνιστές ούτε ανάγκη από ομολογίες· απλώς δείχνει, κάθε μέρα, πού πηγαίνουν τα χρήματα.',
      en: 'This shows why accountability cannot depend on a great criminal campaign that can be abused or annulled. An open, permanent data system has no protagonists and needs no confessions; it simply shows, every day, where the money goes.',
    },
    lever: {
      el: 'Ζήτησε κάθε ανάδοχος μεγάλου δημόσιου έργου να δηλώνει δημόσια τους πραγματικούς δικαιούχους του και όλους τους υπεργολάβους.',
      en: 'Ask that every contractor on a major public work publicly declare its beneficial owners and all subcontractors.',
    },
    scores: { harm: 7, power: 10, recurrence: 8, remedy: 7 },
    status: {
      el: 'Η ομολογία στις ΗΠΑ ισχύει. Η έφεση του πρώην προέδρου του Περού δεν επιβεβαιώθηκε· όποιος δεν έχει καταδικαστεί αμετάκλητα τεκμαίρεται αθώος.',
      en: 'The US plea stands. The status of the former Peruvian president’s appeal was not confirmed; anyone not finally convicted is presumed innocent.',
    },
    sources: [
      { title: 'FCPA Blog (A&O Shearman) — United States v. Odebrecht', url: 'https://fcpa.aoshearman.com/us-v-odebrecht' },
      { title: 'Andina — Former president sentenced in Interoceanic case (2024)', url: 'https://andina.pe/ingles/noticia-peru-alejandro-toledo-sentenced-to-20-years-and-6-months-for-interoceanic-case-1004794.aspx' },
      { title: 'Transparency International Brazil — Implementation of the OECD Convention (2026)', url: 'https://docs.transparenciainternacional.org.br/biblioteca/brazils-implementation-of-the-oecd-convention-march-2026.pdf' },
    ],
  },
  {
    id: 'venice-mose-2014',
    when: '2014–2020',
    place: { el: 'Βενετία, Ιταλία', en: 'Venice, Italy' },
    title: {
      el: 'Το φράγμα που χρηματοδοτούσε εκλογές: ένας περιφερειάρχης, το υπουργείο Υποδομών και μια κοινοπραξία με μοναδική παραχώρηση',
      en: 'The flood barrier that funded campaigns: a regional governor, the infrastructure ministry and a single-concession consortium',
    },
    harmed: {
      el: 'Οι φορολογούμενοι και οι κάτοικοι της Βενετίας — η παλίρροια των 187 εκ. τον Νοέμβριο 2019 χτύπησε ενώ το φράγμα ήταν ακόμη ημιτελές',
      en: 'Venice’s taxpayers and residents — the 187 cm tide of November 2019 struck while the barrier was still unfinished',
    },
    plain: {
      el: 'Το MOSE, το σύστημα φραγμάτων που προστατεύει τη Βενετία από τις πλημμύρες, κατασκευάστηκε από μία μόνο κοινοπραξία χωρίς ανταγωνισμό. Το 2014 συνελήφθησαν 35 πρόσωπα — ανάμεσά τους ο πρώην περιφερειάρχης και ο δήμαρχος — για μίζες και χρηματοδότηση εκλογών από τα χρήματα του έργου. Το φράγμα λειτούργησε τελικά το 2020, εννέα χρόνια μετά την αρχική προθεσμία.',
      en: 'MOSE, the barrier system protecting Venice from floods, was built by a single consortium without competition. In 2014, 35 people were arrested — among them the former regional governor and the mayor — over kickbacks and campaign funding from project money. The barrier finally worked in 2020, nine years after the original deadline.',
    },
    facts: [
      {
        el: '4 Ιουνίου 2014: συλλαμβάνονται 35 πρόσωπα, ανάμεσά τους ο πρώην περιφερειάρχης του Βένετο και ο εν ενεργεία δήμαρχος της Βενετίας, για φερόμενη δωροδοκία, εκβίαση και ξέπλυμα γύρω από τις συμβάσεις του MOSE, με κόστος τότε 5,5 δισ. ευρώ.',
        en: '4 June 2014: 35 people are arrested, among them the former regional governor of Veneto and the sitting mayor of Venice, over alleged bribery, extortion and money laundering around MOSE contracts, then costed at €5.5 billion.',
      },
      {
        el: 'Οι ερευνητές υποστήριξαν ότι περίπου 25 εκατ. ευρώ δημόσιου χρήματος εκτράπηκαν από το MOSE σε προεκλογικές εκστρατείες, και ότι ο πρώην περιφερειάρχης έλαβε τουλάχιστον 800.000 ευρώ από την κοινοπραξία.',
        en: 'Investigators alleged about €25 million of public money was diverted from MOSE to political campaigns, and that the former governor received at least €800,000 from the consortium.',
      },
      {
        el: '16 Οκτωβρίου 2014: δικαστής δέχεται τη συμφωνία ποινής του πρώην περιφερειάρχη — 34 μήνες και 2,6 εκατ. ευρώ.',
        en: '16 October 2014: a judge accepts the former governor’s plea bargain — 34 months and €2.6 million.',
      },
      {
        el: '2017: μετά από 32 συνεδριάσεις και 102 μάρτυρες, το δικαστήριο της Βενετίας καταδικάζει 4 από 8 και αθωώνει ή απαλλάσσει λόγω παραγραφής τους άλλους 4· ο πρώην υπουργός Μεταφορών και Υποδομών καταδικάζεται σε 4 χρόνια· ο πρώην δήμαρχος αθωώνεται για παράνομη χρηματοδότηση κόμματος.',
        en: '2017: after 32 hearings and 102 witnesses, the Venice court convicts 4 of 8 and acquits or time-bars the other 4; the former transport and infrastructure minister gets 4 years; the former mayor is acquitted of illegal party financing.',
      },
      {
        el: '3 Οκτωβρίου 2020: το MOSE σηκώνεται για πρώτη φορά και συγκρατεί παλίρροια 135 εκ. — με αρχική προθεσμία το 2011, και έπειτα το 2018.',
        en: '3 October 2020: MOSE is raised for the first time and holds back a 135 cm tide — its original deadline was 2011, then 2018.',
      },
    ],
    outcome: {
      el: 'Συμφωνίες ποινής και η απόφαση του 2017· αρκετά πρόσωπα γλίτωσαν με αθώωση ή παραγραφή.',
      en: 'Plea bargains and the 2017 verdict; several figures escaped through acquittal or limitation.',
    },
    breach: {
      el: 'Ένα αντιπλημμυρικό φράγμα είναι υπόσχεση προς μια ολόκληρη πόλη. Όταν τα χρήματά του γίνονται ταμείο εκλογών, και όταν μία μόνο κοινοπραξία το κατασκευάζει χωρίς να συναγωνίζεται κανέναν, η πόλη πληρώνει δύο φορές: μία στον λογαριασμό, και μία στο νερό που μπαίνει ενώ το έργο αργεί.',
      en: 'A flood barrier is a promise to a whole city. When its money becomes a campaign fund, and a single consortium builds it without competing against anyone, the city pays twice: once in the bill, and once in the water that comes in while the work runs late.',
    },
    patterns: ['bribed-award', 'cost-overrun', 'late-safety'],
    safeguards: ['independent-overseer', 'cost-mirror', 'safety-clock'],
    counterfactual: {
      el: 'Ο Επόπτης Χωρίς Εξάρτηση θα είχε διασταυρώσει τις ροές της κοινοπραξίας με πολιτικά πρόσωπα και εκστρατείες. Το Κάτοπτρο Κόστους θα είχε συγκρίνει το κόστος με άλλα φράγματα παλίρροιας στην Ευρώπη, και το Ρολόι Ασφαλείας θα μετρούσε δημόσια κάθε χρόνο καθυστέρησης από το 2011 — και την παλίρροια του 2019 που βρήκε την πόλη απροστάτευτη.',
      en: 'The Independent Overseer would have cross-checked the consortium’s flows against politicians and campaigns. The Cost Mirror would have compared the cost with other European tidal barriers, and the Safety Clock would have counted publicly every year of delay since 2011 — and the 2019 tide that found the city unprotected.',
    },
    antilogos: {
      el: 'Το φράγμα λειτουργεί: από το 2020 προστατεύει τη Βενετία. Ο δήμαρχος — η πιο ηχηρή σύλληψη — αθωώθηκε, και το σύστημα ήταν διακομματικό: περιφερειάρχης και υπουργός της κεντροδεξιάς, δήμαρχος της κεντροαριστεράς.',
      en: 'The barrier works: since 2020 it has protected Venice. The mayor — the most prominent arrest — was acquitted, and the scheme was bipartisan: a centre-right governor and minister, a centre-left mayor.',
    },
    reply: {
      el: 'Ότι το φράγμα λειτουργεί είναι καλό — αλλά λειτουργεί εννέα χρόνια αργότερα και με χρήματα που κάποτε έγιναν εκλογικά ταμεία. Και ότι το σύστημα ήταν διακομματικό είναι ακριβώς ο λόγος που η λύση δεν μπορεί να εξαρτάται από το ποιος κυβερνά: ένα ανοιχτό σύστημα ελέγχου δεν ανήκει σε κανένα κόμμα.',
      en: 'That the barrier works is good — but it works nine years late and with money that once became campaign funds. And that the scheme was bipartisan is exactly why the solution cannot depend on who governs: an open oversight system belongs to no party.',
    },
    lever: {
      el: 'Ζήτησε κανένα μεγάλο δημόσιο έργο να μην ανατίθεται σε μοναδικό παραχωρησιούχο χωρίς ανεξάρτητο, δημόσιο έλεγχο κόστους.',
      en: 'Ask that no major public work be handed to a sole concessionaire without independent, public cost control.',
    },
    scores: { harm: 5, power: 8, recurrence: 7, remedy: 7 },
    status: {
      el: 'Ουσιαστικά κλειστή μέσω συμφωνιών ποινής και της απόφασης του 2017. Όσοι αθωώθηκαν είναι νομικά αθώοι.',
      en: 'Mostly closed through plea bargains and the 2017 verdict. Those acquitted are legally innocent.',
    },
    sources: [
      { title: 'ANSA — Venice mayor denies corruption charges (2014)', url: 'https://www.ansa.it/english/news/2014/06/04/venice-mayor-denies-corruption-charges_e18a1f36-2782-4e2d-9180-ce2ee86ce6f0.html' },
      { title: 'OCCRP — Mayor of Venice arrested for corruption (2014)', url: 'https://www.occrp.org/en/news/italy-mayor-of-venice-arrested-for-corruption' },
      { title: 'ANSA — Judge accepts plea deal from ex-Veneto governor (2014)', url: 'https://www.ansa.it/english/news/2014/10/16/judge-accepts-plea-deal-from-ex-veneto-governor_e2652d81-0681-4f67-af57-ca5c0d6bfd86.html' },
      { title: 'Adnkronos — Italy’s ex-transport minister jailed for graft (2017)', url: 'https://www.adnkronos.com/italys-ex-transport-minister-jailed-for-graft_12vW7BvwN1tdCjICKRS8mr' },
      { title: 'Wikipedia — MOSE', url: 'https://en.wikipedia.org/wiki/MOSE' },
    ],
  },
]
