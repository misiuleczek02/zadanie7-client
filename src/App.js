import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/Navigation';
import Products from './components/Products';
import Cart from './components/Cart';
import Payments from './components/Payments';

const App = () => (
  <CartProvider>
    <BrowserRouter>
      <Navigation />
      <main className="container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </main>
    </BrowserRouter>
  </CartProvider>
);

export default App;
