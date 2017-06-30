import React, {Component} from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity, TouchableNativeFeedback} from "react-native";
import {ICON_SIZE, BOTTOM_BAR_ICON_TOP_MARGIN} from "../../constants/dimensions";
import Icon from "react-native-vector-icons/FontAwesome";

const ACTIVE_TAB_COLOR = '#2196F3';
const INACTIVE_TAB_COLOR = 'rgba(0, 0, 0, 0.54)';

export default class Tab extends Component {

    componentDidMount() {
    }

    render() {
        return <TouchableNativeFeedback
            onPress={this.props.onPress}
            background={TouchableNativeFeedback.SelectableBackground()}
        >
            <View style={styles.container}>
                <Icon
                    style={styles.icon}
                    name={this.props.iconName}
                    size={ICON_SIZE}
                    color={this.props.activeTab ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
                />
                <Text style={[styles.title, {color: this.props.activeTab ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}]}>
                    {this.props.title}
                </Text>
            </View>
        </TouchableNativeFeedback>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    icon: {
        marginTop: BOTTOM_BAR_ICON_TOP_MARGIN,
        width: ICON_SIZE,
        height: ICON_SIZE
    },
    title: {
        fontSize: 14,
        color: '#000000',
    },
});




