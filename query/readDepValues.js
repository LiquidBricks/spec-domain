export function readDepValues({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('label', 'name');
}
