import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import SocialGuideApp from "../components/SocialGuideApp";
import * as authActionCreators from '../actions/auth';


function mapStateToProps(state) {
    return {
        auth: state.auth,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        Object.assign(
            {},
            authActionCreators,
        ), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialGuideApp)