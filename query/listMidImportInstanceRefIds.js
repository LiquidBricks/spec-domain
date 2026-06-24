import { meta as edge } from '../edge/index.js';

export function listMidImportInstanceRefIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.uses_import.componentInstance_importInstanceRef.constants.LABEL)
    .id();
}
