import { meta as edge } from '../edge/index.js';

export function findComponentIdForTask({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .in(edge.has_task.component_task.constants.LABEL)
    .id();
}
