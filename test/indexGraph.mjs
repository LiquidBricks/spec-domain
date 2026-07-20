import assert from 'node:assert/strict'
import test from 'node:test'

import { dataMapper, domain } from '../index.js'
import { meta as componentIndexMeta } from '../indexGraph/component/injectionRouting/index.js'
import { meta as componentInstanceIndexMeta } from '../indexGraph/componentInstance/injectionRouting/index.js'

test('dataMapper exposes injection routing indexes under their canonical owners', () => {
  const mapper = dataMapper({ g: {}, diagnostics: {} })

  assert.equal(typeof mapper.vertex.component.index.injectionRouting.compile, 'function')
  assert.equal(typeof mapper.vertex.component.index.injectionRouting.read, 'function')
  assert.equal(typeof mapper.vertex.componentInstance.index.injectionRouting.bind, 'function')
  assert.equal(typeof mapper.vertex.componentInstance.index.injectionRouting.lookup, 'function')
  assert.equal(mapper.index, undefined)
  assert.equal(
    domain.vertex.component.index.injectionRouting.constants.INDEX_VERTEX_LABEL,
    'index.vertex.component.injectionRouting',
  )
  assert.equal(
    domain.vertex.componentInstance.index.injectionRouting.constants.INDEX_VERTEX_LABEL,
    'index.vertex.componentInstance.injectionRouting',
  )
})

test('injection routing uses explicitly non-canonical index labels', () => {
  assert.equal(
    componentIndexMeta.constants.INDEX_VERTEX_LABEL,
    'index.vertex.component.injectionRouting',
  )
  assert.equal(
    componentInstanceIndexMeta.constants.INDEX_VERTEX_LABEL,
    'index.vertex.componentInstance.injectionRouting',
  )
})

test('canonical injection edges describe the provenance needed to rebuild indexes', () => {
  for (const edge of [
    domain.edge.injects_into.data_data,
    domain.edge.injects_into.data_task,
    domain.edge.injects_into.task_data,
    domain.edge.injects_into.task_task,
  ]) {
    assert.deepEqual(
      Object.keys(edge.schema.properties),
      ['ownerComponentId', 'sourceAliasPath', 'targetAliasPath'],
    )
    assert.deepEqual(
      edge.schema.required,
      ['ownerComponentId', 'sourceAliasPath', 'targetAliasPath'],
    )
  }
})
