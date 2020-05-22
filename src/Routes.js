import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/Sign_JT/SignIn_JT";
import SignUp from "./pages/Sign_JT/SignUp_JT";
import Main from "./pages/Main_JT/Main_JT";
import './styles/common_JT.scss';
import './styles/reset_JT.scss';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signin-jt" component={SignIn} />
          <Route exact path="/signup-jt" component={SignUp} />
          <Route exact path="/main-jt" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
