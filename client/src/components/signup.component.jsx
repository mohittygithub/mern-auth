import axios from "axios";

const signup = async (data) => {
  const uri = `${process.env.REACT_APP_SERVER_URI}`;
  try {
    const response = await axios.post(`${uri}/user/signup`, data);
    return response;
  } catch (error) {
    return error;
  }
};
export default signup;
