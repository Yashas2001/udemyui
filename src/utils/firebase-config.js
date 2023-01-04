// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARcMTqWgFxZW6F38dnsJAinei_fzuaJy8",
  authDomain: "react-netflix-udemy-clone.firebaseapp.com",
  projectId: "react-netflix-udemy-clone",
  storageBucket: "react-netflix-udemy-clone.appspot.com",
  messagingSenderId: "406260960955",
  appId: "1:406260960955:web:bbdc43197aa146d249a39e",
  measurementId: "G-SGQ8Z6Z4TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app);