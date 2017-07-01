import {AUTHENTICATED, AUTHENTICATION_FAILED, SIGN_OUT} from "../constants/actionTypes";
import fire from "./../fire";
var firebase = require("firebase/app");
var {FBLoginManager} = require('react-native-facebook-login');

export function authenticate() {
    return (dispatch) => {
        dispatch(handleAuthenticated());
    }
}

export function authenticateThroughGoogle(history) {
    return (dispatch) => {
        debugger;
        let provider = new firebase.auth.GoogleAuthProvider();
        authenticateThroughProvider(dispatch, provider);
    }
}

export function authenticateThroughFacebook() {
    return (dispatch) => {
        FBLoginManager.setLoginBehavior(FBLoginManager.LoginBehaviors.Web); // defaults to Native

        FBLoginManager.loginWithPermissions(["email", "user_friends"], function (error, data) {
            debugger;
            if (!error) {
                debugger;
                const credential = firebase.auth.FacebookAuthProvider.credential(data.credentials.token);

                firebase
                    .auth()
                    .signInWithCredential(credential)
                    .then((user) => {
                        debugger;
                        alert('Account accepted');
                        dispatch(handleAuthenticated(user.uid));
                    })
                    .catch((error) => alert('Account disabled'));
                console.log("Login data: ", data);
            } else {
                debugger;
                console.log("Error: ", error);
            }
        });

        // authenticateThroughProvider(dispatch, provider);
    }
}

function authenticateThroughProvider(dispatch, provider) {
    debugger;
    firebase.auth().signInWithPopup(provider).then(function (result) {
        debugger;
        if (result.credential) {
            let firebaseUserUid = result.user.uid;
            console.log('FirebaseUserUid: ' + firebaseUserUid);

            let userCustomersRef = fire.database()
                .ref('user_customers')
                .child(firebaseUserUid);

            let customerId;
            userCustomersRef.on('value', snapshot => {
                if (snapshot.exists()) {
                    customerId = snapshot.val();
                } else {
                    customerId = createCustomerInfo(firebaseUserUid);
                }
                console.log('CustomerId: ' + customerId);
                dispatch(handleAuthenticated(customerId));
            });
        } else {
            dispatch(handleAuthenticationFailed('Absent credentials'));
        }
    }).catch(function (error) {
        let errorMessage = error.message;
        dispatch(handleAuthenticationFailed(errorMessage));
    });
}

function createCustomerInfo(firebaseUserUid) {
    let customer = {
        hasAccount: true
    };

    var customerId = fire.database().ref('customers').push().key;

    firebase.database().ref('customers').child(customerId).set(customer);
    firebase.database().ref('user_customers').child(firebaseUserUid).set(customerId);

    return customerId;
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

