import React from "react";
import {Link } from "react-router-dom";
import s from "./FilmPageLeft.module.css"

const FilmPageLeft = props => {
   
    return (
                <div className={s.left} >
                    <Link to={`/photos/${props.userId}`}>
                        <img src={props.poster} alt="poster" title="Показать все изображения"/>
                        <p>Показать изображения</p>
                    </Link>
                       <button> Добавить в корзину</button>
                       
                </div>
     
        )
    }

    export default FilmPageLeft