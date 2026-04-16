export const schema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "vertex.gateRef",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "alias",
    "fnc",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "alias": { "type": "string" },
    "fnc": { "type": "string" },
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
