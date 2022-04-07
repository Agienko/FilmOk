import React from "react";
import { Route, Routes } from "react-router-dom";
import ActorsContainer from "../Actors/ActorsContainer";
import Basket from "../Basket/Basket";
import FilmPageContainer from "../FilmPage/FilmPageContainer";
import FilmPhotosContainer from "../FilmPhotos/FilmPhotosContainer";
import PremieresContainer from "../Premieres/PremieresContainer";
import SearchContainer from "../Search/SearchContainer";
import TopContainer from "../Top/TopContainer";

const Main = props => {
    return (
        <div >
           <Routes>
            <Route path='/premieres/*' element={<PremieresContainer />}/>
            <Route path='/' element={<PremieresContainer />}/>
            <Route path='/top/*' element={<TopContainer />}/>
            <Route path='/film/*' element={<FilmPageContainer />}/>
            <Route path='/search/*' element={<SearchContainer />}/>
            <Route path='/photos/*' element={<FilmPhotosContainer />}/>
            <Route path='/actors/*' element={<ActorsContainer />}/>
            <Route path='basket/*' element={<Basket/>}/>
           </Routes>
        </div>
    )
}
export default Main