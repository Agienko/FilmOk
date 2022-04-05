import { filmsAPI } from "../../api/api"

const SET_FILM_INFO = 'SET_FILM_INFO'


let initialState = {
    countries: [],
    coverUrl: "https://avatars.mds.yandex.net/get-ott/224348/2a00000169e39ef77f588ccdfe574dae8227/orig",
    description: "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
    editorAnnotation: null,
    endYear: null,
    filmLength: 189,
    genres:  [],
    has3D: false,
    hasImax: false,
    imdbId: "tt0120689",
    isTicketsAvailable: false,
    kinopoiskId: 435,
    lastSync: "2022-04-03T21:08:08.048295",
    nameEn: null,
    nameOriginal: "The Green Mile",
    nameRu: "Зеленая миля",
    posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/435.jpg",
    posterUrlPreview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/435.jpg",
    productionStatus: null,
    ratingAgeLimits: "age16",
    ratingAwait: null,
    ratingAwaitCount: 0,
    ratingFilmCritics: 6.8,
    ratingFilmCriticsVoteCount: 137,
    ratingGoodReview: 93.2,
    ratingGoodReviewVoteCount: 421,
    ratingImdb: 8.6,
    ratingImdbVoteCount: 1248852,
    ratingKinopoisk: 9.1,
    ratingKinopoiskVoteCount: 754886,
    ratingMpaa: "r",
    ratingRfCritics: null,
    ratingRfCriticsVoteCount: 1,
    reviewsCount: 473,
    serial: false,
    shortDescription: "В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга",
    shortFilm: false,
    slogan: "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
    startYear: null,
    type: "FILM",
    webUrl: "https://www.kinopoisk.ru/film/435/",
    year: 1999,
}

const filmPageReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_FILM_INFO:
            return {...action.payload}
        default:
            return state
    }
}
export default filmPageReducer

const setFilmInfo = payload => ({type: SET_FILM_INFO, payload})


export const getFilm = id => dispatch => {
    filmsAPI.getFilm(id)
    .then(data =>{ 
        dispatch(setFilmInfo(data)) 
    })
}