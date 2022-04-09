import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Main from "./components/Main/Main";
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store = {store}>
          <HeaderContainer />
          <Main />
          <Footer />
        </Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
