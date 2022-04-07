import { connect } from "react-redux"
import Actors from "./Actors"
import { getActors } from "../../redux/reducers/actorsReducer"

const mapStateToProps = state =>({...state.actors, name: state.filmPage.nameRu})

const ActorsContainer = connect(mapStateToProps,{getActors})(Actors)
   
export default ActorsContainer