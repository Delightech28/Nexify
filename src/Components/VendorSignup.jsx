import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa';

function VendorSignup() {
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
    console.log('Vendor Signup Data:', { email, password });
    setError('Signup successful (frontend simulation)');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Vendor Sign Up</h2>
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
              <button type="submit" className="btn w-100 mb-3 signup" style={{ backgroundColor: '#28A745' }}>Sign Up</button>
            </form>
            <div className="d-grid gap-2">
              <button className="btn btn-block text-white" style={{ backgroundColor: '#4285F4' }}>
                <FaGoogle className="me-2" /> Sign Up with Google
              </button>
              <button className="btn btn-block text-white" style={{ backgroundColor: '#1877F2' }}>
                <FaFacebook className="me-2" /> Sign Up with Facebook
              </button>
              <button className="btn btn-block text-white" style={{ backgroundColor: '#E4405F' }}>
                <FaInstagram className="me-2" /> Sign Up with Instagram
              </button>
            </div>
            <p className="mt-3 text-center">
              Already have an account? <Link to="/login/vendor">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorSignup;

