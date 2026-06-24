import { meta as vertex } from '../vertex/index.js';

export function findComponentAgentVertexId({ g }) {
  return ({ agentID }) => g
    .V()
    .has('label', vertex.componentAgent.constants.LABEL)
    .has('agentID', agentID)
    .id();
}
