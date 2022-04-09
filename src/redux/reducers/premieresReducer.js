import { filmsAPI } from "../../api/api"

const GET_PREMIERES = 'premieres/GET_PREMIERES'
const IS_LOADING = 'premieres/IS_LOADING'

let initialState = {
films: [],
isLoading: false
}

const premieresReducer = (state = initialState, action) =>{
    switch (action.type){
        case GET_PREMIERES:
            return {...state, films: [...action.films]}
        case IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}
export default premieresReducer

export const getPremieresAC = films => ({type: GET_PREMIERES, films})
export const isLoading = payload => ({type: IS_LOADING, payload})

export const getPremieres = (year, month) => async dispatch => {
    const yearNow = () => ( new Date().getFullYear() )
    const monthNow = () => {
        const monthes = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 
                        'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
        return monthes[new Date().getMonth()]
    }
    if (!year) year = yearNow()
    if (!month) month = monthNow()
    dispatch(isLoading(true))
    const data = await filmsAPI.getPremieres(year, month)
    dispatch(getPremieresAC(data.items))
    dispatch(isLoading(false))
  
}