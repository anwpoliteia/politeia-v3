/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
/* Politeia Extras: transparent dossiers and a private, local review pilot. */
(() => {
  'use strict';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeURL = value => { try { const u = new URL(value); return /^https?:$/.test(u.protocol) && !u.username && !u.password ? u.href : ''; } catch { return ''; } };
  const link = (url, label) => safeURL(url) ? `<a href="${esc(safeURL(url))}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>` : esc(label);
  const sourceDate = p => Math.max(0, ...(p.sources || []).map(s => /^\d{4}-\d{2}-\d{2}$/.test(s.publishedAt || '') ? (Date.parse(s.publishedAt) || 0) : 0));
  const dateText = value => { if (!value) return 'Δεν έχει δηλωθεί'; const d = new Date(value); return Number.isNaN(d.valueOf()) ? String(value) : d.toLocaleDateString('el-GR', {year:'numeric',month:'short',day:'numeric'}); };
  const types = {experience:'Εμπειρία', evidence:'Στοιχείο', proposal:'Πρόταση', question:'Ερώτημα'};
  const states = {received:'Παραλήφθηκε τοπικά',needs_information:'Χρειάζονται διευκρινίσεις',reviewed:'Εξετάστηκε',declined:'Δεν προχωρά'};
  const stages = {proposal:'Πρόταση',review:'Σε αξιολόγηση',pilot:'Πιλοτική εφαρμογή',evaluation:'Αποτίμηση',paused:'Σε αναμονή',declined:'Δεν προχωρά'};
  const dimensionNames = {evidence:'Στοιχεία',reasoning:'Συλλογισμός',knowledge:'Σχετική γνώση',uncertainty:'Αβεβαιότητα & συνέπειες',checkability:'Δυνατότητα ελέγχου'};
  const dimensionStates = ['Ανεπαρκές','Περιορισμένο','Μερικώς τεκμηριωμένο','Ικανοποιητικό','Ισχυρά τεκμηριωμένο'];
  const evidenceStates = {unreviewed:'Δεν έχει ελεγχθεί',insufficient:'Ανεπαρκή στοιχεία',supported:'Υποστηρίζεται από τα στοιχεία',contradicted:'Αντικρούεται από τα στοιχεία',disputed:'Αμφισβητείται'};
  const cache = new Map();
  const draftPrefix = 'politeia-extras-draft:';
  const receiptPrefix = 'politeia-extras-receipt:';
  const receipts = new Map();
  let context = {}, sort = 'collection', instance = 0, sessionPromise;
  const notice = (root, text, error = false) => { const el = root.querySelector('[data-ex-status]'); if (el) { el.textContent = text; el.classList.toggle('ex-error', error); } };
  function draft(p, kind = 'contribution') {
    try { const x = JSON.parse(localStorage.getItem(draftPrefix + kind + ':' + p.id)); if (x && typeof x === 'object' && !Array.isArray(x)) return x; } catch { /* Optional device storage. */ }
    return {};
  }
  function fields(form) {
    const data = Object.fromEntries(new FormData(form).entries());
    return {...data, publish_consent: form.elements.publish_consent?.checked === true};
  }
  const signature = data => JSON.stringify(Object.keys(data).sort().map(key => [key,data[key]]));
  const receiptKey = form => form.dataset.exForm + ':' + form.dataset.exDossier;
  function savedReceipt(form) {
    const key = receiptKey(form);
    if (receipts.has(key)) return receipts.get(key);
    try { const saved = JSON.parse(localStorage.getItem(receiptPrefix + key)); if (saved?.id && saved.signature) {receipts.set(key,saved);return saved;} } catch { /* Receipts remain available through My cases. */ }
    return null;
  }
  function syncReceipt(form) {
    if (form.dataset.exSending === 'true') return;
    const receipt = savedReceipt(form), submit = form.querySelector('[type="submit"]');
    const unchanged = receipt && receipt.signature === signature(fields(form));
    if (unchanged) {
      submit.disabled = true; submit.textContent = 'Παραλήφθηκε τοπικά ✓'; form.dataset.exReceipt = receipt.id;
      notice(form,`Αυτή η συμβολή έχει ήδη παραληφθεί τοπικά. Κωδικός: ${receipt.id} · ${dateText(receipt.received_at)}. Δες την απάντηση στις «Υποθέσεις μου». Δεν εστάλη σε δημόσιο φορέα.`);
    } else if (form.dataset.exReceipt) {
      delete form.dataset.exReceipt; submit.disabled = false;
      submit.textContent = 'Κράτα ως πρόχειρο →';
      notice(form,'Το κείμενο έχει αλλάξει από την τελευταία παραλαβή. Οι αλλαγές παραμένουν προσχέδιο μέχρι νέα υποβολή.');
    }
  }
  function saveDraft(form, quiet = false) {
    try { localStorage.setItem(draftPrefix + form.dataset.exForm + ':' + form.dataset.exDossier, JSON.stringify(fields(form))); if (!quiet) notice(form, 'Το προσχέδιο αποθηκεύτηκε μόνο σε αυτόν τον browser. Δεν έχει υποβληθεί.'); return true; }
    catch { notice(form, 'Η συσκευή δεν επέτρεψε αποθήκευση. Μπορείς να εξαγάγεις το προσχέδιο ως αρχείο.', true); return false; }
  }
  async function request(path, options = {}) {
    const response = await fetch(path, {credentials:'same-origin', ...options, headers:{'Accept':'application/json', ...(options.body ? {'Content-Type':'application/json'} : {}), ...options.headers}});
    let data; try { data = await response.json(); } catch { throw Error('Η υπηρεσία δεν απάντησε. Το προσχέδιο παραμένει στη συσκευή.'); }
    if (!response.ok) throw Error(data.message || data.error || 'Η ενέργεια δεν ολοκληρώθηκε. Δοκίμασε ξανά.');
    return data;
  }
  function session() { if (!sessionPromise) sessionPromise = request('/api/session').catch(e => { sessionPromise = null; throw e; }); return sessionPromise; }
  function evidence(p) {
    const sources = (p.sources || []).filter(s => safeURL(s.url));
    return `<div class="ex-evidence-grid"><div><b>Πηγή</b><span>${sources.length ? `${sources.length === 1 ? 'Διαθέσιμη δημόσια πηγή' : 'Διαθέσιμες δημόσιες πηγές'}` : 'Δεν έχει προστεθεί πηγή'}</span>${sources.map(s => `<small>${link(s.url,s.publisher || s.title || 'Πηγή')} · Δημοσίευση: ${esc(s.publishedAt || 'χωρίς ημερομηνία')}</small>`).join('')}</div><div><b>Η κατάσταση σήμερα</b><span>Δεν έχει επιβεβαιωθεί</span><small>Η ανάγνωση μιας πηγής ή ο έλεγχος θέσης δεν ισοδυναμεί με σημερινή επιτόπια επιβεβαίωση.</small></div><div><b>Η προτεινόμενη λύση</b><span data-ex-review-badge="${esc(p.id)}">${cache.get(p.id)?.reviews?.length ? 'Υπάρχει καταγεγραμμένη αξιολόγηση συνεισφοράς' : 'Προς αξιολόγηση'}</span><small>Η πρόταση δεν δηλώνεται εγκεκριμένη, χρηματοδοτημένη ή αποδεδειγμένα αποτελεσματική.</small></div></div>`;
  }
  function card(p) {
    return `<details class="ex-card"><summary><span class="ex-dot" aria-hidden="true"></span>Τι γνωρίζουμε <span class="ex-card-hint">Πηγή ≠ έγκριση</span></summary><div class="ex-card-body">${evidence(p)}</div></details>`;
  }
  const impactBySector = {
    environment:['Πεζοί, παιδιά, ηλικιωμένοι, κάτοικοι με αναπηρία και εργαζόμενοι στη συντήρηση.','Σκιά και πράσινο χωρίς εμπόδια στην προσβάσιμη όδευση· νερό, συντήρηση και χώρος ριζών.'],
    transport:['Πεζοί, επιβάτες, οδηγοί, ποδηλάτες, κάτοικοι με αναπηρία και επαγγελματίες της περιοχής.','Ασφαλής πρόσβαση, χρόνοι μετακίνησης, φόρτωση, στάσεις και μετατόπιση κυκλοφορίας σε άλλους δρόμους.'],
    health:['Ασθενείς, φροντιστές, εργαζόμενοι υγείας και άνθρωποι που δυσκολεύονται να φτάσουν σε υπηρεσίες.','Πρόσβαση, χρόνος αναμονής, ιδιωτικότητα και ασφαλής συνέχεια φροντίδας.'],
    education:['Παιδιά, μαθητές, γονείς, εκπαιδευτικοί και προσωπικό υποστήριξης.','Ασφαλείς διαδρομές, ισότιμη πρόσβαση και χρόνος για μάθηση και φροντίδα.'],
    housing:['Ενοικιαστές, ιδιοκτήτες, νέοι, ηλικιωμένοι και νοικοκυριά με διαφορετικές ανάγκες.','Προσιτό κόστος, ποιότητα κατοικίας και πιθανός εκτοπισμός κατοίκων.'],
    care:['Άνθρωποι με ανάγκες υποστήριξης, οικογενειακοί και επαγγελματίες φροντιστές.','Αυτονομία, προσβασιμότητα, χρόνος φροντίδας και αξιοπρέπεια.'],
    water:['Κάτοικοι, επιχειρήσεις, αγρότες όπου σχετίζεται και εργαζόμενοι στα δίκτυα.','Ποιότητα και συνέχεια παροχής, επιβάρυνση λογαριασμών και επιπτώσεις στα οικοσυστήματα.']
  };
  function argument(p) {
    const sectorId = p.sectorId || window.POLITEIA?.sectors?.find(s => s.name === p.sector)?.id;
    const x = impactBySector[sectorId] || ['Κάτοικοι, εργαζόμενοι, χρήστες της υπηρεσίας και λιγότερο ορατές ομάδες που επηρεάζονται.','Προσβασιμότητα, ασφάλεια, κόστος και πιθανή μεταφορά επιβάρυνσης σε άλλη περιοχή ή ομάδα.'];
    return `<details class="ex-disclosure ex-impact"><summary>Ποιος μπορεί να επηρεαστεί;</summary><div class="ex-inside"><p class="ex-caption">Ερωτήματα της συντακτικής ομάδας, προς έλεγχο · όχι καταγεγραμμένες μαρτυρίες.</p><dl class="ex-facts"><dt>Ποιοι χρειάζεται να ακουστούν</dt><dd>${esc(x[0])}</dd><dt>Πριν αποφασίσουμε</dt><dd>${esc(x[1])}</dd><dt>Κόστος & εναλλακτικές</dt><dd>Δεν υπάρχει εδώ επιβεβαιωμένος προϋπολογισμός. Να συγκριθούν κόστος δημιουργίας και συντήρησης, ηπιότερη παρέμβαση και μη παρέμβαση.</dd><dt>Ανοικτό ερώτημα του φακέλου</dt><dd>${esc(p.counter || 'Χρειάζεται τεκμηρίωση των επιπτώσεων και των εναλλακτικών.')}</dd></dl><p class="ex-caption">Μια σοβαρή ένσταση δεν σβήνει επειδή μια ιδέα είναι δημοφιλής. Καταγράφεται και απαντάται με λόγους.</p></div></details>`;
  }
  function family(p) {
    if (!p) return '';
    const questions = [['Παιδιά & ασφάλεια','Ποιοι χώροι ή διαδρομές γίνονται ασφαλέστεροι; Για ποιους μπορεί να αυξηθεί ο κίνδυνος;'],['Κόστος νοικοκυριού','Πώς αλλάζουν τα άμεσα έξοδα, οι λογαριασμοί και το κόστος πρόσβασης;'],['Χρόνος για φροντίδα','Κερδίζεται ή μεταφέρεται χρόνος σε άλλους; Σε ποιους ανατίθεται η επιπλέον εργασία;'],['Πρόσβαση & αυτονομία','Μπορούν ηλικιωμένοι και άνθρωποι με αναπηρία να χρησιμοποιούν την παρέμβαση ανεξάρτητα;']];
    return `<details class="ex-disclosure"><summary>Στην καθημερινή ζωή</summary><div class="ex-inside"><p class="ex-caption">Η πρόθεση της πρότασης: ${esc(p.action || p.title)} Οι παρακάτω επιδράσεις δεν έχουν μετρηθεί.</p><div class="ex-life-grid">${questions.map(([name,q])=>`<div><b>${name}</b><p>${q}</p><small>Χρειάζονται στοιχεία πριν και μετά</small></div>`).join('')}</div><p class="ex-caption">Ίση φωνή για κάθε νοικοκυριό, με ή χωρίς παιδιά. Δεν ζητάμε πολιτικές πεποιθήσεις, θρησκεία ή οικογενειακή κατάσταση.</p></div></details>`;
  }
  function contributionForm(p) {
    const d = draft(p), id = `ex-note-${++instance}`;
    return `<details class="ex-disclosure ex-write"><summary>Πρόσθεσε τη δική σου συμβολή</summary><div class="ex-inside"><form class="ex-form" data-ex-form="contribution" data-ex-dossier="${esc(p.id)}" data-ex-city="${esc(p.cityId)}"><fieldset class="ex-type"><legend>Τι θέλεις να μοιραστείς;</legend>${Object.entries(types).map(([value,label])=>`<label><input type="radio" name="type" value="${value}" ${(d.type || 'experience')===value?'checked':''}><span>${label}</span></label>`).join('')}</fieldset><label for="${id}">Η συμβολή σου</label><textarea id="${id}" name="text" rows="4" required maxlength="6000" placeholder="Τι παρατήρησες; Τι γνωρίζεις ή τι θα ήθελες να εξεταστεί;">${esc(d.text || '')}</textarea><p class="ex-caption">Η προσωπική εμπειρία είναι χρήσιμη χωρίς τίτλο σπουδών ή επαγγελματικό κύρος. Ο τύπος «Στοιχείο» δεν σημαίνει ότι το περιεχόμενο έχει επαληθευτεί.</p><details class="ex-more"><summary>Προαιρετικά στοιχεία & σχετική εμπειρία</summary><div class="ex-form-grid"><label>Πηγή ή σχετικός σύνδεσμος<input name="source_url" type="url" maxlength="2000" placeholder="https://…" value="${esc(d.source_url || '')}"></label><label>Ημερομηνία παρατήρησης<input name="observed_at" type="date" value="${esc(d.observed_at || '')}"></label><label>Σχετική εμπειρία<input name="experience" maxlength="1000" placeholder="π.χ. καθημερινή χρήση της διαδρομής" value="${esc(d.experience || '')}"></label><label>Σχετικό επαγγελματικό ή οικονομικό συμφέρον<input name="interest" maxlength="1000" placeholder="Αν υπάρχει, περιέγραψέ το" value="${esc(d.interest || '')}"></label></div><p class="ex-caption">Τα στοιχεία εμπειρίας είναι αυτοδήλωση. Δεν δίνουν επιπλέον ψήφους ή μόνιμη βαθμολογία.</p></details><label class="ex-consent"><input name="publish_consent" type="checkbox" ${d.publish_consent===true?'checked':''}><span>Επιτρέπω να εμφανιστεί επιλεγμένη περίληψη, μετά από αξιολόγηση, στην ΠΟΛΙΤΕΙΑ. Το πλήρες κείμενό μου παραμένει ιδιωτικό.</span></label><div class="ex-actions"><button type="button" class="ex-button" data-ex-action="save">Αποθήκευση προσχεδίου</button><button type="button" class="ex-text-button" data-ex-action="export">Εξαγωγή JSON ↓</button><button type="submit" class="ex-button ex-primary">Κράτα ως πρόχειρο →</button></div><p class="ex-status" data-ex-status role="status" aria-live="polite">Δεν έχει υποβληθεί. Το προσχέδιο αποθηκεύεται σε αυτόν τον browser.</p><p class="ex-caption">Δεν γίνεται ακόμη αποστολή· το κείμενο μένει πρόχειρο σε αυτή τη συσκευή. Όταν ανοίξουν οι αποστολές, θα πηγαίνουν στην τοπική αξιολόγηση, όχι σε δήμο. Μην καταχωρίζεις ευαίσθητα δεδομένα τρίτων.</p></form></div></details>`;
  }
  function correctionForm(p) {
    const d = draft(p,'correction');
    return `<details class="ex-disclosure"><summary>Διόρθωση / Ένσταση</summary><div class="ex-inside"><form class="ex-form" data-ex-form="correction" data-ex-dossier="${esc(p.id)}" data-ex-city="${esc(p.cityId)}"><label>Τι ζητάς;<select name="kind"><option value="correction" ${d.kind!=='appeal'?'selected':''}>Διόρθωση στοιχείου ή ερμηνείας</option><option value="appeal" ${d.kind==='appeal'?'selected':''}>Επανεξέταση δικής μου απόφασης αξιολόγησης</option></select></label><label>Ποιο στοιχείο ή ποια απόφαση χρειάζεται επανεξέταση;<textarea name="text" rows="3" required maxlength="6000" placeholder="Περιέγραψε συγκεκριμένα τι χρειάζεται να ελεγχθεί και γιατί.">${esc(d.text || '')}</textarea></label><div class="ex-form-grid"><label>Υποστηρικτική πηγή (προαιρετική)<input name="source_url" type="url" maxlength="2000" value="${esc(d.source_url || '')}" placeholder="https://…"></label><label>Κωδικός δικής σου υπόθεσης <small>Απαραίτητος για ένσταση · βρίσκεται στις «Υποθέσεις μου»</small><input name="related_id" maxlength="100" value="${esc(d.related_id || '')}"></label></div><div class="ex-actions"><button type="button" class="ex-button" data-ex-action="save">Αποθήκευση προσχεδίου</button><button type="button" class="ex-text-button" data-ex-action="export">Εξαγωγή JSON ↓</button><button type="submit" class="ex-button ex-primary">Κράτα ως πρόχειρο →</button></div><p class="ex-status" data-ex-status role="status" aria-live="polite">Δεν έχει αποσταλεί.</p><p class="ex-caption">Ιδιωτική καταχώριση. Η ένσταση χρειάζεται διαφορετικό αξιολογητή από την αρχική απόφαση. Δεν έχει συμφωνηθεί προθεσμία απάντησης.</p></form></div></details>`;
  }
  function assessment(data) {
    const reviews = data?.reviews || [];
    if (!reviews.length) return `<p>Δεν έχει δημοσιευθεί αξιολόγηση συνεισφοράς για αυτόν τον φάκελο. Οι ιδιωτικές αποφάσεις εμφανίζονται στον συντάκτη στις «Υποθέσεις μου».</p><div class="ex-dimensions">${Object.values(dimensionNames).map(name=>`<div><b>${name}</b><span>Δεν έχει αξιολογηθεί</span></div>`).join('')}</div><p class="ex-caption">Αξιολογούμε συγκεκριμένους ισχυρισμούς, όχι την αξία ενός ανθρώπου. Το «δεν αξιολογήθηκε» δεν σημαίνει «χαμηλή ποιότητα».</p>`;
    const submissions = data.submissions || [];
    return reviews.map(r=>`<article class="ex-review"><div class="ex-review-head"><strong>${esc(r.reviewer?.name || 'Καταγεγραμμένος αξιολογητής')}</strong><small>${esc(dateText(r.created_at))}</small></div><p><b>${esc(evidenceStates[r.evidence_status] || 'Χωρίς συμπέρασμα για τα στοιχεία')}</b></p><p>${esc(r.reason || 'Δεν έχει δοθεί αιτιολογία.')}</p><div class="ex-dimensions">${Object.entries(dimensionNames).map(([key,name])=>{const value = r.dimensions?.[key],label=Number.isInteger(value)&&value>=0&&value<=4?dimensionStates[value]:'Δεν έχει αξιολογηθεί';return `<div><b>${name}</b><span>${esc(label)}${r.dimensions_reasons?.[key]?`<small>${esc(r.dimensions_reasons[key])}</small>`:''}</span></div>`}).join('')}</div><p class="ex-caption">Αφορά τη συνεισφορά ${esc(r.item_id || '')}. Δεν αποτελεί έγκριση έργου ή επαγγελματική πιστοποίηση.</p></article>`).join('') + (submissions.length?`<div class="ex-public-summaries"><b>Συνεισφορές που έχουν άδεια εμφάνισης</b>${submissions.map(s=>`<article class="ex-review"><small>${esc(types[s.type] || 'Συνεισφορά')} · ${esc(dateText(s.reviewed_at))}</small><p>${esc(s.summary)}</p>${safeURL(s.source_url)?`<p>${link(s.source_url,'Σχετική πηγή')}</p>`:''}</article>`).join('')}<p class="ex-caption">Επιλεγμένες περιλήψεις μετά από συναίνεση και αξιολόγηση. Δεν αποτελούν αντιπροσωπευτική εικόνα της κοινής γνώμης.</p></div>`:'');
  }
  function progress(data) {
    const p = data?.progress || {}, stage = p.stage || 'proposal';
    const overdue = p.due_date && !Number.isNaN(Date.parse(p.due_date)) && Date.parse(p.due_date + 'T23:59:59') < Date.now() && !['evaluation','declined'].includes(stage);
    return `<div class="ex-progress-track" aria-label="Κατάσταση: ${esc(stages[stage] || stage)}">${['proposal','review','pilot','evaluation'].map(s=>`<span class="${stage===s?'ex-current':''}">${stages[s]}</span>`).join('')}</div>${!['proposal','review','pilot','evaluation'].includes(stage)?`<p><b>${esc(stages[stage] || stage)}</b></p>`:''}<dl class="ex-facts"><dt>Καταγεγραμμένος υπεύθυνος</dt><dd>${esc(p.owner || 'Δεν έχει οριστεί υπεύθυνος')}</dd><dt>Επόμενη ενέργεια</dt><dd>${esc(p.next_action || 'Δεν έχει καταγραφεί δέσμευση ή προγραμματισμένο βήμα.')}</dd><dt>Ημερομηνία</dt><dd>${esc(dateText(p.due_date))}${overdue?' · Η καταγεγραμμένη ημερομηνία έχει περάσει· χρειάζεται ενημέρωση.':''}</dd>${p.reason?`<dt>Αιτιολογία</dt><dd>${esc(p.reason)}</dd>`:''}${safeURL(p.evidence_url)?`<dt>Σχετικό τεκμήριο</dt><dd>${link(p.evidence_url,'Δες το τεκμήριο')}</dd>`:''}</dl><p class="ex-caption">Το όνομα είναι καταχώριση αξιολογητή· χρειάζεται ανθρώπινος έλεγχος ότι ο υπεύθυνος αποδέχθηκε τον ρόλο. Οι φορείς που προτείνονται στον φάκελο δεν θεωρούνται αυτόματα αποδεχόμενοι υπεύθυνοι. Η προσωπική λίστα βημάτων δεν αλλάζει την κατάσταση του έργου.</p>`;
  }
  function history(data) {
    const items = data?.history || [];
    return items.length ? `<ol class="ex-history">${items.map(h=>{const before=h.details?.before || {},after=h.details?.after || {},reason=after.reason || h.details?.reason;return `<li><time>${esc(dateText(h.at))}</time><b>${esc(h.type === 'progress' ? 'Ενημέρωση πορείας' : h.type || 'Ενημέρωση')}</b><span>${esc(typeof h.actor === 'object' && h.actor ? h.actor.name || h.actor.id : h.actor || '')}</span>${after.stage?`<span>${esc(stages[before.stage] || before.stage || 'Πρόταση')} → ${esc(stages[after.stage] || after.stage)}</span>`:''}${reason?`<p>${esc(reason)}</p>`:''}${after.next_action?`<span>Επόμενη ενέργεια: ${esc(after.next_action)}</span>`:''}${after.owner?`<span>Καταγεγραμμένος υπεύθυνος: ${esc(after.owner)}</span>`:''}${after.due_date?`<span>Ημερομηνία: ${esc(dateText(after.due_date))}</span>`:''}</li>`}).join('')}</ol>` : '<p class="ex-caption">Δεν έχουν καταγραφεί ακόμη αλλαγές στη διαδικασία αυτού του φακέλου.</p>';
  }
  function dossier(p) {
    return `<section class="ex-dossier" data-ex-panel="${esc(p.id)}"><div class="ex-section-head"><span>POLITEIA EXTRAS</span><b>Από την παρατήρηση, στον υπεύθυνο έλεγχο.</b></div>${card(p)}<details class="ex-disclosure"><summary>Πώς αξιολογήθηκε</summary><div class="ex-inside" data-ex-assessment>${assessment(cache.get(p.id))}</div></details>${argument(p)}${family(p)}<details class="ex-disclosure"><summary>Από την πρόταση στην πράξη <span class="ex-summary-state" data-ex-stage>Πρόταση</span></summary><div class="ex-inside" data-ex-progress>${progress(cache.get(p.id))}</div></details>${contributionForm(p)}${correctionForm(p)}<details class="ex-disclosure"><summary>Οι υποθέσεις μου & οι απαντήσεις</summary><div class="ex-inside"><p class="ex-caption">Εμφανίζονται μόνο οι υποθέσεις αυτού του browser. Η αναγνώριση γίνεται με τοπικό cookie· διαγραφή του ή άλλος browser δεν μεταφέρει την πρόσβαση.</p><button class="ex-button" type="button" data-ex-action="mine">Φόρτωση των υποθέσεών μου</button><div data-ex-mine role="status" aria-live="polite"></div></div></details><details class="ex-disclosure"><summary>Ιστορικό αλλαγών</summary><div class="ex-inside" data-ex-history>${history(cache.get(p.id))}</div></details><p class="ex-status" data-ex-load-status role="status" aria-live="polite"></p><button class="ex-text-button" type="button" data-ex-action="reload">Ενημέρωση κατάστασης ↻</button></section>`;
  }
  function transparency() {
    return `<section class="ex-transparency"><div class="ex-section-head"><span>POLITEIA EXTRAS · ΚΑΝΟΝΕΣ 1.0</span><b>Καθαροί κανόνες. Ίση φωνή. Ορατή ευθύνη.</b></div><p>Οι αποστολές δεν έχουν ανοίξει ακόμη: ό,τι γράφεις μένει πρόχειρο σε αυτή τη συσκευή και δεν πηγαίνει πουθενά, ούτε σε κρατικό φορέα. Χρειάζονται πραγματικοί αξιολογητές για να προχωρήσουν.</p><details class="ex-disclosure"><summary>Πώς εμφανίζονται οι προτάσεις</summary><div class="ex-inside"><p>Προεπιλογή: η υπάρχουσα σειρά της συλλογής. Στο Κύμα μπορείς να επιλέξεις τίτλο Α–Ω ή τη νεότερη δημοσίευση πηγής με πλήρη ημερομηνία. Οι ισοβαθμίες κρατούν τη σειρά της συλλογής. Οι αχρονολόγητες πηγές εμφανίζονται στο τέλος της χρονολογικής σειράς.</p><p>Δεν υπάρχει κατάταξη «καλύτερου πολίτη», κρυφή βαθμολογία ή προτεραιότητα βάσει κύρους. Η ουρά αξιολόγησης εμφανίζει τις νέες καταχωρίσεις με ημερομηνία παραλαβής· οι συνεισφορές χωρίς αξιολόγηση δεν χαρακτηρίζονται χαμηλής αξίας.</p></div></details><details class="ex-disclosure"><summary>Ποιος ελέγχει και με ποια κριτήρια</summary><div class="ex-inside"><p>Εξουσιοδοτημένος αξιολογητής καταγράφει όνομα, ημερομηνία και λόγους, και δηλώνει ότι δεν έχει σύγκρουση συμφερόντων. Εξετάζει στοιχεία, συλλογισμό, σχετική γνώση, αβεβαιότητες και δυνατότητα ελέγχου. Η εμπειρία από την καθημερινότητα μετρά· οι τίτλοι δεν δίνουν επιπλέον πολιτικά δικαιώματα.</p><p>Η αξιολόγηση αφορά συγκεκριμένη συμβολή. Δεν αποτελεί επιστημονική ή νομική πιστοποίηση, αντιπροσωπευτική ψηφοφορία ή άδεια υλοποίησης. Οι διαφωνίες και τα ανοικτά ερωτήματα παραμένουν ορατά.</p></div></details><details class="ex-disclosure"><summary>Διορθώσεις, ένσταση και ιδιωτικότητα</summary><div class="ex-inside"><p>Σε κάθε φάκελο υπάρχει «Διόρθωση / Ένσταση». Η επιτυχημένη τοπική υποβολή επιστρέφει κωδικό παραλαβής. Η ένσταση αφορά δική σου προηγούμενη απόφαση και εξετάζεται από διαφορετικό αξιολογητή. Αν δεν υπάρχει διαθέσιμος ανεξάρτητος αξιολογητής, παραμένει σε εκκρεμότητα.</p><p>Τα κείμενα είναι ιδιωτικά εξ ορισμού. Μόνο με δική σου άδεια και επιλογή αξιολογητή εμφανίζεται περίληψη εδώ. Δεν ζητάμε κόμμα, θρησκεία ή οικογενειακή κατάσταση. Η δήλωση εμπειρίας ή συμφέροντος δεν έχει επαληθευτεί αυτόματα.</p><p>Η υπηρεσία καταγράφει αλλαγές. Ο διαχειριστής του υπολογιστή έχει τεχνική πρόσβαση στα αρχεία· αυτό το τοπικό πιλοτικό σύστημα δεν υποκαθιστά ανεξάρτητο θεσμικό έλεγχο.</p></div></details><details class="ex-disclosure"><summary>Τι αλλάξαμε</summary><div class="ex-inside"><ol class="ex-history"><li><time>19 Οκτωβρίου 2026</time><b>Κανόνες 1.0 · νέα έκδοση</b><span>Χωριστή ένδειξη πηγής και επιβεβαίωσης, τύποι συνεισφορών, διαφανείς αξιολογήσεις, επιπτώσεις, ταξινόμηση, καθημερινή ζωή, πρόοδος, διορθώσεις και τοπικός χώρος αξιολόγησης. Η αρχική ιστοσελίδα παραμένει ξεχωριστή.</span></li></ol><p class="ex-caption">Οι ατομικές αποφάσεις και αλλαγές προόδου εμφανίζονται στους αντίστοιχους φακέλους και στις προσωπικές υποθέσεις.</p></div></details></section>`;
  }
  function sortControl() {
    return `<div class="ex-sort"><label>Σειρά εμφάνισης<select data-ex-sort aria-label="Σειρά φακέλων"><option value="collection" ${sort==='collection'?'selected':''}>Σειρά συλλογής</option><option value="source_date" ${sort==='source_date'?'selected':''}>Νεότερη χρονολογημένη πηγή</option><option value="title" ${sort==='title'?'selected':''}>Τίτλος Α–Ω</option></select></label><details class="ex-sort-reason"><summary>Γιατί αυτή η σειρά;</summary><p>Η σειρά συλλογής είναι η αρχική συντακτική σειρά, όχι βαθμολογία αξίας. Η ημερομηνία αφορά δημοσίευση πηγής, όχι πρόσφατη επιβεβαίωση ή προσθήκη πρότασης. Αχρονολόγητες πηγές τελευταίες. Σε ισοβαθμία διατηρείται η σειρά συλλογής. Πέντε φάκελοι ανά σελίδα· όλοι παραμένουν διαθέσιμοι.</p></details></div>`;
  }
  function sortPoints(points) {
    return points.map((p,i)=>({p,i})).sort((a,b)=> (sort==='source_date' ? sourceDate(b.p)-sourceDate(a.p) : sort==='title' ? a.p.title.localeCompare(b.p.title,'el') : 0) || a.i-b.i).map(x=>x.p);
  }
  async function hydrate(panel) {
    const id = panel.dataset.exPanel, status = panel.querySelector('[data-ex-load-status]');
    if (panel.dataset.exLoading === 'true') return;
    panel.dataset.exLoading = 'true'; status.textContent = 'Ανάκτηση καταγεγραμμένων αξιολογήσεων…';
    try {
      const data = await request('/api/dossiers/' + encodeURIComponent(id)); cache.set(id,data);
      if (!panel.isConnected) return;
      panel.querySelector('[data-ex-assessment]').innerHTML = assessment(data);
      panel.querySelector('[data-ex-progress]').innerHTML = progress(data);
      panel.querySelector('[data-ex-history]').innerHTML = history(data);
      panel.querySelector('[data-ex-stage]').textContent = stages[data.progress?.stage] || 'Πρόταση';
      document.querySelectorAll('[data-ex-review-badge]').forEach(el=> {if(el.dataset.exReviewBadge===id) el.textContent = data.reviews?.length ? 'Υπάρχει αξιολόγηση συνεισφοράς' : 'Προς αξιολόγηση';});
      status.textContent = data.preview ? 'Δεν υπάρχουν ακόμη αξιολογήσεις ή αποφάσεις· οι αποστολές δεν έχουν ανοίξει.' : 'Κατάσταση από την τοπική υπηρεσία · ενημερώθηκε τώρα.';
    } catch(e) { status.textContent = 'Δεν ήταν δυνατή η ανάκτηση τρέχουσας κατάστασης. Οι ενδείξεις δεν αποτελούν επιβεβαίωση. ' + e.message; }
    finally { panel.dataset.exLoading = 'false'; }
  }
  function mineHTML(items, dossierId) {
    const filtered = items.filter(item=>item.dossier_id === dossierId);
    if (!filtered.length) return '<p class="ex-caption">Δεν έχουν παραληφθεί υποθέσεις αυτού του browser για αυτόν τον φάκελο. Τα τοπικά προσχέδια δεν εμφανίζονται ως υποβολές.</p>';
    return filtered.map(item=>`<article class="ex-case"><div class="ex-review-head"><strong>${esc(types[item.type] || (item.kind==='appeal'?'Ένσταση':'Διόρθωση'))}</strong><span class="ex-case-status">${esc(states[item.status] || item.status)}</span></div><small>Κωδικός: <code>${esc(item.id)}</code> · ${esc(dateText(item.received_at))}</small><p class="ex-case-text">${esc(item.text)}</p>${(item.decisions || []).length?`<details class="ex-disclosure"><summary>Αιτιολογία & κριτήρια των αποφάσεων</summary><div class="ex-inside">${assessment({reviews:item.decisions})}</div></details><button type="button" class="ex-text-button" data-ex-appeal-id="${esc(item.id)}">Ζήτησε ανεξάρτητη επανεξέταση ↗</button>`:''}</article>`).join('');
  }
  async function loadMine(button) {
    const panel = button.closest('[data-ex-panel]'), holder = panel.querySelector('[data-ex-mine]');
    button.disabled = true; holder.textContent = 'Ανάκτηση…';
    try { await session(); const data = await request('/api/mine'); holder.innerHTML = mineHTML(data.items || [],panel.dataset.exPanel); }
    catch(e) { holder.textContent = e.message; }
    finally { button.disabled = false; }
  }
  document.addEventListener('change',e=> {
    if (e.target.matches('[data-ex-sort]')) { sort = e.target.value; if (typeof context.onSort === 'function') context.onSort(); else if (typeof context.refresh === 'function') context.refresh(); }
    const form = e.target.closest('[data-ex-form]'); if(form) {saveDraft(form,true);syncReceipt(form);}
  });
  document.addEventListener('input',e=> { const form = e.target.closest('[data-ex-form]'); if(form) {saveDraft(form,true);syncReceipt(form);} });
  document.addEventListener('click',e=> {
    const button = e.target.closest('[data-ex-action],[data-ex-appeal-id]'); if(!button) return;
    const form = button.closest('[data-ex-form]');
    if (button.dataset.exAction==='save' && form) saveDraft(form);
    if (button.dataset.exAction==='export' && form) {
      const blob = new Blob([JSON.stringify({format:'politeia-extras-draft-v1',exported_at:new Date().toISOString(),dossier_id:form.dataset.exDossier,city_id:form.dataset.exCity,kind:form.dataset.exForm,...fields(form),delivery:'draft-only'},null,2)],{type:'application/json;charset=utf-8'});
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'politeia-draft-' + form.dataset.exDossier.replace(/[^a-z0-9_-]/gi,'-') + '.json'; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),1000);
      notice(form,'Το προσχέδιο εξήχθη ως αρχείο JSON. Δεν υποβλήθηκε.');
    }
    if(button.dataset.exAction==='mine') loadMine(button);
    if(button.dataset.exAction==='reload') hydrate(button.closest('[data-ex-panel]'));
    if(button.dataset.exAppealId) {
      const target = button.closest('[data-ex-panel]').querySelector('[data-ex-form="correction"]');
      target.elements.kind.value = 'appeal'; target.elements.related_id.value = button.dataset.exAppealId;
      target.closest('details').open = true; saveDraft(target,true); syncReceipt(target); target.elements.text.focus(); target.scrollIntoView({block:'center',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
    }
  });
  document.addEventListener('submit',async e=> {
    const form = e.target.closest('[data-ex-form]'); if(!form) return; e.preventDefault();
    if(form.dataset.exSending==='true') return;
    const data = fields(form), correction = form.dataset.exForm === 'correction';
    if(savedReceipt(form)?.signature === signature(data)) {syncReceipt(form);return;}
    if(!String(data.text || '').trim()) { notice(form,'Γράψε πρώτα τη συμβολή σου.',true); return; }
    if(data.source_url && !safeURL(data.source_url)) { notice(form,'Η πηγή χρειάζεται πλήρη σύνδεσμο https:// ή http://.',true); return; }
    if(correction && data.kind==='appeal' && !String(data.related_id || '').trim()) { notice(form,'Πρόσθεσε τον κωδικό της δικής σου προηγούμενης υπόθεσης από τις «Υποθέσεις μου».',true); return; }
    saveDraft(form,true); form.dataset.exSending='true'; const submit = form.querySelector('[type="submit"]'); submit.disabled=true; notice(form,'Αποστολή μόνο στην τοπική υπηρεσία…');
    try {
      await session();
      const receipt = await request(correction?'/api/corrections':'/api/contributions',{method:'POST',body:JSON.stringify({...data,dossier_id:form.dataset.exDossier,city_id:form.dataset.exCity})});
      if(!receipt.id) throw Error('Δεν επιστράφηκε κωδικός παραλαβής. Έλεγξε τις υποθέσεις σου πριν ξαναστείλεις.');
      const saved = {id:receipt.id,received_at:receipt.received_at,signature:signature(data)};
      receipts.set(receiptKey(form),saved);
      form.dataset.exReceipt = receipt.id;
      try {localStorage.setItem(receiptPrefix + receiptKey(form),JSON.stringify(saved));} catch { /* The server receipt remains accessible through My cases. */ }
      const panel=form.closest('[data-ex-panel]'); if(panel) hydrate(panel);
    } catch(err) { notice(form,'Δεν επιβεβαιώθηκε παραλαβή. ' + err.message,true); submit.disabled=false; }
    finally {form.dataset.exSending='false';syncReceipt(form);}
  });
  function mount(nextContext = {}) {
    context = {...context,...nextContext};
    document.querySelectorAll('[data-ex-form]').forEach(syncReceipt);
    document.querySelectorAll('[data-ex-panel]').forEach(panel=> {if(panel.dataset.exMounted) return;panel.dataset.exMounted='true';hydrate(panel);});
  }
  window.PoliteiaExtras = {card,dossier,argument,family,transparency,mount,sortControl,sortPoints};
})();
