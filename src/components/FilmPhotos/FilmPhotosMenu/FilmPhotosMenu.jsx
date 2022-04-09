import React from "react";
import s from "./FilmPhotosMenu.module.css"

const FilmPhotosMenu = ({filmId, getImages}) => {

  const handleClick = type => getImages(filmId, type, 1)
  
    return (
            <ul className={s.ul}>
                <li onClick={() => handleClick('STILL')}>Кадры</li>
                <li onClick={() => handleClick('SHOOTING')}>Изображения со съемок</li>
                <li onClick={() => handleClick('POSTER')}>Постеры</li>
                <li onClick={() => handleClick('FAN_ART')}>Фан-арты</li>
                <li onClick={() => handleClick('PROMO')}>Промо</li>
                <li onClick={() => handleClick('CONCEPT')}>Концепт-арты</li>
                <li onClick={() => handleClick('WALLPAPER ')}>Обои</li>
                <li onClick={() => handleClick('COVER')}>Обложки</li>
                <li onClick={() => handleClick('SCREENSHOT')}>Скриншоты</li>
            </ul>
    )
}

export default FilmPhotosMenu