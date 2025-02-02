// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* لوگو */}
        <a className="navbar-brand fw-bold text-primary" href="/">
          <span className="text-success">E</span>-Commerce
        </a>

        {/* دکمه همبرگر برای صفحات کوچک‌تر */}
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

        {/* منوی ناوبری */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item text-nowrap">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="/products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-nowrap" href="/about">
                About Us
              </a>
            </li>
          </ul>

          {/* دکمه‌های عملیاتی */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-2">
            {/* سبد خرید */}
            <a href="/cart" className="btn btn-outline-primary w-100 text-nowrap">
              <i className="bi bi-cart me-1"></i> Cart
            </a>
            {/* ورود/ثبت‌نام */}
            <a href="/auth" className="btn btn-primary w-100 text-nowrap">
              <i className="bi bi-box-arrow-in-right me-1"></i> Login / Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
