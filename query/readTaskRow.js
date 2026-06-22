export function readTaskRow({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('name');
}
