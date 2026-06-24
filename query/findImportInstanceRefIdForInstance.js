import { meta as edge } from '../edge/index.js';

export function findImportInstanceRefIdForInstance({ g }) {
  return ({ vertexId, id }) => g
    .V(vertexId)
    .out(edge.uses_import.componentInstance_importInstanceRef.constants.LABEL)
    .filter(_ => _.out(edge.uses_import.importInstanceRef_componentInstance.constants.LABEL).has('id', id))
    .id();
}
