# Συμπολιτεία — the editions learn from each other

In ancient Greece a *sympoliteia* was a league of cities that kept their own identity while sharing institutions.
Here it is the layer where every country's edition shares its public dossiers in one format, so that what was tried
in one country can inform an open problem in another.

## How it works

1. Each edition's dossiers become **cases** in a common format, in `tools/federation.py`. A case keeps:
   - its original language and its public sources;
   - its city (GeoNames) and region (NUTS);
   - its sector, with its **COFOG** code (`sectors.json`: the UN/OECD/Eurostat classification of government
     functions);
   - its **shared themes** (`tags.json`).
2. **Themes are the bridge between languages.** Every theme has stems in every member language. «σκιά» and
   «ombre» both mean *heat-shade*.
3. **Matching proposes; people decide.** For each case, up to three cases from *other* editions that share at
   least one theme. The ranking is shared themes first, then the same sector and the same COFOG division, and
   reviewed cases rank before drafts.
4. **Shared statistics** cover cases per edition and sector, and themes present in two or more countries
   (`stats.json`).

`python tools/federation.py` writes `data/members.json`, `index.json`, `matches.json` and `stats.json`. Every
build then copies them into the site:
- the page is `symbolitia.html`, linked from the footers;
- the files are `federation/*.json`, with the edition's own feed at `federation/feed.json`;
- `_headers` lets any other edition or tool read `/federation/*`.

## Joining

- **A pack in this repository** joins automatically (`countries/<code>`).
- **An edition hosted elsewhere** adds its feed URL to `members.json`:
  ```json
  { "remote": [ { "feed": "https://example.org/federation/feed.json" } ] }
  ```
- **A new language** adds its labels and stems to every theme in `tags.json`.

## Principles

- Public sources only. No personal data, no individual contributions; the Extras drafts never leave a device.
- Each case links to its source and its edition, and states whether people have reviewed it or it is still a draft.
- Texts are shared as they are, with attribution, under each edition's licence (`CC BY-NC-ND 4.0` for
  ΑΝΩ ΠΟΛΙΤΕΙΑ). Translating other editions' dossiers would be an adaptation, which needs those editions'
  permission.

## Next

- Regional indicators from Eurostat (by NUTS code) beside the cases, for comparisons that are more than counts.
- Multilingual similarity on the texts, beside the theme stems.
- Lessons written by people: "what worked there, what it would take here".
