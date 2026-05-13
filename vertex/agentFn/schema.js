export const schema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "vertex.agentFn",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "name",
    "portAddr",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "name": { "type": "string" },
    "portAddr": { "type": "string" },
    "hash": { "type": "string" },
    "codeRef": {
      "type": "object",
      "additionalProperties": false,
      "required": ["file", "line", "column"],
      "properties": {
        "file": { "type": "string" },
        "line": { "type": "integer" },
        "column": { "type": "integer" }
      }
    },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" }
  }
}
