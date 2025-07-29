// 📁 components/ShoppingCart.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

function ShoppingCart() {
  const items = useSelector(state => state.cart.items);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <div>
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="border rounded mb-4">
              {items.map(item => <CartItem key={item.id} item={item} />)}
            </div>
            <div className="text-right mb-4">
              <p>Total Items: <strong>{totalItems}</strong></p>
              <p>Total Cost: <strong>${totalPrice.toFixed(2)}</strong></p>
            </div>
            <div className="flex gap-4">
              <Link to="/products" className="bg-gray-300 px-4 py-2 rounded">Continue Shopping</Link>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Checkout (Coming Soon)</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;