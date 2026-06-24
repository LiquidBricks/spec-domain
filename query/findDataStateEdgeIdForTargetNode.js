import { meta as edge } from '../edge/index.js';

export function findDataStateEdgeIdForTargetNode({ g }) {
  return ({ vertexId, id }) => g
    .V(vertexId)
    .outE(edge.has_data_state.stateMachine_data.constants.LABEL)
    .filter(_ => _.inV().has('id', id))
    .id();
}
