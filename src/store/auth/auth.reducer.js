import { TYPES } from "./auth.type";

const initState = {
  isLogged: null,
};

const authReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.FIREBASE_AUTH_STATUS:
      return {
        ...state,
        isLogged: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
