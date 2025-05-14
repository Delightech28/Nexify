


// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Social media icons

function Footer() {
  return (
    <footer className="py-4 mt-4 text-center footer-dark">
      <div className="container">
        <section className="mb-3 social-icons">
          <Link to="#" className="text-decoration-none me-3 facebook"><FaFacebook size={20} /></Link>
          <Link to="#" className="text-decoration-none me-3 twitter"><FaTwitter size={20} /></Link>
          <Link to="#" className="text-decoration-none me-3 instagram"><FaInstagram size={20} /></Link>
        </section>
        <p className="text-muted small copyright">
          &copy; {new Date().getFullYear()} Your Customizable E-commerce Platform. All rights reserved.
          <br />
          <Link to="/privacy" className="text-decoration-none text-muted me-2 privacy-link">Privacy Policy</Link>
          <Link to="/terms" className="text-decoration-none text-muted terms-link">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;





