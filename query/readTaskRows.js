export function readTaskRows({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('name');
}
