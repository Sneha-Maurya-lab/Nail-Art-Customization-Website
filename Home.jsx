// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing external CSS

const Home = () => {
  return (
    <div className="home-background">
      <div className="home-container">
        <h1 className="home-title">Welcome to NailArt Studio</h1>
        <p className="home-subtitle">Explore beautiful nail designs or create your own custom style.</p>

        <div className="home-buttons">
          <Link to="/Gallery" className="button-primary">
            View Gallery
          </Link>
          <Link to="/Customize" className="button-outline">
            Customize Nail Art
          </Link>
        </div>

        <div className="gallery-preview">
          <img src="/images/nail1.jpg" alt="Nail Art 1" className="gallery-image" />
          <img src="/images/nail2.jpg" alt="Nail Art 2" className="gallery-image" />
          <img src="/images/nail3.jpg" alt="Nail Art 3" className="gallery-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
