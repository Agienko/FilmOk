import React, { useState } from "react";
import s from "./Header.module.scss"
import logo from "../../img/logo.jpg"
import search from "../../img/search.png"
import { Link } from "react-router-dom";
import menuImg from "../../img/mobMenu.png"

const Header = props => {
    const [keyWord, setKeyWord] = useState('')

    const [closeMenu, setCloseMenu] = useState(true)
    const handleClick = () =>{
        if (!!keyWord) {
            props.getSearchingFilms(keyWord, 1)
            setKeyWord('')
        }
    }

    return (
        <div className={!closeMenu ? s.header + ' ' +  s.close : s.header}>
            <img src={logo} alt="logo" />
            <div onClick={() => setCloseMenu(!closeMenu)} className={s.mobMenu }>
                <img src={menuImg} alt="menu" />
            </div>
            <ul >
                <li><Link to={'/premieres'}>Премьеры</Link> </li>
                <li><Link to={'/top'}>ТОП</Link></li>
                <li><Link to={'/basket'}>Избранное</Link></li>
                <li>
                    <input type="text" placeholder="поиск..." value={keyWord} 
                            onChange={(e)=> setKeyWord(e.target.value)}/> 
                    <Link to={!keyWord || '/search' }> 
                        <img src={search} alt="search" title="искать" onClick={handleClick}/>
                    </Link> 
                </li>
            </ul>
        </div>
    )
}
export default Header