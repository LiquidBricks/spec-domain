export function listTargetEdgeIds({ g, domain }) {
  return ({ edgeLabel, vertexId }) => g.V(vertexId).outE(edgeLabel).id();
}
