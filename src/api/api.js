import axios from "axios";

const instance = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/',
    method: 'GET',
    headers: {
        'X-API-KEY': '1dbf016d-45b0-4073-a4be-1a86b1d67bf3',
        'Content-Type': 'application/json',
    },
  });

  const instanceV2_1 = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.1/',
    method: 'GET',
    headers: {
        'X-API-KEY': '1dbf016d-45b0-4073-a4be-1a86b1d67bf3',
        'Content-Type': 'application/json',
    },
  });
  const instanceV1 = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v1/',
    method: 'GET',
    headers: {
        'X-API-KEY': '1dbf016d-45b0-4073-a4be-1a86b1d67bf3',
        'Content-Type': 'application/json',
    },
  });
  export const filmsAPI = {
    getTopFilms: (type, page) => {// type=TOP_100_POPULAR_FILMS && type=TOP_AWAIT_FILMS && type=TOP_250_BEST_FILMS
        return instance(`films/top?type=${type}&page=${page}`)
        .then(responce => responce.data)
    },
    getFilm: filmId => {
        return instance(`films/${filmId}`)
        .then(responce => responce.data)
    },
    getFacts: filmId => {
        return instance(`films/${filmId}/facts`)
        .then(responce => responce.data)
    },
    getSimilars: filmId => {
        return instance(`films/${filmId}/similars`) //похожие фильмы
        .then(responce => responce.data)
    },
    getPremieres: (year, month) => { //month: JANUARY, FEBRUARY....
        return instance(`films/premieres?year=${year}&month=${month}`)
        .then(responce => responce.data)
    },
    getImages: (filmId, type, page = 1) => {                                 
        return instance(`films/${filmId}/images?type=${type}&page=${page}`)
        .then(responce => responce.data)
    },
    getSequelsPrequels: filmId => {                                 
        return instanceV2_1(`films/${filmId}/sequels_and_prequels`)
        .then(responce => responce.data)
    },
    serchKeyWords: (words, page) => {                                 
        return instanceV2_1(`films/search-by-keyword?keyword=${words}&page=${page}`)
        .then(responce => responce.data)
    },
    getStaf: filmId => {
        return instanceV1(`staff?filmId=${filmId}`)
        .then(responce => responce.data)
    }

  }