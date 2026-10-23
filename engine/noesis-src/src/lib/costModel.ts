// Parametric TCO model (spec §11). Pure functions — no UI, no rounding games.
// Honest numbers only (Hard Rule 9): the UI labels every output "illustrative".
//
// Defaults reproduce the spec's worked example: ≈ €48M upfront, ≈ €15M/year.

export interface SovereignInputs {
  gpus: number
  capexPerGpu: number
  facility: number
  amortisation: number // years
  powerPerGpu: number // kW incl. overhead (PUE)
  loadFactor: number // 0..1
  electricity: number // €/kWh
  staff: number
  costPerHead: number
  softwareOpex: number // €/yr
}

export interface SovereignResult {
  itCapex: number
  totalCapex: number // upfront
  annualAmortisedCapex: number
  annualEnergyKwh: number
  annualPower: number
  annualStaff: number
  annualSoftware: number
  annualTco: number
}

const HOURS_PER_YEAR = 8760

export const SOVEREIGN_DEFAULTS: SovereignInputs = {
  gpus: 512,
  capexPerGpu: 35_000,
  facility: 30_000_000,
  amortisation: 5,
  powerPerGpu: 1.3,
  loadFactor: 0.7,
  electricity: 0.18,
  staff: 35,
  costPerHead: 70_000,
  softwareOpex: 2_000_000,
}

export function computeSovereign(i: SovereignInputs): SovereignResult {
  const itCapex = i.gpus * i.capexPerGpu
  const totalCapex = itCapex + i.facility
  const annualAmortisedCapex = i.amortisation > 0 ? totalCapex / i.amortisation : 0
  const annualEnergyKwh = i.gpus * i.powerPerGpu * HOURS_PER_YEAR * i.loadFactor
  const annualPower = annualEnergyKwh * i.electricity
  const annualStaff = i.staff * i.costPerHead
  const annualSoftware = i.softwareOpex
  const annualTco =
    annualAmortisedCapex + annualPower + annualStaff + annualSoftware
  return {
    itCapex,
    totalCapex,
    annualAmortisedCapex,
    annualEnergyKwh,
    annualPower,
    annualStaff,
    annualSoftware,
    annualTco,
  }
}

export interface ApiInputs {
  proposalsPerDay: number
  tokensIn: number // per proposal
  tokensOut: number // per proposal
  qaVolume: number // citizen Q&A interactions per day
  priceIn: number // €/Mtok
  priceOut: number // €/Mtok
  hostingOpex: number // €/yr
}

export interface ApiResult {
  monthlyInputTokens: number
  monthlyOutputTokens: number
  monthlyApiSpend: number
  annualApiSpend: number
  annualHosting: number
  annualTotal: number
  monthlyTotal: number
}

// Modest fixed token assumption per citizen Q&A turn (stated, not hidden).
const QA_TOKENS_IN = 1_500
const QA_TOKENS_OUT = 700
const DAYS_PER_MONTH = 30

export const API_DEFAULTS: ApiInputs = {
  proposalsPerDay: 40,
  tokensIn: 8_000,
  tokensOut: 4_000,
  qaVolume: 2_000,
  priceIn: 2.5,
  priceOut: 10,
  hostingOpex: 60_000,
}

export function computeApi(i: ApiInputs): ApiResult {
  const dailyIn = i.proposalsPerDay * i.tokensIn + i.qaVolume * QA_TOKENS_IN
  const dailyOut = i.proposalsPerDay * i.tokensOut + i.qaVolume * QA_TOKENS_OUT
  const monthlyInputTokens = dailyIn * DAYS_PER_MONTH
  const monthlyOutputTokens = dailyOut * DAYS_PER_MONTH
  const monthlyApiSpend =
    (monthlyInputTokens / 1_000_000) * i.priceIn +
    (monthlyOutputTokens / 1_000_000) * i.priceOut
  const annualApiSpend = monthlyApiSpend * 12
  const annualHosting = i.hostingOpex
  const annualTotal = annualApiSpend + annualHosting
  return {
    monthlyInputTokens,
    monthlyOutputTokens,
    monthlyApiSpend,
    annualApiSpend,
    annualHosting,
    annualTotal,
    monthlyTotal: annualTotal / 12,
  }
}
