import React, { Component, Fragment, createRef } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect, NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import Loading from "components/animations/loading";
import "styles/browse.scss";
import "styles/browseMobile.scss";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.sidenav = createRef();
    this.sidenavInner = createRef();
    this.blogo = "https://res.cloudinary.com/sds-images/image/upload/v1545964675/bw_lbrrbw.png";
    this.state = {
      animComplete: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.sidenav.current.style.backgroundColor = "#3b3b3b";
      this.sidenavInner.current.style.boxShadow = "10px 10px 5px #dedede";
    }, 200);
  }

  render() {
    console.log("props", this.props);
    const { match } = this.props;
    return (
      <Fragment>
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
                  to={`${match.url}/main`}
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
      </Fragment>
    );
  }
}

export default SideNav;
