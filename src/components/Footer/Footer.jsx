import React from "react";
import { Link } from "react-router-dom";

import s from "./Footer.module.css"

const Footer = props => {
    return (
        <div className={s.footer}>
           <ul>
            <li><Link to={'/premieres'}>ПРЕМЪЕРЫ</Link> </li>
            <li><Link to={'/top'}>ТОП</Link></li>
            <li><Link to={'/search'}> Поиск  </Link> </li>
        </ul>
        </div>
    )
}
export default Footer