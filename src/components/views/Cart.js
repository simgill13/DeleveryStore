import React, { Component, Fragment, createRef } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import Loading from "components/animations/loading";
// import "styles/cart.scss";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animComplete: false
    };
  }
  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <div style={{ backgroundColor: "white" }}> Cart component </div>
      </Fragment>
    );
  }
}

export default Cart;
