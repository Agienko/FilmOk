import { filmsAPI } from "../../api/api"

const SET_IMAGES = 'filmPhotos/SET_IMAGES'
const SET_PAGES_COUNT = 'filmPhotos/SET_PAGES_COUNT'
const SET_ACTIVE_PAGE = 'filmPhotos/SET_ACTIVE_PAGE'
const SET_TYPE = 'filmPhotos/SET_TYPE'
const IS_LOADING = 'filmPhotos/IS_LOADING'

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

export const setImages = payload => ({type: SET_IMAGES, payload})
export const setPagesCount = payload => ({type: SET_PAGES_COUNT, payload})
export const setActivePage = page => ({type: SET_ACTIVE_PAGE, page})
export const setType = payload => ({type: SET_TYPE, payload})
export const isLoading = payload => ({type: IS_LOADING, payload})

export const getImages =(id, type, page) => async dispatch => {
    dispatch(isLoading(true))
    dispatch(setActivePage(page))
    dispatch(setType(type))
    const data = await filmsAPI.getImages(id, type, page)
    dispatch(setImages(data.items))
    dispatch(setPagesCount(data.totalPages))
    dispatch(isLoading(false))
}