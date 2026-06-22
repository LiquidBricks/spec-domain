export function findNextInstanceVertexId({ g, domain }) {
  return ({ edgeLabel, vertexId }) => g.V(vertexId).out(edgeLabel).id();
}
