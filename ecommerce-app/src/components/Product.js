// src/Product.js
import React from 'react';

function Product({ product }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
}

export default Product;
