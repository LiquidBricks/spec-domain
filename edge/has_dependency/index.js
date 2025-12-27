import { task_task, meta as taskTaskMeta } from './task_task/index.js';
import { task_data, meta as taskDataMeta } from './task_data/index.js';
import { task_deferred, meta as taskDeferredMeta } from './task_deferred/index.js';
import { data_task, meta as dataTaskMeta } from './data_task/index.js';
import { data_data, meta as dataDataMeta } from './data_data/index.js';
import { data_deferred, meta as dataDeferredMeta } from './data_deferred/index.js';
import { task_service, meta as taskServiceMeta } from './task_service/index.js';
import { data_service, meta as dataServiceMeta } from './data_service/index.js';
import { service_task, meta as serviceTaskMeta } from './service_task/index.js';
import { service_data, meta as serviceDataMeta } from './service_data/index.js';
import { service_service, meta as serviceServiceMeta } from './service_service/index.js';

export function has_dependency({ g, diagnostics }) {
  return {
    task_task: task_task({ g, diagnostics }),
    task_data: task_data({ g, diagnostics }),
    task_deferred: task_deferred({ g, diagnostics }),
    task_service: task_service({ g, diagnostics }),
    data_task: data_task({ g, diagnostics }),
    data_data: data_data({ g, diagnostics }),
    data_deferred: data_deferred({ g, diagnostics }),
    data_service: data_service({ g, diagnostics }),
    service_task: service_task({ g, diagnostics }),
    service_data: service_data({ g, diagnostics }),
    service_service: service_service({ g, diagnostics }),
  };
}

export const meta = {
  task_task: taskTaskMeta,
  task_data: taskDataMeta,
  task_deferred: taskDeferredMeta,
  task_service: taskServiceMeta,
  data_task: dataTaskMeta,
  data_data: dataDataMeta,
  data_deferred: dataDeferredMeta,
  data_service: dataServiceMeta,
  service_task: serviceTaskMeta,
  service_data: serviceDataMeta,
  service_service: serviceServiceMeta,
}
