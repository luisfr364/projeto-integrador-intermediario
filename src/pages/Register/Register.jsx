import React, { useEffect, useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

import styles from './Register.module.css';
import { apiUrl } from '../../util/urls';

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    document.title = 'Register - AromaUP';
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${apiUrl}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, phone }),
    });

    if (response.ok) {
      navigate('/login');
    } else {
      console.error('Registration failed');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageSection}></div>
        <div className={styles.formSection}>
          <div className={styles.formBox}>
            <form onSubmit={handleSubmit}>
              <h1 className={styles.title}>Create Account</h1>
              <div className={styles.inputBox}>
                <FaUser className={styles.icon} />
                <input
                  type="text"
                  placeholder="Nome"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.inputBox}>
                <FaEnvelope className={styles.icon} />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.inputBox}>
                <FaLock className={styles.icon} />
                <input
                  type="password"
                  placeholder="Senha"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.inputBox}>
                <FaPhone className={styles.icon} />
                <input
                  type="tel"
                  placeholder="Telefone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Register
              </button>
              <div className={styles.registerLink}>
                <p>
                  Já tem uma conta? <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
