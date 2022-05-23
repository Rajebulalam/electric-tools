// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADrNZkVSHi4IK4_UBBZSg8U130X_d6qrE",
    authDomain: "electric-tools-4d28a.firebaseapp.com",
    projectId: "electric-tools-4d28a",
    storageBucket: "electric-tools-4d28a.appspot.com",
    messagingSenderId: "540951808774",
    appId: "1:540951808774:web:0059b01e1cd43beef9ec87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;