export function readDataStateStatus({ g }) {
  return ({ stateId }) => g
    ?.V?.(stateId)
    ?.valueMap?.('status');
}
