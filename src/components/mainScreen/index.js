import React, {Component} from "react";
import {StyleSheet, View, ToolbarAndroid, Image, TouchableNativeFeedback} from "react-native";
import Tabs from "./../tabs";
import LeaderBoardTab from "./LeaderBoardTab";
import MapTab from "./MapTab";
import ProfileTab from "./ProfileTab";

export default class MainScreen extends Component {

    render() {
        return <View style={styles.container}>
            {/*<Toolbar style={styles.toolbar} title="Instagramm"/>*/}
            <ToolbarAndroid
                logo={require('./../../images/ic_account_circle_black_24dp.png')}
                style={styles.toolbar}
                title="AwesomeApp"
                actions={[{title: 'Settings', show: 'always'}]}
                onActionSelected={this.onActionSelected}/>
            <Tabs>
                <MapTab iconName='user' title='Карта' {...this.props}/>
                <LeaderBoardTab iconName='hashtag' title='Лидеры' {...this.props}/>
                <ProfileTab iconName='user' title='Профиль' {...this.props}/>
            </Tabs>

            <TouchableNativeFeedback
                onPress={this.props.onPress}
                background={TouchableNativeFeedback.SelectableBackground()}
                style={{
                    width: 56,
                    height: 56,
                    borderRadius: 28
                }}
            >
                <View style={styles.fab}>

                </View>
            </TouchableNativeFeedback>
        </View>
    }

    onActionSelected(position) {
        if (position === 0) { // index of 'Settings'
            showSettings();
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    toolbar: {
        height: 48,
        backgroundColor: 'white'
    },
    fab: {
        width: 56,
        height: 56,
        backgroundColor: 'red',
        position: 'absolute',
        right: 8,
        bottom: 56 + 8,
        borderRadius: 28
    }
});
