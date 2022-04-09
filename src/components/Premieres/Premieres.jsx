import React, { useEffect} from "react";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
import s from "./Premieres.module.css"
import Settings from "./Sett/Settings";

const Premieres = ({isLoading, films, getPremieres}) => {
    useEffect(() =>{
      getPremieres()
    },[])

    const getHandlePremieres = (year, month) =>{
       getPremieres(year, month)
    }

    if(isLoading) return <Preloader />
    return (
        <div>
            <Settings getHandlePremieres ={getHandlePremieres}/>
            <h1 className={s.h1}>Премьеры</h1>
            <div className={s.premieres}>
                {films.map(i => 
                    <Card   image={i.posterUrlPreview} name={i.nameRu} duration={i.duration}
                            countries={i.countries} genres={i.genres} premiere={i.premiereRu}
                            year={i.year} id={i.kinopoiskId} key={i.kinopoiskId}/>
                )}
            </div>
        </div>
    )
}
export default Premieres