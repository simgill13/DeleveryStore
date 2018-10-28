import React,{ Component }               from "react";
import {connect}            from "react-redux";
import Second from './Second'
import Header from './Header'
import '../main.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'





class App extends Component {
    render() {
      return (
       
          <div className="App">
  
            <div  id='sim' className="sim">
              hello
            </div>
            <div  className="second">
              second
            </div>
          </div>
        
      );
    }
  }







const mapStateToProps = (state) => {
  return {
    firstReducer:state.firstReducer,
    secondReducer:state.secondReducer
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
