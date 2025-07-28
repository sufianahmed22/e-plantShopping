import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice'; // Adjust path

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleQuantityChange = (name, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ name, quantity }));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  return (
    <div className="cart-items p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, idx) => (
          <div className="cart-item flex items-center justify-between mb-4 border-b pb-2" key={idx}>
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-600">${item.cost}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="w-16 border p-1 text-center"
                value={item.quantity}
                min={1}
                onChange={(e) => handleQuantityChange(item.name, parseInt(e.target.value))}
              />
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleRemove(item.name)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItem;
