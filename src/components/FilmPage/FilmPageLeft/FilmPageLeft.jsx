import React from "react";
import {Link } from "react-router-dom";
import s from "./FilmPageLeft.module.scss"

const FilmPageLeft = props => {

   const handleClick = () => props.addFavoriteFilm()
      console.log(props)  
    return (
            <div className={s.left} >
                <Link to={`/photos/${props.filmId}`}>
                    <img src={props.poster} alt="poster" title="Показать все изображения"/>
                    <p>Показать изображения</p>
                </Link>
                    <button disabled={props.isFilmAdded} onClick={handleClick}> Добавить в избранное</button>   
            </div>
    )
}

export default FilmPageLeft