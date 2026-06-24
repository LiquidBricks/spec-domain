import { meta as edge } from '../edge/index.js';

export function listImportInstanceVertexIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.uses_import.componentInstance_importInstanceRef.constants.LABEL)
    .out(edge.uses_import.importInstanceRef_componentInstance.constants.LABEL)
    .id();
}
