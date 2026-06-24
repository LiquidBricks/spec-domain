export function readAgentFnValues({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('name', 'portAddr', 'hash', 'codeRef');
}
