// ΙΠΠΟΚΡΑΤΗΣ — cases 6–10. Same rules as cases-a.ts: sourced facts checked on
// 2026-09-29, the office in the headline, the harmed always named, and the
// presumption of innocence stated for every open case.

import type { ToolCase } from '../types'

export const CASES_B: readonly ToolCase[] = [
  {
    id: 'romania-2016',
    when: '2012–2016',
    place: { el: 'Ρουμανία', en: 'Romania' },
    title: {
      el: 'Τα απολυμαντικά των νοσοκομείων ήταν αραιωμένα έως και δέκα φορές — τα αποκάλυψαν αθλητικοί δημοσιογράφοι, όχι οι αρχές ελέγχου',
      en: 'Hospital disinfectants were diluted up to tenfold — exposed by sports journalists, not by the inspectors',
    },
    harmed: { el: 'Νοσηλευόμενοι σε εκατοντάδες νοσοκομεία — ανάμεσά τους τραυματίες της πυρκαγιάς στο Colectiv', en: 'Inpatients in hundreds of hospitals — among them survivors of the Colectiv fire' },
    plain: {
      el: 'Μια εταιρεία προμήθευε εκατοντάδες δημόσια νοσοκομεία με απολυμαντικά πολύ αραιότερα από όσο έγραφε η ετικέτα· το σκάνδαλο αποκαλύφθηκε όταν δημοσιογράφοι ερεύνησαν γιατί τραυματίες μιας πυρκαγιάς ανέπτυσσαν ανίατες λοιμώξεις.',
      en: 'A company supplied hundreds of public hospitals with disinfectants far weaker than their labels said; the scandal came out when journalists asked why burn survivors were developing untreatable infections.',
    },
    facts: [
      {
        el: '2012–2015: η Hexi Pharma υπογράφει πάνω από 9.300 συμβάσεις με δημόσια νοσοκομεία της Ρουμανίας, με έσοδα σχεδόν 26 εκατ. ευρώ.',
        en: '2012–2015: Hexi Pharma signs over 9,300 contracts with Romanian public hospitals, with revenue of almost €26 million.',
      },
      {
        el: 'Δημοσιογράφοι της Gazeta Sporturilor, ερευνώντας γιατί τραυματίες της πυρκαγιάς στο κλαμπ Colectiv (2015) ανέπτυσσαν ανίατες λοιμώξεις στα νοσοκομεία, βρίσκουν τουλάχιστον 10 προϊόντα της εταιρείας αραιωμένα — κάποια με μόλις το 10% της δραστικής ουσίας της ετικέτας.',
        en: 'Journalists at Gazeta Sporturilor, investigating why survivors of the 2015 Colectiv club fire were developing untreatable hospital infections, find at least 10 of the company’s products diluted — some with just 10% of the labelled active substance.',
      },
      {
        el: 'Είχε ήδη προηγηθεί εύρημα μη συμμόρφωσης για προϊόν της ίδιας εταιρείας από τη Διεύθυνση Δημόσιας Υγείας του Arad.',
        en: 'A non-conforming product from the same company had already been found earlier by the Arad Public Health Department.',
      },
      {
        el: 'Μάιος 2016: διαδηλώσεις στο Βουκουρέστι· στις 8 Μαΐου παραιτείται ο υπουργός Υγείας. Ο ιδιοκτήτης της εταιρείας σκοτώνεται σε τροχαίο ενώ οι έρευνες είχαν ξεκινήσει.',
        en: 'May 2016: protests in Bucharest; on 8 May the health minister resigns. The company’s owner dies in a car crash after the investigations began.',
      },
      {
        el: 'Το δικαστήριο καταδικάζει τη διεύθυνση της εταιρείας σε τρία χρόνια φυλάκιση και δημεύει 36 εκατ. λέι (7,7 εκατ. ευρώ).',
        en: 'The court sentences the company’s manager to three years in prison and confiscates RON 36 million (€7.7 million).',
      },
    ],
    outcome: {
      el: 'Παραίτηση υπουργού, καταδίκη, δήμευση — αφού εκατοντάδες νοσοκομεία είχαν χρησιμοποιήσει τα αραιωμένα προϊόντα επί χρόνια.',
      en: 'A minister’s resignation, a conviction, confiscation — after hundreds of hospitals had used the diluted products for years.',
    },
    breach: {
      el: 'Το νοσοκομείο υπάρχει για να σε θεραπεύσει — όχι να σε αρρωστήσει. Όταν το απολυμαντικό είναι σχεδόν νερό με ετικέτα, κάθε χειρουργείο γίνεται ρίσκο που ο ασθενής δεν ξέρει ότι παίρνει. Και όταν τη νόθευση την ανακαλύπτουν αθλητικοί συντάκτες αντί για τις αρχές ελέγχου, ο έλεγχος απλώς δεν υπήρχε.',
      en: 'A hospital exists to heal you — not to make you sick. When the disinfectant is little more than water with a label, every operation becomes a risk the patient does not know they are taking. And when sports writers, not inspectors, find the adulteration, the inspection simply did not exist.',
    },
    patterns: ['adulterated'],
    safeguards: ['lot-test', 'open-procurement', 'shield'],
    counterfactual: {
      el: 'Ο Κλήρος στο Εργαστήριο θα είχε αναλύσει τυχαίες παρτίδες από τον πρώτο χρόνο των 9.300 συμβάσεων — και το 10% δραστικής ουσίας θα είχε φανεί στην πρώτη ανάλυση, όχι σε δημοσιογραφική έρευνα μετά από θανάτους. Η σύνδεση των αποτυχημένων παρτίδων με λοιμώξεις στα νοσοκομεία που τις χρησιμοποίησαν θα έδειχνε το μοτίβο αυτόματα.',
      en: 'Lot-Drawn Lab Testing would have analysed random batches in the first year of the 9,300 contracts — and the 10% active substance would have shown up in the first test, not in a journalistic investigation after deaths. Linking failed batches to infections in the hospitals that used them would have shown the pattern automatically.',
    },
    antilogos: {
      el: 'Οι λοιμώξεις στα νοσοκομεία έχουν πολλές αιτίες — υποστελέχωση, υγιεινή, ανθεκτικά μικρόβια — και δεν μπορεί να αποδοθεί κάθε θάνατος στα απολυμαντικά. Η εύκολη σύνδεση μπορεί να κρύψει βαθύτερα προβλήματα.',
      en: 'Hospital infections have many causes — understaffing, hygiene, resistant bacteria — and not every death can be blamed on disinfectants. An easy link can hide deeper problems.',
    },
    reply: {
      el: 'Ακριβώς γι’ αυτό χρειάζεται μέτρηση και όχι υπόθεση. Ο εργαστηριακός έλεγχος δεν ισχυρίζεται ότι το απολυμαντικό προκάλεσε κάθε θάνατο· αποδεικνύει ότι η ετικέτα έλεγε ψέματα. Και ένα σύστημα που δεν μπορεί να εγγυηθεί ούτε το απολυμαντικό του, δεν μπορεί να ισχυριστεί ότι ελέγχει τα υπόλοιπα.',
      en: 'Which is exactly why it needs measurement, not assumption. Lab testing does not claim the disinfectant caused every death; it proves the label lied. And a system that cannot vouch even for its disinfectant cannot claim to control anything else.',
    },
    lever: {
      el: 'Ζήτησε τυχαίους, δημόσιους εργαστηριακούς ελέγχους σε φάρμακα, απολυμαντικά και υλικά των νοσοκομείων, με ανοιχτά αποτελέσματα ανά προμηθευτή.',
      en: 'Ask for random, public lab testing of hospital drugs, disinfectants and supplies, with open results per supplier.',
    },
    scores: { harm: 9, power: 5, recurrence: 6, remedy: 10 },
    status: {
      el: 'Κλειστή· καταδίκη και δήμευση σε βάρος της εταιρείας.',
      en: 'Closed; conviction and confiscation against the company.',
    },
    sources: [
      { title: 'Al Jazeera — Diluted disinfectant scandal hits Romania hospitals (2016)', url: 'https://www.aljazeera.com/news/2016/5/14/diluted-disinfectant-scandal-hits-romania-hospitals' },
      { title: 'Romania Insider — Journalistic investigation reveals disinfectant fraud', url: 'https://www.romania-insider.com/disinfectant-fraud-in-romanian-public-hospitals' },
      { title: 'Romania Insider — Record sanctions in diluted disinfectants case', url: 'https://www.romania-insider.com/sanctions-diluted-disinfectants-hexi-pharma' },
      { title: 'Wikipedia — 2016 diluted disinfectants crisis in Romania', url: 'https://en.wikipedia.org/wiki/2016_diluted_disinfectants_crisis_in_Romania' },
    ],
  },
  {
    id: 'purdue-1995',
    when: '1995–2026',
    place: { el: 'ΗΠΑ', en: 'United States' },
    title: {
      el: 'Ο γιατρός της FDA που αξιολόγησε το OxyContin πήγε να δουλέψει στην εταιρεία που το παρήγαγε — και η εταιρεία ομολόγησε ενοχή δύο φορές',
      en: 'The FDA doctor who reviewed OxyContin went to work for its maker — and the company pleaded guilty twice',
    },
    harmed: { el: 'Εκατοντάδες χιλιάδες νεκροί από υπερδοσολογία οπιοειδών και οι οικογένειές τους', en: 'Hundreds of thousands dead from opioid overdoses, and their families' },
    plain: {
      el: 'Η Purdue Pharma προώθησε ένα ισχυρό οπιοειδές ως λιγότερο εθιστικό από όσο ήταν· ο γιατρός της FDA που ηγήθηκε της αξιολόγησής του προσλήφθηκε αργότερα από την εταιρεία, η οποία ομολόγησε ενοχή για ομοσπονδιακά αδικήματα το 2007 και το 2020.',
      en: 'Purdue Pharma promoted a powerful opioid as less addictive than it was; the FDA doctor who led its review was later hired by the company, which pleaded guilty to federal crimes in 2007 and in 2020.',
    },
    facts: [
      {
        el: '1995: η FDA εγκρίνει το OxyContin. Ο Curtis Wright, που ηγήθηκε της ιατρικής αξιολόγησης, φεύγει από τη FDA και το 1998 γίνεται εκτελεστικός διευθυντής ιατρικής έρευνας στην Purdue — κατά δημοσιογραφικές έρευνες, με αμοιβή πρώτου έτους τουλάχιστον 379.000 δολάρια.',
        en: '1995: the FDA approves OxyContin. Curtis Wright, who led the medical review, leaves the FDA and in 1998 becomes executive director of medical research at Purdue — reportedly with a first-year package of at least $379,000.',
      },
      {
        el: 'Μάιος 2007: μια εταιρεία του ομίλου και τρία ανώτατα στελέχη ομολογούν ενοχή για παραπλανητική προώθηση: το φάρμακο παρουσιαζόταν λιγότερο εθιστικό και λιγότερο επιρρεπές σε κατάχρηση, χωρίς επιστημονική τεκμηρίωση. Πληρώνουν 634,5 εκατ. δολάρια.',
        en: 'May 2007: a group company and three top executives plead guilty to misbranding: the drug was presented as less addictive and less prone to abuse, without scientific support. They pay $634.5 million.',
      },
      {
        el: 'Νοέμβριος 2020: η Purdue ομολογεί ενοχή για τρία ομοσπονδιακά κακουργήματα — συνωμοσία εξαπάτησης των ΗΠΑ και δύο συνωμοσίες παράβασης του νόμου κατά των μιζών — με ποινικό πρόστιμο 3,544 δισ. και δήμευση 2 δισ. δολαρίων.',
        en: 'November 2020: Purdue pleads guilty to three federal felonies — conspiracy to defraud the United States and two conspiracies to violate the Anti-Kickback Statute — with a $3.544 billion criminal fine and $2 billion forfeiture.',
      },
      {
        el: '1 Μαΐου 2026: η Purdue παύει να λειτουργεί, καθώς τίθεται σε ισχύ διακανονισμός 7,4 δισ. δολαρίων με 54 γενικούς εισαγγελείς πολιτειών και εδαφών, με συνεισφορά της οικογένειας των ιδιοκτητών.',
        en: '1 May 2026: Purdue ceases operating as a $7.4 billion settlement with 54 state and territorial attorneys general takes effect, with contributions from the owning family.',
      },
    ],
    outcome: {
      el: 'Η εταιρεία ομολόγησε δύο φορές και διαλύθηκε. Κανένα μέλος της οικογένειας των ιδιοκτητών δεν κατηγορήθηκε ποινικά.',
      en: 'The company pleaded guilty twice and was dissolved. No member of the owning family was criminally charged.',
    },
    breach: {
      el: 'Η έγκριση ενός φαρμάκου είναι η εγγύηση του κράτους προς τον άρρωστο: «αυτό είναι όπως λέει η ετικέτα». Όταν ο ελεγκτής που δίνει την εγγύηση βρίσκει αργότερα δουλειά στον ελεγχόμενο, κάθε έγκριση γίνεται ύποπτη — και όταν η εταιρεία πληρώνει για να γράφονται περισσότερες συνταγές, ο πόνος του αρρώστου γίνεται αγορά.',
      en: 'A drug’s approval is the state’s guarantee to the sick: “this is what the label says.” When the regulator who gives that guarantee later finds work with the regulated, every approval becomes suspect — and when the company pays to get more prescriptions written, the patient’s pain becomes a market.',
    },
    patterns: ['revolving-door', 'bought-prescriber'],
    safeguards: ['cooling', 'sunshine', 'anomaly'],
    counterfactual: {
      el: 'Η Περίοδος Ψύξης θα είχε καταγράψει δημόσια τη μετάβαση του αξιολογητή στην εταιρεία που αξιολόγησε — και θα είχε ανοίξει αυτόματα επανεξέταση της ετικέτας που ενέκρινε. Το Μητρώο Ηλίου και ο Ανιχνευτής Αποκλίσεων θα έδειχναν ποιοι γιατροί πληρώνονταν από την εταιρεία και ταυτόχρονα έγραφαν ασυνήθιστα πολλά οπιοειδή.',
      en: 'The Cooling-Off Register would have publicly logged the reviewer’s move to the company he reviewed — and automatically reopened the label he approved. The Sunshine Register and the Anomaly Watch would have shown which doctors were paid by the company while writing unusually many opioid prescriptions.',
    },
    antilogos: {
      el: 'Κανείς δεν απέδειξε ότι η πρόσληψη ήταν αντάλλαγμα για την έγκριση· οι ειδικοί κινούνται φυσιολογικά ανάμεσα σε ρυθμιστές και βιομηχανία, και η γνώση τους χρειάζεται και στις δύο πλευρές.',
      en: 'No one proved the hire was a reward for the approval; experts move normally between regulators and industry, and their knowledge is needed on both sides.',
    },
    reply: {
      el: 'Σωστά — γι’ αυτό η Περίοδος Ψύξης δεν κατηγορεί κανέναν· αφαιρεί την υποψία. Αν η μετάβαση περιμένει μερικά χρόνια και οι αποφάσεις του ελεγκτή ξαναδιαβάζονται δημόσια, ο έντιμος ελεγκτής καθαρίζει και ο ασθενής ξαναβρίσκει την εμπιστοσύνη του στην έγκριση.',
      en: 'True — which is why the Cooling-Off Register accuses no one; it removes the suspicion. If the move waits a few years and the regulator’s decisions are re-read in public, the honest regulator is cleared and the patient regains trust in the approval.',
    },
    lever: {
      el: 'Ζήτησε περίοδο αναμονής για κάθε στέλεχος του ΕΟΦ και του υπουργείου Υγείας πριν περάσει σε εταιρεία που ήλεγχε — και δημόσιο μητρώο κάθε τέτοιας μετάβασης.',
      en: 'Ask for a waiting period before any official of the medicines agency or health ministry joins a company they oversaw — and a public register of every such move.',
    },
    scores: { harm: 10, power: 9, recurrence: 7, remedy: 6 },
    status: {
      el: 'Κλειστή για την εταιρεία (ομολογίες 2007 και 2020, παύση λειτουργίας 2026).',
      en: 'Closed for the company (guilty pleas 2007 and 2020, ceased operating 2026).',
    },
    sources: [
      { title: 'US DOJ — Purdue Pharma pleads guilty to fraud and kickback conspiracies (2020)', url: 'https://www.justice.gov/archives/opa/pr/opioid-manufacturer-purdue-pharma-pleads-guilty-fraud-and-kickback-conspiracies' },
      { title: 'NPR — OxyContin addiction case yields millions in fines (2007)', url: 'https://www.npr.org/2007/05/10/10118248/oxycontin-addiction-case-yields-millions-in-fines' },
      { title: 'PBS NewsHour — Purdue criminal sentence clears the way for its settlement', url: 'https://www.pbs.org/newshour/nation/a-criminal-sentence-for-oxycontin-maker-purdue-pharma-clears-the-way-for-finalizing-its-settlement' },
      { title: 'Bustle — Former FDA official defended working at Purdue after approving OxyContin', url: 'https://www.bustle.com/entertainment/curtis-wright-painkiller-oxycontin-fda-approval' },
    ],
  },
  {
    id: 'vyapam-2013',
    when: '2013–2024',
    place: { el: 'Μάντγια Πραντές, Ινδία', en: 'Madhya Pradesh, India' },
    title: {
      el: 'Θέσεις σε ιατρικές σχολές πουλιούνταν με πλαστοπροσωπία στις εξετάσεις — και δεκάδες άνθρωποι που συνδέονταν με την υπόθεση πέθαναν',
      en: 'Medical school places were sold through exam impersonation — and dozens of people linked to the case died',
    },
    harmed: { el: 'Οι έντιμοι υποψήφιοι — και οι ασθενείς όσων αγόρασαν τη θέση τους', en: 'Honest candidates — and the patients of those who bought their places' },
    plain: {
      el: 'Για χρόνια, οι εισαγωγικές εξετάσεις για ιατρικές σχολές και δημόσιες θέσεις σε μια ινδική πολιτεία στήνονταν με πληρωμένους «αντικαταστάτες» και αλλοιωμένους βαθμούς.',
      en: 'For years, entrance exams for medical schools and public jobs in an Indian state were rigged with paid stand-ins and doctored marks.',
    },
    facts: [
      {
        el: '2013: η αστυνομία συλλαμβάνει πάνω από δώδεκα άτομα που φέρονται να έδιναν εξετάσεις για λογαριασμό υποψηφίων στις εισαγωγικές ιατρικών σχολών και σε διαγωνισμούς του Δημοσίου, που διοργάνωνε το συμβούλιο εξετάσεων Vyapam.',
        en: '2013: police arrest more than a dozen people allegedly sitting exams on candidates’ behalf in medical-school entrance and public-job tests run by the Vyapam examinations board.',
      },
      {
        el: 'Ιούλιος 2015: ο δημοσιογράφος Akshay Singh πεθαίνει αιφνίδια κατά τη διάρκεια συνέντευξης για την υπόθεση. Στις 9 Ιουλίου το Ανώτατο Δικαστήριο αναθέτει στην κεντρική υπηρεσία ερευνών (CBI) τόσο το σκάνδαλο όσο και τους θανάτους που συνδέθηκαν με αυτό.',
        en: 'July 2015: journalist Akshay Singh dies suddenly during an interview about the case. On 9 July the Supreme Court hands both the scandal and the deaths linked to it to the Central Bureau of Investigation (CBI).',
      },
      {
        el: 'Κατά την επίσημη καταμέτρηση, περίπου δύο δωδεκάδες άνθρωποι που συνδέονταν με την υπόθεση πέθαναν σε ασαφείς συνθήκες. Το CBI κατέληξε αργότερα ότι δεν υπήρξε εγκληματική ενέργεια στους θανάτους που εξέτασε.',
        en: 'By the official count, about two dozen people linked to the case died in unclear circumstances. The CBI later concluded there was no foul play in the deaths it examined.',
      },
      {
        el: 'Οι συλλήψεις ξεπερνούν τις 2.000. Το 2024 έντεκα άτομα — έξι υποψήφιοι και πέντε «αντικαταστάτες» — καταδικάζονται σε επτά χρόνια φυλάκιση.',
        en: 'Arrests exceed 2,000. In 2024 eleven people — six candidates and five stand-ins — are sentenced to seven years in prison.',
      },
    ],
    outcome: {
      el: 'Χιλιάδες συλλήψεις, καταδίκες που συνεχίζονται πάνω από δέκα χρόνια μετά — και ένα ερώτημα που δεν απαντήθηκε ποτέ πλήρως: πόσοι εργάζονται σήμερα στην υγεία με θέση που αγοράστηκε.',
      en: 'Thousands of arrests, convictions still coming more than a decade later — and a question never fully answered: how many work in health today in a place that was bought.',
    },
    breach: {
      el: 'Όταν μια θέση στην ιατρική αγοράζεται, η διαφθορά δεν τελειώνει στις εξετάσεις — μπαίνει στο χειρουργείο μαζί με τον γιατρό. Ο ασθενής που εμπιστεύεται ένα δίπλωμα εμπιστεύεται, χωρίς να το ξέρει, κι έναν μεσάζοντα.',
      en: 'When a place in medicine is bought, the corruption does not end at the exam — it walks into the operating theatre with the doctor. The patient who trusts a diploma unknowingly trusts a middleman too.',
    },
    patterns: ['bought-credentials', 'silenced-warning'],
    safeguards: ['anomaly', 'shield'],
    counterfactual: {
      el: 'Ο Ανιχνευτής Αποκλίσεων θα είχε δει στις εξετάσεις ό,τι βλέπει στις συνταγές: απαντήσεις πανομοιότυπες με του διπλανού, φωτογραφίες που δεν ταιριάζουν, βαθμούς χωρίς ιστορικό. Η Ασπίδα Μάρτυρα θα είχε σφραγίσει κάθε μαρτυρία με ημερομηνία σε ανεξάρτητη αρχή — ώστε καμία να μην εξαρτάται από το αν ο μάρτυρας θα ζει στη δίκη.',
      en: 'The Anomaly Watch would have seen in the exams what it sees in prescriptions: answers identical to a neighbour’s, photos that do not match, marks with no history behind them. The Witness Shield would have sealed every testimony with a date at an independent authority — so none depended on whether the witness lived to the trial.',
    },
    antilogos: {
      el: 'Το CBI δεν βρήκε εγκληματική ενέργεια στους θανάτους· η σύνδεσή τους με το σκάνδαλο μπορεί να είναι σύμπτωση που μεγέθυνε ο φόβος. Και η αυτοματοποιημένη επιτήρηση εξετάσεων μπορεί να αδικήσει φτωχούς υποψήφιους με «ασυνήθιστα» καλούς βαθμούς.',
      en: 'The CBI found no foul play in the deaths; their link to the scandal may be coincidence magnified by fear. And automated exam surveillance could wrong poor candidates with “unusually” good marks.',
    },
    reply: {
      el: 'Ας δεχτούμε το εύρημα του CBI· το δίδαγμα μένει: όπου κάθε μαρτυρία ζει μόνο στη μνήμη ενός ανθρώπου, κάθε θάνατος γεννά υποψία. Όταν οι μαρτυρίες σφραγίζονται αμέσως, ούτε ο ένοχος κερδίζει κάτι από έναν θάνατο ούτε ο αθώος χρειάζεται να αποδείξει ότι δεν ωφελήθηκε. Και η απόκλιση στον βαθμό είναι ερώτηση προς εξεταστή — όχι αποκλεισμός υποψηφίου.',
      en: 'Accept the CBI’s finding; the lesson stands: where each testimony lives only in one person’s memory, every death breeds suspicion. When testimony is sealed at once, the guilty gain nothing from a death and the innocent need not prove they did not. And an outlying mark is a question for an examiner — not the exclusion of a candidate.',
    },
    lever: {
      el: 'Ζήτησε βιομετρική ταυτοποίηση και ανοιχτό έλεγχο αποκλίσεων σε κάθε εξέταση που οδηγεί σε θέση ή πτυχίο υγείας.',
      en: 'Ask for biometric identity checks and open anomaly review in every exam that leads to a health post or degree.',
    },
    scores: { harm: 8, power: 8, recurrence: 6, remedy: 8 },
    status: {
      el: 'Εκατοντάδες υποθέσεις· καταδίκες ως το 2024 και διαδικασίες σε εξέλιξη.',
      en: 'Hundreds of cases; convictions through 2024 and proceedings ongoing.',
    },
    sources: [
      { title: 'CPJ — The mysterious death of Akshay Singh', url: 'https://cpj.org/reports/2016/08/dangerous-pursuit-india-corruption-journalists-killed-impunity-chapter-3-akshay-singh/' },
      { title: 'Deccan Herald — Vyapam “killer” scam', url: 'https://www.deccanherald.com/india/vyapam-killer-scam-2138316' },
      { title: 'DNA — Vyapam scam: no foul play in journalist’s death, says CBI', url: 'https://www.dnaindia.com/india/report-vyapam-scam-no-foul-play-in-journalist-death-says-cbi-2291935' },
      { title: 'Zee News — What was the Vyapam scam: 10 facts', url: 'https://zeenews.india.com/india/what-was-vyapam-scam-10-must-know-facts-2620421.html' },
    ],
  },
  {
    id: 'esidimeni-2016',
    when: '2015–2024',
    place: { el: 'Γκαουτένγκ, Νότια Αφρική', en: 'Gauteng, South Africa' },
    title: {
      el: 'Για να εξοικονομηθούν χρήματα, ψυχικά ασθενείς μεταφέρθηκαν σε ακατάλληλες δομές — 144 πέθαναν',
      en: 'To save money, psychiatric patients were moved into unfit facilities — 144 died',
    },
    harmed: { el: '144 άνθρωποι με ψυχική αναπηρία και οι οικογένειές τους', en: '144 people with mental disabilities, and their families' },
    plain: {
      el: 'Η υγειονομική αρχή της επαρχίας Γκαουτένγκ τερμάτισε τη σύμβαση με εξειδικευμένο πάροχο και μετέφερε περίπου 1.700 ψυχικά ασθενείς, πολλούς σε ακατάλληλες ΜΚΟ· 144 πέθαναν, και η δικαστική έρευνα απέδωσε ευθύνες σε δύο αξιωματούχους.',
      en: 'Gauteng’s provincial health department ended its contract with a specialist provider and moved about 1,700 psychiatric patients, many into unfit NGOs; 144 died, and the judicial inquest held two officials responsible.',
    },
    facts: [
      {
        el: 'Οκτώβριος 2015: η επικεφαλής Υγείας της επαρχιακής κυβέρνησης ανακοινώνει τη λήξη της σύμβασης με τη Life Esidimeni, επικαλούμενη ευθυγράμμιση πολιτικής και εξοικονόμηση κόστους.',
        en: 'October 2015: the provincial government’s head of health announces the end of the Life Esidimeni contract, citing policy alignment and cost savings.',
      },
      {
        el: 'Περίπου 1.700 ασθενείς μετακινούνται· πάνω από 1.200 καταλήγουν σε κρατικό κέντρο ή σε μία από 27 δομές ΜΚΟ, πολλές ακατάλληλες, υποστελεχωμένες και χωρίς εμπειρία.',
        en: 'About 1,700 patients are moved; over 1,200 end up in a state facility or one of 27 NGO homes, many unsuitable, understaffed and inexperienced.',
      },
      {
        el: '144 άνθρωποι πεθαίνουν μετά τις μεταφορές του 2015–2016.',
        en: '144 people die after the transfers of 2015–2016.',
      },
      {
        el: 'Ιούλιος 2024: η δικαστική έρευνα κρίνει ότι η πρώην επικεφαλής Υγείας, με την απόφαση τερματισμού, και η πρώην επικεφαλής ψυχικής υγείας, με την εφαρμογή της, ευθύνονται για την καταστροφή — με δυνατότητα δίωξης για εννέα από τους 144 θανάτους.',
        en: 'July 2024: the inquest finds the former provincial health head, through the decision to end the contract, and the former head of mental health, through its implementation, responsible for the catastrophe — with prosecution possible for nine of the 144 deaths.',
      },
      {
        el: 'Η Εθνική Εισαγγελική Αρχή δηλώνει ότι θα ασκήσει δίωξη μόνο αν βρει επαρκή στοιχεία· οργανώσεις των οικογενειών ζητούν να κινηθεί ταχύτερα.',
        en: 'The National Prosecuting Authority says it will prosecute only if it finds sufficient evidence; families’ organisations press it to move faster.',
      },
    ],
    outcome: {
      el: 'Ως την απόφαση του 2024, οκτώ χρόνια μετά, καμία ποινική δίωξη δεν είχε ασκηθεί για τους 144 θανάτους.',
      en: 'Until the 2024 ruling, eight years on, no criminal prosecution had been brought for the 144 deaths.',
    },
    breach: {
      el: 'Οι πιο αδύναμοι ασθενείς — όσοι δεν μπορούν ούτε να διαμαρτυρηθούν — είναι το πραγματικό τεστ ενός συστήματος υγείας. Εδώ μετακινήθηκαν σαν φορτίο για να κλείσει ένας προϋπολογισμός, και κανείς δεν μετρούσε αν ζούσαν μέχρι να αρχίσουν να πεθαίνουν.',
      en: 'The weakest patients — those who cannot even protest — are the real test of a health system. Here they were moved like cargo to balance a budget, and no one counted whether they were alive until they began to die.',
    },
    patterns: ['cost-over-life'],
    safeguards: ['outcome', 'open-procurement'],
    counterfactual: {
      el: 'Η Παρακολούθηση Έκβασης θα είχε μετρήσει κάθε ασθενή μετά τη μεταφορά: βάρος, φάρμακα, νοσηλείες, θανάτους. Όταν η θνησιμότητα ξεπέρασε το αναμενόμενο, το σχέδιο θα πάγωνε αυτόματα και οι οικογένειες θα ενημερώνονταν — πολύ πριν οι νεκροί φτάσουν τους 144. Η Ανοιχτή Προμήθεια θα είχε δείξει ότι οι δομές που πήραν τους ασθενείς ήταν ακατάλληλες και χωρίς εμπειρία.',
      en: 'Outcome Watch would have measured every patient after the transfer: weight, medication, admissions, deaths. When mortality exceeded what was expected, the plan would have frozen automatically and families been told — long before the dead reached 144. Open Procurement would have shown that the homes receiving the patients were unsuitable and inexperienced.',
    },
    antilogos: {
      el: 'Η αποϊδρυματοποίηση — η μετακίνηση ανθρώπων από ιδρύματα σε κοινοτικές δομές — είναι σωστή πολιτική ψυχικής υγείας διεθνώς· ένα αυτόματο «πάγωμα» θα μπορούσε να σταματά κάθε μεταρρύθμιση με την πρώτη δυσκολία.',
      en: 'Deinstitutionalisation — moving people from institutions into community care — is sound mental-health policy worldwide; an automatic “freeze” could halt every reform at the first difficulty.',
    },
    reply: {
      el: 'Η αποϊδρυματοποίηση είναι σωστή όταν γίνεται για τον ασθενή· εδώ έγινε για τον προϋπολογισμό, σε δομές που δεν μπορούσαν να τον κρατήσουν ζωντανό. Η Παρακολούθηση δεν σταματά τη μεταρρύθμιση — σταματά τους θανάτους, και δείχνει ποια μεταρρύθμιση δουλεύει. Μια σωστή πολιτική δεν έχει τίποτα να φοβηθεί από τη μέτρηση.',
      en: 'Deinstitutionalisation is right when done for the patient; here it was done for the budget, into homes that could not keep patients alive. Outcome Watch does not stop reform — it stops the deaths, and shows which reform works. Sound policy has nothing to fear from measurement.',
    },
    lever: {
      el: 'Ζήτησε κάθε μαζική μεταφορά ή κλείσιμο δομής για ευάλωτους ασθενείς να συνοδεύεται από δημόσια παρακολούθηση της έκβασης ανά ασθενή και αυτόματη διακοπή όταν αυξάνονται οι θάνατοι.',
      en: 'Ask that every mass transfer or closure of a facility for vulnerable patients come with public, per-patient outcome tracking and an automatic halt when deaths rise.',
    },
    scores: { harm: 10, power: 7, recurrence: 6, remedy: 9 },
    status: {
      el: 'Η δικαστική έρευνα απέδωσε ευθύνες (Ιούλιος 2024)· η απόφαση για ποινική δίωξη εκκρεμεί. Τεκμήριο αθωότητας.',
      en: 'The inquest assigned responsibility (July 2024); the decision to prosecute is pending. Presumption of innocence applies.',
    },
    sources: [
      { title: 'IOL — Court finds former health MEC and mental-health head caused the deaths (Jul 2024)', url: 'https://iol.co.za/news/crime-and-courts/2024-07-10-life-esidimeni-former-health-mec-qedani-mahlangu-and-dr-makgabo-manamela-caused-the-deaths-of-mental-ill-patients-says-court/' },
      { title: 'The Conversation — Lessons from the Life Esidimeni inquest judgment (2024)', url: 'https://theconversation.com/144-south-africans-with-mental-disability-died-in-the-life-esidimeni-tragedy-lessons-from-the-inquest-judgment-234497' },
      { title: 'Daily Maverick — After an eight-year battle, justice hinges on the inquest (2024)', url: 'https://www.dailymaverick.co.za/article/2024-07-09-life-esidimeni-after-an-8-year-battle-justice-for-144-hinges-on-judgment/' },
      { title: 'IOL — NPA may charge officials depending on evidence (Jul 2024)', url: 'https://iol.co.za/news/crime-and-courts/2024-07-11-qedani-mahlangu-dr-makgabo-manamela-may-face-charges-in-life-esidimeni-case-depending-on-evidence-npa/' },
    ],
  },
  {
    id: 'wuhan-2020',
    when: '2019–2020',
    place: { el: 'Γουχάν, Κίνα', en: 'Wuhan, China' },
    title: {
      el: 'Ο γιατρός που προειδοποίησε για τον νέο ιό αναγκάστηκε να υπογράψει ότι διέδιδε αναλήθειες — και πέθανε από αυτόν',
      en: 'The doctor who warned of the new virus was made to sign that he spread falsehoods — and died of it',
    },
    harmed: { el: 'Ο Li Wenliang, 33 ετών — και όσοι αρρώστησαν όσο η προειδοποίηση έμενε φιμωμένη', en: 'Li Wenliang, 33 — and everyone who fell ill while the warning stayed silenced' },
    plain: {
      el: 'Ένας οφθαλμίατρος στη Γουχάν προειδοποίησε συναδέλφους για κρούσματα μιας νέας νόσου· η αστυνομία τον ανάγκασε να υπογράψει ότι δημοσίευε «αναληθείς δηλώσεις», και έναν μήνα μετά πέθανε από τον ίδιο ιό.',
      en: 'An ophthalmologist in Wuhan warned colleagues about cases of a new disease; police made him sign that he had published “untrue statements,” and a month later he died of the same virus.',
    },
    facts: [
      {
        el: 'Δεκέμβριος 2019: ο Li Wenliang, οφθαλμίατρος στο Κεντρικό Νοσοκομείο της Γουχάν, προειδοποιεί συναδέλφους σε ιδιωτική συνομιλία για επτά κρούσματα μιας νόσου που έμοιαζε με SARS.',
        en: 'December 2019: Li Wenliang, an ophthalmologist at Wuhan Central Hospital, warns colleagues in a private chat about seven cases of a SARS-like illness.',
      },
      {
        el: '3 Ιανουαρίου 2020: η αστυνομία της Γουχάν τον ανακρίνει και τον αναγκάζει να υπογράψει επιστολή επίπληξης για «δημοσίευση αναληθών δηλώσεων», δεσμευόμενος να μην το επαναλάβει.',
        en: '3 January 2020: Wuhan police question him and make him sign a letter of reprimand for “publishing untrue statements,” promising not to do it again.',
      },
      {
        el: '7 Φεβρουαρίου 2020: πεθαίνει από τη νόσο.',
        en: '7 February 2020: he dies of the disease.',
      },
      {
        el: '19 Μαρτίου 2020: έρευνα της κρατικής Εθνικής Εποπτικής Επιτροπής κρίνει την κλήση του από την αστυνομία «ακατάλληλη» και τη διαδικασία μη σύμφωνη με τους κανόνες· η αστυνομία ανακαλεί την επίπληξη και ζητά συγγνώμη από την οικογένειά του.',
        en: '19 March 2020: an inquiry by the state National Supervisory Commission finds the police summons “inappropriate” and the procedure irregular; police revoke the reprimand and apologise to his family.',
      },
    ],
    outcome: {
      el: 'Αποκατάσταση μετά θάνατον — αφού οι κρίσιμες πρώτες εβδομάδες μιας επιδημίας είχαν περάσει.',
      en: 'Rehabilitation after death — once the critical first weeks of an epidemic had passed.',
    },
    breach: {
      el: 'Η δημόσια υγεία ζει από τις προειδοποιήσεις: ο γιατρός που βλέπει κάτι παράξενο είναι το πρώτο σύστημα έγκαιρης ειδοποίησης κάθε χώρας. Όταν η εξουσία τιμωρεί τον γιατρό για να προστατέψει την εικόνα της, τυφλώνει τον εαυτό της — και τον άρρωστο που έρχεται μετά.',
      en: 'Public health lives on warnings: the doctor who sees something strange is every country’s first early-warning system. When power punishes the doctor to protect its image, it blinds itself — and the next patient too.',
    },
    patterns: ['silenced-warning'],
    safeguards: ['shield'],
    counterfactual: {
      el: 'Η Ασπίδα Μάρτυρα θα είχε σφραγίσει την προειδοποίησή του με ημερομηνία σε ανεξάρτητη αρχή δημόσιας υγείας την ίδια νύχτα — και κάθε κίνηση της αστυνομίας εναντίον του θα σημαινόταν αυτόματα. Η προειδοποίηση θα έφτανε στους επιδημιολόγους αντί να σβήσει σε ένα αστυνομικό τμήμα.',
      en: 'The Witness Shield would have sealed his warning with a date at an independent public-health authority that same night — and any police action against him would have been flagged automatically. The warning would have reached epidemiologists instead of dying in a police station.',
    },
    antilogos: {
      el: 'Κανένα εργαλείο δεν προστατεύει μάρτυρες σε ένα κράτος χωρίς ανεξάρτητες αρχές· η πρόταση προϋποθέτει ακριβώς τους θεσμούς που έλειπαν. Και στην αρχή μιας κρίσης κυκλοφορούν και λανθασμένες προειδοποιήσεις.',
      en: 'No tool protects witnesses in a state without independent authorities; the proposal presupposes exactly the institutions that were missing. And at the start of a crisis, false warnings circulate too.',
    },
    reply: {
      el: 'Σωστά — γι’ αυτό η υπόθεση είναι εδώ: για να θυμίζει τι προστατεύουμε όσο έχουμε ακόμη τους θεσμούς. Καμία δημοκρατία δεν είναι απρόσβλητη στον πειρασμό να «διαχειριστεί» μια κακή είδηση. Και η λανθασμένη προειδοποίηση απαντιέται με έλεγχο, όχι με επίπληξη.',
      en: 'True — which is why the case is here: to remind us what we protect while we still have the institutions. No democracy is immune to the temptation to “manage” bad news. And a false warning is answered by checking it, not by reprimand.',
    },
    lever: {
      el: 'Ζήτησε ανεξάρτητο, προστατευμένο κανάλι όπου κάθε γιατρός και νοσηλευτής καταχωρεί προειδοποιήσεις για κινδύνους δημόσιας υγείας, με εγγύηση κατά κάθε δυσμενούς μεταχείρισης.',
      en: 'Ask for an independent, protected channel where every doctor and nurse can log warnings of public-health risks, with a guarantee against any adverse treatment.',
    },
    scores: { harm: 10, power: 10, recurrence: 7, remedy: 4 },
    status: {
      el: 'Κλειστή· η επίπληξη ανακλήθηκε μετά θάνατον (Μάρτιος 2020).',
      en: 'Closed; the reprimand was revoked after his death (March 2020).',
    },
    sources: [
      { title: 'Wikipedia — Li Wenliang', url: 'https://en.wikipedia.org/wiki/Li_Wenliang' },
      { title: 'Hong Kong Free Press — Probe concludes police “inappropriately” punished Dr Li (2020)', url: 'https://hongkongfp.com/2020/03/19/coronavirus-wuhan-police-inappropriately-punished-whistleblower-doctor-li-wenliang-chinese-govt-probe-concludes/' },
      { title: 'Library of Congress — Spreading rumors and police reprimand under Chinese law (2020)', url: 'https://blogs.loc.gov/law/2020/03/falqs-spreading-rumors-and-police-reprimand-under-chinese-law/' },
    ],
  },
]
