import React, { useEffect } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './Login.module.css';
import { apiUrl } from '../../util/urls';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = 'Login - AromaUP';
    async function checkAuth() {
      const response = await fetch(`${apiUrl}/auth/login/validate`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        navigate('/dashboard');
      }
    }
    checkAuth();
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting', { email, password });
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      navigate('/dashboard');
    } else {
      console.error('Login failed');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageSection}></div>
        <div className={styles.formSection}>
          <div className={styles.formBox}>
            <form onSubmit={handleSubmit}>
              <h1 className={styles.title}>AromaUp</h1>
              <div className={styles.inputBox}>
                <FaUser className={styles.icon} />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.inputBox}>
                <FaLock className={styles.icon} />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className={styles.rememberForgot}>
                <label>
                  <input type="checkbox" />
                  Lembre de mim
                </label>
              </div>

              <button type="submit" className={styles.btn}>
                Login
              </button>

              <div className={styles.loginRegister}>
                <p>
                  Não tem conta ?{' '}
                  <a onClick={() => navigate('/register')} href="#!">
                    Registrar
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
