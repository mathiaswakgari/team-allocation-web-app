import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <li className="nav-item nav-link">
          <NavLink className="navbar-brand" to="/employees">
            Home
          </NavLink>
        </li>
        <li className="nav-item nav-link">
          <NavLink className="navbar-brand" to="/about">
            About
          </NavLink>
        </li>
      </nav>
    );
  }
}

export default Header;
