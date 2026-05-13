import { schema } from "./schema.js";
import * as constants from './constants.js'

function create({ g, diagnostics }) {
  return async function ({ name, portAddr, hash, codeRef }) {
    const now = new Date().toISOString();
    let vertex = g
      .addV(constants.LABEL)
      .property('name', name)
      .property('portAddr', portAddr)
      .property('createdAt', now)
      .property('updatedAt', now)

    if (hash !== undefined) {
      vertex = vertex.property('hash', hash)
    }

    if (codeRef) {
      const { file, line, column } = codeRef
      vertex = vertex.property('codeRef', { file, line, column })
    }

    const [id] = await vertex.id();
    return { id }
  }
}

export function agentFn({ g, diagnostics }) {
  return {
    create: create({ g, diagnostics })
  }
}

export const meta = {
  schema,
  constants,
}
