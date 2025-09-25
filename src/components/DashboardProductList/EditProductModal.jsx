import React, { useState, useEffect } from 'react';
import styles from './EditProductModal.module.css';
import { apiUrl } from '../../util/urls';

const EditProductModal = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    unit_price: '',
    quantity: '',
  });

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || '',
        description: product.description || '',
        unit_price: product.unit_price || '',
        quantity: product.quantity || '',
      });
    }
  }, [product]);

  if (!product) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${apiUrl}/products/${product.id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: parseInt(product.id),
        title: formData.title,
        description: formData.description,
        unitPrice: parseFloat(formData.unit_price),
        quantity: parseInt(formData.quantity),
      }),
    });
    console.log(response);
    if (!response.ok) {
      // Handle error
      console.error('Failed to update product');
      return;
    }
    onSave(product.id, formData);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Editar Produto</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="unit_price">Preço</label>
            <input
              type="number"
              id="unit_price"
              name="unit_price"
              value={formData.unit_price}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="quantity">Quantidade</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>
          <div className={styles.buttonGroup}>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelButton}
            >
              Cancelar
            </button>
            <button type="submit" className={styles.saveButton}>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
