import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginBtn.module.css';
import UserSVG from '../../assets/user.svg?react'; // Assuming you'll create this SVG

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function LoginBtn() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    const token = getCookie('token');
    if (token) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className={styles.container} onClick={handleLoginClick}>
      <div className={styles.btn}>
        <UserSVG className={styles.btnImg} />
      </div>
    </div>
  );
}

export default LoginBtn;
