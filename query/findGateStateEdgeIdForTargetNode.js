import { meta as edge } from '../edge/index.js';

export function findGateStateEdgeIdForTargetNode({ g }) {
  return ({ vertexId, id }) => g
    .V(vertexId)
    .outE(edge.has_gate_state.stateMachine_gateInstanceRef.constants.LABEL)
    .filter(_ => _.inV().has('id', id))
    .id();
}
