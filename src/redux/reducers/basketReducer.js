
const PARSE_FAVE_FILMS = 'PARSE_FAVE_FILMS'
const REMOVE_FAVE_FILM = 'REMOVE_FAVE_FILM'

let initialState = {
   favFilms:[]
}

const basketReducer = (state = initialState, action) =>{
    switch (action.type){
        
        case PARSE_FAVE_FILMS:
            return {...state, favFilms:[...JSON.parse(localStorage['favoriteFilms'])]}
        case REMOVE_FAVE_FILM:
            const storage = JSON.parse(localStorage['favoriteFilms'])
            const newStorage =storage.filter(i => i.id !== action.id)
            localStorage['favoriteFilms'] = JSON.stringify(newStorage)
            return {...state, favFilms:[...JSON.parse(localStorage['favoriteFilms'])]}
        default:
            return state
    }
}
export default basketReducer

export const parseFavFilms = () => ({type: PARSE_FAVE_FILMS})

export const removeFavFilm = id => ({type: REMOVE_FAVE_FILM, id})