// 📁 components/ProductList.jsx
import React from 'react';
import Header from './Header';
import plants from '../data/plants';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const addedIds = cartItems.map(item => item.id);

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      <Header />
      <div className="p-6">
        {categories.map(category => (
          <div key={category} className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {plants.filter(p => p.category === category).map(plant => (
                <div key={plant.id} className="border p-4 rounded shadow hover:shadow-lg transition">
                  <img src={plant.image} alt={plant.name} className="mb-3 w-full h-32 object-cover rounded" />
                  <h4 className="text-lg font-semibold">{plant.name}</h4>
                  <p className="text-gray-700 mb-2">${plant.price}</p>
                  <button
                    disabled={addedIds.includes(plant.id)}
                    onClick={() => dispatch(addItem(plant))}
                    className={`px-4 py-2 rounded w-full text-white ${addedIds.includes(plant.id) ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
                  >
                    {addedIds.includes(plant.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
