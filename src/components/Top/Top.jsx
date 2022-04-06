import React, { useEffect} from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Preloader from "../Preloader/Preloader";
import s from "./Top.module.css"
import TopSettings from "./TopSett/TopSettings";

const Top = props => {
    useEffect(() =>props.getTopFilms(), [])

    const setHandleTopFilms = type => props.getTopFilms(type, 1)

    if(props.top.isLoading) return <Preloader />
    return (
        <div >
            <TopSettings setHandleTopFilms={setHandleTopFilms} />

            <h1 className={s.h1}>{props.top.header}</h1>
            <div className={s.top}>
                {props.top.films.map(i => 
                <Card 
                    image={i.posterUrlPreview} rating={i.rating} name={i.nameRu} 
                    duration={i.filmLength} countries={i.countries} genres={i.genres}
                    premiere={i.premiereRu} year={i.year} id={i.filmId} key={i.filmId}
                />)}
            </div>
            <Pagination 
                activePage ={props.top.activePage} setActivePage={props.getTopFilms}
                type={props.top.type} pagesCount={props.top.pagesCount}
            />
        </div>
    )
}

export default Top