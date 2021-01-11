import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import PrivateRoute from "components/routing/PrivateRoute";

import LoginPage from "pages/LoginPage";
import Dashboard from "pages/Dashboard";
import PageNotFound from "pages/PageNotFound";

import routes from "constants/routes";

import { Provider } from "react-redux";
import store from "store";

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path={routes.LOGIN} component={LoginPage} />
          <PrivateRoute exact path={routes.DASHBOARD} component={Dashboard} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
