import React from "react";
import { Route, Routes } from "react-router-dom";
import FilmPageContainer from "../FilmPage/FilmPageContainer";

import PremieresContainer from "../Premieres/PremieresContainer";
import Search from "../Search/Search";
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
            <Route path='/search/*' element={<Search />}/>
           </Routes>
           
         
          
        </div>
    )
}
export default Main