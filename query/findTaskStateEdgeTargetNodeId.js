import { meta as edge } from '../edge/index.js';

export function findTaskStateEdgeTargetNodeId({ g }) {
  return ({ id, vertexId }) => g
    .V(vertexId)
    .outE(edge.has_task_state.stateMachine_task.constants.LABEL)
    .has('id', id)
    .inV()
    .id();
}
