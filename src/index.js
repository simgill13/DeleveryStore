import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import Login from "components/containers/Logincontainer";
import Browse from "components/views/Browse";
import App from "components/containers/App";
import store from "store";
import { singleAuthCheck } from "actions/auth";

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Login} />
        <Route
          path="/browse"
          render={props => {
            singleAuthCheck();
            return <Browse {...props} />;
          }}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("app")
);
