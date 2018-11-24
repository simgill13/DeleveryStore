import React,{ Component }                from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'
  import 'styles/row.scss'
 



class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'row'
    }
  }

    componentDidMount(){   
    }


    render() {
      return (
          <div className="row">  
           second test       
          </div>  
      );
    }
  }







export default Row;
