import React from "react";
import { Route, Routes } from "react-router-dom";
import FilmMain from "../FilmMain/FilmMain";
import Premieres from "../Premieres/Premieres";
import Search from "../Search/Search";
import s from "./Main.module.css"

const Main = props => {
 
    return (
        <div className={s.main}>
           <Routes>
            <Route path='/premieres' element={<Premieres />}/>
            <Route path='/' element={<Premieres />}/>
            <Route path='/film' element={<FilmMain />}/>
            <Route path='/search' element={<Search />}/>
           </Routes>
           
         
          
        </div>
    )
}
export default Main