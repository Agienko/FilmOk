import { filmsAPI } from "../../api/api"

const GET_TOP_FILMS = 'GET_TOP_FILMS'
const SET_HEADER = 'SET_HEADER'
const SET_PAGES_COUNT = 'SET_PAGES_COUNT'
const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE'

let initialState = {
films: [],
header: '250 лучших фильмов',
type: 'TOP_250_BEST_FILMS',
pagesCount: 1,
activePage: 1
}

const topReducer = (state = initialState, action) =>{
    switch (action.type){
        case GET_TOP_FILMS:
            return {...state, films: [...action.films]}
        case SET_PAGES_COUNT:
            return {...state, pagesCount: action.payload}
        case SET_HEADER:   
            if(action.name === 'TOP_100_POPULAR_FILMS')  
                return {...state, header: '100 популярных фильмов', type: 'TOP_100_POPULAR_FILMS'} 
            if(action.name === 'TOP_AWAIT_FILMS')  
                return {...state, header: 'ТОП ожидаемых фильмов', type: 'TOP_AWAIT_FILMS'}  
            return {...state, header: '250 лучших фильмов' , type: 'TOP_250_BEST_FILMS'} 
        case CHANGE_ACTIVE_PAGE:
            return {...state, activePage: action.payload}
        default:
            return state
    }
}
export default topReducer

const getTopFilmsAC = films => ({type: GET_TOP_FILMS, films})
const setHeader = name => ({type: SET_HEADER, name})
const setPagesCount = payload => ({type: SET_PAGES_COUNT, payload})
const changeActivePage = payload => ({type: CHANGE_ACTIVE_PAGE, payload})

export const getTopFilms = (type = 'TOP_250_BEST_FILMS', page = 1) => dispatch => {
   
    filmsAPI.getTopFilms(type, page)
    .then(data =>{ 
        dispatch(setHeader(type))
        dispatch(changeActivePage(page))
        dispatch(setPagesCount(data.pagesCount))
        dispatch(getTopFilmsAC(data.films))
    })
}