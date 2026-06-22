import { createInjectionEdgeWithTargetAliasPath } from "./createInjectionEdgeWithTargetAliasPath.js";
import { markDataStateRunning } from "./markDataStateRunning.js";
import { markStateMachineComplete } from "./markStateMachineComplete.js";
import { markStateMachineRunning } from "./markStateMachineRunning.js";
import { markStateMachineCompleteState } from "./markStateMachineCompleteState.js";
import { setStateEdgeStatus } from "./setStateEdgeStatus.js";
import { setStateEdgeStatusAndResult } from "./setStateEdgeStatusAndResult.js";
import { markTaskStateRunning } from "./markTaskStateRunning.js";
import { updateGateInstanceRefResultAndUpdatedAt } from "./updateGateInstanceRefResultAndUpdatedAt.js";
import { updateImportRefLifecycleWaitFor } from "./updateImportRefLifecycleWaitFor.js";
import { updateStateEdgeResultAndStatusAndUpdatedAt } from "./updateStateEdgeResultAndStatusAndUpdatedAt.js";

export function mutation({ g, domain }) {
  return {
    createInjectionEdgeWithTargetAliasPath: createInjectionEdgeWithTargetAliasPath({ g, domain }),
    markDataStateRunning: markDataStateRunning({ g, domain }),
    markStateMachineCompleteState: markStateMachineCompleteState({ g, domain }),
    setStateEdgeStatus: setStateEdgeStatus({ g, domain }),
    setStateEdgeStatusAndResult: setStateEdgeStatusAndResult({ g, domain }),
    markStateMachineComplete: markStateMachineComplete({ g, domain }),
    markStateMachineRunning: markStateMachineRunning({ g, domain }),
    markTaskStateRunning: markTaskStateRunning({ g, domain }),
    updateGateInstanceRefResultAndUpdatedAt: updateGateInstanceRefResultAndUpdatedAt({ g, domain }),
    updateImportRefLifecycleWaitFor: updateImportRefLifecycleWaitFor({ g, domain }),
    updateStateEdgeResultAndStatusAndUpdatedAt: updateStateEdgeResultAndStatusAndUpdatedAt({ g, domain }),
  };
}
