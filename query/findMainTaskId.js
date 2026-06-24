import { meta as edge } from '../edge/index.js';

export function findMainTaskId({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_task.component_task.constants.LABEL)
    .has('name', 'main')
    .id();
}
