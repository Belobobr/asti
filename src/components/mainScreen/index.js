import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Tabs from "./../tabs";
import {STATUS_BAR_SIZE} from "../../constants/dimensions";
import LeaderBoardTab from "./LeaderBoardTab";
import MapTab from "./MapTab";
import ProfileTab from "./ProfileTab";

export default class MainScreen extends Component {

    render() {
        return <View style={styles.container}>
            {/*<Toolbar style={styles.toolbar} title="Instagramm"/>*/}
            <Tabs>
                <MapTab iconName='user' title='Карта' {...this.props}/>
                <LeaderBoardTab iconName='hashtag' title='Лидеры' {...this.props}/>
                <ProfileTab iconName='user' title='Профиль' {...this.props}/>
            </Tabs>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    toolbar: {
        marginTop: STATUS_BAR_SIZE,
    },
});
