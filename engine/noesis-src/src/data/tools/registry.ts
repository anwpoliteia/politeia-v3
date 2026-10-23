// ΕΥΘΥΝΑΙ — the ten areas of accountability, in the order the citizen chose
// (2026-09-29): the most corrupted ministries and the problems of everyday
// Greek life, ranked by documented evidence. Each area names its ministry in
// the Council; a built area carries its tool. Evidence lines are sourced; an
// area whose evidence is not yet checked says so rather than guessing.

import type { Bilingual, Source } from '../../lib/types'
import type { DimensionId } from '../../constants/dimensions'
import type { ToolDef } from './types'
import { JUSTICE } from './justice'
import { AGRICULTURE } from './agriculture'
import { HEALTH } from './health'
import { FINANCE } from './finance'
import { CITIZEN_PROTECTION } from './citizen-protection'
import { PLANNING } from './planning'
import { INFRASTRUCTURE } from './infrastructure'
import { CIVIL_PROTECTION } from './civil-protection'
import { COST_OF_LIVING } from './cost-of-living'
import { PUBLIC_SECTOR } from './public-sector'

export interface ToolArea {
  n: string
  area: Bilingual
  ministrySlug?: string // its Counsellor in the Council, when one exists
  ministryNote?: Bilingual // said plainly when the Council has no such ministry
  dimension: DimensionId // the Index dimension it most protects
  tool?: ToolDef // present once built
  evidence: Bilingual[]
  sources: Source[]
}

