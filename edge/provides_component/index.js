import { componentAgent_component, meta as componentAgentComponentMeta } from './componentAgent_component/index.js';

export function provides_component({ g, diagnostics }) {
  return {
    componentAgent_component: componentAgent_component({ g, diagnostics }),
  };
}

export const meta = {
  componentAgent_component: componentAgentComponentMeta,
}
