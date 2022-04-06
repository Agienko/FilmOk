import { filmsAPI } from "../../api/api"

const IS_LOADING = 'IS_LOADING'
const SET_CLEAR = 'SET_CLEAR'
const SET_ACTORS = 'SET_ACTORS'

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

export const setClear = () => ({type: SET_CLEAR})
const isLoading = payload => ({type: IS_LOADING, payload})
const setActors = payload => ({type: SET_ACTORS, payload})

export const getActors = id => dispatch => {
    dispatch(isLoading(true))
    filmsAPI.getStaf(id).then(data => {
        dispatch(setActors(data))
        dispatch(isLoading(false))
    })
}