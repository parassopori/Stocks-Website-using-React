import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{
        backgroundColor: "white",
        height: "80px",
        position: "",
        zIndex: "10",
      }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            className="navbar-brand"
            src="media/images/logo.svg"
            style={{ width: "45%", marginLeft: "130px" }}
          />
        </Link>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ margin: "" }}
        >
          <ul className="navbar-nav" style={{ marginLeft: "400px" }}>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/about"
                style={{ marginLeft: "30px" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active"
                to="/product"
                style={{ marginLeft: "30px" }}
              >
                Products
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link active"
                to="/pricing"
                style={{ marginLeft: "30px" }}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link active"
                to="/support"
                style={{ marginLeft: "30px" }}
              >
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ marginLeft: "30px" }}>
                <i className="fa-solid fa-bars"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
