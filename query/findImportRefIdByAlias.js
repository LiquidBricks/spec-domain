import { meta as edge } from '../edge/index.js';

export function findImportRefIdByAlias({ g }) {
  return ({ alias, vertexId }) => g
    .V(vertexId)
    .out(edge.has_import.component_importRef.constants.LABEL)
    .has('alias', alias)
    .id();
}
