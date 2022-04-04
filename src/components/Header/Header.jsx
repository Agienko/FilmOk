import React from "react";
import s from "./Header.module.css"
import logo from "../../img/logo.jpg"
import search from "../../img/search.png"
const Header = props => {
    return (
        <div className={s.header}>
            <img src={logo} alt="logo" />
        <ul>
            <li> Премьеры</li>
            <li>ТОП</li>
            <li> <input type="text" /> <img src={search} alt="" /></li>
        </ul>
        </div>
    )
}
export default Header