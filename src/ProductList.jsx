import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice'; // Adjust the path based on your file structure

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Indoor Plants",
      plants: [
        {
          name: "Fiddle Leaf Fig",
          image: "https://via.placeholder.com/150",
          description: "A beautiful indoor plant.",
          cost: 25
        },
        {
          name: "Snake Plant",
          image: "https://via.placeholder.com/150",
          description: "Great for air purification.",
          cost: 18
        }
      ]
    },
    {
      category: "Outdoor Plants",
      plants: [
        {
          name: "Rose",
          image: "https://via.placeholder.com/150",
          description: "Classic garden rose.",
          cost: 15
        }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h1 className="text-2xl font-bold mb-4">{category.category}</h1>
          <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.plants.map((plant, idx) => (
              <div className="product-card border p-4 rounded shadow" key={idx}>
                <img className="product-image w-full h-48 object-cover" src={plant.image} alt={plant.name} />
                <div className="product-title font-bold mt-2">{plant.name}</div>
                <div className="product-description text-sm text-gray-600">{plant.description}</div>
                <div className="product-cost text-green-600 font-semibold">${plant.cost}</div>
                <button
                  className="product-button mt-2 bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
