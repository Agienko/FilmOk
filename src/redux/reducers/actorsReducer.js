import { filmsAPI } from "../../api/api"

const IS_LOADING = 'actors/IS_LOADING'
const SET_CLEAR = 'actors/SET_CLEAR'
const SET_ACTORS = 'actors/SET_ACTORS'

let initialState = {
    isLoading: false,
    actors: []
}

const actorsReducer = (state = initialState, action) =>{
    switch (action.type){
        case IS_LOADING:
            return {...state, isLoading: action.payload}
        case SET_CLEAR:
            return {...initialState}
        case SET_ACTORS:
            return {...state, actors: action.payload}
        default:
            return state
    }
}
export default actorsReducer

const isLoading = payload => ({type: IS_LOADING, payload})
const setActors = payload => ({type: SET_ACTORS, payload})
export const setClear = () => ({type: SET_CLEAR})

export const getActors = id => async dispatch => {
    dispatch(isLoading(true))
    // const data = 
    dispatch(setActors(await filmsAPI.getStaf(id)))
    dispatch(isLoading(false))
    
}