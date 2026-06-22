export function readStatusMaps({ g, domain }) {
  return ({ edgeLabels, vertexId }) => g.V(vertexId).outE(...edgeLabels).valueMap('status');
}
