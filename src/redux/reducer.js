const initialState = {
  result: "",
};
function calculateReducer(state = initialState, action) {
  switch (action.type) {
    case "CALCULATE_VALUE":
      return {
        ...state,
        result: action.payload,
      };
    case "INPUT_VALUE":
      return {
        ...state,
        result: state.result,
      };
    case "NUMBER_VALUE":
      return {
        ...state,
        result: state.result + action.payload,
      };
    case "DELETE_VALUE":
      return {
        ...state,
        result: state.result,
      };
    case "RESET_VALUE":
      return {
        ...state,
        result: state.result,
      };
    default:
      return state;
  }
}
export default calculateReducer;
