export function readResultValues({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('result');
}
