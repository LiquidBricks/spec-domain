import { meta as edge } from '../edge/index.js';

export function findImportedComponentIdForImportRef({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.import_of.importRef_component.constants.LABEL)
    .id();
}
