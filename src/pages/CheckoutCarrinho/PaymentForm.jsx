import React, { useState } from 'react';
import styles from './PaymentForm.module.css';

const PaymentForm = ({ onPaymentSubmit }) => {
  const [cardInfo, setCardInfo] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for your API call
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
