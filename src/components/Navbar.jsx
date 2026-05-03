import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="flex-grow-1">
          <Link className="navbar-brand" to="/">
            ⚽ Premier League Hub
          </Link>
        </div>

        <div
          className="flex-grow-1 d-flex justify-content-center"
          style={{ marginRight: "200px" }}
        >
          <ul className="navbar-nav flex-row gap-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house-door me-2"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/matches">
                <i className="bi bi-calendar2-event me-2"></i>Upcoming Matches
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/matches/completed">
                <i className="bi bi-broadcast me-2"></i>Completed Matches
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favourites">
                <i className="bi bi-stars me-2"></i>Favourites
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
