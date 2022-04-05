import React, { useEffect} from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import s from "./Search.module.css"


const Search = props => {
    useEffect(() =>{
        return ()=> {
            props.setKeyWord('')
            props.setActivePage(1)
        }
    },[])
    return (
        <div >
          {props.pagesCount > 0 && <Pagination 
                activePage ={props.activePage} setActivePage={props.getSearchingFilms}
                type={props.keyWord} pagesCount={props.pagesCount}
                />}

            <h1 className={s.h1}>Поиск</h1>
            <p>Поиск: "{props.keyWord}"</p>
            <p>Найдено: {props.searchFilmsCountResult} ответов</p>
            <div className={s.top}>
            {props.films.map(i => 
            <Card 
                image={i.posterUrlPreview} rating={i.rating} name={i.nameRu} 
                duration={i.filmLength} countries={i.countries} genres={i.genres}
                premiere={i.premiereRu} year={i.year} id={i.filmId} key={i.filmId}
            />)}
            </div>
            {props.pagesCount > 0 && <Pagination 
                activePage ={props.activePage} setActivePage={props.getSearchingFilms}
                type={props.keyWord} pagesCount={props.pagesCount}
                />}
        </div>
    )
}
export default Search