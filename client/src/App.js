import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import PrivateRoute from "./components/private.route";

const App = () => {
  return (
    <>
      <h1>App Page</h1>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route component={() => "NOT FOUND"} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
