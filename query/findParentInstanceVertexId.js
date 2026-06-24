import { meta as vertex } from '../vertex/index.js';

export function findParentInstanceVertexId({ g }) {
  return ({ instanceId }) => g
    .V()
    .has('label', vertex.componentInstance.constants.LABEL)
    .has('instanceId', instanceId)
    .id();
}
