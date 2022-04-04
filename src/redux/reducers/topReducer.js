import { filmsAPI } from "../../api/api"

const GET_TOP_FILMS = 'GET_TOP_FILMS'

let initialState = {
films: []
}

const topReducer = (state = initialState, action) =>{
    switch (action.type){
        case GET_TOP_FILMS:
            return {films: [...action.films]}

        default:
            return state
    }
}
export default topReducer

const getTopFilmsAC = films => ({type: GET_TOP_FILMS, films})

// type=TOP_100_POPULAR_FILMS && type=TOP_AWAIT_FILMS && type=TOP_250_BEST_FILMS
export const getTopFilms = (type = 'TOP_250_BEST_FILMS', page = 1) => dispatch => {
   
    filmsAPI.getTopFilms(type, page)
    .then(data => {console.log(data) ; dispatch(getTopFilmsAC(data.films))})
}