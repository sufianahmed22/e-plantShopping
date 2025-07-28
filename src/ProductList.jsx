// src/components/ProductList.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const products = [
  {
    id: 1,
    name: 'Spider Plant',
    price: 12,
    image: '/images/spider-plant.jpg',
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 18,
    image: '/images/peace-lily.jpg',
  },
  {
    id: 3,
    name: 'Snake Plant',
    price: 15,
    image: '/images/snake-plant.jpg',
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Plant Shop</h1>
        <span className="bg-purple-500 text-white px-4 py-2 rounded-full">
          Cart Items: {calculateTotalQuantity()}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md bg-white">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
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
