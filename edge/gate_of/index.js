import { gateRef_component, meta as gateRefComponentMeta } from './gateRef_component/index.js';

export function gate_of({ g, diagnostics }) {
  return {
    gateRef_component: gateRef_component({ g, diagnostics }),
  };
}

export const meta = {
  gateRef_component: gateRefComponentMeta,
}
