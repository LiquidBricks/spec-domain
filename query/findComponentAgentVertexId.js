export function findComponentAgentVertexId({ g, domain }) {
  return ({ agentID }) => g
    .V()
    .has('label', domain.vertex.componentAgent.constants.LABEL)
    .has('agentID', agentID)
    .id();
}
