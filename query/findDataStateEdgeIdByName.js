import { meta as edge } from '../edge/index.js';

export function findDataStateEdgeIdByName({ g }) {
  return ({ vertexId, name }) => g
    .V(vertexId)
    .outE(edge.has_data_state.stateMachine_data.constants.LABEL)
    .filter(_ => _.inV().has('name', name))
    .id();
}
