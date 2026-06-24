import { meta as edge } from '../edge/index.js';

export function listImportTaskWaitForIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.wait_for.importRef_task.constants.LABEL)
    .id();
}
