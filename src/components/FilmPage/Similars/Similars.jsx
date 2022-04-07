import React from "react";
import CardLittle from "../../CardLittle/CardLittle";

import s from "./Similars.module.css"

const Similars = props => {
   
    return (
            <div className={s.similarsWrapp}>
                <h2> Похожие фильмы:</h2>
                    <div className={s.similars}>
                        {props.similars.map(i =>
                        <CardLittle image={i.posterUrlPreview} name={i.nameRu} id={i.filmId} key={i.filmId}/>
                        )}
                    </div>
            </div>
                       
      
    )
}
export default Similars