import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import actorsReducer from "./reducers/actorsReducer";
import basketReducer from "./reducers/basketReducer";
import filmPageReducer from "./reducers/filmPageReducer";
import filmPhotosReducer from "./reducers/filmPhotosReducer";
import premieresReducer from "./reducers/premieresReducer";
import searchReducer from "./reducers/searchReducer";
import topReducer from "./reducers/topReducer";

const reducers = combineReducers({
        premieres: premieresReducer,
        top: topReducer,
        filmPage: filmPageReducer,
        search: searchReducer,
        filmPhotos: filmPhotosReducer,
        actors: actorsReducer,
        basket: basketReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store
window.store = store