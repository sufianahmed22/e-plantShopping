import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/CartSlice'; // adjust path as needed
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(true);
  const [addedToCart, setAddedToCart] = useState({});

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prev) => ({
      ...prev,
      [product.name]: true,
    }));
  };

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: 15
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: 12
        }
        // Add more as needed
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Soothing gel used for skin ailments.",
          cost: 14
        },
        {
          name: "Chamomile",
          image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
          description: "Soothes anxiety and promotes sleep.",
          cost: 15
        }
      ]
    }
  ];

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h2>Paradise Nursery</h2>
          <p>Where Green Meets Serenity</p>
        </div>
        <div className="nav-links">
          <button onClick={() => setShowPlants(true)}>Plants</button>
          <button onClick={() => setShowCart(true)}>Cart</button>
          <button onClick={() => setShowCart(false)}>Home</button>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h2 className="category-title">{category.category}</h2>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-cost">${plant.cost}</div>
                    <button
                      className="product-button"
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
      ) : (
        <div className="cart-section">
          <h2>Cart Items</h2>
          <button onClick={() => setShowCart(false)}>Continue Shopping</button>
          {/* Render cart items from Redux here if needed */}
        </div>
      )}
    </div>
  );
}

export default ProductList;
