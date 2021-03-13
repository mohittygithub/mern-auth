import axios from "axios";

const signin = async (email, password) => {
  const data = { email, password };
  const uri = `${process.env.REACT_APP_NODE_SERVER_URI}`;
  console.log("uri", uri);
  try {
    const response = await axios.post(`${uri}/user/signin`, data);

    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error.message);
  }
};
export default signin;
