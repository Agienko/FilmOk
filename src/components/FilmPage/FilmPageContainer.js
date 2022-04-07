import { connect } from "react-redux";
import { getFilm , setClear, addFavoriteFilm} from "../../redux/reducers/filmPageReducer";
import FilmPage from "./FilmPage";


const mapStateToProps = state =>({filmPage: state.filmPage})

const FilmPageContainer = connect(mapStateToProps,{getFilm, setClear, addFavoriteFilm})(FilmPage)

export default FilmPageContainer