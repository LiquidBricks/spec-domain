import { meta as edge } from '../edge/index.js';

export function findTaskStateEdgeIdByName({ g }) {
  return ({ vertexId, name }) => g
    .V(vertexId)
    .outE(edge.has_task_state.stateMachine_task.constants.LABEL)
    .filter(_ => _.inV().has('name', name))
    .id();
}
