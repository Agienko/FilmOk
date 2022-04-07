import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import Facts from "./Facts/Facts";
import s from "./FilmPage.module.css"
import FilmPageCenter from "./FilmPageCenter/FilmPageCenter";
import FilmPageLeft from "./FilmPageLeft/FilmPageLeft";
import FilmPageRight from "./FilmPageRight/FilmPageRight";
import SequelsPrequels from "./SequelsPrequels/SequelsPrequels";
import Similars from "./Similars/Similars";


const FilmPage = props => {
    const filmId = +useParams()['*']
    useEffect(()=>{
        props.getFilm(filmId)
        return ()=> {props.setClear()}
    },[filmId])

    if(props.filmPage.isLoading && props.filmPage.isFactsLoading) return <Preloader />
    return (
        <>
            <div className={s.filmpage}>
                <FilmPageLeft   filmId={filmId} poster={props.filmPage.posterUrlPreview} 
                                addFavoriteFilm={props.addFavoriteFilm}/>
                <FilmPageCenter {...props.filmPage}/>
                <FilmPageRight  raiting={props.filmPage.ratingKinopoisk} 
                                raitingCount={props.filmPage.ratingKinopoiskVoteCount} 
                                actors={props.filmPage.actors} userId={filmId}/>
                
            </div>

    {(props.filmPage.facts.length > 0) && 
        <Facts facts={props.filmPage.facts}/> }
    {props.filmPage.sequelsPrequels.length > 0 && 
        <SequelsPrequels sequelsPrequels={props.filmPage.sequelsPrequels} /> } 
    {props.filmPage.similars.length > 0 && 
        <Similars similars ={props.filmPage.similars}/> } 
                
        </>
    )
}
export default FilmPage