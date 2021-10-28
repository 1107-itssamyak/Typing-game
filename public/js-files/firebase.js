// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3XqYoMTpqdJzhoiGoOBNONShETmcQkds",
    authDomain: "typing-game-1.firebaseapp.com",
    projectId: "typing-game-1",
    storageBucket: "typing-game-1.appspot.com",
    messagingSenderId: "830250800316",
    appId: "1:830250800316:web:15b224bfcabe46272f6cb9",
    measurementId: "G-9BFR63RPCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;