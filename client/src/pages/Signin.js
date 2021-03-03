import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Alert, Toast, ToastBody, ToastHeader } from "reactstrap";
import "../styles/signup.styles.css";
import signin from "../components/signin.component";
import { login } from "../utils";

const Signin = (props) => {
  let history = useHistory();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  // handlesubmit method
  const handleSubmit = async (e) => {
    e.preventDefault();
    setVisible(false);
    setError("");

    const response = await signin(loginData.email, loginData.password);
    if (response.data.error) {
      setError(response.data.error);
      console.log(error);
      setVisible(true);
    }
    if (response.data.jwt) {
      setToken(response.data.jwt);
      setLoginData({ email: "", password: "" });
      history.push("/");
    }
  };

  // useEffect method to capture the value of token
  useEffect(() => {
    //console.log(token)
    login(token);
    // console.log(localStorage.getItem('jwt'))
  }, [token]);

  // handleChange method
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // onDismiss method for Alert
  const onDismiss = () => {
    setVisible(false);
    setError("");
  };

  return (
    <>
      <div className="signin col-md-6">
        <div className="form-border row">
          <form onSubmit={(e) => handleSubmit(e)} className="col-md-8">
            <h2 className="heading">Sign in</h2>
            <div className="alert col-md-8"></div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                value={loginData.email}
                className="form-control"
                autoComplete="on"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={loginData.password}
                placeholder="password"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>

            <button className="btn btn-primary col-md-4" type="submit">
              Sign in
            </button>
            <span className="col-md-8">
              No account? <Link to="/signup">Sign up</Link>
            </span>
          </form>
          <div>
            {error && (
              <Alert
                className="row col-md-8"
                color="danger"
                isOpen={visible}
                toggle={onDismiss}
                fade={false}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
