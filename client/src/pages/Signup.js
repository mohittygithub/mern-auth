import React, { useState } from "react";
import { Link } from "react-router-dom";
import signup from "../components/signup.component";

const Signup = (props) => {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords did not match");
    }

    const response = await signup(signupData);
    console.log("response = ", response.data.message);
  };

  return (
    <>
      <h2>Sign Up Page</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => handleChange(e)}
        />
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          required
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Sign in</button>
      </form>
      <br />
      <h6>
        Don't have an account? <Link to="/signin">Create Account</Link>
      </h6>
    </>
  );
};

export default Signup;
