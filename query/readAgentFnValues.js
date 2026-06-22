export function readAgentFnValues({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('name', 'portAddr', 'hash', 'codeRef');
}
