
// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Alice Johnson',
    quote: 'I absolutely love the personalized mug I ordered! The customization was so easy, and the quality is fantastic. It makes a perfect gift!',
    image: 'https://via.placeholder.com/80?text=AJ', // Placeholder for customer image
  },
  {
    id: 2,
    name: 'Bob Williams',
    quote: 'Finding unique items from independent vendors is what I was looking for. This platform delivers! I highly recommend it.',
    image: 'https://via.placeholder.com/80?text=BW', // Placeholder for customer image
  },
  // Add more testimonials here
];

function Testimonials() {
  return (
    <section className="py-4 mb-4">
      <h2 className="text-center mb-3 section-title">What Our Customers Say</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {testimonials.map((testimonial) => (
          <div className="col" key={testimonial.id}>
            <div className="card h-100 shadow-sm text-center p-3">
              {testimonial.image && (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle mx-auto mb-2"
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
              )}
              <p className="card-text fst-italic">"{testimonial.quote}"</p>
              <p className="card-text fw-bold">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;


