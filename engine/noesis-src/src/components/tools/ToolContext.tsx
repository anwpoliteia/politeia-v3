import { createContext, useContext } from 'react'
import type { ToolDef } from '../../data/tools/types'

// The tool being rendered. Every section of a tool page reads its cases,
// safeguards, patterns and copy from here, so one engine serves all ten tools.
const ToolContext = createContext<ToolDef | null>(null)

export const ToolProvider = ToolContext.Provider

export function useTool(): ToolDef {
  const tool = useContext(ToolContext)
  if (!tool) throw new Error('useTool() must be used inside <ToolProvider>')
  return tool
}
