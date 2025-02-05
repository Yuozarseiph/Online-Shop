import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const rounded = { borderRadius: "100px" };

const Header = () => {
  const { user } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          <span className="text-success">E</span>-Commerce
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item text-nowrap">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item text-nowrap">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-nowrap" to="/about">
                About Us
              </Link>
            </li>
          </ul>

          <div className="d-flex flex-column flex-lg-row align-items-center gap-2">
            <Link
              style={rounded}
              to="/cart"
              className="btn btn-outline-primary w-100 text-nowrap"
            >
              <i className="bi bi-cart me-1"></i> Cart
            </Link>
            <Link
              style={rounded}
              to={user ? "/dashboard" : "/auth"}
              className="btn btn-primary w-100 text-nowrap"
            >
              <i className="bi bi-box-arrow-in-right me-1"></i>
              {user ? "Dashboard" : "Login / Sign Up"}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
