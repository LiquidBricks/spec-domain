export function findTask1Id({ g, domain }) {
  return () => g.V().has('label', domain.vertex.task.constants.LABEL).has('name', 'task1').id();
}
