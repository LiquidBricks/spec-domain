export function readTaskStateStatus({ g }) {
  return ({ stateId }) => g?.V?.(stateId)?.valueMap?.('status');
}
