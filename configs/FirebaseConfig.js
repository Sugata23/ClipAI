// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "oddmind-test-suite.firebaseapp.com",
    projectId: "oddmind-test-suite",
    storageBucket: "oddmind-test-suite.appspot.com",
    messagingSenderId: "243415992189",
    appId: "1:243415992189:web:6956496bd9294dbe3c6e14",
    measurementId: "G-G0RHFTBBXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);