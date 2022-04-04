import React, { useEffect} from "react";
import Card from "../Card/Card";
import s from "./Top.module.css"

const Top = props => {
    console.log(props.films)
    useEffect(() =>{
       props.getTopFilms()
    },[])

    return (
        <div >
            <h1 className={s.h1}>ТОП-250</h1>
            <div className={s.top}>
            {props.films.map(i => i = <Card {...i} key={i.filmId}/>)}
            </div>
          
        </div>
    )
}
export default Top