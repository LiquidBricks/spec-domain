import { component, meta as componentMeta } from './component/index.js';
import { task, meta as taskMeta } from './task/index.js';
import { data as dataVertex, meta as dataMeta } from './data/index.js';
import { deferred, meta as deferredMeta } from './deferred/index.js';
import { componentInstance, meta as componentInstanceMeta } from './componentInstance/index.js';
import { stateMachine, meta as stateMachineMeta } from './stateMachine/index.js';
import { importRef, meta as importRefMeta } from './importRef/index.js';
import { importInstanceRef, meta as importInstanceRefMeta } from './importInstanceRef/index.js';
import { gateRef, meta as gateRefMeta } from './gateRef/index.js';
import { gateInstanceRef, meta as gateInstanceRefMeta } from './gateInstanceRef/index.js';

export function vertex({ g, diagnostics }) {
  return {
    component: component({ g, diagnostics }),
    task: task({ g, diagnostics }),
    data: dataVertex({ g, diagnostics }),
    deferred: deferred({ g, diagnostics }),
    componentInstance: componentInstance({ g, diagnostics }),
    stateMachine: stateMachine({ g, diagnostics }),
    importRef: importRef({ g, diagnostics }),
    importInstanceRef: importInstanceRef({ g, diagnostics }),
    gateRef: gateRef({ g, diagnostics }),
    gateInstanceRef: gateInstanceRef({ g, diagnostics }),
  };
}
export const meta = {
  component: componentMeta,
  task: taskMeta,
  data: dataMeta,
  deferred: deferredMeta,
  componentInstance: componentInstanceMeta,
  stateMachine: stateMachineMeta,
  importRef: importRefMeta,
  importInstanceRef: importInstanceRefMeta,
  gateRef: gateRefMeta,
  gateInstanceRef: gateInstanceRefMeta,
}
