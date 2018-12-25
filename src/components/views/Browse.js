import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import "styles/row.scss";

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "row"
    };
  }

  componentDidMount() {
    console.log("this.props", this.props);
  }

  render() {
    return <div className="row">Broswse Component</div>;
  }
}

export default Browse;
