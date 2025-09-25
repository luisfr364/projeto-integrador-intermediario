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
        console.log(
          'Fetching products from:',
          `${apiUrl}/products/productsselling`
        );
        console.log('Using credentials: include');

        const response = await fetch(`${apiUrl}/products/productsselling`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log('Fetched products response status:', response.status);
        console.log(
          'Fetched products response headers:',
          Object.fromEntries(response.headers.entries())
        );

        if (!response.ok) {
          if (response.status === 401) {
            throw new Error('Não autorizado. Faça login novamente.');
          } else if (response.status === 403) {
            throw new Error('Acesso negado.');
          } else {
            throw new Error(`Erro ao carregar produtos: ${response.status}`);
          }
        }

        const responseJSON = await response.json();
        console.log('Raw API response:', responseJSON);
        let productsData = [];

        if (Array.isArray(responseJSON?.data)) {
          productsData = responseJSON.data;
        } else if (
          responseJSON?.data?.nodes &&
          Array.isArray(responseJSON.data.nodes)
        ) {
          productsData = responseJSON.data.nodes;
        } else if (typeof responseJSON?.data === 'string') {
          try {
            const parsed = JSON.parse(responseJSON.data);
            if (Array.isArray(parsed)) {
              productsData = parsed;
            } else if (parsed && typeof parsed === 'object') {
              productsData = Object.values(parsed);
            }
          } catch (parseError) {
            console.warn(
              'Failed to parse stringified data payload',
              parseError
            );
          }
        } else if (
          responseJSON?.data &&
          typeof responseJSON.data === 'object'
        ) {
          productsData = Object.values(responseJSON.data);
        } else {
          console.warn(
            'Expected an array of products but received:',
            responseJSON?.data
          );
        }

        console.log('Final products data:', productsData);
        setProducts(productsData);
      } catch (err) {
        console.error('Error fetching products:', err);
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
    setProducts((prevProducts) => {
      if (!Array.isArray(prevProducts)) {
        console.warn(
          'Products state is not an array; skipping local update.',
          prevProducts
        );
        return prevProducts;
      }

      return prevProducts.map((p) =>
        p.id === productId ? { ...p, ...updatedData } : p
      );
    });
    handleCloseModal();
  };

  if (loading) {
    return <div className={styles.loading}>Loading products...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  const safeProducts = Array.isArray(products) ? products : [];

  return (
    <div className={styles.productListContainer}>
      <h2 className={styles.title}>Meus produtos</h2>
      {safeProducts.length === 0 ? (
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
            {safeProducts.map((product) => (
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
