import React, { Component } from "react";

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { onSignOutClick } from '../../actions';

import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {

  logout=()=>{  
    console.log("Reached In Logout")
    localStorage.setItem("isLoggedIn",false);
    localStorage.removeItem("access_token");
    localStorage.setItem("userId",null);
    this.props.onSignOutClick();

}
  renderCreate(){
    if(localStorage.getItem("isLoggedIn")){
      return  (
          <Link to = "/create" className = "ui blue basic button" replace>
            Create Campaign
          </Link>
      )
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
          {/* <NavItem eventKey={1} href="#">
            Account
          </NavItem> */}
          {/* <NavDropdown
            eventKey={2}
            title="Dropdown"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1}>Action</MenuItem>
            <MenuItem eventKey={2.2}>Another action</MenuItem>
            <MenuItem eventKey={2.3}>Something</MenuItem>
            <MenuItem eventKey={2.4}>Another action</MenuItem>
            <MenuItem eventKey={2.5}>Something</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5}>Separated link</MenuItem>
          </NavDropdown> */}
          <NavItem eventKey={3} href="#" onClick = {()=>this.logout()}>
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default connect(null,{onSignOutClick:onSignOutClick})(AdminNavbarLinks);
