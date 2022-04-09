import { filmsAPI } from "../../api/api"

const GET_TOP_FILMS = 'top/GET_TOP_FILMS'
const SET_HEADER = 'top/SET_HEADER'
const SET_PAGES_COUNT = 'top/SET_PAGES_COUNT'
const CHANGE_ACTIVE_PAGE = 'top/CHANGE_ACTIVE_PAGE'
const IS_LOADING = 'top/IS_LOADING'

let initialState = {
films: [],
header: '250 лучших фильмов',
type: 'TOP_250_BEST_FILMS',
pagesCount: 1,
activePage: 1,
isLoading: false
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
        case IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}
export default topReducer

export const getTopFilmsAC = films => ({type: GET_TOP_FILMS, films})
export const setHeader = name => ({type: SET_HEADER, name})
export const setPagesCount = payload => ({type: SET_PAGES_COUNT, payload})
export const changeActivePage = payload => ({type: CHANGE_ACTIVE_PAGE, payload})
export const isLoading = payload => ({type: IS_LOADING, payload})

export const getTopFilms = (type = 'TOP_250_BEST_FILMS', page = 1) => async dispatch => {
    dispatch(isLoading(true))
    const data = await filmsAPI.getTopFilms(type, page)
    dispatch(setHeader(type))
    dispatch(changeActivePage(page))
    dispatch(setPagesCount(data.pagesCount))
    dispatch(getTopFilmsAC(data.films))
    dispatch(isLoading(false))

}