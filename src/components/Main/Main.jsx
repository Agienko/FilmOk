import React from "react";
import { Route, Routes } from "react-router-dom";
import FilmPageContainer from "../FilmPage/FilmPageContainer";
import FilmPhotosContainer from "../FilmPhotos/FilmPhotosContainer";
import PremieresContainer from "../Premieres/PremieresContainer";
import SearchContainer from "../Search/SearchContainer";
import TopContainer from "../Top/TopContainer";
import s from "./Main.module.css"

const Main = props => {
   
    return (
        <div className={s.main}>
           <Routes>
            <Route path='/premieres/*' element={<PremieresContainer />}/>
            <Route path='/' element={<PremieresContainer />}/>
            <Route path='/top/*' element={<TopContainer />}/>
            <Route path='/film/*' element={<FilmPageContainer />}/>
            <Route path='/search/*' element={<SearchContainer />}/>
            <Route path='/photos/*' element={<FilmPhotosContainer />}/>
           </Routes>
           
         
          
        </div>
    )
}
export default Main