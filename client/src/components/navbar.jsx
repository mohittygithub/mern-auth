import React from "react";
import { useSelector } from "react-redux";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import { logout } from "../utils/index";

const Navbar = () => {
  const user = useSelector((state) => state.authReducer.user);
  console.log("user = ", user.name);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
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
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link to="/" className="nav-item nav-link">
              Features
            </Link>

            <Link to="/" className="navbar-text nav-link">
              {user.email}
            </Link>

            <Link
              to="/"
              className="navbar-text nav-link"
              onClick={() => logout()}
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
