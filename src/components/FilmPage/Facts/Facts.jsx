import React, { useState } from "react";
import s from "./Facts.module.css"

const Facts = props => {

const [moreFacts, setMoreFacts] = useState(5)

    return (
        <div className={s.facts}>
            <h3>Интересные факты:</h3> 
            <ul>
                {props.facts.filter((i, j) => j< moreFacts).map(item => 
                <div dangerouslySetInnerHTML={{ __html: `<li>${item.text}</li>` }} key={item.text}/>)}
            </ul>
            
            {(moreFacts < props.facts.length) &&  
                <div className={s.btnWrap}>
                    <button onClick={() => setMoreFacts(moreFacts + 5)}>Еще...</button>
                </div>
            }
            
        </div>
    )
}
export default Facts