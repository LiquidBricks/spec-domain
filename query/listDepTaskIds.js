import { meta as edge } from '../edge/index.js';

export function listDepTaskIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_dependency.gateRef_task.constants.LABEL)
    .id();
}
