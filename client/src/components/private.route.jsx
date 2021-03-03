import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../utils/index";
import Navbar from "./navbar";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <div>
            <Navbar />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};
export default PrivateRoute;
