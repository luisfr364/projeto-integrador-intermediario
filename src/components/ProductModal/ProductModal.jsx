import React, { useEffect, useState } from 'react';
import './ProductModal.css';

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
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className={`popup ${isOpen ? 'open-popup' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={handleClose}>×</button>
        <img src={product.thumbnail} alt={product.title} />
        <div className="info">
          <h2 className="modal-title">{product.title}</h2>
          <p className="modal-description">{product.description}</p>
          <p className="modal-price">{product.price}</p>
          <button className="add-cart-button">Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
