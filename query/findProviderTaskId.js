import { meta as edge } from '../edge/index.js';

export function findProviderTaskId({ g }) {
  return ({ vertexId }) => g
    .V(vertexId)
    .out(edge.has_task.component_task.constants.LABEL)
    .has('name', 'providerTask')
    .id();
}
