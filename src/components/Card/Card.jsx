import React from "react";
import s from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = props => {
    return (
       
        <div className={s.card} >
             
            <div className={s.wrapper}>
            <Link to={`/film/${props.id}`}>
                <img src={props.image} alt="film" />
            </Link>
                <div className={s.info}>
                    <h3>{props.name}</h3>
                    {props.rating && <p>Рейтинг: {props.rating}</p>}
                    <p>Длительность: {props.duration} мин.</p>
                    <p> Страна: {props.countries.map(i=> i.country).join(', ')}</p>
                    <p> Жанр: {props.genres.map(i=> i.genre).join(', ')}</p>
                    <p>Дата выхода: {props.premiere}</p>
                    <footer>
                    <p>{props.year} год</p>
                    </footer>
                </div>
            </div>
        </div>
        
    )
}
export default Card