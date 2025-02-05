// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-3">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-decoration-none text-dark">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-decoration-none text-dark">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-decoration-none text-dark">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-geo-alt me-2"></i> Address: Tehran, Iran
              </li>
              <li>
                <i className="bi bi-telephone me-2"></i> Phone: +98 123 456 7890
              </li>
              <li>
                <i className="bi bi-envelope me-2"></i> Email: info@example.com
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-dark"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-dark"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-dark"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-dark"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <h5>Subscribe to Newsletter</h5>
            <p>Get the latest updates and offers.</p>
            <form>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Email"
                />
                <button style={{borderRadius: "200px"}} className="btn btn-primary m-4" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center border-top pt-4">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
