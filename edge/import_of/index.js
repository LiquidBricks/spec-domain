import { importRef_component, meta as importRefComponentMeta } from './importRef_component/index.js';

export function import_of({ g, diagnostics }) {
  return {
    importRef_component: importRef_component({ g, diagnostics }),
  };
}

export const meta = {
  importRef_component: importRefComponentMeta,
}
