import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import CustomRoutes from './customRoutes'

const customHistory = createBrowserHistory({basename:"/#/"});
customHistory.listen(_ => {
  window.scrollTo(0, 0)  
})

// Routes For Navigation
const MyRoutes = () => (
  <Router history={customHistory}>
    <CustomRoutes/>
  </Router>
);

export default MyRoutes;