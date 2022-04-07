import { connect } from "react-redux";
import {getSearchingFilms, setKeyWord, setActivePage} from "../../redux/reducers/searchReducer"
import Search from "./Search";

const mapStateToProps = state =>({...state.search})

const SearchContainer = connect(mapStateToProps, {getSearchingFilms, setKeyWord, setActivePage})(Search)

export default SearchContainer