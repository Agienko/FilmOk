import React, { useEffect} from "react";
import Card from "../Card/Card";
import s from "./Premieres.module.css"

const Premieres = props => {
    console.log(props.films)
    useEffect(() =>{
       props.getPremieres()
    },[])

    return (
        <div >
            <h1 className={s.h1}>Премьеры</h1>
            <div className={s.premieres}>
            {props.films.map(i => i = <Card {...i} key={i.kinopoiskId}/>)}
            </div>
          
        </div>
    )
}
export default Premieres