export const TOOL_AREAS: readonly ToolArea[] = [
  {
    n: '01',
    area: JUSTICE.area,
    ministrySlug: JUSTICE.ministrySlug,
    dimension: JUSTICE.dimension,
    tool: JUSTICE,
    evidence: [
      {
        el: 'Τέμπη: 57 νεκροί. Οι πολιτικοί προϊστάμενοι κρίνονται μόνο αφού το επιτρέψει η Βουλή (άρθρο 86) — και μόνο για πλημμελήματα.',
        en: 'Tempi: 57 dead. Political superiors are tried only once Parliament allows it (Article 86) — and only for misdemeanours.',
      },
    ],
    sources: [{ title: 'Wikipedia — Tempi train crash', url: 'https://en.wikipedia.org/wiki/Tempi_train_crash' }],
  },
  {
    n: '02',
    area: AGRICULTURE.area,
    ministrySlug: AGRICULTURE.ministrySlug,
    dimension: AGRICULTURE.dimension,
    tool: AGRICULTURE,
    evidence: [
      {
        el: 'ΟΠΕΚΕΠΕ: 392,2 εκατ. ευρώ επιστροφή στην ΕΕ (2025), παραιτήσεις κυβερνητικών στελεχών τον Ιούνιο 2025 και τον Απρίλιο 2026, αίτημα άρσης ασυλίας 11 βουλευτών.',
        en: 'OPEKEPE: €392.2m forfeited to the EU (2025), government resignations in June 2025 and April 2026, immunity requested for 11 MPs.',
      },
    ],
    sources: [
      { title: 'EPPO — Agricultural subsidy fraud probe (1 Apr 2026)', url: 'https://www.eppo.europa.eu/en/media/news/greece-new-developments-eppos-probe-large-scale-agricultural-subsidy-fraud' },
    ],
  },
  {
    n: '03',
    area: HEALTH.area,
    ministrySlug: HEALTH.ministrySlug,
    dimension: HEALTH.dimension,
    tool: HEALTH,
    evidence: [
      {
        el: 'Ευρωβαρόμετρο 2024: το 98% των Ελλήνων θεωρεί τη διαφθορά διαδεδομένη· κατά τη National Herald, το 89% θεωρεί αναμενόμενο να πληρώσει «φακελάκι» σε γιατρό για καλύτερη φροντίδα.',
        en: 'Eurobarometer 2024: 98% of Greeks see corruption as widespread; per The National Herald, 89% say paying a doctor for better care is expected.',
      },
    ],
    sources: [
      { title: 'To Vima — Eurobarometer: 98% of Greeks believe corruption is widespread', url: 'https://www.tovima.com/society/eurobarometer-98-of-greeks-believe-corruption-is-widespread/' },
      { title: 'The National Herald — Most Greeks believe doctors, officials want bribes', url: 'https://www.thenationalherald.com/most-greeks-believe-politicians-corrupt-doctors-officials-want-bribes/' },
    ],
  },
  {
    n: '04',
    area: FINANCE.area,
    ministrySlug: FINANCE.ministrySlug,
    dimension: FINANCE.dimension,
    tool: FINANCE,
    evidence: [
      {
        el: 'Ευρωπαϊκή Εισαγγελία 2025: 175 ενεργές έρευνες στην Ελλάδα με εκτιμώμενη ζημιά 2,68 δισ. ευρώ — περίπου μισή από απάτες εσόδων (ΦΠΑ, τελωνεία) και μισή από απάτες δαπανών — και μόνο 2 τελεσίδικες καταδίκες ως τώρα.',
        en: 'EPPO 2025: 175 active investigations in Greece with an estimated €2.68bn in damage — about half revenue fraud (VAT, customs) and half expenditure fraud — and only 2 final convictions so far.',
      },
    ],
    sources: [
      { title: 'To Vima — EPPO annual report on Greece (Mar 2026)', url: 'https://www.tovima.com/politics/426913/amp/' },
      { title: 'EPPO — 2025 in numbers', url: 'https://www.eppo.europa.eu/en/2025-numbers' },
    ],
  },
  {
    n: '05',
    area: PLANNING.area,
    ministrySlug: PLANNING.ministrySlug,
    dimension: PLANNING.dimension,
    tool: PLANNING,
    evidence: [
      {
        el: 'Ρόδος: στέλεχος πολεοδομίας με χιλιάδες ευρώ κρυμμένα σε κατσαρόλες και στον απορροφητήρα· πάνω από 100 κατηγορούμενοι στη Βόρεια Ελλάδα, πολλοί πολεοδόμοι. Κατά τη Διεθνή Διαφάνεια Ελλάδας, η διαφθορά στο Δημόσιο κοστίζει ως 14 δισ. ευρώ τον χρόνο (Reuters, 2025).',
        en: 'Rhodes: a planning official with thousands of euros hidden in pots and the cooker hood; over 100 charged in northern Greece, many of them town planners. Per Transparency International Greece, public-sector corruption costs up to €14bn a year (Reuters, 2025).',
      },
    ],
    sources: [
      { title: 'Sigmalive / Reuters — Bribery scandals in Greece’s public sector show persistence of corruption (Mar 2025)', url: 'https://en.sigmalive.com/bribery-scandals-in-greeces-public-sector-show-persistence-of-corruption/' },
    ],
  },
  {
    n: '06',
    area: INFRASTRUCTURE.area,
    ministrySlug: INFRASTRUCTURE.ministrySlug,
    dimension: INFRASTRUCTURE.dimension,
    tool: INFRASTRUCTURE,
    evidence: [
      {
        el: 'Ευρωβαρόμετρο 2024: το 67% των Ελλήνων συνδέει τη διαφθορά με όσους χειρίζονται δημόσιες συμβάσεις (μέσος όρος ΕΕ 37%) και το 63% με όσους εκδίδουν οικοδομικές άδειες (ΕΕ 36%) — οι δύο πύλες των δημόσιων έργων.',
        en: 'Eurobarometer 2024: 67% of Greeks associate corruption with officials handling public contracts (EU average 37%) and 63% with those issuing building permits (EU 36%) — the two gateways of public works.',
      },
    ],
    sources: [
      { title: 'To Vima — Eurobarometer: 98% of Greeks believe corruption is widespread (2024)', url: 'https://www.tovima.com/society/eurobarometer-98-of-greeks-believe-corruption-is-widespread/amp/' },
    ],
  },
  {
    n: '07',
    area: CITIZEN_PROTECTION.area,
    ministrySlug: CITIZEN_PROTECTION.ministrySlug,
    dimension: CITIZEN_PROTECTION.dimension,
    tool: CITIZEN_PROTECTION,
    evidence: [
      {
        el: 'Υποκλοπές Predator: τέσσερα στελέχη εταιρειών καταδικάστηκαν (Φεβρουάριος 2026), ενώ η εισαγγελική έρευνα είχε κρίνει ότι καμία κρατική υπηρεσία δεν χρησιμοποίησε το λογισμικό (2024).',
        en: 'Predator wiretaps: four company executives convicted (February 2026), while prosecutors had found that no state agency used the spyware (2024).',
      },
      {
        el: 'Συνήγορος του Πολίτη 2023: 188 καταγγελίες για αυθαιρεσίες αστυνομίας, λιμενικού, πυροσβεστικής και σωφρονιστικών — πολλές χωρίς αποτελεσματική πειθαρχική έρευνα.',
        en: 'Greek Ombudsman 2023: 188 complaints of arbitrary conduct by police, coast guard, fire brigade and prison staff — many without an effective disciplinary investigation.',
      },
    ],
    sources: [
      { title: 'Balkan Insight — Court finds four executives guilty in Predator case (2026)', url: 'https://balkaninsight.com/2026/02/26/greek-court-found-guilty-four-individuals-in-wiretapping-scandal/bi/' },
      { title: 'Balkan Insight — Parliament refuses to question Supreme Court over spyware ruling (2024)', url: 'https://balkaninsight.com/2024/08/02/greek-parliament-refuses-to-question-supreme-court-over-spyware-ruling/' },
      { title: 'EU Fundamental Rights Agency — Greek Ombudsman national mechanism report 2023', url: 'https://fra.europa.eu/en/databases/anti-muslim-hatred/node/9732' },
    ],
  },
  {
    n: '08',
    area: COST_OF_LIVING.area,
    ministrySlug: COST_OF_LIVING.ministrySlug,
    dimension: COST_OF_LIVING.dimension,
    tool: COST_OF_LIVING,
    evidence: [
      {
        el: 'Eurostat 2024: το 28,9% των ανθρώπων στην Ελλάδα ξοδεύει πάνω από το 40% του διαθέσιμου εισοδήματος για στέγη — το υψηλότερο ποσοστό στην ΕΕ, έναντι μέσου όρου 8,2%.',
        en: 'Eurostat 2024: 28.9% of people in Greece spend over 40% of disposable income on housing — the highest rate in the EU, against an 8.2% average.',
      },
    ],
    sources: [
      { title: 'Eurostat — Living conditions in Europe: housing', url: 'https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Living_conditions_in_Europe_-_housing' },
    ],
  },
  {
    n: '09',
    area: CIVIL_PROTECTION.area,
    tool: CIVIL_PROTECTION,
    ministryNote: {
      el: 'Το Υπουργείο Κλιματικής Κρίσης & Πολιτικής Προστασίας δεν έχει ακόμη Σύμβουλο στο Συμβούλιο.',
      en: 'The Ministry of Climate Crisis & Civil Protection has no Counsellor in the Council yet.',
    },
    dimension: CIVIL_PROTECTION.dimension,
    evidence: [
      {
        el: 'Μέσα σε πέντε χρόνια: Μάτι 2018 (104 νεκροί, χωρίς σχέδιο εκκένωσης και με το 112 νομοθετημένο αλλά ανεφάρμοστο), και μέσα σε έναν μήνα του 2023 η μεγαλύτερη πυρκαγιά που έχει καταγραφεί ποτέ στην ΕΕ (Έβρος) και το εθνικό ρεκόρ βροχής του Daniel.',
        en: 'Within five years: Mati 2018 (104 dead, no evacuation plan, 112 legislated but never implemented), and in a single month of 2023 the largest wildfire ever recorded in the EU (Evros) and Storm Daniel’s national rainfall record.',
      },
    ],
    sources: [
      { title: 'MacroPolis — Independent committee report on Mati (2019)', url: 'https://www.macropolis.gr/?i=portal.en.society.8061' },
      { title: 'Al Jazeera — Greece blaze is largest wildfire ever recorded in EU (2023)', url: 'https://www.aljazeera.com/amp/news/2023/8/29/greece-blaze-is-largest-wildfire-ever-recorded-in-eu' },
    ],
  },
  {
    n: '10',
    area: PUBLIC_SECTOR.area,
    ministrySlug: PUBLIC_SECTOR.ministrySlug,
    dimension: PUBLIC_SECTOR.dimension,
    tool: PUBLIC_SECTOR,
    evidence: [
      {
        el: 'Ευρωβαρόμετρο 2024: το 71% των Ελλήνων βλέπει διαφθορά στα πολιτικά κόμματα (ΕΕ 53%). Κατά την Ευρωπαϊκή Επιτροπή, πριν από το 2010 το κράτος «δεν ήξερε τον ακριβή αριθμό των δημοσίων υπαλλήλων».',
        en: 'Eurobarometer 2024: 71% of Greeks see corruption in political parties (EU 53%). According to the European Commission, before 2010 the state “did not know the exact number of the public servants.”',
      },
    ],
    sources: [
      { title: 'To Vima — Eurobarometer: 98% of Greeks believe corruption is widespread (2024)', url: 'https://www.tovima.com/society/eurobarometer-98-of-greeks-believe-corruption-is-widespread/amp/' },
      { title: 'European Commission — Discussion Paper 167 on Greek public administration (2022)', url: 'https://economy-finance.ec.europa.eu/document/download/97fb3144-72fb-4ec6-aeef-f35edfdf4292_en?filename=dp167_en.pdf' },
    ],
  },
]

export const TOOLS: readonly ToolDef[] = TOOL_AREAS.flatMap((a) => (a.tool ? [a.tool] : []))
