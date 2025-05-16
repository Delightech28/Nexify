import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import BuyerSignup from './Components/BuyerSignup';
import BuyerLogin from './Components/BuyerLogin';
import VendorSignup from './Components/VendorSignup';
import VendorLogin from './Components/VendorLogin';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <div className='container'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup/buyer" element={<BuyerSignup />} />
        <Route path="/login/buyer" element={<BuyerLogin />} />
        <Route path="/signup/vendor" element={<VendorSignup />} />
        <Route path="/login/vendor" element={<VendorLogin />} />
      </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;
