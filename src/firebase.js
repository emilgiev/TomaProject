import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNBAxjeKNoAPPjBV0JW4vZ0QaTaOx9-L4",
    authDomain: "tomaproject-6b82b.firebaseapp.com",
    projectId: "tomaproject-6b82b",
    storageBucket: "tomaproject-6b82b.appspot.com",
    messagingSenderId: "1041229848485",
    appId: "1:1041229848485:web:3678c821ef1bd3a9bad24c"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db , firebase};



