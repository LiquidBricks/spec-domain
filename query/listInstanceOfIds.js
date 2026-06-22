export function listInstanceOfIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.instance_of.componentInstance_component.constants.LABEL).id();
}
