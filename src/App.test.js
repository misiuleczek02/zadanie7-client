import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('./api/client', () => ({
  fetchProducts: () => Promise.resolve([]),
  submitPayment: () => Promise.resolve({ status: 'success' }),
}));

test('renders navigation', () => {
  render(<App />);
  expect(screen.getByText(/Produkty/i)).toBeInTheDocument();
});
