import { meta as edge } from '../edge/index.js';

export function findDataStateEdgeTargetNodeId({ g }) {
  return ({ id, vertexId }) => g
    .V(vertexId)
    .outE(edge.has_data_state.stateMachine_data.constants.LABEL)
    .has('id', id)
    .inV()
    .id();
}
