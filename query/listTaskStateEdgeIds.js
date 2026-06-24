import { meta as edge } from '../edge/index.js';

export function listTaskStateEdgeIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .outE(edge.has_task_state.stateMachine_task.constants.LABEL)
    .id();
}
