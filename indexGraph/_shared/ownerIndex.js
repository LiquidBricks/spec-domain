export function readValue(row, property) {
  const value = row?.[property] ?? row;
  return Array.isArray(value) && value.length === 1 ? value[0] : value;
}

export function normalizeAliasPath(value) {
  const candidate = Array.isArray(value) && value.length === 1 && typeof value[0] === 'string'
    ? value[0]
    : value;

  if (candidate === undefined || candidate === null || candidate === '') return [];

  if (Array.isArray(candidate)) {
    return candidate
      .map((entry) => String(entry).trim())
      .filter(Boolean);
  }

  if (typeof candidate !== 'string') return [];

  const trimmed = candidate.trim();
  if (!trimmed) return [];

  try {
    const parsed = JSON.parse(trimmed);
    if (Array.isArray(parsed)) {
      return parsed
        .map((entry) => String(entry).trim())
        .filter(Boolean);
    }
  } catch {
    // Older records may use dot notation instead of a JSON array string.
  }

  return trimmed
    .split('.')
    .map((entry) => entry.trim())
    .filter(Boolean);
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

  const [indexVertexId] = indexVertexIds ?? [];
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

  let [indexVertexId] = existingIndexVertexIds ?? [];

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

  const duplicateIndexVertexIds = (existingIndexVertexIds ?? []).slice(1);
  if (duplicateIndexVertexIds.length) {
    await g.V(duplicateIndexVertexIds).drop();
  }

  return {
    found: true,
    indexVertexId,
    schemaVersion,
    builtAt,
    payload,
  };
}
