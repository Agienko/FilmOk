import React from "react";
import s from "./BigPhoto.module.css"
import closeImg from "../../img/close_delete.png"

const BigPhoto = props => {

    const handleClose = targ => {
        if ((targ.className === s.bigPhoto)||(targ.className === s.arrow)||(targ.alt === 'close')){
        props.setImgOpen(false)
        }
    }

    return (
        <div className={s.bigPhoto} onClick={(e) => handleClose(e.target) }>
            <div className={s.wrapper }>
                <img src={props.image} alt="big"/>
                <div className={s.arrow } >
                    <img src={closeImg} alt="close" />
                </div>
            </div>
        </div>
       
    )
}
export default BigPhoto