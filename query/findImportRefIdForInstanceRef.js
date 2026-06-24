import { meta as edge } from '../edge/index.js';

export function findImportRefIdForInstanceRef({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.uses_import.importInstanceRef_importRef.constants.LABEL)
    .id();
}
