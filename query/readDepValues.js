export function readDepValues({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('label', 'name');
}
