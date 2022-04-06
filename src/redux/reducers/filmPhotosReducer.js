import { filmsAPI } from "../../api/api"

const SET_IMAGES = 'SET_IMAGES'
const SET_PAGES_COUNT = 'SET_PAGES_COUNT'
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE'
const SET_TYPE = 'SET_TYPE'
const IS_LOADING = 'IS_LOADING'

let initialState = {
   photo: [],
   activePage: 1,
   pagesCount: 1,
   type: 'STILL',
   isLoading: false
}

const filmPhotosReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_IMAGES: 
            return {...state, photo: [...action.payload]}
        case SET_PAGES_COUNT: 
            return {...state, pagesCount: action.payload}
        case SET_ACTIVE_PAGE: 
            return {...state, activePage: action.page}
        case SET_TYPE: 
            return {...state, type: action.payload}
        case IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}
export default filmPhotosReducer

const setImages = payload => ({type: SET_IMAGES, payload})
const setPagesCount = payload => ({type: SET_PAGES_COUNT, payload})
const setActivePage = page => ({type: SET_ACTIVE_PAGE, page})
const setType = payload => ({type: SET_TYPE, payload})
const isLoading = payload => ({type: IS_LOADING, payload})

export const getImages =(id, type, page) => dispatch => {
    dispatch(isLoading(true))
    dispatch(setActivePage(page))
    dispatch(setType(type))
    filmsAPI.getImages(id, type, page)
    .then(data => {
        dispatch(setImages(data.items))
        dispatch(setPagesCount(data.totalPages))
        dispatch(isLoading(false))
    })
   
}