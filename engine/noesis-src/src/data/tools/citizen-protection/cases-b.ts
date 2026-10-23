// ΑΡΓΟΣ — cases 6–10. Same rules as cases-a.ts: sourced facts checked on
// 2026-09-30, the office in the headline and never the officer, the harmed
// always named, acquittals stated as acquittals, and the presumption of
// innocence stated for every open case.

import type { ToolCase } from '../types'

export const CASES_B: readonly ToolCase[] = [
  {
    id: 'minneapolis-floyd-2020',
    when: '2020–2026',
    place: { el: 'Μιννεάπολη, ΗΠΑ', en: 'Minneapolis, USA' },
    title: {
      el: 'Η ανακοίνωση της αστυνομίας έγραφε «ιατρικό περιστατικό» — το κινητό μιας 17χρονης έδειξε ένα γόνατο στον λαιμό',
      en: 'The police press release said “medical incident” — a 17-year-old’s phone showed a knee on a man’s neck',
    },
    harmed: { el: 'Τζορτζ Φλόιντ, 46 ετών', en: 'George Floyd, 46' },
    plain: {
      el: 'Ο Τζορτζ Φλόιντ πέθανε ενώ ένας αστυνομικός τον κρατούσε με το γόνατο στον λαιμό για περίπου εννέα λεπτά. Η πρώτη ανακοίνωση της αστυνομίας δεν ανέφερε τίποτα από αυτά· την αλήθεια την έφερε το βίντεο μιας περαστικής έφηβης.',
      en: 'George Floyd died while an officer held him with a knee on his neck for about nine minutes. The police’s first statement mentioned none of this; the truth came from a teenage bystander’s video.',
    },
    facts: [
      {
        el: '25 Μαΐου 2020: η ανακοίνωση της αστυνομίας, με τίτλο «Άνδρας πεθαίνει μετά από ιατρικό περιστατικό κατά την αλληλεπίδραση με την αστυνομία», λέει ότι «αντιστάθηκε σωματικά» και δεν αναφέρει το γόνατο στον λαιμό. Η 17χρονη Ντάρνελα Φρέιζερ έχει ήδη βιντεοσκοπήσει την ακινητοποίηση και τη δημοσιεύει.',
        en: '25 May 2020: the police press release, headlined “Man Dies After Medical Incident During Police Interaction,” says he “physically resisted officers” and never mentions the knee on his neck. Seventeen-year-old Darnella Frazier has already filmed the restraint and posts it online.',
      },
      {
        el: '1 Ιουνίου 2020: ο ιατροδικαστής της κομητείας χαρακτηρίζει τον θάνατο ανθρωποκτονία — ανακοπή «που επιπλέχθηκε από την ακινητοποίηση, τον περιορισμό και τη συμπίεση του λαιμού από τις αρχές».',
        en: '1 June 2020: the county medical examiner rules the death a homicide — cardiopulmonary arrest “complicating law enforcement subdual, restraint, and neck compression.”',
      },
      {
        el: 'Απρίλιος–Ιούνιος 2021: ένορκοι κρίνουν τον αστυνομικό ένοχο για φόνο και ανθρωποκτονία· καταδικάζεται σε 22,5 χρόνια, και σε 21 χρόνια ταυτόχρονα μετά από ομολογία σε ομοσπονδιακή δίκη για παραβίαση πολιτικών δικαιωμάτων (Δεκέμβριος 2021).',
        en: 'April–June 2021: a jury convicts the officer of murder and manslaughter; he is sentenced to 22.5 years, and to 21 years concurrently after pleading guilty to a federal civil-rights charge (December 2021).',
      },
      {
        el: '2022: οι άλλοι τρεις αστυνομικοί καταδικάζονται σε περίπου 3 έως 3,5 χρόνια ο καθένας.',
        en: '2022: the three other officers are sentenced to about 3 to 3.5 years each.',
      },
      {
        el: 'Ιούνιος 2023: το υπουργείο Δικαιοσύνης των ΗΠΑ διαπιστώνει μοτίβο υπερβολικής βίας και φυλετικών διακρίσεων στην αστυνομία της πόλης. 27 Μαΐου 2025: κατ’ αίτηση του ίδιου του υπουργείου, δικαστής απορρίπτει οριστικά τη δικαστική συμφωνία μεταρρύθμισης.',
        en: 'June 2023: the US Justice Department finds a pattern of excessive force and racial discrimination in the city’s police. 27 May 2025: at the Department’s own request, a judge dismisses the reform consent decree with prejudice.',
      },
    ],
    outcome: {
      el: 'Και οι τέσσερις αστυνομικοί καταδικάστηκαν· η ομοσπονδιακή εποπτεία μεταρρύθμισης αποσύρθηκε.',
      en: 'All four officers were convicted; federal reform oversight was withdrawn.',
    },
    breach: {
      el: 'Η πρώτη επίσημη αφήγηση είναι αυτή που διαβάζουν όλοι — και αν το βίντεο δεν υπήρχε, θα ήταν και η τελευταία. Όταν η αλήθεια για έναν θάνατο κατά τη σύλληψη εξαρτάται από το αν έτυχε να περνά μια έφηβη με κινητό, η λογοδοσία δεν είναι θεσμός· είναι σύμπτωση.',
      en: 'The first official account is the one everyone reads — and without the video it would have been the last. When the truth about a death during an arrest depends on whether a teenager with a phone happened to be passing, accountability is not an institution; it is a coincidence.',
    },
    patterns: ['cover-up', 'lethal-force', 'victim-blamed'],
    safeguards: ['first-account', 'witness-video', 'force-log'],
    counterfactual: {
      el: 'Η Πρώτη Αφήγηση με Υπογραφή θα είχε δέσει την ανακοίνωση για «ιατρικό περιστατικό» με το όνομα όποιου την ενέκρινε — και θα έδειχνε δημόσια πότε τη διέψευσε το βίντεο. Το Μητρώο Χρήσης Βίας θα είχε καταγράψει την ακινητοποίηση με διάρκεια και τεχνική, και το Βίντεο του Πολίτη θα είχε σφραγίσει την καταγραφή της Ντάρνελα ως τεκμήριο από την πρώτη ώρα.',
      en: 'The Signed First Account would have tied the “medical incident” release to the name of whoever approved it — and shown publicly when the video disproved it. The Use-of-Force Register would have logged the restraint with its duration and technique, and the Citizen’s Video would have sealed Darnella’s recording as evidence from the first hour.',
    },
    antilogos: {
      el: 'Η νεκροψία κατέγραψε φαιντανύλη, μεθαμφεταμίνη και καρδιοπάθεια ως «άλλες σημαντικές καταστάσεις», και η υπεράσπιση αμφισβητεί ακόμη την αιτία θανάτου. Και το σύστημα λειτούργησε: και οι τέσσερις καταδικάστηκαν — κάτι σπάνιο σε αστυνομικές υποθέσεις.',
      en: 'The autopsy listed fentanyl, methamphetamine and heart disease as “other significant conditions,” and the defence still contests the cause of death. And the system worked: all four were convicted — rare in police cases.',
    },
    reply: {
      el: 'Λειτούργησε — επειδή υπήρχε βίντεο. Η ερώτηση είναι τι συμβαίνει στις υποθέσεις όπου δεν υπάρχει. Η πρόταση δεν αλλάζει την αιτία θανάτου ούτε την ετυμηγορία· κάνει την πρώτη επίσημη αφήγηση να έχει υπογραφή, ώστε όποιος τη γράφει να ξέρει ότι θα ελεγχθεί — είτε υπάρχει κινητό είτε όχι.',
      en: 'It worked — because there was a video. The question is what happens in the cases where there is none. The proposal changes neither the cause of death nor the verdict; it gives the first official account a signature, so whoever writes it knows it will be checked — phone or no phone.',
    },
    lever: {
      el: 'Ζήτησε κάθε επίσημη ανακοίνωση για θάνατο ή τραυματισμό κατά αστυνομική επέμβαση να φέρει το όνομα του υπεύθυνου και να διορθώνεται δημόσια όταν διαψεύδεται.',
      en: 'Ask that every official statement on a death or injury during a police operation carry the name of the person responsible and be publicly corrected when disproved.',
    },
    scores: { harm: 8, power: 6, recurrence: 9, remedy: 7 },
    status: {
      el: 'Οι καταδίκες ισχύουν (η έφεση απορρίφθηκε το 2023)· εκκρεμεί νέα αίτηση αναθεώρησης (Αύγουστος 2026).',
      en: 'The convictions stand (appeal denied in 2023); a new post-conviction petition is pending (August 2026).',
    },
    sources: [
      { title: 'KTVZ / CNN — How Minneapolis police first described the murder of George Floyd', url: 'https://ktvz.com/news/national-world/2021/04/21/how-minneapolis-police-first-described-the-murder-of-george-floyd-and-what-we-know-now/' },
      { title: 'NBC News — Floyd’s death ruled a homicide by medical examiner (2020)', url: 'https://www.nbcnews.com/news/us-news/george-floyd-death-ruled-homicide-medical-examiner-n1221431' },
      { title: 'JURIST — Judge sentences officer to 22.5 years (2021)', url: 'https://www.jurist.org/news/2021/06/minnesota-judge-sentences-derek-chauvin-to-22-5-years-for-murder-of-george-floyd' },
      { title: 'City of Minneapolis — Consent decree', url: 'https://www.minneapolismn.gov/resident-services/public-safety/police-public-safety/investigations-settlement-agreement/consent-decree' },
      { title: 'MPR News — New petition to overturn state conviction (2026)', url: 'https://mprnews.org/story/2026/08/18/derek-chauvin-again-seeks-to-overturn-state-conviction-in-george-floyd-murder' },
    ],
  },
  {
    id: 'hillsborough-1989',
    when: '1989–2026',
    place: { el: 'Σέφιλντ, Αγγλία', en: 'Sheffield, England' },
    title: {
      el: 'Η αστυνομία ξανάγραψε τις καταθέσεις των αστυνομικών της για να φορτώσει την ευθύνη στους οπαδούς — 27 χρόνια ως την ετυμηγορία «παράνομη θανάτωση»',
      en: 'The police force rewrote its own officers’ statements to blame the fans — 27 years to an “unlawful killing” verdict',
    },
    harmed: { el: '97 οπαδοί της Λίβερπουλ και οι οικογένειές τους, που κατηγορήθηκαν για δεκαετίες', en: '97 Liverpool supporters and their families, blamed for decades' },
    plain: {
      el: 'Σε έναν ημιτελικό κυπέλλου, 97 οπαδοί πέθαναν συνθλιμμένοι. Η αστυνομία τους κατηγόρησε — και άλλαξε εκατοντάδες καταθέσεις των δικών της ανθρώπων. Χρειάστηκαν 27 χρόνια για να κρίνει ένα δικαστήριο ότι σκοτώθηκαν παράνομα και ότι οι οπαδοί δεν έφταιγαν· κανένας αστυνομικός δεν καταδικάστηκε.',
      en: 'At a cup semi-final, 97 fans were crushed to death. The police blamed them — and altered hundreds of their own officers’ statements. It took 27 years for a court to find they were unlawfully killed and that the fans were not at fault; no police officer was ever convicted.',
    },
    facts: [
      {
        el: '15 Απριλίου 1989: μόνο επτά τουρνικέ εξυπηρετούν τους 10.100 οπαδούς της Λίβερπουλ με εισιτήριο για την εξέδρα Leppings Lane.',
        en: '15 April 1989: only seven turnstiles serve the 10,100 Liverpool fans ticketed for the Leppings Lane end.',
      },
      {
        el: 'Σεπτέμβριος 2012: η Ανεξάρτητη Επιτροπή για το Χίλσμπορο διαπιστώνει ότι 164 καταθέσεις αστυνομικών αλλοιώθηκαν — οι 116 για να αφαιρεθούν ή να αλλάξουν σχόλια δυσμενή για την αστυνόμευση.',
        en: 'September 2012: the Hillsborough Independent Panel finds 164 police statements were altered — 116 to remove or change comments unfavourable to the policing.',
      },
      {
        el: '26 Απριλίου 2016: οι ένορκοι της ανάκρισης κρίνουν ότι οι 96 τότε νεκροί «θανατώθηκαν παράνομα», ότι ο διοικητής της αστυνομίας στον αγώνα επέδειξε βαριά αμέλεια, και ότι η συμπεριφορά των οπαδών δεν συνέβαλε.',
        en: '26 April 2016: the inquest jury finds the then 96 dead were “unlawfully killed,” the police match commander grossly negligent, and that fans’ behaviour did not contribute.',
      },
      {
        el: 'Νοέμβριος 2019: ένορκοι αθωώνουν τον διοικητή για ανθρωποκτονία από βαριά αμέλεια. Μάιος 2021: η δίκη δύο συνταξιούχων αστυνομικών και του νομικού συμβούλου της αστυνομίας για παρακώλυση της δικαιοσύνης καταρρέει, επειδή η αρχική έρευνα δεν ήταν νομοθετημένη — άρα δεν υπήρχε «δικαιοσύνη» να παρακωλυθεί.',
        en: 'November 2019: a jury acquits the commander of gross negligence manslaughter. May 2021: the trial of two retired officers and the force’s solicitor for perverting justice collapses, because the original inquiry was non-statutory — so there was no “course of justice” to pervert.',
      },
      {
        el: 'Σεπτέμβριος 2025: κατατίθεται ο «Νόμος Χίλσμπορο», που επιβάλλει νομική υποχρέωση ειλικρίνειας στους δημόσιους φορείς· η Βουλή των Κοινοτήτων τον ψηφίζει στις 14 Ιουλίου 2026.',
        en: 'September 2025: the “Hillsborough Law,” imposing a legal duty of candour on public bodies, is introduced; the House of Commons passes it on 14 July 2026.',
      },
    ],
    outcome: {
      el: 'Κανένας αστυνομικός δεν καταδικάστηκε για κανένα αδίκημα· ο μόνος καταδικασμένος ήταν ο υπεύθυνος ασφαλείας του γηπέδου, με πρόστιμο 6.500 λιρών.',
      en: 'No police officer was convicted of any offence; the only person convicted was the stadium safety officer, fined £6,500.',
    },
    breach: {
      el: 'Η αστυνομία υπάρχει για να προστατεύει το πλήθος — και, όταν αποτύχει, για να πει την αλήθεια γι’ αυτό. Όταν οι καταθέσεις των ίδιων των αστυνομικών ξαναγράφονται μέσα στην υπηρεσία πριν δοθούν σε έρευνα, και ο νόμος δεν έχει καν έννοια για να το τιμωρήσει, το κενό δεν είναι στην απόδειξη· είναι στον θεσμό.',
      en: 'Police exist to protect the crowd — and, when they fail, to tell the truth about it. When officers’ own statements are rewritten inside the force before an inquiry sees them, and the law has no concept with which to punish it, the gap is not in the proof; it is in the institution.',
    },
    patterns: ['victim-blamed', 'cover-up', 'own-investigate'],
    safeguards: ['first-account', 'independent-probe'],
    counterfactual: {
      el: 'Η Πρώτη Αφήγηση με Υπογραφή θα είχε σφραγίσει κάθε κατάθεση αστυνομικού τη στιγμή που γράφτηκε — κάθε μεταγενέστερη «διόρθωση» θα φαινόταν ως νέα έκδοση, με όνομα και ημερομηνία. Οι 116 αλλαγές θα ήταν ορατές το 1989, όχι το 2012. Η Ανεξάρτητη Έρευνα θα είχε πάρει την υπόθεση από την αστυνομία που ερευνούσε τον εαυτό της.',
      en: 'The Signed First Account would have sealed every officer’s statement the moment it was written — any later “correction” would appear as a new version, with a name and a date. The 116 changes would have been visible in 1989, not 2012. Independent Investigation would have taken the case away from a force investigating itself.',
    },
    antilogos: {
      el: 'Ένορκοι και δικαστές — όχι πολιτικοί — αθώωσαν τους κατηγορουμένους, που είναι νομικά αθώοι. Η κατάρρευση του 2021 στηρίχθηκε σε νομικό κενό, όχι σε απόδειξη ότι οι καταθέσεις δεν αλλοιώθηκαν, και οι ευθύνες για τη διαχείριση του πλήθους ήταν μοιρασμένες με τον σύλλογο.',
      en: 'Juries and judges — not politicians — cleared the accused, who are legally innocent. The 2021 collapse turned on a legal gap, not proof that the statements were unaltered, and crowd-management failures were shared with the club.',
    },
    reply: {
      el: 'Ακριβώς: οι κατηγορούμενοι είναι αθώοι, και το ίδιο το δικαστήριο είπε ότι ο λόγος ήταν νομικό κενό. Η πρόταση κλείνει το κενό — όχι για να ξαναδικάσει κανέναν, αλλά ώστε η επόμενη αλλοίωση να είναι αδύνατη αντί για ατιμώρητη. Γι’ αυτό και η ίδια η Βρετανία νομοθετεί τώρα υποχρέωση ειλικρίνειας.',
      en: 'Exactly: the accused are innocent, and the court itself said the reason was a legal gap. The proposal closes the gap — not to retry anyone, but so the next alteration is impossible rather than unpunishable. That is why Britain itself is now legislating a duty of candour.',
    },
    lever: {
      el: 'Ζήτησε νομική υποχρέωση ειλικρίνειας για κάθε δημόσια υπηρεσία μετά από θανατηφόρο συμβάν — και κάθε κατάθεση να σφραγίζεται με χρονοσφραγίδα τη στιγμή που γράφεται.',
      en: 'Ask for a legal duty of candour for every public service after a fatal incident — and for every statement to be time-stamped and sealed the moment it is written.',
    },
    scores: { harm: 10, power: 7, recurrence: 7, remedy: 9 },
    status: {
      el: 'Όλες οι διώξεις ολοκληρώθηκαν· οι αθωώσεις είναι τελεσίδικες. Ο Νόμος Χίλσμπορο εκκρεμεί στη Βουλή των Λόρδων — δεν έχει γίνει ακόμη νόμος.',
      en: 'All prosecutions have concluded; the acquittals are final. The Hillsborough Law is before the House of Lords — not yet law.',
    },
    sources: [
      { title: 'Channel 4 News — Hillsborough safety officer fined £6,500', url: 'https://channel4.com/news/hillsborough-safety-officer-fined-6500' },
      { title: 'Police Professional — 164 police statements altered (2012)', url: 'https://policeprofessional.com/?p=106680' },
      { title: 'Al Jazeera — Inquest: 96 fans were unlawfully killed (2016)', url: 'https://www.aljazeera.com/sports/2016/4/27/hillsborough-inquest-96-fans-were-unlawfully-killed' },
      { title: 'Police Professional — Trial collapses as judge rules no case to answer (2021)', url: 'https://policeprofessional.com/news/hillsborough-disaster-trial-collapses-as-judge-rules-no-case-to-answer/' },
      { title: 'Wikipedia — Hillsborough Law', url: 'https://en.wikipedia.org/wiki/Hillsborough_Law' },
    ],
  },
  {
    id: 'catalangate-2022',
    when: '2017–2026',
    place: { el: 'Καταλονία και Μαδρίτη, Ισπανία', en: 'Catalonia and Madrid, Spain' },
    title: {
      el: 'Η υπηρεσία πληροφοριών παραδέχθηκε ότι παρακολούθησε 18 Καταλανούς πολιτικούς «με έγκριση δικαστή» — που τη δείχνει μόνο πίσω από κλειστές πόρτες',
      en: 'The intelligence service admitted spying on 18 Catalan politicians “with a judge’s approval” — shown only behind closed doors',
    },
    harmed: { el: 'Τουλάχιστον 65 Καταλανοί πολιτικοί, δικηγόροι και ακτιβιστές, ανάμεσά τους ο μετέπειτα πρόεδρος της Καταλονίας Πέρε Αραγονές', en: 'At least 65 Catalan politicians, lawyers and activists, among them later Catalan president Pere Aragonès' },
    plain: {
      el: 'Ερευνητές βρήκαν κατασκοπευτικό λογισμικό στα κινητά τουλάχιστον 65 Καταλανών. Η υπηρεσία πληροφοριών παραδέχθηκε 18 από αυτούς, λέγοντας ότι είχε δικαστική έγκριση — αλλά το είπε μόνο σε κλειστή επιτροπή. Για τους υπόλοιπους κανείς δεν έχει αναλάβει την ευθύνη, και κανείς δεν έχει δικαστεί.',
      en: 'Researchers found spyware on the phones of at least 65 Catalans. The intelligence service admitted to 18 of them, saying it had judicial approval — but said so only in a closed committee. No one has taken responsibility for the rest, and no one has been tried.',
    },
    facts: [
      {
        el: '18 Απριλίου 2022: το Citizen Lab αναφέρει ότι τουλάχιστον 65 Καταλανοί στοχοποιήθηκαν ή μολύνθηκαν με τα λογισμικά Pegasus ή Candiru (2017–2020), με ισχυρές έμμεσες ενδείξεις σύνδεσης με ισπανικές αρχές.',
        en: '18 April 2022: Citizen Lab reports at least 65 Catalans targeted or infected with Pegasus or Candiru spyware (2017–2020), with strong circumstantial evidence of a link to Spanish authorities.',
      },
      {
        el: '5 Μαΐου 2022: η διευθύντρια της υπηρεσίας πληροφοριών (CNI) λέει στην κλειστή επιτροπή απορρήτων του Κογκρέσου ότι 18 από αυτούς παρακολουθήθηκαν με έγκριση δικαστή του Ανωτάτου Δικαστηρίου.',
        en: '5 May 2022: the head of the intelligence service (CNI) tells Congress’s closed official-secrets committee that 18 of them were spied on with a Supreme Court judge’s authorisation.',
      },
      {
        el: '10 Μαΐου 2022: η κυβέρνηση απομακρύνει τη διευθύντρια της CNI· η υπουργός Άμυνας παραδέχεται λάθη.',
        en: '10 May 2022: the government dismisses the CNI director; the Defence Minister admits mistakes.',
      },
      {
        el: '13 Δεκεμβρίου 2023: ο πρόεδρος Αραγονές καταθέτει ως θύμα σε ανάκριση δικαστηρίου της Βαρκελώνης, στην οποία έχει κληθεί η πρώην διευθύντρια της CNI.',
        en: '13 December 2023: President Aragonès testifies as a victim in a Barcelona court investigation to which the former CNI director has been summoned.',
      },
      {
        el: '16 Σεπτεμβρίου 2025: δικαστήριο της Βαρκελώνης ανοίγει νέα υπόθεση με ερευνώμενους την πρώην διευθύντρια της CNI, δύο πρώην διευθυντές της Guardia Civil και στελέχη της κατασκευάστριας εταιρείας, για αποκάλυψη απορρήτων και παράνομη πρόσβαση σε υπολογιστικά συστήματα.',
        en: '16 September 2025: a Barcelona court opens a new case naming as investigated parties the former CNI director, two former Civil Guard directors and executives of the spyware maker, for disclosure of secrets and illegal computer access.',
      },
    ],
    outcome: {
      el: 'Μία απομάκρυνση· καμία δίκη.',
      en: 'One dismissal; no trial.',
    },
    breach: {
      el: 'Η παρακολούθηση ενός πολιτικού αντιπάλου είναι η πιο επικίνδυνη εξουσία που έχει ένα κράτος. Αν η μόνη εγγύηση είναι η υπογραφή ενός δικαστή που κανείς δεν μπορεί να δει, και η εξήγηση δίνεται μόνο σε κλειστή επιτροπή, ο πολίτης δεν μπορεί ποτέ να μάθει αν παρακολουθήθηκε νόμιμα — ή καθόλου.',
      en: 'Spying on a political opponent is the most dangerous power a state holds. If the only guarantee is the signature of a judge no one can see, and the explanation is given only in a closed committee, a citizen can never learn whether they were watched lawfully — or at all.',
    },
    patterns: ['spyware', 'surveillance'],
    safeguards: ['spyware-trace', 'warrant-ledger', 'reasons'],
    counterfactual: {
      el: 'Το Μητρώο Άρσεων Απορρήτου θα είχε καταγράψει κάθε δικαστική έγκριση με ημερομηνία και αιτιολογία, και θα ενημέρωνε τον στόχο όταν η παρακολούθηση τελείωνε — έτσι οι 18 θα ήξεραν, και οι υπόλοιποι 47 θα ήξεραν ότι δεν υπάρχει έγκριση για αυτούς. Ο Ιχνηλάτης θα είχε εντοπίσει τα ίχνη του λογισμικού πριν από το Citizen Lab.',
      en: 'The Surveillance Order Register would have logged every judicial approval with its date and grounds, and notified the target once surveillance ended — so the 18 would know, and the other 47 would know there was no approval for them. The Spyware Tracer would have found the software’s traces before Citizen Lab did.',
    },
    antilogos: {
      el: 'Η CNI λέει ότι οι 18 στόχοι της είχαν δικαστική έγκριση — δηλαδή ήταν νόμιμοι κατά το ισπανικό δίκαιο. Το Citizen Lab δεν απέδωσε οριστικά την υπόλοιπη παρακολούθηση σε κανέναν, και τα κινητά του ίδιου του πρωθυπουργού και της υπουργού Άμυνας χακαρίστηκαν με Pegasus από «εξωτερικό» φορέα.',
      en: 'The CNI says its 18 targets had judicial approval — lawful under Spanish law. Citizen Lab did not conclusively attribute the rest of the spying to anyone, and the phones of the prime minister and the defence minister themselves were hacked with Pegasus by an “external” actor.',
    },
    reply: {
      el: 'Ακριβώς γι’ αυτό χρειάζεται μητρώο. Αν οι 18 ήταν νόμιμοι, ένα καταγεγραμμένο, αιτιολογημένο ένταλμα το αποδεικνύει. Αν οι υπόλοιποι 47 δεν έχουν ένταλμα, το μητρώο δείχνει ότι κάποιος — ίσως ξένος — παρακολουθεί Ευρωπαίους πολιτικούς χωρίς κανέναν έλεγχο. Και στις δύο περιπτώσεις το σκοτάδι ωφελεί μόνο όποιον παρακολουθεί παράνομα.',
      en: 'That is exactly why a register is needed. If the 18 were lawful, a recorded, reasoned warrant proves it. If the other 47 have no warrant, the register shows that someone — perhaps foreign — is watching European politicians with no check at all. Either way, darkness helps only whoever spies unlawfully.',
    },
    lever: {
      el: 'Ζήτησε κάθε πολίτης που παρακολουθήθηκε να ενημερώνεται όταν λήξει η παρακολούθηση, με το όνομα του δικαστή και την αιτιολογία.',
      en: 'Ask that every citizen who was surveilled be notified once it ends, with the name of the judge and the grounds.',
    },
    scores: { harm: 6, power: 9, recurrence: 8, remedy: 8 },
    status: {
      el: 'Ανοιχτή — αρκετές έρευνες σε στάδιο ανάκρισης, χωρίς παραπομπή σε δίκη ούτε καταδίκη. Όλοι τεκμαίρονται αθώοι.',
      en: 'Open — several investigations at the investigating-judge stage, with no indictment to trial and no conviction. All are presumed innocent.',
    },
    sources: [
      { title: 'Citizen Lab — CatalanGate (2022)', url: 'https://citizenlab.ca/2022/04/catalangate-extensive-mercenary-spyware-operation-against-catalans-using-pegasus-candiru/' },
      { title: 'Catalan News — Intelligence head argues court approved spying on some targets (2022)', url: 'https://www.catalannews.com/politics/item/intelligence-head-argues-court-approved-espionage-of-some-catalangate-targets' },
      { title: 'Al Jazeera — Spain sacks spy chief over Pegasus scandal (2022)', url: 'https://www.aljazeera.com/news/2022/5/10/spain-sacks-spy-chief-over-pegasus-spyware-scandal' },
      { title: 'Catalan News — Court investigates spyware makers and former officials (2025)', url: 'https://www.catalannews.com/society-science/item/court-investigates-pegasus-manufacturers-and-former-civil-guard-and-cni-officials' },
    ],
  },
  {
    id: 'philippines-drug-war-2016',
    when: '2016–2026',
    place: { el: 'Φιλιππίνες', en: 'Philippines' },
    title: {
      el: 'Η εκστρατεία ενός αρχηγού κράτους κατά των ναρκωτικών άφησε χιλιάδες νεκρούς από αστυνομικά πυρά — η λογοδοσία ήρθε μόνο από διεθνές δικαστήριο',
      en: 'A head of state’s anti-drug campaign left thousands dead at police hands — accountability came only from an international court',
    },
    harmed: { el: 'Χιλιάδες ύποπτοι χρήστες και έμποροι — ανάμεσά τους ο 17χρονος μαθητής Κιαν δελος Σάντος', en: 'Thousands of suspected drug users and dealers — among them 17-year-old student Kian delos Santos' },
    plain: {
      el: 'Στον «πόλεμο κατά των ναρκωτικών» σκοτώθηκαν χιλιάδες άνθρωποι από την αστυνομία. Η αστυνομία ερευνούσε τους δικούς της φόνους, η χώρα αποχώρησε από το Διεθνές Ποινικό Δικαστήριο — και τελικά ήταν ένα ένταλμα εκείνου του δικαστηρίου που οδήγησε στη σύλληψη του πρώην προέδρου.',
      en: 'In the “war on drugs,” thousands were killed by police. The police investigated their own killings, the country withdrew from the International Criminal Court — and in the end it was that court’s warrant that led to the former president’s arrest.',
    },
    facts: [
      {
        el: 'Ως τα μέσα του 2019: τα επίσημα αστυνομικά στοιχεία μιλούν για περίπου 6.600 νεκρούς· οργανώσεις δικαιωμάτων εκτιμούν 12.000 έως 30.000, και ο πρόεδρος της εθνικής επιτροπής ανθρωπίνων δικαιωμάτων έως 27.000.',
        en: 'By mid-2019: official police figures put deaths at about 6,600; rights groups estimate 12,000 to 30,000, and the chair of the national human rights commission up to 27,000.',
      },
      {
        el: '29 Νοεμβρίου 2018: τρεις αστυνομικοί καταδικάζονται σε έως 40 χρόνια για τη δολοφονία του Κιαν δελος Σάντος — η πρώτη καταδίκη μελών των δυνάμεων ασφαλείας στον πόλεμο κατά των ναρκωτικών.',
        en: '29 November 2018: three police officers are sentenced to up to 40 years for the murder of Kian delos Santos — the first conviction of security forces in the drug war.',
      },
      {
        el: '11 Μαρτίου 2025: ο πρώην πρόεδρος Ροντρίγο Ντουτέρτε συλλαμβάνεται με ένταλμα του Διεθνούς Ποινικού Δικαστηρίου για εγκλήματα κατά της ανθρωπότητας και μεταφέρεται στη Χάγη.',
        en: '11 March 2025: former president Rodrigo Duterte is arrested on an International Criminal Court warrant for crimes against humanity and transferred to The Hague.',
      },
      {
        el: '12 Μαΐου 2025: από την κράτηση, κερδίζει τις δημοτικές εκλογές στο Νταβάο με περίπου 85%.',
        en: '12 May 2025: from detention, he wins the Davao City mayoral election with about 85% of the vote.',
      },
      {
        el: '23 Απριλίου 2026: το Δικαστήριο επικυρώνει όλες τις κατηγορίες — φόνος και απόπειρα φόνου — για 78 κατονομαζόμενα θύματα και απορρίπτει την ένσταση αναρμοδιότητας.',
        en: '23 April 2026: the Court confirms all charges — murder and attempted murder — covering 78 named victims, and rejects his jurisdiction challenge.',
      },
    ],
    outcome: {
      el: 'Οι κατηγορίες επικυρώθηκαν και η υπόθεση παραπέμφθηκε σε δίκη· οι περισσότεροι θάνατοι παραμένουν ανεξέταστοι.',
      en: 'Charges confirmed and the case sent to trial; most deaths remain uninvestigated.',
    },
    breach: {
      el: 'Η αστυνομία έχει το δικαίωμα να χρησιμοποιήσει όπλο μόνο για να σώσει μια ζωή — όχι για να εφαρμόσει μια πολιτική. Όταν όσοι πυροβόλησαν γράφουν και την αναφορά, και ούτε ο αριθμός των νεκρών δεν είναι γνωστός με ακρίβεια χιλιάδων, οι θάνατοι παύουν να είναι στατιστική· γίνονται μέθοδος.',
      en: 'Police may use a weapon only to save a life — not to carry out a policy. When those who fired also write the report, and not even the death toll is known to within thousands, the killings stop being a statistic; they become a method.',
    },
    patterns: ['lethal-force', 'victim-blamed', 'own-investigate', 'refused-oversight'],
    safeguards: ['force-log', 'independent-probe', 'oversight-deadline'],
    counterfactual: {
      el: 'Το Μητρώο Χρήσης Βίας θα είχε καταγράψει κάθε θανατηφόρα επέμβαση με ώρα, τόπο και αιτιολογία — και ο αριθμός των νεκρών θα ήταν δημόσιος και ελέγξιμος, όχι αντικείμενο διαφωνίας. Η Ανεξάρτητη Έρευνα εξ Ορισμού θα είχε πάρει κάθε θάνατο από την αστυνομία που τον προκάλεσε, και η Προθεσμία Συνεργασίας θα έκανε ορατή κάθε άρνηση διαβίβασης στοιχείων.',
      en: 'The Use-of-Force Register would have logged every lethal operation with its time, place and justification — and the death toll would have been public and checkable, not a matter of dispute. Independent Investigation by Default would have taken every death away from the police who caused it, and the Cooperation Deadline would have made every refusal to hand over evidence visible.',
    },
    antilogos: {
      el: 'Η υπόθεση του Διεθνούς Ποινικού Δικαστηρίου αφορά 78 συγκεκριμένα θύματα, όχι τις χιλιάδες, και τα στοιχεία για τους νεκρούς αμφισβητούνται. Τα εθνικά δικαστήρια καταδίκασαν αστυνομικούς για τον Κιαν. Ο πρώην πρόεδρος διατηρεί μαζική υποστήριξη, και η υπεράσπιση αμφισβητεί τη δικαιοδοσία μετά την αποχώρηση της χώρας το 2019.',
      en: 'The International Criminal Court case covers 78 specific victims, not the thousands, and the death-toll data are contested. National courts did convict police for Kian. The former president retains mass support, and the defence disputes jurisdiction after the country’s 2019 withdrawal.',
    },
    reply: {
      el: 'Η λαϊκή υποστήριξη δεν απαντά στο ερώτημα αν κάθε νεκρός άξιζε έρευνα. Το ότι τα στοιχεία αμφισβητούνται είναι ακριβώς το πρόβλημα που λύνει ένα μητρώο: ένας καταγεγραμμένος, δημόσιος αριθμός δεν αφήνει περιθώριο για «6.600 ή 27.000». Και η καταδίκη για τον Κιαν δείχνει ότι η έρευνα μπορεί να φτάσει σε ετυμηγορία — οι υπόλοιπες χιλιάδες υποθέσεις απλώς δεν ερευνήθηκαν ποτέ.',
      en: 'Popular support does not answer whether each death deserved an investigation. Contested data is precisely the problem a register solves: a recorded, public count leaves no room for “6,600 or 27,000.” And the conviction for Kian shows that investigation can reach a verdict — the other thousands of cases were simply never investigated.',
    },
    lever: {
      el: 'Ζήτησε κάθε θάνατος από αστυνομικά πυρά να καταγράφεται δημόσια και να ερευνάται αυτόματα από αρχή εκτός αστυνομίας.',
      en: 'Ask that every death from police fire be publicly recorded and automatically investigated by an authority outside the police.',
    },
    scores: { harm: 10, power: 10, recurrence: 6, remedy: 8 },
    status: {
      el: 'Αναμένεται δίκη (πιθανότατα αρχές του 2027). Ο πρώην πρόεδρος τεκμαίρεται αθώος.',
      en: 'Awaiting trial (likely early 2027). The former president is presumed innocent.',
    },
    sources: [
      { title: 'BenarNews — Philippine drug war death toll (2019)', url: 'https://www.benarnews.org/english/news/philippine/drug-war-06192019123909.html' },
      { title: 'Human Rights Watch — First conviction of officers in the drug war (2018)', url: 'https://hrw.org/news/2018/11/29/first-conviction-officers-philippines-drug-war' },
      { title: 'The Star — Detained in The Hague, Duterte wins mayoral election (2025)', url: 'https://www.thestar.com.my/news/world/2025/05/13/detained-in-the-hague-philippines039-duterte-wins-hometown-mayoral-election' },
      { title: 'JURIST — ICC confirms charges against former president (2026)', url: 'https://www.jurist.org/news/2026/04/icc-confirms-charges-against-philippines-ex-president-duterte/' },
    ],
  },
  {
    id: 'tomlinson-2009',
    when: '2009–2013',
    place: { el: 'Λονδίνο, Αγγλία', en: 'London, England' },
    title: {
      el: 'Η αστυνομία είπε ότι οι διαδηλωτές εμπόδισαν τους διασώστες και η πρώτη νεκροψία έγραψε «καρδιά» — το βίντεο ενός τουρίστα έδειξε ένα χτύπημα με γκλομπ',
      en: 'Police said protesters blocked medics and the first post-mortem said “heart” — a tourist’s video showed a baton strike',
    },
    harmed: { el: 'Ίαν Τόμλινσον, 47 ετών, πωλητής εφημερίδων που γύριζε σπίτι — όχι διαδηλωτής', en: 'Ian Tomlinson, 47, a newspaper vendor walking home — not a protester' },
    plain: {
      el: 'Ο Ίαν Τόμλινσον κατέρρευσε και πέθανε αφού ένας αστυνομικός τον χτύπησε με γκλομπ και τον έσπρωξε στο έδαφος. Η αστυνομία είπε αρχικά ότι οι διαδηλωτές πετούσαν αντικείμενα στους διασώστες, και η πρώτη νεκροψία μίλησε για καρδιοπάθεια — ώσπου ένα βίντεο τα διέψευσε.',
      en: 'Ian Tomlinson collapsed and died after an officer struck him with a baton and pushed him to the ground. Police first said protesters had thrown missiles at medics, and the first post-mortem blamed heart disease — until a video disproved both.',
    },
    facts: [
      {
        el: '1 Απριλίου 2009: κατά τις διαδηλώσεις για τη σύνοδο G20, ο Τόμλινσον πεθαίνει αφού αστυνομικός των ΜΑΤ τον χτυπά με γκλομπ και τον σπρώχνει κάτω. Η αστυνομία λέει στα ΜΜΕ ότι διαδηλωτές πετούσαν αντικείμενα για να εμποδίσουν τη βοήθεια — το βίντεο έδειξε ότι δεν το έκαναν.',
        en: '1 April 2009: during the G20 protests, Tomlinson dies after a riot officer strikes him with a baton and pushes him down. Police tell the media protesters threw missiles to stop medical help — video later showed they had not.',
      },
      {
        el: '3–8 Απριλίου 2009: η πρώτη νεκροψία αποδίδει τον θάνατο σε στεφανιαία νόσο. Στις 7 Απριλίου η Guardian δημοσιεύει το βίντεο ενός Αμερικανού επισκέπτη· την επόμενη μέρα η ανεξάρτητη αρχή ελέγχου αφαιρεί την έρευνα από την αστυνομία του Σίτι του Λονδίνου.',
        en: '3–8 April 2009: the first post-mortem blames coronary artery disease. On 7 April the Guardian publishes a visiting American’s video; the next day the independent watchdog takes the investigation away from the City of London Police.',
      },
      {
        el: 'Ιούλιος 2010: οι εισαγγελείς αρνούνται να ασκήσουν δίωξη, επικαλούμενοι αντικρουόμενες νεκροψίες. 3 Μαΐου 2011: οι ένορκοι της ανάκρισης κρίνουν «παράνομη θανάτωση», και ο αστυνομικός κατηγορείται.',
        en: 'July 2010: prosecutors decline to charge, citing conflicting post-mortems. 3 May 2011: an inquest jury finds unlawful killing, and the officer is charged.',
      },
      {
        el: '19 Ιουλίου 2012: ένορκοι αθωώνουν τον αστυνομικό για ανθρωποκτονία. Τον Αύγουστο ο πρώτος παθολογοανατόμος διαγράφεται ως παραπλανητικός και ανέντιμος· τον Σεπτέμβριο ο αστυνομικός απολύεται για βαρύ πειθαρχικό παράπτωμα.',
        en: '19 July 2012: a jury acquits the officer of manslaughter. In August the first pathologist is struck off as misleading and dishonest; in September the officer is dismissed for gross misconduct.',
      },
      {
        el: 'Αύγουστος 2013: η Μητροπολιτική Αστυνομία ζητά συγγνώμη, αποδέχεται ότι ο Τόμλινσον θανατώθηκε παράνομα, καταβάλλει αποζημίωση και παραδέχεται παραπλανητικές δηλώσεις στα ΜΜΕ και αστοχίες ελέγχου που επέτρεψαν στον αστυνομικό να επανενταχθεί παρά προηγούμενες καταγγελίες.',
        en: 'August 2013: the Metropolitan Police apologises, accepts Tomlinson was unlawfully killed, pays compensation and admits misleading media statements and vetting failures that let the officer rejoin despite past misconduct allegations.',
      },
    ],
    outcome: {
      el: 'Ο αστυνομικός αθωώθηκε αλλά απολύθηκε· η αστυνομία ζήτησε συγγνώμη και πλήρωσε αποζημίωση.',
      en: 'The officer was acquitted but dismissed; the force apologised and paid compensation.',
    },
    breach: {
      el: 'Ένας άνθρωπος που γύριζε σπίτι του πέθανε ανάμεσα σε αστυνομικούς, και οι πρώτες τρεις εκδοχές — οι διαδηλωτές, η καρδιά του, η αστυνομία του Σίτι που ερευνούσε — ήταν όλες λάθος ή μεροληπτικές. Όταν χρειάζεται ένας περαστικός τουρίστας για να διορθωθούν και οι τρεις, το σύστημα δεν διορθώθηκε μόνο του· διορθώθηκε από έξω.',
      en: 'A man walking home died among police officers, and the first three accounts — the protesters, his heart, the City police investigating — were all wrong or conflicted. When it takes a passing tourist to correct all three, the system did not correct itself; it was corrected from outside.',
    },
    patterns: ['cover-up', 'own-investigate'],
    safeguards: ['independent-probe', 'witness-video', 'first-account'],
    counterfactual: {
      el: 'Η Ανεξάρτητη Έρευνα εξ Ορισμού θα είχε αφαιρέσει την έρευνα από την εμπλεκόμενη αστυνομία την πρώτη μέρα, όχι μετά το βίντεο. Το Βίντεο του Πολίτη θα είχε δώσει σε κάθε περαστικό έναν ασφαλή τρόπο να καταθέσει την καταγραφή του, και η Πρώτη Αφήγηση με Υπογραφή θα είχε δέσει τη δήλωση για τους «διαδηλωτές» με το όνομα όποιου την έκανε.',
      en: 'Independent Investigation by Default would have removed the case from the involved force on day one, not after the video. The Citizen’s Video would have given every passer-by a safe way to submit their recording, and the Signed First Account would have tied the “protesters” statement to the name of whoever made it.',
    },
    antilogos: {
      el: 'Ο Τόμλινσον είχε ηπατική νόσο, και η αιτιώδης σχέση αμφισβητήθηκε πραγματικά ιατρικά — γι’ αυτό αρχικά δεν ασκήθηκε δίωξη. Ένορκοι άκουσαν τα στοιχεία και αθώωσαν τον αστυνομικό, που είπε ότι πίστευε πως ο Τόμλινσον εμπόδιζε την επιχείρηση.',
      en: 'Tomlinson had liver disease, and causation was genuinely disputed medically — which is why charges were first declined. A jury heard the evidence and acquitted the officer, who said he believed Tomlinson was obstructing the operation.',
    },
    reply: {
      el: 'Ο αστυνομικός είναι αθώος για ανθρωποκτονία, και έτσι πρέπει να αναφέρεται. Αλλά ο πρώτος παθολογοανατόμος διαγράφηκε ως ανέντιμος, και η αστυνομία παραδέχθηκε ότι παραπλάνησε τα ΜΜΕ. Η πρόταση δεν αφορά την ετυμηγορία· αφορά τις πρώτες μέρες, όταν όλα όσα έλεγε ο θεσμός ήταν λάθος — και θα έμεναν, χωρίς ένα βίντεο.',
      en: 'The officer is acquitted of manslaughter, and must be described that way. But the first pathologist was struck off as dishonest, and the police admitted misleading the media. The proposal is not about the verdict; it is about the first days, when everything the institution said was wrong — and would have stayed that way, without a video.',
    },
    lever: {
      el: 'Ζήτησε κάθε θάνατος κατά τη διάρκεια διαδήλωσης να ερευνάται από την πρώτη ώρα από αρχή εκτός αστυνομίας, με ανοιχτή πρόσκληση για βίντεο πολιτών.',
      en: 'Ask that every death during a protest be investigated from the first hour by an authority outside the police, with an open call for citizens’ video.',
    },
    scores: { harm: 7, power: 5, recurrence: 7, remedy: 8 },
    status: {
      el: 'Κλειστή· η αθώωση για ανθρωποκτονία είναι τελεσίδικη.',
      en: 'Closed; the acquittal for manslaughter is final.',
    },
    sources: [
      { title: 'Wikipedia — Death of Ian Tomlinson', url: 'https://en.wikipedia.org/wiki/Death_of_Ian_Tomlinson' },
      { title: 'Yorkshire Post — Newspaper seller unlawfully killed, jury decides (2011)', url: 'https://www.yorkshirepost.co.uk/news/crime/newspaper-seller-unlawfully-killed-by-baton-wielding-pc-jury-decides-1933664' },
      { title: 'Channel 4 News — Tomlinson pathologist struck off (2012)', url: 'https://www.channel4.com/news/tomlinson-pathologist-struck-off-after-years-of-blunders' },
      { title: 'Arab News — Met Police apologises to Tomlinson family (2013)', url: 'https://www.arabnews.com/news/460397' },
    ],
  },
]
