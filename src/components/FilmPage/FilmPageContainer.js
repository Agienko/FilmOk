import { connect } from "react-redux";
import { getFilm , setClear} from "../../redux/reducers/filmPageReducer";
import FilmPage from "./FilmPage";



const mapStateToProps = state =>({filmPage: state.filmPage})

const FilmPageContainer = connect(mapStateToProps,{getFilm, setClear})(FilmPage)

export default FilmPageContainer