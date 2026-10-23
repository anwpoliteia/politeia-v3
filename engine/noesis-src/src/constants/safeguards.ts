// Governance safeguards — the Hard Rules and transparency mechanisms (spec §1,
// §8) rendered on /blueprint as public commitments.

export interface Safeguard {
  el: string
  en: string
}

export const SAFEGUARDS: readonly Safeguard[] = [
  {
    el: 'Η ΤΝ προτείνει, ποτέ δεν αποφασίζει. Κάθε έξοδος είναι μη δεσμευτική· επώνυμοι άνθρωποι λογοδοτούν.',
    en: 'The AI proposes, never decides. Every output is non-binding; named humans remain accountable.',
  },
  {
    el: 'Ο πλήρης συλλογισμός είναι πάντα ορατός — πηγές, βεβαιότητα και δηλωμένες αβεβαιότητες. Κανένα μαύρο κουτί.',
    en: 'Full reasoning is always visible — sources, confidence and stated uncertainties. No black boxes.',
  },
  {
    el: 'Κάθε πρόταση φέρει τον ισχυρότερο αντίλογό της, παραγόμενο αντιπαραθετικά. Χωρίς αυτόν δεν δημοσιεύεται.',
    en: 'Every proposal carries its strongest counter-argument, generated adversarially. Without it, it does not ship.',
  },
  {
    el: 'Απλή γλώσσα υποχρεωτικά: μία πρόταση «τι σημαίνει αυτό» πάνω από κάθε τεχνική λεπτομέρεια.',
    en: 'Plain language is mandatory: a one-sentence "what this means" above every technical detail.',
  },
  {
    el: 'Έκδοση κάθε πρότασης με ιστορικό — οι πολίτες βλέπουν πώς και γιατί άλλαξε η συμβουλή.',
    en: 'Proposal versioning with history — citizens can see how and why the advice changed.',
  },
  {
    el: 'Υποχρεωτική κατανεμητική σημείωση σε κάθε πρόταση: ποιος πληρώνει, ποιος ωφελείται.',
    en: 'A mandatory distributional note on every proposal: who pays, who benefits.',
  },
  {
    el: 'Τα σχόλια ταξινομούνται εξ ορισμού κατά «πιο τεκμηριωμένα», όχι κατά χρόνο ή όγκο. Κανένας μηχανισμός μεγιστοποίησης εμπλοκής.',
    en: 'Comments default-sort by "most reasoned", not recency or volume. No engagement-maximising mechanics anywhere.',
  },
  {
    el: 'Ιδιωτικότητα εκ σχεδιασμού: καμία στόχευση, κατατομή ή παρακολούθηση πέρα από τον λογαριασμό και τις δικές σου ψήφους/σχόλια.',
    en: 'Privacy by design: no targeting, profiling or surveillance beyond your account and your own votes/comments.',
  },
]

// The Counsellor system-prompt skeleton (spec §6.3), shown verbatim so the
// agent design is public.
export const SYSTEM_PROMPT_SKELETON = `You are the {Ministry} Counsellor of POLITEIA. You ADVISE; you never decide.
Output is non-binding. Named human officials remain accountable.
Objective: maximise eudaimonia (human flourishing) for the people of Greece,
measured across the nine dimensions of the Eudaimonia Index.
For every proposal you MUST:
- Open with a one-sentence plain-Greek "what this means".
- State the situation, then a recommendation in advisory language only.
- Give full reasoning with cited, real sources. State your confidence and
  exactly what evidence would change your recommendation.
- Produce the STRONGEST honest counter-argument to your own proposal.
- State who bears the costs and who gains (distributional honesty).
- Map the proposal to the seven virtues and estimate its signed effect on
  each Index dimension.
Forbidden: imperative commands, spin, false certainty, targeting individuals,
proposals that trade long-run flourishing for short-run approval.
Output strict JSON matching the proposal schema. No prose outside the JSON.`
