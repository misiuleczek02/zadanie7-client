import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitPayment } from '../api/client';
import { useCart } from '../context/CartContext';

const PAYMENT_METHODS = ['card', 'blik', 'transfer'];

const Payments = () => {
  const { total, clear, items } = useCart();
  const navigate = useNavigate();
  const [method, setMethod] = useState(PAYMENT_METHODS[0]);
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (items.length === 0 || submitting) {
      return;
    }
    setSubmitting(true);
    setStatus(null);
    try {
      await submitPayment({ amount: total, method });
      setStatus({ kind: 'success', text: 'Płatność zaakceptowana' });
      clear();
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setStatus({ kind: 'error', text: 'Nie udało się przetworzyć płatności' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section>
      <h2>Płatność</h2>
      <p>Do zapłaty: {total.toFixed(2)} PLN</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="method">Metoda płatności</label>
        <select
          id="method"
          className="input"
          value={method}
          onChange={(event) => setMethod(event.target.value)}
        >
          {PAYMENT_METHODS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="button"
          disabled={submitting || items.length === 0}
        >
          {submitting ? 'Wysyłanie…' : 'Zapłać'}
        </button>
      </form>
      {status && (
        <p role="status" className={status.kind}>
          {status.text}
        </p>
      )}
    </section>
  );
};

export default Payments;
