import { componentInstance_importInstanceRef, meta as componentInstanceImportInstanceRefMeta } from './componentInstance_importInstanceRef/index.js';
import { importInstanceRef_componentInstance, meta as importInstanceRefComponentInstanceMeta } from './importInstanceRef_componentInstance/index.js';
import { importInstanceRef_importRef, meta as importInstanceRefImportRefMeta } from './importInstanceRef_importRef/index.js';

export function uses_import({ g, diagnostics }) {
  return {
    componentInstance_importInstanceRef: componentInstance_importInstanceRef({ g, diagnostics }),
    importInstanceRef_componentInstance: importInstanceRef_componentInstance({ g, diagnostics }),
    importInstanceRef_importRef: importInstanceRef_importRef({ g, diagnostics }),
  };
}

export const meta = {
  componentInstance_importInstanceRef: componentInstanceImportInstanceRefMeta,
  importInstanceRef_componentInstance: importInstanceRefComponentInstanceMeta,
  importInstanceRef_importRef: importInstanceRefImportRefMeta,
}
