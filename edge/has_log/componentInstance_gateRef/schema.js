export const schema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "edge.has_log.componentInstance__gateRef",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "logId",
    "method",
    "args",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "logId": { "type": "string", "minLength": 1 },
    "method": { "type": "string", "minLength": 1 },
    "args": { "type": "array", "items": {} },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" }
  }
}
