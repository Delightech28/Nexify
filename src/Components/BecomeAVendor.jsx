// src/pages/BecomeAVendor.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStore, FaChartLine, FaUsers, FaHandshake, FaMagic, FaListAlt } from 'react-icons/fa'; // Ensure all icons are imported

function BecomeAVendor() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg p-md-5 p-3">
            <h1 className="text-center mb-4 section-title display-5 fw-bold">
              Become a Vendor and Share Your Unique Creations
            </h1>
            <p className="lead text-center mb-5">
              Join our thriving community of independent creators and unlock a wider audience for your personalized goods.
            </p>

            <section className="mb-5">
              <h2 className="h4 mb-4 fw-bold"><FaStore className="me-2 text-primary" /> Why Partner With Us?</h2>
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <div className="d-flex align-items-center">
                    <FaChartLine className="me-3 text-primary fs-3" />
                    <div>
                      <h5 className="fw-bold mb-1">Expand Your Reach</h5>
                      <p className="text-muted">Connect with a diverse customer base actively seeking unique and personalized products.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center">
                    <FaUsers className="me-3 text-success fs-3" />
                    <div>
                      <h5 className="fw-bold mb-1">Supportive Community</h5>
                      <p className="text-muted">Become part of a vibrant network of fellow creators and access valuable support resources.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center">
                    <FaHandshake className="me-3 text-info fs-3" />
                    <div>
                      <h5 className="fw-bold mb-1">Easy-to-Use Platform</h5>
                      <p className="text-muted">Manage your shop, listings, and orders effortlessly with our intuitive and powerful tools.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center">
                    <FaMagic className="me-3 text-warning fs-3" />
                    <div>
                      <h5 className="fw-bold mb-1">Showcase Your Unique Style</h5>
                      <p className="text-muted">Highlight your individual creativity and the distinctive touch you bring to your personalized offerings.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-4 fw-bold"><FaListAlt className="me-2 text-secondary" /> Getting Started is Simple</h2>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item fs-5">Create your professional vendor account.</li>
                <li className="list-group-item fs-5">Set up your secure shop profile and preferred payment details.</li>
                <li className="list-group-item fs-5">List your high-quality products with compelling descriptions and visuals.</li>
                <li className="list-group-item fs-5">Start connecting with customers and growing your business!</li>
              </ol>
            </section>

            <div className="text-center mt-5">
              <p className="lead mb-3">Ready to embark on this exciting journey?</p>
              <Link to="/signup/vendor" className="btn btn-primary btn-lg me-md-3 mb-2 mb-md-0">
                Sign Up as a Vendor
              </Link>
              <p className="mt-3 mb-2">Already part of our community?</p>
              <Link to="/login/vendor" className="btn btn-outline-secondary btn-md">
                Vendor Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeAVendor;
