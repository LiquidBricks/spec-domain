export function listDependencyNodeIds({ g, domain }) {
  return ({ edgeLabels, vertexId }) => g.V(vertexId).out(...edgeLabels).id();
}
