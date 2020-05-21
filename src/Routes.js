import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/Sign/SignIn";
import SignUp from "./pages/Sign/SignUp";
import Main from "./pages/Main/Main";
import './styles/common.scss';
import './styles/reset.scss';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
