export function readBeforeStartValues({ g }) {
  return ({ edgeId }) => g
    .E(edgeId)
    .valueMap('status', 'result');
}
