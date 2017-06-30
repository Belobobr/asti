import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import SocialGuideApp from "../components/SocialGuideApp";

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        Object.assign(
            {},
        ), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialGuideApp)