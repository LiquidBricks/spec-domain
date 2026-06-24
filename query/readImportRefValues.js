export function readImportRefValues({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('alias');
}
