import React, {Component} from "react";
import {StyleSheet, View, ToolbarAndroid, Image, Text, TouchableNativeFeedback} from "react-native";
import Tabs from "./../tabs";
import LeaderBoardTab from "./LeaderBoardTab";
import MapTab from "./MapTab";
import ProfileTab from "./ProfileTab";
import {Link} from "react-router-native";

export default class MainScreen extends Component {

    render() {
        debugger;

        return <View style={styles.container}>
            {/*<Toolbar style={styles.toolbar} title="Instagramm"/>*/}
            <ToolbarAndroid
                style={styles.toolbar}
                title="SocialGuide"
                onActionSelected={this.onActionSelected}/>
            <Tabs style={styles.tabs}>
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
                    <Link
                        to="/createRecord"
                        underlayColor='#f0f4f7'>
                        <Text>About</Text>
                    </Link>
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
        elevation: 5,
        height: 48,
        backgroundColor: 'white'
    },
    tabs: {
      elevation: 5,
    },
    fab: {
        elevation: 5,
        width: 56,
        height: 56,
        backgroundColor: 'red',
        position: 'absolute',
        right: 8,
        bottom: 56 + 8,
        borderRadius: 28,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
