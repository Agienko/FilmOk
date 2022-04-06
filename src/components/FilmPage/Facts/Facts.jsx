import React from "react";
import s from "./Facts.module.css"

const Facts = props => {
    return (
        <div className={s.facts}>
            <h3>Интересные факты:</h3> 
            <ul>
                {props.facts.map(item => <div dangerouslySetInnerHTML={{ __html: `<li>${item.text}</li>` }} key={item.text}/>)}
            </ul>
        </div>
    )
}
export default Facts