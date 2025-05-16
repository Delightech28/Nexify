

// src/pages/BuyerLogin.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

function BuyerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Buyer Login Data:', { email, password });
    setError('Login successful (frontend simulation)');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Buyer Log In</h2>
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
              <button type="submit" className="btn btn-primary w-100 mb-3" style={{ backgroundColor: '#007BFF', borderColor: '#007BFF' }}>Log In</button>
            </form>
            <div className="d-grid gap-2">
              <button className="btn btn-outline-secondary" style={{ color: '#4285F4' }}>
                <FaGoogle className="me-2" style={{ color: '#4285F4' }} /> Log In with Google
              </button>
              <button className="btn btn-outline-secondary" style={{ color: '#1877F2' }}>
                <FaFacebook className="me-2" style={{ color: '#1877F2' }} /> Log In with Facebook
              </button>
            </div>
            <p className="mt-3 text-center">
              Don't have an account? <Link to="/signup/buyer">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerLogin;

