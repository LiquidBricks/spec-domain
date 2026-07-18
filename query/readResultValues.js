export function readResultValues({ g }) {
  return ({ edgeId }) => g
    .E(edgeId)
    .valueMap('result');
}
