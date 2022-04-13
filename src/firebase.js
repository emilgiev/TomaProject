import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNBAxjeKNoAPPjBV0JW4vZ0QaTaOx9-L4",
    authDomain: "tomaproject-6b82b.firebaseapp.com",
    projectId: "tomaproject-6b82b",
    storageBucket: "tomaproject-6b82b.appspot.com",
    messagingSenderId: "1041229848485",
    appId: "1:1041229848485:web:3678c821ef1bd3a9bad24c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
