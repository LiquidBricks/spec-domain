import { component_importRef, meta as componentImportRefMeta } from './component_importRef/index.js';

export function has_import({ g, diagnostics }) {
  return {
    component_importRef: component_importRef({ g, diagnostics }),
  };
}

export const meta = {
  component_importRef: componentImportRefMeta,
}
