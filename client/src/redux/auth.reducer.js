import { actionTypes } from "./actions/action.types";

const initialState = {
  user: {
    name: "",
    email: "",
    jwt: "",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        user: {
          //name: action.payload.name,
          //email: localStorage.key("email") && localStorage.getItem("email"),
          //jwt: action.payload.jwt,
        },
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          jwt: action.payload.jwt,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
