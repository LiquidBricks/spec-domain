export function readTargetEdgeValues({ g }) {
  return ({ edgeId }) => g
    .E(edgeId)
    .valueMap('targetAliasPath');
}
