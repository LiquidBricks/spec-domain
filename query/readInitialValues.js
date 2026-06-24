export function readInitialValues({ g }) {
  return ({ edgeId }) => g
    .E(edgeId)
    .valueMap('status', 'result', 'updatedAt');
}
