import React from "react";
import Navbar from "./components/navbar";
import ProductList from './components/ProductList';
import Carousel from "./components/carousel";



function App() {

  
  return (
  <div>
    <Navbar/>
    <Carousel />
    <ProductList />
  </div>
  );
}

export default App;