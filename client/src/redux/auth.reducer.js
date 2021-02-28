import { actionTypes } from "./actions/action.types";

const initialState = {
  jwt: "",
  data: [],
  message: "",
  success: false,
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        jwt: action.payload.jwt,
        message: action.payload.message,
        success: action.payload.success,
      };
    case actionTypes.SIGNIN_FAILURE:
      return {
        ...state,
        jwt: "",
        error: action.payload.message,
        success: false,
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        message: action.payload.message,
        success: action.payload.success,
      };
    case actionTypes.USER_EXISTS:
      return {
        ...state,
        jwt: "",
        error: "",
        message: action.payload.message,
        success: false,
      };
    case actionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload.message,
        success: false,
      };
    default:
      return state;
  }
};

export default authReducer;
