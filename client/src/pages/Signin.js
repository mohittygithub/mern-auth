import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions/auth.actions";

const Signin = (props) => {
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.authReducer.jwt);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);

    dispatch(login(loginData.email, loginData.password));

    console.log("response = ", jwt);
  };
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2>Sign in to your account!</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        {/* <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => handleChange(e)}
        /> */}
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
        {/* Don't have an account? <Link to="/signup">Create Account</Link> */}
      </h6>
    </>
  );
};

export default Signin;
