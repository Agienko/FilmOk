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
    const userId = +useParams()['*']
    useEffect(()=>{
        props.getFilm(userId)
        return ()=> {props.setClear()}
    },[userId])
console.log(props.filmPage.actors)
    if(props.filmPage.isLoading && props.filmPage.isFactsLoading) return <Preloader />
    return (
        <>
            <div className={s.filmpage}>
                <FilmPageLeft userId={userId} poster={props.filmPage.posterUrlPreview}/>
                <FilmPageCenter {...props.filmPage}/>
                <FilmPageRight  raiting={props.filmPage.ratingKinopoisk} 
                                raitingCount={props.filmPage.ratingKinopoiskVoteCount} 
                                actors={props.filmPage.actors} userId={userId}/>
                
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