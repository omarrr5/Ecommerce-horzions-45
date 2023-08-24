// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../ProductList.css';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the API
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h2 className='title'>Products</h2>
      
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating.rate} / 5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
