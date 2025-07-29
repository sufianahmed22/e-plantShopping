
// 📁 components/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center gap-4">
        <img
  src={item.image}
  alt={item.name}
  className="w-20 h-20 object-cover rounded"
/>
        <div>
          <h4 className="font-bold">{item.name}</h4>
          <p>${item.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => dispatch(decrement(item.id))} className="px-2 py-1 bg-gray-300 rounded">-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increment(item.id))} className="px-2 py-1 bg-gray-300 rounded">+</button>
        <button onClick={() => dispatch(removeItem(item.id))} className="px-2 py-1 bg-red-500 text-white rounded">🗑️</button>
      </div>
    </div>
  );
}

export default CartItem;