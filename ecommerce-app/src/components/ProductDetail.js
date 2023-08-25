import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../ProductDetails.css';

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <div className="product-details">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>Price: RM{product.price}</p>
        <p>Rating: {product.rating.rate} / 5</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
