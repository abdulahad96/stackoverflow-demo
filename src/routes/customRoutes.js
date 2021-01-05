
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import Login from "../containers/Login";






class CustomRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }


  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={Login}
        ></Route>
        <Route
          exact
          path="/features"
          component={Login}
        ></Route>
        <Route
          exact
          path="/ft"
          component={Login}
        ></Route>
      
      </Switch>
    );
  }
}


export default CustomRoutes;
