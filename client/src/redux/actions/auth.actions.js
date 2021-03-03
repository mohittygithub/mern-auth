import axios from "axios";
import { actionTypes } from "./action.types";

// login action
export const redux_login = (token, name, email) => async (dispatch) => {
  dispatch({
    type: actionTypes.SIGNIN_SUCCESS,
    payload: { token, name, email },
  });
};

// logout action
export const logout = () => async (dispatch) => {
  dispatch({
    type: actionTypes.LOGOUT_USER,
  });
};

/*signup action
export const signup = (name, email, password) => async (dispatch) => {
  const data = { name, email, password };

  try {
    const response = axios.post(
      `${process.env.REACT_APP_SERVER_URI}/user/signup`,
      data
    );

    dispatch({
      type: actionTypes.SIGNUP_SUCCESS,
      payload: response.data,
    });

    dispatch({
      type: actionTypes.USER_EXISTS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.SIGNUP_FAILURE,
      payload: error.message,
    });
  }
};*/
