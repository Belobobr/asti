import React, {Component} from "react";
import {StyleSheet, View, ToolbarAndroid, Image, Text, TouchableNativeFeedback, Dimensions} from "react-native";
import {Link} from "react-router-native";
import MapView from "react-native-maps";
import fire from "./../../fire";
import {ReactNativeAudioStreaming} from "react-native-audio-streaming";

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stories: [],
        };
    }

    componentDidMount() {
        //TODO move to action
        let storiesRef = fire.database().ref('stories').orderByKey().limitToLast(100);

        storiesRef.on('value', snapshot => {
            let stories = [];

            snapshot.forEach(childSnapshot => {
                let story = childSnapshot.val();
                story.id = childSnapshot.key;
                stories.push(story);
            });
            this.setState({stories})
        });
    }

    render() {
        var {width} = Dimensions.get('window');

        return <View style={styles.container}>
            <MapView
                style={styles.map}
            >
                {this.state.stories.map(story => {
                        return <MapView.Marker
                            coordinate={story.location}
                            identifier={story.id}
                            onPress={this.onStorySelected.bind(this)}
                        />;
                    }
                )}
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

    onStorySelected(e) {
        let selectedStory = this.state.stories.filter((story) => e.nativeEvent.id === story.id)[0];
        const url = selectedStory.url;
        ReactNativeAudioStreaming.stop();
        setTimeout(() => {
            ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true});
        }, 1500);
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
