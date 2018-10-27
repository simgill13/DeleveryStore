import {render}                                     from "react-dom";
import React                                        from "react";
import {Provider}                                   from "react-redux";
import { BrowserRouter,Route, Switch } from "react-router-dom";

// import {Router, Route, IndexRoute}                  from "react-router";
// import {createBrowserHistory}                       from 'history';
import App                                          from "./components/App";
import Second                                          from "./components/Second";
import store                                        from "./store";

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route  path="/" component={App} />
                <Route path="/sim" component={Second} />
            </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  );