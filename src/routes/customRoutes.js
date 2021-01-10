
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import Login from "../containers/Login";
import Feature from "../containers/features";
import FeatureList from "../containers/featureList";






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
          component={Feature}
        ></Route>
        <Route
          exact
          path="/users/:user"
          component={FeatureList}
        ></Route>
      
      </Switch>
    );
  }
}


export default CustomRoutes;
