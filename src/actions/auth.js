import {
    AUTHENTICATED,
    AUTHENTICATION_FAILED,
    SIGN_OUT,
} from '../constants/actionTypes'
// import fire from './../../fire';
// var firebase = require("firebase/app");

// export function authenticate() {
//     return (dispatch) => {
//         dispatch(handleAuthenticated());
//     }
// }
//
// export function authenticateAnonymousUser(history) {
//     return (dispatch, getState) => {
//         dispatch(handleSignOut());
//         history.push(`/company/${getState().company.data.id}`);
//     }
// }
//
// export function authenticateThroughGoogle(history) {
//     return (dispatch) => {
//         let provider = new firebase.auth.GoogleAuthProvider();
//         authenticateThroughProvider(dispatch, provider);
//     }
// }
//
// export function authenticateThroughFacebook() {
//     return (dispatch) => {
//         let provider = new firebase.auth.FacebookAuthProvider();
//         authenticateThroughProvider(dispatch, provider);
//     }
// }
//
// function authenticateThroughProvider(dispatch, provider) {
//     debugger;
//     firebase.auth().signInWithPopup(provider).then(function (result) {
//         debugger;
//         if (result.credential) {
//             let firebaseUserUid = result.user.uid;
//             console.log('FirebaseUserUid: ' + firebaseUserUid);
//
//             let userCustomersRef = fire.database()
//                 .ref('user_customers')
//                 .child(firebaseUserUid);
//
//             let customerId;
//             userCustomersRef.on('value', snapshot => {
//                 if (snapshot.exists()) {
//                     customerId = snapshot.val();
//                 } else {
//                     customerId = createCustomerInfo(firebaseUserUid);
//                 }
//                 console.log('CustomerId: ' + customerId);
//                 dispatch(handleAuthenticated(customerId));
//             });
//         } else {
//             dispatch(handleAuthenticationFailed('Absent credentials'));
//         }
//     }).catch(function (error) {
//         let errorMessage = error.message;
//         dispatch(handleAuthenticationFailed(errorMessage));
//     });
// }
//
// function createCustomerInfo(firebaseUserUid) {
//     let customer = {
//         hasAccount: true
//     };
//
//     var customerId = fire.database().ref('customers').push().key;
//
//     firebase.database().ref('customers').child(customerId).set(customer);
//     firebase.database().ref('user_customers').child(firebaseUserUid).set(customerId);
//
//     return customerId;
// }
//
// export function signOut(history) {
//     return (dispatch, getState) => {
//         firebase.auth().signOut().then(function () {
//             dispatch(handleSignOut());
//             history.push(`/company/${getState().company.data.id}`);
//         }).catch(function (error) {
//             // An error happened.
//         });
//     }
// }

function handleAuthenticated(customerId) {
    return {type: AUTHENTICATED, customerId}
}

function handleAuthenticationFailed(error) {
    return {type: AUTHENTICATION_FAILED, error}
}

function handleSignOut() {
    return {type: SIGN_OUT,}
}

