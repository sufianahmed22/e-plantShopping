import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow bg-white sticky top-0 z-10">
      <h2 className="text-xl font-bold">🪴 Paradise Nursery</h2>
      <nav className="flex gap-4 items-center">
      <Link to="/" className="text-green-700 hover:underline">Home</Link>
        <Link to="/products" className="text-green-700 hover:underline">Products</Link>
        <Link to="/cart" className="relative">
          🛒
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">{total}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;