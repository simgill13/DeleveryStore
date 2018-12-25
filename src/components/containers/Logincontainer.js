import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as action from "actions/action";
import Login from "components/views/Login";

const mapStateToProps = state => {
  return {
    main: state.main,
    secondReducer: state.secondReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (userobj, history) => {
      dispatch(action.createUser(userobj, history));
    },
    login: (userobj, history) => {
      dispatch(action.userLogin(userobj, history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
