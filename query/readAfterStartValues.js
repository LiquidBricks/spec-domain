export function readAfterStartValues({ g }) {
  return ({ edgeId }) => g
    .E(edgeId)
    .valueMap('status', 'result');
}
