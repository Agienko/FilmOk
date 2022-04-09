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
    getTopFilms: async (type, page) => {
        const responce = await instance(`films/top?type=${type}&page=${page}`)
        return responce.data
    },
    getFilm: async filmId => {
        const responce = await instance(`films/${filmId}`)
        return responce.data
    },
    getFacts: async filmId => {
        const responce = await instance(`films/${filmId}/facts`)
        return responce.data
    },
    getSimilars: async filmId => {
        const responce = await instance(`films/${filmId}/similars`)
        return responce.data
    },
    getPremieres: async (year, month) => {
        const responce = await instance(`films/premieres?year=${year}&month=${month}`)
        return responce.data
    },
    getImages: async (filmId, type, page = 1) => {  
        const responce = await instance(`films/${filmId}/images?type=${type}&page=${page}`)
        return  responce.data
    },
    getSequelsPrequels: async filmId => {
        try{
            const responce = await instanceV2_1(`films/${filmId}/sequels_and_prequels`)
            return responce.data
        } catch{ return {} }
    },
    serchKeyWords: async (words, page) => {   
        const responce = await instanceV2_1(`films/search-by-keyword?keyword=${words}&page=${page}`)                              
        return responce.data
    },
    getStaf: async filmId => {
        const responce = await instanceV1(`staff?filmId=${filmId}`)
        return responce.data
    }

  }