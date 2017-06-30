import React, {Component} from "react";
import {StyleSheet, View, Button, ToolbarAndroid} from "react-native";

export default class CreateRecordScreen extends Component {

    render() {
        return <View style={styles.container}>
            <ToolbarAndroid
                logo={require('./../../images/icon_back_black.png')}
                onIconClicked={this.backPressed}
                style={styles.toolbar}
                title="Добавить аудио гайд"
                onActionSelected={this.onActionSelected}/>

            <Button
                title="Выбрать место"
                color="#841584"/>

            <Button
                title="Записсать аудио гайд"
                color="#841584"/>
        </View>
    }

    backPressed = () => {
        debugger;
        return this.props.history.entries.length === 1;
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
        height: 48,
        backgroundColor: 'white'
    },
});




