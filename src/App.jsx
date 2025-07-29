// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<ShoppingCart />} />
    </Routes>
  );
}

export default App;
