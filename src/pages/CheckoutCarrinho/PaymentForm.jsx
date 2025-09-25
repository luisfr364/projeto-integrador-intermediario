import React, { useEffect, useState } from 'react';
import styles from './PaymentForm.module.css';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../../util/urls';

const PaymentForm = ({ onPaymentSubmit }) => {
  const [cardInfo, setCardInfo] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Placeholder for actual auth state
  useEffect(() => {
    async function checkAuth() {
      const response = await fetch(`${apiUrl}/auth/login/validate`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        alert('Por favor, faça login para continuar com o pagamento.');
        navigate('/login');
        setIsLoggedIn(false);
      }
    }

    checkAuth();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder
    console.log('Submitting payment info:', cardInfo);
    onPaymentSubmit(cardInfo);
  };

  return (
    <div className={styles.paymentFormContainer}>
      <h3 className={styles.title}>Informações de Pagamento</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="number">Número do Cartão</label>
          <input
            type="text"
            id="number"
            name="number"
            placeholder="0000 0000 0000 0000"
            value={cardInfo.number}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome no Cartão</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome como aparece no cartão"
            value={cardInfo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="expiry">Validade</label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              placeholder="MM/AA"
              value={cardInfo.expiry}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="123"
              value={cardInfo.cvv}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>
          Finalizar Compra
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
