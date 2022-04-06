import React from "react";
import { Link } from "react-router-dom";
import s from "./FilmPageRight.module.css"


const FilmPageRight = props => {
    
    return (
        <div className={s.right}>
            <h2> {props.raiting}</h2>
            <p>Оценки: {props.raitingCount.toString().split('').map((n, i) => i%3 === 2 ? n + ' ': n ).join('')} </p>
            <div className={s.actors}>
                <h3>АКТЕРЫ</h3>
                    <Link to={`/actors/${props.userId}`}>
                        <ul title="Смотреть список">
                            {props.actors.filter((i,j)=> j<20).map((item, i) =>
                                <li key={item.staffId}>{item.nameRu}</li>)} 
                                <li>...</li>
                        </ul>
                    </Link>
                    
                    
                    <p>Всего: {props.actors.length}</p>
            </div>
        </div>
    )
}
export default FilmPageRight