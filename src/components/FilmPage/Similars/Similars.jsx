import React from "react";
import Card from "../../Card/Card";

import s from "./Similars.module.css"

const Similars = props => {
   
    return (
            <div className={s.similarsWrapp}>
                <h2> Похожие фильмы:</h2>
                    <div className={s.similars}>
                        {props.similars.map(i =>
                        <Card image={i.posterUrlPreview} name={i.nameRu} id={i.filmId} key={i.filmId}/>
                        )}
                    </div>
            </div>
                       
      
    )
}
export default Similars