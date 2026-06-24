import { meta as edge } from '../edge/index.js';

export function listGateDataWaitForIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.wait_for.gateRef_data.constants.LABEL)
    .id();
}
