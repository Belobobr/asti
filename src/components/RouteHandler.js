import React, {Component} from "react";
import {StyleSheet, View, BackHandler} from "react-native";
import {Route, Redirect} from "react-router-native";

class BackHandlerRoute extends Component {

    backHandler = () => {
        if (!this.onMainScreen()) {
            this.props.history.goBack();
        } else {
            this.signOutAnonymousUser();
            BackHandler.exitApp();
        }
        return true;
    };

    signOutAnonymousUser = () => {
        if (!this.props.user.id) {
            this.props.sighOutAnonymous();
        }
    };

    onMainScreen = () => {
        return this.props.location.pathname === '/';
    };


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backHandler);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
    }

    render() {
        return this.props.children;
    }
}

export default RouteHandler = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => {
        if (rest.auth.authenticated) {
            return <BackHandlerRoute {...props} {...rest}>
                <Component {...props}/>
            </BackHandlerRoute>
        } else {
            if (props.location.pathname == '/login') {
                return <Component {...props}/>;
            } else {
                return <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location}
                }}/>
            }
        }
    }}/>
);




