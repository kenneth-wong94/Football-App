import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="flex-grow-1">
          <Link className="navbar-brand" to="/">
            ⚽ Football App
          </Link>
        </div>

        <div
          className="flex-grow-1 d-flex justify-content-center"
          style={{ marginLeft: "-120px" }}
        >
          <ul className="navbar-nav flex-row gap-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/matches">
                Matches
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/live">
                Live
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/scorers">
                Scorers
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-grow-1"></div>
      </div>
    </nav>
  );
};

export default Navbar;
