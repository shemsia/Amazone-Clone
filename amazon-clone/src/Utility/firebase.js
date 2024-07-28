import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZBPHBBOKXME7TFlObC5fU4mqm0YozU9s",
  authDomain: "clone-f086f.firebaseapp.com",
  projectId: "clone-f086f",
  storageBucket: "clone-f086f.appspot.com",
  messagingSenderId: "48641033270",
  appId: "1:48641033270:web:59eade98bbbfdd85cac497",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();