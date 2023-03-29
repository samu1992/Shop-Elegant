import React from 'react';
import { render } from '@testing-library/react';
import CartProvider from '../../Context/CartProvider';
import Navbar from './Navbar';

test('muestra el número correcto de elementos en el carrito', () => {
  const cart = [
    { id: 1, title: 'Producto 1', price: 100, cantidad: 2 },
    { id: 2, title: 'Producto 2', price: 200, cantidad: 1 }
  ];

  const contextValue = { cart };

  const { getByTestId } = render(
    <CartProvider value={contextValue}>
      <Navbar />
    </CartProvider>
  );

  const cartCount = getByTestId('cart-count');

  expect(cartCount.textContent).toBe('2');
});
