import { types } from "../../../../types/types";

/**
 * @param {string} email
 * @param {string} password
 */
export const loginWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "Allenz"));
    }, 3500);
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
