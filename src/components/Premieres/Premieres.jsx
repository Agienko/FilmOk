import React, { useEffect, useState } from "react";
import { filmsAPI } from "../../api/api";
import Card from "../Card/Card";
import s from "./Premieres.module.css"

const Premieres = props => {
    const [items, setItems] = useState([])
    useEffect(() =>{
        filmsAPI.getPremieres(2022, 'MAY')
        .then(data => setItems(data.items))
    },[])

    return (
        <div >
            <h1 className={s.h1}>Премьеры</h1>
            <div className={s.premieres}>
            {items.map(i => i = <Card {...i} key={i.kinopoiskId}/>)}
            </div>
          
        </div>
    )
}
export default Premieres