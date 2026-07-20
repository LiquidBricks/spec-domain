# Index graph

The index graph contains disposable, derived representations of canonical domain subgraphs. An index may read any canonical vertices and edges, but it must have one explicit canonical owner. The owner determines the public `dataMapper.vertex|edge.*.index` API, lifecycle, and lookup anchor.

## Invariants

- Canonical domain data is sufficient to rebuild every index.
- Index labels start with `index.` and never become canonical `domain.*` labels.
- Index payloads are attached to their owner through an `index.edge.*` association; canonical owner properties are not polluted with derived payloads.
- Index builders are deterministic and replace complete payloads rather than appending partial results.
- Every index records a schema version and build timestamp.
- Registration and instance creation must finish their index phases successfully; missing, duplicate, malformed, or version-mismatched indexes are invariant failures.
- Component compilation always replaces the complete owner index from current canonical data.
- Bound payloads record the component-plan schema generation. A semantic compiler change must bump that schema and requires affected instances to be rebound before lookup.

## Injection routing

`component.index.injectionRouting.compile()` compresses canonical injection declarations into a required component plan at registration time.

`componentInstance.index.injectionRouting.bind()` resolves those plans against a completed component-instance tree and writes one required lookup payload per source component instance.

`componentInstance.index.injectionRouting.lookup()` reads a source state edge's publish-ready targets. The lookup requires the source instance ID, instance vertex ID, state-machine ID, state-edge ID, and type; any disagreement with the bound source is an invariant failure. A bound source with no targets is authoritative; missing or invalid index data throws and aborts result injection.
