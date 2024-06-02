import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home';
import ProductBrands from '../src/Components/ProductBrands';
const App = () => {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/product-brands" element={<ProductBrands />} />
    </Routes>
  </Router>
      
  );
}

export default App;
