import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import signin from "../components/signin.component";

const Signin = (props) => {
  let history = useHistory();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");

  // handlesubmit method
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signin(loginData.email, loginData.password);

    setToken(response.data.jwt);
    setLoginData({ email: "", password: "" });
    history.push("/");
  };

  // useEffect method to capture the value of token
  useEffect(() => {
    //console.log(token)
    localStorage.setItem("jwt", token);
    // console.log(localStorage.getItem('jwt'))
  }, [token]);

  // handleChange method
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Sign in to your account!</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          name="email"
          placeholder="email"
          autoComplete="on"
          required
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={(e) => handleChange(e)}
        />
        <Button color="primary" type="submit">
          Sign in
        </Button>
      </form>
      <br />

      <h4>
        Don't have an account? <Link to="/signup">Create Account</Link>
      </h4>
    </>
  );
};

export default Signin;
