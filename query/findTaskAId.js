export function findTaskAId({ g, domain }) {
  return () => g.V().has('label', domain.vertex.task.constants.LABEL).has('name', 'taskA').id();
}
