import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import LoginScreen from "../components/login/LoginScreen";
import * as authActionCreators from "../actions/auth";

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        Object.assign(
            {},
            authActionCreators,
        ), dispatch);
}

const LoginScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);

export default LoginScreenContainer
