export function findDeferredId({ g, domain }) {
  return () => g.V().has('label', domain.vertex.deferred.constants.LABEL).has('name', 'deferred').id();
}
