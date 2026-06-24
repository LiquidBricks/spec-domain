import { schema } from "./schema.js";
import * as constants from './constants.js'

function create({ g, diagnostics }) {
  return async function () {
    const now = new Date().toISOString();
    const [id] = await g
      .addV(constants.LABEL)
      .property('createdAt', now)
      .property('updatedAt', now)
      .id();
    return { id }
  }
}

function setResultAndUpdatedAt({ g, diagnostics }) {
  return async function ({ result, gateInstanceRefId, updatedAt = new Date().toISOString() }) {
    return g
      .V(gateInstanceRefId)
      .property('result', result)
      .property('updatedAt', updatedAt);
  }
}

export function gateInstanceRef({ g, diagnostics }) {
  return {
    create: create({ g, diagnostics }),
    setResultAndUpdatedAt: setResultAndUpdatedAt({ g, diagnostics }),
  }
}

export const meta = {
  schema,
  constants,
}
