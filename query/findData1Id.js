export function findData1Id({ g, domain }) {
  return () => g.V().has('label', domain.vertex.data.constants.LABEL).has('name', 'data1').id();
}
