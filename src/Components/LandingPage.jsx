import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaStore } from 'react-icons/fa';
import FeaturedProducts from './FeaturedProducts';
import Footer from './Footer';
import heroImage from '../assets/hero-banner.jpg'; // Import your background image

function LandingPage() {
  return (
    <div className="container mt-4">
      {/* Hero Section with Background Image */}
      <section
        className="hero-section p-4 rounded shadow-sm text-center mb-4"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          paddingTop: '6rem',
          paddingBottom: '6rem',
        }}
      >
        <h1 className="display-4 hero-title">
          Discover & Create Unique Products
        </h1>
        <p className="lead hero-subtitle">
          Empowering creativity by connecting buyers with independent vendors offering personalized goods.
        </p>
        <div className="hero-buttons">
          <Link to="/products" className="btn explore-button">
            <FaSearch className="me-2" /> Explore Products
          </Link>
          <Link to="/vendor/register" className="btn become-vendor-button">
            <FaStore className="me-2" /> Become a Vendor
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-light p-4 rounded shadow-sm mb-4">
        <h2 className="text-center mb-3 section-title">
          How It Works
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 text-center how-it-works">
          <div className="col">
            <div className="p-3 step">
              <span className="badge bg-primary rounded-circle mb-2 step-number">1</span>
              <h5 className="step-title">Browse & Discover</h5>
              <p className="text-muted step-description">Explore a vast collection of unique, customizable products from talented creators.</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 step">
              <span className="badge bg-success rounded-circle mb-2 step-number">2</span>
              <h5 className="step-title">Personalize with Ease</h5>
              <p className="text-muted step-description">Use our intuitive customization tools to tailor products to your exact preferences and style.</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 step">
              <span className="badge bg-info rounded-circle mb-2 step-number">3</span>
              <h5 className="step-title">Secure Transaction</h5>
              <p className="text-muted step-description">Enjoy a safe and secure purchasing process with our escrow system ensuring buyer and seller satisfaction.</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 step">
              <span className="badge bg-warning rounded-circle mb-2 step-number">4</span>
              <h5 className="step-title">Support Independent Creators</h5>
              <p className="text-muted step-description">Your purchase directly supports independent artists and vendors, fostering a creative community.</p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default LandingPage;
