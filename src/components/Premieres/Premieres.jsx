import React, { useEffect} from "react";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
import s from "./Premieres.module.css"
import Settings from "./Sett/Settings";

const Premieres = props => {
    useEffect(() =>{
       props.getPremieres()
    },[])

    const getHandlePremieres = (year, month) =>{
        props.getPremieres(year, month)
    }

    if(props.isLoading) return <Preloader />
    return (
        <div>
            <Settings getHandlePremieres ={getHandlePremieres}/>
            <h1 className={s.h1}>Премьеры</h1>
            <div className={s.premieres}>
                {props.films.map(i => 
                    <Card   image={i.posterUrlPreview} name={i.nameRu} duration={i.duration}
                            countries={i.countries} genres={i.genres} premiere={i.premiereRu}
                            year={i.year} id={i.kinopoiskId} key={i.kinopoiskId}/>
                )}
            </div>
        </div>
    )
}
export default Premieres