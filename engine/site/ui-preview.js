/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
/* Simple layout of ipoliteia.gr (built from the UI preview by build_upload.py).
   Keep the five visual identities, source data, and existing form controls. */
(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const simple = true;   // the published site has the Simple layout only
  let context = {}, page = 0, collectionKey = '';
  const PAGE_SIZE = 10;
  function pagination(records, requestedPage = 0) {
    const pages = Math.max(1, Math.ceil(records.length / PAGE_SIZE));
    const current = Math.max(0, Math.min(Number.isFinite(requestedPage) ? Math.floor(requestedPage) : 0, pages - 1));
    const start = current * PAGE_SIZE;
    return {page:current, pages, start, end:Math.min(start+PAGE_SIZE,records.length), total:records.length, items:records.slice(start,start+PAGE_SIZE)};
  }
  const href = (design, city, sector = 'all') => './?' + new URLSearchParams({design, city, sector});
  const solid = (kind, cls = '') => window.PoliteiaSolids.svg(kind, cls);
  const safeLink = raw => { try { const u = new URL(raw); return /^https?:$/.test(u.protocol) ? esc(u.href) : '#'; } catch { return '#'; } };
  function noesis({header, footer, dock, city, sector}) {
    const records = window.POLITEIA.makePoints(city.id, sector.id);
    const count = records.length;
    return `${header}<main id="main" class="noesis-import pv-noesis-restored">
      <section class="noesis-import-bar" aria-label="Νόησις · ΑΝΩ ΠΟΛΙΤΕΙΑ"><span class="overline">${solid('dodecahedron','section-solid')} / ΝΟΗΣΙΣ · ΑΝΩ ΠΟΛΙΤΕΙΑ</span><a href="#pv-collection">${esc(city.name)} · Τοπικοί φάκελοι ↓</a><a href="noesis-app/index.html?revision=20261021-merge" target="_blank" rel="noopener">Πλήρης οθόνη ↗</a></section>
      <iframe id="noesis-app" class="noesis-app-frame" src="noesis-app/index.html?revision=20261021-merge&embedded=citizen" title="ΑΝΩ ΠΟΛΙΤΕΙΑ — εφαρμογή Νόησις" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"></iframe>
      <div class="pv-noesis">
      <section id="pv-collection" class="pv-collection" aria-labelledby="pv-collection-title">
        <div class="pv-collection-head"><div><span class="pv-kicker">ΑΠΟ ΤΗ ΜΕΓΑΛΗ ΕΙΚΟΝΑ, ΣΤΟΝ ΤΟΠΟ ΣΟΥ</span><h2 id="pv-collection-title" tabindex="-1">Μια πρόταση τη φορά.</h2><p>${esc(city.name)} · ${count} φάκελοι με δημόσιες πηγές</p></div><label class="pv-sector">Τομέας<select data-sector-select aria-label="Επιλογή τομέα">${window.POLITEIA.sectors.map(s=>`<option value="${s.id}" ${s.id===sector.id?'selected':''}>${esc(s.name)}</option>`).join('')}</select></label></div>
        <div id="pv-records">${recordCards(records)}</div>
        <p class="pv-collection-note">Σειρά συλλογής · 10 προτάσεις ανά σελίδα. Η σειρά δεν αποτελεί βαθμολογία ή έγκριση.</p>
      </section>
      </div>
    </main>${footer}${dock}`;
  }

  function recordCards(records) {
    const key = `${context.city?.id || ''}|${context.sector?.id || ''}`;
    if (collectionKey !== key) { page = 0; collectionKey = key; }
    const view = pagination(records,page);
    page = view.page;
    return `<div class="pv-result-range" role="status"><span>${view.total?`Προτάσεις <b>${view.start+1}–${view.end}</b> από ${view.total}`:'Καμία πρόταση σε αυτόν τον τομέα'}</span><span>Δημόσιες πηγές · Ανοιχτά ερωτήματα</span></div><div class="pv-record-grid">${view.items.length ? view.items.map((p,i)=>`<article class="pv-record"><div class="pv-record-meta"><span>${esc(p.sector)}</span><span>${String(view.start+i+1).padStart(2,'0')}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.action)}</p><div class="pv-record-status"><span class="pv-dot"></span> Πρόταση προς αξιολόγηση</div><button data-record-id="${esc(p.id)}" data-point-city="${esc(p.cityId)}" class="pv-record-open">Άνοιξε τον φάκελο <span aria-hidden="true">↗</span></button></article>`).join('') : '<p>Δεν υπάρχουν φάκελοι σε αυτόν τον τομέα. Διάλεξε «Όλοι οι τομείς».</p>'}</div>
      ${records.length>PAGE_SIZE?`<nav class="pv-pager" aria-label="Σελίδες προτάσεων"><button data-pv-page="-1" ${page===0?'disabled':''}>← Προηγούμενες 10</button><label>Σελίδα <select data-pv-page-select aria-label="Σελίδα προτάσεων">${Array.from({length:view.pages},(_,i)=>`<option value="${i}" ${page===i?'selected':''}>${i+1} / ${view.pages}</option>`).join('')}</select></label><button data-pv-page="1" ${view.end>=view.total?'disabled':''}>Επόμενες 10 →</button></nav>`:''}`;
  }

  function dossier(p, city, index, total) {
    const t = document.createElement('template');
    t.innerHTML = window.PoliteiaExtras.dossier(p);
    const root = t.content.querySelector('.ex-dossier');
    const rows = [...root.querySelectorAll(':scope > details')];
    const row = label => rows.find(r=>r.querySelector('summary')?.textContent.trim().startsWith(label))?.outerHTML || '';
    const write = root.querySelector('.ex-write');
    write.open = true;
    const submit = write.querySelector('[type="submit"]');
    submit.textContent = 'Κράτα ως πρόχειρο →';
    const exportButton = write.querySelector('[data-ex-action="export"]');
    const more = document.createElement('details');
    more.className='pv-export';
    more.innerHTML='<summary>Περισσότερα</summary>';
    exportButton.parentNode.insertBefore(more, exportButton);
    more.append(exportButton);
    // Reuse the original controls; EX.mount() and delegated form handlers still work.
    return `<div class="context-line"><span>${esc(city.name)}</span><span>${esc(p.sector)}</span><span>Φάκελος ${index+1}/${total}</span></div>
      <h2 id="dialog-title" class="result-title">${esc(p.title)}</h2>
      <div class="pv-truth"><span><i></i>${p.sources?.length?'Δημόσια πηγή διαθέσιμη':'Χωρίς διαθέσιμη πηγή'}</span><span>Σήμερα: δεν έχει επιβεβαιωθεί</span><span>Λύση: προς αξιολόγηση</span></div>
      <section class="ex-dossier pv-dossier" data-ex-panel="${esc(p.id)}">
        <div class="pv-tabs" role="tablist" aria-label="Ο φάκελος σε τρία βήματα">${[['understand','Καταλαβαίνω'],['contribute','Συμμετέχω'],['follow','Παρακολουθώ']].map(([id,name],i)=>`<button id="pv-tab-${id}" role="tab" aria-selected="${i===0}" aria-controls="pv-panel-${id}" tabindex="${i===0?0:-1}" data-pv-tab="${id}">${name}</button>`).join('')}</div>
        <div id="pv-panel-understand" class="pv-tab-panel" role="tabpanel" aria-labelledby="pv-tab-understand">
          <div class="pv-brief-intro"><span class="pv-kicker">ΤΟ ΖΗΤΗΜΑ, ΜΕ ΛΙΓΑ ΛΟΓΙΑ</span><p>${esc(p.problem)}</p><small>${esc(p.locationName)} · ${esc(window.POLITEIA.locationLabel(p))}</small></div>
          <div class="pv-two-col"><section><h3>Τι προτείνεται</h3><p>${esc(p.action)}</p></section><section><h3>Τι χρειάζεται προσοχή</h3><p>${esc(p.counter)}</p></section></div>
          <details class="ex-disclosure"><summary>Πηγές & πραγματική τοποθεσία</summary><div class="ex-inside">${window.POLITEIA.evidenceHTML(p)}${row('Τι γνωρίζουμε')}</div></details>
          <details class="ex-disclosure"><summary>Επιπτώσεις στην καθημερινότητα</summary><div class="ex-inside">${row('Ποιος μπορεί')}${row('Στην καθημερινή')}</div></details>
          <details class="ex-disclosure"><summary>Βήματα, μέτρηση & αρμοδιότητες</summary><div class="ex-inside"><h3>Προτεινόμενη ανταπόκριση</h3><p>${esc(p.architecture)}</p><h3>Πώς θα δούμε τη διαφορά</h3><p>${esc(p.measure)}</p><h3>Αρμόδιοι για αξιολόγηση</h3><p>${esc(p.responsibility)}</p></div></details>
          <div class="pv-panel-next"><span>Έχεις κάτι να προσθέσεις;</span><button class="primary" data-pv-go="contribute">Πρόσθεσε τη συμβολή σου →</button></div>
        </div>
        <div id="pv-panel-contribute" class="pv-tab-panel" role="tabpanel" aria-labelledby="pv-tab-contribute" hidden><p class="pv-panel-intro">Μια εμπειρία ή ένα στοιχείο μπορεί να βοηθήσει. Ξεκίνα με όσα γνωρίζεις.</p><p class="pv-preview-hint">Οι αποστολές δεν έχουν ανοίξει ακόμη. Ό,τι γράψεις μένει πρόχειρο μόνο σε αυτή τη συσκευή.</p>${write.outerHTML}</div>
        <div id="pv-panel-follow" class="pv-tab-panel" role="tabpanel" aria-labelledby="pv-tab-follow" hidden><p class="pv-preview-hint">Δοκιμαστικός χώρος χωρίς πραγματικές υποθέσεις ή αποφάσεις. Οι παρακάτω είναι κενές αρχικές καταστάσεις.</p>${row('Από την πρόταση')}${row('Πώς αξιολογήθηκε')}${row('Οι υποθέσεις')}${row('Ιστορικό')}${row('Διόρθωση')}<p class="ex-status" data-ex-load-status role="status" aria-live="polite"></p><button class="ex-text-button" data-ex-action="reload">Ενημέρωση κατάστασης ↻</button></div>
        <div class="pv-dossier-foot"><button data-pv-correction>Διόρθωση / Ένσταση</button><span>Η πηγή δεν σημαίνει έγκριση.</span><a href="${href('gaia',city.id)}">Δες τον τόπο ↗</a></div>
      </section>`;
  }

  function activateTab(id, focus = false) {
    document.querySelectorAll('[data-pv-tab]').forEach(button=>{
      const active = button.dataset.pvTab===id;
      button.setAttribute('aria-selected',String(active));
      button.tabIndex = active ? 0 : -1;
      if (active && focus) button.focus();
    });
    document.querySelectorAll('.pv-tab-panel').forEach(panel=>panel.hidden=panel.id!==`pv-panel-${id}`);
  }

  // Simple mode on phones: Gaia's map appears inside the place card, between «Ο τόπος σου. Από κοντά.»
  // and the introduction. citizen.js rewrites #gaia-place on every update, so the map cannot live in
  // it: a shell with the card's own look holds a copy of the title, the map, and then the real card
  // (its own title hidden). Re-applied after every render; undone when the screen widens.
  const phone = typeof matchMedia === 'function' ? matchMedia('(max-width: 900px)') : null;   // absent in the Node pagination check
  function placeGaiaMap() {
    const main = $('.gaia-main'), map = $('#citizen-map'), card = $('#gaia-place');
    if (!main || !map || !card) return;
    const stack = $('.pv-gaia-stack');
    if (simple && phone?.matches) {
      if (stack) return;
      const shell = document.createElement('div');
      shell.className = 'pv-gaia-stack gaia-place glass';
      const head = document.createElement('div');
      head.className = 'pv-gaia-head';
      head.setAttribute('aria-hidden', 'true');   // the real title stays in the card for assistive tech
      head.append(...[...card.querySelectorAll(':scope > .overline, :scope > h1')].map(el => el.cloneNode(true)));
      const slot = document.createElement('div');
      slot.className = 'pv-gaia-map';
      slot.append(map, ...main.querySelectorAll(':scope > .map-buttons, :scope > .gaia-map-note'));
      card.before(shell);
      shell.append(head, slot, card);
    } else if (stack) {
      const slot = stack.querySelector('.pv-gaia-map');
      main.prepend(map);
      stack.before(card);
      main.append(...slot.querySelectorAll('.map-buttons, .gaia-map-note'));
      stack.remove();
    } else return;
    window.dispatchEvent(new Event('resize'));
  }
  phone?.addEventListener('change', placeGaiaMap);

  // An edition whose content is still an AI research draft says so on every page and in every dossier,
  // until people of that country have reviewed it (country.json: contentNotice).
  function draftNotice() {
    const note = window.POLITEIA_COUNTRY?.contentNotice;
    if (!note) return;
    if (!$('.pv-draft-pill')) {
      const pill = document.createElement('p');
      pill.className = 'pv-draft-pill';
      pill.setAttribute('role', 'note');
      pill.textContent = note;
      document.body.append(pill);
    }
    const body = $('#dialog-body');
    if (body?.childElementCount && !body.querySelector('.pv-draft-note')) {
      const line = document.createElement('p');
      line.className = 'pv-draft-note';
      line.textContent = note;
      body.prepend(line);
    }
  }

  function mount(next) {
    context = {...context, ...next};
    document.body.classList.toggle('pv-simple',simple);
    // Keep symbol-only navigation; names are available on hover and to assistive tech.
    document.querySelectorAll('.section-dock a').forEach(a=>a.title=a.getAttribute('aria-label'));
    if (simple) {
      const progress = $('[data-ex-progress]')?.closest('details');
      if (progress) progress.open = true;
    }
    document.querySelectorAll('[data-ex-form]').forEach(form=>{
      const button=form.querySelector('[type="submit"]');
      if(button)button.textContent='Κράτα ως πρόχειρο →';
      const captions=form.querySelectorAll(':scope > .ex-caption');
      const destination=captions[captions.length-1];
      if(destination)destination.textContent='Δεν γίνεται ακόμη αποστολή· το κείμενο μένει πρόχειρο σε αυτή τη συσκευή. Όταν ανοίξουν οι αποστολές, θα πηγαίνουν στην τοπική αξιολόγηση, όχι σε δήμο.';
    });
    const records = $('#pv-records');
    if(records) records.innerHTML=recordCards(context.points || []);
    placeGaiaMap();
    draftNotice();
  }

  document.addEventListener('click', event=>{
    const tab=event.target.closest('[data-pv-tab], [data-pv-go]');
    if(tab) {activateTab(tab.dataset.pvTab || tab.dataset.pvGo,!!tab.dataset.pvGo); return;}
    if(event.target.closest('[data-pv-correction]')) {
      activateTab('follow',true);
      const correction=$('[data-ex-form="correction"]');
      if(correction) {correction.closest('details').open=true;correction.querySelector('textarea').focus();} return;
    }
    const pager=event.target.closest('[data-pv-page]');
    if(pager) {page+=Number(pager.dataset.pvPage);$('#pv-records').innerHTML=recordCards(context.points || []);$('#pv-collection-title').focus({preventScroll:true});$('#pv-collection').scrollIntoView({block:'start'});}
  });
  document.addEventListener('keydown', event=>{
    if(!event.target.matches('[data-pv-tab]'))return;
    const tabs=[...document.querySelectorAll('[data-pv-tab]')],i=tabs.indexOf(event.target);
    const next=event.key==='ArrowRight'?(i+1)%tabs.length:event.key==='ArrowLeft'?(i+tabs.length-1)%tabs.length:event.key==='Home'?0:event.key==='End'?tabs.length-1:null;
    if(next!==null){event.preventDefault();activateTab(tabs[next].dataset.pvTab,true);}
  });
  // Submissions are not open yet: forms keep a local draft and send nothing.
  document.addEventListener('submit', event=>{
    const form=event.target.closest('[data-ex-form]');
    if(!form)return;
    event.preventDefault();event.stopImmediatePropagation();
    const status=form.querySelector('[data-ex-status]');
    status.textContent='Κρατήθηκε ως πρόχειρο σε αυτή τη συσκευή. Δεν στάλθηκε πουθενά.';
    status.tabIndex=-1;status.focus();
  },true);
  document.addEventListener('change', event=>{
    if(!event.target.matches('[data-pv-page-select]'))return;
    page=Number(event.target.value);
    $('#pv-records').innerHTML=recordCards(context.points || []);
    $('#pv-collection-title').focus({preventScroll:true});
    $('#pv-collection').scrollIntoView({block:'start'});
  });
  window.PoliteiaPreview={simple,noesis,dossier,mount,pagination};
})();
