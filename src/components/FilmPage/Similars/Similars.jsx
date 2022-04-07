import React, { useState } from "react";
import CardLittle from "../../CardLittle/CardLittle";
import arrow from "../../../img/arrow.png"
import s from "./Similars.module.css"

const Similars = props => {
    const STEP = 185 //card width
    const [overY, setOverY] = useState(0)

const leftClick = () => (overY < 0) ? setOverY(overY + STEP*2) : setOverY(0)

const rightClick = () =>{
    (overY > -185*(props.similars.length-1)) 
    ? setOverY(overY - STEP*2)
    : setOverY(-STEP*(props.similars.length-1))
}

const animation = {
    transition: 'transform .18s ease-out',
    transform: `translateX(${overY}px)`
}

    return (
            <div className={s.similarsWrapp}>
                <h2> Похожие фильмы:</h2>
                    <div className={s.similars}>
                        <div className={s.arrowWrapLeft} onClick={leftClick}> 
                            <img src={arrow} alt="left" />
                        </div>
                       <div className={s.content} style={animation}>
                            {props.similars.map(i =>
                                <CardLittle image={i.posterUrlPreview} name={i.nameRu} 
                                id={i.filmId} key={i.filmId}/>
                                )}
                       </div>
                        

                        <div className={s.arrowWrapRight} onClick={rightClick}> 
                            <img src={arrow} alt="right" />
                        </div>
                    </div>
            </div>
                       
      
    )
}
export default Similars