import React from "react";
import s from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = props => {
    return (
       
        <div className={s.card} >
             
            <div className={s.wrapper}>
            <Link to={`/film/${props.id}`}>
                <img src={props.image} alt="film" width={'260px'} height={'380px'}/>
            </Link>
                <div className={s.info}>
                    <h3>{props.name}</h3>
                    {props.rating && <p>Рейтинг: {props.rating}</p>}
                    {props.duration && <p>Длительность: {props.duration} мин.</p>} 
                    {props.countries && <p> Страна: {props.countries.map(i=> i.country).join(', ')}</p>}
                    {props.genres && <p> Жанр: {props.genres.map(i=> i.genre).join(', ')}</p>}
                    {props.premiere && <p>Дата выхода: {props.premiere}</p>}
                    {props.relationType && <p>{props.relationType}</p> }
                    <footer>
                        {props.year && <p>{props.year} год</p>} 
                    </footer>
                </div>
            </div>
        </div>
        
    )
}
export default Card