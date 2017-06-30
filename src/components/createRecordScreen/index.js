import React, {Component} from "react";
import {StyleSheet, View, Button, ToolbarAndroid} from "react-native";
import RNGooglePlaces from "react-native-google-places";

export default class CreateRecordScreen extends Component {

    render() {
        return <View style={styles.container}>
            <ToolbarAndroid
                logo={require('./../../images/icon_back_black.png')}
                onIconClicked={this.backPressed}
                style={styles.toolbar}
                title="Добавить аудио гайд"
                onActionSelected={this.onActionSelected}/>

            <View style={styles.button}>
                <Button
                    onPress={this.choosePlacePressed}
                    title="Выбрать место"
                    color="#841584"/>
            </View>

            <View style={styles.button}>
                <Button
                    onPress={this.recordAudioGuidePressed}
                    title="Записсать аудио гайд"
                    color="#841584"/>
            </View>
        </View>
    }

    backPressed = () => {
        debugger;
        return this.props.history.entries.length === 1;
    };

    choosePlacePressed = () => {
        RNGooglePlaces.openPlacePickerModal()
            .then((place) => {
                console.log(place);
                // place represents user's selection from the
                // suggestions and it is a simplified Google Place object.
            })
            .catch(error => console.log(error.message));  // error is a Javascript Error object
    };

    recordAudioGuidePressed = () => {

    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    toolbar: {
        elevation: 5,
        height: 48,
        backgroundColor: 'white'
    },
    button: {
        margin: 16
    }

});




