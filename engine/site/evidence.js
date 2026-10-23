/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
/* Bundled after reviewed dossiers. No fallback issues or inferred coordinates. */
(()=>{'use strict';
 const P=window.POLITEIA;
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 P.evidenceReviewedAt=P.evidenceRecords.flatMap(r=>r.sources.map(s=>s.accessedAt)).sort().at(-1);
 P.pointCount=n=>n+' '+(n===1?'φάκελος':'φάκελοι');
 P.examples=Object.fromEntries(P.sectors.map(s=>[s.id,{id:s.id,name:s.name}]));
 P.evidenceKindLabel=p=>({'reported-condition':'Καταγραφή στην πηγή','plan-priority':'Προτεραιότητα δημοσιευμένου σχεδίου','historical-event':'Ιστορικό περιστατικό'}[p.evidenceKind]);
 P.makePoints=function(cityId,sectorId='all'){
  const c=this.cities.find(c=>c.id===cityId);if(!c)return [];
  const cityRecords=this.evidenceRecords.filter(r=>r.cityId===cityId);
  return cityRecords.filter(r=>sectorId==='all'||r.sectorId===sectorId||r.relatedSectors.includes(sectorId)).map(r=>{
   const s=this.sectors.find(s=>s.id===r.sectorId);
   return {...r,id:'evidence-'+r.cityId+'-'+r.slug,number:cityRecords.indexOf(r)+1,city:c.name,cityId,region:c.region,sector:s.name,color:s.color,
    question:r.problem,context:r.problem,architecture:r.action,
    evidence:r.sources.map(s=>s.publisher+' · '+(s.publishedAt||'χωρίς δηλωμένη ημερομηνία')+': '+s.evidence).join(' '),
    mapCoordinates:r.coordinates,
    mapAccuracy:r.coordinateAccuracy,
    mapLocationLabel:P.locationLabel(r),
    status:P.evidenceKindLabel(r),illustrative:false,sourceBacked:true};
  });
 };
 P.emptyEvidenceHTML=()=>'<div class="evidence-empty"><strong>Δεν υπάρχει ακόμη φάκελος με επαρκή πηγή σε αυτόν τον τομέα.</strong><p>Δες όλους τους φακέλους της πόλης. Η απουσία καταγραφής δεν σημαίνει απουσία προβλήματος.</p></div>';
 P.locationLabel=p=>!p.coordinates&&p.geographicDisposition?({'service-wide':'Υπηρεσία · χωρίς μοναδική φυσική θέση','network-wide':'Ευρύτερο δίκτυο · χωρίς σημειακή καρφίτσα','site-selection-required':'Συγκεκριμένη χωροθέτηση προς επιβεβαίωση','needs-map-match':'Κατονομασμένος χώρος · θέση υπό διασταύρωση','source-conflict':'Ασυμφωνία θέσης στην πηγή · χωρίς καρφίτσα'}[p.geographicDisposition]||'Θέση υπό έλεγχο'):p.mapRole==='service-access'?'Σημείο πρόσβασης στη λύση':p.mapRole==='programme-reference'?'Χώρος δημοσιευμένης δράσης':({'site-reference':'Χαρτογραφημένος χώρος','address-reference':'Διεύθυνση αναφοράς','junction-reference':'Κόμβος αναφοράς','registry-reference':'Θέση μητρώου σχολείου','street-reference':'Χαρτογραφημένη οδός','area-reference':'Περιοχή αναφοράς','area-wide':'Ευρύτερη περιοχή · χωρίς σημειακή καρφίτσα'}[p.coordinateAccuracy]||'Θέση υπό έλεγχο');
 P.locationHTML=p=>'<div class="location-verification"><strong>'+P.locationLabel(p)+'</strong><p>'+esc(p.coordinateNote)+'</p>'+(p.coordinates?'<span>'+p.coordinates[1].toFixed(6)+', '+p.coordinates[0].toFixed(6)+' · WGS84</span>':'')+'<div>'+p.coordinateSources.map(s=>'<a href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+esc(s.name)+' ↗</a>').join(' · ')+'</div><small>Έλεγχος θέσης: '+esc(p.coordinateReviewedAt)+'</small></div>';
 P.locationFeatures=ps=>({type:'FeatureCollection',features:ps.filter(p=>p.mapGeometry).map(p=>({type:'Feature',properties:{id:p.id,color:p.color},geometry:p.mapGeometry}))});
 P.mapPins=ps=>ps.flatMap((p,index)=>(p.mapAnchors?.length?p.mapAnchors:p.coordinates?[{coordinates:p.coordinates,name:p.mapLocationName||p.locationName}]:[]).map(a=>({p,index,coordinates:a.coordinates,name:a.name})));
 P.mapBounds=ps=>{const coords=P.mapPins(ps).map(a=>a.coordinates);const walk=x=>{if(typeof x[0]==='number')coords.push(x);else x.forEach(walk)};ps.filter(p=>p.mapGeometry).forEach(p=>walk(p.mapGeometry.coordinates));if(coords.length<2)return null;const bounds=[0,1].map(i=>[Math.min(...coords.map(c=>c[i])),Math.max(...coords.map(c=>c[i]))]);if(bounds.every(b=>b[0]===b[1]))return null;return [[bounds[0][0],bounds[1][0]],[bounds[0][1],bounds[1][1]]]};
 P.drawLocationGeometry=(map,ps)=>{
  const data=P.locationFeatures(ps),id='evidence-locations';
  if(map.getSource(id)){map.getSource(id).setData(data);return}
  map.addSource(id,{type:'geojson',data});
  map.addLayer({id:id+'-fill',source:id,type:'fill',filter:['==',['geometry-type'],'Polygon'],paint:{'fill-color':['get','color'],'fill-opacity':.16}});
  map.addLayer({id:id+'-line',source:id,type:'line',paint:{'line-color':['get','color'],'line-width':4,'line-opacity':.8}});
 };
 P.mapFocus=(ps,c)=>{const p=ps.find(p=>p.coordinates);return p?.coordinates||c.center};
 P.actionStepsHTML=p=>'<ol class="evidence-steps">'+p.steps.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ol>';
 P.evidenceHTML=p=>'<section class="evidence-record"><div class="evidence-record-heading"><strong>'+P.evidenceKindLabel(p)+'</strong><span>Έρευνα πηγών: '+P.evidenceReviewedAt+'</span></div><p>'+esc(p.problem)+'</p><p class="evidence-location">'+esc(p.locationName)+' · '+P.locationLabel(p)+'</p>'+(p.coordinates?'<p class="evidence-coordinates"><a href="'+esc(p.coordinateSource)+'" target="_blank" rel="noopener noreferrer">Συντεταγμένες χάρτη ↗</a> · '+esc(p.coordinateSourceType||'δημόσια γεωγραφική πηγή')+'</p>':'')+P.locationHTML(p)+'<ol class="evidence-sources">'+p.sources.map(s=>'<li><a href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+esc(s.title)+' ↗</a><small>'+esc(s.publisher)+' · δημοσίευση: '+esc(s.publishedAt||'δεν δηλώνεται')+' · έλεγχος: '+esc(s.accessedAt)+'</small><p class="source-locator">Πού να κοιτάξεις: '+esc(s.locator)+'</p>'+(s.accessNote?'<small>'+esc(s.accessNote)+'</small>':'')+'</li>').join('')+'</ol><div class="evidence-action"><strong>Δύο προτεινόμενα βήματα</strong>'+P.actionStepsHTML(p)+'</div><p class="evidence-proposal-note">Η πηγή τεκμηριώνει την καταγραφή ή τον σχεδιασμό στην εποχή της. Η σημερινή κατάσταση χρειάζεται επιβεβαίωση από τον φορέα. Τα βήματα είναι προτάσεις αξιολόγησης, όχι εγκεκριμένα έργα ή αποδεδειγμένα αποτελέσματα.</p></section>';
 P.coverageHTML=()=>'<div class="evidence-coverage"><p><strong>'+P.evidenceRecords.length+' φάκελοι · '+P.cities.filter(c=>P.makePoints(c.id).length).length+'/'+P.cities.length+' πόλεις</strong></p><p>'+P.evidenceRecords.filter(r=>r.coordinates).length+' χωρικές αναφορές με πηγή · '+P.evidenceRecords.filter(r=>!r.coordinates).length+' φάκελοι χωρίς συγκεκριμένη θέση. <a href="location-audit.json" target="_blank" rel="noopener">Έλεγχος θέσεων ↗</a></p><p>Έρευνα δημόσιων πηγών: '+P.evidenceReviewedAt+'. Στοχευμένη κάλυψη των πόλεων του άτλαντα· όχι πλήρης απογραφή όλων των ελληνικών πόλεων ή των 18 τομέων.</p><div class="coverage-grid">'+P.cities.map(c=>'<a href="citizen.html?design=gaia&city='+c.id+'&sector=all"><strong>'+c.name+'</strong><span>'+P.pointCount(P.makePoints(c.id).length)+'</span></a>').join('')+'</div></div>';
})();
