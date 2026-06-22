export function readResultValues({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('result');
}
