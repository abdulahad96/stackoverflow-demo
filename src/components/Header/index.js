import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Images } from "../../theme";

import { SuccessHelper, ErrorHelper } from "../../helpers";


import './style.css'

class Header extends Component {

  state = {
    showDropDown: false,
    access_token: '',
  }

  renderLogout = () => {
    // const { routeName } = this.state;
    return (
      <li
        className={"sidebar-inactive-list buttonColor"}
        onClick={() => this.handleLogout}
      >
        <span style={{ marginLeft: 12 }}>Log Out</span>
      </li>
    );
  };

  


  handleNavigation = (route) => {
    this.props.history.push(route);
  };

  handleLogout = () => {
    this.props.history.push("/");
    
  };

  render = () => {
    const { onSetSidebarOpen } = this.props
    const { showDropDown, user } = this.state
    if (!user) return null
    return (
      <div
        className="container-fluid d-flex justify-content-between align-items-center py-1"
        style={{
          backgroundColor: "#EBEBEB",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <div className="mr-3 d-flex align-items-center" onClick={() => this.setState({ showDropDown: !this.state.showDropDown })}>
          {/* <img src={Images.saloon_profile_icon} style={{ width: 35 }} /> */}
          <div className="mx-2">
            {/* <span className="saloon-user-name">{user.firstName + " " + user.lastName}</span>
            <span className="saloon-sub-name">{user.email}</span> */}
          </div>
          <div className="dropDown">
            {!!showDropDown && this.renderLogout()}
          </div>
        </div>
      </div>
    );
  };

}



export default Header;


