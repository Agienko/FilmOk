import { connect } from "react-redux";
import Premieres from "./Premieres";
import {getPremieres} from "../../redux/reducers/premieresReducer"



const mapStateToProps = state =>({
films: state.premieres.films
})

const PremieresContainer = connect(mapStateToProps,{getPremieres})(Premieres)

export default PremieresContainer