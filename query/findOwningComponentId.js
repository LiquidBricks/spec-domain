export function findOwningComponentId({ g, domain }) {
  return ({ edgeLabel, vertexId }) => g.V(vertexId).in(edgeLabel).id();
}
