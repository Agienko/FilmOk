import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import BigPhoto from "../BigPhoto/BigPhoto";
import Pagination from "../Pagination/Pagination";
import Preloader from "../Preloader/Preloader";
import s from "./FilmPhotos.module.css"

const FilmPhotos = props => {
    const userId = +useParams()['*']
    useEffect(()=>{props.getImages(userId, 'STILL', 1)},[])
    const handlegetImage = (type, page) => props.getImages(userId, type, page)

    const [isImgOpen, setImgOpen] = useState(false)
    const [image, setImage] = useState(null)
    if (props.isLoading) return <Preloader />
    return (
        <div className={s.photos}>
          { isImgOpen && <BigPhoto setImgOpen={setImgOpen} image={image}/>}
            <ul>
                <li onClick={() => props.getImages(userId,'STILL', 1)}>Кадры</li>
                <li onClick={() => props.getImages(userId,'SHOOTING', 1)}>Изображения со съемок</li>
                <li onClick={() => props.getImages(userId,'POSTER', 1)}>Постеры</li>
                <li onClick={() => props.getImages(userId,'FAN_ART', 1)}>Фан-арты</li>
                <li onClick={() => props.getImages(userId,'PROMO', 1)}>Промо</li>
                <li onClick={() => props.getImages(userId,'CONCEPT', 1)}>Концепт-арты</li>
                <li onClick={() => props.getImages(userId,'WALLPAPER ', 1)}>Обои</li>
                <li onClick={() => props.getImages(userId,'COVER', 1)}>Обложки</li>
                <li onClick={() => props.getImages(userId,'SCREENSHOT', 1)}>Скриншоты</li>
            </ul>
            <h1 className={s.h1}>{props.name}</h1>
            <div className={s.container}>
               
                {props.photo.map((item, i) => 
                <img key={i} src={item.previewUrl} alt={i} onClick={(e)=>{setImgOpen(true); setImage(props.photo[e.target.alt].imageUrl)}}/>)}
            </div>
            { props.pagesCount > 1 &&
            <Pagination activePage ={props.activePage} setActivePage={handlegetImage}
                        type={props.type} pagesCount={props.pagesCount} 
            />
            }
                
        </div>


    )
}
export default FilmPhotos