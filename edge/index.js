import { has_data_state, meta as hasDataStateMeta } from './has_data_state/index.js';
import { has_gate_state, meta as hasGateStateMeta } from './has_gate_state/index.js';
import { has_task_state, meta as hasTaskStateMeta } from './has_task_state/index.js';
import { has_task, meta as hasTaskMeta } from './has_task/index.js';
import { has_data, meta as hasDataMeta } from './has_data/index.js';
import { has_deferred, meta as hasDeferredMeta } from './has_deferred/index.js';
import { instance_of, meta as instanceOfMeta } from './instance_of/index.js';
import { has_dependency, meta as hasDependencyMeta } from './has_dependency/index.js';
import { wait_for, meta as waitForMeta } from './wait_for/index.js';
import { has_stateMachine, meta as hasStateMachineMeta } from './has_stateMachine/index.js';
import { has_import, meta as hasImportMeta } from './has_import/index.js';
import { has_gate, meta as hasGateMeta } from './has_gate/index.js';
import { has_agentFn, meta as hasAgentFnMeta } from './has_agentFn/index.js';
import { uses_import, meta as usesImportMeta } from './uses_import/index.js';
import { injects_into, meta as injectsIntoMeta } from './injects_into/index.js';
import { import_of, meta as importOfMeta } from './import_of/index.js';
import { gate_of, meta as gateOfMeta } from './gate_of/index.js';
import { uses_gate, meta as usesGateMeta } from './uses_gate/index.js';
import { provides_component, meta as providesComponentMeta } from './provides_component/index.js';
import { has_snapshot, meta as hasSnapshotMeta } from './has_snapshot/index.js';

export function edge({ g, diagnostics }) {
  return {
    has_data_state: has_data_state({ g, diagnostics }),
    has_gate_state: has_gate_state({ g, diagnostics }),
    has_task_state: has_task_state({ g, diagnostics }),
    has_task: has_task({ g, diagnostics }),
    has_data: has_data({ g, diagnostics }),
    has_deferred: has_deferred({ g, diagnostics }),
    instance_of: instance_of({ g, diagnostics }),
    has_dependency: has_dependency({ g, diagnostics }),
    wait_for: wait_for({ g, diagnostics }),
    has_stateMachine: has_stateMachine({ g, diagnostics }),
    has_import: has_import({ g, diagnostics }),
    has_gate: has_gate({ g, diagnostics }),
    has_agentFn: has_agentFn({ g, diagnostics }),
    import_of: import_of({ g, diagnostics }),
    uses_import: uses_import({ g, diagnostics }),
    gate_of: gate_of({ g, diagnostics }),
    uses_gate: uses_gate({ g, diagnostics }),
    injects_into: injects_into({ g, diagnostics }),
    provides_component: provides_component({ g, diagnostics }),
    has_snapshot: has_snapshot({ g, diagnostics }),
  };
}

export const meta = {
  has_data_state: hasDataStateMeta,
  has_gate_state: hasGateStateMeta,
  has_task_state: hasTaskStateMeta,
  has_task: hasTaskMeta,
  has_data: hasDataMeta,
  has_deferred: hasDeferredMeta,
  instance_of: instanceOfMeta,
  has_dependency: hasDependencyMeta,
  wait_for: waitForMeta,
  has_stateMachine: hasStateMachineMeta,
  has_import: hasImportMeta,
  has_gate: hasGateMeta,
  has_agentFn: hasAgentFnMeta,
  import_of: importOfMeta,
  uses_import: usesImportMeta,
  gate_of: gateOfMeta,
  uses_gate: usesGateMeta,
  injects_into: injectsIntoMeta,
  provides_component: providesComponentMeta,
  has_snapshot: hasSnapshotMeta,
}
