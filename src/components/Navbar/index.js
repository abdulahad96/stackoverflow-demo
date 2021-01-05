import { connect } from "react-redux";
import React, { Component } from "react";

import { Images } from "../../theme";
import { SuccessHelper } from "../../helpers";
import { Link } from "react-router-dom";

import "./styles.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      routeName: "",
      showSidebar: false,
      showDropdownMenu: false,
    };
  }



  handleNavigation = (route) => {
    this.props.history.push(route);
  };



  renderLargeNavbar = () => {
    const { user } = this.state;
    return (
      <div
        id="large-navbar"
        className="d-flex align-items-center justify-content-between"
      >
        
        <span className="d-flex align-items-center">
          <span
            className="navbar-link"
            onClick={() => this.openInNewTab("https://1888ce7903.nxcli.net/")}
          >
            For Business
          </span>
          
            <button
              type="button"
              className="btn btn-light btn-sm"
              onClick={() => this.handleNavigation("/")}
            >
              Log Out
            </button>
        </span>
      </div>
    );
  };

  renderSmallNavbar = () => {
    const { showSidebar } = this.state;
    return (
      <div id="small-navbar">
        <div className="py-2 d-flex align-items-center justify-content-between">
          
        </div>
        <div className="px-2">
        </div>
      </div>
    );
  };

  render() {
    return (
      <div
        className="container-fluid fixed-top shadow px-3 py-2 mb-5"
        style={{
          backgroundColor: this.props.isBackgroundColor
            ? "#fff"
            : "transparent",
          transition: "background-color 300ms linear",
        }}
      >
        {this.renderLargeNavbar()}
        {this.renderSmallNavbar()}
      </div>
    );
  }
}


export default Navbar;
