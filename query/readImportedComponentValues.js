export function readImportedComponentValues({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('hash');
}
