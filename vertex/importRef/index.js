import { schema } from "./schema.js";
import * as constants from './constants.js'

function create({ g, diagnostics }) {
  return async function ({ alias }) {
    const now = new Date().toISOString();
    const [id] = await g
      .addV(constants.LABEL)
      .property('alias', alias)
      .property('createdAt', now)
      .property('updatedAt', now)
      .id();
    return { id }
  }
}

export function importRef({ g, diagnostics }) {
  return {
    create: create({ g, diagnostics })
  }
}

export const meta = {
  schema,
  constants,
}
