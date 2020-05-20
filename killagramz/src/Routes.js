import React, { Component } from "react";
import { BrowserRoutes as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/Sign/SignIn";
import SignUp from "./pages/Sign/SignUp";
import Main from "./pages/Main/Main";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
