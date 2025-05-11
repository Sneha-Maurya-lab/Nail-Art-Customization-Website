import React from "react";
import "./AboutUs.css";
import AboutImage from "C:/Users/Abhishek Maurya/Desktop/Nail art website/nail-art-website/src/assets/Aboutus.jpg"; // ✅ relative import
import BgImage from "C:/Users/Abhishek Maurya/Desktop/Nail art website/nail-art-website/src/assets/bg-about.jpg";   // ✅ relative import

const AboutUs = () => {
  return (
    <section
      className="about-section"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(255,240,245,0.9), rgba(255,228,236,0.9)), url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-intro">
          Welcome to <strong>NailArt</strong> – where creativity meets elegance!
          We specialize in trendy, high-quality nail art designed to express your
          unique personality.
        </p>

        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              To empower individuals through artful nail designs and self-expression.
              We aim to deliver exceptional service with passion, precision, and love.
            </p>

            <h3>Why Choose Us?</h3>
            <ul>
              <li>🎨 Creative and customizable nail designs</li>
              <li>💅 Experienced, certified nail artists</li>
              <li>🧼 Hygienic, high-quality tools and materials</li>
              <li>😊 Friendly and relaxing environment</li>
              <li>🕒 Easy online appointment booking</li>
            </ul>
          </div>

          <div className="about-image">
            <img src={AboutImage} alt="Nail Art Studio" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
