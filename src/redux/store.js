import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import actorsReducer from "./reducers/actorsReducer";
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
        
})

// let store = createStore(reducers, applyMiddleware(thunk))


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));






export default store
window.__store__ = store