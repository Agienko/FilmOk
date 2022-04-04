import React from "react";
import s from "./Card.module.css"
import {filmsAPI} from '../../api/api'

const Card = props => {
    return (
        <div className={s.card} onClick={() => filmsAPI.getFilm(props.kinopoiskId).then(data => console.log(data)) }>
            <div className={s.wrapper}>
            <img src={props.posterUrlPreview} alt="" />
                <div className={s.info}>
                    <h3>{props.nameRu}</h3>
                    <p>Длительность: {props.duration} мин.</p>
                    <p> Страна: {props.countries.map(i=> i.country).join(', ')}</p>
                    <p> Жанр: {props.genres.map(i=> i.genre).join(', ')}</p>
                    <p>Дата выхода: {props.premiereRu}</p>
                    <footer>
                    <p>{props.year} год</p>
                    </footer>
                </div>
            </div>
        </div>
    )
}
export default Card