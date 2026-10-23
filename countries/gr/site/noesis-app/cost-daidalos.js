/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
// «Η τρίτη επιλογή: ο ΔΑΙΔΑΛΟΣ» — added below the /cost calculator after the national
// supercomputer DAEDALUS was inaugurated (19 October 2026), with the real energy need per GPU
// generation. It sits beside the imported app (like stages-hero.js), so the page's own calculator
// stays exactly as it is. Every figure is labelled illustrative; facts and prices are dated and
// linked. Styles: cost-daidalos.css.
(() => {
  'use strict';
  const ROUTE = '/cost';

  // Demand: the same model as the page's API mode (tokens per proposal and per citizen question).
  const PROPOSAL_IN = 8000, PROPOSAL_OUT = 4000, QA_IN = 1500, QA_OUT = 700, DAYS_PER_YEAR = 360;
  const HOURS = 8760, FX = 0.86;          // € per US$, indicative (October 2026)
  const DAEDALUS_GPUS = 2000;             // "more than 2,000" NVIDIA GH200
  const REPLICAS = 2;                     // two copies of the model, for availability
  const MEMORY_FACTOR = 1.25;             // GB per billion parameters in FP8, with KV cache and runtime
  const PREFILL_SPEEDUP = 10;             // reading input is ~10× faster than writing output
  const IDLE = .3;                        // a GPU kept on but idle draws ~30% of its working power
  const PUE = { daedalus: 1.1, own: 1.3 };   // liquid-cooled DAEDALUS; a typical new hall (the page uses ~1.3)
  const EUR_PER_KWH = .18;                // the page's own electricity price
  const SOFTWARE = 500_000, HOSTING = 60_000;
  const STAFF = { api: 4, daedalus: 8, cloud: 8, own: 12 };

  // GPU generations. Throughput: MLPerf Inference v5.1, Llama 2 70B, per GPU (system total ÷ GPUs);
  // Rubin has no independent measurement yet: its figure is our estimate from the maker's specs.
  const GEN = {
    gh200: { name: 'Hopper GH200', year: '2023', memGB: 96, kw: 1.0, tps: 4000, capex: 0 },
    b200: { name: 'Blackwell B200', year: '2025', memGB: 192, kw: 1.25, tps: 12700, capex: 35_000 },
    b300: { name: 'Blackwell Ultra B300', year: '2025–26', memGB: 288, kw: 1.4, tps: 14000, capex: 45_000 },
    rubin: { name: 'Rubin VR200', year: '2026', memGB: 288, kw: 2.3, tps: 35000, capex: 60_000, estimate: true },
  };
  const MODELS = [   // Anthropic list prices, US$ per million tokens (October 2026)
    { id: 'sonnet', name: 'Claude Sonnet 5.5', inUsd: 2, outUsd: 10 },
    { id: 'opus', name: 'Claude Opus 5.5', inUsd: 4, outUsd: 20 },
    { id: 'haiku', name: 'Claude Haiku 5.5', inUsd: .10, outUsd: .50 },
  ];
  const SOURCES = [
    ['GRNET · ΔΑΙΔΑΛΟΣ, εγκαίνια 19/10/2026', 'https://grnet.gr/en/2026/10/19/national-supercomputer-daedalus-inaugurated/'],
    ['EuroHPC JU · DAEDALUS', 'https://www.hpcwire.com/off-the-wire/eurohpc-and-grnet-inaugurate-daedalus-supercomputer/'],
    ['EuroHPC · πολιτική πρόσβασης', 'https://www.eurohpc-ju.europa.eu/supercomputers/supercomputers-access-policy-and-faq_en'],
    ['Φάρος · AI Factory', 'https://pharosfactory.ai/'],
    ['MLPerf v5.1 · Blackwell Ultra', 'https://developer.nvidia.com/blog/nvidia-blackwell-ultra-sets-new-inference-records-in-mlperf-debut/'],
    ['MLPerf v5.1 · 8×B200 (Lambda)', 'https://lambda.ai/blog/lambda-mlperf-inference-v5.1'],
    ['B300 · 1.400 W', 'https://www.techpowerup.com/330154/nvidia-gb300-blackwell-ultra-will-feature-288-gb-hbm3e-memory-1400-w-tdp'],
    ['GH200 · έως 1.000 W', 'https://en.wikipedia.org/wiki/Grace_Hopper_GH200'],
    ['Rubin · προδιαγραφές', 'https://www.thundercompute.com/blog/nvidia-rubin-architecture'],
    ['GH200 cloud $1,99/ώρα', 'https://gpufinder.dev/gpu/gh200-vs-h100'],
    ['GH200 cloud $2,75/ώρα', 'https://www.spheron.network/blog/vultr-cloud-gpu-pricing-2026/'],
    ['Anthropic · τιμές API', 'https://www.anthropic.com/pricing'],
  ];

  const TEXT = {
    el: {
      eyebrow: 'Ενημέρωση · 21 Οκτωβρίου 2026',
      title: 'Η τρίτη επιλογή: ο ΔΑΙΔΑΛΟΣ',
      lede: 'Ο εθνικός υπερυπολογιστής ΔΑΙΔΑΛΟΣ εγκαινιάστηκε στις 19 Οκτωβρίου 2026 στο Λαύριο. Με αυτόν, η ΠΟΛΙΤΕΙΑ μπορεί να τρέξει μοντέλα ανοιχτών βαρών μέσα στην Ελλάδα χωρίς να χτίσει δικό της κέντρο δεδομένων. Παρακάτω, τέσσερις τρόποι να εξυπηρετηθεί η ίδια ζήτηση, σε κλίμακα έργου, και η πραγματική ανάγκη για ενέργεια ανά γενιά GPU.',
      banner: 'ενδεικτικό — απαιτεί επίσημη μελέτη σκοπιμότητας',
      facts: [['85,69 PF', 'διαρκής επίδοση (115 PF μέγιστη)'], ['2.000+', 'NVIDIA GH200 (Hopper), HPE, υγρή ψύξη'], ['#31 · #23', 'TOP500 · Green500, Ιούνιος 2026'], ['€36 εκ.', 'κόστος απόκτησης: 35% EuroHPC, 65% Ελλάδα 2.0']],
      inputs: 'Παράμετροι', results: 'Ετήσιο κόστος ανά επιλογή', breakdown: 'Ανάλυση',
      proposals: 'Προτάσεις ανά ημέρα', qa: 'Ερωτήσεις πολιτών ανά ημέρα',
      params: 'Μέγεθος μοντέλου ανοιχτών βαρών', paramsUnit: 'δισ. παράμετροι', paramsHint: `Σε FP8, με ${REPLICAS} αντίγραφα για διαθεσιμότητα. Από αυτό προκύπτει πόσες GPU χρειάζεται κάθε επιλογή.`,
      gen: 'Γενιά GPU για ιδιόκτητη αγορά',
      dPrice: 'Τιμή ΔΑΙΔΑΛΟΥ ανά GPU-ώρα', dFree: 'δωρεάν πρόσβαση', dHint: '€0 με πρόσβαση EuroHPC ή Φάρου· σύρε για εμπορική χρήση.',
      cPrice: 'Τιμή cloud GH200 ανά GPU-ώρα', cHint: 'Αγορά Οκτωβρίου 2026: $1,99–2,75 ανά ώρα.',
      model: 'Μοντέλο API για σύγκριση', head: 'Επιβαρυμένο κόστος ανά άτομο',
      options: { api: 'API', daedalus: 'ΔΑΙΔΑΛΟΣ', cloud: 'Cloud GH200', own: 'Ιδιόκτητες GPU' },
      rows: { gpus: 'GPUs σε συνεχή λειτουργία', compute: 'Υπολογιστική ισχύς', energy: 'Ενέργεια', staff: 'Προσωπικό', software: 'Λογισμικό & συμμόρφωση', hosting: 'Φιλοξενία εφαρμογής', total: 'Σύνολο ανά έτος', upfront: 'Αρχική δαπάνη', data: 'Δεδομένα στην Ελλάδα' },
      data: { api: 'Όχι, τρίτος πάροχος', daedalus: 'Ναι, Λαύριο', cloud: 'Συνήθως όχι', own: 'Ναι' },
      included: 'στην τιμή',
      share: n => `${n} GH200 είναι περίπου το ${Math.round(n / DAEDALUS_GPUS * 100)}% του ΔΑΙΔΑΛΟΥ· τόση συνεχής κατανομή δύσκολα δίνεται μέσω προσκλήσεων.`,
      energyTitle: 'Η πραγματική ανάγκη για ενέργεια',
      energyLede: 'Η δουλειά αυτή καθαυτή, δηλαδή η ανάγνωση και η γραφή των tokens, θέλει ελάχιστη ενέργεια. Το κόστος είναι να μένουν οι GPU ανοιχτές όλο το εικοσιτετράωρο. Οι νεότερες γενιές χωρούν το ίδιο μοντέλο σε λιγότερες GPU και γράφουν περισσότερα tokens ανά κιλοβατώρα.',
      eCols: ['Γενιά', 'Μνήμη / GPU', 'Ισχύς / GPU', 'tokens/s ανά GPU', 'GPUs για το μοντέλο', 'Ενέργεια για τη δουλειά', 'Ενέργεια σε συνεχή λειτουργία', 'Wh ανά 1.000 tokens'],
      perYear: '/έτος', estimate: 'εκτίμηση',
      notes: [
        '<strong>Οι GH200 του ΔΑΙΔΑΛΟΥ είναι μια γενιά πίσω.</strong> Είναι Hopper (2023). Ένα Blackwell Ultra γράφει περίπου 3,5 φορές περισσότερα tokens ανά δευτερόλεπτο και έχει τριπλάσια μνήμη, οπότε ένα μεγάλο μοντέλο χρειάζεται περίπου 4 φορές λιγότερες GPU. Για τη ζήτηση της ΠΟΛΙΤΕΙΑΣ ο ΔΑΙΔΑΛΟΣ αρκεί με το παραπάνω· για νέα, πολύ μεγάλα μοντέλα θέλει περισσότερες GPU ανά αντίγραφο.',
        '<strong>Η παλιά παραδοχή της σελίδας.</strong> Ο υπολογιστής στην κορυφή υποθέτει 1,3 kW ανά GPU κλάσης H200/B200. Οι νέες GPU τραβούν περισσότερο (B300 έως 1,4 kW, Rubin 1,8–2,3 kW), αλλά κάθε token κοστίζει λιγότερη ενέργεια, και χρειάζονται λιγότερες για το ίδιο μοντέλο.',
        '<strong>Τι σημαίνει «δωρεάν».</strong> Σήμερα η EuroHPC δίνει πρόσβαση χωρίς χρέωση για έρευνα ανοιχτής επιστήμης, και οι φορείς του δημοσίου είναι επιλέξιμοι· ο Φάρος, το ελληνικό AI Factory, δίνει πρόσβαση σε νεοφυείς και μικρομεσαίες επιχειρήσεις. Η πρόσβαση γίνεται με προσκλήσεις και για ορισμένο χρόνο. Για μόνιμη παραγωγική λειτουργία χρειάζεται συμφωνία με το ΕΔΥΤΕ (GRNET), και η εμπορική χρήση χρεώνεται με τιμή που ορίζεται ανά σύστημα. Η ενέργεια του ΔΑΙΔΑΛΟΥ περιλαμβάνεται στην πρόσβαση.',
        '<strong>Δωρεάν για το έργο, όχι για τον φορολογούμενο.</strong> Ο ΔΑΙΔΑΛΟΣ πληρώθηκε ήδη από την EuroHPC και το Ελλάδα 2.0 (€36 εκ. για πάνω από 2.000 GH200). Η ιδιόκτητη υποδομή εθνικής κλίμακας στην κορυφή της σελίδας χρειάζεται περίπου €48 εκ. αρχικά.',
        '<strong>Σε κλίμακα έργου, το API είναι φθηνότερο.</strong> Η ζήτηση εδώ είναι μικρή, οπότε το κόστος το ορίζουν οι άνθρωποι και η συμμόρφωση. Από τις επιλογές που κρατούν τα δεδομένα στην Ελλάδα και τα μοντέλα ανοιχτά, ο ΔΑΙΔΑΛΟΣ είναι η φθηνότερη.',
      ],
      assumptions: `Παραδοχές: ίδια ζήτηση με τη λειτουργία API παραπάνω (8.000/4.000 tokens ανά πρόταση, 1.500/700 ανά ερώτηση, ${DAYS_PER_YEAR} ημέρες)· μνήμη ${String(MEMORY_FACTOR).replace('.', ',')} GB ανά δισ. παραμέτρους, GPUs ανά αντίγραφο στρογγυλεμένες σε δύναμη του 2· ταχύτητα από MLPerf v5.1 (Llama 2 70B), ανάγνωση εισόδου ${PREFILL_SPEEDUP}× ταχύτερη από τη γραφή· GPU σε αναμονή ${IDLE * 100}% της ισχύος· PUE ΔΑΙΔΑΛΟΥ ${String(PUE.daedalus).replace('.', ',')}, ιδιόκτητου χώρου ${String(PUE.own).replace('.', ',')}· ρεύμα €${String(EUR_PER_KWH).replace('.', ',')}/kWh· κόστος GPU B200 €35 χιλ., B300 €45 χιλ., Rubin €60 χιλ. (εκτίμηση), απόσβεση 5 ετών· προσωπικό API ${STAFF.api}, ΔΑΙΔΑΛΟΣ ${STAFF.daedalus}, cloud ${STAFF.cloud}, ιδιόκτητες ${STAFF.own}· λογισμικό & συμμόρφωση €0,5 εκ., φιλοξενία €60 χιλ.· ισοτιμία 1 $ ≈ €${String(FX).replace('.', ',')}.`,
      sources: 'Πηγές',
    },
    en: {
      eyebrow: 'Update · 21 October 2026',
      title: 'The third option: DAEDALUS',
      lede: 'Greece’s national supercomputer DAEDALUS was inaugurated on 19 October 2026 in Lavrion. With it, POLITEIA can run open-weight models inside Greece without building a data centre of its own. Below, four ways to serve the same demand at project scale, and the real energy need per GPU generation.',
      banner: 'illustrative — requires a formal feasibility study',
      facts: [['85.69 PF', 'sustained (115 PF peak)'], ['2,000+', 'NVIDIA GH200 (Hopper), HPE, liquid cooled'], ['#31 · #23', 'TOP500 · Green500, June 2026'], ['€36M', 'acquisition: 35% EuroHPC, 65% Greece 2.0']],
      inputs: 'Inputs', results: 'Annual cost per option', breakdown: 'Breakdown',
      proposals: 'Proposals per day', qa: 'Citizen questions per day',
      params: 'Open-weight model size', paramsUnit: 'billion parameters', paramsHint: `FP8, with ${REPLICAS} copies for availability. This sets how many GPUs each option needs.`,
      gen: 'GPU generation for an own purchase',
      dPrice: 'DAEDALUS price per GPU-hour', dFree: 'free access', dHint: '€0 under EuroHPC or Pharos access; drag for commercial use.',
      cPrice: 'Cloud GH200 price per GPU-hour', cHint: 'Market, October 2026: $1.99–2.75 per hour.',
      model: 'API model to compare', head: 'Loaded cost per person',
      options: { api: 'API', daedalus: 'DAEDALUS', cloud: 'Cloud GH200', own: 'Own GPUs' },
      rows: { gpus: 'GPUs running continuously', compute: 'Compute', energy: 'Energy', staff: 'Staff', software: 'Software & compliance', hosting: 'App hosting', total: 'Total per year', upfront: 'Upfront', data: 'Data stays in Greece' },
      data: { api: 'No, third party', daedalus: 'Yes, Lavrion', cloud: 'Usually not', own: 'Yes' },
      included: 'in price',
      share: n => `${n} GH200 is about ${Math.round(n / DAEDALUS_GPUS * 100)}% of DAEDALUS; that much continuous allocation is hard to get through calls.`,
      energyTitle: 'The real energy need',
      energyLede: 'The work itself, reading and writing the tokens, takes very little energy. What costs is keeping the GPUs on around the clock. Newer generations fit the same model on fewer GPUs and write more tokens per kilowatt-hour.',
      eCols: ['Generation', 'Memory / GPU', 'Power / GPU', 'tokens/s per GPU', 'GPUs for the model', 'Energy for the work', 'Energy running continuously', 'Wh per 1,000 tokens'],
      perYear: '/yr', estimate: 'estimate',
      notes: [
        '<strong>DAEDALUS’s GH200 are a generation behind.</strong> They are Hopper (2023). A Blackwell Ultra writes about 3.5 times as many tokens per second and has three times the memory, so a large model needs about 4 times fewer GPUs. For POLITEIA’s demand DAEDALUS is more than enough; new, very large models need more GPUs per copy on it.',
        '<strong>The page’s old assumption.</strong> The calculator at the top assumes 1.3 kW per H200/B200-class GPU. New GPUs draw more (B300 up to 1.4 kW, Rubin 1.8–2.3 kW), but each token takes less energy, and fewer GPUs are needed for the same model.',
        '<strong>What “free” means.</strong> EuroHPC currently gives access free of charge for open-science research, and public-sector bodies are eligible; Pharos, the Greek AI Factory, opens access to startups and SMEs. Access comes through calls and for a set time. Permanent production use needs an agreement with GRNET, and commercial use is charged at a price set per system. DAEDALUS’s energy is included in the access.',
        '<strong>Free for the project, not for the taxpayer.</strong> DAEDALUS has already been paid for by EuroHPC and Greece 2.0 (€36M for more than 2,000 GH200). The national-scale sovereign infrastructure at the top of the page needs about €48M upfront.',
        '<strong>At project scale the API is cheaper.</strong> Demand here is small, so people and compliance drive the cost. Of the options that keep data in Greece and models open, DAEDALUS is the cheapest.',
      ],
      assumptions: `Assumptions: same demand as the API mode above (8,000/4,000 tokens per proposal, 1,500/700 per question, ${DAYS_PER_YEAR} days); memory ${MEMORY_FACTOR} GB per billion parameters, GPUs per copy rounded to a power of 2; speed from MLPerf v5.1 (Llama 2 70B), input read ${PREFILL_SPEEDUP}× faster than output is written; idle GPUs draw ${IDLE * 100}% of working power; PUE DAEDALUS ${PUE.daedalus}, own hall ${PUE.own}; power €${EUR_PER_KWH}/kWh; GPU cost B200 €35k, B300 €45k, Rubin €60k (estimate), 5-year amortisation; staff API ${STAFF.api}, DAEDALUS ${STAFF.daedalus}, cloud ${STAFF.cloud}, own ${STAFF.own}; software & compliance €0.5M, hosting €60k; $1 ≈ €${FX}.`,
      sources: 'Sources',
    },
  };

  const lang = () => (document.documentElement.lang || 'el').startsWith('en') ? 'en' : 'el';
  const loc = l => (l === 'en' ? 'en-GB' : 'el-GR');
  const money = (n, l) => new Intl.NumberFormat(loc(l), { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(Math.round(n));
  const price = (n, l) => new Intl.NumberFormat(loc(l), { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
  const count = (n, l, digits = 0) => new Intl.NumberFormat(loc(l), { maximumFractionDigits: digits }).format(n);
  const energy = (kwh, l) => kwh >= 1000 ? `${count(kwh / 1000, l, 1)} MWh` : `${count(kwh, l)} kWh`;
  const pow2 = n => 2 ** Math.ceil(Math.log2(Math.max(1, n)));

  function demand(s) {
    return {
      tokensIn: (s.proposals * PROPOSAL_IN + s.qa * QA_IN) * DAYS_PER_YEAR,
      tokensOut: (s.proposals * PROPOSAL_OUT + s.qa * QA_OUT) * DAYS_PER_YEAR,
    };
  }
  // GPUs, GPU-hours of real work and yearly energy for one generation, at a given PUE.
  function fleet(gen, s, pue) {
    const g = GEN[gen], d = demand(s);
    const gpus = REPLICAS * pow2(s.params * MEMORY_FACTOR / g.memGB);
    const workHours = (d.tokensOut / g.tps + d.tokensIn / (g.tps * PREFILL_SPEEDUP)) / 3600;
    const utilisation = Math.min(1, workHours / (gpus * HOURS));
    return {
      gpus, workHours,
      workKwh: workHours * g.kw * pue,
      runKwh: gpus * HOURS * g.kw * pue * (IDLE + (1 - IDLE) * utilisation),
      whPer1k: g.kw * pue * 1000 / g.tps / 3.6,   // kW → W, per token → per 1,000 tokens, J → Wh
    };
  }
  function costs(s) {
    const model = MODELS.find(m => m.id === s.model) || MODELS[0], d = demand(s);
    const hopper = fleet('gh200', s, PUE.daedalus), own = fleet(s.gen, s, PUE.own), g = GEN[s.gen];
    const base = key => ({ staff: STAFF[key] * s.head, software: SOFTWARE, hosting: HOSTING, energy: 0, upfront: 0, gpus: 0 });
    const rows = {
      api: { ...base('api'), compute: (d.tokensIn / 1e6 * model.inUsd + d.tokensOut / 1e6 * model.outUsd) * FX },
      daedalus: { ...base('daedalus'), gpus: hopper.gpus, compute: hopper.gpus * HOURS * s.dPrice, energyIncluded: true },
      cloud: { ...base('cloud'), gpus: hopper.gpus, compute: hopper.gpus * HOURS * s.cPrice, energyIncluded: true },
      own: { ...base('own'), gpus: own.gpus, compute: own.gpus * g.capex / 5, energy: own.runKwh * EUR_PER_KWH, upfront: own.gpus * g.capex },
    };
    for (const r of Object.values(rows)) r.total = r.compute + r.energy + r.staff + r.software + r.hosting;
    return { rows, hopper };
  }


  // ---- The DAEDALUS row as a background elevation behind «Η αντιστάθμιση» ----
  // Drawn from GRNET's photograph of the system at the HPE factory: open racks with bands of
  // connectors and looped cables, ribbed cooling hoses and yellow power sockets on top, a cooling
  // unit with elbow pipes, filters and orange pumps, an end panel with a light strip, the busbar,
  // cable tray and drops overhead, the raised floor with water pipes under it, and the roof trusses
  // of the old Lavrion power station. Straight elevation, no perspective; it fades out to the left.
  const HALL_TEXT = {
    el: { aria: 'Όψη της σειράς του υπερυπολογιστή ΔΑΙΔΑΛΟΣ: ντουλάπες με καλώδια, μονάδα υγρής ψύξης, τροφοδοσία από πάνω και σωλήνες νερού κάτω από το πάτωμα.',
      power: 'ΤΡΟΦΟΔΟΣΙΑ', nodes: 'ΚΟΜΒΟΙ GH200', cdu: 'ΜΟΝΑΔΑ ΥΓΡΗΣ ΨΥΞΗΣ', floor: 'ΨΕΥΔΟΠΑΤΩΜΑ · ΣΩΛΗΝΕΣ ΝΕΡΟΥ', title: 'ΔΑΙΔΑΛΟΣ · ΟΨΗ ΣΕΙΡΑΣ', metre: 'μ' },
    en: { aria: 'Elevation of the DAEDALUS supercomputer row: cabled racks, a liquid-cooling unit, power overhead and water pipes under the floor.',
      power: 'POWER', nodes: 'GH200 NODES', cdu: 'LIQUID-COOLING UNIT', floor: 'RAISED FLOOR · WATER PIPES', title: 'DAEDALUS · ROW ELEVATION', metre: 'm' },
  };
  function hallSvg(T) {
    const W = 64, X0 = 430, TOP = 96, FLOOR = 246, SLOTS = 10, CDU_SLOT = 4, M = 68;   // M: drawing units per metre
    const xEnd = X0 + SLOTS * W;
    let seed = 11; const rand = () => (seed = seed * 16807 % 2147483647) / 2147483647;
    const ln = (x1, y1, x2, y2, c = 'ln') => `<line class="${c}" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"/>`;
    const rect = (x, y, w, h, c = 'ln', r = 0) => `<rect class="${c}" x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}"${r ? ` rx="${r}"` : ''}/>`;
    const path = (d, c = 'ln') => `<path class="${c}" d="${d}"/>`;
    let o = '';

    // Roof trusses of the old power station.
    o += ln(260, 3, 1100, 3, 'tr') + ln(260, 17, 1100, 17, 'tr');
    for (let x = 260, k = 0; x < 1100; x += 34, k++) o += ln(x, 3, x, 17, 'tr') + (k % 2 ? ln(x, 3, x + 34, 17, 'tr') : ln(x, 17, x + 34, 3, 'tr'));
    // Hangers, busbar with tap-off boxes, perforated cable tray.
    for (let x = 400; x < 1100; x += 150) o += ln(x, 17, x, 70, 'dt');
    o += rect(372, 38, 724, 6);
    const taps = [];
    for (let x = 392; x < 1090; x += 34) { o += rect(x, 44, 12, 10); taps.push(x + 6); if (Math.round(x / 34) % 3 === 0) o += rect(x + 4, 47, 4, 3, 'gold'); }
    o += rect(352, 62, 744, 6);
    for (let x = 356; x < 1094; x += 9) o += `<circle class="dot" cx="${x}" cy="65" r=".9"/>`;

    // The row: end panel with its light strip, then racks and the cooling unit.
    o += rect(X0 - 18, TOP, 18, FLOOR - TOP) + ln(X0 - 9, TOP + 14, X0 - 9, FLOOR - 12, 'strip');
    o += rect(xEnd, TOP, 14, FLOOR - TOP);
    for (let i = 0; i < SLOTS; i++) {
      const x = X0 + i * W, mid = x + W / 2;
      o += rect(x, TOP, W, FLOOR - TOP) + ln(x + 5, TOP, x + 5, FLOOR, 'dt') + ln(x + W - 5, TOP, x + W - 5, FLOOR, 'dt');
      // Cable drop from the nearest tap-off box, and the ribbed cooling hoses looping on top.
      const tap = taps.reduce((a, b) => Math.abs(b - mid) < Math.abs(a - mid) ? b : a);
      o += path(`M${tap} 54 C${tap} 72 ${mid - 6} 70 ${mid - 6} ${TOP}`, 'cb');
      o += path(`M${x + 9} ${TOP} C${x + 9} ${TOP - 18} ${mid - 2} ${TOP - 20} ${mid - 2} ${TOP - 4}`, 'hose');
      o += path(`M${mid + 4} ${TOP} C${mid + 4} ${TOP - 16} ${x + W - 9} ${TOP - 18} ${x + W - 9} ${TOP - 3}`, 'hose');
      if (i === CDU_SLOT) {
        // Cooling unit: shelves, two elbow pipes, two filters, two pumps feeding the floor.
        for (const y of [152, 198, 232]) o += ln(x + 5, y, x + W - 5, y);
        for (const px of [x + 16, x + 38]) {
          o += path(`M${px} 196 V112 Q${px} ${TOP + 4} ${px + 8} ${TOP + 4}`, 'pipe-out') + path(`M${px + 9} 196 V114 Q${px + 9} ${TOP + 12} ${px + 14} ${TOP + 12}`, 'pipe-out');
        }
        o += rect(x + 9, 158, 10, 34, 'ln', 4) + rect(x + 45, 158, 10, 34, 'ln', 4) + ln(x + 9, 164, x + 19, 164) + ln(x + 45, 164, x + 55, 164);
        for (const px of [x + 11, x + 35]) o += rect(px, 204, 18, 24, 'pump', 5) + `<circle class="pump" cx="${px + 9}" cy="216" r="4.5"/>` + ln(px + 6, 228, px + 6, FLOOR) + ln(px + 12, 228, px + 12, FLOOR);
        continue;
      }
      // Compute rack: power bar with yellow sockets, then bands of connectors and looped cables.
      o += rect(x + 8, TOP + 3, W - 16, 8);
      for (let k = 0; k < 4; k++) o += `<circle class="gold" cx="${x + W - 28 + k * 5}" cy="${TOP + 7}" r="1.8"/>`;
      for (let y0 = TOP + 18; y0 < FLOOR - 20; y0 += 25) {
        for (let px = x + 9; px <= x + W - 9; px += 4.2) o += ln(px, y0, px, y0 + 6, 'plug');
        for (let k = 0; k < 4; k++) o += path(`M${x + 9 + k * 3} ${y0 + 8} Q${mid} ${y0 + 16 + k * 2.4} ${x + W - 9 - k * 3} ${y0 + 8}`, 'loop');
        const a = x + 9 + rand() * 18, b = x + W - 9 - rand() * 18;
        o += path(`M${a.toFixed(1)} ${y0 + 8} Q${((a + b) / 2).toFixed(1)} ${(y0 + 22 + rand() * 3).toFixed(1)} ${b.toFixed(1)} ${y0 + 8}`, 'loop');
      }
    }

    // Raised floor: tiles on pedestals, two water pipes running underneath.
    o += ln(300, FLOOR, 1100, FLOOR) + ln(300, 270, 1100, 270, 'dt');
    for (let x = 304; x < 1100; x += 42) o += ln(x, FLOOR, x, 270, 'dt');
    o += path(`M330 256 H1100`, 'flow') + path(`M330 263 H1100`, 'flow back');

    // Labels, like a technical sheet.
    const label = (tx, ty, x, y, text) => ln(x, y, x, ty + 4, 'lead') + ln(x, ty + 4, tx - 4, ty + 4, 'lead') + `<text x="${tx}" y="${ty + 7}">${text}</text>`;
    o += label(1010, 24, 980, 41, T.power);
    o += label(870, 84, 846, TOP + 30, T.nodes);
    const cx = X0 + CDU_SLOT * W;
    o += ln(cx + 20, 228, cx + 20, 279, 'lead') + `<text x="${cx + 26}" y="282">${T.cdu}</text>`;   // under the floor, clear of the racks
    o += `<text x="${1100}" y="282" text-anchor="end">${T.floor}</text>`;
    o += `<text class="t" x="${1100}" y="294" text-anchor="end">${T.title}</text>`;
    // Scale bar: two metres.
    o += ln(330, 288, 330 + 2 * M, 288, 'lead') + [0, 1, 2].map(k => ln(330 + k * M, 284, 330 + k * M, 292, 'lead') + `<text x="${330 + k * M}" y="282" text-anchor="middle">${k}</text>`).join('') + `<text x="${338 + 2 * M}" y="291">${T.metre}</text>`;
    return `<svg viewBox="0 0 1104 300" preserveAspectRatio="xMaxYMax meet" role="img" aria-label="${T.aria}">${o}</svg>`;
  }
  function mountHall(host, tradeoff) {
    const hall = document.createElement('div');
    hall.className = 'daid-hall';
    tradeoff.after(hall);
    host.classList.add('daid-host');
    const render = () => { hall.innerHTML = hallSvg(HALL_TEXT[lang()]); place(); };
    // Behind the text on wide screens: from halfway up the empty space above «Η αντιστάθμιση» to its
    // bottom, across the whole width; under the text on narrow screens.
    function place() {
      const wide = matchMedia('(min-width: 1024px)').matches;
      hall.classList.toggle('bg', wide);
      if (!wide) return;
      const st = getComputedStyle(host), top0 = host.getBoundingClientRect().top;
      const t = tradeoff.getBoundingClientRect(), results = tradeoff.previousElementSibling?.children?.[1];
      const last = results?.lastElementChild || results;   // the column itself stretches to the grid's height
      const above = last ? Math.max(0, t.top - last.getBoundingClientRect().bottom) : 120;
      const top = t.top - top0 - above / 2, bottom = t.bottom - top0 + 12;
      hall.style.setProperty('--hall-top', `${Math.round(top)}px`);
      hall.style.setProperty('--hall-h', `${Math.round(bottom - top)}px`);
      hall.style.setProperty('--hall-left', st.paddingLeft);
      hall.style.setProperty('--hall-right', st.paddingRight);
    }
    render();
    const resize = new ResizeObserver(place); resize.observe(host);
    const langWatch = new MutationObserver(render); langWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    return { stop: () => { resize.disconnect(); langWatch.disconnect(); hall.remove(); host.classList.remove('daid-host'); } };
  }

  function mount(anchor) {
    const section = document.createElement('section');
    section.className = `daid ${anchor.className}`;
    section.setAttribute('aria-labelledby', 'daid-title');
    anchor.after(section);
    const s = { proposals: 40, qa: 2000, params: 700, gen: 'b300', dPrice: 0, cPrice: 1.95, model: 'sonnet', head: 70_000 };

    const slider = (id, label, value, min, max, step, shown, hint = '') => `<div class="field"><div class="row"><label for="daid-${id}">${label}</label><output id="daid-${id}-out">${shown}</output></div>
      <input id="daid-${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}">${hint ? `<small>${hint}</small>` : ''}</div>`;
    function render() {
      const l = lang(), T = TEXT[l];
      section.innerHTML = `
        <div><p class="eyebrow">${T.eyebrow}</p><h2 id="daid-title">${T.title}</h2><p class="lede">${T.lede}</p></div>
        <div class="banner">${T.banner}</div>
        <div class="facts">${T.facts.map(([b, t]) => `<div class="fact"><b>${b}</b><span>${t}</span></div>`).join('')}</div>
        <div class="grid">
          <div class="card"><p class="label">${T.inputs}</p><div class="inputs">
            ${slider('proposals', T.proposals, s.proposals, 1, 500, 1, count(s.proposals, l))}
            ${slider('qa', T.qa, s.qa, 0, 50000, 100, count(s.qa, l))}
            ${slider('params', T.params, s.params, 30, 2000, 10, `${count(s.params, l)} ${T.paramsUnit}`, T.paramsHint)}
            <div class="field"><label for="daid-gen">${T.gen}</label><select id="daid-gen">${['b200', 'b300', 'rubin'].map(k => `<option value="${k}"${k === s.gen ? ' selected' : ''}>${GEN[k].name} (${GEN[k].year})${GEN[k].estimate ? ` · ${T.estimate}` : ''}</option>`).join('')}</select></div>
            ${slider('dprice', T.dPrice, s.dPrice, 0, 3, .05, s.dPrice ? price(s.dPrice, l) : T.dFree, T.dHint)}
            ${slider('cprice', T.cPrice, s.cPrice, 1, 4, .05, price(s.cPrice, l), T.cHint)}
            ${slider('head', T.head, s.head, 45000, 120000, 1000, money(s.head, l))}
            <div class="field"><label for="daid-model">${T.model}</label><select id="daid-model">${MODELS.map(m => `<option value="${m.id}"${m.id === s.model ? ' selected' : ''}>${m.name} · $${m.inUsd} / $${m.outUsd}</option>`).join('')}</select></div>
          </div></div>
          <div class="card"><p class="label">${T.results}</p><div class="bars" id="daid-bars"></div><p class="warn" id="daid-warn" hidden></p>
            <p class="label" style="margin-top:22px">${T.breakdown}</p><div class="table"><table id="daid-table"></table></div></div>
        </div>
        <div class="card"><p class="label">${T.energyTitle}</p><p class="lede" style="margin:0 0 16px">${T.energyLede}</p><div class="table"><table id="daid-energy"></table></div></div>
        <div class="notes">${T.notes.map(n => `<p>${n}</p>`).join('')}<p>${T.assumptions}</p></div>
        <div><p class="label">${T.sources}</p><div class="sources">${SOURCES.map(([t, u]) => `<a href="${u}" target="_blank" rel="noopener noreferrer">${t} ↗</a>`).join('')}</div></div>`;
      const bind = (id, key, fmt) => section.querySelector(`#daid-${id}`).addEventListener('input', e => {
        s[key] = Number(e.target.value); section.querySelector(`#daid-${id}-out`).textContent = fmt(s[key]); update();
      });
      bind('proposals', 'proposals', v => count(v, l)); bind('qa', 'qa', v => count(v, l));
      bind('params', 'params', v => `${count(v, l)} ${T.paramsUnit}`);
      bind('dprice', 'dPrice', v => v ? price(v, l) : T.dFree); bind('cprice', 'cPrice', v => price(v, l)); bind('head', 'head', v => money(v, l));
      section.querySelector('#daid-gen').addEventListener('change', e => { s.gen = e.target.value; update(); });
      section.querySelector('#daid-model').addEventListener('change', e => { s.model = e.target.value; update(); });
      update();
    }
    function update() {
      const l = lang(), T = TEXT[l], { rows: c, hopper } = costs(s), keys = ['api', 'daedalus', 'cloud', 'own'];
      const max = Math.max(...keys.map(k => c[k].total));
      section.querySelector('#daid-bars').innerHTML = keys.map(k => `<div class="bar ${k}"><span>${T.options[k]}</span><i style="width:${(c[k].total / max * 100).toFixed(1)}%"></i><b>${money(c[k].total, l)}</b></div>`).join('');
      const head = `<thead><tr><th></th>${keys.map(k => `<th class="${k}">${k === 'own' ? `${T.options.own}<br><small>${GEN[s.gen].name}</small>` : T.options[k]}</th>`).join('')}</tr></thead>`;
      const row = (label, f, cls = '') => `<tr class="${cls}"><td>${label}</td>${keys.map(k => `<td class="${k}">${f(k)}</td>`).join('')}</tr>`;
      section.querySelector('#daid-table').innerHTML = head + '<tbody>' +
        row(T.rows.gpus, k => c[k].gpus ? count(c[k].gpus, l) : '—') +
        row(T.rows.compute, k => money(c[k].compute, l)) +
        row(T.rows.energy, k => c[k].energy ? money(c[k].energy, l) : c[k].energyIncluded ? T.included : '—') +
        row(T.rows.staff, k => `${money(c[k].staff, l)} <small>(${STAFF[k]})</small>`) +
        row(T.rows.software, k => money(c[k].software, l)) +
        row(T.rows.hosting, k => money(c[k].hosting, l)) +
        row(T.rows.total, k => money(c[k].total, l), 'total') +
        row(T.rows.upfront, k => c[k].upfront ? money(c[k].upfront, l) : '—') +
        row(T.rows.data, k => T.data[k]) + '</tbody>';
      const gens = [['gh200', PUE.daedalus], ['b200', PUE.own], ['b300', PUE.own], ['rubin', PUE.own]];
      section.querySelector('#daid-energy').innerHTML = `<thead><tr>${T.eCols.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>` + gens.map(([k, pue]) => {
        const g = GEN[k], f = fleet(k, s, pue), name = `${g.name} <small>(${g.year})</small>${k === 'gh200' ? ' · ΔΑΙΔΑΛΟΣ' : ''}${g.estimate ? ` · ${T.estimate}` : ''}`;
        return `<tr class="${k === 'gh200' ? 'total' : ''}"><td class="${k === 'gh200' ? 'daedalus' : ''}">${name}</td><td>${g.memGB} GB</td><td>${count(g.kw, l, 2)} kW</td><td>${count(g.tps, l)}</td><td>${count(f.gpus, l)}</td><td>${energy(f.workKwh, l)}${T.perYear}</td><td>${energy(f.runKwh, l)}${T.perYear}</td><td>${count(f.whPer1k, l, 3)}</td></tr>`;
      }).join('') + '</tbody>';
      const warn = section.querySelector('#daid-warn');
      warn.hidden = hopper.gpus < 200;
      warn.textContent = hopper.gpus < 200 ? '' : T.share(hopper.gpus);
    }
    render();
    const langWatch = new MutationObserver(render);
    langWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    return { anchor, section, stop: () => langWatch.disconnect() };
  }

  let mounted = null, pending = 0;
  const route = () => (location.hash.replace(/^#/, '') || '/').split('?')[0];
  function check() {
    pending = 0;
    if (mounted && !mounted.section.isConnected) { mounted.stop(); mounted.rack?.stop(); mounted = null; }
    if (route() !== ROUTE) return;
    // The page's last block is "Η αντιστάθμιση"; the new section goes right after its container.
    const tradeoff = document.querySelector('.mt-12.max-w-3xl.border-t');
    const anchor = tradeoff && tradeoff.parentElement;
    if (!anchor || (mounted && mounted.anchor === anchor)) return;
    if (mounted) { mounted.stop(); mounted.rack?.stop(); mounted.section.remove(); }
    mounted = mount(anchor);
    mounted.rack = mountHall(anchor, tradeoff);
  }
  const later = () => { if (!pending) pending = setTimeout(check, 120); };
  window.addEventListener('hashchange', later);
  const start = () => { new MutationObserver(later).observe(document.body, { childList: true, subtree: true }); check(); };
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
