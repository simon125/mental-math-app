const initialState = {
  isLoggedIn: false,
  user: null,
  isValid: false,
  message: ""
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    case "CREATING_ACCOUNT_STATUS":
      return {
        ...state,
        isValid: action.payload.isValid,
        message: action.payload.message
      };
    default:
      return state;
  }
};
