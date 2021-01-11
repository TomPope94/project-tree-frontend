import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "actions/types";
import { Auth } from "aws-amplify";

export const registerUser = (email, password) => async (dispatch) => {
  try {
    await Auth.signUp({
      username: email,
      password: password,
    });

    dispatch({
      type: REGISTER_SUCCESS,
    });
  } catch (err) {
    const errors = err.message; // this will be changed for an error message in app/redux
    console.error(errors);
  }
};

export const verifyEmail = (email, code, password) => async (dispatch) => {
  try {
    await Auth.confirmSignUp(email, code);

    await dispatch(login(email, password));
  } catch (err) {
    console.error(err);
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    await Auth.signIn(email, password);
    dispatch({
      type: LOGIN_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await Auth.signOut({ global: true });

    dispatch({ type: LOGOUT });
  } catch (err) {
    console.error(err.message);
  }
};
