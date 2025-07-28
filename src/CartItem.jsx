// src/components/CartItem.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleQuantityChange = (name, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ name, quantity: newQuantity }));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  return (
    <div className="text-white p-6">
      <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-800 p-4 rounded">
              <img src={item.image} alt={item.name} className="h-16 w-16 object-cover" />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-green-400">${item.cost.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.name, parseInt(e.target.value))}
                  className="w-16 text-black px-2 py-1 rounded"
                />
                <button
                  onClick={() => handleRemove(item.name)}
                  className="ml-4 bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartItem;
