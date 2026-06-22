export function readTargetEdgeValues({ g, domain }) {
  return ({ edgeId }) => g.E(edgeId).valueMap('targetAliasPath');
}
