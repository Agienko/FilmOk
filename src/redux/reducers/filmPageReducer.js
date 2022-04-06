import { filmsAPI } from "../../api/api"

const SET_FILM_INFO = 'SET_FILM_INFO'
const SET_FACTS = 'SET_FACTS'
const IS_LOADING = 'IS_LOADING'
const IS_FACTS_LOADING = 'IS_FACTS_LOADING'

let initialState = {
    countries: [],
    coverUrl: "",
    description: "",
    editorAnnotation: null,
    endYear: null,
    filmLength: 0,
    genres:  [],
    has3D: false,
    hasImax: false,
    imdbId: "",
    isTicketsAvailable: false,
    kinopoiskId: 0,
    lastSync: "",
    nameEn: null,
    nameOriginal: "",
    nameRu: "",
    posterUrl: "",
    posterUrlPreview: "",
    productionStatus: null,
    ratingAgeLimits: "",
    ratingAwait: null,
    ratingAwaitCount: 0,
    ratingFilmCritics: 0,
    ratingFilmCriticsVoteCount: 0,
    ratingGoodReview: 0,
    ratingGoodReviewVoteCount: 0,
    ratingImdb: 0,
    ratingImdbVoteCount: 0,
    ratingKinopoisk: 0,
    ratingKinopoiskVoteCount: 0,
    ratingMpaa: "",
    ratingRfCritics: null,
    ratingRfCriticsVoteCount: 0,
    reviewsCount: 0,
    serial: false,
    shortDescription: "",
    shortFilm: false,
    slogan: "",
    startYear: null,
    type: "",
    webUrl: "",
    year: 0,
    facts: [],
    isLoading: false,
    isFactsLoading: false
}

const filmPageReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_FILM_INFO:
            return {...state, ...action.payload}
        case SET_FACTS:
            return {...state, facts: action.payload}
        case IS_LOADING:
            return {...state, isLoading: action.payload}
        case IS_FACTS_LOADING:
            return {...state, isFactsLoading: action.payload}
        default:
            return state
    }
}
export default filmPageReducer

const setFilmInfo = payload => ({type: SET_FILM_INFO, payload})
const setFacts = payload => ({type: SET_FACTS, payload})
const isLoading = payload => ({type: IS_LOADING, payload})
const isFactsLoading = payload => ({type: IS_FACTS_LOADING, payload})

export const getFilm = id => dispatch => {
    dispatch(isLoading(true))
    dispatch(isFactsLoading(true))
    filmsAPI.getFilm(id)
    .then(data =>{ 
        dispatch(setFilmInfo(data))
        dispatch(isLoading(false))
    })
    filmsAPI.getFacts(id).then(data => {
        dispatch(setFacts(data.items))
        dispatch(isFactsLoading(false))
    })
}