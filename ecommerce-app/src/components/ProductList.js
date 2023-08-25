import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../ProductList.css'; 
import SearchBar from './SearchBar';
import ratingIcon from '../images/favourites.png';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);  

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchTerm]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div>
      <h2 className='title'>Products</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: <span>RM {product.price}</span></p>
            <p>Rating: <img src={ratingIcon} />
            <span>{product.rating.rate} / 5</span>
              </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;