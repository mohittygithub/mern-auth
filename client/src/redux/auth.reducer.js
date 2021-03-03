import { actionTypes } from "./actions/action.types";

const initialState = {
  name: "",
  email: "",
  jwt: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        jwt: action.payload.jwt,
        name: action.payload.name,
        email: action.payload.email,
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
