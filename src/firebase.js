import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAJwrSa65KKH_wXbOf9DE1jeXN6oQHIGVU",
    authDomain: "facebook-messenger-clone-3a5ec.firebaseapp.com",
    projectId: "facebook-messenger-clone-3a5ec",
    storageBucket: "facebook-messenger-clone-3a5ec.appspot.com",
    messagingSenderId: "250525522108",
    appId: "1:250525522108:web:41448ea9daec38186c98b9",
    measurementId: "G-PSEEBYDQWN"
});

const db = firebaseApp.firestore();

export default db;