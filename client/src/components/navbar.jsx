import React from "react";
//import { useDispatch, useSelector } from "react-redux";
import "../styles/styles.css";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../utils/index";
//import { redux_logout } from "../redux/actions/auth.actions";

const Navbar = () => {
  // const user = useSelector((state) => state.authReducer.user);
  // const dispatch = useDispatch();
  const history = useHistory();
  const name = localStorage.getItem("name");
  // const email = localStorage.getItem("email");

  const handleClick = () => {
    logout();
    // dispatch(redux_logout());
    localStorage.getItem("jwt") === null && history.push("/signin");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse container">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link to="/" className="nav-item nav-link">
              Features
            </Link>
            <div>
              <span className=" mr-3 navbar-text text-warning">
                <u>{name}</u>
              </span>

              <span
                className="navbar-text text-danger navbar-logout"
                onClick={handleClick}
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
