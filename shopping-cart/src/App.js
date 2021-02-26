import React from 'react';
import './App.css';
import Cart from './features/cart/Cart'
import { Product } from './features/products/Product'

function App() {
  return (
    <div key="app" className="App">
      <Cart />
      <Product />
    </div>
  );
}

export default App;
