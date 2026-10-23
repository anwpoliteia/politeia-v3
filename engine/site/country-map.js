/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
/* Default small country map: every region, the selected one highlighted, and the city as a dot.
   A pack replaces this file when its country needs more (Greece draws its islands beside the mainland). */
function renderCountryMap(geo, city) {
  const country = window.POLITEIA_COUNTRY, M = country.map.mini;
  const project = ([lon, lat]) => [(lon - M.lon0) * M.sx, (M.lat0 - lat) * M.sy];
  const outline = f => (f.geometry.type === 'MultiPolygon' ? f.geometry.coordinates : [f.geometry.coordinates])
    .map(poly => poly.map(ring => ring.map((c, i) => `${i ? 'L' : 'M'}${project(c).map(v => v.toFixed(1)).join(',')}`).join('') + 'Z').join(''))
    .join('');
  const paths = geo.features.map(f => `<path d="${outline(f)}" class="${f.properties.NUTS_ID === city.region ? 'selected' : ''}"/>`).join('');
  const [x, y] = project(city.center);
  return `<svg class="greece-svg" viewBox="${M.viewBox}" role="img" aria-label="${country.map.label}">${paths}`
    + `<circle cx="${x}" cy="${y}" r="3.6"/><circle cx="${x}" cy="${y}" r="7" fill="none" stroke="currentColor" opacity=".5"/></svg>`;
}
