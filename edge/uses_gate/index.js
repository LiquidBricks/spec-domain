import { componentInstance_gateInstanceRef, meta as componentInstanceGateInstanceRefMeta } from './componentInstance_gateInstanceRef/index.js';
import { gateInstanceRef_componentInstance, meta as gateInstanceRefComponentInstanceMeta } from './gateInstanceRef_componentInstance/index.js';
import { gateInstanceRef_gateRef, meta as gateInstanceRefGateRefMeta } from './gateInstanceRef_gateRef/index.js';

export function uses_gate({ g, diagnostics }) {
  return {
    componentInstance_gateInstanceRef: componentInstance_gateInstanceRef({ g, diagnostics }),
    gateInstanceRef_componentInstance: gateInstanceRef_componentInstance({ g, diagnostics }),
    gateInstanceRef_gateRef: gateInstanceRef_gateRef({ g, diagnostics }),
  };
}

export const meta = {
  componentInstance_gateInstanceRef: componentInstanceGateInstanceRefMeta,
  gateInstanceRef_componentInstance: gateInstanceRefComponentInstanceMeta,
  gateInstanceRef_gateRef: gateInstanceRefGateRefMeta,
}
