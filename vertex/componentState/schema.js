export const schema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "vertex.componentState",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "state",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "state": { "type": "object" },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" }
  }
}
