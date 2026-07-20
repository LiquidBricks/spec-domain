# Index graph

The index graph contains disposable, derived representations of canonical domain subgraphs. An index may read any canonical vertices and edges, but it must have one explicit canonical owner. The owner determines the public `dataMapper.vertex|edge.*.index` API, lifecycle, and lookup anchor.

## Invariants

- Canonical domain data is sufficient to rebuild every index.
- Index labels start with `index.` and never become canonical `domain.*` labels.
- Index payloads are attached to their owner through an `index.edge.*` association; canonical owner properties are not polluted with derived payloads.
- A missing or stale index is not evidence that canonical domain information is missing.
- Index builders are deterministic and replace complete payloads rather than appending partial results.
- Every index records a schema version and build timestamp.
- Consumers must retain a canonical fallback for a missing or stale derived index. That fallback reads the same required canonical owner/source/target provenance; pre-provenance records are outside the current schema rather than an alternate routing format.
- A valid component plan is immutable for its component hash. Re-running its compiler reuses that plan; repairing a missing or stale plan builds a new current-version plan.
- Bound payloads record the component-plan schema generation. A semantic compiler change must bump the component-plan schema so existing bound lookups become stale locally and fall back without another hot-path graph read; the bound schema changes when its own payload shape changes.

## Injection routing

`component.index.injectionRouting.compile()` compresses canonical injection declarations into a reusable component plan at registration time.

`componentInstance.index.injectionRouting.bind()` resolves those plans against a completed component-instance tree and writes one lookup payload per source component instance.

`componentInstance.index.injectionRouting.lookup()` reads a source state edge's publish-ready targets. An explicitly bound source with no targets is authoritative; a missing component or component-instance index leaves the canonical resolver responsible for the result.
