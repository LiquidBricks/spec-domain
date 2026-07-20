import { schema } from "./schema.js";
import * as constants from './constants.js'
import {
  componentInstanceInjectionRouting,
  meta as injectionRoutingIndexMeta,
} from '../../indexGraph/componentInstance/injectionRouting/index.js'

function create({ g, diagnostics }) {
  return async function ({ instanceId }) {
    const now = new Date().toISOString();
    const [id] = await g
      .addV(constants.LABEL)
      .property('instanceId', instanceId)
      .property('createdAt', now)
      .property('updatedAt', now)
      .id();
    return { id }
  }
}

export function componentInstance({ g, diagnostics }) {
  return {
    create: create({ g, diagnostics }),
    index: {
      injectionRouting: componentInstanceInjectionRouting({ g, diagnostics }),
    },
  }
}

export const meta = {
  schema,
  constants,
  index: {
    injectionRouting: injectionRoutingIndexMeta,
  },
}
