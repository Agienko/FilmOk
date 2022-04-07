import { connect } from "react-redux";
import {getTopFilms} from "../../redux/reducers/topReducer"
import Top from "./Top";

const mapStateToProps = state =>({top: state.top})

const TopContainer = connect(mapStateToProps,{getTopFilms})(Top)

export default TopContainer