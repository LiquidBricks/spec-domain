import { componentInstance_componentState, meta as componentInstanceComponentStateMeta } from './componentInstance_componentState/index.js';

export function has_snapshot({ g, diagnostics }) {
  return {
    componentInstance_componentState: componentInstance_componentState({ g, diagnostics }),
  };
}

export const meta = {
  componentInstance_componentState: componentInstanceComponentStateMeta,
}
