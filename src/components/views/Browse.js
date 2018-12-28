import React, { Component, Fragment, createRef } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Loading from "components/animations/loading";
import "styles/browse.scss";
import "styles/browseMobile.scss";

class Browse extends Component {
  constructor(props) {
    super(props);
    this.browseContainer = createRef();
    this.sidenav = createRef();
    this.blogo = "https://res.cloudinary.com/sds-images/image/upload/v1545964675/bw_lbrrbw.png";
    this.state = {
      name: "browse",
      animComplete: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.disableAnimation();
      setTimeout(() => {
        this.sidenav.current.style.backgroundColor = "#3b3b3b";
        this.browseContainer.current.style.backgroundColor = "#f6f7ff";
      }, 200);
    }, 3000);
  }
  componentWillUnmount() {}

  disableAnimation = () => {
    this.setState({ animComplete: true });
  };

  animation = () => {
    const { animComplete } = this.state;
    if (!animComplete) {
      return (
        <Fragment>
          <Loading />
        </Fragment>
      );
    } else {
      <Fragment />;
    }
  };

  browse = () => {
    const { animComplete } = this.state;
    if (animComplete) {
      return (
        <Fragment>
          <div className="browse-container">
            <div id="container">
              <div ref={this.sidenav} className="side-nav-container">
                <div className="side-nav-top">
                  <img className="nav-logo animated fadeIn" src={this.blogo} />{" "}
                </div>
                <div className="side-nav-middle"> </div>
                <div className="side-nav-bottom"> </div>
              </div>
              <div ref={this.browseContainer} className={animComplete ? "main-browse-container-tran" : "main-browse-container"}>
                <div />
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return <Fragment> </Fragment>;
    }
  };

  render() {
    return (
      <Fragment>
        {this.browse()}
        {this.animation()}
      </Fragment>
    );
  }
}

export default Browse;
