import React, { useState } from "react";
import s from "./TopSettings.module.css"
import arrow from "../../../img/arrow.png"
const TopSettings = props => {
    const [menu, setMenu] = useState(true)
    const [type, setType] = useState()
    const handleClick = () => setMenu(!menu)
    const handleSendClick = () => props.setHandleTopFilms(type) 
  
    return (
            <div className={s.settings + ' ' + (menu || s.upMenu)} >
                <form className={s.form}> 
                    <div>
                        <div>Месяц: </div>
                        
                        <select  onChange={(e) => setType(e.target.value)}>
                            <option value="TOP_250_BEST_FILMS"> 250 лучших фильмов</option>
                            <option value="TOP_100_POPULAR_FILMS"> 100 популярных фильмов</option>
                            <option value="TOP_AWAIT_FILMS">ТОП ожидаемых фильмов</option>
                        </select>
                    </div>
                </form>
                <div className={s.btn}> 
                    <button onClick={handleSendClick}>Поиск</button>
                </div>
                <div    className={s.arrow + ' ' + (menu && s.rotate)} 
                        onClick={handleClick}
                > <img src={arrow} alt={'arrow'}/> </div>
            </div>
          
    )
}
export default TopSettings