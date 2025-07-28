// src/components/CartItem.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { useNavigate } from 'react-router-dom';

const CartItem = ({ onContinueShopping }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleContinueShopping = () => {
    if (onContinueShopping) onContinueShopping();
    else navigate('/');
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        Total Cart Amount: ${calculateTotalAmount()}
      </h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center gap-6"
        >
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
              onClick={() => handleRemove(item.id)}
              className="mt-2 px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between mt-8">
        <button
          onClick={handleContinueShopping}
          className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500"
        >
          Continue Shopping
        </button>
        <button
          onClick={handleCheckoutShopping}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
