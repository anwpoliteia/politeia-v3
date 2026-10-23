// ΑΓΟΡΑΝΟΜΟΣ — the ten recurring ways a price stops being honest. Each is a
// question answered privately — no names, no receipts, no upload (Hard Rule 6).

import type { Pattern } from '../types'

export const PATTERNS: readonly Pattern[] = [
  {
    id: 'lockstep-rise',
    name: { el: 'Ίδια αύξηση παντού', en: 'The same rise everywhere' },
    question: {
      el: 'Ανέβηκε η τιμή του ίδιου προϊόντος την ίδια στιγμή και κατά το ίδιο ποσό σε όλα τα καταστήματα;',
      en: 'Did the price of the same product rise at the same time and by the same amount in every shop?',
    },
    safeguards: ['lockstep-screen', 'live-price'],
  },
  {
    id: 'squeezed-producer',
    name: { el: 'Φθηνά από τον παραγωγό, ακριβά στο ράφι', en: 'Cheap from the farm, dear on the shelf' },
    question: {
      el: 'Έπεσε η τιμή που πληρώνεται στον παραγωγό, ενώ η τιμή στο ράφι έμεινε ίδια ή ανέβηκε;',
      en: 'Did the price paid to the producer fall while the shelf price stayed the same or rose?',
    },
    safeguards: ['chain-mirror'],
  },
  {
    id: 'crisis-margin',
    name: { el: 'Η κρίση ως ευκαιρία', en: 'Crisis as opportunity' },
    question: {
      el: 'Ανέβηκαν οι τιμές περισσότερο απ’ όσο δικαιολογεί το κόστος, την ώρα μιας κρίσης;',
      en: 'Did prices rise more than costs justify, in the middle of a crisis?',
    },
    safeguards: ['chain-mirror', 'bill-breakdown'],
  },
  {
    id: 'fake-discount',
    name: { el: 'Έκπτωση που δεν είναι έκπτωση', en: 'A discount that isn’t' },
    question: {
      el: 'Είδες «έκπτωση» σε προϊόν που λίγο πριν είχε ανέβει απότομα;',
      en: 'Did you see a “discount” on a product that had shot up in price just before?',
    },
    safeguards: ['price-history'],
  },
  {
    id: 'hidden-middleman',
    name: { el: 'Ο αόρατος μεσάζων', en: 'The invisible middleman' },
    question: {
      el: 'Πληρώνεις με βάση μια τιμή λίστας που κανείς δεν πληρώνει στην πραγματικότητα — ενώ εκπτώσεις και επιστροφές μένουν στους μεσάζοντες;',
      en: 'Do you pay based on a list price nobody really pays — while discounts and rebates stay with the middlemen?',
    },
    safeguards: ['rebate-light'],
  },
  {
    id: 'opaque-bill',
    name: { el: 'Λογαριασμός που δεν εξηγείται', en: 'A bill no one can explain' },
    question: {
      el: 'Έλαβες λογαριασμό ρεύματος, αερίου ή νερού που κανείς δεν μπορούσε να σου εξηγήσει;',
      en: 'Did you get an electricity, gas or water bill that no one could explain to you?',
    },
    safeguards: ['bill-breakdown'],
  },
  {
    id: 'tiny-fine',
    name: { el: 'Πρόστιμο-ψίχουλο', en: 'A crumb of a fine' },
    question: {
      el: 'Επιβλήθηκε πρόστιμο που ήταν ψίχουλα μπροστά στο κέρδος της παράβασης;',
      en: 'Was a fine imposed that was crumbs compared with the profit from the breach?',
    },
    safeguards: ['fine-mirror'],
  },
  {
    id: 'no-refund',
    name: { el: 'Κανείς δεν πήρε πίσω τα χρήματα', en: 'No one got the money back' },
    question: {
      el: 'Αποδείχθηκε καρτέλ ή παράβαση — ή γλίτωσε ο πρωταίτιος επειδή την κατήγγειλε πρώτος — αλλά οι καταναλωτές δεν πήραν τίποτα πίσω;',
      en: 'Was a cartel or breach proven — or did the ringleader escape by reporting it first — yet consumers got nothing back?',
    },
    safeguards: ['automatic-refund'],
  },
  {
    id: 'late-regulator',
    name: { el: 'Εποπτεία που έρχεται χρόνια μετά', en: 'Oversight years too late' },
    question: {
      el: 'Χρειάστηκαν χρόνια για να αντιδράσει η εποπτική αρχή, ενώ το πρόβλημα ήταν ορατό από νωρίς;',
      en: 'Did the regulator take years to act, while the problem was visible early?',
    },
    safeguards: ['resilience-watch', 'lockstep-screen'],
  },
  {
    id: 'housing-squeeze',
    name: { el: 'Ενοίκιο πάνω από τον μισθό', en: 'Rent above the wage' },
    question: {
      el: 'Ανέβηκε το ενοίκιό σου πολύ περισσότερο από τον μισθό σου, ενώ γύρω σου σπίτια μένουν κλειστά ή γίνονται βραχυχρόνιες μισθώσεις;',
      en: 'Did your rent rise far more than your wage, while homes around you stand empty or become short-term lets?',
    },
    safeguards: ['housing-register'],
  },
]
