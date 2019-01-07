import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import Login from "components/containers/Logincontainer";
import Browse from "components/views/Browse";
import App from "components/containers/App";
import store from "store";
import { singleAuthCheck } from "actions/auth";

import { BrowserRouter as Router, Route, Link, Switch, Redirect, HashRouter } from "react-router-dom";

render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Login} />
        <Route path="/browse" component={Browse} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);
