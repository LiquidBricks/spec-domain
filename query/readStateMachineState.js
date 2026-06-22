export function readStateMachineState({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).valueMap('state');
}
