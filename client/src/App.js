import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import PrivateRoute from "./components/private.route";
import PublicRoute from "./components/public.route";
import NewPost from "./pages/NewPost";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/new" component={NewPost} />
          <PublicRoute path="/signup" component={Signup} />
          <PublicRoute path="/signin" component={Signin} />
          <Route component={() => "NOT FOUND"} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
