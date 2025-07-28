// src/components/CartItem.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateItemTotal = (item) => item.price * item.quantity;
  const calculateTotalAmount = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id)); // Using ID instead of name is more reliable
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        Total Cart Amount: ${calculateTotalAmount()}
      </h1>

      {cartItems.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex gap-6">
          <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded" />
          <div className="flex-grow">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p>${item.price}</p>

            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => handleDecrement(item)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleIncrement(item)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>
            </div>

            <p className="mt-2 font-semibold">Total: ${calculateItemTotal(item)}</p>
            <button
              onClick={() => handleRemove(item)}
              className="mt-2 px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
