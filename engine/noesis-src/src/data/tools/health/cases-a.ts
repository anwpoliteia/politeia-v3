// ΙΠΠΟΚΡΑΤΗΣ — cases 1–5. Every fact is sourced and was checked on 2026-09-29.
// Headlines name the office, not the officer; the harmed are always named.
// Open cases carry the presumption of innocence explicitly.

import type { ToolCase } from '../types'

export const CASES_A: readonly ToolCase[] = [
  {
    id: 'greece-fakelaki-2025',
    when: '2025–2026',
    place: { el: 'Αθήνα, Ελλάδα', en: 'Athens, Greece' },
    title: {
      el: 'Διευθυντής καρδιοχειρουργικής ζητούσε 3.000–5.000 ευρώ «για καλύτερη φροντίδα» — σε δημόσιο νοσοκομείο, όπου η φροντίδα είναι δικαίωμα',
      en: 'A cardiac-surgery director asked €3,000–5,000 “for better care” — in a public hospital, where care is a right',
    },
    harmed: { el: 'Οι ασθενείς του ΕΣΥ — ιδίως όσοι δεν μπορούν να πληρώσουν', en: 'Patients of the national health service — above all those who cannot pay' },
    plain: {
      el: 'Το φακελάκι δεν είναι φολκλόρ: τον Σεπτέμβριο 2025 συνελήφθη διευθυντής κλινικής σε δημόσιο νοσοκομείο της Αθήνας για χρήματα κάτω από το τραπέζι, και τον Μάιο 2026 ένα βίντεο έδειξε αναισθησιολόγο να ζητά χρήματα από καρκινοπαθή.',
      en: 'The envelope is not folklore: in September 2025 a clinic director at a public hospital in Athens was arrested over under-the-table money, and in May 2026 a video showed an anaesthetist asking a cancer patient for cash.',
    },
    facts: [
      {
        el: 'Σεπτέμβριος 2025: ο διευθυντής μιας καρδιοχειρουργικής κλινικής του Ιπποκρατείου, δημόσιου γενικού νοσοκομείου της Αθήνας, συλλαμβάνεται για δωροδοκία. Κατά την κατηγορία ζητούσε 3.000–5.000 ευρώ ώστε οι ασθενείς του να έχουν «περισσότερη φροντίδα» μετά το χειρουργείο.',
        en: 'September 2025: the director of a cardiac-surgery clinic at Ippokrateio, a public general hospital in Athens, is arrested for bribery. He is accused of asking €3,000–5,000 so his patients would get “more care” after surgery.',
      },
      {
        el: 'Τον κατήγγειλε ασθενής απευθείας στην αστυνομία — όχι στη διοίκηση του νοσοκομείου. Συνελήφθη από την υπηρεσία εσωτερικών υποθέσεων της ΕΛ.ΑΣ., κατά τα δημοσιεύματα με προσημειωμένα χαρτονομίσματα.',
        en: 'A patient reported him directly to the police — not to hospital management. He was arrested by the police internal-affairs unit, reportedly with pre-marked banknotes.',
      },
      {
        el: 'Μάιος 2026: βίντεο δείχνει αναισθησιολόγο στο αντικαρκινικό νοσοκομείο «Άγιοι Ανάργυροι» να ζητά από καρκινοπαθή περίπου 100 ευρώ πριν από επέμβαση. Ο υπουργός Υγείας διατάζει πειθαρχική και ποινική δίωξη και την απομάκρυνσή του από το ΕΣΥ, και ζητά δημόσια συγγνώμη από τον ασθενή.',
        en: 'May 2026: a video shows an anaesthetist at the “Agioi Anargyroi” cancer hospital asking a cancer patient for about €100 before a procedure. The health minister orders disciplinary and criminal action and his removal from the health service, and publicly apologises to the patient.',
      },
      {
        el: 'Ευρωβαρόμετρο 2024: το 98% των Ελλήνων θεωρεί τη διαφθορά διαδεδομένη· κατά τη National Herald, το 89% θεωρεί αναμενόμενο το φακελάκι για καλύτερη φροντίδα.',
        en: 'Eurobarometer 2024: 98% of Greeks see corruption as widespread; per The National Herald, 89% consider an envelope for better care to be expected.',
      },
    ],
    outcome: {
      el: 'Συλλήψεις και διώξεις — όταν ένας ασθενής τολμήσει να πάει στην αστυνομία ή όταν υπάρξει βίντεο. Όσοι πληρώνουν σιωπηλά δεν μετριούνται πουθενά.',
      en: 'Arrests and charges — when a patient dares go to the police, or when there is a video. Those who pay in silence are counted nowhere.',
    },
    breach: {
      el: 'Το ΕΣΥ υπάρχει για να μη ρωτά κανείς τον άρρωστο «πόσα έχεις». Το φακελάκι επαναφέρει το ερώτημα από την πίσω πόρτα — και το θέτει τη στιγμή που ο άνθρωπος είναι πιο αδύναμος, λίγο πριν από την αναισθησία. Δεν είναι φιλοδώρημα· είναι φόρος στον φόβο.',
      en: 'The health service exists so no one asks the sick “how much do you have.” The envelope brings the question back through the side door — and asks it when a person is weakest, just before anaesthesia. It is not a tip; it is a tax on fear.',
    },
    patterns: ['fakelaki', 'queue-jump'],
    safeguards: ['signal', 'queue', 'shield'],
    counterfactual: {
      el: 'Το Σήμα Φακελακιού θα είχε συγκεντρώσει τις ανώνυμες δηλώσεις των ασθενών της κλινικής μήνες πριν κάποιος τολμήσει να πάει στην αστυνομία — και θα είχε στείλει ελεγκτές εκεί όπου τα σήματα επαναλαμβάνονταν. Η Ορατή Σειρά θα έκανε αδύνατο να πουληθεί «περισσότερη φροντίδα»: κάθε ασθενής θα έβλεπε τι δικαιούται και πότε.',
      en: 'The Envelope Signal would have pooled patients’ anonymous reports about the clinic months before anyone dared go to the police — and sent inspectors where the signals repeated. The Visible Queue would have made “more care” impossible to sell: every patient would see what they are owed, and when.',
    },
    antilogos: {
      el: 'Το φακελάκι είναι σύμπτωμα ενός υποχρηματοδοτημένου συστήματος με χαμηλούς μισθούς γιατρών· η επιτήρηση θα διώξει κι άλλους γιατρούς από το ΕΣΥ, χωρίς να λύσει την αιτία.',
      en: 'The envelope is a symptom of an underfunded system with low doctors’ pay; surveillance will drive more doctors out of the service without fixing the cause.',
    },
    reply: {
      el: 'Οι χαμηλοί μισθοί εξηγούν γιατί ένας γιατρός φεύγει — όχι γιατί ζητά χρήματα από καρκινοπαθή. Και το Σήμα δεν επιτηρεί γιατρούς· προστατεύει τους πολλούς έντιμους από τη ρετσινιά των λίγων, γιατί μόνο τα επαναλαμβανόμενα σήματα φτάνουν σε έλεγχο. Η αιτία θέλει μισθούς· το φακελάκι θέλει φως. Χρειάζονται και τα δύο.',
      en: 'Low pay explains why a doctor leaves — not why they ask a cancer patient for cash. And the Signal does not watch doctors; it shields the honest many from the stigma of the few, because only repeated signals reach an inspector. The cause needs pay; the envelope needs light. Both are needed.',
    },
    lever: {
      el: 'Ζήτησε ανώνυμο ερώτημα «σου ζητήθηκε κάτι;» μετά από κάθε νοσηλεία στο MyHealth, με δημόσια στατιστικά ανά νοσοκομείο.',
      en: 'Ask for an anonymous “were you asked for anything?” in MyHealth after every hospital stay, with public statistics per hospital.',
    },
    scores: { harm: 7, power: 5, recurrence: 10, remedy: 9 },
    status: {
      el: 'Διώξεις σε εξέλιξη (2025, 2026). Οι κατηγορούμενοι τεκμαίρονται αθώοι.',
      en: 'Proceedings under way (2025, 2026). The accused are presumed innocent.',
    },
    sources: [
      { title: 'Keep Talking Greece — Surgery director at Athens public hospital arrested for bribery (Sep 2025)', url: 'https://www.keeptalkinggreece.com/2025/09/09/surgeon-arrest-public-hospital-bribery/' },
      { title: 'Greek City Times — Minister orders action after doctor asks cancer patient for “fakelaki” (May 2026)', url: 'https://greekcitytimes.com/2026/05/21/georgiadis-fakelaki-hospital-video/' },
      { title: 'Parapolitika — Disciplinary hearing set for anaesthetist who demanded a bribe (2026)', url: 'https://en.parapolitika.gr/greece/219529/general-cancer-hospital-agioi-anargyroi-disciplinary-hearing-set-for-corrupt-anesthesiologist-who-demanded-bribe/' },
      { title: 'The National Herald — Most Greeks believe doctors, officials want bribes', url: 'https://www.thenationalherald.com/most-greeks-believe-politicians-corrupt-doctors-officials-want-bribes/' },
    ],
  },
  {
    id: 'novartis-greece-2012',
    when: '2012–2025',
    place: { el: 'Ελλάδα', en: 'Greece' },
    title: {
      el: 'Η ελληνική θυγατρική της Novartis παραδέχτηκε δωροδοκίες σε γιατρούς δημόσιων νοσοκομείων — και η έρευνα έγινε πολιτικό πεδίο μάχης',
      en: 'Novartis’s Greek unit admitted bribing doctors at public hospitals — and the investigation became a political battlefield',
    },
    harmed: { el: 'Ασθενείς και ασφαλισμένοι του ΕΣΥ', en: 'Patients and the insured of the health service' },
    plain: {
      el: 'Η Novartis Hellas πλήρωσε 225 εκατ. δολάρια στις ΗΠΑ για δωροδοκίες σε γιατρούς δημόσιων νοσοκομείων· στην Ελλάδα, οι προστατευόμενοι μάρτυρες που κατηγόρησαν δέκα πολιτικούς καταδικάστηκαν για ψευδή καταμήνυση.',
      en: 'Novartis Hellas paid $225 million in the US over bribes to doctors at public hospitals; in Greece, the protected witnesses who accused ten politicians were convicted of false accusation.',
    },
    facts: [
      {
        el: '2012–2015: κατά την υπόθεση των ΗΠΑ, η Novartis Hellas συνωμότησε για να δωροδοκεί υπαλλήλους δημόσιων νοσοκομείων και κλινικών στην Ελλάδα ώστε να αγοράζουν περισσότερα φάρμακά της.',
        en: '2012–2015: according to the US case, Novartis Hellas conspired to bribe employees of state hospitals and clinics in Greece to buy more of its drugs.',
      },
      {
        el: 'Πλήρωνε σε οφθαλμιάτρους συμμετοχές σε διεθνή συνέδρια — αεροπορικά, ξενοδοχεία — και κρατούσε εσωτερικούς καταλόγους με τους γιατρούς που είχαν τη μεγαλύτερη «ροπή συνταγογράφησης», για να επιλέγει ποιους θα χορηγήσει.',
        en: 'It paid ophthalmologists’ way to international congresses — flights, hotels — and kept internal lists of the doctors with the highest “propensity to prescribe,” to choose whom to sponsor.',
      },
      {
        el: 'Ιούνιος 2020: η Novartis Hellas υπογράφει συμφωνία αναστολής δίωξης με το αμερικανικό υπουργείο Δικαιοσύνης και πληρώνει ποινή 225 εκατ. δολαρίων.',
        en: 'June 2020: Novartis Hellas signs a deferred prosecution agreement with the US Department of Justice and pays a $225 million penalty.',
      },
      {
        el: 'Στην Ελλάδα, δύο προστατευόμενοι μάρτυρες είχαν κατηγορήσει δέκα πολιτικούς, ανάμεσά τους δύο πρώην πρωθυπουργούς· οι κατηγορίες τους δεν οδήγησαν σε καταδίκη πολιτικού. Τον Οκτώβριο 2024 άρθηκε η προστασία των μαρτύρων.',
        en: 'In Greece, two protected witnesses had accused ten politicians, two former prime ministers among them; their accusations led to no politician’s conviction. In October 2024 their protected status was lifted.',
      },
      {
        el: 'Σεπτέμβριος 2025: ελληνικό δικαστήριο καταδικάζει τους δύο πρώην προστατευόμενους μάρτυρες για ψευδή καταμήνυση και ψευδή κατάθεση, σε ποινές φυλάκισης με αναστολή.',
        en: 'September 2025: a Greek court convicts the two former protected witnesses of false accusation and false testimony, with suspended prison sentences.',
      },
    ],
    outcome: {
      el: 'Η εταιρεία πλήρωσε στις ΗΠΑ. Στην Ελλάδα η συζήτηση αναλώθηκε στο ποιος πολιτικός κατηγορήθηκε άδικα, και η δωροδοκία γιατρών που παραδέχτηκε η ίδια η εταιρεία έμεινε στο περιθώριο.',
      en: 'The company paid in the US. In Greece the debate was consumed by which politicians were falsely accused, and the bribery of doctors the company itself admitted stayed on the margins.',
    },
    breach: {
      el: 'Ο γιατρός που γράφει ένα φάρμακο αποφασίζει με τα χρήματα του ασφαλισμένου και με την υγεία του ασθενούς. Όταν η επιλογή του γίνεται εμπόρευμα, ο ασθενής δεν ξέρει πια αν παίρνει το καλύτερο φάρμακο ή το καλύτερα χορηγούμενο. Και όταν μια έρευνα για διαφθορά γίνεται όπλο στον πολιτικό αγώνα, προδίδει διπλά: τους αθώους που κατηγορούνται και τους ασθενείς που ξεχνιούνται.',
      en: 'The doctor who writes a prescription decides with the insured’s money and the patient’s health. When that choice becomes a commodity, the patient no longer knows whether they get the best drug or the best-sponsored one. And when a corruption inquiry becomes a weapon in political combat, it betrays twice: the innocent who are accused and the patients who are forgotten.',
    },
    patterns: ['bought-prescriber'],
    safeguards: ['sunshine', 'anomaly'],
    counterfactual: {
      el: 'Το Μητρώο Ηλίου θα είχε δημοσιεύσει κάθε χορηγία συνεδρίου με όνομα — και θα την είχε διασταυρώσει με τη συνταγογράφηση του ίδιου γιατρού. Ό,τι η εταιρεία κρατούσε σε εσωτερικούς καταλόγους θα ήταν δημόσιος πίνακας. Και επειδή τα στοιχεία θα ήταν ανοιχτά και αριθμητικά, κανείς δεν θα χρειαζόταν να βασιστεί σε ανώνυμους μάρτυρες.',
      en: 'The Sunshine Register would have published every congress sponsorship by name — and matched it with that same doctor’s prescribing. What the company kept on internal lists would be a public table. And because the evidence would be open and numerical, no one would need to rely on anonymous witnesses.',
    },
    antilogos: {
      el: 'Τα διεθνή συνέδρια είναι βασικό μέρος της συνεχιζόμενης εκπαίδευσης των γιατρών, και το κράτος δεν τα χρηματοδοτεί· χωρίς χορηγίες, οι Έλληνες γιατροί θα έμεναν πίσω.',
      en: 'International congresses are a core part of doctors’ continuing education, and the state does not fund them; without sponsorship, Greek doctors would fall behind.',
    },
    reply: {
      el: 'Κανείς δεν ζητά να κοπούν τα συνέδρια· ζητάμε να φαίνονται. Αυτό που παραδέχτηκε η εταιρεία δεν ήταν η εκπαίδευση — ήταν ότι διάλεγε ποιους θα εκπαιδεύσει με βάση το πόσα γράφουν. Αυτό το δείχνει μόνο η διασταύρωση, και η διασταύρωση χρειάζεται φως.',
      en: 'No one asks to cancel congresses; we ask that they be visible. What the company admitted was not education — it was choosing whom to educate by how much they prescribed. Only the cross-check reveals that, and the cross-check needs light.',
    },
    lever: {
      el: 'Ζήτησε δημόσιο μητρώο με όνομα για κάθε παροχή φαρμακευτικής εταιρείας σε γιατρό ή νοσοκομείο, διασταυρωμένο με τη συνταγογράφηση.',
      en: 'Ask for a public, named register of every benefit from drug companies to doctors or hospitals, matched against prescribing.',
    },
    scores: { harm: 7, power: 7, recurrence: 8, remedy: 8 },
    status: {
      el: 'Κλειστή στις ΗΠΑ (συμφωνία 2020). Στην Ελλάδα, καταδίκη των πρώην προστατευόμενων μαρτύρων (2025).',
      en: 'Closed in the US (2020 agreement). In Greece, the former protected witnesses convicted (2025).',
    },
    sources: [
      { title: 'Novartis — Novartis resolves legacy FCPA investigations (Jun 2020)', url: 'https://www.novartis.com/news/media-releases/novartis-resolves-legacy-fcpa-investigations' },
      { title: 'Keep Talking Greece — Novartis Hellas to pay $225 million (2020)', url: 'https://www.keeptalkinggreece.com/2020/06/25/novartis-hellas-us-justice-agreement-bribes/' },
      { title: 'Balkan Insight — Greek court convicts former Novartis “whistleblowers” (Sep 2025)', url: 'https://balkaninsight.com/2025/09/15/greek-court-convicts-former-novartis-whistleblowers/' },
      { title: 'Greek City Times — Financial prosecutor lifts witness protection (Oct 2024)', url: 'https://greekcitytimes.com/2024/10/25/novartis/' },
    ],
  },
  {
    id: 'eopyy-2024',
    when: '2020–2026',
    place: { el: 'Ελλάδα', en: 'Greece' },
    title: {
      el: 'Γιατροί και φαρμακεία έγραφαν και εκτελούσαν ψεύτικες συνταγές στα ΑΜΚΑ χιλιάδων ανθρώπων — ο ΕΟΠΥΥ πλήρωνε εκατομμύρια',
      en: 'Doctors and pharmacies wrote and filled fake prescriptions on thousands of people’s social-security numbers — the national insurer paid millions',
    },
    harmed: { el: 'Οι ασφαλισμένοι που πληρώνουν τις εισφορές — και όσοι βρίσκουν τα φάρμακά τους σε έλλειψη', en: 'The insured who pay contributions — and those who find their medicines in shortage' },
    plain: {
      el: 'Κύκλωμα μετά από κύκλωμα, γιατροί και φαρμακοποιοί χρέωναν στον ΕΟΠΥΥ φάρμακα για ασθενείς που δεν τα ζήτησαν ποτέ — ανάμεσά τους ναρκωτικά και φάρμακα σε έλλειψη — χωρίς οι κάτοχοι των ΑΜΚΑ να το μάθουν.',
      en: 'Ring after ring, doctors and pharmacists billed the national insurer for drugs patients never asked for — narcotics and drugs in shortage among them — without the owners of those social-security numbers ever knowing.',
    },
    facts: [
      {
        el: 'Σεπτέμβριος 2024: συλλαμβάνονται 17 άτομα — τέσσερις γιατροί δημόσιων δομών, ιδιοκτήτες και υπάλληλοι οκτώ φαρμακείων, ένας ιατρικός επισκέπτης. Από το 2020 είχαν εκδώσει 90.186 ψεύτικες συνταγές σε 3.516 ΑΜΚΑ, με ζημιά 3,5 εκατ. ευρώ.',
        en: 'September 2024: 17 people are arrested — four doctors at public facilities, owners and staff of eight pharmacies, a medical rep. Since 2020 they had issued 90,186 fake prescriptions on 3,516 social-security numbers, with €3.5 million in damage.',
      },
      {
        el: 'Κατάσχονται πάνω από 9.000 συσκευασίες φαρμάκων, 451.140 ευρώ σε μετρητά και ένα κιλό ράβδοι χρυσού· ανάμεσα στα φάρμακα, ναρκωτικά και ψυχοτρόπα σε έλλειψη στην Ελλάδα και διεθνώς.',
        en: 'Over 9,000 drug packages, €451,140 in cash and a kilo of gold bars are seized; among the drugs, narcotics and psychotropics in shortage in Greece and abroad.',
      },
      {
        el: 'Οκτώβριος 2024: ο ΕΟΠΥΥ ανακοινώνει έλεγχο της συνταγογράφησης προς τα πίσω ως το 2014. Μάιος 2025: κύκλωμα με επικεφαλής δύο φαρμακοποιούς εκδίδει 33.962 ψεύτικες συνταγές, με ζημιά άνω του 1,2 εκατ. ευρώ.',
        en: 'October 2024: the insurer announces a review of prescribing back to 2014. May 2025: a ring led by two pharmacists issues 33,962 fake prescriptions, with over €1.2 million in damage.',
      },
      {
        el: 'Νοέμβριος 2025: έλεγχοι του ΕΟΠΥΥ εντοπίζουν 32 γιατρούς και 62 φαρμακεία με εκτιμώμενη ζημιά περίπου 12 εκατ. ευρώ· τα πρόστιμα που επιβάλλονται φτάνουν τα 98.500 ευρώ.',
        en: 'November 2025: insurer audits identify 32 doctors and 62 pharmacies with an estimated €12 million in damage; the fines imposed total €98,500.',
      },
      {
        el: 'Ιούλιος 2026: αποκαλύπτεται κύκλωμα — ψυχίατρος, οικογενειακός γιατρός δημόσιου νοσοκομείου και φαρμακοποιοί — που λειτουργούσε ανενόχλητο τουλάχιστον έξι χρόνια, με 5.429 ψεύτικες συνταγές.',
        en: 'July 2026: a ring — a psychiatrist, a family doctor at a public hospital and pharmacists — is uncovered after operating undisturbed for at least six years, with 5,429 fake prescriptions.',
      },
    ],
    outcome: {
      el: 'Συλλήψεις, πρόστιμα, αφαιρέσεις δικαιώματος συνταγογράφησης — αφού χάθηκαν εκατομμύρια και κάποια κυκλώματα λειτούργησαν για χρόνια. Τα πρόστιμα του Νοεμβρίου 2025 ήταν 98.500 ευρώ απέναντι σε ζημιά 12 εκατ.',
      en: 'Arrests, fines, loss of prescribing rights — after millions were lost and some rings ran for years. The November 2025 fines were €98,500 against €12 million in damage.',
    },
    breach: {
      el: 'Η συνταγή είναι μια υπογραφή εμπιστοσύνης: ο γιατρός βεβαιώνει ότι ένας άνθρωπος χρειάζεται ένα φάρμακο, και όλοι οι ασφαλισμένοι το πληρώνουν. Όταν η υπογραφή πουλιέται, κλέβεται το κοινό ταμείο — και όταν τα φάρμακα είναι σε έλλειψη, κλέβεται και ο άρρωστος που δεν τα βρίσκει.',
      en: 'A prescription is a signature of trust: the doctor attests that a person needs a medicine, and every insured person pays for it. When the signature is sold, the common fund is robbed — and when the drugs are in shortage, so is the patient who cannot find them.',
    },
    patterns: ['phantom-billing'],
    safeguards: ['my-file', 'anomaly'],
    counterfactual: {
      el: 'Με τον Φάκελό μου, καθένας από τους 3.516 ανθρώπους θα έβλεπε την ίδια μέρα ότι στο ΑΜΚΑ του εκτελέστηκε συνταγή που δεν ζήτησε ποτέ — και με ένα άγγιγμα θα άνοιγε έλεγχο. Ο Ανιχνευτής Αποκλίσεων θα είχε δει τον γιατρό με τις ασυνήθιστες ποσότητες ψυχοτρόπων τον πρώτο μήνα, όχι στον έκτο χρόνο.',
      en: 'With My Record, each of the 3,516 people would have seen the same day that a prescription they never asked for was filled on their number — and opened an audit with one tap. The Anomaly Watch would have seen the doctor with unusual volumes of psychotropics in the first month, not the sixth year.',
    },
    antilogos: {
      el: 'Τα κυκλώματα εντοπίστηκαν από ελέγχους του ΕΟΠΥΥ και της αστυνομίας· το σύστημα λειτουργεί. Και η παρακολούθηση της συνταγογράφησης μπορεί να κάνει τους γιατρούς να διστάζουν να γράψουν ό,τι χρειάζεται ένας βαριά άρρωστος.',
      en: 'The rings were found by insurer audits and the police; the system works. And monitoring prescribing could make doctors hesitate to write what a seriously ill patient needs.',
    },
    reply: {
      el: 'Λειτουργεί — με καθυστέρηση ετών και με πρόστιμα κάτω από το ένα τοις εκατό της ζημιάς. Ο Ανιχνευτής δεν τιμωρεί τη συνταγή· συγκρίνει τον γιατρό με συναδέλφους που έχουν τους ίδιους ασθενείς, και ένας ελεγκτής κρίνει. Ο γιατρός του βαριά άρρωστου εξηγεί με έναν φάκελο· το κύκλωμα δεν έχει φάκελο να δείξει.',
      en: 'It works — years late, and with fines below one percent of the damage. The Watch does not punish a prescription; it compares a doctor with peers who have the same patients, and an inspector judges. The doctor of a seriously ill patient explains with a file; a ring has no file to show.',
    },
    lever: {
      el: 'Ζήτησε ειδοποίηση στο MyHealth για κάθε συνταγή που εκτελείται στο όνομά σου — και ένα κουμπί «δεν τη ζήτησα».',
      en: 'Ask for a MyHealth alert for every prescription filled in your name — and a “I never asked for this” button.',
    },
    scores: { harm: 6, power: 4, recurrence: 9, remedy: 10 },
    status: {
      el: 'Πολλαπλές υποθέσεις σε εξέλιξη. Όλοι οι κατηγορούμενοι τεκμαίρονται αθώοι.',
      en: 'Several cases ongoing. All accused are presumed innocent.',
    },
    sources: [
      { title: 'ProtoThema — Doctors and pharmacists arrested, €3.5m in damages (Sep 2024)', url: 'https://en.protothema.gr/2024/09/16/arrests-for-fraudulent-prescriptions-at-the-expense-of-eopyy-doctors-pharmacists-arrested-e3-5-million-in-damages/' },
      { title: 'Greek City Times — EOPYY to review prescribing back to 2014 (Oct 2024)', url: 'https://greekcitytimes.com/2024/10/21/eopyy-prescription/' },
      { title: 'Athens Times — Prescription ring costs EOPYY €1.2m (2025)', url: 'https://athens-times.com/illegal-prescription-ring-uncovered-over-e1-2-million-loss-to-eopyy/' },
      { title: 'Greek City Times — Doctors fined in €12 million prescription fraud scheme (Nov 2025)', url: 'https://greekcitytimes.com/2025/11/19/doctors-fined-in-e12-million-prescription-fraud-scheme/' },
      { title: 'ProtoThema — Doctors and pharmacists ran fake prescription racket (Jul 2026)', url: 'https://en.protothema.gr/2026/07/03/doctors-and-pharmacists-ran-fake-prescription-racket-with-damages-above-e400000/' },
    ],
  },
  {
    id: 'malta-2015',
    when: '2015–2026',
    place: { el: 'Μάλτα', en: 'Malta' },
    title: {
      el: 'Τρία δημόσια νοσοκομεία παραχωρήθηκαν με μια συμφωνία που δικαστήριο έκρινε προϊόν απάτης — και ένας πρώην πρωθυπουργός δικάζεται',
      en: 'Three public hospitals were handed over in a deal a court found tainted by fraud — and a former prime minister faces trial',
    },
    harmed: { el: 'Οι ασθενείς και οι φορολογούμενοι της Μάλτας', en: 'Malta’s patients and taxpayers' },
    plain: {
      el: 'Η Μάλτα παραχώρησε για 30 χρόνια τρία δημόσια νοσοκομεία σε μια εταιρεία που δεν εκπλήρωσε τις υποσχέσεις της· δικαστήριο ακύρωσε τη συμφωνία για απάτη, και ο πρώην πρωθυπουργός, ο επικεφαλής του γραφείου του και ο υπουργός Υγείας κατηγορούνται για δωροδοκία και ξέπλυμα.',
      en: 'Malta handed three public hospitals for 30 years to a company that did not keep its promises; a court annulled the deal for fraud, and the former prime minister, his chief of staff and his health minister are charged with bribery and money laundering.',
    },
    facts: [
      {
        el: 'Νοέμβριος 2015: η Vitals Global Healthcare παίρνει παραχώρηση 30 ετών για τρία δημόσια νοσοκομεία — St Luke’s, Karin Grech και το Γενικό Νοσοκομείο του Γκόζο. Τη συμφωνία διαπραγματεύτηκε ο τότε υπουργός Υγείας.',
        en: 'November 2015: Vitals Global Healthcare receives a 30-year concession for three public hospitals — St Luke’s, Karin Grech and Gozo General. The deal was negotiated by the then health minister.',
      },
      {
        el: 'Η δημοσιογράφος Daphne Caruana Galizia είναι η πρώτη που γράφει για πιθανή διαφθορά στη συμφωνία, το 2015. Δολοφονείται το 2017.',
        en: 'Journalist Daphne Caruana Galizia is the first to report possible corruption in the deal, in 2015. She is murdered in 2017.',
      },
      {
        el: 'Ως το τέλος του 2017 η εταιρεία δεν είχε πιάσει τους στόχους της, αν και είχε ήδη πληρωθεί 52,7 εκατ. ευρώ· το 2018 η παραχώρηση περνά στη Steward Health Care.',
        en: 'By the end of 2017 the company had missed its milestones despite being paid €52.7 million; in 2018 the concession passes to Steward Health Care.',
      },
      {
        el: '24 Φεβρουαρίου 2023: μετά από προσφυγή του τότε αρχηγού της αντιπολίτευσης, το δικαστήριο ακυρώνει όλες τις συμβάσεις και επιστρέφει τα νοσοκομεία στο κράτος. Ο δικαστής γράφει ότι «η απάτη διαφθείρει ό,τι αγγίζει».',
        en: '24 February 2023: on a case brought by the then opposition leader, the court annuls every contract and returns the hospitals to the state. The judge writes that “fraud corrupts everything it touches.”',
      },
      {
        el: 'Μάιος 2024: μετά από δικαστική έρευνα, ο πρώην πρωθυπουργός Joseph Muscat, ο πρώην επικεφαλής του γραφείου του και ο πρώην υπουργός Υγείας κατηγορούνται — μαζί με άλλα πρόσωπα και εταιρείες — για δωροδοκία, ξέπλυμα και διαφθορά. Αρνούνται τις κατηγορίες· το δικαστήριο έκρινε ότι υπάρχουν στοιχεία για να δικαστούν.',
        en: 'May 2024: after a magisterial inquiry, former prime minister Joseph Muscat, his former chief of staff and the former health minister are charged — with other people and companies — with bribery, money laundering and corruption. They deny the charges; the court found enough evidence for them to stand trial.',
      },
    ],
    outcome: {
      el: 'Τα νοσοκομεία επέστρεψαν στο κράτος· η ποινική διαδικασία εκκρεμεί.',
      en: 'The hospitals returned to the state; the criminal proceedings are pending.',
    },
    breach: {
      el: 'Ένα δημόσιο νοσοκομείο είναι η πιο συγκεκριμένη υπόσχεση ενός κράτους στον πολίτη: αν αρρωστήσεις, υπάρχει κρεβάτι. Όταν αυτή η υπόσχεση παραχωρείται για τριάντα χρόνια μέσα από μια συμφωνία που δικαστήριο έκρινε προϊόν απάτης, δεν πουλιέται ένα ακίνητο· πουλιέται η ασφάλεια ενός ολόκληρου νησιού.',
      en: 'A public hospital is a state’s most concrete promise to its citizens: if you fall ill, there is a bed. When that promise is handed over for thirty years through a deal a court found tainted by fraud, it is not a building that is sold; it is a whole island’s security.',
    },
    patterns: ['crony-contract'],
    safeguards: ['open-procurement', 'shield'],
    counterfactual: {
      el: 'Η Ανοιχτή Προμήθεια θα είχε δημοσιεύσει πριν από την υπογραφή τον πραγματικό ιδιοκτήτη της εταιρείας, το ιστορικό της και κάθε πληρωμή — ώστε αυτό που έγραφε μόνη της μια δημοσιογράφος να το βλέπει κάθε πολίτης. Όταν η πληροφορία ανήκει σε όλους, δεν κρέμεται από το θάρρος ενός ανθρώπου.',
      en: 'Open Procurement would have published, before signing, the company’s beneficial owner, its track record and every payment — so what one journalist wrote alone every citizen could see. When information belongs to everyone, it does not hang on one person’s courage.',
    },
    antilogos: {
      el: 'Οι συμπράξεις με ιδιώτες φέρνουν κεφάλαια και τεχνογνωσία που το κράτος δεν έχει· αν κάθε παραχώρηση δημοσιοποιείται πλήρως, οι σοβαροί επενδυτές θα φύγουν και θα μείνουν μόνο οι τυχοδιώκτες.',
      en: 'Public–private partnerships bring capital and know-how the state lacks; if every concession is fully disclosed, serious investors will leave and only adventurers will remain.',
    },
    reply: {
      el: 'Ο σοβαρός επενδυτής δεν φοβάται να δείξει ποιος είναι· αυτός που φοβάται είναι ακριβώς εκείνος που δεν πρέπει να πάρει τα νοσοκομεία. Εδώ η μυστικότητα δεν προσέλκυσε τους καλύτερους — προσέλκυσε μια συμφωνία που δικαστήριο έκρινε απάτη.',
      en: 'A serious investor is not afraid to show who they are; the one who is afraid is exactly the one who should not get the hospitals. Here secrecy did not attract the best — it attracted a deal a court judged a fraud.',
    },
    lever: {
      el: 'Ζήτησε κάθε παραχώρηση δημόσιου νοσοκομείου ή υπηρεσίας υγείας να δημοσιεύεται πριν από την υπογραφή, με πραγματικό ιδιοκτήτη, ιστορικό και πλήρεις όρους.',
      en: 'Ask that every concession of a public hospital or health service be published before signing, with beneficial owner, track record and full terms.',
    },
    scores: { harm: 7, power: 10, recurrence: 6, remedy: 7 },
    status: {
      el: 'Η συμφωνία ακυρώθηκε (2023). Ποινική δίκη πρώην πρωθυπουργού και άλλων σε εξέλιξη. Όλοι τεκμαίρονται αθώοι.',
      en: 'The deal was annulled (2023). Criminal trial of the former prime minister and others ongoing. All presumed innocent.',
    },
    sources: [
      { title: 'MaltaToday — Judge annuls hospitals deal in damning ruling (Feb 2023)', url: 'https://www.maltatoday.com.mt/news/national/121470/countdown_for_vitals_deal_starts_now_court_to_decide_on_fate_of_three_hospitals1' },
      { title: 'OCCRP — Malta charges ex-PM and his top officials with corruption (2024)', url: 'https://www.occrp.org/en/news/malta-charges-ex-pm-and-his-top-officials-with-corruption' },
      { title: 'VOA — Former Malta prime minister pleads not guilty (2024)', url: 'https://www.voanews.com/a/former-malta-prime-minister-pleads-not-guilty-in-corruption-case/7633004.html' },
      { title: 'Wikipedia — Vitals Global Healthcare', url: 'https://en.wikipedia.org/wiki/Vitals_Global_Healthcare' },
    ],
  },
  {
    id: 'uk-ppe-2020',
    when: '2020–2025',
    place: { el: 'Ηνωμένο Βασίλειο', en: 'United Kingdom' },
    title: {
      el: 'Μια «VIP λωρίδα» για εταιρείες που σύστηναν πολιτικοί — και 25 εκατομμύρια χειρουργικές ποδιές που δεν μπορούσαν να χρησιμοποιηθούν',
      en: 'A “VIP lane” for companies referred by politicians — and 25 million surgical gowns that could not be used',
    },
    harmed: { el: 'Οι φορολογούμενοι και το προσωπικό του NHS', en: 'Taxpayers and NHS staff' },
    plain: {
      el: 'Στην πανδημία η βρετανική κυβέρνηση έδινε προτεραιότητα σε προμηθευτές που σύστηναν υπουργοί και βουλευτές· δικαστήριο το έκρινε παράνομο, και άλλο διέταξε εταιρεία που σύστησε μέλος της Βουλής των Λόρδων να επιστρέψει 122 εκατ. λίρες για ποδιές που δεν ήταν αποστειρωμένες.',
      en: 'In the pandemic the UK government prioritised suppliers referred by ministers and MPs; a court ruled it unlawful, and another ordered a company referred by a member of the House of Lords to repay £122 million for gowns that were not sterile.',
    },
    facts: [
      {
        el: '2020: για τα μέσα ατομικής προστασίας, η κυβέρνηση λειτουργεί «λωρίδα υψηλής προτεραιότητας» για προμηθευτές που σύστηναν υπουργοί, βουλευτές και ανώτεροι αξιωματούχοι.',
        en: '2020: for personal protective equipment, the government runs a “high priority lane” for suppliers referred by ministers, MPs and senior officials.',
      },
      {
        el: '12 Ιανουαρίου 2022: το Ανώτατο Δικαστήριο κρίνει ότι η ευνοϊκή μεταχείριση μέσω της «VIP λωρίδας» ήταν παράνομη, γιατί παραβίαζε την υποχρέωση ίσης μεταχείρισης — αν και δεν ακύρωσε τις συγκεκριμένες συμβάσεις.',
        en: '12 January 2022: the High Court rules the favourable treatment through the “VIP lane” unlawful, as a breach of the duty of equal treatment — though it did not void the contracts at issue.',
      },
      {
        el: 'Η PPE Medpro, κοινοπραξία με επικεφαλής τον σύζυγο της βαρόνης Michelle Mone, πήρε συμβάσεις αφού εκείνη τη σύστησε σε υπουργούς· πληρώθηκε 121.999.219 λίρες για 25 εκατομμύρια χειρουργικές ποδιές.',
        en: 'PPE Medpro, a consortium led by the husband of Baroness Michelle Mone, won contracts after she referred it to ministers; it was paid £121,999,219 for 25 million surgical gowns.',
      },
      {
        el: 'Οι ποδιές απορρίφθηκαν ως μη αποστειρωμένες τον Δεκέμβριο 2020 και έμειναν σε αποθήκες. 1 Οκτωβρίου 2025: το δικαστήριο διατάζει την εταιρεία να επιστρέψει σχεδόν 122 εκατ. λίρες· η προθεσμία της 15ης Οκτωβρίου πέρασε χωρίς πληρωμή.',
        en: 'The gowns were rejected as unsterile in December 2020 and sat in storage. 1 October 2025: the court orders the company to repay almost £122 million; the 15 October deadline passed without payment.',
      },
    ],
    outcome: {
      el: 'Δικαστική δικαίωση του Δημοσίου πέντε χρόνια μετά — και χρήματα που δεν έχουν επιστραφεί.',
      en: 'The state vindicated in court five years later — and money not yet repaid.',
    },
    breach: {
      el: 'Η έκτακτη ανάγκη δικαιολογεί ταχύτητα· δεν δικαιολογεί προνόμιο. Όταν σε μια πανδημία η πρόσβαση στο δημόσιο χρήμα εξαρτάται από το ποιος γνωρίζει έναν υπουργό, το προσωπικό που περιμένει προστασία παίρνει τον προμηθευτή με τις καλύτερες γνωριμίες — όχι τον καλύτερο.',
      en: 'An emergency justifies speed; it does not justify privilege. When access to public money in a pandemic depends on who knows a minister, the staff waiting for protection get the best-connected supplier — not the best.',
    },
    patterns: ['crony-contract'],
    safeguards: ['open-procurement', 'lot-test'],
    counterfactual: {
      el: 'Η Ανοιχτή Προμήθεια θα είχε δημοσιεύσει μέσα σε 48 ώρες ποιος σύστησε κάθε προμηθευτή — και η «VIP λωρίδα» θα ήταν ορατή από την πρώτη εβδομάδα, όχι από μια δικαστική απόφαση δύο χρόνια μετά. Ο Κλήρος στο Εργαστήριο θα είχε ελέγξει δείγμα από τις πρώτες παρτίδες πριν από την πλήρη πληρωμή.',
      en: 'Open Procurement would have published within 48 hours who referred each supplier — and the “VIP lane” would have been visible in the first week, not in a ruling two years later. Lot-Drawn Lab Testing would have tested samples from the first batches before full payment.',
    },
    antilogos: {
      el: 'Στην πανδημία το κράτος χρειαζόταν κάθε πιθανή πηγή, και οι βουλευτές απλώς μετέφεραν προτάσεις· το ίδιο το δικαστήριο έκρινε ότι οι συγκεκριμένες συμβάσεις πιθανότατα θα ανατίθεντο έτσι κι αλλιώς.',
      en: 'In the pandemic the state needed every possible source, and MPs simply passed on offers; the court itself found the contracts at issue would most likely have been awarded anyway.',
    },
    reply: {
      el: 'Αν θα ανατίθεντο έτσι κι αλλιώς, η δημοσιότητα της σύστασης δεν θα κόστιζε τίποτα. Η σύσταση δεν είναι το πρόβλημα· η σύσταση που γίνεται προνόμιο στο σκοτάδι είναι. Και ο έλεγχος ποιότητας δεν επιβραδύνει μια παράδοση — επιβραδύνει μόνο την πληρωμή για μια ελαττωματική.',
      en: 'If they would have been awarded anyway, publishing the referral would have cost nothing. The referral is not the problem; the referral that becomes a privilege in the dark is. And quality testing does not slow a delivery — it only slows payment for a defective one.',
    },
    lever: {
      el: 'Ζήτησε κάθε σύμβαση έκτακτης ανάγκης στην υγεία να δημοσιεύεται μέσα σε 48 ώρες, με τον πραγματικό δικαιούχο και το όνομα όποιου τη σύστησε.',
      en: 'Ask that every emergency health contract be published within 48 hours, with the beneficial owner and the name of whoever referred it.',
    },
    scores: { harm: 6, power: 8, recurrence: 8, remedy: 8 },
    status: {
      el: 'Αστική απόφαση υπέρ του κράτους (Οκτώβριος 2025)· η επιστροφή των χρημάτων εκκρεμεί.',
      en: 'Civil judgment for the state (October 2025); repayment outstanding.',
    },
    sources: [
      { title: 'ITV News — Firm linked to Michelle Mone must pay back £122m (Oct 2025)', url: 'https://www.itv.com/news/2025-10-01/firm-linked-to-tory-peer-michelle-mone-must-pay-back-122-million-for-faulty-ppe' },
      { title: 'ITV News — Government use of “VIP lane” unlawful, High Court rules (Jan 2022)', url: 'https://www.itv.com/news/2022-01-12/government-use-of-vip-lane-to-award-ppe-contracts-was-unlawful' },
      { title: 'Good Law Project — High Court finds PPE VIP lane unlawful (2022)', url: 'https://goodlawproject.org/update/high-court-vip-lane-ppe-unlawful/' },
      { title: 'Wikipedia — Michelle Mone', url: 'https://en.wikipedia.org/wiki/Michelle_Mone' },
    ],
  },
]
