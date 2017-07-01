import {AUTHENTICATED, AUTHENTICATION_FAILED, SIGN_OUT} from "../constants/actionTypes";
import fire from "./../fire";
var firebase = require("firebase/app");
var {FBLoginManager} = require('react-native-facebook-login');
import {AsyncStorage} from 'react-native';

export function authenticate() {
    return (dispatch) => {
        dispatch(handleAuthenticated());
    }
}

export function authenticateThroughGoogle(history) {
    return (dispatch) => {
        let provider = new firebase.auth.GoogleAuthProvider();
        authenticateThroughProvider(dispatch, provider);
    }
}

export function authenticateThroughFacebook() {
    return (dispatch) => {
        FBLoginManager.setLoginBehavior(FBLoginManager.LoginBehaviors.Web); // defaults to Native

        FBLoginManager.loginWithPermissions(["email", "user_friends"], function (error, data) {
            if (!error) {

                const credential = firebase.auth.FacebookAuthProvider.credential(data.credentials.token);
                firebase.auth().signInWithCredential(credential)
                    .then((user) => {
                        dispatch(handleAuthenticated(user.uid));
                    })
                    .catch((error) => alert('Account disabled'));
            } else {
                console.log("Error: ", error);
            }
        });
    }
}

export function signOut(history) {
    return (dispatch) => {
        firebase.auth().signOut().then(function () {
            dispatch(handleSignOut());
            history.push(`/login`);
        }).catch(function (error) {
            // An error happened.
        });
    }
}

export function sighOutAnonymous() {
    return (dispatch) => {
        dispatch(handleSignOut());
    }
}

function handleAuthenticated(customerId) {
    return {type: AUTHENTICATED, customerId}
}

function handleAuthenticationFailed(error) {
    return {type: AUTHENTICATION_FAILED, error}
}

function handleSignOut() {
    return {type: SIGN_OUT,}
}

