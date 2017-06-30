import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import MainScreen from './mainScreen';

class SocialGuideApp extends Component {
    render() {
        return (
            <MainScreen/>
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
