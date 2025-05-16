
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStore, FaChartLine, FaUsers, FaHandshake } from 'react-icons/fa'; // Example icons

function BecomeAVendor() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm p-5">
            <h1 className="text-center mb-4 section-title">Become a Vendor and Share Your Unique Creations</h1>
            <p className="lead text-center mb-4">
              Join our growing community of independent creators and reach a wider audience for your personalized goods.
            </p>

            <section className="mb-4">
              <h2 className="h4 mb-3"><FaStore className="me-2" /> Why Sell With Us?</h2>
              <div className="row row-cols-1 row-cols-md-2 g-3">
                <div>
                  <h5 className="fw-bold"><FaChartLine className="me-2 text-primary" /> Expand Your Reach</h5>
                  <p className="text-muted">Connect with buyers actively seeking unique and personalized products.</p>
                </div>
                <div>
                  <h5 className="fw-bold"><FaUsers className="me-2 text-success" /> Supportive Community</h5>
                  <p className="text-muted">Be part of a vibrant community of fellow creators and receive support.</p>
                </div>
                <div>
                  <h5 className="fw-bold"><FaHandshake className="me-2 text-info" /> Easy-to-Use Tools</h5>
                  <p className="text-muted">Manage your shop, listings, and orders with our intuitive platform.</p>
                </div>
                <div>
                  <h5 className="fw-bold"><FaMagic className="me-2 text-warning" /> Showcase Your Unique Style</h5>
                  <p className="text-muted">Highlight your creativity and the personal touch you bring to your products.</p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3"><FaListAlt className="me-2" /> How to Get Started</h2>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">Create your vendor account.</li>
                <li className="list-group-item">Set up your shop profile and payment details.</li>
                <li className="list-group-item">List your unique products with clear descriptions and images.</li>
                <li className="list-group-item">Start selling and engaging with your customers!</li>
              </ol>
            </section>

            <div className="text-center mt-4">
              <p className="mb-2">Ready to join us?</p>
              <Link to="/signup/vendor" className="btn btn-primary btn-lg me-2">Sign Up as a Vendor</Link>
              <p className="mt-2">Already a vendor?</p>
              <Link to="/login/vendor" className="btn btn-outline-secondary btn-sm">Vendor Log In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeAVendor;





