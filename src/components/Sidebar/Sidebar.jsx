import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import altImg from '../../assets/img/default-avatar.png';

import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.jsx";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  renderData(prop,key,backColor) {
    return (
      <li style={{ background: `${backColor}` }} key={key}>
        <NavLink
          to={prop.layout + prop.path}
          className="nav-link"
          activeClassName="active"
        >
          <i className={prop.icon} />
          <p>{prop.name}</p>
        </NavLink>
      </li>
    )
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
          {!this.props.hasImage ? (
            <div className="sidebar-background" style={sidebarBackground} />
          ) : (
            null
          )}
        <div className="logo">
          <a
            href=""
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img alt="" src = {altImg} />
            </div>
          </a>
          <div
            className="simple-text logo-normal" style = {{textAlign:'center'}}
          >
            {`${localStorage.getItem("first_name")}`}
          </div>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 915 ? <AdminNavbarLinks /> : null}
            {this.props.routes.map((prop, key) => {
              debugger;
              if (!prop.redirect)
              if(window.location.pathname === `\/${prop.path}`){
                return (
                  this.renderData(prop,key,"#766969")
                );
                }else{
                  return (
                    this.renderData(prop,key,"none")
                  );
                }

              return null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
