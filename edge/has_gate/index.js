import { component_gateRef, meta as componentGateRefMeta } from './component_gateRef/index.js';

export function has_gate({ g, diagnostics }) {
  return {
    component_gateRef: component_gateRef({ g, diagnostics }),
  };
}

export const meta = {
  component_gateRef: componentGateRefMeta,
}
