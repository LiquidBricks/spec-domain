import { meta as edge } from '../edge/index.js';

export function listImportDataWaitForIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.wait_for.importRef_data.constants.LABEL)
    .id();
}
