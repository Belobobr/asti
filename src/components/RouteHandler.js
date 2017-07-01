import React, {Component} from "react";
import {StyleSheet, View, BackHandler} from "react-native";
import {Route} from "react-router-native";

class BackHandlerRoute extends Component {

    backHandler = () => {
        // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
        // Typically you would use the navigator here to go to the last state.

        if (!this.onMainScreen()) {
            this.props.history.goBack();
        } else {
            BackHandler.exitApp();
        }
        return true;
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
    <Route {...rest} render={props => (
        <BackHandlerRoute {...props}>
            <Component {...props}/>
        </BackHandlerRoute>
    )}/>
);




