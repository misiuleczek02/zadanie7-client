import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeItem, total } = useCart();

  if (items.length === 0) {
    return (
      <section>
        <h2>Koszyk</h2>
        <p>Twój koszyk jest pusty.</p>
        <Link to="/">Wróć do produktów</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>Koszyk</h2>
      {items.map((item) => (
        <article key={item.id} className="card">
          <h3>{item.name}</h3>
          <p>Ilość: {item.quantity}</p>
          <p>Cena: {(item.price * item.quantity).toFixed(2)} PLN</p>
          <button
            type="button"
            className="button"
            onClick={() => removeItem(item.id)}
          >
            Usuń
          </button>
        </article>
      ))}
      <p>
        <strong>Suma: {total.toFixed(2)} PLN</strong>
      </p>
      <Link to="/payments" className="button">
        Przejdź do płatności
      </Link>
    </section>
  );
};

export default Cart;
