import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('nailart-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    localStorage.removeItem('nailart-user');
    setUser(null);
    setMenuOpen(false);
    navigate('/');
  };

  const handleLinkClick = (to) => {
    setMenuOpen(false);
    if (to) navigate(to);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
        NailArt
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => handleLinkClick('/')}>Home</Link>
        <Link to="/about" onClick={() => handleLinkClick('/about')}>About</Link>
        <Link to="/gallery" onClick={() => handleLinkClick('/gallery')}>Gallery</Link>
        <Link to="/customize" onClick={() => handleLinkClick('/customize')}>Customize</Link>
        <Link to="/book" onClick={() => handleLinkClick('/book')}>Book Appointment</Link>

        {user ? (
          <div className="navbar-account">
            <span className="navbar-user">Hi, {user.username}</span>
            <button className="navbar-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-auth-buttons">
            <Link to="/login" onClick={() => handleLinkClick('/login')}>Login</Link>
            <Link to="/signup" onClick={() => handleLinkClick('/signup')}>Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
