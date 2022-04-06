import React from "react";
import s from "./FilmPageCenter.module.css"

const FilmPageCenter = props => {
   
    return (
        <div className={s.center}>
            <header>
                <h1>{props.nameRu} ({props.year})</h1>
                <h3>{props.nameOriginal || props.nameRu} {props.ratingAgeLimits}</h3>
                <p>{props.shortDescription}</p>
            </header>
        
            <main className={s.about}>
                <h2>О фильме</h2>
                <p><span> Рейтинг: </span> {props.ratingKinopoisk}</p>
                <p><span> Год производства: </span> {props.year}</p>
                <p><span>Страна: </span> {props.countries.map(i=> i.country).join(', ')} </p>
                <p><span> Жанр: </span> {props.genres.map(i=> i.genre).join(', ')}</p>
                <p><span>Слоган: </span> {props.slogan} </p>
                <p><span>Продолжительность: </span> {props.filmLength} мин.</p>
                {props.ratingAgeLimits && 
                    <p><span>Возраст: </span> {props.ratingAgeLimits.slice(3)}+</p>
                }

                <div className={s.description}>
                    <h3>Описание:</h3> 
                    <p>{props.description}</p>
                </div>
            </main>
        </div>
    )
}
export default FilmPageCenter