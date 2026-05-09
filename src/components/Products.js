import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/client';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    let active = true;
    fetchProducts()
      .then((data) => {
        if (active) {
          setProducts(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (active) {
          setError('Nie udało się pobrać listy produktów');
          setLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return <p>Ładowanie produktów…</p>;
  }
  if (error) {
    return <p role="alert">{error}</p>;
  }

  return (
    <section>
      <h2>Produkty</h2>
      {products.map((product) => (
        <article key={product.id} className="card">
          <h3>{product.name}</h3>
          <p>Cena: {product.price.toFixed(2)} PLN</p>
          <button
            type="button"
            className="button"
            onClick={() => addItem(product)}
          >
            Dodaj do koszyka
          </button>
        </article>
      ))}
    </section>
  );
};

export default Products;
