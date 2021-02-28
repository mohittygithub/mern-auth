import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <p>Home Page</p>
      <Link to="/signin">Sign In</Link>
      <br />
      <Link to="/signup">Sign Up</Link>
    </>
  );
};
export default Home;
