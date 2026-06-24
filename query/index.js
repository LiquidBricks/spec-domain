import { findBootstrapTaskId } from "./findBootstrapTaskId.js";
import { findComponentAgentVertexId } from "./findComponentAgentVertexId.js";
import { findComponentDataNodeIdByName } from "./findComponentDataNodeIdByName.js";
import { findComponentIdByHash } from "./findComponentIdByHash.js";
import { findComponentIdForData } from "./findComponentIdForData.js";
import { findComponentIdForDeferred } from "./findComponentIdForDeferred.js";
import { findComponentIdForInstance } from "./findComponentIdForInstance.js";
import { findComponentIdForTask } from "./findComponentIdForTask.js";
import { findComponentInstanceVertexId } from "./findComponentInstanceVertexId.js";
import { findComponentTaskNodeIdByName } from "./findComponentTaskNodeIdByName.js";
import { findComponentVertexId } from "./findComponentVertexId.js";
import { findData1Id } from "./findData1Id.js";
import { findDataId } from "./findDataId.js";
import { findDataOneId } from "./findDataOneId.js";
import { findDataStateEdgeIdByName } from "./findDataStateEdgeIdByName.js";
import { findDataStateEdgeIdForTargetNode } from "./findDataStateEdgeIdForTargetNode.js";
import { findDataStateEdgeTargetNodeId } from "./findDataStateEdgeTargetNodeId.js";
import { findDataTwoId } from "./findDataTwoId.js";
import { findDataVertexId } from "./findDataVertexId.js";
import { findDeferredId } from "./findDeferredId.js";
import { findDependencyDataTargetNodeIdByName } from "./findDependencyDataTargetNodeIdByName.js";
import { findDependencyDeferredTargetNodeIdByName } from "./findDependencyDeferredTargetNodeIdByName.js";
import { findDependencyTaskTargetNodeIdByName } from "./findDependencyTaskTargetNodeIdByName.js";
import { findDependentComponentId } from "./findDependentComponentId.js";
import { findEdgeTargetNodeId } from "./findEdgeTargetNodeId.js";
import { findFirstComponentId } from "./findFirstComponentId.js";
import { findFirstInitId } from "./findFirstInitId.js";
import { findGateInstanceRefIdByAlias } from "./findGateInstanceRefIdByAlias.js";
import { findGateInstanceRefIdForInstance } from "./findGateInstanceRefIdForInstance.js";
import { findGateInstanceVertexIdByAlias } from "./findGateInstanceVertexIdByAlias.js";
import { findGateInstanceVertexIdForRef } from "./findGateInstanceVertexIdForRef.js";
import { findGateRefIdByAlias } from "./findGateRefIdByAlias.js";
import { findGateRefIdForInstanceRef } from "./findGateRefIdForInstanceRef.js";
import { findGatedComponentIdByHash } from "./findGatedComponentIdByHash.js";
import { findGatedComponentIdForGateRef } from "./findGatedComponentIdForGateRef.js";
import { findGatedInstanceComponentId } from "./findGatedInstanceComponentId.js";
import { findGatedInstanceVertexIdByAlias } from "./findGatedInstanceVertexIdByAlias.js";
import { findGatedInstanceVertexIdForRef } from "./findGatedInstanceVertexIdForRef.js";
import { findHasDataStateStateMachineData } from "./findHasDataStateStateMachineData.js";
import { findHasDependencyDataData } from "./findHasDependencyDataData.js";
import { findHasDependencyDataDeferred } from "./findHasDependencyDataDeferred.js";
import { findHasDependencyGateRefData } from "./findHasDependencyGateRefData.js";
import { findHasDependencyGateRefTask } from "./findHasDependencyGateRefTask.js";
import { findHasDependencyTaskData } from "./findHasDependencyTaskData.js";
import { findHasDependencyTaskDeferred } from "./findHasDependencyTaskDeferred.js";
import { findHasDependencyTaskTask } from "./findHasDependencyTaskTask.js";
import { findHasTaskStateStateMachineTask } from "./findHasTaskStateStateMachineTask.js";
import { findImportInjectionDataTargetNodeIdByName } from "./findImportInjectionDataTargetNodeIdByName.js";
import { findImportInjectionTaskTargetNodeIdByName } from "./findImportInjectionTaskTargetNodeIdByName.js";
import { findImportInstanceRefIdByAlias } from "./findImportInstanceRefIdByAlias.js";
import { findImportInstanceRefIdForInstance } from "./findImportInstanceRefIdForInstance.js";
import { findImportInstanceVertexId } from "./findImportInstanceVertexId.js";
import { findImportRefIdByAlias } from "./findImportRefIdByAlias.js";
import { findImportRefIdForInstanceRef } from "./findImportRefIdForInstanceRef.js";
import { findImportRefLookupId } from "./findImportRefLookupId.js";
import { findImportedComponentIdByHash } from "./findImportedComponentIdByHash.js";
import { findImportedComponentIdForImportRef } from "./findImportedComponentIdForImportRef.js";
import { findImportedInstanceVertexIdByAlias } from "./findImportedInstanceVertexIdByAlias.js";
import { findImportedInstanceVertexIdForRef } from "./findImportedInstanceVertexIdForRef.js";
import { findInjectsIntoDataTask } from "./findInjectsIntoDataTask.js";
import { findInjectsIntoTaskData } from "./findInjectsIntoTaskData.js";
import { findInstanceVertexId } from "./findInstanceVertexId.js";
import { findLeafComponentId } from "./findLeafComponentId.js";
import { findLinkedGateRefId } from "./findLinkedGateRefId.js";
import { findMainTaskId } from "./findMainTaskId.js";
import { findNestedImportRefId } from "./findNestedImportRefId.js";
import { findNestedInstanceVertexId } from "./findNestedInstanceVertexId.js";
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
import { findTargetComponentId } from "./findTargetComponentId.js";
import { findTargetDataId } from "./findTargetDataId.js";
import { findTargetTaskId } from "./findTargetTaskId.js";
import { findTask1Id } from "./findTask1Id.js";
import { findTask2Id } from "./findTask2Id.js";
import { findTaskAId } from "./findTaskAId.js";
import { findTaskBId } from "./findTaskBId.js";
import { findTaskNodeId } from "./findTaskNodeId.js";
import { findTaskStateEdgeIdByName } from "./findTaskStateEdgeIdByName.js";
import { findTaskStateEdgeIdForTargetNode } from "./findTaskStateEdgeIdForTargetNode.js";
import { findTaskStateEdgeTargetNodeId } from "./findTaskStateEdgeTargetNodeId.js";
import { findUsesGateGateInstanceRefComponentInstance } from "./findUsesGateGateInstanceRefComponentInstance.js";
import { findUsesImportImportInstanceRefComponentInstance } from "./findUsesImportImportInstanceRefComponentInstance.js";
import { findWordsComponentId } from "./findWordsComponentId.js";
import { findWordsProcessId } from "./findWordsProcessId.js";
import { findWordsVocabId } from "./findWordsVocabId.js";
import { listComponentAgentFnIds } from "./listComponentAgentFnIds.js";
import { listComponentDataIds } from "./listComponentDataIds.js";
import { listComponentIds } from "./listComponentIds.js";
import { listComponentTaskIds } from "./listComponentTaskIds.js";
import { listDataDependencyAndWaitForNodeIds } from "./listDataDependencyAndWaitForNodeIds.js";
import { listDataDependencyNodeIds } from "./listDataDependencyNodeIds.js";
import { listDataNodeIds } from "./listDataNodeIds.js";
import { listDataStateEdgeIds } from "./listDataStateEdgeIds.js";
import { listDataToDataInjectionEdgeIds } from "./listDataToDataInjectionEdgeIds.js";
import { listDataToTaskInjectionEdgeIds } from "./listDataToTaskInjectionEdgeIds.js";
import { listDepTaskIds } from "./listDepTaskIds.js";
import { listDependentDataNodeIdsForData } from "./listDependentDataNodeIdsForData.js";
import { listDependentDataNodeIdsForTask } from "./listDependentDataNodeIdsForTask.js";
import { listDependentTaskNodeIdsForData } from "./listDependentTaskNodeIdsForData.js";
import { listDependentTaskNodeIdsForTask } from "./listDependentTaskNodeIdsForTask.js";
import { listDepsDataIds } from "./listDepsDataIds.js";
import { listDepsTaskIds } from "./listDepsTaskIds.js";
import { listGateDataWaitForIds } from "./listGateDataWaitForIds.js";
import { listGateInstanceRefIds } from "./listGateInstanceRefIds.js";
import { listGateParentInstanceVertexIds } from "./listGateParentInstanceVertexIds.js";
import { listGateRefIds } from "./listGateRefIds.js";
import { listGateRefInstanceIds } from "./listGateRefInstanceIds.js";
import { listGateTaskWaitForIds } from "./listGateTaskWaitForIds.js";
import { listGatedInstanceIds } from "./listGatedInstanceIds.js";
import { listImportDataWaitForIds } from "./listImportDataWaitForIds.js";
import { listImportInstanceRefIds } from "./listImportInstanceRefIds.js";
import { listImportInstanceVertexIds } from "./listImportInstanceVertexIds.js";
import { listImportParentInstanceVertexIds } from "./listImportParentInstanceVertexIds.js";
import { listImportRefIds } from "./listImportRefIds.js";
import { listImportRefInstanceIds } from "./listImportRefInstanceIds.js";
import { listImportTaskWaitForIds } from "./listImportTaskWaitForIds.js";
import { listImportedComponentIds } from "./listImportedComponentIds.js";
import { listImportedInstanceIds } from "./listImportedInstanceIds.js";
import { listInstanceOfIds } from "./listInstanceOfIds.js";
import { listMidImportInstanceRefIds } from "./listMidImportInstanceRefIds.js";
import { listMidInstanceIds } from "./listMidInstanceIds.js";
import { listNestedComponentIds } from "./listNestedComponentIds.js";
import { listParentGateInstanceIds } from "./listParentGateInstanceIds.js";
import { listParentInstanceIds } from "./listParentInstanceIds.js";
import { listTaskDependencyAndWaitForNodeIds } from "./listTaskDependencyAndWaitForNodeIds.js";
import { listTaskDependencyNodeIds } from "./listTaskDependencyNodeIds.js";
import { listTaskNodeIds } from "./listTaskNodeIds.js";
import { listTaskStateEdgeIds } from "./listTaskStateEdgeIds.js";
import { listTaskToDataInjectionEdgeIds } from "./listTaskToDataInjectionEdgeIds.js";
import { listTaskToTaskInjectionEdgeIds } from "./listTaskToTaskInjectionEdgeIds.js";
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
import { readDepValues } from "./readDepValues.js";
import { readDependencyStateResult } from "./readDependencyStateResult.js";
import { readGateInstanceId } from "./readGateInstanceId.js";
import { readGateInstanceRefs } from "./readGateInstanceRefs.js";
import { readGateInstanceValues } from "./readGateInstanceValues.js";
import { readGateRefAlias } from "./readGateRefAlias.js";
import { readGateRefAliasAndFunction } from "./readGateRefAliasAndFunction.js";
import { readGateRefAliasAndName } from "./readGateRefAliasAndName.js";
import { readGateStateMachineId } from "./readGateStateMachineId.js";
import { readGateValues } from "./readGateValues.js";
import { readGatedComponentValues } from "./readGatedComponentValues.js";
import { readIdentifierValues } from "./readIdentifierValues.js";
import { readImportInstanceId } from "./readImportInstanceId.js";
import { readImportRefAlias } from "./readImportRefAlias.js";
import { readImportRefValues } from "./readImportRefValues.js";
import { readImportStateMachineId } from "./readImportStateMachineId.js";
import { readImportedComponentValues } from "./readImportedComponentValues.js";
import { readImportedInstanceIdForRef } from "./readImportedInstanceIdForRef.js";
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
import { readStateMachineStatusMaps } from "./readStateMachineStatusMaps.js";
import { readStateMachineTaskIds } from "./readStateMachineTaskIds.js";
import { readStateMachineVertexId } from "./readStateMachineVertexId.js";
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

