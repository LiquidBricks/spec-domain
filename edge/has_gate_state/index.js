import { stateMachine_gateInstanceRef, meta as stateMachineGateInstanceRefMeta } from './stateMachine_gateInstanceRef/index.js';

export function has_gate_state({ g, diagnostics }) {
  return {
    stateMachine_gateInstanceRef: stateMachine_gateInstanceRef({ g, diagnostics }),
  };
}

export const meta = {
  stateMachine_gateInstanceRef: stateMachineGateInstanceRefMeta,
}
