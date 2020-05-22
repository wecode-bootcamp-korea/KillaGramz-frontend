import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn_HK from "./pages/Sign/SignIn_HK";
import SignUp_HK from "./pages/Sign/SignUp_HK";
import Main_HK from "./pages/Main_HK/Main_HK";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signin-hk" component={SignIn_HK} />
          <Route exact path="/signup-hk" component={SignUp_HK} />
          <Route exact path="/main-hk" component={Main_HK} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
