import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar">
      <div className="container-fluid navbar-main_div">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto navbar-routes_list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Chart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/network"
                className="nav-link"
              >
                Network
              </NavLink>
            </li>
            {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </li> */}
          </ul>
          {/* <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
