import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDHBPenvPDWT-jvMjWS3CXn6UtqQM8Sjwk",
    authDomain: "hangsme.firebaseapp.com",
    databaseURL: "https://hangsme.firebaseio.com",
    projectId: "hangsme",
    storageBucket: "hangsme.appspot.com",
    messagingSenderId: "44611105339"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;