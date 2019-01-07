import React, { Component, Fragment, createRef } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect, NavLink } from "react-router-dom";
import Loading from "components/animations/loading";
import Cart from "./Cart";
import "styles/browse.scss";
import "styles/browseMobile.scss";

class Browse extends Component {
  constructor(props) {
    super(props);
    this.browseContainer = createRef();
    this.sidenav = createRef();
    this.sidenavInner = createRef();
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
        this.sidenavInner.current.style.boxShadow = "10px 10px 5px #dedede";
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
    const { match } = this.props;
    if (animComplete) {
      return (
        <Fragment>
          <div className="browse-container">
            <div id="container">
              <div ref={this.sidenav} className="side-nav-container">
                <div ref={this.sidenavInner} className="inner-container-tran">
                  <div className="side-nav-top">
                    <img className="nav-logo animated fadeIn delay-1s" src={this.blogo} />
                  </div>
                  <div className="side-nav-middle ">
                    <div className="home-icon-container animated fadeIn delay-1s">
                      <NavLink
                        activeStyle={{
                          color: "white"
                        }}
                        to={`/browse/main`}
                      >
                        <i id="homeid" className=" f-home fa fa-home fa-lg grey " aria-hidden="true" />
                      </NavLink>
                    </div>
                    <div className="shop-icon-container animated fadeIn delay-1s">
                      <NavLink
                        activeStyle={{
                          color: "white"
                        }}
                        to={`${match.url}/cart`}
                      >
                        <i className=" ff-shop fa fa-shopping-basket" aria-hidden="true" />
                      </NavLink>
                    </div>
                    <div className="track-icon-container animated fadeIn delay-1s">
                      <NavLink
                        activeStyle={{
                          color: "white"
                        }}
                        to={`${match.url}/track`}
                      >
                        <i className=" f-track fa fa-car" aria-hidden="true" />
                      </NavLink>
                    </div>
                  </div>
                  <div className="side-nav-bottom">
                    <div className="bottom-icon-container animated fadeIn delay-1s">
                      <i className=" f-sms fa fa-comments-o" aria-hidden="true" />
                    </div>
                    <div className="bottom-icon-container animated fadeIn delay-1s ">
                      <i className=" f-tele fa fa-phone" aria-hidden="true" />
                    </div>
                    <div className="bottom-icon-container animated fadeIn delay-1s ">
                      <i className="fa fa-heart-o" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
              <div ref={this.browseContainer} className={animComplete ? "main-browse-container-tran" : "main-browse-container"}>
                <Route path={"/browse/main"} component={Cart} />
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
