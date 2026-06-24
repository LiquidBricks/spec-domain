import { meta as vertex } from '../vertex/index.js';

export function readLifecycleWaitForValues({ g }) {
  return ({ importRefId }) => g
    .V(importRefId)
    .valueMap(vertex.importRef.constants.LIFECYCLE_WAIT_FOR_PROPERTY);
}
