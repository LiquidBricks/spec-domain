export function readLifecycleWaitForValues({ g, domain }) {
  return ({ importRefId }) => g
    .V(importRefId)
    .valueMap(domain.vertex.importRef.constants.LIFECYCLE_WAIT_FOR_PROPERTY);
}
