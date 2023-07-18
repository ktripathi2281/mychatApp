// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjswtJrNe9k9fwVmbTT2CJpG73LWcgfuw",
  authDomain: "chat-app-7b930.firebaseapp.com",
  projectId: "chat-app-7b930",
  storageBucket: "chat-app-7b930.appspot.com",
  messagingSenderId: "314274797704",
  appId: "1:314274797704:web:dfd37c89b3ec58192ee73d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);