/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
/* Regional geometry is preserved; detached islands use a labelled companion map. */
function renderCountryMap(geo, city) {
  const mainland = [], islands = [], ionian = [];
  const islandRegions = new Set(['EL41','EL42','EL43','EL62']);
  const area = ring => Math.abs(ring.reduce((sum,p,i) => {
    const q = ring[(i+1)%ring.length]; return sum+p[0]*q[1]-q[0]*p[1];
  },0)/2);
  const nearest = (ring,point) => ring.reduce((best,p,i) =>
    Math.hypot(p[0]-point[0],p[1]-point[1]) < Math.hypot(ring[best][0]-point[0],ring[best][1]-point[1]) ? i : best,0);
  for (const feature of geo.features) {
    const id = feature.properties.NUTS_ID;
    const polygons = feature.geometry.type === 'MultiPolygon' ? feature.geometry.coordinates : [feature.geometry.coordinates];
    const largest = polygons.reduce((best,p,i) => area(p[0]) > area(polygons[best][0]) ? i : best,0);
    polygons.forEach((polygon,index) => {
      const item = {id,polygon};
      if (id === 'EL62') {ionian.push(item); return;}
      if (islandRegions.has(id)) {islands.push(item); return;}
      if (id === 'EL64' && index === largest) {
        // This simplified source joins Euboea to the mainland at the Euripus strait.
        // Split its existing outline at the two closest coastal vertices.
        const ring = polygon[0];
        const a = nearest(ring,[23.595,38.473]), b = nearest(ring,[23.607,38.445]);
        const start = Math.min(a,b), end = Math.max(a,b);
        const islandRing = ring.slice(start,end+1); islandRing.push(islandRing[0]);
        const landRing = [...ring.slice(end),...ring.slice(0,start+1)]; landRing.push(landRing[0]);
        islands.push({id,polygon:[islandRing]}); mainland.push({id,polygon:[landRing]});
      } else if (index === largest || (id === 'EL63' && area(polygon[0]) > .1)) {
        mainland.push(item);
      } else if (Math.max(...polygon[0].map(p=>p[0])) < 22.2) {ionian.push(item);}
      else {islands.push(item);}
    });
  }
  const project = ([lon,lat]) => [lon*.79,-lat];
  const names={EL30:'Αττική',EL41:'Βόρειο Αιγαίο',EL42:'Νότιο Αιγαίο',EL43:'Κρήτη',EL51:'Ανατολική Μακεδονία και Θράκη',EL52:'Κεντρική Μακεδονία',EL53:'Δυτική Μακεδονία',EL54:'Ήπειρος',EL61:'Θεσσαλία',EL62:'Ιόνια Νησιά',EL63:'Δυτική Ελλάδα',EL64:'Στερεά Ελλάδα',EL65:'Πελοπόννησος'};
  const cities=window.POLITEIA.cities;
  const href=c=>`./?design=gaia&city=${c.id}`;
  function target(item) {
    const ring=item.polygon[0];
    const center=ring.reduce((sum,p)=>[sum[0]+p[0]/ring.length,sum[1]+p[1]/ring.length],[0,0]);
    return cities.filter(c=>c.region===item.id).sort((a,b)=>Math.hypot((a.center[0]-center[0])*.79,a.center[1]-center[1])-Math.hypot((b.center[0]-center[0])*.79,b.center[1]-center[1]))[0];
  }
  function svg(items,label,extra='',linked=true) {
    const points = items.flatMap(item=>item.polygon.flatMap(ring=>ring.map(project)));
    const xs = points.map(p=>p[0]), ys = points.map(p=>p[1]);
    const left=Math.min(...xs)-.12, top=Math.min(...ys)-.12;
    const width=Math.max(...xs)-left+.12, height=Math.max(...ys)-top+.12;
    const groups=new Map();
    items.forEach(item=>{
      const destination=linked?target(item):null;
      const key=destination?.id||item.id;
      if(!groups.has(key))groups.set(key,{destination,id:item.id,paths:[]});
      groups.get(key).paths.push(`<path class="${item.id===city.region?'selected':''}" fill-rule="evenodd" d="${item.polygon.map(ring=>ring.map((p,i)=>`${i?'L':'M'}${project(p).join(',')}`).join('')+'Z').join('')}"/>`);
    });
    const paths=[...groups.values()].map(g=>g.destination?`<a href="${href(g.destination)}" aria-label="${names[g.id]} · ${g.destination.name}"><title>${names[g.id]} · ${g.destination.name}</title>${g.paths.join('')}</a>`:g.paths.join('')).join('');
    return `<svg class="greece-svg ${extra}" viewBox="${left} ${top} ${width} ${height}" role="${linked?'group':'img'}" aria-label="${label}" preserveAspectRatio="xMidYMid meet">${paths}</svg>`;
  }
  const ionianCity=cities.find(c=>c.region==='EL62');
  return `<div class="greece-split"><div class="greece-panel"><span>ΗΠΕΙΡΩΤΙΚΗ ΕΛΛΑΔΑ</span>${svg(mainland,'Ηπειρωτική Ελλάδα από την Πελοπόννησο μέχρι τη Θράκη')}</div><div class="greece-panel"><span>ΝΗΣΙΩΤΙΚΗ ΕΛΛΑΔΑ</span><div class="greece-island-maps">${svg(islands,'Νησιά Αιγαίου, Εύβοια, Ρόδος, Καστελόριζο και Κρήτη')}</div></div><a class="greece-panel ionian-panel" href="${href(ionianCity)}" aria-label="Ιόνιο · ${ionianCity.name}"><span>ΙΟΝΙΟ</span>${svg(ionian,'Ιόνια νησιά σε χωριστή προβολή','',false)}</a></div>`;
}
