import { connect } from "react-redux";
import { getImages, setImages } from "../../redux/reducers/filmPhotosReducer";
import FilmPhotos from "./FilmPhotos";

const mapStateToProps = state =>({...state.filmPhotos, name: state.filmPage.nameRu})

const FilmPhotosContainer = connect(mapStateToProps,{getImages, setImages})(FilmPhotos)

export default FilmPhotosContainer