export function findDataTwoId({ g, domain }) {
  return () => g.V().has('label', domain.vertex.data.constants.LABEL).has('name', 'dataTwo').id();
}
