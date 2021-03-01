import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions/auth.actions";
import signin from "../components/signin.component";

const Signin = (props) => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");

  // handlesubmit method
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    const response = await signin(loginData.email, loginData.password);
    // console.log("response = ", response);
    setToken(response.data.jwt);
    localStorage.setItem("jwt", token);
    dispatch(login(token));
  };

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
        <button type="submit">Sign in</button>
      </form>
      <br />
      <h6>
        Don't have an account? <Link to="/signup">Create Account</Link>
      </h6>
    </>
  );
};

export default Signin;
