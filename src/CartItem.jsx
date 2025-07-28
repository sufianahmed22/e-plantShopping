// src/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-6 p-4 border-b border-gray-300">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
      <div className="flex-1">
        <h2 className="text-lg font-bold">{item.name}</h2>
        <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-2">
          <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} disabled={item.quantity <= 1} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded">-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded">+</button>
        </div>
        <p className="mt-2 font-semibold">Total: ${(item.price * item.quantity).toFixed(2)}</p>
        <button onClick={() => dispatch(removeItem(item.id))} className="mt-2 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
