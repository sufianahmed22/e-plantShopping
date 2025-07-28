// src/ProductList.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

const products = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 15,
    description: 'Produces oxygen at night, improving air quality.',
    image: '/images/snake-plant.jpg',
  },
  {
    id: 2,
    name: 'Spider Plant',
    price: 12,
    description: 'Filters formaldehyde and xylene from the air.',
    image: '/images/spider-plant.jpg',
  },
  {
    id: 3,
    name: 'Peace Lily',
    price: 18,
    description: 'Removes mold spores and purifies the air.',
    image: '/images/peace-lily.jpg',
  },
];

const ProductList = ({ onHomeClick }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <button onClick={onHomeClick} className="text-white font-semibold hover:underline">← Home</button>
        <div className="text-xl font-bold">Paradise Nursery</div>
        <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
          🛒
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {itemCount}
            </span>
          )}
        </div>
      </nav>

      {/* Product Grid */}
      <div className="p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Air Purifying Plants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md bg-white relative">
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>
              <img src={product.image} alt={product.name} className="h-40 w-full object-contain mb-2" />
              <h3 className="text-xl font-bold mb-1">{product.name}</h3>
              <p className="text-green-700 font-semibold">${product.price.toFixed(2)}</p>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <button
                className={`w-full px-4 py-2 rounded ${
                  isInCart(product.id)
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-700 text-white hover:bg-green-800'
                }`}
                onClick={() => dispatch(addItem(product))}
                disabled={isInCart(product.id)}
              >
                {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50" onClick={() => setIsCartOpen(false)}>
          <div
            className="w-full sm:w-[400px] bg-white h-full p-4 overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setIsCartOpen(false)} className="absolute top-2 right-2 text-xl font-bold">×</button>
            <h2 className="text-xl font-bold mb-4 border-b pb-2">Your Cart</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center mt-10">🛒 Your cart is empty.</p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
                <div className="mt-4 border-t pt-4">
                  <p className="text-lg font-semibold flex justify-between">
                    <span>Total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </p>
                  <button className="w-full mt-4 bg-green-700 text-white py-2 rounded hover:bg-green-800">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
