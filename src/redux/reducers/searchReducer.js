import { filmsAPI } from "../../api/api"

const SET_KEYWORD = 'SET_KEYWORD'
const SET_SEARCHING_RESULT = 'SET_SEARCHING_RESULT'
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE'


let initialState = {
    films: [],
    keyWord: '',
    pagesCount: 0,
    searchFilmsCountResult: 0,
    activePage: 1
}

const searchReducer = (state = initialState, action) =>{
    switch (action.type){
       case SET_KEYWORD:
           return {...state, keyWord: action.keyWord}
        case SET_SEARCHING_RESULT:
           return {...state, ...action.payload}
        case SET_ACTIVE_PAGE:
            return {...state, activePage: action.payload}
        default:
            return state
    }
}
export default searchReducer

 export const setKeyWord = keyWord => ({type: SET_KEYWORD, keyWord })
 const setSearchingResult = payload => ({type: SET_SEARCHING_RESULT, payload})
 export const setActivePage = payload => ({type: SET_ACTIVE_PAGE, payload})


export const getSearchingFilms = (keyWord, page) => dispatch => {
    dispatch(setKeyWord(keyWord))
    filmsAPI.serchKeyWords(keyWord, page)
    .then(data => {
        dispatch(setSearchingResult(data))
        dispatch(setActivePage(page))
    })

}
