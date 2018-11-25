import {render}                                     from "react-dom";
import React                                        from "react";
import {Provider}                                   from "react-redux";
import App                                          from "components/containers/Appcontainer";
import Row                                          from "components/views/Row";
import store                                        from "store";
// import 'semantic-ui-css/semantic.min.css'; 
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'

  

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/row" component={Row} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
  );


  
 