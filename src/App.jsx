import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import BuyerSignup from './Components/BuyerSignup';
import BuyerLogin from './Components/BuyerLogin';
import VendorSignup from './Components/VendorSignup';
import VendorLogin from './Components/VendorLogin';
import BecomeAVendor from './Components/BecomeAVendor';
import VendorDashboard from './Components/VendorDashboard';
// import ProductBuilder from './Components/ProductBuilder';
// import InventoryManager from './Components/InventoryManager';
// import OrderManagement from './Components/OrderManagement';
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
        <Route path="/becomeavendor" element={<BecomeAVendor />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        {/* <Route path="/vendor/dashboard/product-builder" element={<ProductBuilder />} />
        <Route path="/vendor/dashboard/inventory" element={<InventoryManager />} />
        <Route path="/vendor/dashboard/orders" element={<OrderManagement />} /> */}
        
      </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;
