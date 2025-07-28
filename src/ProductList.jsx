// src/components/ProductList.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const products = [
    { name: 'Bitcoin Mastery', image: '/images/btc.png', cost: 29.99 },
    { name: 'Ethereum Basics', image: '/images/eth.png', cost: 19.99 },
    { name: 'DeFi Starter Kit', image: '/images/defi.png', cost: 24.99 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  return (
    <div className="text-white p-6">
      <h2 className="text-3xl font-bold mb-4">Available Courses</h2>
      <p className="mb-4 text-purple-400">Total Items in Cart: {calculateTotalQuantity()}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded shadow-lg text-center">
            <img src={product.image} alt={product.name} className="mx-auto h-32 mb-4" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-green-400">${product.cost.toFixed(2)}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
