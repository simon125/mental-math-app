const initialState = { isLoggedIn: false, user: null };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        isLoggedIn: true,
        user: action.payload
      };
    case "LOG_OUT":
      return {
        isLoggedIn: false,
        user: null
      };
    default:
      return state;
  }
};
