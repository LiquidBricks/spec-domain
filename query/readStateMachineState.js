export function readStateMachineState({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .valueMap('state');
}
