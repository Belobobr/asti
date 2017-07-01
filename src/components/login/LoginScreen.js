import React, {Component} from "react";
import {Redirect} from "react-router-native";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class LoginScreen extends Component {

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/'}};
        const redirectToReferrer = this.props.auth.authenticated;

        if (redirectToReferrer) {
            debugger;
            return (
                <Redirect to={from}/>
            )
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Авторизуйтесь в приложении</Text>
                <Text style={styles.body}>
                    Асти
                </Text>
                <View style={styles.autProvidersContainer}>
                    <View style={styles.authProvider}>
                        <Icon.Button name="facebook"
                                     backgroundColor="#3b5998"
                                     onPress={this.authThroughFacebook}
                        >
                            Авторизоваться через Facebook
                        </Icon.Button>
                    </View>

                    <View style={styles.authProvider}>
                        <Icon.Button name="google"
                                     backgroundColor="#3b5998"
                                     onPress={this.authThroughGoogle}
                        >
                            Авторизоваться через Google
                        </Icon.Button>
                    </View>
                </View>

                <TouchableHighlight style={styles.button} onPress={this.explore}>
                    <Text style={styles.exploreButton}>
                        Мне только посмотреть
                    </Text>
                </TouchableHighlight>


                <View style={styles.space}/>
                <Text style={styles.userAgreement}>
                    При входе или регистрации вы
                    подтверждаете свое согласие с условиями
                    пользовательского соглашения
                </Text>
            </View>
        )
    }

    authThroughGoogle = () => {
        debugger;
        this.props.authenticateThroughGoogle();
    };

    authThroughFacebook = () => {
        this.props.authenticateThroughFacebook();
    };

    explore = () => {
        this.props.authenticate();
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    logo: {
        width: 112,
        height: 112,
        marginTop: 48,
        marginBottom: 36,
    },
    title: {
        textAlign: 'center'
    },
    body: {
        textAlign: 'center',
        marginBottom: 8
    },
    space: {
        flex: 1,
    },
    userAgreement: {
        fontSize: 10,
        textAlign: 'center'
    },
    autProvidersContainer: {
        marginTop: 16,
        marginBottom: 16,
    },
    authProvider: {
        marginTop: 8,
    },
    exploreButton: {
        fontSize: 20,
        color: "#3b5998"
    },
});

export default LoginScreen;