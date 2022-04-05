import { connect } from "react-redux";

import {getTopFilms} from "../../redux/reducers/topReducer"
import Top from "./Top";


const mapStateToProps = state =>({
// films: state.top.films,
// header: state.top.header,
top: state.top
})

const TopContainer = connect(mapStateToProps,{getTopFilms})(Top)

export default TopContainer