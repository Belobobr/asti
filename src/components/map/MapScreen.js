import React, {Component} from "react";
import {StyleSheet, View, ToolbarAndroid, Image, Text, TouchableNativeFeedback, Dimensions} from "react-native";
import {Link} from "react-router-native";
import MapView from "react-native-maps";

export default class MainScreen extends Component {

    render() {
        var {width} = Dimensions.get('window');

        return <View style={styles.container}>
            <MapView
                style={styles.map}
            >
            </MapView>

            <View style={{
                ...bottomPanelStyle,
                width: width
            }}>
                <View style={styles.createRecordButton}>
                    <Link
                        to="/createRecord"
                        underlayColor='#f0f4f7'>
                        <Text>Добавить запись</Text>
                    </Link>
                </View>
            </View>

            <View style={styles.profileIcon}>
                <Link
                    to="/profile"
                    underlayColor='#f0f4f7'>
                    <Text>Профиль</Text>
                </Link>
            </View>
        </View>
    }

    onCreateRecordClicked = () => {

    }
}

const bottomPanelStyle = {
    height: 56,
    position: 'absolute',
    backgroundColor: 'rgba(255, 0, 0, 0.0)',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 8,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    createRecordButton: {
        flex: 1,
        height: 56,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 28,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    profileIcon: {
        position: 'absolute',
        height: 56,
        right: 8,
        top: 8,
        borderRadius: 28,
        paddingLeft: 10,
        paddingRight: 10,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    }
});
