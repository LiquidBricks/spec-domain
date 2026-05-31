export const schema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "vertex.componentAgent",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "agentID",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "agentID": {
      "type": "string"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time"
    }
  }
}
