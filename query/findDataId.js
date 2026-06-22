export function findDataId({ g, domain }) {
  return () => g.V().has('label', domain.vertex.data.constants.LABEL).has('name', 'dataNoFnc').id();
}
