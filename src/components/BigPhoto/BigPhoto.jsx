import React, { useState } from "react";
import s from "./BigPhoto.module.css"
import closeImg from "../../img/close_delete.png"
import Preloader from "../Preloader/Preloader";

const BigPhoto = props => {

    const [isLoading, setIsLoading] = useState(true)

    const handleClose = targ => {
        if ((targ.className.split(' ')[0] === s.bigPhoto)||(targ.className === s.arrow)||(targ.alt === 'close')){
        props.setImgOpen(false)
        setIsLoading(true)
        }
    }
     
    return (
       <>
       {isLoading && <Preloader />}
            <div className={s.bigPhoto + ' ' + (isLoading ? s.hidden : '')} onClick={(e) => handleClose(e.target) }>
                <div className={s.wrapper }>
                    <img src={props.image} onLoad={() => setIsLoading(false)} alt="big"/>
                    <div className={s.arrow } >
                        <img src={closeImg} alt="close" />
                    </div>
                </div>
            </div>
       </>
    )
}
export default BigPhoto