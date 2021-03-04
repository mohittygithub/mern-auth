import { actionTypes } from "./actions/action.types";

const initialState = {
  user: {
    name: localStorage.getItem("name") ? localStorage.getItem("name") : "",
    email: localStorage.getItem("email") ? localStorage.getItem("email") : "",
    jwt: localStorage.getItem("jwt") ? localStorage.getItem("jwt") : "",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
