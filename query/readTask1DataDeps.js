import { meta as edge } from '../edge/index.js';

export function readTask1DataDeps({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_dependency.task_data.constants.LABEL)
    .id();
}
