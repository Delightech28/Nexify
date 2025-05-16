// src/pages/BuyerSignup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

function BuyerSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // In a real application, you would send this data to your backend for registration
    console.log('Buyer Signup Data:', { email, password });
    setError('Signup successful (frontend simulation)');
    // Optionally redirect user
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Buyer Sign Up</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">Sign Up</button>
            </form>
            <div className="d-grid gap-2">
              <button className="btn btn-outline-secondary">
                <FaGoogle className="me-2" /> Sign Up with Google
              </button>
              <button className="btn btn-outline-secondary">
                <FaFacebook className="me-2" /> Sign Up with Facebook
              </button>
            </div>
            <p className="mt-3 text-center">
              Already have an account? <Link to="/login/buyer">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerSignup;


