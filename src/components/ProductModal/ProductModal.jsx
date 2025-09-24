import React, { useEffect, useState } from 'react';
import styles from './ProductModal.module.css';

function ProductModal({ product, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (product) setIsOpen(true);
  }, [product]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => onClose(), 300); // Espera a animação fechar
  };

  if (!product) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div
        className={`${styles.popup} ${isOpen ? styles.openPopup : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={handleClose}>
          ×
        </button>
        <img src={product.thumbnail} alt={product.title} />
        <div className={styles.info}>
          <h2 className={styles.modalTitle}>{product.title}</h2>
          <p className={styles.modalDescription}>{product.description}</p>
          <p className={styles.modalPrice}>{product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
