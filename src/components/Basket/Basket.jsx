import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import s from "./Basket.module.css"


const Basket = props => {
    const [favFilms, setFavFilms] = useState([])
    useEffect(()=>{
        if(localStorage['favoriteFilms'] ){
            setFavFilms(JSON.parse(localStorage['favoriteFilms']))
        }
    },[])
    
    
    const removeFavFilm = id => {
        const newStorage =favFilms.filter(i => i.id !== id)
        localStorage['favoriteFilms'] = JSON.stringify(newStorage)
        setFavFilms(newStorage)
    }
    // console.log
    return (
        <div className={s.wrapper}>
            <h1>Избранное</h1>
            {!favFilms.length && <h3 className={s.h3}>Здесь пока ничего нет...</h3>}
            <div className={s.basket} >
                    
                {favFilms.map(i => 
                    <Card   image={i.poster} name={i.name} duration={i.duration}
                            countries={i.countries} genres={i.genres} 
                            year={i.year} id={i.id} key={i.id} withBtn={true}
                            removeFavFilm={removeFavFilm}/>
                )}
                
            </div>
        </div>
    )
}
export default Basket