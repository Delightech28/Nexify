




import React, { useState } from 'react';

function ProductBuilder() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [mainImage, setMainImage] = useState(null);

  const handleSave = () => {
    // In a real application, you would send this data to your backend
    console.log('Product Data:', { productName, description, price, mainImage });
    alert('Product saved (frontend simulation)');
  };

  return (
    <div className="product-builder">
      <h2>Product Builder</h2>
      <p className="lead">Create and manage your product listings.</p>

      <form>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="number" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="mainImage" className="form-label">Main Image</label>
          <input type="file" className="form-control" id="mainImage" onChange={(e) => setMainImage(e.target.files[0])} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSave}>Save Product</button>
      </form>

      {/* You can add more fields for categories, variations, etc. */}
    </div>
  );
}

export default ProductBuilder;



