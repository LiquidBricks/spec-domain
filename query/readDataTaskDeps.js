import { meta as edge } from '../edge/index.js';

export function readDataTaskDeps({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_dependency.data_task.constants.LABEL)
    .id();
}
