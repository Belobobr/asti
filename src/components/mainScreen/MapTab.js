import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import MapView from "react-native-maps";

export default class MapTab extends Component {

    render() {
        return <View style={styles.container}>
            <MapView
                style={styles.map}
            >
            </MapView>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});




