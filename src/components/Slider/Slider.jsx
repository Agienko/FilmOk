import React, { useState } from "react";
import CardLittle from "../CardLittle/CardLittle";
import arrow from "../../img/arrow.png"
import s from "./Slider.module.scss"

const Slider = props => {
    const STEP = 185 //card width
    const [overY, setOverY] = useState(0)

    const leftClick = () => (overY < 0) ? setOverY(overY + STEP*2) : setOverY(0)

    const rightClick = () => {(overY > -STEP*(props.items.length-2)) 
                            ? setOverY(overY - STEP*2)
                            : setOverY(-STEP*(props.items.length-2))
        }

    const animation = {
        transition: 'transform .18s ease-out',
        transform: `translateX(${overY}px)`
    }
    if (props.items.length === 0 || !props.items.length) return null
    return (
            <div className={s.similarsWrapp}>
                <h2>{props.header}</h2>
                    <div className={s.slider}>
                        <div className={ (overY < 0) ? s.arrowWrapLeft : s.arrowWrapLeft + ' '+ s.hide} 
                            onClick={leftClick}> 
                            <img src={arrow} alt="left" />
                        </div>
                        <div className={s.content} style={animation}>
                            {props.items.map(i =>
                                <CardLittle image={i.posterUrlPreview} name={i.nameRu} 
                                id={i.filmId} key={i.filmId} relationType={i.relationType}/>
                                )}
                        </div>
                        
                        <div className={(overY > -STEP*(props.items.length-1)) 
                                            ? s.arrowWrapRight  
                                            : s.arrowWrapRight + ' '+ s.hide}
                            onClick={rightClick}> 
                            <img src={arrow} alt="right" />
                        </div>
                    </div>
            </div>
                       
      
    )
}
export default Slider