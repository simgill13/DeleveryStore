import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "actions/action";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import "styles/row.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userObj: null
    };
  }

  componentDidMount() {
    this.userRedirect();
  }

  userRedirect = () => {
    const { history } = this.props;
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.props.checktoken(user.token, history);
    } else {
      history.replace({
        pathname: "/login",
        state: { userObj: user }
      });
    }
  };

  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    main: state.main,
    secondReducer: state.secondReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checktoken: (jwtToken, history) => {
      dispatch(action.authCheck(jwtToken, history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
