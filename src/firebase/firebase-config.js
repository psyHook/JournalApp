import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQaB7roivlW5s96oEkj9P2uH4P9jeQpYQ",
  authDomain: "journalapp-ca246.firebaseapp.com",
  databaseURL: "https://journalapp-ca246.firebaseio.com",
  projectId: "journalapp-ca246",
  storageBucket: "journalapp-ca246.appspot.com",
  messagingSenderId: "157502257109",
  appId: "1:157502257109:web:437de3e89ab1c4dffdaf5c",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
