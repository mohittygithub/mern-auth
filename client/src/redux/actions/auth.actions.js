import { actionTypes } from "./action.types";

// login action
export const redux_login = (name, email, jwt) => async (dispatch) => {
  dispatch({
    type: actionTypes.SIGNIN_SUCCESS,
    // payload: {
    //   name: localStorage.getItem("name"),
    //   email: localStorage.getItem("email"),
    //   jwt: localStorage.getItem("jwt"),
    // },
  });
};

// logout action
export const redux_logout = () => async (dispatch) => {
  dispatch({
    type: actionTypes.LOGOUT_USER,
    payload: {
      name: "",
      email: "",
      jwt: "",
    },
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
