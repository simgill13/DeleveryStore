import React,{ Component }               from "react";
import {connect}            from "react-redux";
import Second from './Second'
import Header from './Header'
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
  
            <div className="container">
              <ul>
                <li><Link to="/hello">Hello</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>
                  <Link to="/books">Books</Link>
                </li>
              </ul>
              <hr/>
  
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
