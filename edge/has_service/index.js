import { component_service, meta as componentServiceMeta } from './component_service/index.js';

export function has_service({ g, diagnostics }) {
  return {
    component_service: component_service({ g, diagnostics }),
  };
}

export const meta = {
  component_service: componentServiceMeta,
}
