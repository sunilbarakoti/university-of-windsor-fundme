/*!

 =========================================================
 * Light Bootstrap Dashboard React - v1.3.0
 * Based on Light Bootstrap Dashboard - v1.3.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard-react
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { onSignOutClick } from "../../actions";

import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import pdf from "../../assets/uWinFundMe.pdf";

class AdminNavbarLinks extends Component {
  logout = () => {
    console.log("Reached In Logout");
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("access_token");
    localStorage.setItem("userId", null);
    this.props.onSignOutClick();
  };
  renderCreate() {
    if (localStorage.getItem("isLoggedIn")) {
      return (
        <Link to="/create" className="ui blue basic button" replace>
          Create Campaign
        </Link>
      );
    }
  }

  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            {this.renderCreate()}
          </NavItem>
          <NavItem eventKey={3} href={pdf} target="_blank">
            <div style={{ height: "25px" }}>
              <i
                className="info circle icon"
                style={{ fontSize: "23px", marginTop: "2.5px" }}
              />
            </div>
          </NavItem>
          <NavItem eventKey={3} href="#" onClick={() => this.logout()}>
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default connect(null, { onSignOutClick: onSignOutClick })(
  AdminNavbarLinks
);
