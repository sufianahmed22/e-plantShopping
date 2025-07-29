// src/components/Landing.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Landing = () => {
  return (
    <div>
       <Header />
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1600&q=80")',
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-xl max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-md">🌱 Paradise Nursery</h1>
        <p className="text-lg mb-8 leading-relaxed drop-shadow-sm">
          Welcome to <strong>Paradise Nursery</strong> — your digital jungle for lush,
          air-purifying houseplants. We deliver handpicked, healthy plants right
          to your door while helping you build a happier, greener home.
        </p>
        <Link
          to="/products"
          className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg rounded-full transition"
        >
          Get Started
        </Link>
      </div>
    </div>
    </div>
  );
  
};

export default Landing;
