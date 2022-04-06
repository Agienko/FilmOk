import { connect } from "react-redux";
import Premieres from "./Premieres";
import {getPremieres} from "../../redux/reducers/premieresReducer"



const mapStateToProps = state =>({
films: state.premieres.films,
isLoading: state.premieres.isLoading
})

const PremieresContainer = connect(mapStateToProps,{getPremieres})(Premieres)

export default PremieresContainer