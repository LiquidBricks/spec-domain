import { schema } from "./schema.js";
import * as constants from './constants.js'

function create({ g, diagnostics }) {
  return async function ({ alias, fnc, codeRef }) {
    const now = new Date().toISOString();
    const vertex = g
      .addV(constants.LABEL)
      .property('alias', alias)
      .property('fnc', fnc)
      .property('createdAt', now)
      .property('updatedAt', now)

    if (codeRef) {
      const { file, line, column } = codeRef
      vertex.property('codeRef', { file, line, column })
    }

    const [id] = await vertex.id();
    return { id }
  }
}

export function gateRef({ g, diagnostics }) {
  return {
    create: create({ g, diagnostics })
  }
}

export const meta = {
  schema,
  constants,
}
