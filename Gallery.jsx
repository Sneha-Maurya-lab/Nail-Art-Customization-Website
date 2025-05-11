// src/pages/Gallery.jsx
import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const nailDesigns = [
    { src: '/images/nail1.jpg', title: 'Floral Vibe' },
    { src: '/images/nail2.jpg', title: 'Glitter Glam' },
    { src: '/images/nail3.jpg', title: 'Matte Elegance' },
    { src: '/images/nail4.jpg', title: 'Classic French' },
    { src: '/images/nail5.jpg', title: 'Bold Red' },
    { src: '/images/nail6.jpg', title: 'Pastel Party' },
    { src: '/images/nail7.jpg', title: 'Ocean Sparkle' },
    { src: '/images/nail8.jpg', title: 'Golden Touch' },
    { src: '/images/nail9.jpg', title: 'Spring Fresh' },
    { src: '/images/nail10.jpg', title: 'Night Glam' },
    { src: '/images/nail11.jpg', title: 'Lavender Bloom' },
    { src: '/images/nail12.jpg', title: 'Neon Bright' },
    { src: '/images/nail13.jpg', title: 'Abstract Chic' },
    { src: '/images/nail14.jpg', title: 'Rainbow Dream' },
    { src: '/images/nail15.jpg', title: 'Ombre Shine' },
    { src: '/images/nail16.jpg', title: 'Mermaid Touch' },
    { src: '/images/nail17.jpg', title: 'Daisy Garden' },
    { src: '/images/nail18.jpg', title: 'Galaxy Sparkle' },
    { src: '/images/nail19.jpg', title: 'Royal Blue' },
    { src: '/images/nail20.jpg', title: 'Rose Gold' },
  ];

  return (
    <div className="gallery-background">
      <div className="gallery-container">
        <h2 className="gallery-title">Our Nail Art Gallery</h2>
        <div className="gallery-grid">
          {nailDesigns.map((design, index) => (
            <div key={index} className="gallery-card">
              <img src={design.src} alt={design.title} className="gallery-image" />
              <div className="gallery-text">{design.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
