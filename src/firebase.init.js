// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpOK69Sao2X-Ho5QcxSWOOuKSU4bA8Fg8",
  authDomain: "ema-john-simple-with-aut-4e508.firebaseapp.com",
  projectId: "ema-john-simple-with-aut-4e508",
  storageBucket: "ema-john-simple-with-aut-4e508.appspot.com",
  messagingSenderId: "430851420732",
  appId: "1:430851420732:web:7c9df03076e3de0cdc0939"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;