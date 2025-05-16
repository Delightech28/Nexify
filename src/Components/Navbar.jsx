


// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaStore, FaBoxes, FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Example icons from Font Awesome

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3">
      <div className="container-fluid">
        <Link className="navbar-brand mx-2" to="/" style={{ color: '#28A745', fontWeight: 'bold', fontSize: '1.5rem' }}>
          Nexify
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">
                <FaHome className="me-2" /> Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/vendors">
                <FaStore className="me-2" /> Vendors
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/products">
                <FaBoxes className="me-2" /> Products
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/login/buyer">
                <FaSignInAlt className="me-2" /> Login
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/signup/buyer" style={{ color: '#28A745' }}>
                <FaUserPlus className="me-2" /> Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
