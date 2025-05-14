// src/components/FeaturedProducts.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Importing star icons from Bootstrap Icons
import product1Image from '../assets/1.jpg';
import product2Image from '../assets/2.jpg';
import product3Image from '../assets/3.jpg';
import product4Image from '../assets/4.jpg';

// Dummy product data
const featuredProducts = [
  { id: 1, name: 'Customizable Mug', vendor: 'Creative Ceramics', image: product1Image, customization: 'Text, Colors, Images', price: '$15.00', rating: 4 },
  { id: 2, name: 'Personalized T-Shirt', vendor: 'Printastic', image: product2Image, customization: 'Design, Size, Color', oldPrice: '$25.00', price: '$20.00', rating: 5, sale: true },
  { id: 3, name: 'Engraved Wooden Phone Case', vendor: 'Wood Wonders', image: product3Image, customization: 'Name, Initials, Patterns', price: '$30.00', rating: 3 },
  { id: 4, name: 'Hand-Painted Canvas', vendor: 'Artful Strokes', image: product4Image, customization: 'Colors, Style, Size', price: '$45.00', rating: 4 },
];

function FeaturedProducts() {
  return (
    <section className="mb-4">
      <h2 className="text-center mb-3 section-title">
        Featured Products
      </h2>
      <hr className="w-25 mx-auto mb-4" style={{ borderColor: '#333', borderWidth: '2px' }} />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 featured-products">
        {featuredProducts.map(product => (
          <div className="col" key={product.id}>
            <div className="card h-100 shadow-sm product-card">
              {product.sale && (
                <div className="position-absolute top-0 end-0 bg-warning text-white p-1 small">Sale!</div>
              )}
              <img src={product.image} className="card-img-top product-image" alt={product.name} style={{ height: '150px', objectFit: 'cover' }} />
              <div className="card-body text-center">
                <h5 className="card-title product-title">{product.name}</h5>
                <p className="card-text small text-muted product-vendor">By {product.vendor}</p>
                {product.oldPrice && (
                  <p className="card-text small"><del className="text-danger">{product.oldPrice}</del> <span className="fw-bold">{product.price}</span></p>
                )}
                {!product.oldPrice && (
                  <p className="card-text small fw-bold">{product.price}</p>
                )}
                <div className="d-flex justify-content-center align-items-center small">
                  {Array.from({ length: 5 }).map((_, index) => {

                    if(index < product.rating){

                    return <FaStar key={index} className="text-warning" />;
                } else {
                   return  <FaRegStar key={index} />;
                }
})}
                </div>
                {/* <Link to={`/product/${product.id}`} className="btn btn-outline-primary btn-sm product-link mt-2">View & Customize</Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;



