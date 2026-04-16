import { task_task, meta as taskTaskMeta } from './task_task/index.js';
import { task_data, meta as taskDataMeta } from './task_data/index.js';
import { data_task, meta as dataTaskMeta } from './data_task/index.js';
import { data_data, meta as dataDataMeta } from './data_data/index.js';
import { importRef_task, meta as importRefTaskMeta } from './importRef_task/index.js';
import { importRef_data, meta as importRefDataMeta } from './importRef_data/index.js';
import { gateRef_task, meta as gateRefTaskMeta } from './gateRef_task/index.js';
import { gateRef_data, meta as gateRefDataMeta } from './gateRef_data/index.js';

export function wait_for({ g, diagnostics }) {
  return {
    task_task: task_task({ g, diagnostics }),
    task_data: task_data({ g, diagnostics }),
    data_task: data_task({ g, diagnostics }),
    data_data: data_data({ g, diagnostics }),
    importRef_task: importRef_task({ g, diagnostics }),
    importRef_data: importRef_data({ g, diagnostics }),
    gateRef_task: gateRef_task({ g, diagnostics }),
    gateRef_data: gateRef_data({ g, diagnostics }),
  };
}

export const meta = {
  task_task: taskTaskMeta,
  task_data: taskDataMeta,
  data_task: dataTaskMeta,
  data_data: dataDataMeta,
  importRef_task: importRefTaskMeta,
  importRef_data: importRefDataMeta,
  gateRef_task: gateRefTaskMeta,
  gateRef_data: gateRefDataMeta,
}
