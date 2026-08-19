import { componentInstance_data, meta as componentInstanceDataMeta } from './componentInstance_data/index.js';
import { componentInstance_gateRef, meta as componentInstanceGateRefMeta } from './componentInstance_gateRef/index.js';
import { componentInstance_task, meta as componentInstanceTaskMeta } from './componentInstance_task/index.js';

export function has_log({ g, diagnostics }) {
  return {
    componentInstance_data: componentInstance_data({ g, diagnostics }),
    componentInstance_gateRef: componentInstance_gateRef({ g, diagnostics }),
    componentInstance_task: componentInstance_task({ g, diagnostics }),
  };
}

export const meta = {
  componentInstance_data: componentInstanceDataMeta,
  componentInstance_gateRef: componentInstanceGateRefMeta,
  componentInstance_task: componentInstanceTaskMeta,
}
