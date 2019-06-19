import { auth } from "../firebase";
import { store } from "../store";

const CREATE_USER = "CREATE_USER";
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const CREATING_ACCOUNT_STATUS = "CREATING_ACCOUNT_STATUS";

export const createUser = (email, password) => dispatch => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({
        type: CREATING_ACCOUNT_STATUS,
        payload: {
          message: "You have created account successfully",
          isValid: true
        }
      });
    })
    .catch(function(error) {
      dispatch({
        type: CREATING_ACCOUNT_STATUS,
        payload: {
          message: error.message,
          isValid: false
        }
      });
    });
};

auth.onAuthStateChanged(function(user) {
  if (user) {
    const { displayName, email, uid } = user;
    store.dispatch({
      type: LOG_IN,
      payload: { displayName, email, uid }
    });
  } else {
    store.dispatch({
      type: LOG_OUT,
      payload: null
    });
  }
});

export const logIn = () => {};
export const logOut = () => {};
