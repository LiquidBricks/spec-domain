export function listDepsTaskIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.has_dependency.gateRef_task.constants.LABEL).id();
}
