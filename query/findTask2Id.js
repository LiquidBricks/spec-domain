export function findTask2Id({ g, domain }) {
  return () => g.V().has('label', domain.vertex.task.constants.LABEL).has('name', 'task2').id();
}
