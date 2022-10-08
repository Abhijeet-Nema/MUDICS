import React from "react";
import logo from "../assests/logo.png"

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ background: "#0B3954", color: "#F7F0F0" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="auto"
              height="30"
              className="d-inline-block align-text-top mx-3"
            />
            MUDICS
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Happy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Party
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Romance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sad
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dance
                    </a>
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
