import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "reactstrap";
import "../styles/styles.css";
import signin from "../components/signin.component";
import { login } from "../utils";
// import { redux_login } from "../redux/actions/auth.actions";

const Signin = (props) => {
  let history = useHistory();
  // const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [values, setValues] = useState({ name: "", email: "", jwt: "" });
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
      console.log(response.data);
      setValues({
        name: response.data.name,
        email: response.data.email,
        jwt: response.data.jwt,
      });
      console.log(("setValues = ", values));
      setLoginData({ email: "", password: "" });
      // dispatch(
      //   redux_login(response.data.jwt, response.data.name, response.data.email)
      // );
      history.push("/");
    }
  };

  // useEffect method to capture the value of token
  useEffect(() => {
    //console.log(token)
    login(values.name, values.email, values.jwt);
    // console.log(localStorage.getItem('jwt'))
  }, [values]);

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
            <div className="mt-4">
              <button className="btn btn-primary col-md-4" type="submit">
                Sign in
              </button>
              <span className="col-md-8">
                No account? <Link to="/signup">Sign up</Link>
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