export function query({ g }) {
  return {
    findBootstrapTaskId: findBootstrapTaskId({ g }),
    findComponentAgentVertexId: findComponentAgentVertexId({ g }),
    findComponentDataNodeIdByName: findComponentDataNodeIdByName({ g }),
    findComponentIdByHash: findComponentIdByHash({ g }),
    findComponentIdForData: findComponentIdForData({ g }),
    findComponentIdForDeferred: findComponentIdForDeferred({ g }),
    findComponentIdForInstance: findComponentIdForInstance({ g }),
    findComponentIdForTask: findComponentIdForTask({ g }),
    findComponentInstanceVertexId: findComponentInstanceVertexId({ g }),
    findComponentTaskNodeIdByName: findComponentTaskNodeIdByName({ g }),
    findComponentVertexId: findComponentVertexId({ g }),
    findData1Id: findData1Id({ g }),
    findDataId: findDataId({ g }),
    findDataOneId: findDataOneId({ g }),
    findDataStateEdgeIdByName: findDataStateEdgeIdByName({ g }),
    findDataStateEdgeIdForTargetNode: findDataStateEdgeIdForTargetNode({ g }),
    findDataStateEdgeTargetNodeId: findDataStateEdgeTargetNodeId({ g }),
    findDataTwoId: findDataTwoId({ g }),
    findDataVertexId: findDataVertexId({ g }),
    findDeferredId: findDeferredId({ g }),
    findDependencyDataTargetNodeIdByName: findDependencyDataTargetNodeIdByName({ g }),
    findDependencyDeferredTargetNodeIdByName: findDependencyDeferredTargetNodeIdByName({ g }),
    findDependencyTaskTargetNodeIdByName: findDependencyTaskTargetNodeIdByName({ g }),
    findDependentComponentId: findDependentComponentId({ g }),
    findEdgeTargetNodeId: findEdgeTargetNodeId({ g }),
    findFirstComponentId: findFirstComponentId({ g }),
    findFirstInitId: findFirstInitId({ g }),
    findGateInstanceRefIdByAlias: findGateInstanceRefIdByAlias({ g }),
    findGateInstanceRefIdForInstance: findGateInstanceRefIdForInstance({ g }),
    findGateInstanceVertexIdByAlias: findGateInstanceVertexIdByAlias({ g }),
    findGateInstanceVertexIdForRef: findGateInstanceVertexIdForRef({ g }),
    findGateRefIdByAlias: findGateRefIdByAlias({ g }),
    findGateRefIdForInstanceRef: findGateRefIdForInstanceRef({ g }),
    findGatedComponentIdByHash: findGatedComponentIdByHash({ g }),
    findGatedComponentIdForGateRef: findGatedComponentIdForGateRef({ g }),
    findGatedInstanceComponentId: findGatedInstanceComponentId({ g }),
    findGatedInstanceVertexIdByAlias: findGatedInstanceVertexIdByAlias({ g }),
    findGatedInstanceVertexIdForRef: findGatedInstanceVertexIdForRef({ g }),
    findHasDataStateStateMachineData: findHasDataStateStateMachineData({ g }),
    findHasDependencyDataData: findHasDependencyDataData({ g }),
    findHasDependencyDataDeferred: findHasDependencyDataDeferred({ g }),
    findHasDependencyGateRefData: findHasDependencyGateRefData({ g }),
    findHasDependencyGateRefTask: findHasDependencyGateRefTask({ g }),
    findHasDependencyTaskData: findHasDependencyTaskData({ g }),
    findHasDependencyTaskDeferred: findHasDependencyTaskDeferred({ g }),
    findHasDependencyTaskTask: findHasDependencyTaskTask({ g }),
    findHasTaskStateStateMachineTask: findHasTaskStateStateMachineTask({ g }),
    findImportInjectionDataTargetNodeIdByName: findImportInjectionDataTargetNodeIdByName({ g }),
    findImportInjectionTaskTargetNodeIdByName: findImportInjectionTaskTargetNodeIdByName({ g }),
    findImportInstanceRefIdByAlias: findImportInstanceRefIdByAlias({ g }),
    findImportInstanceRefIdForInstance: findImportInstanceRefIdForInstance({ g }),
    findImportInstanceVertexId: findImportInstanceVertexId({ g }),
    findImportRefIdByAlias: findImportRefIdByAlias({ g }),
    findImportRefIdForInstanceRef: findImportRefIdForInstanceRef({ g }),
    findImportRefLookupId: findImportRefLookupId({ g }),
    findImportedComponentIdByHash: findImportedComponentIdByHash({ g }),
    findImportedComponentIdForImportRef: findImportedComponentIdForImportRef({ g }),
    findImportedInstanceVertexIdByAlias: findImportedInstanceVertexIdByAlias({ g }),
    findImportedInstanceVertexIdForRef: findImportedInstanceVertexIdForRef({ g }),
    findInjectsIntoDataTask: findInjectsIntoDataTask({ g }),
    findInjectsIntoTaskData: findInjectsIntoTaskData({ g }),
    findInstanceVertexId: findInstanceVertexId({ g }),
    findLeafComponentId: findLeafComponentId({ g }),
    findLinkedGateRefId: findLinkedGateRefId({ g }),
    findMainTaskId: findMainTaskId({ g }),
    findNestedImportRefId: findNestedImportRefId({ g }),
    findNestedInstanceVertexId: findNestedInstanceVertexId({ g }),
    findOwningGateInstanceRefId: findOwningGateInstanceRefId({ g }),
    findParentGateId: findParentGateId({ g }),
    findParentId: findParentId({ g }),
    findParentImportId: findParentImportId({ g }),
    findParentInstanceVertexId: findParentInstanceVertexId({ g }),
    findProvidedComponentId: findProvidedComponentId({ g }),
    findProviderComponentId: findProviderComponentId({ g }),
    findProviderDataId: findProviderDataId({ g }),
    findProviderTaskId: findProviderTaskId({ g }),
    findRootDataId: findRootDataId({ g }),
    findRootInstanceVertexId: findRootInstanceVertexId({ g }),
    findSharedComponentId: findSharedComponentId({ g }),
    findTargetComponentId: findTargetComponentId({ g }),
    findTargetDataId: findTargetDataId({ g }),
    findTargetTaskId: findTargetTaskId({ g }),
    findTask1Id: findTask1Id({ g }),
    findTask2Id: findTask2Id({ g }),
    findTaskAId: findTaskAId({ g }),
    findTaskBId: findTaskBId({ g }),
    findTaskNodeId: findTaskNodeId({ g }),
    findTaskStateEdgeIdByName: findTaskStateEdgeIdByName({ g }),
    findTaskStateEdgeIdForTargetNode: findTaskStateEdgeIdForTargetNode({ g }),
    findTaskStateEdgeTargetNodeId: findTaskStateEdgeTargetNodeId({ g }),
    findUsesGateGateInstanceRefComponentInstance: findUsesGateGateInstanceRefComponentInstance({ g }),
    findUsesImportImportInstanceRefComponentInstance: findUsesImportImportInstanceRefComponentInstance({ g }),
    findWordsComponentId: findWordsComponentId({ g }),
    findWordsProcessId: findWordsProcessId({ g }),
    findWordsVocabId: findWordsVocabId({ g }),
    listComponentAgentFnIds: listComponentAgentFnIds({ g }),
    listComponentDataIds: listComponentDataIds({ g }),
    listComponentIds: listComponentIds({ g }),
    listComponentTaskIds: listComponentTaskIds({ g }),
    listDataDependencyAndWaitForNodeIds: listDataDependencyAndWaitForNodeIds({ g }),
    listDataDependencyNodeIds: listDataDependencyNodeIds({ g }),
    listDataNodeIds: listDataNodeIds({ g }),
    listDataStateEdgeIds: listDataStateEdgeIds({ g }),
    listDataToDataInjectionEdgeIds: listDataToDataInjectionEdgeIds({ g }),
    listDataToTaskInjectionEdgeIds: listDataToTaskInjectionEdgeIds({ g }),
    listDepTaskIds: listDepTaskIds({ g }),
    listDependentDataNodeIdsForData: listDependentDataNodeIdsForData({ g }),
    listDependentDataNodeIdsForTask: listDependentDataNodeIdsForTask({ g }),
    listDependentTaskNodeIdsForData: listDependentTaskNodeIdsForData({ g }),
    listDependentTaskNodeIdsForTask: listDependentTaskNodeIdsForTask({ g }),
    listDepsDataIds: listDepsDataIds({ g }),
    listDepsTaskIds: listDepsTaskIds({ g }),
    listGateDataWaitForIds: listGateDataWaitForIds({ g }),
    listGateInstanceRefIds: listGateInstanceRefIds({ g }),
    listGateParentInstanceVertexIds: listGateParentInstanceVertexIds({ g }),
    listGateRefIds: listGateRefIds({ g }),
    listGateRefInstanceIds: listGateRefInstanceIds({ g }),
    listGateTaskWaitForIds: listGateTaskWaitForIds({ g }),
    listGatedInstanceIds: listGatedInstanceIds({ g }),
    listImportDataWaitForIds: listImportDataWaitForIds({ g }),
    listImportInstanceRefIds: listImportInstanceRefIds({ g }),
    listImportInstanceVertexIds: listImportInstanceVertexIds({ g }),
    listImportParentInstanceVertexIds: listImportParentInstanceVertexIds({ g }),
    listImportRefIds: listImportRefIds({ g }),
    listImportRefInstanceIds: listImportRefInstanceIds({ g }),
    listImportTaskWaitForIds: listImportTaskWaitForIds({ g }),
    listImportedComponentIds: listImportedComponentIds({ g }),
    listImportedInstanceIds: listImportedInstanceIds({ g }),
    listInstanceOfIds: listInstanceOfIds({ g }),
    listMidImportInstanceRefIds: listMidImportInstanceRefIds({ g }),
    listMidInstanceIds: listMidInstanceIds({ g }),
    listNestedComponentIds: listNestedComponentIds({ g }),
    listParentGateInstanceIds: listParentGateInstanceIds({ g }),
    listParentInstanceIds: listParentInstanceIds({ g }),
    listTaskDependencyAndWaitForNodeIds: listTaskDependencyAndWaitForNodeIds({ g }),
    listTaskDependencyNodeIds: listTaskDependencyNodeIds({ g }),
    listTaskNodeIds: listTaskNodeIds({ g }),
    listTaskStateEdgeIds: listTaskStateEdgeIds({ g }),
    listTaskToDataInjectionEdgeIds: listTaskToDataInjectionEdgeIds({ g }),
    listTaskToTaskInjectionEdgeIds: listTaskToTaskInjectionEdgeIds({ g }),
    listWaitForDataIds: listWaitForDataIds({ g }),
    listWaitForTaskIds: listWaitForTaskIds({ g }),
    readAfterStartValues: readAfterStartValues({ g }),
    readAgentFnValues: readAgentFnValues({ g }),
    readBeforeStartValues: readBeforeStartValues({ g }),
    readBlockedGateState: readBlockedGateState({ g }),
    readChildInstanceIdValues: readChildInstanceIdValues({ g }),
    readChildState: readChildState({ g }),
    readChildStateMachineId: readChildStateMachineId({ g }),
    readCompletedState: readCompletedState({ g }),
    readComponentData: readComponentData({ g }),
    readComponentDeferred: readComponentDeferred({ g }),
    readComponentHash: readComponentHash({ g }),
    readComponentInstanceId: readComponentInstanceId({ g }),
    readComponentRow: readComponentRow({ g }),
    readComponentRows: readComponentRows({ g }),
    readComponentTasks: readComponentTasks({ g }),
    readComponentValues: readComponentValues({ g }),
    readDataDeps: readDataDeps({ g }),
    readDataOneDataInjects: readDataOneDataInjects({ g }),
    readDataOneTaskInjects: readDataOneTaskInjects({ g }),
    readDataRow: readDataRow({ g }),
    readDataStateEdgeId: readDataStateEdgeId({ g }),
    readDataStateStatus: readDataStateStatus({ g }),
    readDataTargets: readDataTargets({ g }),
    readDataTaskDeps: readDataTaskDeps({ g }),
    readDepValues: readDepValues({ g }),
    readDependencyStateResult: readDependencyStateResult({ g }),
    readGateInstanceId: readGateInstanceId({ g }),
    readGateInstanceRefs: readGateInstanceRefs({ g }),
    readGateInstanceValues: readGateInstanceValues({ g }),
    readGateRefAlias: readGateRefAlias({ g }),
    readGateRefAliasAndFunction: readGateRefAliasAndFunction({ g }),
    readGateRefAliasAndName: readGateRefAliasAndName({ g }),
    readGateStateMachineId: readGateStateMachineId({ g }),
    readGateValues: readGateValues({ g }),
    readGatedComponentValues: readGatedComponentValues({ g }),
    readIdentifierValues: readIdentifierValues({ g }),
    readImportInstanceId: readImportInstanceId({ g }),
    readImportRefAlias: readImportRefAlias({ g }),
    readImportRefValues: readImportRefValues({ g }),
    readImportStateMachineId: readImportStateMachineId({ g }),
    readImportedComponentValues: readImportedComponentValues({ g }),
    readImportedInstanceIdForRef: readImportedInstanceIdForRef({ g }),
    readInitialState: readInitialState({ g }),
    readInitialValues: readInitialValues({ g }),
    readInstanceIdValues: readInstanceIdValues({ g }),
    readLifecycleWaitForValues: readLifecycleWaitForValues({ g }),
    readNestedAliasRow: readNestedAliasRow({ g }),
    readNext: readNext({ g }),
    readNodeName: readNodeName({ g }),
    readParentInstanceId: readParentInstanceId({ g }),
    readParentInstanceIdMap: readParentInstanceIdMap({ g }),
    readParentStateMachineId: readParentStateMachineId({ g }),
    readProviderInstanceValues: readProviderInstanceValues({ g }),
    readResultValues: readResultValues({ g }),
    readRunningState: readRunningState({ g }),
    readStateEdgeStatus: readStateEdgeStatus({ g }),
    readStateEdgeStatusAndResult: readStateEdgeStatusAndResult({ g }),
    readStateEdgeStatusResultAndUpdatedAt: readStateEdgeStatusResultAndUpdatedAt({ g }),
    readStateEdgeTargetName: readStateEdgeTargetName({ g }),
    readStateMachineDataIds: readStateMachineDataIds({ g }),
    readStateMachineId: readStateMachineId({ g }),
    readStateMachineState: readStateMachineState({ g }),
    readStateMachineStateAndUpdatedAt: readStateMachineStateAndUpdatedAt({ g }),
    readStateMachineStateByInstanceId: readStateMachineStateByInstanceId({ g }),
    readStateMachineStatusMaps: readStateMachineStatusMaps({ g }),
    readStateMachineTaskIds: readStateMachineTaskIds({ g }),
    readStateMachineVertexId: readStateMachineVertexId({ g }),
    readTargetDataTaskTargets: readTargetDataTaskTargets({ g }),
    readTargetEdgeValues: readTargetEdgeValues({ g }),
    readTargetInstanceMap: readTargetInstanceMap({ g }),
    readTargetInstanceValues: readTargetInstanceValues({ g }),
    readTargetStateMachineId: readTargetStateMachineId({ g }),
    readTargetTaskDataTargets: readTargetTaskDataTargets({ g }),
    readTask1DataDeps: readTask1DataDeps({ g }),
    readTask1DeferredDeps: readTask1DeferredDeps({ g }),
    readTaskADataInjects: readTaskADataInjects({ g }),
    readTaskATaskInjects: readTaskATaskInjects({ g }),
    readTaskDeps: readTaskDeps({ g }),
    readTaskRow: readTaskRow({ g }),
    readTaskRows: readTaskRows({ g }),
    readTaskStateEdgeId: readTaskStateEdgeId({ g }),
    readTaskStateStatus: readTaskStateStatus({ g }),
    readTaskTargets: readTaskTargets({ g }),
    readValues: readValues({ g }),
  };
}
