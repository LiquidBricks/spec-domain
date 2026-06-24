import { meta as edge } from '../edge/index.js';

export function findTaskStateEdgeIdForTargetNode({ g }) {
  return ({ vertexId, id }) => g
    .V(vertexId)
    .outE(edge.has_task_state.stateMachine_task.constants.LABEL)
    .filter(_ => _.inV().has('id', id))
    .id();
}
