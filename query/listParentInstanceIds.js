import { meta as edge } from '../edge/index.js';

export function listParentInstanceIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .in(edge.uses_import.importInstanceRef_componentInstance.constants.LABEL)
    .in(edge.uses_import.componentInstance_importInstanceRef.constants.LABEL)
    .id();
}
