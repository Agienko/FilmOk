import { connect } from "react-redux";
import { getFilm } from "../../redux/reducers/filmPageReducer";
import FilmPage from "./FilmPage";



const mapStateToProps = state =>({filmPage: state.filmPage})

const FilmPageContainer = connect(mapStateToProps,{getFilm})(FilmPage)

export default FilmPageContainer