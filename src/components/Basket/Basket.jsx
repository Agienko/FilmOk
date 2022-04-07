import React, { useEffect } from "react";
import Card from "../Card/Card";
import s from "./Basket.module.css"


const Basket = props => {
    useEffect(() => props.parseFavFilms() ,[])

    return (
        <div className={s.wrapper}>
            <h1>Избранное</h1>
            {!props.favFilms.length && <h3 className={s.h3}>Здесь пока ничего нет...</h3>}
            <div className={s.basket} >
                    
                {props.favFilms.map(i => 
                    <Card   image={i.poster} name={i.name} duration={i.duration}
                            countries={i.countries} genres={i.genres} 
                            year={i.year} id={i.id} key={i.id} withBtn={true}
                            removeFavFilm={props.removeFavFilm}/>
                )}
                
            </div>
        </div>
    )
}
export default Basket