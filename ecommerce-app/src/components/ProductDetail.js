import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = match.params.productId;
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [match.params.productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <div className="product-details">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating.rate} / 5</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
