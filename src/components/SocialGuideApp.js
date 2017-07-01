import React, {Component} from "react";
import {StyleSheet, View, BackHandler} from "react-native";
import {NativeRouter} from "react-router-native";
import RouteHandler from "./RouteHandler";
import MapScreen from "./map/MapScreen";
import CreateRecordScreen from "./record/CreateRecordScreen";
import ProfileScreen from "./profile/ProfileScreen";
import LoginScreenContainer from "./../containers/LoginScreenContainer";

class SocialGuideApp extends Component {

    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <RouteHandler exact path="/" component={MapScreen} {...this.props}/>
                    <RouteHandler exact path="/createRecord" component={CreateRecordScreen} {...this.props}/>
                    <RouteHandler exact path="/profile" component={ProfileScreen} {...this.props}/>
                    <RouteHandler exact path="/login" component={LoginScreenContainer} {...this.props}/>
                </View>
            </NativeRouter>
        );
    }
}

export default SocialGuideApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});
