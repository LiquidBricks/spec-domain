import { meta as edge } from '../edge/index.js';

export function listDataStateEdgeIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .outE(edge.has_data_state.stateMachine_data.constants.LABEL)
    .id();
}
