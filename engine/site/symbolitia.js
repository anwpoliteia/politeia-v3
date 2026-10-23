/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
/* Συμπολιτεία: the editions' shared cases (built by tools/federation.py into federation/). */
(() => {
  'use strict';
  const C = window.POLITEIA_COUNTRY, P = window.POLITEIA, $ = s => document.querySelector(s);
  const esc = x => String(x ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const PAGE = 8;
  let shown = PAGE;

  function header() {
    document.title = 'Συμπολιτεία — ' + C.edition.name;
    $('.sy-name').textContent = C.edition.name;
    $('.sy-mark').innerHTML = `<svg viewBox="0 0 100 100" focusable="false"><use href="${esc(C.edition.mark)}"></use></svg>`;
    $('#sy-footer').innerHTML = `<span>© 2026 ${esc(C.edition.name)}</span>`
      + (C.edition.origin ? '' : `<span>${esc(C.edition.credit)}</span>`) + '<a href="COPYRIGHT.md">Πνευματικά δικαιώματα</a>';
  }

  const label = (tags, id) => tags[id]?.label[C.language] || tags[id]?.label.en || id;
  const sectorName = id => P.sectors.find(s => s.id === id)?.name || id;
  const review = m => m.review === 'reviewed' ? 'Ελεγμένοι φάκελοι' : 'Πρόχειρο, χωρίς έλεγχο';

  function members(list) {
    $('#sy-members').innerHTML = list.map(m => `<article class="sy-member${m.edition === C.code ? ' sy-here' : ''}">`
      + `<span class="sy-code">${esc(m.edition.toUpperCase())}</span><h3>${esc(m.name)}</h3><p>${esc(m.country)} · ${esc(m.language)}</p>`
      + `<p><strong>${m.cases}</strong> φάκελοι · ${review(m)}</p>`
      + (m.origin ? '<p class="sy-badge">Η πρωτότυπη έκδοση</p>' : '')
      + (m.edition === C.code ? '<p class="sy-badge">Αυτή η έκδοση</p>' : '')
      + (m.url ? `<a href="${esc(m.url)}" target="_blank" rel="noopener">Επίσκεψη ↗</a>` : '') + '</article>').join('');
  }

  const caseLink = (c, editions) => {
    const source = c.sources[0];
    return `<a href="${esc(source?.url)}" target="_blank" rel="noopener noreferrer">${esc(c.title)} ↗</a>`
      + `<small>${esc(editions[c.edition]?.name)} · ${esc(c.city.name)} · ${esc(sectorName(c.sector))}`
      + (c.review === 'reviewed' ? '' : ' · πρόχειρο') + '</small>';
  };

  function themes(stats, index, tags, editions) {
    $('#sy-themes').innerHTML = stats.sharedThemes.map(t => `<article class="sy-theme"><h3>${esc(label(tags, t.tag))}</h3><ul>`
      + Object.entries(t.editions).map(([edition, e]) => `<li><span class="sy-count">${e.count}</span> ${esc(editions[edition]?.name)}`
        + `<div class="sy-examples">${e.examples.slice(0, 2).map(id => index[id] ? `<p>${caseLink(index[id], editions)}</p>` : '').join('')}</div></li>`).join('')
      + '</ul></article>').join('') || '<p class="sy-note">Χρειάζονται τουλάχιστον δύο χώρες με κοινά θέματα.</p>';
  }

  function learn(index, matches, tags, editions) {
    const own = Object.keys(matches).filter(id => index[id]?.edition === C.code);
    $('#sy-learn').innerHTML = own.slice(0, shown).map(id => `<article class="sy-pair"><div class="sy-from"><span class="sy-overline">Εδώ</span><p>${caseLink(index[id], editions)}</p></div>`
      + '<div class="sy-to"><span class="sy-overline">Σε άλλη χώρα</span>' + matches[id].map(m => `<p>${caseLink(index[m.id], editions)}`
        + `<span class="sy-shared">${m.shared.map(t => esc(label(tags, t))).join(' · ')}</span></p>`).join('') + '</div></article>').join('')
      || '<p class="sy-note">Δεν υπάρχουν ακόμη σχετικοί φάκελοι από άλλες χώρες.</p>';
    const more = $('#sy-more');
    more.hidden = own.length <= shown;
    more.onclick = () => { shown += PAGE; learn(index, matches, tags, editions); };
  }

  function sectors(stats, editions) {
    const codes = Object.keys(stats.bySector);
    $('#sy-sectors').innerHTML = `<thead><tr><th scope="col">Τομέας</th>${codes.map(c => `<th scope="col">${esc(editions[c]?.name)}</th>`).join('')}</tr></thead><tbody>`
      + P.sectors.filter(s => s.id !== 'all').map(s => `<tr><th scope="row">${esc(s.name)}</th>`
        + codes.map(c => `<td>${stats.bySector[c][s.id] || ''}</td>`).join('') + '</tr>').join('') + '</tbody>';
  }

  async function load() {
    header();
    try {
      const get = name => fetch('federation/' + name).then(r => { if (!r.ok) throw Error(name); return r.json(); });
      const [list, cases, matches, stats, vocabulary] = await Promise.all(['members.json', 'index.json', 'matches.json', 'stats.json', 'tags.json'].map(get));
      const index = Object.fromEntries(cases.map(c => [c.id, c])), editions = Object.fromEntries(list.map(m => [m.edition, m]));
      members(list);
      themes(stats, index, vocabulary.tags, editions);
      learn(index, matches, vocabulary.tags, editions);
      sectors(stats, editions);
      $('#sy-status').textContent = `${stats.editions} εκδόσεις · ${stats.cases} φάκελοι · ενημέρωση ${stats.generatedAt}`;
    } catch {
      $('#sy-status').textContent = 'Τα δεδομένα της Συμπολιτείας δεν φόρτωσαν.';
    }
  }
  document.addEventListener('DOMContentLoaded', load);
})();
