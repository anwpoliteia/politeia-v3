// Chart colours mirror the design tokens in index.css (§3). Recharts renders
// SVG attributes, so we pass literal hex values here rather than CSS variables.
// Keep in sync with @theme in src/index.css.
export const CHART = {
  bg: '#0b0e14',
  elev: '#11151e',
  line: '#1e2530',
  text: '#ece7dd',
  muted: '#8a93a2',
  gold: '#c8a24a',
  copper: '#b06a3b',
  positive: '#6fae7e',
  negative: '#b5566b',
} as const
