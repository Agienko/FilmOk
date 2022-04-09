import React, { useEffect} from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Preloader from "../Preloader/Preloader";
import s from "./Search.module.scss"

const Search =({ isLoading, ...props}) => {
    useEffect(() =>{
        return ()=> {
            props.setKeyWord('')
            props.setActivePage(1)
        }
    },[])

    if(isLoading) return <Preloader />

    return (
        <div >
            <h1 className={s.h1}>Поиск</h1>

            <Pagination activePage ={props.activePage} setActivePage={props.getSearchingFilms}
                        type={props.keyWord} pagesCount={props.pagesCount}/>

            <div className={s.info}>
                <p>Поиск: "{props.keyWord}"</p>
                {props.searchFilmsCountResult === 0 
                    ? <p>По вашему запросу ничего не найдено</p>
                    : <p>Найдено: {props.searchFilmsCountResult} ...</p>}
            </div>
           
            <div className={s.top}>
                {props.films.map(i => 
                    <Card   image={i.posterUrlPreview} rating={i.rating} name={i.nameRu} 
                            duration={i.filmLength} countries={i.countries} genres={i.genres}
                            premiere={i.premiereRu} year={i.year} id={i.filmId} key={i.filmId}
                />)}
            </div>

            <Pagination activePage ={props.activePage} setActivePage={props.getSearchingFilms}
                        type={props.keyWord} pagesCount={props.pagesCount}/>   
        </div>
    )
}
export default Search