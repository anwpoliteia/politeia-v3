// Seed: public deliberation. Base aggregate vote counts (simulating other
// citizens) and seed comments with net scores. The live citizen's own
// vote/comment are layered on top from the store — never stored here, never
// attributable to a named citizen in the UI (Hard Rule 6, spec §9).

import type { Comment, VoteAggregate } from '../lib/types'

// Base aggregate per proposal. The current user's vote is added at read time.
export const BASE_VOTES: Record<string, VoteAggregate> = {
  'prop-environment-01': { up: 1842, down: 690 },
  'prop-finance-01': { up: 2310, down: 540 },
  'prop-health-01': { up: 2740, down: 120 },
  'prop-migration-02': { up: 1190, down: 980 },
  'prop-defence-01': { up: 760, down: 1340 },
  'prop-education-01': { up: 1980, down: 210 },
  'prop-nous-01': { up: 1420, down: 360 },
}

// Seed comments. `score` is net votes and drives the "most reasoned" sort.
export const SEED_COMMENTS: readonly Comment[] = [
  {
    id: 'c-env-1',
    proposalId: 'prop-environment-01',
    userId: 'seed',
    authorName: 'Δήμητρα Κ.',
    parentId: null,
    body: 'Η ζώνη αποκλεισμού για το οπτικό πεδίο των κατοικημένων ακτών είναι αόριστη. Πόσα ναυτικά μίλια ακριβώς; Χωρίς αριθμό, η εγγύηση είναι κενή.',
    createdAt: '2026-06-10T08:30:00Z',
    score: 214,
  },
  {
    id: 'c-env-2',
    proposalId: 'prop-environment-01',
    userId: 'seed',
    authorName: 'Nikos T.',
    parentId: null,
    body: 'The Danish cooperative model only worked because of decades of trust-building. Importing the ownership share without the institutions may not convert resistance into benefit.',
    createdAt: '2026-06-10T11:05:00Z',
    score: 158,
  },
  {
    id: 'c-env-3',
    proposalId: 'prop-environment-01',
    userId: 'seed',
    authorName: 'Αλιευτικός Σύλλογος Χίου',
    parentId: 'c-env-1',
    body: 'Η αποζημίωση μετάβασης πρέπει να είναι εγγυημένη πριν την αδειοδότηση, όχι μετά. Αλλιώς ο στόλος επωμίζεται το ρίσκο.',
    createdAt: '2026-06-10T13:40:00Z',
    score: 96,
  },
  {
    id: 'c-fin-1',
    proposalId: 'prop-finance-01',
    userId: 'seed',
    authorName: 'Γιώργος Π.',
    parentId: null,
    body: 'Συμφωνώ με τον αντίλογο της ίδιας της πρότασης: τα χαμηλότερα εισοδήματα έχουν μεγαλύτερη ανάγκη. Γιατί να μην προηγηθεί το στοχευμένο επίδομα;',
    createdAt: '2026-06-05T09:10:00Z',
    score: 187,
  },
  {
    id: 'c-fin-2',
    proposalId: 'prop-finance-01',
    userId: 'seed',
    authorName: 'Maria L.',
    parentId: null,
    body: 'The suspension clause is the key safeguard here. I would want the surplus floor published and audited independently, not set by the ministry itself.',
    createdAt: '2026-06-05T15:25:00Z',
    score: 142,
  },
  {
    id: 'c-def-1',
    proposalId: 'prop-defence-01',
    userId: 'seed',
    authorName: 'Ελένη Μ.',
    parentId: null,
    body: 'Η κοινωνική λειτουργία της κοινής θητείας υποτιμάται. Δεν είναι μόνο ετοιμότητα — είναι ένας από τους λίγους θεσμούς όπου συναντιούνται όλες οι τάξεις.',
    createdAt: '2026-05-20T18:00:00Z',
    score: 203,
  },
  {
    id: 'c-mig-1',
    proposalId: 'prop-migration-02',
    userId: 'seed',
    authorName: 'Σοφία Α.',
    parentId: null,
    body: 'Οι έξι μήνες χωρίς εγγυημένη αύξηση εξειδικευμένου προσωπικού είναι επικίνδυνοι. Ο αντίλογος της πρότασης το λέει σωστά — η ταχύτητα δεν πρέπει να θυσιάσει την ποιότητα της κρίσης.',
    createdAt: '2026-06-12T07:50:00Z',
    score: 171,
  },
  {
    id: 'c-edu-1',
    proposalId: 'prop-education-01',
    userId: 'seed',
    authorName: 'Θανάσης Ρ.',
    parentId: null,
    body: 'Χωρίς ουσιαστική επιμόρφωση εκπαιδευτικών, η ώρα θα γίνει τυπική. Το βλέπουμε σε κάθε νέο μάθημα. Η επιμόρφωση πρέπει να είναι προϋπόθεση, όχι παράρτημα.',
    createdAt: '2026-05-31T12:15:00Z',
    score: 128,
  },
]
