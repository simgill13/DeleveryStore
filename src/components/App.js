import React,{ Component }                from "react";
import {connect}                          from "react-redux";
import Second                             from './Second'
import Header                             from './Header'
import { userName }                       from '../actions/action';
import '../main.css'
import '../styles/app.scss'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'react'
    }
  }

  componentDidMount(){
    this.props.changeName('SIMMMMMMMM')
  }
    render() {
      console.log('props',this.props)
     
      return (
       
          <div className="App">
  
            <div  id='sim' className="sim">
              {this.state.name}
            </div>
            <div  className="second">
              second
            </div>
            <div  className="third">
              third
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
        changeName: (name) => {
            dispatch(userName(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
