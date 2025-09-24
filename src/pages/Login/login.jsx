import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Login realizado com sucesso!');
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-overlay"></div>
      </div>
      
      <div className="login-wrapper">
        <div className="login-form-box">
          <form onSubmit={handleSubmit}>
            <div className="login-header">
              <h1>Bem-vindo de volta</h1>
              <p>Entre na sua conta para continuar</p>
            </div>

            <div className="input-group">
              <div className="input-icon">👤</div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <div className="input-icon">🔒</div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Lembrar de mim</span>
              </label>
              <a href="#" className="forgot-password">Esqueceu a senha?</a>
            </div>

            <button type="submit" className="login-btn">Entrar</button>

            <div className="register-link">
              <p>
                Não tem uma conta? <a href="#">Criar conta</a>
              </p>
            </div>

            <div className="back-home">
              <Link to="/" className="back-link">← Voltar para Home</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;