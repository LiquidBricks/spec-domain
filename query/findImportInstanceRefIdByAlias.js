import { meta as edge } from '../edge/index.js';

export function findImportInstanceRefIdByAlias({ g }) {
  return ({ vertexId, alias }) => g
    .V(vertexId)
    .out(edge.uses_import.componentInstance_importInstanceRef.constants.LABEL)
    .filter(_ => _.out(edge.uses_import.importInstanceRef_importRef.constants.LABEL).has('alias', alias))
    .id();
}
