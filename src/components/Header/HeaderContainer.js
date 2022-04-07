import { connect } from "react-redux";
import {getSearchingFilms} from "../../redux/reducers/searchReducer"
import Header from "./Header";

const HeaderContainer = connect(null,{getSearchingFilms})(Header)

export default HeaderContainer