# Athens geometry for the Politeia prototype

This is a real OpenStreetMap street and building extract of central Athens (OSM Simple 3D Buildings: parts, courtyards, roof shapes, recorded colours), not an exact digital twin or a photogrammetric model.

- `athens.json`: compact, Unity JsonUtility-compatible geometry in local metres.
- `athens.geojson`: the same derived features in geographic longitude/latitude coordinates, available for reuse and inspection.
- `provenance.json`: source, acquisition timestamp, database timestamp, transformation rules and limitations.
- `terrain.json`: ground relief on a 10 m grid in the same local metres (decimetres above sea level, row 0 = south edge, column 0 = west edge), built by `research/athens-terrain/build-terrain.py` from AWS Open Data Terrain Tiles (Mapzen).
- `terrain-provenance.json`: relief source tiles and checksums, required attribution (Mapzen; EU-DEM, Copernicus; SRTM/GMTED2010, USGS), spot checks and limitations.
- `driving.json` / `driving-provenance.json`: directed road graph on original OSM node ids for the driver's-seat route ride, built by `research/athens-driving/` (see its README for the graph schema).

## Attribution and licence

**© OpenStreetMap contributors.** This derived database is made available under the **Open Database License 1.0**. Show this credit and a link to [OpenStreetMap copyright](https://www.openstreetmap.org/copyright) wherever the map is displayed. The database licence is at https://opendatacommons.org/licenses/odbl/1-0/.

The geographic database licence does not change the licence of the application code.

## Scope and dates

The rectangle is west 23.718, south 37.964, east 23.750, north 37.986: approximately 2.81 km east-west and 2.45 km north-south. It includes the Acropolis, Plaka, Syntagma and surrounding central districts, not the whole Athens municipality or metropolitan area.

Retrieved on **12 October 2026**. The responding Overpass server reports an underlying OSM database timestamp of **24 July 2026, 11:04:51 UTC**. Those are different dates; do not describe the geometry as an October 2026 survey. The building relations (multipolygons and `type=building`, `osm-central-athens-relations.json`) came separately from a mirror whose database timestamp is **1 June 2026**.

## Coordinates and schema

`originLon: 23.735`, `originLat: 37.975`. `x` is east, `z` is north, units are metres. `bounds` defines the exact clipped rectangle. Unity can use `(x, 0, z)` directly. A Three.js north-up world can use `(x, 0, -z)`. Polygon point arrays omit the duplicated closing point and wind counterclockwise in the logical x/z plane. Negating z reverses that winding; each renderer should handle its own face orientation.

```text
buildings: [{id, name, nameEn, kind, height, heightSource, historic, points:[{x,z}],
             cap:[int],                                   // always: triangles over points + holes
             minHeight?, part?, holes?:[{points:[{x,z}]}], color?, roofColor?,
             roofShape?, roofHeight?, roof?:{points:[{x,y,z}], triangles:[int]}, wallTops?:[float]}]
roads: [{id, name, nameEn, kind, width, widthSource, bridge, points:[{x,z}]}]
parks: [{id, name, nameEn, kind, points:[{x,z}]}]
landmarks: [{id, name, nameEn, kind, x, z, lon, lat, positionSource, sourceUrl}]
```

IDs preserve OSM type/id. Road clipping can append an additional `/segmentIndex` to distinguish disconnected portions.

Schema 2 (building fields): `cap` and `roof.triangles` are flat index triples, counter-clockwise in x/z; renderers orient faces themselves (flip a triangle when its normal points away from the side it should face). `cap` indexes `points` followed by each hole's points. Courtyard `holes` wind clockwise. `roof.points[].y` and `wallTops` are metres above the building's own ground; `wallTops` has one value per outline point, so gable walls rise to the ridge. A building part (`part: true`) is drawn from `minHeight` to `height`; outlines whose parts draw them are left out.

## Model fidelity

There are **16,557 building shapes** (**5,080** of them building parts, **68** with courtyards, **4,841** with recorded colours, **808** with roof shapes: 619 gabled, 153 skillion, 18 domes, 11 pyramidal, 7 hipped), **4,278 road segments**, **359 park/green/water polygons**, and **136 named destinations**. Geometry is clipped to the dataset bounds; nothing is randomly positioned.

**5,472 building heights** come from a valid OSM `height` tag. **1,045** use mapped `building:levels` multiplied by 3 metres per storey. **2** parts inherit their parent building's height (`parent-height`). The remaining **10,038** use deliberately labelled placeholder heights: 12 metres generally, 6 metres for mapped historic/religious buildings, and 3 metres for garages/sheds/roofs. `heightSource` is respectively `osm-height`, `osm-levels-inferred`, `parent-height`, or `default-inferred`. Render and describe these as conceptual masses, not measured facades or an exact skyline.

Road widths similarly preserve `widthSource`. Relief is available separately in `terrain.json` (about 30 m source resolution, a surface model with rounded cliffs); `athens.json` itself stays flat. Roof shapes follow `roof:shape` only where OSM records it; everything else has a flat roof. There is no verified facade, interior, traffic simulation or live road closure data; windows, balconies and kerbs drawn by the renderers are illustrative. Park `kind: water` should be rendered differently from greenery.

Landmark polygon positions are the mean of their source vertices. They identify a place but are **not verified entrances or collision-free player spawn points**. Use street-level spawn placement checked against the rendered scene.

## Reproducing the export

Run `python research/athens-unity-data/convert.py` from the project root, then `python research/athens-unity-data/validate.py` (21 checks). This uses the saved `osm-central-athens.json` and `osm-central-athens-relations.json` and makes no network requests; Node.js is needed because courtyards are triangulated with `earcut.mjs`. The original query, raw OSM response and acquisition metadata are retained in the same research folder. `acquire.py` is a separate, optional fresh-data acquisition step; a refresh will change the data and should be reviewed.

## Wider region (Piraeus, Vouliagmeni, the basin)

Added on 14 October 2026 and built by `research/athens-region/` (acquire-region.py, acquire-basin.py, build-region-terrain.py, convert-area.py, convert-basin.py, publish.py). All files use the same local metres as `athens.json` (origin 23.735 E, 37.975 N; x east, z north).

- `region-terrain.bin` / `region-terrain.json`: relief from Piraeus to Vouliagmeni and from the centre to Marousi and past Hymettus (37.79–38.06 N, 23.58–23.86 E). Little-endian int16 decimetres above sea level on a 30 m grid, row 0 south, column 0 west. Same AWS Open Data Terrain Tiles as `terrain.json`. The lab draws the sea at 0 m and the coastline where the relief crosses it; inside the central extract the finer 10 m grid still wins.
- `areas.json` + `area-*.json`: detailed areas (north and east of the centre, Piraeus, Vouliagmeni) with exactly the central building model (parts, courtyards, roof shapes, colours, labelled height sources), stored as `schemaVersion: 3` (flat point arrays at 0.1 m, flat caps triangulated in the browser) and expanded to schema 2 on load. Loaded only when the view comes near or a destination there is chosen.
- `blocks/blocks.json` + `blocks/b_<col>_<row>.bin`: every other mapped building in the region as a plain prism on its real outline, in 2 km tiles streamed around the view. Heights: OSM `height`, else `building:levels` × 3 m, else a labelled placeholder by type and footprint size. Conceptual masses, not a measured skyline.
- `region-provenance.json`: sources, request records, checksums, rules and limitations for all of the above.

© OpenStreetMap contributors (ODbL 1.0) · Υψόμετρα: Mapzen Terrain Tiles (AWS Open Data) · EU-DEM, Copernicus · SRTM, USGS.

### Stadiums, landmark models, more areas (14 October 2026, later)

- `stadiums.json`: every stadium in the region as a parametric model on its OSM outline (`convert-stadiums.py`): tiered bowls, stepped stands where only stands are mapped, domed indoor arenas; OAKA's Calatrava arches and the covered stands of Karaiskakis and the OPAP Arena; seat colours only where known. Heights: OSM, published, or labelled estimate. OSM buildings inside a bowl or arena are replaced by the model.
- New detailed areas: Elliniko (Saarinen's East Terminal, Riviera Tower as OSM maps it, under construction), Faliro (Stavros Niarchos Foundation Cultural Center, Olympic beach volley and handball/taekwondo venues), OAKA.
- `landmarks-region.js` in the lab draws simplified SNFCC (canopy, Lighthouse) and East Terminal models from published descriptions. The Athens Tower uses its published 103 m (`heightSource: published`).
- `athens.json` in this site is the same central extract in the compact schema 4 (`compact-central.py`); the schema-2 original stays in the project's `dist/athens-data/`.
