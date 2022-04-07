import React, { useState } from "react";
import s from "./Settings.module.css"
import arrow from "../../../img/arrow.png"
const Settings = props => {
    const [menu, setMenu] = useState(true)
    const [year, setYear] = useState(new Date().getFullYear())
    const [month, setMonth] = useState(null)
    const handleClick = () => setMenu(!menu)
    const handleSendClick = () => props.getHandlePremieres(year, month) 
  
    return (
            <div className={s.settings + ' ' + (menu || s.upMenu)} >
                <form className={s.form}> 
                    <div>
                        Год: 
                        <input type="number" onChange={(e)=> setYear(e.target.value)} value={year}/>
                    </div>
                    <div>
                        Месяц: 
                        <select  onChange={(e) => setMonth(e.target.value)}>
                            <option value="JANUARY">Январь</option>
                            <option value="FEBRUARY">Февраль</option>
                            <option value="MARCH">Март</option>
                            <option value="APRIL">Апрель</option>
                            <option value="MAY">Май</option>
                            <option value="JUNE">Июнь</option>
                            <option value="JULY">Июль</option>
                            <option value="AUGUST">Август</option>
                            <option value="SEPTEMBER">Сентябрь</option>
                            <option value="OCTOBER">Октябрь</option>
                            <option value="NOVEMBER">Ноябрь</option>
                            <option value="DECRMBER">Декабрь</option>
                        </select>
                    </div>
                </form>
                <div className={s.btn}> 
                    <button onClick={handleSendClick}>Поиск</button>
                </div>
                <div className={s.arrow + ' ' + (menu && s.rotate)} onClick={handleClick}>
                    <img src={arrow} alt={'arrow'}/> 
                </div>
            </div>
    )
}
export default Settings