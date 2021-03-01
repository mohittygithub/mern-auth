import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const Home = () => {
  let history = useHistory();
  // logout method
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push("/signin");
  };
  return (
    <>
      <p>Home Page</p>
      <Button color="danger" onClick={logout}>
        Logout
      </Button>
    </>
  );
};
export default Home;
