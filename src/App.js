import React from "react";
import { BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";

import HeaderContainer from "./components/Header/HeaderContainer";
import Main from "./components/Main/Main";


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
          <HeaderContainer />
          <Main />
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
