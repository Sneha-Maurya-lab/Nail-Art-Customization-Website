// src/pages/Customize.jsx
import React, { useState } from 'react';
import './Customize.css'; // ✅ Make sure this file has background styling

const Customize = () => {
  const [color, setColor] = useState('#FF69B4');
  const [style, setStyle] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nail Art Customized!\nColor: ${color}\nStyle: ${style}`);
  };

  return (
    <div className="customize-background">
      <div className="customize-wrapper">
        <form onSubmit={handleSubmit} className="customize-form-container customize-form">
          <h2>Customize Your Nail Art</h2>

          {/* Color Picker */}
          <div>
            <label>Choose Base Color</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>

          {/* Style Dropdown */}
          <div>
            <label>Select Nail Art Style</label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option value="">-- Choose a Style --</option>
              <option value="Glitter">Glitter</option>
              <option value="Marble">Marble</option>
              <option value="Floral">Floral</option>
              <option value="Ombre">Ombre</option>
              <option value="French Tip">French Tip</option>
            </select>
          </div>

          {/* Upload Image */}
          <div>
            <label>Upload Inspiration Image (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {image && (
              <img src={image} alt="Preview" style={{ marginTop: '1rem', borderRadius: '0.5rem', width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
            )}
          </div>

          {/* Submit Button */}
          <button type="submit">
            Submit Design
          </button>
        </form>
      </div>
    </div>
  );
};

export default Customize;
