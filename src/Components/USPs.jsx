
// src/components/USPs.jsx
import React from 'react';
import { FaMagic, FaHeart, FaHandshake } from 'react-icons/fa'; // Example icons

const usps = [
  {
    id: 1,
    title: 'Unleash Your Creativity',
    description: 'Discover a world of products with endless customization possibilities. Make it truly yours!',
    icon: <FaMagic size={32} className="text-primary mb-2" />,
  },
  {
    id: 2,
    title: 'Support Independent Creators',
    description: 'Connect directly with talented artists and vendors who pour their passion into unique goods.',
    icon: <FaHeart size={32} className="text-success mb-2" />,
  },
  {
    id: 3,
    title: 'Find Truly Unique Items',
    description: 'Say goodbye to mass-produced. Explore a curated marketplace of distinctive and personalized treasures.',
    icon: <FaHandshake size={32} className="text-info mb-2" />,
  },
  // Add more USPs here
];

function USPs() {
  return (
    <section className="py-4 mb-4 bg-white rounded shadow-sm">
      <div className="container">
        <h2 className="text-center mb-4 section-title">Why Choose Us?</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
          {usps.map((usp) => (
            <div className="col" key={usp.id}>
              <div className="p-3">
                {usp.icon}
                <h5 className="usp-title" style={{ color: '#333', fontWeight: '500' }}>{usp.title}</h5>
                <p className="text-muted usp-description">{usp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default USPs;
