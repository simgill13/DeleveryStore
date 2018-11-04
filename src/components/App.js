import React,{ Component }                from "react";
import {connect}                          from "react-redux";
import Main                         from './Main'
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
  import Button from '@material-ui/core/Button';
  





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
  
            
            

    <Main/>

            
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
