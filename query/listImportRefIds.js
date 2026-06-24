import { meta as edge } from '../edge/index.js';

export function listImportRefIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_import.component_importRef.constants.LABEL)
    .id();
}
