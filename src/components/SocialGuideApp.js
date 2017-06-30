import React, {Component} from "react";
import {StyleSheet, View, BackHandler} from "react-native";
import MainScreen from "./mainScreen";
import CreateRecordScreen from "./createRecordScreen";
import {NativeRouter} from "react-router-native";
import RouteHandler from "./RouteHandler";

class SocialGuideApp extends Component {

    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <RouteHandler exact path="/" component={MainScreen} {...this.props}/>
                    <RouteHandler exact path="/createRecord" component={CreateRecordScreen} {...this.props}/>
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
