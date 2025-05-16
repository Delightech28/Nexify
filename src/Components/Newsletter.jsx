// src/components/Newsletter.jsx
import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this email to your backend
    console.log('Subscribed email:', email);
    setMessage('Thank you for subscribing!');
    setEmail('');
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    <section className="bg-light p-4 rounded shadow-sm mb-4 text-center">
      <h2 className="mb-3 section-title">Stay Updated!</h2>
      <p className="text-muted mb-3">
        Subscribe to our newsletter and be the first to know about new unique products, vendor spotlights, and special offers.
      </p>
      <form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <input
          type="email"
          className="form-control me-2"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Subscribe</button>
      </form>
      {message && <p className="mt-3 text-success">{message}</p>}
    </section>
  );
}

export default Newsletter;


