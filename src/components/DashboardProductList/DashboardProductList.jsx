import React, { useState, useEffect } from 'react';
import styles from './DashboardProductList.module.css';
import { apiUrl } from '../../util/urls';
import EditProductModal from './EditProductModal';

function DashboardProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/products/productsselling`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Erro ao carregar produtos :(');
        }
        const responseJSON = await response.json();
        const productsData = Array.isArray(responseJSON?.data)
          ? responseJSON.data
          : [];

        if (!Array.isArray(responseJSON?.data)) {
          console.warn(
            'Expected an array of products but received:',
            responseJSON?.data
          );
        }

        setProducts(productsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleCloseModal = () => {
    setEditingProduct(null);
  };

  const handleSave = (productId, updatedData) => {
    // Here you will make your API call to update the product
    console.log('Saving product:', productId, updatedData);
    // For now, just update the state
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === productId ? { ...p, ...updatedData } : p
      )
    );
    handleCloseModal();
  };

  if (loading) {
    return <div className={styles.loading}>Loading products...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.productListContainer}>
      <h2 className={styles.title}>Meus produtos</h2>
      {!Array.isArray(products) || products.length === 0 ? (
        <p>Não há produtos listados</p>
      ) : (
        <table className={styles.productTable}>
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(products) &&
              products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.image_url}
                      alt={product.title}
                      className={styles.productImage}
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.unit_price}</td>
                  <td>{product.category}</td>
                  <td>
                    <button
                      className={styles.actionButton}
                      onClick={() => handleEdit(product)}
                    >
                      Editar
                    </button>
                    <button
                      className={`${styles.actionButton} ${styles.deleteButton}`}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      <EditProductModal
        product={editingProduct}
        onClose={handleCloseModal}
        onSave={handleSave}
      />
    </div>
  );
}

export default DashboardProductList;
