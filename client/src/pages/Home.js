import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { logout } from "../utils/index";

const Home = () => {
  let history = useHistory();
  // logout method
  const logoutUser = (e) => {
    e.preventDefault();
    logout();
    history.push("/signin");
  };
  return (
    <>
      <p>Home Page</p>
      <Button color="danger" onClick={logoutUser}>
        Logout
      </Button>
    </>
  );
};
export default Home;
