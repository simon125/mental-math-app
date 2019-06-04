import firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCqKz8DbLPnseI0Fa90KxYR1paLTFNMGTQ",
  authDomain: "kawalerski-gzika.firebaseapp.com",
  databaseURL: "https://kawalerski-gzika.firebaseio.com",
  projectId: "kawalerski-gzika",
  storageBucket: "kawalerski-gzika.appspot.com",
  messagingSenderId: "453608932794",
  appId: "1:453608932794:web:b07fefbd4bbd8e84"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
