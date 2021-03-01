import React from "react";
import axios from "axios";

const signup = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URI}/user/signup`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};
export default signup;
