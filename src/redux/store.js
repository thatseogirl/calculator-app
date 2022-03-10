import { createStore } from "redux";
import calculateReducer from "./reducer";

const store = createStore(calculateReducer)

export default store;