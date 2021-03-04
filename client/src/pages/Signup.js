import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "reactstrap";
import "../styles/styles.css";

import signup from "../components/signup.component";
import { Label } from "reactstrap";

const Signup = (props) => {
  let history = useHistory();
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  // handleChange method
  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  // handleSubmit method
  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (signupData.password !== signupData.confirmPassword) {
    //   setError("Passwords did not match");
    //   return false;
    // }
    const response = await signup(signupData);

    if (response.data.message) {
      setMessage(response.data.message);
      setVisible(true);
      setSignupData({ name: "", email: "", password: "", confirmPassword: "" });
    }

    if (response.data.error) {
      setError(response.data.error);
      setVisible(true);
    }

    //setSignupData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  // onDismiss method
  const onDismiss = () => {
    setVisible(false);
    setMessage("");
    setError("");
  };

  return (
    <div className="signup col-md-6 ">
      <div className="form-border row">
        <form onSubmit={(e) => handleSubmit(e)} className="col-md-8">
          <h2 className="heading">Sign Up</h2>
          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              className="form-control"
              value={signupData.name}
              placeholder="name"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <Label>Email</Label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={signupData.email}
              placeholder="email"
              autoComplete="on"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <Label>Password</Label>

            <input
              type="password"
              name="password"
              className="form-control"
              value={signupData.password}
              placeholder="password"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <Label>Confirm Password</Label>

            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={signupData.confirmPassword}
              placeholder="confirm password"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="mt-4">
            <button className="btn btn-primary col-md-4 " type="submit">
              Sign up
            </button>
            <span className="col-md-8 ">
              Have an account? <Link to="/signin">Sign in</Link>
            </span>
          </div>

          <div className="col-md-12">
            {error && (
              <Alert
                className="row alert"
                color="danger"
                isOpen={visible}
                toggle={onDismiss}
                fade={false}
              >
                {error}
              </Alert>
            )}
            {message && (
              <Alert
                className="alert"
                color="primary"
                isOpen={visible}
                toggle={onDismiss}
                fade={false}
              >
                {message}
              </Alert>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
