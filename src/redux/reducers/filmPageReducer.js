import { filmsAPI } from "../../api/api"

const SET_FILM_INFO = 'SET_FILM_INFO'
const SET_FACTS = 'SET_FACTS'
const IS_LOADING = 'IS_LOADING'
const IS_FACTS_LOADING = 'IS_FACTS_LOADING'
const SET_SIMILARS = 'SET_SIMILARS'
const SET_SIQUELS_PREAQUELS = 'SET_SIQUELS_PREAQUELS'
const SET_CLEAR = 'SET_CLEAR'
const SET_ACTORS = 'SET_ACTORS'
const ADD_FAVORITE_FILM_IN_LOC_STOR = 'ADD_FAVORITE_FILM_IN_LOC_STOR'


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
    isFactsLoading: false,
    similars: [],
    sequelsPrequels: [],
    actors: []
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
        case SET_SIMILARS:
            return {...state, similars: action.payload}
        case SET_SIQUELS_PREAQUELS:
            return {...state, sequelsPrequels: action.payload}
        case SET_CLEAR:
            return {...initialState, nameRu: state.nameRu}
        case SET_ACTORS:
            return {...state, actors: action.payload}
        case ADD_FAVORITE_FILM_IN_LOC_STOR:
            let localFavFilms = []
            if(localStorage['favoriteFilms']){ //если не пусто
                localFavFilms = JSON.parse(localStorage['favoriteFilms'])
            }
            if(!localFavFilms.map(i => i.id).includes(state.kinopoiskId)) {
                localFavFilms.push({
                    id: state.kinopoiskId,
                    name: state.nameRu,
                    duration: state.duration,
                    poster: state.posterUrlPreview,
                    raiting: state.ratingKinopoisk,
                    year: state.year,
                    genres: state.genres,
                    filmLength: state.filmLength,
                    countries: state.countries
                })
            }
            localStorage['favoriteFilms'] = JSON.stringify(localFavFilms)
            return state
        default:
            return state
    }
}
export default filmPageReducer

export const setClear = () => ({type: SET_CLEAR})
const setFilmInfo = payload => ({type: SET_FILM_INFO, payload})
const setFacts = payload => ({type: SET_FACTS, payload})
const isLoading = payload => ({type: IS_LOADING, payload})
const isFactsLoading = payload => ({type: IS_FACTS_LOADING, payload})
const setSimilars = payload => ({type: SET_SIMILARS, payload})
const setSequelsPrequels = payload => ({type: SET_SIQUELS_PREAQUELS, payload})
const setActors = payload => ({type: SET_ACTORS, payload})
export const addFavoriteFilm = () => ({type: ADD_FAVORITE_FILM_IN_LOC_STOR})

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
    filmsAPI.getSimilars(id).then(data => {
       dispatch(setSimilars(data.items))
    })
    filmsAPI.getSequelsPrequels(id).then(data => {
        dispatch(setSequelsPrequels(data))
     })
     filmsAPI.getStaf(id).then(data => {
        dispatch(setActors(data))
     })
}