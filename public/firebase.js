// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbOTufkjTRf4YmO9pe6nIsTpFfxLswVAI",
    authDomain: "theproblemstore-91cac.firebaseapp.com",
    projectId: "theproblemstore-91cac",
    storageBucket: "theproblemstore-91cac.firebasestorage.app",
    messagingSenderId: "88476673227",
    appId: "1:88476673227:web:5b9a1294793d446219e74e",
    measurementId: "G-QF2C6S4DXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);