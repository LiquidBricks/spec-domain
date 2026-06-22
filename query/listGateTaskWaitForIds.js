export function listGateTaskWaitForIds({ g, domain }) {
  return ({ vertexId }) => g.V(vertexId).out(domain.edge.wait_for.gateRef_task.constants.LABEL).id();
}
