import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      'https://render.com/docs/web-services#port-binding/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      navigate('/dashboard');
    } else {
      console.error('Login failed');
    }
  };

  return (
    <div className="wrapper">
      <div className="form-box login">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <FaUser className="icon" />
            <input
              type="email"
              placeholder=" "
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email</label>
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
          </div>

          <button className="btn">Login</button>

          <div className="login-register">
            <p>
              Não tem conta ?{' '}
              <a href="#" className="register-link">
                Registrar
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
