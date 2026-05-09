import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navigation = () => {
  const { items } = useCart();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav className="nav">
      <Link to="/">Produkty</Link>
      <Link to="/cart">Koszyk ({count})</Link>
      <Link to="/payments">Płatność</Link>
    </nav>
  );
};

export default Navigation;
