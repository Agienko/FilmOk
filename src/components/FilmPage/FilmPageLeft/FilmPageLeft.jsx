import React from "react";
import {Link } from "react-router-dom";
import s from "./FilmPageLeft.module.css"

const FilmPageLeft = props => {
   const handleClick = () =>{
            props.addFavoriteFilm()
        
   }
    return (
                <div className={s.left} >
                    <Link to={`/photos/${props.filmId}`}>
                        <img src={props.poster} alt="poster" title="Показать все изображения"/>
                        <p>Показать изображения</p>
                    </Link>
                       <button onClick={handleClick}> Добавить в избранное</button>
                       
                </div>
     
        )
    }

    export default FilmPageLeft