export function listAgentFnIds({ g, domain }) {
  return ({ edgeLabel, vertexId }) => g.V(vertexId).out(edgeLabel).id();
}
