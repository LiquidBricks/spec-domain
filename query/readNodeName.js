export function readNodeName({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('name');
}
