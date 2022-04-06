import React, { useState } from "react";
import s from "./Header.module.css"
import logo from "../../img/logo.jpg"
import search from "../../img/search.png"
import { Link } from "react-router-dom";
const Header = props => {
    const [keyWord, setKetWord] = useState('')
    const handleClick = () =>{
        if (!!keyWord) {
            props.getSearchingFilms(keyWord, 1)
            setKetWord('')
        }
    }

    return (
        <div className={s.header}>
            <img src={logo} alt="logo" />
        <ul>
            <li><Link to={'/premieres'}>Премьеры</Link> </li>
            <li><Link to={'/top'}>ТОП</Link></li>
            <li><Link to={'/basket'}>Корзина</Link></li>
            <li>
                <input type="text" placeholder="поиск..." value={keyWord} onChange={(e)=> setKetWord(e.target.value)}/> 
                <Link to={!keyWord || '/search' }> 
                    <img src={search} alt="search" title="искать" onClick={handleClick}/>
                </Link> 
            </li>
        </ul>
        </div>
    )
}
export default Header