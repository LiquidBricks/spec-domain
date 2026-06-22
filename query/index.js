import { findBootstrapTaskId } from "./findBootstrapTaskId.js";
import { findComponentAgentVertexId } from "./findComponentAgentVertexId.js";
import { findComponentIdByHash } from "./findComponentIdByHash.js";
import { findComponentIdForData } from "./findComponentIdForData.js";
import { findComponentIdForDeferred } from "./findComponentIdForDeferred.js";
import { findComponentIdForInstance } from "./findComponentIdForInstance.js";
import { findComponentIdForTask } from "./findComponentIdForTask.js";
import { findComponentInstanceVertexId } from "./findComponentInstanceVertexId.js";
import { findComponentNodeIdByName } from "./findComponentNodeIdByName.js";
import { findComponentVertexId } from "./findComponentVertexId.js";
import { findData1Id } from "./findData1Id.js";
import { findDataId } from "./findDataId.js";
import { findDataOneId } from "./findDataOneId.js";
import { findDataStateEdgeIdByName } from "./findDataStateEdgeIdByName.js";
import { findDataTwoId } from "./findDataTwoId.js";
import { findDataVertexId } from "./findDataVertexId.js";
import { findDeferredId } from "./findDeferredId.js";
import { findDependencyTargetNodeId } from "./findDependencyTargetNodeId.js";
import { findDependentComponentId } from "./findDependentComponentId.js";
import { findEdgeId } from "./findEdgeId.js";
import { findEdgeTargetNodeId } from "./findEdgeTargetNodeId.js";
import { findFirstComponentId } from "./findFirstComponentId.js";
import { findFirstInitId } from "./findFirstInitId.js";
import { findGatedComponentIdByHash } from "./findGatedComponentIdByHash.js";
import { findGatedComponentIdForGateRef } from "./findGatedComponentIdForGateRef.js";
import { findGatedInstanceComponentId } from "./findGatedInstanceComponentId.js";
import { findGatedInstanceVertexIdByAlias } from "./findGatedInstanceVertexIdByAlias.js";
import { findGatedInstanceVertexIdForRef } from "./findGatedInstanceVertexIdForRef.js";
import { findGateInstanceRefIdByAlias } from "./findGateInstanceRefIdByAlias.js";
import { findGateInstanceRefIdForInstance } from "./findGateInstanceRefIdForInstance.js";
import { findGateInstanceVertexIdByAlias } from "./findGateInstanceVertexIdByAlias.js";
import { findGateInstanceVertexIdForRef } from "./findGateInstanceVertexIdForRef.js";
import { findGateRefIdByAlias } from "./findGateRefIdByAlias.js";
import { findGateRefIdForInstanceRef } from "./findGateRefIdForInstanceRef.js";
import { findHasDataStateStateMachineData } from "./findHasDataStateStateMachineData.js";
import { findHasDependencyDataData } from "./findHasDependencyDataData.js";
import { findHasDependencyDataDeferred } from "./findHasDependencyDataDeferred.js";
import { findHasDependencyGateRefData } from "./findHasDependencyGateRefData.js";
import { findHasDependencyGateRefTask } from "./findHasDependencyGateRefTask.js";
import { findHasDependencyTaskData } from "./findHasDependencyTaskData.js";
import { findHasDependencyTaskDeferred } from "./findHasDependencyTaskDeferred.js";
import { findHasDependencyTaskTask } from "./findHasDependencyTaskTask.js";
import { findHasTaskStateStateMachineTask } from "./findHasTaskStateStateMachineTask.js";
import { findImportedComponentIdByHash } from "./findImportedComponentIdByHash.js";
import { findImportedComponentIdForImportRef } from "./findImportedComponentIdForImportRef.js";
import { findImportedInstanceVertexIdByAlias } from "./findImportedInstanceVertexIdByAlias.js";
import { findImportedInstanceVertexIdForRef } from "./findImportedInstanceVertexIdForRef.js";
import { findImportInjectionTargetNodeId } from "./findImportInjectionTargetNodeId.js";
import { findImportInstanceRefIdByAlias } from "./findImportInstanceRefIdByAlias.js";
import { findImportInstanceRefIdForInstance } from "./findImportInstanceRefIdForInstance.js";
import { findImportInstanceVertexId } from "./findImportInstanceVertexId.js";
import { findImportRefIdByAlias } from "./findImportRefIdByAlias.js";
import { findImportRefIdForInstanceRef } from "./findImportRefIdForInstanceRef.js";
import { findImportRefLookupId } from "./findImportRefLookupId.js";
import { findInjectsIntoDataTask } from "./findInjectsIntoDataTask.js";
import { findInjectsIntoTaskData } from "./findInjectsIntoTaskData.js";
import { findInstanceVertexId } from "./findInstanceVertexId.js";
import { findLeafComponentId } from "./findLeafComponentId.js";
import { findLinkedGateRefId } from "./findLinkedGateRefId.js";
import { findMainTaskId } from "./findMainTaskId.js";
import { findNestedImportRefId } from "./findNestedImportRefId.js";
import { findNestedInstanceVertexId } from "./findNestedInstanceVertexId.js";
import { findNextInstanceVertexId } from "./findNextInstanceVertexId.js";
import { findOwningComponentId } from "./findOwningComponentId.js";
import { findOwningGateInstanceRefId } from "./findOwningGateInstanceRefId.js";
import { findParentGateId } from "./findParentGateId.js";
import { findParentId } from "./findParentId.js";
import { findParentImportId } from "./findParentImportId.js";
import { findParentInstanceVertexId } from "./findParentInstanceVertexId.js";
import { findProvidedComponentId } from "./findProvidedComponentId.js";
import { findProviderComponentId } from "./findProviderComponentId.js";
import { findProviderDataId } from "./findProviderDataId.js";
import { findProviderTaskId } from "./findProviderTaskId.js";
import { findRootDataId } from "./findRootDataId.js";
import { findRootInstanceVertexId } from "./findRootInstanceVertexId.js";
import { findSharedComponentId } from "./findSharedComponentId.js";
import { findStateEdgeIdByTypeAndName } from "./findStateEdgeIdByTypeAndName.js";
import { findStateEdgeIdForTargetNode } from "./findStateEdgeIdForTargetNode.js";
import { findStateEdgeTargetNodeId } from "./findStateEdgeTargetNodeId.js";
import { findTargetComponentId } from "./findTargetComponentId.js";
import { findTargetDataId } from "./findTargetDataId.js";
import { findTargetTaskId } from "./findTargetTaskId.js";
import { findTask1Id } from "./findTask1Id.js";
import { findTask2Id } from "./findTask2Id.js";
import { findTaskAId } from "./findTaskAId.js";
import { findTaskBId } from "./findTaskBId.js";
import { findTaskNodeId } from "./findTaskNodeId.js";
import { findTaskStateEdgeIdByName } from "./findTaskStateEdgeIdByName.js";
import { findUsesGateGateInstanceRefComponentInstance } from "./findUsesGateGateInstanceRefComponentInstance.js";
import { findUsesImportImportInstanceRefComponentInstance } from "./findUsesImportImportInstanceRefComponentInstance.js";
import { findWordsComponentId } from "./findWordsComponentId.js";
import { findWordsProcessId } from "./findWordsProcessId.js";
import { findWordsVocabId } from "./findWordsVocabId.js";
import { listAgentFnIds } from "./listAgentFnIds.js";
import { listComponentDataIds } from "./listComponentDataIds.js";
import { listComponentIds } from "./listComponentIds.js";
import { listComponentTaskIds } from "./listComponentTaskIds.js";
import { listDataNodeIds } from "./listDataNodeIds.js";
import { listDataStateEdgeIds } from "./listDataStateEdgeIds.js";
import { listDependencyNodeIds } from "./listDependencyNodeIds.js";
import { listDependentDataNodeIds } from "./listDependentDataNodeIds.js";
import { listDependentTaskNodeIds } from "./listDependentTaskNodeIds.js";
import { listDepsDataIds } from "./listDepsDataIds.js";
import { listDepsTaskIds } from "./listDepsTaskIds.js";
import { listDepTaskIds } from "./listDepTaskIds.js";
import { listGateDataWaitForIds } from "./listGateDataWaitForIds.js";
import { listGatedInstanceIds } from "./listGatedInstanceIds.js";
import { listGateInstanceRefIds } from "./listGateInstanceRefIds.js";
import { listGateParentInstanceVertexIds } from "./listGateParentInstanceVertexIds.js";
import { listGateRefIds } from "./listGateRefIds.js";
import { listGateRefInstanceIds } from "./listGateRefInstanceIds.js";
import { listGateTaskWaitForIds } from "./listGateTaskWaitForIds.js";
import { listImportDataWaitForIds } from "./listImportDataWaitForIds.js";
import { listImportedComponentIds } from "./listImportedComponentIds.js";
import { listImportedInstanceIds } from "./listImportedInstanceIds.js";
import { listImportInstanceRefIds } from "./listImportInstanceRefIds.js";
import { listImportInstanceVertexIds } from "./listImportInstanceVertexIds.js";
import { listImportParentInstanceVertexIds } from "./listImportParentInstanceVertexIds.js";
import { listImportRefIds } from "./listImportRefIds.js";
import { listImportRefInstanceIds } from "./listImportRefInstanceIds.js";
import { listImportTaskWaitForIds } from "./listImportTaskWaitForIds.js";
import { listInstanceOfIds } from "./listInstanceOfIds.js";
import { listMidImportInstanceRefIds } from "./listMidImportInstanceRefIds.js";
import { listMidInstanceIds } from "./listMidInstanceIds.js";
import { listNestedComponentIds } from "./listNestedComponentIds.js";
import { listParentGateInstanceIds } from "./listParentGateInstanceIds.js";
import { listParentInstanceIds } from "./listParentInstanceIds.js";
import { listStateEdgeIds } from "./listStateEdgeIds.js";
import { listTargetEdgeIds } from "./listTargetEdgeIds.js";
import { listTaskNodeIds } from "./listTaskNodeIds.js";
import { listWaitForDataIds } from "./listWaitForDataIds.js";
import { listWaitForTaskIds } from "./listWaitForTaskIds.js";
import { readAfterStartValues } from "./readAfterStartValues.js";
import { readAgentFnValues } from "./readAgentFnValues.js";
import { readBeforeStartValues } from "./readBeforeStartValues.js";
import { readBlockedGateState } from "./readBlockedGateState.js";
import { readChildInstanceIdValues } from "./readChildInstanceIdValues.js";
import { readChildState } from "./readChildState.js";
import { readChildStateMachineId } from "./readChildStateMachineId.js";
import { readCompletedState } from "./readCompletedState.js";
import { readComponentData } from "./readComponentData.js";
import { readComponentDeferred } from "./readComponentDeferred.js";
import { readComponentHash } from "./readComponentHash.js";
import { readComponentInstanceId } from "./readComponentInstanceId.js";
import { readComponentRow } from "./readComponentRow.js";
import { readComponentRows } from "./readComponentRows.js";
import { readComponentTasks } from "./readComponentTasks.js";
import { readComponentValues } from "./readComponentValues.js";
import { readDataDeps } from "./readDataDeps.js";
import { readDataOneDataInjects } from "./readDataOneDataInjects.js";
import { readDataOneTaskInjects } from "./readDataOneTaskInjects.js";
import { readDataRow } from "./readDataRow.js";
import { readDataStateEdgeId } from "./readDataStateEdgeId.js";
import { readDataStateStatus } from "./readDataStateStatus.js";
import { readDataTargets } from "./readDataTargets.js";
import { readDataTaskDeps } from "./readDataTaskDeps.js";
import { readDependencyStateResult } from "./readDependencyStateResult.js";
import { readDepValues } from "./readDepValues.js";
import { readGatedComponentValues } from "./readGatedComponentValues.js";
import { readGateInstanceId } from "./readGateInstanceId.js";
import { readGateInstanceRefs } from "./readGateInstanceRefs.js";
import { readGateInstanceValues } from "./readGateInstanceValues.js";
import { readGateRefAlias } from "./readGateRefAlias.js";
import { readGateRefAliasAndFunction } from "./readGateRefAliasAndFunction.js";
import { readGateRefAliasAndName } from "./readGateRefAliasAndName.js";
import { readGateStateMachineId } from "./readGateStateMachineId.js";
import { readGateValues } from "./readGateValues.js";
import { readIdentifierValues } from "./readIdentifierValues.js";
import { readImportedComponentValues } from "./readImportedComponentValues.js";
import { readImportedInstanceIdForRef } from "./readImportedInstanceIdForRef.js";
import { readImportInstanceId } from "./readImportInstanceId.js";
import { readImportRefAlias } from "./readImportRefAlias.js";
import { readImportRefValues } from "./readImportRefValues.js";
import { readImportStateMachineId } from "./readImportStateMachineId.js";
import { readInitialState } from "./readInitialState.js";
import { readInitialValues } from "./readInitialValues.js";
import { readInstanceIdValues } from "./readInstanceIdValues.js";
import { readLifecycleWaitForValues } from "./readLifecycleWaitForValues.js";
import { readNestedAliasRow } from "./readNestedAliasRow.js";
import { readNext } from "./readNext.js";
import { readNodeName } from "./readNodeName.js";
import { readParentInstanceId } from "./readParentInstanceId.js";
import { readParentInstanceIdMap } from "./readParentInstanceIdMap.js";
import { readParentStateMachineId } from "./readParentStateMachineId.js";
import { readProviderInstanceValues } from "./readProviderInstanceValues.js";
import { readResultValues } from "./readResultValues.js";
import { readRunningState } from "./readRunningState.js";
import { readStateEdgeStatus } from "./readStateEdgeStatus.js";
import { readStateEdgeStatusAndResult } from "./readStateEdgeStatusAndResult.js";
import { readStateEdgeStatusResultAndUpdatedAt } from "./readStateEdgeStatusResultAndUpdatedAt.js";
import { readStateEdgeTargetName } from "./readStateEdgeTargetName.js";
import { readStateMachineDataIds } from "./readStateMachineDataIds.js";
import { readStateMachineId } from "./readStateMachineId.js";
import { readStateMachineState } from "./readStateMachineState.js";
import { readStateMachineStateAndUpdatedAt } from "./readStateMachineStateAndUpdatedAt.js";
import { readStateMachineStateByInstanceId } from "./readStateMachineStateByInstanceId.js";
import { readStateMachineTaskIds } from "./readStateMachineTaskIds.js";
import { readStateMachineVertexId } from "./readStateMachineVertexId.js";
import { readStatusMaps } from "./readStatusMaps.js";
import { readTargetDataTaskTargets } from "./readTargetDataTaskTargets.js";
import { readTargetEdgeValues } from "./readTargetEdgeValues.js";
import { readTargetInstanceMap } from "./readTargetInstanceMap.js";
import { readTargetInstanceValues } from "./readTargetInstanceValues.js";
import { readTargetStateMachineId } from "./readTargetStateMachineId.js";
import { readTargetTaskDataTargets } from "./readTargetTaskDataTargets.js";
import { readTask1DataDeps } from "./readTask1DataDeps.js";
import { readTask1DeferredDeps } from "./readTask1DeferredDeps.js";
import { readTaskADataInjects } from "./readTaskADataInjects.js";
import { readTaskATaskInjects } from "./readTaskATaskInjects.js";
import { readTaskDeps } from "./readTaskDeps.js";
import { readTaskRow } from "./readTaskRow.js";
import { readTaskRows } from "./readTaskRows.js";
import { readTaskStateEdgeId } from "./readTaskStateEdgeId.js";
import { readTaskStateStatus } from "./readTaskStateStatus.js";
import { readTaskTargets } from "./readTaskTargets.js";
import { readValues } from "./readValues.js";

