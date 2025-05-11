// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate(); // For redirection
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('nailart-user'));

    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setLoginError('');
      navigate('/'); // Redirect to home page after successful login
    } else {
      setLoginError('Invalid username, email, or password!');
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <h2 className="login-title">Login to Your Account</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
          {loginError && <p className="login-error">{loginError}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
