export function calculateValue(value){
    return {
      type: "CALCULATE_VALUE",
      payload: value, //made change here
    };
}
export function inputValue(){
    return{
        type: "INPUT_VALUE",
    }
}
export function numberValue(value){
    return {
      type: "NUMBER_VALUE",
      payload: value, //made change here
    };
}
export function deleteValue(){
    return{
        type: "DELETE_VALUE"
    }
}
export function resetValue(){
    return{
        type: "RESET_VALUE"
    }
}