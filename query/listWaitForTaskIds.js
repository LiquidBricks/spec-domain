import { meta as edge } from '../edge/index.js';

export function listWaitForTaskIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.wait_for.gateRef_task.constants.LABEL)
    .id();
}
