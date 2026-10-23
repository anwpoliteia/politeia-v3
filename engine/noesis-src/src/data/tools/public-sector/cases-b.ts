// ΑΡΙΣΤΕΙΔΗΣ — cases 6–10. Same rules as cases-a.ts: sourced facts checked on
// 2026-09-30; convictions later annulled are described as annulled, acquittals
// as acquittals, and open cases with the presumption of innocence.

import type { ToolCase } from '../types'

export const CASES_B: readonly ToolCase[] = [
  {
    id: 'andalusia-ere-2019',
    when: '2000–2026',
    place: { el: 'Ανδαλουσία, Ισπανία', en: 'Andalusia, Spain' },
    title: {
      el: 'Ένα ταμείο διάσωσης θέσεων εργασίας χωρίς έλεγχο: η περιφερειακή κυβέρνηση της Ανδαλουσίας διοχέτευσε 680 εκατ. σε ενισχύσεις εκτός δημοσιονομικού ελέγχου',
      en: 'A jobs-rescue fund without controls: Andalusia’s regional government channelled €680 million in aid outside financial audit',
    },
    harmed: {
      el: 'Οι φορολογούμενοι της Ανδαλουσίας· οι απολυμένοι εργαζόμενοι και οι επιχειρήσεις σε δυσκολία για τους οποίους υπήρχε το ταμείο· οι τίμιοι ελεγκτές που παρακάμφθηκαν',
      en: 'Andalusian taxpayers; the laid-off workers and struggling firms the fund was meant for; the honest auditors who were bypassed',
    },
    plain: {
      el: 'Για εννέα χρόνια, ένα ταμείο για απολυμένους και επιχειρήσεις σε κρίση λειτουργούσε με μια διαδικασία που παρέκαμπτε τον δημοσιονομικό έλεγχο. Πρόωρες συντάξεις πήγαν σε ανθρώπους που δεν δούλευαν στις εταιρείες, ενισχύσεις σε ανύπαρκτες επιχειρήσεις, προμήθειες σε μεσάζοντες. Δύο πρώην πρόεδροι καταδικάστηκαν — και οι καταδίκες τους ακυρώθηκαν σε μεγάλο βαθμό.',
      en: 'For nine years, a fund for laid-off workers and firms in crisis ran through a procedure that bypassed financial audit. Early retirements went to people who never worked at the firms, aid to non-existent companies, commissions to intermediaries. Two former regional presidents were convicted — and their convictions were largely annulled.',
    },
    facts: [
      {
        el: '19 Νοεμβρίου 2019: το δικαστήριο της Σεβίλλης καταδικάζει δύο πρώην προέδρους της περιφέρειας — τον έναν σε 6 χρόνια φυλάκιση και 15 χρόνια αποκλεισμού για υπεξαίρεση, τον άλλον σε 9 χρόνια αποκλεισμού για κατάχρηση εξουσίας — μαζί με άλλα ανώτατα στελέχη· κρίνει ότι οι κατηγορούμενοι ήταν «πλήρως ενήμεροι για την προφανή παρανομία».',
        en: '19 November 2019: the Seville court convicts two former regional presidents — one to 6 years in prison and 15 years’ disqualification for embezzlement, the other to 9 years’ disqualification for abuse of office — along with other senior officials; it finds the accused were “fully aware of the blatant illegality.”',
      },
      {
        el: 'Το συνολικό ποσό ήταν 680 εκατ. ευρώ, για «τη στήριξη ανέργων και επιχειρήσεων σε δυσκολία»· κατά την κατηγορία, χρήματα διοχετεύθηκαν σε πρόσωπα και επιχειρήσεις κοντά στο κυβερνών κόμμα.',
        en: 'The total was €680 million, meant for “helping unemployed people and struggling companies”; according to the charges, funds were diverted to people and businesses close to the governing party.',
      },
      {
        el: '26 Ιουλίου 2022: το Ανώτατο Δικαστήριο επικυρώνει τις ποινές. Ο μηχανισμός περιλάμβανε πρόωρες συντάξεις σε ανθρώπους που δεν ήταν εργαζόμενοι των εταιρειών, επιδοτήσεις σε ανύπαρκτες εταιρείες και προμήθειες σε μεσάζοντες.',
        en: '26 July 2022: the Supreme Court confirms the sentences. The mechanism included early retirements for people who were not employees of the firms, subsidies to non-existent companies and commissions to intermediaries.',
      },
      {
        el: '16 Ιουλίου 2024: το Συνταγματικό Δικαστήριο, με 7 ψήφους έναντι 4, ακυρώνει την καταδίκη για υπεξαίρεση του ενός πρώην προέδρου και το μεγαλύτερο μέρος της καταδίκης του άλλου, κρίνοντας ότι αξιωματούχοι που εφάρμοζαν νόμους προϋπολογισμού της περιφερειακής βουλής δεν ευθύνονται ποινικά γι’ αυτούς.',
        en: '16 July 2024: the Constitutional Court, 7 votes to 4, annuls one former president’s embezzlement conviction and most of the other’s conviction, holding that officials applying budget laws passed by the regional parliament cannot be criminally liable for them.',
      },
      {
        el: 'Ιούλιος 2025 – Απρίλιος 2026: το δικαστήριο της Σεβίλλης παραπέμπει το ζήτημα στο Δικαστήριο της ΕΕ, προειδοποιώντας για «συστημικό κίνδυνο μελλοντικής ατιμωρησίας»· η Κομισιόν απαντά ότι το Δικαστήριο της ΕΕ είναι «προδήλως αναρμόδιο», αφού δεν υπάρχουν ευρωπαϊκά κονδύλια.',
        en: 'July 2025 – April 2026: the Seville court refers the question to the EU Court of Justice, warning of “a systemic risk of future impunity”; the Commission replies that the EU Court is “manifestly incompetent,” since no EU funds are involved.',
      },
    ],
    outcome: {
      el: 'Καταδίκες το 2019–2022· ακυρώθηκαν σε μεγάλο βαθμό από το Συνταγματικό Δικαστήριο το 2024· η νέα κρίση εκκρεμεί.',
      en: 'Convictions in 2019–2022; largely annulled by the Constitutional Court in 2024; the new ruling is pending.',
    },
    breach: {
      el: 'Ο δημοσιονομικός έλεγχος υπάρχει για να ελέγχει κάθε ευρώ πριν φύγει — όχι αφού έχει φύγει. Όταν μια κυβέρνηση φτιάχνει μια διαδικασία που παρακάμπτει τον ελεγκτή, και το ταμείο για τους απολυμένους φτάνει σε ανθρώπους που δεν απολύθηκαν ποτέ, η διάσωση θέσεων εργασίας γίνεται διανομή χάρης.',
      en: 'Financial audit exists to check every euro before it leaves — not after. When a government builds a procedure that bypasses the auditor, and the fund for the laid-off reaches people who were never laid off, rescuing jobs becomes distributing favours.',
    },
    patterns: ['off-audit', 'impunity'],
    safeguards: ['fund-trace', 'no-oblivion'],
    counterfactual: {
      el: 'Το Ίχνος Κάθε Κονδυλίου θα είχε συνδέσει κάθε πρόωρη σύνταξη με το ιστορικό εργασίας του δικαιούχου — όποιος δεν είχε δουλέψει ποτέ στην εταιρεία θα φαινόταν αμέσως. Και καμία διαδικασία δεν θα μπορούσε να περάσει δημόσια χρήματα έξω από τον ελεγκτή για εννέα χρόνια χωρίς να το σημάνει.',
      en: 'Every Fund Traced would have linked each early retirement to the beneficiary’s work history — anyone who never worked at the firm would have shown at once. And no procedure could have moved public money outside the auditor for nine years without being flagged.',
    },
    antilogos: {
      el: 'Οι δύο πρώην πρόεδροι δεν καταδικάστηκαν ποτέ για προσωπικό πλουτισμό. Τα 680 εκατ. είναι το σύνολο που πέρασε από τη διαδικασία, όχι όσα κλάπηκαν — μεγάλο μέρος πλήρωσε πραγματικές συντάξεις σε πραγματικούς εργαζόμενους. Και το επιχείρημα του Συνταγματικού — ότι ένας νόμος προϋπολογισμού της βουλής δεν μπορεί να είναι έγκλημα — είναι σοβαρό.',
      en: 'The two former presidents were never convicted of personal enrichment. The €680 million is the total that passed through the procedure, not the amount stolen — much of it paid real retirements to real workers. And the Constitutional Court’s argument — that a budget law passed by parliament cannot be a crime — is serious.',
    },
    reply: {
      el: 'Ακριβώς: αν τα ανώτατα δικαστήρια της Ισπανίας διχάζονται για το αν η παράκαμψη του ελέγχου είναι έγκλημα, η λύση δεν μπορεί να είναι μόνο ποινική. Ένα σύστημα που ακολουθεί κάθε ευρώ ως τον δικαιούχο κάνει την ερώτηση αδιάφορη — γιατί η παράκαμψη δεν είναι πια δυνατή.',
      en: 'Exactly: if Spain’s top courts split on whether bypassing audit is a crime, the answer cannot be only criminal. A system that follows every euro to its recipient makes the question moot — because the bypass is no longer possible.',
    },
    lever: {
      el: 'Ζήτησε κάθε έκτακτη ενίσχυση ή πρόωρη σύνταξη που πληρώνεται από δημόσιο ταμείο να δημοσιεύεται ανώνυμα με το κριτήριο επιλεξιμότητας που πληρούσε.',
      en: 'Ask that every emergency aid payment or early retirement from a public fund be published anonymously with the eligibility criterion it met.',
    },
    scores: { harm: 7, power: 9, recurrence: 7, remedy: 8 },
    status: {
      el: 'Ανοιχτή — οι καταδίκες των δύο πρώην προέδρων ακυρώθηκαν ολικά ή μερικά (2024)· η υπόθεση εκκρεμεί στο Δικαστήριο της ΕΕ. Ισχύει το τεκμήριο αθωότητας.',
      en: 'Open — the two former presidents’ convictions were annulled in whole or in part (2024); the case is pending before the EU Court of Justice. The presumption of innocence applies.',
    },
    sources: [
      { title: 'La Marea — ERE verdict (2019)', url: 'https://lamarea.com/2019/11/19/sentencia-del-caso-ere-grinan-seis-anos-de-carcel-chaves-nueve-anos-de-inhabilitacion' },
      { title: 'OCCRP — Two Spanish politicians guilty in $752 million fraud (2019)', url: 'https://occrp.org/en/news/two-spanish-politicians-guilty-in-us752-million-fraud' },
      { title: 'El Salto — Supreme Court confirms ERE sentences (2022)', url: 'https://www.elsaltodiario.com/corrupcion/ts-confirma-sentencia-grinan-chaves-caso-ere' },
      { title: 'El Independiente — Constitutional Court overturns convictions (2024)', url: 'https://www.elindependiente.com/espana/tribunales/2024/07/16/el-constitucional-revoca-la-condena-de-chaves-y-se-dispone-a-rematar-la-exoneracion-de-los-ere/' },
      { title: 'Consejo General del Poder Judicial — Seville court refers ERE case to the CJEU (2025)', url: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunales-Superiores-de-Justicia/TSJ-Andalucia--Ceuta-y-Melilla/Oficina-de-Comunicacion/Archivo-de-notas-de-prensa/La-Audiencia-de-Sevilla-acuerda-plantear-una-cuestion-prejudicial-ante-el-TJUE-tras-las-sentencias-del-Tribunal-Constitucional-sobre-el-caso-ERE' },
    ],
  },
  {
    id: 'brazil-mensalao-2012',
    when: '2003–2016',
    place: { el: 'Βραζιλία', en: 'Brazil' },
    title: {
      el: 'Αγορά πλειοψηφίας: ο προϊστάμενος του γραφείου του Προέδρου και στελέχη του κυβερνώντος κόμματος καταδικάστηκαν επειδή πλήρωναν βουλευτές για ψήφους',
      en: 'Buying a majority: the President’s chief of staff and governing-party leaders convicted of paying deputies for votes',
    },
    harmed: {
      el: 'Οι Βραζιλιάνοι ψηφοφόροι, των οποίων οι εκπρόσωποι φέρονται να πούλησαν την ψήφο τους· οι φορολογούμενοι· οι τίμιοι βουλευτές',
      en: 'Brazilian voters, whose representatives allegedly sold their votes; taxpayers; honest legislators',
    },
    plain: {
      el: 'Στη Βραζιλία, στελέχη της κυβέρνησης και του κυβερνώντος κόμματος πλήρωναν βουλευτές για να ψηφίζουν όπως ήθελαν. Το Ανώτατο Δικαστήριο καταδίκασε 25 — για πρώτη φορά κορυφαίοι πολιτικοί καταδικάστηκαν σε φυλάκιση για διαφθορά. Τέσσερα χρόνια μετά, οι περισσότερες ποινές είχαν σβήσει με χάρη.',
      en: 'In Brazil, government and governing-party officials paid deputies to vote as they wished. The Supreme Court convicted 25 — the first time top politicians were sentenced to prison for corruption. Four years later, most sentences had been extinguished by pardon.',
    },
    facts: [
      {
        el: '2005: το σκάνδαλο ξεσπά και ο προϊστάμενος του γραφείου του Προέδρου παραιτείται. Στο Ανώτατο Δικαστήριο 37 κατηγορούμενοι αντιμετωπίζουν 1.089 κατηγορίες — διαφθορά, ξέπλυμα, κατάχρηση δημόσιου χρήματος, υπεξαίρεση, συνωμοσία.',
        en: '2005: the scandal breaks and the President’s chief of staff steps down. At the Supreme Court 37 defendants face 1,089 counts — corruption, money laundering, misuse of public funds, embezzlement, conspiracy.',
      },
      {
        el: '4 Οκτωβρίου 2012: ο εισηγητής δικαστής περιγράφει το σύστημα ως «αγορά ψήφων στο Κογκρέσο ή, απλά, δωροδοκία»· οι βουλευτές που πληρώθηκαν κατηγορούνται για παθητική δωροδοκία και όσοι πλήρωναν για ενεργητική.',
        en: '4 October 2012: the reporting justice describes the scheme as “vote buying in Congress or, in plain English, bribery”; deputies who were paid are charged with passive corruption and those who paid with active corruption.',
      },
      {
        el: 'Δεκέμβριος 2012: το Ανώτατο Δικαστήριο εγκρίνει 25 καταδίκες — βουλευτές, στελέχη του κόμματος και της κυβέρνησης· για πρώτη φορά κορυφαίοι πολιτικοί καταδικάζονται σε φυλάκιση για διαφθορά. Ο τότε Πρόεδρος δεν κατηγορήθηκε ποτέ στην υπόθεση.',
        en: 'December 2012: the Supreme Court approves 25 convictions — deputies, party and government officials; for the first time top politicians are sentenced to prison for corruption. The then President was never charged in the case.',
      },
      {
        el: '27 Φεβρουαρίου 2014: σε ειδική έφεση, το δικαστήριο αθωώνει με 6–5 οκτώ κατηγορουμένους — ανάμεσά τους τον πρώην προϊστάμενο του γραφείου του Προέδρου — για σύσταση συμμορίας· οι καταδίκες για διαφθορά παραμένουν.',
        en: '27 February 2014: on special appeal, the court acquits eight defendants 6–5 — among them the former chief of staff — of criminal association; the corruption convictions stand.',
      },
      {
        el: '17 Οκτωβρίου 2016: ένας δικαστής σβήνει τις υπόλοιπες ποινές του πυρήνα του κόμματος με το προεδρικό χριστουγεννιάτικο διάταγμα χάρης, προειδοποιώντας για «αίσθημα ατιμωρησίας και δυσπιστίας στους δημόσιους θεσμούς».',
        en: '17 October 2016: a justice extinguishes the party core’s remaining sentences under the presidential Christmas pardon, warning of “a sense of impunity and even a certain disbelief in public institutions.”',
      },
    ],
    outcome: {
      el: '25 καταδίκες (2012)· οκτώ αθωώσεις για συμμορία (2014)· οι περισσότερες ποινές εκτίθηκαν ή σβήστηκαν με χάρη ως το 2016.',
      en: '25 convictions (2012); eight acquittals of criminal association (2014); most sentences served or pardoned by 2016.',
    },
    breach: {
      el: 'Η ψήφος ενός βουλευτή είναι η ψήφος των πολιτών που τον εξέλεξαν. Όταν αγοράζεται για να σχηματιστεί πλειοψηφία, η δημοκρατία λειτουργεί στο φαίνεσθαι: οι νόμοι ψηφίζονται, αλλά όχι από εκείνους που υποτίθεται ότι τους αποφασίζουν. Και όταν η τιμωρία σβήνει τέσσερα χρόνια μετά με χάρη, το μήνυμα είναι ότι η αγορά ήταν φτηνή.',
      en: 'An MP’s vote is the vote of the citizens who elected them. When it is bought to form a majority, democracy works only in appearance: laws are passed, but not by those who are supposed to decide them. And when punishment vanishes four years later by pardon, the message is that the purchase was cheap.',
    },
    patterns: ['bought-votes', 'impunity'],
    safeguards: ['influence-ledger', 'no-oblivion'],
    counterfactual: {
      el: 'Το Μητρώο Επιρροής θα είχε διασταυρώσει ψήφους βουλευτών με πληρωμές μέσω διαφημιστικών εταιρειών και τράπεζας — οι ροές θα φαίνονταν χρόνια πριν από το 2005. Και το Χωρίς Σιωπηλή Λήθη θα έβαζε δίπλα σε κάθε χάρη την υπόθεση που έκλεισε.',
      en: 'The Influence Ledger would have cross-checked deputies’ votes against payments through advertising agencies and a bank — the flows would have shown years before 2005. And No Silent Forgetting would set beside each pardon the case it closed.',
    },
    antilogos: {
      el: 'Το δικαστήριο ήταν βαθιά διχασμένο — 6–5 στην έφεση, διαφωνίες σε βασικές κατηγορίες. Οι χάρες του 2016 εφάρμοζαν ένα γενικό ετήσιο διάταγμα, όχι ειδική χάρη για αυτούς. Και ο αρχηγός της κυβέρνησης δεν ήταν ποτέ κατηγορούμενος.',
      en: 'The court was deeply divided — 6–5 on appeal, dissents on key counts. The 2016 pardons applied a general annual decree, not a special pardon for these defendants. And the head of government was never a defendant.',
    },
    reply: {
      el: 'Ακριβώς: αν ένα γενικό διάταγμα μπορεί να σβήσει τις ποινές για αγορά ψήφων, το ζήτημα δεν είναι οι συγκεκριμένοι κατηγορούμενοι αλλά ο κανόνας. Η πρόταση δεν καταργεί τη χάρη· την κάνει ορατή, ώστε η κοινωνία να αποφασίσει αν θέλει να ισχύει και για τη διαφθορά.',
      en: 'Exactly: if a general decree can extinguish sentences for buying votes, the issue is not these defendants but the rule. The proposal does not abolish pardons; it makes them visible, so society can decide whether they should apply to corruption.',
    },
    lever: {
      el: 'Ζήτησε κάθε χάρη ή απόλυση κρατουμένου που αφορά καταδίκη για διαφθορά σε δημόσιο αξίωμα να δημοσιεύεται με αιτιολογία.',
      en: 'Ask that every pardon or release concerning a conviction for corruption in public office be published with its reasons.',
    },
    scores: { harm: 8, power: 10, recurrence: 7, remedy: 7 },
    status: {
      el: 'Κλειστή. Οι καταδίκες για διαφθορά είναι οριστικές· οκτώ αθωώθηκαν για σύσταση συμμορίας· οι υπόλοιπες ποινές σβήστηκαν με χάρη (2016).',
      en: 'Closed. The corruption convictions are final; eight were acquitted of criminal association; remaining sentences were extinguished by pardon (2016).',
    },
    sources: [
      { title: 'Americas Quarterly — Former chief of staff found guilty (2012)', url: 'https://americasquarterly.org/blog/lulas-former-chief-of-staff-found-guilty-in-imensalao-i-scandal/' },
      { title: 'Agência Brasil — Justices vote to convict former party leaders (2012)', url: 'https://memoria.ebc.com.br/agenciabrasil/new-in-english/2012-10-10/news-english-%E2%80%93-after-fourth-justice-votes-score-3-1-conviction-former-pt-leaders' },
      { title: 'Wilson Center — The meaning of Brazil’s largest political corruption trial', url: 'https://www.wilsoncenter.org/event/the-meaning-and-implication-the-mensalao-brazils-largest-trial-political-corruption' },
      { title: 'Câmara dos Deputados — STF acquits eight of criminal association (2014)', url: 'https://www.camara.leg.br/tv/427795-stf-absolve-oito-condenados-do-mensalao-do-crime-de-formacao-de-quadrilha/' },
      { title: 'Congresso em Foco — Pardons for the political core (2016)', url: 'https://www.congressoemfoco.com.br/noticias/stf-concede-perdao-de-penas-a-todo-o-nucleo-politico-do-mensalao/' },
    ],
  },
  {
    id: 'chicago-hiring-2006',
    when: '1972–2022',
    place: { el: 'Σικάγο, ΗΠΑ', en: 'Chicago, USA' },
    title: {
      el: 'Στημένες συνεντεύξεις και ψεύτικες βαθμολογίες: το γραφείο του δημάρχου για τις διακυβερνητικές σχέσεις έστηνε προσλήψεις για κομματικούς εργάτες, παρά την απαγόρευση ομοσπονδιακού δικαστηρίου',
      en: 'Sham interviews and fake scores: the Mayor’s Office of Intergovernmental Affairs rigged city hiring for political workers despite a federal court ban',
    },
    harmed: {
      el: 'Οι υποψήφιοι «εξίσου ή περισσότερο ικανοί» που προσπερνιούνταν· οι φορολογούμενοι του Σικάγου· οι δημοτικοί υπάλληλοι που πιέζονταν να κάνουν κομματική δουλειά για θέσεις ή προαγωγές',
      en: 'Candidates “equally or more qualified” who were passed over; Chicago taxpayers; city employees pressed to do political work for jobs or promotions',
    },
    plain: {
      el: 'Από το 1972 ένα ομοσπονδιακό δικαστήριο απαγόρευε στο Σικάγο να προσλαμβάνει με πολιτικά κριτήρια. Το 2005 αποκαλύφθηκε ότι ένα γραφείο του δημάρχου έστηνε συνεντεύξεις και φούσκωνε βαθμολογίες για να παίρνουν τις θέσεις οι κομματικοί του εργάτες. Χρειάστηκε ομοσπονδιακός επόπτης ως το 2014.',
      en: 'Since 1972 a federal court had barred Chicago from hiring on political grounds. In 2005 it emerged that a mayoral office staged interviews and inflated scores so its political workers got the jobs. A federal monitor was needed until 2014.',
    },
    facts: [
      {
        el: '18 Ιουλίου 2005: ο ομοσπονδιακός εισαγγελέας κατηγορεί ανώτερο στέλεχος του γραφείου του δημάρχου για ένα σύστημα με «εικονικές συνεντεύξεις και ψευδώς φουσκωμένες βαθμολογίες», ώστε προεπιλεγμένοι υποψήφιοι με πολιτικές διασυνδέσεις να παίρνουν τις θέσεις «συχνά αποκλείοντας εξίσου ή περισσότερο ικανούς». Πάνω από 30 στελέχη συνεργάζονται με τις αρχές.',
        en: '18 July 2005: the US Attorney charges a senior official of the mayor’s office over a system of “sham interviews, falsely inflating interview scores,” so pre-selected candidates with political ties won jobs “often to the exclusion of equally or more qualified candidates.” More than 30 officials are cooperating.',
      },
      {
        el: 'Οι δικαστικές εντολές του 1972 και του 1983 απαγόρευαν στην πόλη να προσλαμβάνει ή να προάγει με πολιτικά κριτήρια σε περίπου 37.000 θέσεις που δεν αφορούσαν χάραξη πολιτικής.',
        en: 'The 1972 and 1983 court orders barred the city from hiring or promoting on political grounds for roughly 37,000 non-policymaking jobs.',
      },
      {
        el: '6 Ιουλίου 2006: ομοσπονδιακοί ένορκοι καταδικάζουν τον πρώην επικεφαλής των προσλήψεων του γραφείου και τρεις ακόμη· οι εισαγγελείς το χαρακτηρίζουν «διεφθαρμένη μηχανή επιρροής». Ο δήμαρχος δεν κατηγορήθηκε ποτέ.',
        en: '6 July 2006: a federal jury convicts the office’s former patronage chief and three others; prosecutors call it a “corrupt clout machine.” The mayor was never charged.',
      },
      {
        el: '16 Ιουνίου 2014: ομοσπονδιακός δικαστής τερματίζει την εποπτεία των προσλήψεων της πόλης, αφού ο επόπτης και ο Γενικός Επιθεωρητής βεβαιώνουν «ουσιαστική συμμόρφωση» — η πόλη έχει πλέον «μηχανισμούς για να εξαλείφει τις παράνομες πολιτικές προσλήψεις».',
        en: '16 June 2014: a federal judge ends oversight of city hiring, after the monitor and the Inspector General report “substantial compliance” — the city now has “mechanisms in place to stamp out illegal patronage.”',
      },
      {
        el: '5 Αυγούστου 2022: το ομοσπονδιακό εφετείο τερματίζει την εποπτεία και για το γραφείο του κυβερνήτη της πολιτείας, μετά από 50 χρόνια, κρίνοντας ότι είχε γίνει «αόριστη ομοσπονδιακή δικαστική επιτήρηση».',
        en: '5 August 2022: the federal appeals court ends oversight of the state governor’s office too, after 50 years, finding it had become “indefinite federal judicial supervision.”',
      },
    ],
    outcome: {
      el: 'Ποινικές καταδίκες (2006) και ομοσπονδιακός επόπτης (2005–2014)· ο έλεγχος των προσλήψεων πέρασε στον Γενικό Επιθεωρητή της πόλης.',
      en: 'Criminal convictions (2006) and a federal monitor (2005–2014); hiring oversight passed to the city’s Inspector General.',
    },
    breach: {
      el: 'Μια δημοτική θέση πληρώνεται από όλους τους κατοίκους και υπάρχει για να τους εξυπηρετεί. Όταν μοιράζεται σε όσους μοίρασαν φυλλάδια στις εκλογές, με συνεντεύξεις-θέατρο και βαθμολογίες που γράφονται από πριν, η πόλη πληρώνει τους υπαλλήλους της για να δουλεύουν για ένα κόμμα.',
      en: 'A city job is paid for by every resident and exists to serve them. When it is handed to those who leafleted in the election, through staged interviews and scores written in advance, the city pays its staff to work for a party.',
    },
    patterns: ['rigged-interview', 'bypass-exam'],
    safeguards: ['hiring-audit', 'open-hiring'],
    counterfactual: {
      el: 'Ο Έλεγχος των Προσλήψεων θα είχε δει το μοτίβο στα δεδομένα: οι ίδιοι «ευνοούμενοι» να κερδίζουν, βαθμολογίες που άλλαζαν μετά τη συνέντευξη, υποψήφιοι με πολιτικές διασυνδέσεις να προηγούνται σταθερά. Και η Ανοιχτή Πρόσληψη θα έκανε τις βαθμολογίες δημόσιες — ανώνυμα — από την πρώτη μέρα.',
      en: 'The Hiring Audit would have seen the pattern in the data: the same “favourites” winning, scores changing after interviews, politically connected candidates consistently ahead. And Open Hiring would have made scores public — anonymously — from day one.',
    },
    antilogos: {
      el: 'Ο δήμαρχος δεν κατηγορήθηκε ποτέ, και οι ένορκοι αθώωσαν τον επικεφαλής σε δύο από τις τέσσερις κατηγορίες. Το νομικό εργαλείο της δίωξης επικρίθηκε από δικαστή του Ανωτάτου ως επικίνδυνα αόριστο, και το εφετείο είπε το 2022 ότι η εποπτεία είχε ξεφύγει πέρα από κάθε υποχρέωση.',
      en: 'The mayor was never charged, and the jury acquitted the chief on two of four counts. The prosecution’s legal tool was criticised by a Supreme Court justice as dangerously vague, and the appeals court said in 2022 that oversight had drifted beyond any obligation.',
    },
    reply: {
      el: 'Αυτό δείχνει ακριβώς γιατί η λύση δεν μπορεί να είναι μια ατέρμονη δικαστική εποπτεία ή μια αμφιλεγόμενη ποινική δίωξη. Ένας ανοιχτός, μόνιμος έλεγχος των δεδομένων προσλήψεων κάνει την ίδια δουλειά χωρίς επόπτη που κοστίζει εκατοντάδες χιλιάδες τον χρόνο — και χωρίς να περιμένει κάποιον να ομολογήσει.',
      en: 'That shows exactly why the answer cannot be endless court supervision or a contested criminal prosecution. An open, permanent audit of hiring data does the same job without a monitor costing hundreds of thousands a year — and without waiting for someone to confess.',
    },
    lever: {
      el: 'Ζήτησε από τον δήμο σου να δημοσιεύει ανώνυμα τις βαθμολογίες κάθε διαδικασίας πρόσληψης, μαζί με κάθε αλλαγή βαθμολογίας.',
      en: 'Ask your municipality to publish anonymised scores for every hiring procedure, along with any change of score.',
    },
    scores: { harm: 5, power: 7, recurrence: 8, remedy: 9 },
    status: {
      el: 'Κλειστή για τους καταδικασμένους του 2006 (οριστικές καταδίκες). Η πόλη και το γραφείο του κυβερνήτη αποδεσμεύτηκαν από την εποπτεία (2014, 2022).',
      en: 'Closed for the 2006 defendants (final convictions). The city and the governor’s office were released from oversight (2014, 2022).',
    },
    sources: [
      { title: 'US Department of Justice — Charges over city hiring (2005)', url: 'https://justice.gov/archive/usao/iln/chicago/2005/pr0718_01.pdf' },
      { title: 'NBC News — Four convicted in Chicago hiring fraud (2006)', url: 'https://www.nbcnews.com/news/amp/wbna13743118' },
      { title: 'NBC Chicago — Shakman decree oversight ends (2014)', url: 'https://www.nbcchicago.com/news/local/michael-shakman-decree-hiring-patronage/68706' },
      { title: 'Capitol Fax — Seventh Circuit vacates decree for governor’s office (2022)', url: 'https://capitolfax.com/2022/08/08/shakman-case-react/' },
    ],
  },
  {
    id: 'philippines-pork-barrel-2013',
    when: '2004–2025',
    place: { el: 'Φιλιππίνες', en: 'Philippines' },
    title: {
      el: 'Το ταμείο των βουλευτών που πήγαινε σε ψεύτικες οργανώσεις: το Ανώτατο Δικαστήριο καταργεί τα κονδύλια αφού οι ελεγκτές εντοπίζουν 6,156 δισ. πέσος',
      en: 'Legislators’ fund routed to fake NGOs: the Supreme Court abolishes it after state auditors flag ₱6.156 billion',
    },
    harmed: {
      el: 'Οι φτωχές κοινότητες, οι αγρότες και οι δικαιούχοι για τους οποίους υποτίθεται ότι γίνονταν τα «έργα»· οι φορολογούμενοι· οι τίμιες οργανώσεις',
      en: 'The poor communities, farmers and beneficiaries the “projects” were supposedly for; taxpayers; honest NGOs',
    },
    plain: {
      el: 'Οι βουλευτές των Φιλιππίνων είχαν δικά τους κονδύλια για «αναπτυξιακά έργα». Ο κρατικός έλεγχος βρήκε ότι δισεκατομμύρια πήγαιναν σε ψεύτικες οργανώσεις. Το Ανώτατο Δικαστήριο κατάργησε ολόκληρο το σύστημα. Στα δικαστήρια όμως, κανένας από τους τρεις γερουσιαστές δεν καταδικάστηκε για λεηλασία.',
      en: 'Philippine legislators had their own funds for “development projects.” The state audit found billions went to fake organisations. The Supreme Court abolished the whole system. But in court, none of the three senators was convicted of plunder.',
    },
    facts: [
      {
        el: '19 Νοεμβρίου 2013: το Ανώτατο Δικαστήριο παραθέτει τον ειδικό έλεγχο της Ελεγκτικής Επιτροπής: 82 οργανώσεις που ανέλαβαν 772 έργα αξίας 6,156 δισ. πέσος «είτε κρίθηκαν αμφίβολες, είτε υπέβαλαν αμφίβολα ή πλαστά έγγραφα, είτε δεν απέδωσαν λογαριασμό».',
        en: '19 November 2013: the Supreme Court cites the Commission on Audit special audit: 82 NGOs entrusted with 772 projects worth ₱6.156 billion “were either found questionable, or submitted questionable/spurious documents, or failed to liquidate.”',
      },
      {
        el: 'Ίδια απόφαση: το κράτος εξαπατήθηκε κατά «περίπου 10 δισ. πέσος τα τελευταία 10 χρόνια» μέσω «τουλάχιστον 20 εικονικών οργανώσεων»· το δικαστήριο κρίνει αντισυνταγματική κάθε διάταξη που δίνει σε νομοθέτες ρόλο στην εκτέλεση του προϋπολογισμού.',
        en: 'Same ruling: the state was defrauded of “some ₱10 billion over the past 10 years” through “no fewer than 20 dummy NGOs”; the court declares unconstitutional any provision giving legislators a role in executing the budget.',
      },
      {
        el: '7 Δεκεμβρίου 2018: το ειδικό δικαστήριο αθωώνει με 3–2 πρώην γερουσιαστή για λεηλασία, επειδή η ενοχή δεν αποδείχθηκε «πέραν πάσης εύλογης αμφιβολίας»· καταδικάζει όμως τον βοηθό του και την ιδιώτισσα οργανώτρια του σχεδίου σε ισόβια.',
        en: '7 December 2018: the anti-graft court acquits a former senator of plunder 3–2, as guilt was not proven “beyond reasonable doubt”; it convicts his aide and the private organiser of the scheme, sentencing them to life.',
      },
      {
        el: '19 Ιανουαρίου 2024: εν ενεργεία γερουσιαστής αθωώνεται για λεηλασία αλλά καταδικάζεται για άμεση και έμμεση δωροδοκία, για περίπου 9,87 εκατ. πέσος ώστε να κατευθύνει τα κονδύλιά του σε ψεύτικες οργανώσεις· ανακοινώνει έφεση.',
        en: '19 January 2024: a sitting senator is acquitted of plunder but convicted of direct and indirect bribery, over about ₱9.87 million for steering his funds to fake NGOs; he announces an appeal.',
      },
      {
        el: 'Οκτώβριος 2024 – Οκτώβριος 2025: τρίτος πρώην γερουσιαστής αθωώνεται για λεηλασία και έπειτα για τις υπόλοιπες κατηγορίες διαφθοράς· το δικαστήριο σημειώνει ότι βασικοί μάρτυρες δεν του παρέδωσαν ποτέ χρήματα ούτε τον συνάντησαν.',
        en: 'October 2024 – October 2025: a third former senator is acquitted of plunder and then of the remaining graft charges; the court notes key witnesses never delivered money to him or met him.',
      },
    ],
    outcome: {
      el: 'Το σύστημα καταργήθηκε (2013). Κανένας από τους τρεις γερουσιαστές δεν καταδικάστηκε για λεηλασία· ένας καταδικάστηκε για δωροδοκία. Η ιδιώτισσα οργανώτρια καταδικάστηκε.',
      en: 'The system was abolished (2013). None of the three senators was convicted of plunder; one was convicted of bribery. The private organiser was convicted.',
    },
    breach: {
      el: 'Ο προϋπολογισμός ψηφίζεται από τη βουλή και εκτελείται από τη διοίκηση — ώστε κανείς να μην ελέγχει και τις δύο άκρες. Όταν ένας βουλευτής αποφασίζει ο ίδιος σε ποια οργάνωση θα πάει «το δικό του» κονδύλι, το δημόσιο χρήμα γίνεται προσωπικό ταμείο εύνοιας — και οι φτωχοί στο όνομα των οποίων μοιράζεται δεν βλέπουν τίποτα.',
      en: 'The budget is voted by parliament and executed by the administration — so no one controls both ends. When an MP decides personally which organisation receives “their” fund, public money becomes a private favour fund — and the poor in whose name it is handed out see nothing.',
    },
    patterns: ['pork-fund', 'off-audit'],
    safeguards: ['fund-trace'],
    counterfactual: {
      el: 'Το Ίχνος Κάθε Κονδυλίου θα είχε ελέγξει κάθε οργάνωση πριν λάβει χρήματα — ιστορικό, πραγματικοί δικαιούχοι, απόδοση λογαριασμού για προηγούμενα έργα. Οι 82 οργανώσεις με αμφίβολα έγγραφα θα είχαν σημανθεί πριν από τα πρώτα 6 δισεκατομμύρια, όχι σε έναν έλεγχο χρόνια μετά.',
      en: 'Every Fund Traced would have checked each organisation before it received money — track record, beneficial owners, accounts for earlier projects. The 82 NGOs with questionable papers would have been flagged before the first 6 billion, not in an audit years later.',
    },
    antilogos: {
      el: 'Τα δικαστήρια αθώωσαν επανειλημμένα τους πολιτικούς: οι μάρτυρες ήταν αδύναμοι και το όριο του νόμου για τη λεηλασία υψηλό. Το σύστημα καταδίκασε ευκολότερα την ιδιώτισσα από τους αξιωματούχους — αλλά οι αθωώσεις είναι αθωώσεις.',
      en: 'The courts repeatedly acquitted the politicians: witnesses were weak and the plunder law’s threshold high. The system convicted the private operator more readily than the officials — but acquittals are acquittals.',
    },
    reply: {
      el: 'Ακριβώς — και γι’ αυτό το σημαντικότερο αποτέλεσμα δεν ήταν καμία δίκη, αλλά η απόφαση του 2013 που κατάργησε το σύστημα. Η πρόταση πάει ένα βήμα πιο πέρα: αντί να χρειάζεται ανώτατο δικαστήριο για να κλείσει μια πόρτα, κάθε κονδύλι ελέγχεται πριν περάσει από οποιαδήποτε πόρτα.',
      en: 'Exactly — which is why the most important result was not any trial but the 2013 ruling that abolished the system. The proposal goes one step further: instead of needing a supreme court to close a door, every fund is checked before it passes through any door.',
    },
    lever: {
      el: 'Ζήτησε κάθε επιχορήγηση δημόσιου φορέα σε ΜΚΟ ή σύλλογο να δημοσιεύεται με τους πραγματικούς δικαιούχους του αποδέκτη και την απόδοση λογαριασμού.',
      en: 'Ask that every public grant to an NGO or association be published with the recipient’s beneficial owners and its accounts.',
    },
    scores: { harm: 8, power: 9, recurrence: 8, remedy: 8 },
    status: {
      el: 'Μικτή. Οι αθωώσεις είναι οριστικές. Ο γερουσιαστής που καταδικάστηκε για δωροδοκία (2024) έχει ασκήσει έφεση και τεκμαίρεται αθώος ως την αμετάκλητη απόφαση.',
      en: 'Mixed. The acquittals are final. The senator convicted of bribery (2024) has appealed and is presumed innocent until final judgment.',
    },
    sources: [
      { title: 'LawPhil — Belgica v. Ochoa, G.R. No. 208566 (2013)', url: 'https://lawphil.net/judjuris/juri2013/nov2013/gr_208566_2013.html' },
      { title: 'Philstar — Sandiganbayan clears former senator in pork barrel scam (2018)', url: 'https://www.philstar.com/headlines/2018/12/07/1875003/sandiganbayan-clears-revilla-pork-barrel-scam' },
      { title: 'SunStar — Senator acquitted of plunder, convicted of bribery (2024)', url: 'https://www.sunstar.com.ph/manila/jinggoy-estrada-acquitted-of-plunder-charges-convicted-of-bribery-in-pork-barrel-scam' },
      { title: 'Philstar — Sandiganbayan acquits former senator and others (2024)', url: 'https://www.philstar.com/headlines/2024/10/04/2390115/sandiganbayan-acquits-enrile-others-p172-m-pork-barrel-scam' },
      { title: 'Philstar — Cleared in remaining pork barrel graft case (2025)', url: 'https://www.philstar.com/headlines/2025/10/24/2482206/enrile-napoles-reyes-cleared-remaining-pork-barrel-graft-case' },
    ],
  },
  {
    id: 'south-africa-cadre-2022',
    when: '2009–2026',
    place: { el: 'Νότια Αφρική', en: 'South Africa' },
    title: {
      el: 'Κομματική πίστη αντί για αξία: η Επιτροπή για την «κατάληψη του κράτους» βρίσκει ότι η επιτροπή τοποθετήσεων του κυβερνώντος κόμματος «συχνά δίνει εντολές» για δημόσιους διορισμούς',
      en: 'Party loyalty over merit: the State Capture Commission finds the governing party’s deployment committee “often instructs” who is appointed to public posts',
    },
    harmed: {
      el: 'Οι πολίτες και οι φορολογούμενοι της Νότιας Αφρικής — δημόσιες επιχειρήσεις ρεύματος, σιδηροδρόμων και αερομεταφορών που καταστράφηκαν· οι ικανοί δημόσιοι λειτουργοί που αποκλείστηκαν',
      en: 'South Africa’s citizens and taxpayers — state power, rail and airline companies that were run down; capable public servants who were excluded',
    },
    plain: {
      el: 'Μια δικαστική επιτροπή έρευνας βρήκε ότι οι μεγάλες δημόσιες επιχειρήσεις της Νότιας Αφρικής «έγιναν δυσλειτουργικές ώστε να εκτραπεί δημόσιο χρήμα», και ότι μια επιτροπή του κυβερνώντος κόμματος αποφάσιζε ποιος θα διοριστεί σε κράτος και επιχειρήσεις. Τα δικαστήρια όμως δεν έχουν κηρύξει την πρακτική παράνομη.',
      en: 'A judicial commission of inquiry found South Africa’s major state companies were “rendered dysfunctional in order to divert public funds,” and that a governing-party committee decided who was appointed across state and companies. But the courts have not declared the practice unlawful.',
    },
    facts: [
      {
        el: '23 Ιουνίου 2022: η έκθεση της Επιτροπής κρίνει ότι οι δημόσιες επιχειρήσεις ηλεκτρισμού, μεταφορών, αμυντικής βιομηχανίας και αερομεταφορών «έγιναν δυσλειτουργικές ώστε να εκτραπεί δημόσιο χρήμα για ιδιωτικό όφελος», και προειδοποιεί ότι «δεν υπάρχουν αποτελεσματικοί μηχανισμοί» να εμποδίσουν τον νεποτισμό στους διορισμούς.',
        en: '23 June 2022: the Commission’s report finds the state electricity, transport, defence and airline companies were “rendered dysfunctional in order to divert public funds for private benefit,” and warns there are “no effective mechanisms” to stop cronyism in appointments.',
      },
      {
        el: 'Η ίδια έκθεση προτείνει «μια πραγματικά ανεξάρτητη και διαφανή διαδικασία, απαλλαγμένη από πολιτική χειραγώγηση», με μόνιμη επιτροπή διορισμών και δημόσιες ακροάσεις.',
        en: 'The same report recommends “a truly independent and transparent process free from political manipulations,” with a standing appointments committee and public hearings.',
      },
      {
        el: '24 Ιουνίου 2022: η Επιτροπή κρίνει την πολιτική κομματικών τοποθετήσεων αντισυνταγματική και παράνομη· η επιτροπή του κόμματος «δεν κάνει πάντα απλώς συστάσεις αλλά συχνά δίνει εντολές στις αρχές διορισμού για το ποιον να διορίσουν» — από τη δημόσια διοίκηση ως τις δημόσιες επιχειρήσεις και τις πρεσβείες.',
        en: '24 June 2022: the Commission finds the cadre-deployment policy unconstitutional and unlawful; the party committee “does not always merely make recommendations but in fact often instructs appointing authorities on who to appoint” — from the civil service to state companies and embassies.',
      },
      {
        el: '12 Φεβρουαρίου 2024: το Συνταγματικό Δικαστήριο διατάσσει το κόμμα να παραδώσει τα αρχεία των τοποθετήσεων στην αξιωματική αντιπολίτευση μέσα σε πέντε μέρες.',
        en: '12 February 2024: the Constitutional Court orders the party to hand its deployment records to the main opposition within five days.',
      },
      {
        el: '21 Φεβρουαρίου 2024: το Ανώτατο Δικαστήριο του Γκάουτενγκ απορρίπτει την αίτηση να κηρυχθεί η πολιτική αντισυνταγματική· τον Μάιο 2025 η αντιπολίτευση προσφεύγει στο Ανώτατο Εφετείο, επικαλούμενη τον συνταγματικό κανόνα ότι κανείς δημόσιος υπάλληλος δεν ευνοείται επειδή υποστηρίζει ένα κόμμα.',
        en: '21 February 2024: the Gauteng High Court dismisses the application to declare the policy unconstitutional; in May 2025 the opposition petitions the Supreme Court of Appeal, citing the constitutional rule that no public servant may be favoured for supporting a party.',
      },
    ],
    outcome: {
      el: 'Εύρημα επιτροπής ότι οι κομματικές τοποθετήσεις είναι αντισυνταγματικές· τα δικαστήρια διέταξαν διαφάνεια αλλά δεν απαγόρευσαν την πρακτική.',
      en: 'A commission finding that cadre deployment is unconstitutional; the courts ordered disclosure but have not banned the practice.',
    },
    breach: {
      el: 'Μια δημόσια επιχείρηση ρεύματος υπάρχει για να ανάβουν τα φώτα — όχι για να βρίσκουν θέση τα στελέχη ενός κόμματος. Όταν οι διοικήσεις επιλέγονται για την πίστη τους και όχι για την ικανότητά τους, το κόστος δεν πέφτει στο κόμμα· πέφτει σε κάθε σπίτι που μένει στο σκοτάδι.',
      en: 'A state power company exists to keep the lights on — not to place a party’s cadres. When boards are chosen for loyalty rather than ability, the cost does not fall on the party; it falls on every home left in the dark.',
    },
    patterns: ['party-appointments'],
    safeguards: ['merit-boards', 'hiring-audit'],
    counterfactual: {
      el: 'Οι Διοικήσεις με Αξιοκρατία είναι ακριβώς αυτό που πρότεινε η Επιτροπή — ανεξάρτητη επιλογή με δημόσιες ακροάσεις. Ο Έλεγχος των Προσλήψεων θα είχε δείξει πόσοι διορισμοί ακολουθούσαν τις αποφάσεις της κομματικής επιτροπής, πριν χρειαστεί το Συνταγματικό Δικαστήριο για να δοθούν τα αρχεία.',
      en: 'Boards by Merit is exactly what the Commission proposed — independent selection with public hearings. The Hiring Audit would have shown how many appointments followed the party committee’s decisions, before the Constitutional Court was needed to release the records.',
    },
    antilogos: {
      el: 'Δικαστήριο αρνήθηκε ως τώρα να κηρύξει την πρακτική αντισυνταγματική. Το κυβερνών κόμμα την υπερασπίζεται ως εργαλείο διόρθωσης των φυλετικών ανισοτήτων του απαρτχάιντ στην ηγεσία του κράτους — και η αντιπολίτευση που προσέφυγε βρέθηκε κι αυτή σε αμφισβήτηση για δικό της διορισμό το 2024.',
      en: 'A court has so far refused to declare the practice unconstitutional. The governing party defends it as a tool to correct apartheid-era racial imbalances in state leadership — and the opposition that sued faced its own appointment controversy in 2024.',
    },
    reply: {
      el: 'Ο στόχος της διόρθωσης των ανισοτήτων είναι θεμιτός — και μια ανοιχτή, αξιοκρατική διαδικασία μπορεί να τον υπηρετήσει με δημοσιευμένα κριτήρια. Αυτό που δεν μπορεί να υπηρετήσει κανέναν δίκαιο σκοπό είναι μια κρυφή κομματική επιτροπή. Και το ότι όλα τα κόμματα μπαίνουν στον πειρασμό είναι ο λόγος που ο κανόνας πρέπει να ισχύει για όλα.',
      en: 'The goal of correcting inequality is legitimate — and an open, merit-based process can serve it with published criteria. What serves no just goal is a hidden party committee. And that every party is tempted is precisely why the rule must apply to all.',
    },
    lever: {
      el: 'Ζήτησε οι διοικήσεις των ελληνικών δημόσιων επιχειρήσεων να επιλέγονται με ανοιχτή προκήρυξη, δημοσιευμένα κριτήρια και δημόσια ακρόαση στη Βουλή.',
      en: 'Ask that boards of Greek state companies be chosen through an open call, published criteria and a public hearing in Parliament.',
    },
    scores: { harm: 8, power: 9, recurrence: 8, remedy: 7 },
    status: {
      el: 'Ανοιχτή. Τα ευρήματα της Επιτροπής δεν είναι ποινικές καταδίκες — όποιος κατονομάστηκε τεκμαίρεται αθώος. Η προσφυγή του 2025 εκκρεμεί.',
      en: 'Open. The Commission’s findings are not criminal convictions — anyone named is presumed innocent. The 2025 petition is pending.',
    },
    sources: [
      { title: 'BusinessDay — SOEs at risk of recapture, warns Zondo (2022)', url: 'https://www.businessday.co.za/bd/national/2022-06-23-soes-at-risk-of-recapture-because-politicians-can-still-meddle-warns-zondo/' },
      { title: 'Daily Maverick — Cadre deployment unconstitutional and illegal (2022)', url: 'https://www.dailymaverick.co.za/article/2022-06-24-cadre-deployment-unconstitutional-and-illegal-commissions-bombshell-finding-on-ancs-key-policy.md' },
      { title: 'eNCA — DA wins cadre deployment records battle (2024)', url: 'https://www.enca.com/top-stories/da-wins-anc-cadre-deployment-court-battle' },
      { title: 'Polity — DA loses bid to have cadre deployment declared unlawful (2024)', url: 'https://www.polity.org.za/article/da-loses-court-bid-to-have-cadre-deployment-declared-unlawful--2024-02-21' },
      { title: 'EWN — DA files papers with the SCA (2025)', url: 'https://www.ewn.co.za/2025/05/08/da-files-papers-with-sca-over-anc-cadre-deployment-policy' },
    ],
  },
]
