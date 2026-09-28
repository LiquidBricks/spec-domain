function requireAliasPath(value, property) {
  if (typeof value !== 'string') {
    throw new TypeError(`Injection edge ${property} must be a JSON array string`)
  }

  let parsed
  try {
    parsed = JSON.parse(value)
  } catch {
    throw new TypeError(`Injection edge ${property} must be a JSON array string`)
  }

  if (
    !Array.isArray(parsed)
    || parsed.some((alias) => typeof alias !== 'string' || !alias.length)
  ) {
    throw new TypeError(`Injection edge ${property} must be a JSON array string`)
  }
}

export function createInjectionEdge({
  traversal,
  ownerComponentId,
  sourceAliasPath,
  targetAliasPath,
  selectionAlias,
}) {
  if (typeof ownerComponentId !== 'string' || !ownerComponentId.length) {
    throw new TypeError('Injection edge ownerComponentId is required')
  }
  requireAliasPath(sourceAliasPath, 'sourceAliasPath')
  requireAliasPath(targetAliasPath, 'targetAliasPath')

  if (selectionAlias !== undefined) {
    if (typeof selectionAlias !== 'string' || !selectionAlias.length) throw new TypeError('selectionAlias must be a non-empty string')
    traversal = traversal.property('selectionAlias', selectionAlias)
  }
  return traversal
    .property('ownerComponentId', ownerComponentId)
    .property('sourceAliasPath', sourceAliasPath)
    .property('targetAliasPath', targetAliasPath)
}
