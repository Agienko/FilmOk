import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import premieresReducer from "./reducers/premieresReducer";
import topReducer from "./reducers/topReducer";

const reducers = combineReducers({
premieres: premieresReducer,
top: topReducer,
})


let store = createStore(reducers, applyMiddleware(thunk))

export default store
window.store = store