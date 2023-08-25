import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/navbar";
import ProductList from './components/ProductList';
import Carousel from "./components/carousel";
import ProductDetail from './components/ProductDetail'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Carousel />
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
