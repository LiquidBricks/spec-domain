import { meta as edge } from '../edge/index.js';

export function listComponentAgentFnIds({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_agentFn.component_agentFn.constants.LABEL)
    .id();
}
