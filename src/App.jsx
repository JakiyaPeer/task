// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import CartPage from './Components/CartPage';

import ProductPage from './Components/ProductPage';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Laptop', price: 1000,image: "https://tse3.mm.bing.net/th?id=OIP.zm3Qz7wKiqTaZy9qPrhbcAHaG0&pid=Api&P=0&h=180"   },
  
    { id: 2, name: 'Phone', price: 500, image: "https://tse3.mm.bing.net/th?id=OIP.nvdM5sEm4DqG8oZb8nNStQHaHa&pid=Api&P=0&h=180" },
    { id: 3, name: 'Headphones', price: 100,image: "https://tse3.mm.bing.net/th?id=OIP.6WZHCb9rVStvjjH43x9kXQHaHa&pid=Api&P=0&h=180" },
  ]
  

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  return (
    <Router>
      <div className="p-6 " >
        <nav className="flex justify-between mb-6 ">
          <Link to="/" className="text-blue-600" >Products</Link>
          <Link to="/cart" className="text-blue-600">Cart ({cart.length})</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<ProductPage products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
