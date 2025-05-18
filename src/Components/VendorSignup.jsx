import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaInstagram, FaEye, FaEyeSlash } from 'react-icons/fa';

function VendorSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    console.log('Vendor Signup Data:', { email, password });
    setError('Signup successful (frontend simulation)');
  };

  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };
   
  
    const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
  <div className="mb-3 position-relative">
  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
  <input
  type={showConfirmPassword ? 'text' : 'password'} // Toggle input type
  className="form-control"
  id="confirmPassword"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  required
  />
  <span
  className="position-absolute end-0 translate-middle me-2" // Positioning for the icon
  style={{ cursor: 'pointer', marginTop: '-20px' }}
  onClick={toggleConfirmPasswordVisibility}
  >
  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
  </div>
              <button type="submit" className="btn w-100 mb-3 signup" style={{ backgroundColor: '#28A745', color: '#FFFFFF' }}>Sign Up</button>
            </form>
            <div className="d-grid gap-2">
              <button className="btn btn-block text-white" style={{ backgroundColor: '#4285F4' }}>
              <img src='/Google.png' className='me-2' style={{width: '30px'}}/> Sign Up with Google
              </button>
              <button className="btn btn-block text-white" style={{ backgroundColor: '#1877F2' }}>
              <img src='/fb.png' className='me-2' style={{width: '30px'}}/> Sign Up with Facebook
              </button>
              <button className="btn btn-block text-white" style={{ backgroundColor: '#E4405F' }}>
              <img src='/Instagram.png' className='me-2' style={{width: '30px'}}/> Sign Up with Instagram
              </button>
            </div>
            <p className="mt-3 text-center">
              Already have an account? <Link to="/login/vendor" style={{color: '#28A745'}}>Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorSignup;

