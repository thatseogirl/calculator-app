export function calculateValue(value) {
  return {
    type: "CALCULATE_VALUE",
    payload: value,
  };
}
export function inputValue(value) {
  return {
    type: "INPUT_VALUE",
    payload: value,
  };
}
export function numberValue(value) {
  return {
    type: "NUMBER_VALUE",
    payload: value,
  };
}
export function deleteValue(value) {
  return {
    type: "DELETE_VALUE",
    payload: value,
  };
}
export function resetValue(value) {
  return {
    type: "RESET_VALUE",
    payload: value,
  };
}
