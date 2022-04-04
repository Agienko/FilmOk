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
        <div className={s.main}>
            <h2>Премьеры</h2>
          {items.map(i => i = <Card {...i} key={i.kinopoiskId}/>)}
        </div>
    )
}
export default Premieres