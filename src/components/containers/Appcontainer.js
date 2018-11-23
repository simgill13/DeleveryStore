import React,{ Component ,Fragment}                from "react";
import {connect}                          from "react-redux";
import App from 'components/views/App'




const mapStateToProps = (state) => {
  return {
    firstReducer:state.firstReducer,
    secondReducer:state.secondReducer
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (name) => {
            dispatch(userName(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
