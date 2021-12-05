import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar">
      <div className="container-fluid navbar-main_div">
        <p className="navbar-brand">Analytics</p>
        <div className="navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto navbar-routes_list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Charts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/network" className="nav-link">
                Network Items
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
