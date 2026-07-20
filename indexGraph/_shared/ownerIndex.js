export function readValue(row, property) {
  return row?.[property];
}

export function isIsoDateTime(value) {
  if (typeof value !== 'string') return false;
  const milliseconds = Date.parse(value);
  return Number.isFinite(milliseconds)
    && new Date(milliseconds).toISOString() === value;
}

export function normalizeAliasPath(value) {
  if (typeof value !== 'string') {
    throw new TypeError('Injection alias path must be a JSON array string');
  }
  let parsed;
  try {
    parsed = JSON.parse(value);
  } catch {
    throw new TypeError('Injection alias path must be a JSON array string');
  }

  if (
    !Array.isArray(parsed)
    || parsed.some((alias) => typeof alias !== 'string' || !alias.length)
  ) {
    throw new TypeError('Injection alias path must be a JSON array string');
  }

  return parsed;
}

async function requireOwner({ g, ownerVertexId, ownerName }) {
  const [id] = await g.V(ownerVertexId).id();
  if (!id) {
    throw new TypeError(`${ownerName} vertex does not exist: ${ownerVertexId}`);
  }
}

export async function readOwnerIndex({
  g,
  ownerVertexId,
  indexVertexLabel,
  ownerEdgeLabel,
}) {
  const indexVertexIds = await g
    .V(ownerVertexId)
    .out(ownerEdgeLabel)
    .has('label', indexVertexLabel)
    .id();

  if (indexVertexIds.length > 1) {
    throw new TypeError(`Owner has multiple ${indexVertexLabel} indexes: ${ownerVertexId}`);
  }

  const [indexVertexId] = indexVertexIds;
  if (!indexVertexId) {
    return {
      found: false,
      indexVertexId: null,
      schemaVersion: null,
      builtAt: null,
      payload: null,
    };
  }

  const [row] = await g
    .V(indexVertexId)
    .valueMap('schemaVersion', 'builtAt', 'payload');

  return {
    found: true,
    indexVertexId,
    schemaVersion: readValue(row, 'schemaVersion'),
    builtAt: readValue(row, 'builtAt'),
    payload: readValue(row, 'payload'),
  };
}

export async function upsertOwnerIndex({
  g,
  ownerVertexId,
  ownerName,
  indexVertexLabel,
  ownerEdgeLabel,
  schemaVersion,
  payload,
}) {
  await requireOwner({ g, ownerVertexId, ownerName });

  const builtAt = new Date().toISOString();
  const existingIndexVertexIds = await g
    .V(ownerVertexId)
    .out(ownerEdgeLabel)
    .has('label', indexVertexLabel)
    .id();

  if (existingIndexVertexIds.length > 1) {
    throw new TypeError(`Owner has multiple ${indexVertexLabel} indexes: ${ownerVertexId}`);
  }

  let [indexVertexId] = existingIndexVertexIds;

  if (indexVertexId) {
    await g
      .V(indexVertexId)
      .property('schemaVersion', schemaVersion)
      .property('builtAt', builtAt)
      .property('payload', payload);
  } else {
    [indexVertexId] = await g
      .addV(indexVertexLabel)
      .property('schemaVersion', schemaVersion)
      .property('builtAt', builtAt)
      .property('payload', payload)
      .id();

    await g
      .addE(ownerEdgeLabel, ownerVertexId, indexVertexId)
      .property('createdAt', builtAt)
      .property('updatedAt', builtAt);
  }

  return {
    indexVertexId,
    schemaVersion,
    builtAt,
    payload,
  };
}
