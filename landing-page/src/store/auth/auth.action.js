import { getAuth, onAuthStateChanged } from "firebase/auth";
import { TYPES } from "./auth.type";

// -------------------------- Snapshot --------------------------
const authSub = [];
export const snapAuth = () => (dispatch) => {
  const auth = getAuth();
  const unSub = onAuthStateChanged(auth, () => {
    const isLogged = getAuth()?.currentUser?.uid ? true : false;
    firebaseAuthSuccess(dispatch, isLogged);
  });
  authSub.push(unSub);
};

export const unSnapAuth = () => (dispatch) => {
  authSub.forEach((subscriber) => {
    subscriber();
  });
  authSub.length = 0;
};

// -------------------------- Dispatch --------------------------
const firebaseAuthSuccess = (dispatch, data) => {
  dispatch({
    type: TYPES.FIREBASE_AUTH_STATUS,
    payload: data,
  });
};
