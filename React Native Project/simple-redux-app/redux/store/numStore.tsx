import { combineReducers, createStore } from "redux";
import { numReducer } from "../reducer/numReducer";




const rootReducer = combineReducers({
    num : numReducer
})

const store = createStore(rootReducer);

export default store;