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
        jwt: action.payload,
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        jwt: "",
      };
    default:
      return state;
  }
};

export default authReducer;
