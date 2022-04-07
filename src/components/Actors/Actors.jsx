import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BigPhoto from "../BigPhoto/BigPhoto";
import Preloader from "../Preloader/Preloader";
import s from "./Actors.module.css"


const Actors = props => {
    const filmId = +useParams()['*']
    useEffect(() =>{
        props.getActors(filmId)
    },[])
    console.log(props)

    const [isImgOpen, setImgOpen] = useState(false)
    const [image, setImage] = useState(null)

    if (props.isLoading) return <Preloader />
    return (
       
        <div className={s.actors} >
             { isImgOpen && <BigPhoto setImgOpen={setImgOpen} image={image}/>}
           <h1>АКТЕРЫ</h1>
           <h2>{props.name}</h2>
            <ul>
                {props.actors.map(item => 
                    <li key={item.staffId + item.professionText}>
                        <figure className={s.figure} 
                            onClick={() =>{setImage(item.posterUrl);setImgOpen(true) }}>
                            <img src={item.posterUrl} alt="poster" />
                            <figcaption>
                                <h3>{item.nameRu}</h3>
                                <p>{item.professionText.slice(0,-1)}</p>
                            </figcaption>
                        </figure>
                    </li>
                )}
            </ul>
        </div>
        
    )
}
export default Actors