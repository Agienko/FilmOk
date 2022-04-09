import { filmsAPI } from "../../api/api"

const SET_KEYWORD = 'search/SET_KEYWORD'
const SET_SEARCHING_RESULT = 'search/SET_SEARCHING_RESULT'
const SET_ACTIVE_PAGE = 'search/SET_ACTIVE_PAGE'
const IS_LOADING = 'search/IS_LOADING'

let initialState = {
    films: [],
    keyWord: '',
    pagesCount: 0,
    searchFilmsCountResult: 0,
    activePage: 1,
    isLoading: false
}

const searchReducer = (state = initialState, action) =>{
    switch (action.type){
       case SET_KEYWORD:
           return {...state, keyWord: action.keyWord}
        case SET_SEARCHING_RESULT:
           return {...state, ...action.payload}
        case SET_ACTIVE_PAGE:
            return {...state, activePage: action.payload}
        case IS_LOADING:
             return {...state, isLoading: action.payload}
        default:
            return state
    }
}
export default searchReducer

export const setSearchingResult = payload => ({type: SET_SEARCHING_RESULT, payload})
export const isLoading = payload => ({type: IS_LOADING, payload})
export const setKeyWord = keyWord => ({type: SET_KEYWORD, keyWord })
export const setActivePage = payload => ({type: SET_ACTIVE_PAGE, payload})

export const getSearchingFilms = (keyWord, page) => async dispatch => {
    dispatch(setKeyWord(keyWord))
    dispatch(isLoading(true))
    const data = await filmsAPI.serchKeyWords(keyWord, page)
    dispatch(setSearchingResult(data))
    dispatch(setActivePage(page))
    dispatch(isLoading(false))
  

}
