import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBueWU4tsKsT2pxvWYSkblJUBhI0cksqNU",
    authDomain: "notes-app-afcb4.firebaseapp.com",
    databaseURL: "https://notes-app-afcb4.firebaseio.com",
    projectId: "notes-app-afcb4",
    storageBucket: "notes-app-afcb4.appspot.com",
    messagingSenderId: "218040939865"
};

firebase.initializeApp(config);

export const db = firebase.database();
export default firebase;
