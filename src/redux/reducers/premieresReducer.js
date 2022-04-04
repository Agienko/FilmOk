import { filmsAPI } from "../../api/api"

const GET_PREMIERES = 'GET_PREMIERES'

let initialState = {
films: []
}

const premieresReducer = (state = initialState, action) =>{
    switch (action.type){
        case GET_PREMIERES:
            return {films: [...action.films]}

        default:
            return state
    }
}
export default premieresReducer

const getPremieresAC = films => ({type: GET_PREMIERES, films})


export const getPremieres = (year, month) => dispatch => {
    const yearNow = () => ( new Date().getFullYear() )
    const monthNow = () => {
        const monthes = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 
                        'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
        return monthes[new Date().getMonth()]
    }
    if (!year) year = yearNow()
    if (!month) month = monthNow()
    filmsAPI.getPremieres(year, month)
    .then(data => dispatch(getPremieresAC(data.items)))
}