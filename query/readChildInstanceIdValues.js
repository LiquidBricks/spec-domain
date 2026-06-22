export function readChildInstanceIdValues({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('instanceId');
}
