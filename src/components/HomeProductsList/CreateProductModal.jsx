import React, { useState } from 'react';
import styles from './CreateProductModal.module.css';
import { apiUrl } from '../../util/urls';

// Um componente de modal simples para criar um novo produto
const CreateProductModal = ({ onClose, onProductCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e) => {
    // Pega o primeiro arquivo selecionado
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    setIsSubmitting(true);
    setError(null);

    // FormData é usado para enviar arquivos (como imagens) junto com texto
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('unit_price', unitPrice);
    formData.append('quantity', quantity);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch(`${apiUrl}/products`, {
        method: 'POST',
        body: formData, // Não precisa de 'Content-Type' header, o browser define automaticamente com FormData
      });

      if (!response.ok) {
        // Se a resposta não for OK, joga um erro
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao criar o produto.');
      }

      // Se deu tudo certo
      onProductCreated(); // Chama a função para atualizar a lista de produtos
      onClose(); // Fecha o modal
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // O fundo escuro do modal
    <div className={styles.modalOverlay} onClick={onClose}>
      {/* O conteúdo do modal em si */}
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Cadastrar Novo Produto</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Título do Produto</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Perfume Elegância"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva o produto..."
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="unitPrice">Preço Unitário</label>
            <input
              id="unitPrice"
              type="number"
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
              placeholder="Ex: 199.90"
              step="0.01"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="quantity">Quantidade em Estoque</label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Ex: 50"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="image">Imagem do Produto</label>
            <input
              id="image"
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
          </div>

          {error && <p className={styles.errorMessage}>{error}</p>}

          <div className={styles.modalActions}>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelButton}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Cadastrar Produto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
