import React from "react";
import s from "./Preloader.module.css"
import image from "../../img/preloader.gif"

const Preloader = props => {
 
    return (
        <div className={s.preloader} >
            <div>
                <img src={image} alt="Loading..." />
            </div>
        </div>
    )
}
export default Preloader