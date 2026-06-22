export function readAfterStartValues({ g, domain }) {
  return ({ edgeId }) => g.E(edgeId).valueMap('status', 'result');
}
