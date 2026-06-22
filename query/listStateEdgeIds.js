export function listStateEdgeIds({ g, domain }) {
  return ({ edgeLabel, vertexId }) => g.V(vertexId).outE(edgeLabel).id();
}
