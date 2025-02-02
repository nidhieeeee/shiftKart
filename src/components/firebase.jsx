// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4DMBWvo4l6iQiYvEp_SfS2YIcqgvCZYM",
  authDomain: "shoppingapp-69763.firebaseapp.com",
  projectId: "shoppingapp-69763",
  storageBucket: "shoppingapp-69763.firebasestorage.app",
  messagingSenderId: "957974153304",
  appId: "1:957974153304:web:45ef2d629fa9785ada222d",
  measurementId: "G-V0QYMXDMXH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