export function query({ g, domain }) {
  return {
    findBootstrapTaskId: findBootstrapTaskId({ g, domain }),
    findComponentAgentVertexId: findComponentAgentVertexId({ g, domain }),
    findComponentIdByHash: findComponentIdByHash({ g, domain }),
    findComponentIdForData: findComponentIdForData({ g, domain }),
    findComponentIdForDeferred: findComponentIdForDeferred({ g, domain }),
    findComponentIdForInstance: findComponentIdForInstance({ g, domain }),
    findComponentIdForTask: findComponentIdForTask({ g, domain }),
    findComponentInstanceVertexId: findComponentInstanceVertexId({ g, domain }),
    findComponentNodeIdByName: findComponentNodeIdByName({ g, domain }),
    findComponentVertexId: findComponentVertexId({ g, domain }),
    findData1Id: findData1Id({ g, domain }),
    findDataId: findDataId({ g, domain }),
    findDataOneId: findDataOneId({ g, domain }),
    findDataStateEdgeIdByName: findDataStateEdgeIdByName({ g, domain }),
    findDataTwoId: findDataTwoId({ g, domain }),
    findDataVertexId: findDataVertexId({ g, domain }),
    findDeferredId: findDeferredId({ g, domain }),
    findDependencyTargetNodeId: findDependencyTargetNodeId({ g, domain }),
    findDependentComponentId: findDependentComponentId({ g, domain }),
    findEdgeId: findEdgeId({ g, domain }),
    findEdgeTargetNodeId: findEdgeTargetNodeId({ g, domain }),
    findFirstComponentId: findFirstComponentId({ g, domain }),
    findFirstInitId: findFirstInitId({ g, domain }),
    findGatedComponentIdByHash: findGatedComponentIdByHash({ g, domain }),
    findGatedComponentIdForGateRef: findGatedComponentIdForGateRef({ g, domain }),
    findGatedInstanceComponentId: findGatedInstanceComponentId({ g, domain }),
    findGatedInstanceVertexIdByAlias: findGatedInstanceVertexIdByAlias({ g, domain }),
    findGatedInstanceVertexIdForRef: findGatedInstanceVertexIdForRef({ g, domain }),
    findGateInstanceRefIdByAlias: findGateInstanceRefIdByAlias({ g, domain }),
    findGateInstanceRefIdForInstance: findGateInstanceRefIdForInstance({ g, domain }),
    findGateInstanceVertexIdByAlias: findGateInstanceVertexIdByAlias({ g, domain }),
    findGateInstanceVertexIdForRef: findGateInstanceVertexIdForRef({ g, domain }),
    findGateRefIdByAlias: findGateRefIdByAlias({ g, domain }),
    findGateRefIdForInstanceRef: findGateRefIdForInstanceRef({ g, domain }),
    findHasDataStateStateMachineData: findHasDataStateStateMachineData({ g, domain }),
    findHasDependencyDataData: findHasDependencyDataData({ g, domain }),
    findHasDependencyDataDeferred: findHasDependencyDataDeferred({ g, domain }),
    findHasDependencyGateRefData: findHasDependencyGateRefData({ g, domain }),
    findHasDependencyGateRefTask: findHasDependencyGateRefTask({ g, domain }),
    findHasDependencyTaskData: findHasDependencyTaskData({ g, domain }),
    findHasDependencyTaskDeferred: findHasDependencyTaskDeferred({ g, domain }),
    findHasDependencyTaskTask: findHasDependencyTaskTask({ g, domain }),
    findHasTaskStateStateMachineTask: findHasTaskStateStateMachineTask({ g, domain }),
    findImportedComponentIdByHash: findImportedComponentIdByHash({ g, domain }),
    findImportedComponentIdForImportRef: findImportedComponentIdForImportRef({ g, domain }),
    findImportedInstanceVertexIdByAlias: findImportedInstanceVertexIdByAlias({ g, domain }),
    findImportedInstanceVertexIdForRef: findImportedInstanceVertexIdForRef({ g, domain }),
    findImportInjectionTargetNodeId: findImportInjectionTargetNodeId({ g, domain }),
    findImportInstanceRefIdByAlias: findImportInstanceRefIdByAlias({ g, domain }),
    findImportInstanceRefIdForInstance: findImportInstanceRefIdForInstance({ g, domain }),
    findImportInstanceVertexId: findImportInstanceVertexId({ g, domain }),
    findImportRefIdByAlias: findImportRefIdByAlias({ g, domain }),
    findImportRefIdForInstanceRef: findImportRefIdForInstanceRef({ g, domain }),
    findImportRefLookupId: findImportRefLookupId({ g, domain }),
    findInjectsIntoDataTask: findInjectsIntoDataTask({ g, domain }),
    findInjectsIntoTaskData: findInjectsIntoTaskData({ g, domain }),
    findInstanceVertexId: findInstanceVertexId({ g, domain }),
    findLeafComponentId: findLeafComponentId({ g, domain }),
    findLinkedGateRefId: findLinkedGateRefId({ g, domain }),
    findMainTaskId: findMainTaskId({ g, domain }),
    findNestedImportRefId: findNestedImportRefId({ g, domain }),
    findNestedInstanceVertexId: findNestedInstanceVertexId({ g, domain }),
    findNextInstanceVertexId: findNextInstanceVertexId({ g, domain }),
    findOwningComponentId: findOwningComponentId({ g, domain }),
    findOwningGateInstanceRefId: findOwningGateInstanceRefId({ g, domain }),
    findParentGateId: findParentGateId({ g, domain }),
    findParentId: findParentId({ g, domain }),
    findParentImportId: findParentImportId({ g, domain }),
    findParentInstanceVertexId: findParentInstanceVertexId({ g, domain }),
    findProvidedComponentId: findProvidedComponentId({ g, domain }),
    findProviderComponentId: findProviderComponentId({ g, domain }),
    findProviderDataId: findProviderDataId({ g, domain }),
    findProviderTaskId: findProviderTaskId({ g, domain }),
    findRootDataId: findRootDataId({ g, domain }),
    findRootInstanceVertexId: findRootInstanceVertexId({ g, domain }),
    findSharedComponentId: findSharedComponentId({ g, domain }),
    findStateEdgeIdByTypeAndName: findStateEdgeIdByTypeAndName({ g, domain }),
    findStateEdgeIdForTargetNode: findStateEdgeIdForTargetNode({ g, domain }),
    findStateEdgeTargetNodeId: findStateEdgeTargetNodeId({ g, domain }),
    findTargetComponentId: findTargetComponentId({ g, domain }),
    findTargetDataId: findTargetDataId({ g, domain }),
    findTargetTaskId: findTargetTaskId({ g, domain }),
    findTask1Id: findTask1Id({ g, domain }),
    findTask2Id: findTask2Id({ g, domain }),
    findTaskAId: findTaskAId({ g, domain }),
    findTaskBId: findTaskBId({ g, domain }),
    findTaskNodeId: findTaskNodeId({ g, domain }),
    findTaskStateEdgeIdByName: findTaskStateEdgeIdByName({ g, domain }),
    findUsesGateGateInstanceRefComponentInstance: findUsesGateGateInstanceRefComponentInstance({ g, domain }),
    findUsesImportImportInstanceRefComponentInstance: findUsesImportImportInstanceRefComponentInstance({ g, domain }),
    findWordsComponentId: findWordsComponentId({ g, domain }),
    findWordsProcessId: findWordsProcessId({ g, domain }),
    findWordsVocabId: findWordsVocabId({ g, domain }),
    listAgentFnIds: listAgentFnIds({ g, domain }),
    listComponentDataIds: listComponentDataIds({ g, domain }),
    listComponentIds: listComponentIds({ g, domain }),
    listComponentTaskIds: listComponentTaskIds({ g, domain }),
    listDataNodeIds: listDataNodeIds({ g, domain }),
    listDataStateEdgeIds: listDataStateEdgeIds({ g, domain }),
    listDependencyNodeIds: listDependencyNodeIds({ g, domain }),
    listDependentDataNodeIds: listDependentDataNodeIds({ g, domain }),
    listDependentTaskNodeIds: listDependentTaskNodeIds({ g, domain }),
    listDepsDataIds: listDepsDataIds({ g, domain }),
    listDepsTaskIds: listDepsTaskIds({ g, domain }),
    listDepTaskIds: listDepTaskIds({ g, domain }),
    listGateDataWaitForIds: listGateDataWaitForIds({ g, domain }),
    listGatedInstanceIds: listGatedInstanceIds({ g, domain }),
    listGateInstanceRefIds: listGateInstanceRefIds({ g, domain }),
    listGateParentInstanceVertexIds: listGateParentInstanceVertexIds({ g, domain }),
    listGateRefIds: listGateRefIds({ g, domain }),
    listGateRefInstanceIds: listGateRefInstanceIds({ g, domain }),
    listGateTaskWaitForIds: listGateTaskWaitForIds({ g, domain }),
    listImportDataWaitForIds: listImportDataWaitForIds({ g, domain }),
    listImportedComponentIds: listImportedComponentIds({ g, domain }),
    listImportedInstanceIds: listImportedInstanceIds({ g, domain }),
    listImportInstanceRefIds: listImportInstanceRefIds({ g, domain }),
    listImportInstanceVertexIds: listImportInstanceVertexIds({ g, domain }),
    listImportParentInstanceVertexIds: listImportParentInstanceVertexIds({ g, domain }),
    listImportRefIds: listImportRefIds({ g, domain }),
    listImportRefInstanceIds: listImportRefInstanceIds({ g, domain }),
    listImportTaskWaitForIds: listImportTaskWaitForIds({ g, domain }),
    listInstanceOfIds: listInstanceOfIds({ g, domain }),
    listMidImportInstanceRefIds: listMidImportInstanceRefIds({ g, domain }),
    listMidInstanceIds: listMidInstanceIds({ g, domain }),
    listNestedComponentIds: listNestedComponentIds({ g, domain }),
    listParentGateInstanceIds: listParentGateInstanceIds({ g, domain }),
    listParentInstanceIds: listParentInstanceIds({ g, domain }),
    listStateEdgeIds: listStateEdgeIds({ g, domain }),
    listTargetEdgeIds: listTargetEdgeIds({ g, domain }),
    listTaskNodeIds: listTaskNodeIds({ g, domain }),
    listWaitForDataIds: listWaitForDataIds({ g, domain }),
    listWaitForTaskIds: listWaitForTaskIds({ g, domain }),
    readAfterStartValues: readAfterStartValues({ g, domain }),
    readAgentFnValues: readAgentFnValues({ g, domain }),
    readBeforeStartValues: readBeforeStartValues({ g, domain }),
    readBlockedGateState: readBlockedGateState({ g, domain }),
    readChildInstanceIdValues: readChildInstanceIdValues({ g, domain }),
    readChildState: readChildState({ g, domain }),
    readChildStateMachineId: readChildStateMachineId({ g, domain }),
    readCompletedState: readCompletedState({ g, domain }),
    readComponentData: readComponentData({ g, domain }),
    readComponentDeferred: readComponentDeferred({ g, domain }),
    readComponentHash: readComponentHash({ g, domain }),
    readComponentInstanceId: readComponentInstanceId({ g, domain }),
    readComponentRow: readComponentRow({ g, domain }),
    readComponentRows: readComponentRows({ g, domain }),
    readComponentTasks: readComponentTasks({ g, domain }),
    readComponentValues: readComponentValues({ g, domain }),
    readDataDeps: readDataDeps({ g, domain }),
    readDataOneDataInjects: readDataOneDataInjects({ g, domain }),
    readDataOneTaskInjects: readDataOneTaskInjects({ g, domain }),
    readDataRow: readDataRow({ g, domain }),
    readDataStateEdgeId: readDataStateEdgeId({ g, domain }),
    readDataStateStatus: readDataStateStatus({ g, domain }),
    readDataTargets: readDataTargets({ g, domain }),
    readDataTaskDeps: readDataTaskDeps({ g, domain }),
    readDependencyStateResult: readDependencyStateResult({ g, domain }),
    readDepValues: readDepValues({ g, domain }),
    readGatedComponentValues: readGatedComponentValues({ g, domain }),
    readGateInstanceId: readGateInstanceId({ g, domain }),
    readGateInstanceRefs: readGateInstanceRefs({ g, domain }),
    readGateInstanceValues: readGateInstanceValues({ g, domain }),
    readGateRefAlias: readGateRefAlias({ g, domain }),
    readGateRefAliasAndFunction: readGateRefAliasAndFunction({ g, domain }),
    readGateRefAliasAndName: readGateRefAliasAndName({ g, domain }),
    readGateStateMachineId: readGateStateMachineId({ g, domain }),
    readGateValues: readGateValues({ g, domain }),
    readIdentifierValues: readIdentifierValues({ g, domain }),
    readImportedComponentValues: readImportedComponentValues({ g, domain }),
    readImportedInstanceIdForRef: readImportedInstanceIdForRef({ g, domain }),
    readImportInstanceId: readImportInstanceId({ g, domain }),
    readImportRefAlias: readImportRefAlias({ g, domain }),
    readImportRefValues: readImportRefValues({ g, domain }),
    readImportStateMachineId: readImportStateMachineId({ g, domain }),
    readInitialState: readInitialState({ g, domain }),
    readInitialValues: readInitialValues({ g, domain }),
    readInstanceIdValues: readInstanceIdValues({ g, domain }),
    readLifecycleWaitForValues: readLifecycleWaitForValues({ g, domain }),
    readNestedAliasRow: readNestedAliasRow({ g, domain }),
    readNext: readNext({ g, domain }),
    readNodeName: readNodeName({ g, domain }),
    readParentInstanceId: readParentInstanceId({ g, domain }),
    readParentInstanceIdMap: readParentInstanceIdMap({ g, domain }),
    readParentStateMachineId: readParentStateMachineId({ g, domain }),
    readProviderInstanceValues: readProviderInstanceValues({ g, domain }),
    readResultValues: readResultValues({ g, domain }),
    readRunningState: readRunningState({ g, domain }),
    readStateEdgeStatus: readStateEdgeStatus({ g, domain }),
    readStateEdgeStatusAndResult: readStateEdgeStatusAndResult({ g, domain }),
    readStateEdgeStatusResultAndUpdatedAt: readStateEdgeStatusResultAndUpdatedAt({ g, domain }),
    readStateEdgeTargetName: readStateEdgeTargetName({ g, domain }),
    readStateMachineDataIds: readStateMachineDataIds({ g, domain }),
    readStateMachineId: readStateMachineId({ g, domain }),
    readStateMachineState: readStateMachineState({ g, domain }),
    readStateMachineStateAndUpdatedAt: readStateMachineStateAndUpdatedAt({ g, domain }),
    readStateMachineStateByInstanceId: readStateMachineStateByInstanceId({ g, domain }),
    readStateMachineTaskIds: readStateMachineTaskIds({ g, domain }),
    readStateMachineVertexId: readStateMachineVertexId({ g, domain }),
    readStatusMaps: readStatusMaps({ g, domain }),
    readTargetDataTaskTargets: readTargetDataTaskTargets({ g, domain }),
    readTargetEdgeValues: readTargetEdgeValues({ g, domain }),
    readTargetInstanceMap: readTargetInstanceMap({ g, domain }),
    readTargetInstanceValues: readTargetInstanceValues({ g, domain }),
    readTargetStateMachineId: readTargetStateMachineId({ g, domain }),
    readTargetTaskDataTargets: readTargetTaskDataTargets({ g, domain }),
    readTask1DataDeps: readTask1DataDeps({ g, domain }),
    readTask1DeferredDeps: readTask1DeferredDeps({ g, domain }),
    readTaskADataInjects: readTaskADataInjects({ g, domain }),
    readTaskATaskInjects: readTaskATaskInjects({ g, domain }),
    readTaskDeps: readTaskDeps({ g, domain }),
    readTaskRow: readTaskRow({ g, domain }),
    readTaskRows: readTaskRows({ g, domain }),
    readTaskStateEdgeId: readTaskStateEdgeId({ g, domain }),
    readTaskStateStatus: readTaskStateStatus({ g, domain }),
    readTaskTargets: readTaskTargets({ g, domain }),
    readValues: readValues({ g, domain }),
  };
}
