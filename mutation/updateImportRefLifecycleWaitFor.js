export function updateImportRefLifecycleWaitFor({ g, domain }) {
  return ({ importRefId, waitFor }) => g
    .V(importRefId)
    .property(domain.vertex.importRef.constants.LIFECYCLE_WAIT_FOR_PROPERTY, waitFor);
}
