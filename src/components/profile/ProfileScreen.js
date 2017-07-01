import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class ProfileScreen extends Component {

    render() {
        return <View style={styles.container}>
            <Icon.ToolbarAndroid
                navIconName="arrow-back"
                title="Профиль"
                onIconClicked={this.onBackPressed}
                style={styles.toolbar}
            />
        </View>
    }

    onBackPressed = () => {
        this.props.history.goBack();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        height: 56,
        elevation: 4,
        backgroundColor: 'white',
    }


});




