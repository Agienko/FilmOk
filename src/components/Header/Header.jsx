import React from "react";
import s from "./Header.module.css"
import logo from "../../img/logo.jpg"
import search from "../../img/search.png"
import { Link } from "react-router-dom";
const Header = props => {
    return (
        <div className={s.header}>
            <img src={logo} alt="logo" />
        <ul>
            <li><Link to={'/premieres'}>Премьеры</Link> </li>
            <li>ТОП</li>
            <li><input type="text" /> <Link to={'/search'}> <img src={search} alt="search" /></Link> </li>
        </ul>
        </div>
    )
}
export default Header