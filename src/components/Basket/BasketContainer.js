import { connect } from "react-redux";
import Basket from "./Basket";
import { parseFavFilms, removeFavFilm } from "../../redux/reducers/basketReducer";


const mapStateToProps = state =>({...state.basket})

const BasketContainer = connect(mapStateToProps,{parseFavFilms, removeFavFilm})(Basket)

export default BasketContainer