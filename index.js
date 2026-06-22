import { vertex, meta as vertexMeta } from './vertex/index.js';
import { query } from './query/index.js';
import { mutation } from './mutation/index.js';
import { edge, meta as edgeMeta } from './edge/index.js';

export const domain = {
  vertex: vertexMeta,
  edge: edgeMeta,
};

export function dataMapper({ g, diagnostics }) {
  return {
    vertex: vertex({ g, diagnostics }),
    edge: edge({ g, diagnostics }),
    query: query({ g, domain }),
    mutation: mutation({ g, domain }),
  };
}
