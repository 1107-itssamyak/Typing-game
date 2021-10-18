// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBR8dFJEFP7HpS3ebTsZ4hO3HoFr2xSmvc",
    authDomain: "typing-game-a1.firebaseapp.com",
    projectId: "typing-game-a1",
    storageBucket: "typing-game-a1.appspot.com",
    messagingSenderId: "175761880903",
    appId: "1:175761880903:web:ed9badcc99e72ea0063e62",
    measurementId: "G-WW8SKMYWGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;