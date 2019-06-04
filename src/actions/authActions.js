import { auth } from "../firebase";

const CREATE_USER = "CREATE_USER";
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

export const createUser = (email, password) => dispatch => {
  debugger;
  console.log(123);
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      debugger;
      dispatch({
        type: LOG_IN,
        payload: { isLoggedIn: true, user: { name: "simon" } }
      });
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
};

export const logIn = () => {};
export const logOut = () => {};
