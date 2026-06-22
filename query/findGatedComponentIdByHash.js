export function findGatedComponentIdByHash({ g, domain }) {
  return ({ hash }) => g.V().has('label', domain.vertex.component.constants.LABEL).has('hash', hash).id();
}
