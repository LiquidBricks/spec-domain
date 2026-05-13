import { component_agentFn, meta as componentAgentFnMeta } from './component_agentFn/index.js';

export function has_agentFn({ g, diagnostics }) {
  return {
    component_agentFn: component_agentFn({ g, diagnostics }),
  };
}

export const meta = {
  component_agentFn: componentAgentFnMeta,
}
