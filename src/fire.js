import firebase from "firebase";

var config = {
    apiKey: "AIzaSyABDzdMcUu5_FV7gaE0jcUWDEk4NXUAzt8",
    authDomain: "asti-ab926.firebaseapp.com",
    databaseURL: "https://asti-ab926.firebaseio.com",
    projectId: "asti-ab926",
    storageBucket: "asti-ab926.appspot.com",
    messagingSenderId: "158421730104"
};
var fire = firebase.initializeApp(config);

export default fire;