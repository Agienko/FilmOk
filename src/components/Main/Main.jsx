import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ActorsContainer from "../Actors/ActorsContainer";
import BasketContainer from "../Basket/BasketContainer";
import FilmPageContainer from "../FilmPage/FilmPageContainer";
import FilmPhotosContainer from "../FilmPhotos/FilmPhotosContainer";
import Preloader from "../Preloader/Preloader";
import PremieresContainer from "../Premieres/PremieresContainer";

const TopContainer = React.lazy(() => import("../Top/TopContainer"));
const SearchContainer = React.lazy(() => import("../Search/SearchContainer"));

const Main = props => {
    return (
    <div >
        <Suspense fallback={<Preloader/>}>
           <Routes>
            <Route path='/premieres/*' element={<PremieresContainer />}/>
            <Route path='/' element={<PremieresContainer />}/>
            <Route path='/top/*' element={<TopContainer />}/>
            <Route path='/film/*' element={<FilmPageContainer />}/>
            <Route path='/search/*' element={<SearchContainer />}/>
            <Route path='/photos/*' element={<FilmPhotosContainer />}/>
            <Route path='/actors/*' element={<ActorsContainer />}/>
            <Route path='basket/*' element={<BasketContainer/>}/>
           </Routes>
        </Suspense>
    </div>
    )
}
export default Main