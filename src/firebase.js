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
var googleProvider = new firebase.auth.GoogleAuthProvider();
var facebookProvider = new firebase.auth.FacebookAuthProvider();

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(function() {
      // Sign-out successful.
    })
    .catch(function(error) {
      // An error happened.
    });
};

export const logIn = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
};

export const signInGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  // firebase.auth();
  // firebase.auth().signInWithRedirect(provider);

  // .then(function(result) {
  //   if (result.credential) {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     var token = result.credential.accessToken;
  //     // ...
  //   }
  //   // The signed-in user info.
  //   var user = result.user;
  //   debugger;
  // })
  // .catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // The email of the user's account used.
  //   var email = error.email;
  //   // The firebase.auth.AuthCredential type that was used.
  //   var credential = error.credential;
  //   debugger;
  //   // ...
  // });
};

export const singInFacebook = facebookProvider => {
  firebase
    .auth()
    .signInWithPopup(facebookProvider)
    .then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};
export const auth = firebase.auth();
