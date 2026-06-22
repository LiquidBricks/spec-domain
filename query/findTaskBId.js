export function findTaskBId({ g, domain }) {
  return () => g.V().has('label', domain.vertex.task.constants.LABEL).has('name', 'taskB').id();
}
