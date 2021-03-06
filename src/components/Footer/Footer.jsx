import React from "react";
import { Link } from "react-router-dom";
import s from "./Footer.module.scss"

const Footer = props => {
    return (
        <div className={s.footer}>
           <ul>
                <li><Link to={'/premieres'}>ПРЕМЬЕРЫ</Link> </li>
                <li><Link to={'/top'}>ТОП</Link></li>
                <li><Link to={'/basket'}>ИЗБРАННОЕ</Link></li>
            </ul>
        </div>
    )
}
export default Footer