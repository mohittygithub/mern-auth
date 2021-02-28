import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/actions/auth.actions";

const Signup = (props) => {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const response = useSelector((state) => state.authReducer.error);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords did not match");
    } else {
      const { name, email, password } = signupData;
      dispatch(signup(name, email, password));
    }
    console.log(response);
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
        {/* Don't have an account? <Link to="/signup">Create Account</Link> */}
      </h6>
    </>
  );
};

export default Signup;
