// src/pages/VendorLogin.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function VendorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Vendor Login Data:', { email, password });
    setError('Login successful (frontend simulation)');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };
   

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Vendor Log In</h2>
            <Link className="nav-link text-center" to="/vendor/dashboard">View Vendor DashBoard</Link>
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
              <div className="mb-3 position-relative">
  <label htmlFor="password" className="form-label">Password</label>
  <input
  type={showPassword ? 'text' : 'password'} // Toggle input type
  className="form-control"
  id="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
  />
  <span
  className="position-absolute end-0 translate-middle me-2" // Positioning for the icon
  style={{ cursor: 'pointer', marginTop: '-20px'}}
  onClick={togglePasswordVisibility}
  >
  {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
  </div>
              <button type="submit" className="btn w-100 mb-3" style={{ backgroundColor: '#28A745', color: '#FFFFFF'}}>Log In</button>
            </form>
            <div className="d-grid gap-2">
              <button className="btn btn-block text-white" style={{ backgroundColor: '#4285F4' }}>
              <img src='/Google.png' className='me-2' style={{width: '30px'}}/>  Log In with Google
              </button> 
              <button className="btn btn-block text-white" style={{ backgroundColor: '#1877F2' }}>
             <img src='/fb.png' className='me-2' style={{width: '30px'}}/>    Log In with Facebook
              </button>
              <button className="btn btn-block text-white" style={{ backgroundColor: '#E4405F' }}>
               <img src='/Instagram.png' className='me-2' style={{width: '30px'}}/>   Log In with Instagram
              </button>
            </div>
            <p className="mt-3 text-center">
              Don't have an account? <Link to="/signup/vendor" style={{color: '#28A745'}}>Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorLogin;
