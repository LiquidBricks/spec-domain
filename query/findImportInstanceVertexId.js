import { meta as edge } from '../edge/index.js';

export function findImportInstanceVertexId({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.uses_import.importInstanceRef_componentInstance.constants.LABEL)
    .id();
}
