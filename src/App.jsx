import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <div className='container'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      
      </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;
