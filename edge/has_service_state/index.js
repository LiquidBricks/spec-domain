import { stateMachine_service, meta as stateMachineServiceMeta } from './stateMachine_service/index.js';

export function has_service_state({ g, diagnostics }) {
  return {
    stateMachine_service: stateMachine_service({ g, diagnostics }),
  };
}

export const meta = {
  stateMachine_service: stateMachineServiceMeta,
}
