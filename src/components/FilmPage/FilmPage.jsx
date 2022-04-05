import React, { useEffect } from "react";
import {useParams } from "react-router-dom";
import s from "./FilmPage.module.css"

const FilmPage = props => {
    const userId = +useParams()['*']
    useEffect(()=>{
        props.getFilm(userId)
    },[])
    return (
        <>
        <div className={s.filmpage}>
            <div className={s.left} >
                <img src={props.filmPage.posterUrlPreview} alt="poster" />
            </div>

            <div className={s.center}>
                <header>
                    <h1>{props.filmPage.nameRu} ({props.filmPage.year})</h1>
                    <h3>{props.filmPage.nameOriginal || props.filmPage.nameRu} {props.filmPage.ratingAgeLimits}</h3>
                    <p>{props.filmPage.shortDescription}</p>
                </header>
            

                <main className={s.about}>
                    <h2>О фильме</h2>
                    <p><span> Рейтинг: </span> {props.filmPage.ratingKinopoisk}</p>
                    <p><span> Год производства: </span> {props.filmPage.year}</p>
                    <p><span>Страна: </span> {props.filmPage.countries.map(i=> i.country).join(', ')} </p>
                    <p><span> Жанр: </span> {props.filmPage.genres.map(i=> i.genre).join(', ')}</p>
                    <p><span>Слоган: </span> {props.filmPage.slogan} </p>
                    <p><span>Продолжительность: </span> {props.filmPage.filmLength} мин.</p>
                    <p><span>Возраст: </span> {props.filmPage.ratingAgeLimits.slice(3)}+</p>


                    <div className={s.description}>
                        <h3>Описание:</h3> 
                        <p>{props.filmPage.description}</p>
                    </div>
                </main>

            </div>

            <div className={s.right}>
               <h2> {props.filmPage.ratingKinopoisk}</h2>
                <p>{props.filmPage.ratingKinopoiskVoteCount.toString().split('').map((n, i) => i%3 === 2 ? n + ' ': n ).join('')} оценки</p>
            </div>
    
        </div>
                <div className={s.photos}>
                    <h3>Фото:</h3> 
                   <ul>
                       <li>Кадры</li>
                       <li>Изображения со съемок</li>
                       <li>Постеры</li>
                       <li>Фан-арты</li>
                       <li>Промо</li>
                       <li>Концепт-арты</li>
                       <li>Обои</li>
                       <li>Обложки</li>
                       <li>Скриншоты</li>
                   </ul>
                </div>

                <div className={s.facts}>
                    <h3>Интересные факты:</h3> 
                    <ul>
                        {props.filmPage.facts.map(item => <div dangerouslySetInnerHTML={{ __html: `<li>${item.text}</li>` }} key={item.text}/>)}
                    </ul>
                </div>

        </>
    )
}
export default FilmPage