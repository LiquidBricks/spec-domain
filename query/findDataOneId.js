export function findDataOneId({ g, domain }) {
  return () => g.V().has('label', domain.vertex.data.constants.LABEL).has('name', 'dataOne').id();
}
