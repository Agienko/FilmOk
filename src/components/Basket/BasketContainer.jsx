import React, { useEffect, useState } from "react";
import Basket from "./Basket";

const BasketContainer = props => {

    const [favFilms, setFavFilms] = useState([])

    useEffect(()=>{
        if(localStorage['favoriteFilms']){
            setFavFilms(JSON.parse(localStorage['favoriteFilms']))
        }
    },[])
    
    const removeFavFilm = id => {
        const newStorage = favFilms.filter(i => i.id !== id)
        localStorage['favoriteFilms'] = JSON.stringify(favFilms.filter(i => i.id !== id))
        setFavFilms(newStorage)
    }
    
    return <Basket removeFavFilm={removeFavFilm} favFilms={favFilms}/>
}
export default BasketContainer