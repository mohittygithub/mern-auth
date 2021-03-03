import React from "react";
import { useSelector } from "react-redux";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import { logout, isLogin } from "../utils/index";

const Navbar = () => {
  const user = useSelector((state) => state.authReducer.name);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
        <Link to="/" class="navbar-brand">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/" class="nav-item nav-link active">
              Home <span class="sr-only">(current)</span>
            </Link>
            <Link to="/" class="nav-item nav-link">
              Features
            </Link>

            <Link class="navbar-text nav-link">{user}</Link>

            <Link class="navbar-text nav-link" onClick={() => logout()}>
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
