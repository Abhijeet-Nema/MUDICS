import React from "react";
import logo from "../assests/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ background: "#0B3954", color: "#F7F0F0" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="auto"
              height="30"
              className="d-inline-block align-text-top mx-3"
            />
            MUDICS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/happy">
                      Happy
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/party">
                      Party
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/romance">
                      Romance
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sad">
                      Sad
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/dance">
                      Dance
                    </Link>
                  </li>                 
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 px-4"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light px-3" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
