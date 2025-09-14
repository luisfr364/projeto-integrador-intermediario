import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import './login.css';

function login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Conta criada com sucesso !');
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
              placeholder=' '
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email</label>
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder=' '
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          <div className="recall-forget">
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
          </div>

          <button>Login</button>

          <div className="signup-link">
            <p>
              Não tem conta ? <a href="#">Registrar</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
