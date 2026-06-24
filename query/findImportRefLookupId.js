import { meta as edge } from '../edge/index.js';

export function findImportRefLookupId({ g }) {
  return ({ alias, vertexId, id }) => g
    .V(vertexId)
    .out(edge.has_import.component_importRef.constants.LABEL)
    .has('alias', alias)
    .filter(_ => _.out(edge.import_of.importRef_component.constants.LABEL).has('id', id))
    .id();
}
